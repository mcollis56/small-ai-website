
import { NextRequest, NextResponse } from 'next/server';
import { generateQuoteTool, callPdfService } from '@/lib/tools';

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const { messages, stream = true } = await request.json();

    if (!process.env.ABACUSAI_API_KEY) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    const systemMessage = {
      role: 'system',
      content: `You are a professional AI Solution Consultant for Small AI, specializing in helping small businesses implement transformative AI solutions. Your responses should be clear, complete, professional, and comprehensive.

COMMUNICATION STYLE:
- Always provide complete, well-structured responses
- Use professional but friendly language
- Ask thoughtful follow-up questions to understand business needs
- Provide specific, actionable recommendations
- Ensure all responses are grammatically correct and error-free

CORE AI SERVICES YOU OFFER:
- AI Chatbots for customer service and support automation
- Process automation and workflow optimization
- Data analysis and business intelligence solutions
- Predictive analytics and forecasting systems
- Content generation and marketing automation
- Inventory management and supply chain optimization
- Customer relationship management (CRM) automation
- Document processing and automation

INDUSTRY SPECIALIZATIONS:
- Restaurants & Food Service: Menu optimization, order management, customer service automation
- Retail & E-commerce: Inventory management, customer recommendations, price optimization
- Professional Services: Appointment scheduling, client management, document automation
- Healthcare: Appointment scheduling, patient communication, records management
- Manufacturing: Quality control, predictive maintenance, supply chain optimization
- Real Estate: Lead management, property matching, customer communication

IMPLEMENTATION PROCESS:
1. Comprehensive business assessment and AI readiness evaluation
2. Custom solution design tailored to specific business needs
3. Seamless integration with existing systems and workflows
4. Comprehensive staff training and change management support
5. Ongoing monitoring, support, and optimization services

QUOTE GENERATION PROTOCOL:
When users request quotes or estimates, gather these essential details:
- Customer/business name
- Industry and business type
- Specific AI services required
- Current business challenges and pain points
- Project scope, timeline, and budget considerations
- Expected outcomes and ROI requirements
- Integration requirements with existing systems

Then use the generate_quote_pdf tool to create a professional PDF quote with detailed line items and competitive pricing.

INTERACTION GUIDELINES:
- Always maintain a professional, consultative tone
- Provide complete responses without truncation
- Ask clarifying questions to better understand business needs
- Offer specific examples relevant to their industry
- Focus on value proposition and return on investment
- Be helpful and solution-oriented in every interaction`
    };

    const allMessages = [systemMessage, ...messages];

    const response = await fetch('https://apps.abacus.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.ABACUSAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4.1-mini',
        messages: allMessages,
        stream: stream,
        max_tokens: 4000,
        tools: [
          {
            type: 'function',
            function: generateQuoteTool
          }
        ],
        tool_choice: 'auto'
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('LLM API Error:', errorText);
      return NextResponse.json(
        { error: 'Failed to get AI response' },
        { status: 500 }
      );
    }

    if (stream) {
      const encoder = new TextEncoder();
      const readable = new ReadableStream({
        async start(controller) {
          try {
            const reader = response.body?.getReader();
            if (!reader) {
              controller.close();
              return;
            }

            let buffer = '';
            let streamComplete = false;
            
            while (true) {
              const { done, value } = await reader.read();
              if (done) {
                // Stream ended naturally
                if (!streamComplete) {
                  controller.enqueue(encoder.encode('data: [DONE]\n\n'));
                }
                controller.close();
                return;
              }

              const chunk = new TextDecoder().decode(value, { stream: true });
              buffer += chunk;
              
              // Process complete lines from buffer
              const lines = buffer.split('\n');
              buffer = lines.pop() || ''; // Keep incomplete line in buffer

              for (const line of lines) {
                if (line.startsWith('data: ')) {
                  const data = line.slice(6).trim();
                  if (data === '[DONE]') {
                    streamComplete = true;
                    controller.enqueue(encoder.encode('data: [DONE]\n\n'));
                    controller.close();
                    return;
                  }

                  if (data && data !== '') {
                    try {
                      const parsed = JSON.parse(data);
                      const choice = parsed.choices?.[0];
                      
                      if (choice?.delta?.tool_calls) {
                        // Handle tool calls
                        const toolCall = choice.delta.tool_calls[0];
                        if (toolCall?.function?.name === 'generate_quote') {
                          try {
                            const args = JSON.parse(toolCall.function.arguments);
                            const result = await callPdfService(
                              args.customerName,
                              args.lineItemsDescription,
                              args.totalCost
                            );
                            
                            if (result.success) {
                              controller.enqueue(encoder.encode(`data: ${JSON.stringify({
                                content: `\n\n✅ **Quote Generated Successfully!**\n\nI've created a professional PDF quote for ${args.customerName}.\n\n**Quote Details:**\n- Total Cost: $${args.totalCost}\n- Services: ${args.lineItemsDescription}\n\n📄 **[Download Your Quote](${result.pdfUrl})**\n\nThe quote is ready for download. You can save it, print it, or share it directly with your customer.`
                              })}\n\n`));
                            } else {
                              controller.enqueue(encoder.encode(`data: ${JSON.stringify({
                                content: `\n\n❌ **Quote Generation Failed**\n\nI'm sorry, but I couldn't generate the PDF quote at this time. ${result.error || 'Please try again later or contact support.'}`
                              })}\n\n`));
                            }
                          } catch (error) {
                            console.error('Tool execution error:', error);
                            controller.enqueue(encoder.encode(`data: ${JSON.stringify({
                              content: `\n\n❌ **Quote Generation Error**\n\nThere was an error processing your quote request. Please try again or contact support.`
                            })}\n\n`));
                          }
                        }
                      } else if (choice?.delta?.content) {
                        // Handle regular content
                        controller.enqueue(encoder.encode(`data: ${JSON.stringify({
                          content: choice.delta.content
                        })}\n\n`));
                      }
                      
                      // Check if this is a finish_reason indicating completion
                      if (choice?.finish_reason) {
                        streamComplete = true;
                        controller.enqueue(encoder.encode('data: [DONE]\n\n'));
                        controller.close();
                        return;
                      }
                    } catch (e) {
                      // Skip invalid JSON
                      console.warn('Invalid JSON in stream:', data);
                    }
                  }
                }
              }
            }
            controller.close();
          } catch (error) {
            console.error('Streaming error:', error);
            controller.error(error);
          }
        }
      });

      return new Response(readable, {
        headers: {
          'Content-Type': 'text/plain; charset=utf-8',
          'Cache-Control': 'no-cache',
        },
      });
    }

    // Non-streaming response (fallback)
    const data = await response.json();
    return NextResponse.json(data);

  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
