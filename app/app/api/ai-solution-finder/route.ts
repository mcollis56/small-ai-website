
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();

    // If this is the first request (only system message or empty), return the exact first message
    if (!messages || messages.length === 0) {
      return NextResponse.json({
        message: "Hello! I can help you find the right AI solution for your business. To get started, could you please tell me a bit about your business and your primary goal?"
      });
    }

    if (!process.env.ABACUSAI_API_KEY) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    // Get the last user message
    const userMessage = messages[messages.length - 1];
    if (!userMessage || userMessage.role !== 'user') {
      return NextResponse.json(
        { error: 'Invalid message format' },
        { status: 400 }
      );
    }

    const systemMessage = {
      role: 'system',
      content: `You are an AI Solution Consultant for Small AI. Your job is to analyze what the user tells you about their business and suggest 2-3 relevant AI solutions from these specific services:

1. **$99 Basic AI Setup** - Perfect for small businesses getting started with AI. Includes basic chatbot setup, simple process automation, and basic customer service tools.

2. **$299 Purpose Built Agent** - Custom AI solutions for specific business needs. Includes advanced chatbots, workflow automation, data analysis tools, and industry-specific features.

3. **$499 Complete AI Transformation** - Comprehensive AI implementation for businesses ready to fully embrace AI. Includes multiple AI solutions, advanced automation, predictive analytics, and ongoing support.

Based on what the user tells you about their business and goals, suggest 2-3 of these services that would be most relevant. Explain why each service fits their needs and what specific benefits they would get.

Keep responses professional, clear, and focused on these exact three services. Don't mention any other pricing or services.

User's business info: "${userMessage.content}"`
    };

    const response = await fetch('https://apps.abacus.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.ABACUSAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-4.1-mini',
        messages: [systemMessage],
        max_tokens: 1000,
        temperature: 0.7
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

    const data = await response.json();
    const aiMessage = data.choices?.[0]?.message?.content;

    if (!aiMessage) {
      return NextResponse.json(
        { error: 'No response from AI' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      message: aiMessage
    });

  } catch (error) {
    console.error('AI Solution Finder API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
