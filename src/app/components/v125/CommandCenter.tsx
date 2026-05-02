import { useState } from 'react';
import { Play, CheckCircle2, Zap, Target } from 'lucide-react';

interface CommandCenterProps {
  onSubmit: (input: string) => void;
  isRunning: boolean;
}

export default function CommandCenter({ onSubmit, isRunning }: CommandCenterProps) {
  const [input, setInput] = useState('');
  const [mode, setMode] = useState('execute');

  const modes = [
    { id: 'execute', label: 'Execute' },
    { id: 'decide', label: 'Decide' },
    { id: 'plan', label: 'Plan' },
  ];

  const quickStarts = [
    { icon: CheckCircle2, title: 'Validate the system', desc: 'Run system health check' },
    { icon: Zap, title: 'Clean execution loop', desc: 'Optimize workflow' },
    { icon: Target, title: 'Improve output quality', desc: 'Enhance precision' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isRunning) {
      onSubmit(input.trim());
    }
  };

  return (
    <div className="mb-10">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-slate-900 tracking-tight mb-1">
          Today's Command Center
        </h1>
        <p className="text-sm text-slate-500">
          Run your day from one input.
        </p>
      </div>

      <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm mb-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="What needs to happen? Describe the situation, decision, or action..."
              className="w-full px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 border border-slate-200 rounded-lg focus:outline-none focus:border-slate-900 focus:ring-2 focus:ring-slate-900/10 resize-none transition-all"
              rows={5}
              disabled={isRunning}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {modes.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setMode(m.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    mode === m.id
                      ? 'bg-slate-900 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>

            <button
              type="submit"
              disabled={isRunning || !input.trim()}
              className="flex items-center gap-2 px-6 py-2.5 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm"
            >
              {isRunning ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Running Engine
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  Run Engine
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Quick Start Cards */}
      <div className="grid grid-cols-3 gap-4">
        {quickStarts.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={index}
              className="bg-white border border-slate-200 rounded-lg p-4 hover:border-slate-300 hover:shadow-sm transition-all text-left"
            >
              <Icon className="w-5 h-5 text-slate-600 mb-2" />
              <h3 className="text-sm font-medium text-slate-900 mb-1">{item.title}</h3>
              <p className="text-xs text-slate-500">{item.desc}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
