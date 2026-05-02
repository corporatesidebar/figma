import { useState } from 'react';
import { Play } from 'lucide-react';

interface CommandInputProps {
  onSubmit: (input: string) => void;
  isRunning: boolean;
}

export default function CommandInput({ onSubmit, isRunning }: CommandInputProps) {
  const [input, setInput] = useState('');
  const [mode, setMode] = useState('execute');

  const modes = [
    { id: 'execute', label: 'Execute' },
    { id: 'decide', label: 'Decide' },
    { id: 'plan', label: 'Plan' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isRunning) {
      onSubmit(input.trim());
    }
  };

  return (
    <div className="mb-12">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-slate-900 tracking-tight mb-2">
          Today's Command Center
        </h1>
        <p className="text-sm text-slate-500">
          Run decisions, actions, and execution from one input.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="What needs to happen..."
            className="w-full px-5 py-4 text-sm text-slate-900 placeholder:text-slate-400 border border-slate-200 rounded-lg focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 resize-none transition-colors"
            rows={4}
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
                className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
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
            className="flex items-center gap-2 px-5 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isRunning ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Running
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
  );
}
