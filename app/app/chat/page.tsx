
import ChatInterface from '@/components/chat-interface';

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">AI Assistant</h1>
            <p className="text-gray-600">Ask me about AI services or request a quote for your business</p>
          </div>
          <ChatInterface />
        </div>
      </div>
    </div>
  );
}
