
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = "force-dynamic";

interface QuoteRequest {
  customer_name: string;
  lineItemsDescription: string;
  total_cost: string;
}

function generatePdfContent(customerName: string, lineItemsDescription: string, totalCost: string): string {
  const currentDate = new Date().toLocaleDateString();
  const currentTime = new Date().toLocaleTimeString();
  
  // Create a simple HTML template for PDF conversion
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Quote for ${customerName}</title>
      <style>
        body { 
          font-family: Arial, sans-serif; 
          margin: 40px;
          line-height: 1.6;
        }
        .header { 
          text-align: center; 
          margin-bottom: 30px;
          border-bottom: 3px solid #FFE36E;
          padding-bottom: 20px;
        }
        .company-name { 
          font-size: 24px; 
          font-weight: bold; 
          color: #0D0D0D;
          margin-bottom: 10px;
        }
        .quote-title { 
          font-size: 18px; 
          color: #666;
        }
        .customer-info { 
          margin: 30px 0;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 5px;
        }
        .line-items { 
          margin: 30px 0;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 5px;
        }
        .line-items-content { 
          white-space: pre-wrap;
          font-family: Arial, sans-serif;
          line-height: 1.8;
          margin: 15px 0;
        }
        .total-section { 
          margin: 30px 0;
          padding: 20px;
          background-color: #f0f0f0;
          border-radius: 5px;
          text-align: right;
        }
        .total-amount { 
          font-size: 24px; 
          font-weight: bold; 
          color: #0D0D0D;
          margin-top: 10px;
        }
        .footer { 
          margin-top: 50px;
          text-align: center;
          font-size: 12px;
          color: #666;
          border-top: 1px solid #ddd;
          padding-top: 20px;
        }
        .contact-info { 
          margin: 20px 0;
          text-align: center;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="company-name">Small AI</div>
        <div class="quote-title">Professional Quote</div>
      </div>
      
      <div class="customer-info">
        <h3>Quote for: ${customerName}</h3>
        <p><strong>Date:</strong> ${currentDate}</p>
        <p><strong>Time:</strong> ${currentTime}</p>
      </div>
      
      <div class="line-items">
        <h3>Quote Details:</h3>
        <div class="line-items-content">${lineItemsDescription}</div>
      </div>
      
      <div class="total-section">
        <div class="total-amount">Total Cost: $${totalCost}</div>
      </div>
      
      <div class="contact-info">
        <p><strong>Thank you for your business!</strong></p>
        <p>Contact: info@small-ai.com</p>
      </div>
      
      <div class="footer">
        <p>Generated on ${currentDate} at ${currentTime}</p>
        <p>Small AI - AI Solutions for Small Businesses</p>
      </div>
    </body>
    </html>
  `;
  
  return htmlContent;
}

export async function POST(request: NextRequest) {
  try {
    const body: QuoteRequest = await request.json();
    
    const { customer_name, lineItemsDescription, total_cost } = body;
    
    // Validate required fields
    if (!customer_name) {
      return NextResponse.json(
        { error: 'Customer name is required' },
        { status: 400 }
      );
    }
    
    if (!lineItemsDescription) {
      return NextResponse.json(
        { error: 'Line items description is required' },
        { status: 400 }
      );
    }
    
    if (!total_cost) {
      return NextResponse.json(
        { error: 'Total cost is required' },
        { status: 400 }
      );
    }
    
    // Generate HTML content
    const htmlContent = generatePdfContent(customer_name, lineItemsDescription, total_cost);
    
    // Create a data URL for the HTML content
    const htmlBase64 = Buffer.from(htmlContent).toString('base64');
    const dataUrl = `data:text/html;base64,${htmlBase64}`;
    
    // For now, we'll return the HTML content as a downloadable file
    // In a production environment, you would use a proper PDF library
    const filename = `quote_${customer_name.replace(/\s+/g, '_')}_${new Date().toISOString().slice(0, 10)}.html`;
    
    return NextResponse.json({
      success: true,
      pdf_base64: htmlBase64,
      download_url: dataUrl,
      filename: filename,
      content_type: 'text/html'
    });
    
  } catch (error) {
    console.error('Error generating quote:', error);
    return NextResponse.json(
      { 
        error: 'Failed to generate quote',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
