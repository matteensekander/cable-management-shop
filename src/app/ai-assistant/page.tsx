'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const suggestedPrompts = [
  "What kit do I need for a 3-monitor setup?",
  "How do I hide cables under my desk?",
  "What's the difference between a raceway and a sleeve?",
  "I have a standing desk, what do you recommend?",
  "What's the best starter bundle?",
];

export default function AIAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isStreaming, setIsStreaming] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (content: string) => {
    if (!content.trim() || isStreaming) return;

    const userMessage: Message = { role: 'user', content: content.trim() };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputValue('');
    setIsStreaming(true);

    // Add empty assistant message to stream into
    setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const reader = response.body!.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const updated = [...prev];
          const last = updated[updated.length - 1];
          if (last.role === 'assistant') {
            updated[updated.length - 1] = {
              ...last,
              content: last.content + chunk,
            };
          }
          return updated;
        });
      }
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        const last = updated[updated.length - 1];
        if (last.role === 'assistant' && last.content === '') {
          updated[updated.length - 1] = {
            ...last,
            content: "Sorry, I'm having trouble connecting right now. Please check that your API key is configured and try again.",
          };
        }
        return updated;
      });
    } finally {
      setIsStreaming(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(inputValue);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-6 h-[calc(100vh-200px)] min-h-[500px]">

        {/* Left panel */}
        <div className="md:w-[380px] flex-shrink-0 flex flex-col">
          <div className="bg-white border border-[#E8E6E1] rounded-[4px] p-6 flex-1 md:flex-none">
            {/* Avatar */}
            <div className="w-14 h-14 bg-[#1C1C1C] rounded-full flex items-center justify-center mb-5">
              <span className="text-white font-bold text-xl">C</span>
            </div>

            <h2 className="text-xl font-bold text-[#1C1C1C] mb-2">Meet Cleo</h2>
            <p className="text-sm text-[#666] leading-relaxed mb-6">
              Your cable management expert. Tell me about your desk setup and I&apos;ll recommend exactly what you need.
            </p>

            {/* Suggested prompts */}
            <div>
              <p className="text-xs uppercase tracking-widest text-[#888] font-medium mb-3">
                Try asking
              </p>
              <div className="flex flex-col gap-2">
                {suggestedPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => sendMessage(prompt)}
                    disabled={isStreaming}
                    className="text-left text-sm text-[#1C1C1C] border border-[#E8E6E1] rounded px-3 py-2.5 hover:border-[#1C1C1C] hover:bg-[#F8F7F4] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right panel: Chat */}
        <div className="flex-1 flex flex-col bg-white border border-[#E8E6E1] rounded-[4px] overflow-hidden min-h-[400px]">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {messages.length === 0 && (
              <div className="flex items-center justify-center h-full">
                <div className="text-center">
                  <div className="w-12 h-12 bg-[#F0EEE9] rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-[#888] font-bold">C</span>
                  </div>
                  <p className="text-sm text-[#888]">
                    Hi! I&apos;m Cleo. Ask me anything about organizing your desk setup.
                  </p>
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-7 h-7 bg-[#1C1C1C] rounded-full flex items-center justify-center mr-2 flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">C</span>
                  </div>
                )}
                <div
                  className={`max-w-[85%] rounded-[4px] px-4 py-3 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-[#1C1C1C] text-white'
                      : 'bg-[#F8F7F4] border border-[#E8E6E1] text-[#1C1C1C]'
                  }`}
                >
                  {msg.content === '' && msg.role === 'assistant' ? (
                    /* Typing indicator */
                    <div className="flex items-center gap-1 py-1">
                      <span className="w-1.5 h-1.5 bg-[#888] rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-1.5 h-1.5 bg-[#888] rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-1.5 h-1.5 bg-[#888] rounded-full animate-bounce" />
                    </div>
                  ) : (
                    <span className="whitespace-pre-wrap">{msg.content}</span>
                  )}
                </div>
              </div>
            ))}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t border-[#E8E6E1] p-4">
            <form onSubmit={handleSubmit} className="flex gap-3 items-end">
              <textarea
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask Cleo about your desk setup..."
                rows={1}
                disabled={isStreaming}
                className="flex-1 resize-none border border-[#E8E6E1] rounded px-3 py-2.5 text-sm text-[#1C1C1C] placeholder:text-[#AAA] focus:outline-none focus:border-[#1C1C1C] transition-colors disabled:opacity-50 bg-white"
                style={{ minHeight: '42px', maxHeight: '120px' }}
                onInput={(e) => {
                  const el = e.currentTarget;
                  el.style.height = 'auto';
                  el.style.height = Math.min(el.scrollHeight, 120) + 'px';
                }}
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || isStreaming}
                className="bg-[#1C1C1C] hover:bg-[#333] disabled:bg-[#C8C6C1] text-white px-4 py-2.5 rounded text-sm font-medium transition-colors flex-shrink-0 disabled:cursor-not-allowed"
              >
                Send
              </button>
            </form>
            <p className="text-xs text-[#AAA] mt-2 text-center">
              Shift+Enter for new line
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
