import { Search, Bell, Settings, Sparkles, TrendingUp, Target, Calendar, ChevronDown } from 'lucide-react';

interface TopNavProps {
  activeView: string;
  onViewChange: (view: string) => void;
  onQuickPrompt?: (prompt: string) => void;
}

export default function TopNav({ activeView, onViewChange }: TopNavProps) {
  const mainNavItems = [
    { id: 'command-center', label: 'Command', icon: Sparkles },
    { id: 'daily-brief', label: 'Daily Brief', icon: Calendar },
    { id: 'decisions', label: 'Decisions', icon: Target },
    { id: 'insights', label: 'Insights', icon: TrendingUp },
    { id: 'strategy', label: 'Strategy', icon: Target },
  ];

  return (
    <div className="h-14 bg-white/80 backdrop-blur-sm border-b border-slate-200/60 flex items-center justify-between px-6 flex-shrink-0">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-lg flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <h1 className="text-sm text-slate-900 tracking-tight">Executive Engine</h1>
        </div>

        <nav className="flex items-center gap-1">
          {mainNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;

            return (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id)}
                className={`flex items-center gap-1.5 px-3 h-8 rounded-md text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}

          <div className="relative group">
            <button className="flex items-center gap-1.5 px-3 h-8 rounded-md text-xs font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all">
              <span>More</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </button>

            <div className="absolute top-full left-0 mt-1.5 w-48 bg-white border border-slate-200/60 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              <div className="p-1.5">
                {[
                  { id: 'team-pulse', label: 'Team Pulse' },
                  { id: 'financials', label: 'Financials' },
                  { id: 'meetings', label: 'Meeting Prep' },
                  { id: 'risk-monitor', label: 'Risk Monitor' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onViewChange(item.id)}
                    className={`w-full text-left px-2.5 py-1.5 rounded-md text-xs transition-all ${
                      activeView === item.id
                        ? 'bg-slate-900 text-white'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="flex items-center gap-2.5">
        <div className="relative">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search..."
            className="w-56 h-8 pl-8 pr-3 bg-slate-50/50 border border-slate-200/60 rounded-md text-xs placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-slate-300 focus:ring-2 focus:ring-slate-900/5 transition-all"
          />
        </div>

        <button className="relative w-8 h-8 flex items-center justify-center rounded-md hover:bg-slate-100 transition-colors">
          <Bell className="w-4 h-4 text-slate-500" />
          <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-violet-500 rounded-full ring-2 ring-white"></span>
        </button>

        <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-slate-100 transition-colors">
          <Settings className="w-4 h-4 text-slate-500" />
        </button>

        <div className="w-7 h-7 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-md flex items-center justify-center text-white text-xs font-medium cursor-pointer hover:shadow-sm transition-shadow">
          WW
        </div>
      </div>
    </div>
  );
}
