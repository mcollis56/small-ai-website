
import axios from 'axios';

export async function callPdfService(customerName: string, lineItemsDescription: string, totalCost: string): Promise<{success: boolean, pdfUrl?: string, error?: string}> {
  try {
    const response = await axios.post('/api/generate-quote', {
      customer_name: customerName,
      lineItemsDescription: lineItemsDescription,
      total_cost: totalCost
    }, {
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: 30000
    });

    if (response.data && response.data.success) {
      // Create a blob URL for download
      const { pdf_base64, download_url, filename } = response.data;
      
      // Create a downloadable blob URL
      const blobUrl = download_url || `data:text/html;base64,${pdf_base64}`;
      
      return {
        success: true,
        pdfUrl: blobUrl
      };
    } else {
      return {
        success: false,
        error: response.data?.error || 'PDF service did not return a valid response'
      };
    }
  } catch (error) {
    console.error('PDF service error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to generate PDF quote'
    };
  }
}

export const generateQuoteTool = {
  name: 'generate_quote',
  description: 'Generate a professional PDF quote for a customer with line items and total cost',
  parameters: {
    type: 'object',
    properties: {
      customerName: {
        type: 'string',
        description: 'The name of the customer requesting the quote'
      },
      lineItemsDescription: {
        type: 'string',
        description: 'Detailed description of all services and products included in the quote. Include quantities, prices, and descriptions in a clear format.'
      },
      totalCost: {
        type: 'string',
        description: 'Total cost of all items in the quote (as a string, e.g., "1500.00")'
      }
    },
    required: ['customerName', 'lineItemsDescription', 'totalCost']
  }
};
