import React, { useState } from 'react';
import { MessageSquare, Send, X, Bot, Sparkles, Loader2 } from 'lucide-react';
import { getMarketInsights } from '../services/gemini';

const MarketAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    { role: 'bot', text: "Welcome to LIQUIDHEROX. I'm your trade analysis assistant. How can I help you navigate the markets today?" }
  ]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const botResponse = await getMarketInsights(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: botResponse || "Sorry, I encountered an error. Please try again." }]);
    setLoading(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-[80] w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 group"
      >
        <Bot size={28} />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500"></span>
        </span>
      </button>

      {isOpen && (
        <div className="fixed bottom-24 left-6 z-[120] w-[350px] sm:w-[400px] h-[500px] bg-[#0f0f0f] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-10 duration-300">
          <div className="p-4 hero-gradient flex items-center justify-between">
            <div className="flex items-center gap-2 text-white">
              <Bot size={20} />
              <span className="font-bold">LIQUIDHEROX AI</span>
              <Sparkles size={14} className="animate-pulse" />
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/60 hover:text-white">
              <X size={20} />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-blue-600 text-white' : 'bg-white/5 text-white border border-white/10'}`}>
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white/5 text-white border border-white/10 p-3 rounded-2xl">
                  <Loader2 size={16} className="animate-spin text-blue-400" />
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/10 bg-black/50">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Ask about assets..."
                className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-3 pr-12 text-sm text-white focus:outline-none focus:border-blue-500/50"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSend()}
              />
              <button 
                onClick={handleSend}
                className="absolute right-2 top-1.5 p-2 text-blue-400 hover:text-blue-300 disabled:opacity-50"
                disabled={loading}
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MarketAssistant;