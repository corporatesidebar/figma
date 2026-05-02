import { useState } from 'react';
import { Zap, AlertCircle } from 'lucide-react';

interface Message {
  id: number;
  type: 'user' | 'ai';
  content?: string;
  nextMove?: string;
  decision?: string;
  actions?: string[];
  risk?: string;
  priority?: string;
  timestamp: Date;
}

interface CommandCenterProps {
  messages: Message[];
  onSubmit: (input: string) => void;
}

export default function CommandCenter({ messages, onSubmit }: CommandCenterProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSubmit(input);
      setInput('');
    }
  };

  const quickPrompts = [
    'Decide what to focus on this week',
    'Prepare for a meeting',
    'Turn an idea into action',
  ];

  return (
    <main className="flex-1 flex flex-col h-full overflow-hidden bg-white rounded-xl border border-slate-200/60 shadow-sm">
      <header className="border-b border-slate-100 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg text-slate-900">Command Center</h2>
            <p className="text-xs text-slate-500 mt-0.5">Decision-ready execution</p>
          </div>
          <div className="flex items-center gap-2 px-2.5 py-1 bg-emerald-50/50 border border-emerald-200/60 rounded-md">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-emerald-700">Active</span>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-auto">
        {messages.length === 0 ? (
          <div className="max-w-2xl mx-auto px-6 py-16">
            <div className="text-center mb-10">
              <h1 className="text-2xl text-slate-900 mb-2">
                What needs to happen?
              </h1>
              <p className="text-sm text-slate-500 max-w-lg mx-auto">
                Share the situation. I'll turn it into clear decisions, next moves, and priorities.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mb-6">
              <div className="relative bg-white border border-slate-200/60 rounded-lg shadow-sm hover:border-slate-300 focus-within:border-slate-900 focus-within:ring-2 focus-within:ring-slate-900/5 transition-all">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                      handleSubmit(e);
                    }
                  }}
                  placeholder="Describe what needs to get done, decided, or prepared..."
                  className="w-full px-4 py-3 resize-none focus:outline-none text-sm text-slate-900 placeholder:text-slate-400 bg-transparent"
                  rows={4}
                />
                <div className="flex items-center justify-between px-3 py-2 border-t border-slate-100">
                  <div className="text-xs text-slate-400">
                    <kbd className="px-1.5 py-0.5 bg-slate-50 border border-slate-200 rounded text-xs">⌘</kbd> + <kbd className="px-1.5 py-0.5 bg-slate-50 border border-slate-200 rounded text-xs">Enter</kbd>
                  </div>
                  <button
                    type="submit"
                    className="flex items-center gap-1.5 px-4 py-1.5 bg-slate-900 text-white text-xs font-medium rounded-md hover:bg-slate-800 transition-all"
                  >
                    <Zap className="w-3.5 h-3.5" />
                    Submit
                  </button>
                </div>
              </div>
            </form>

            <div>
              <p className="text-xs text-slate-400 mb-2">Quick start:</p>
              <div className="flex flex-wrap gap-2">
                {quickPrompts.map((prompt, index) => (
                  <button
                    key={index}
                    onClick={() => setInput(prompt)}
                    className="px-3 py-1.5 bg-slate-50 border border-slate-200/60 rounded-md text-xs text-slate-600 hover:bg-slate-100 hover:border-slate-300 transition-colors"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto px-6 py-6 space-y-4">
            {messages.map((message) => (
              <div key={message.id}>
                {message.type === 'user' ? (
                  <div className="flex justify-end mb-3">
                    <div className="max-w-lg bg-slate-100 rounded-lg px-4 py-2.5">
                      <p className="text-sm text-slate-900">{message.content}</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {message.nextMove && (
                      <div className="bg-amber-50 border border-amber-200/60 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Zap className="w-4 h-4 text-amber-600" />
                          <h3 className="text-sm font-medium text-amber-900">Next Move</h3>
                        </div>
                        <p className="text-sm text-amber-800/90">{message.nextMove}</p>
                      </div>
                    )}

                    {message.decision && (
                      <div className="bg-white border border-slate-200/60 rounded-lg p-4">
                        <h3 className="text-sm font-medium text-slate-900 mb-2">Decision</h3>
                        <p className="text-sm text-slate-600">{message.decision}</p>
                      </div>
                    )}

                    {message.actions && message.actions.length > 0 && (
                      <div className="bg-white border border-slate-200/60 rounded-lg p-4">
                        <h3 className="text-sm font-medium text-slate-900 mb-3">Action Items</h3>
                        <ul className="space-y-2">
                          {message.actions.map((action, index) => (
                            <li key={index} className="flex items-start gap-2.5">
                              <div className="w-5 h-5 bg-slate-100 text-slate-700 rounded flex items-center justify-center text-xs font-medium flex-shrink-0 mt-0.5">
                                {index + 1}
                              </div>
                              <span className="text-sm text-slate-600 flex-1">{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {message.risk && (
                      <div className="bg-rose-50 border border-rose-200/60 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <AlertCircle className="w-4 h-4 text-rose-600" />
                          <h3 className="text-sm font-medium text-rose-900">Risk</h3>
                        </div>
                        <p className="text-sm text-rose-800/90">{message.risk}</p>
                      </div>
                    )}

                    {message.priority && (
                      <div className="bg-emerald-50 border border-emerald-200/60 rounded-lg p-4">
                        <h3 className="text-sm font-medium text-emerald-900 mb-1.5">Priority</h3>
                        <p className="text-sm text-emerald-800/90">{message.priority}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}

            <form onSubmit={handleSubmit} className="sticky bottom-0 pt-3 pb-6">
              <div className="relative bg-white border border-slate-200/60 rounded-lg shadow-sm hover:border-slate-300 focus-within:border-slate-900 focus-within:ring-2 focus-within:ring-slate-900/5 transition-all">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
                      handleSubmit(e);
                    }
                  }}
                  placeholder="Continue..."
                  className="w-full px-4 py-3 resize-none focus:outline-none text-sm text-slate-900 placeholder:text-slate-400 bg-transparent"
                  rows={2}
                />
                <div className="flex items-center justify-between px-3 py-2 border-t border-slate-100">
                  <div className="text-xs text-slate-400">
                    <kbd className="px-1.5 py-0.5 bg-slate-50 border border-slate-200 rounded text-xs">⌘</kbd> + <kbd className="px-1.5 py-0.5 bg-slate-50 border border-slate-200 rounded text-xs">Enter</kbd>
                  </div>
                  <button
                    type="submit"
                    className="flex items-center gap-1.5 px-4 py-1.5 bg-slate-900 text-white text-xs font-medium rounded-md hover:bg-slate-800 transition-all"
                  >
                    <Zap className="w-3.5 h-3.5" />
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        )}
      </div>
    </main>
  );
}
