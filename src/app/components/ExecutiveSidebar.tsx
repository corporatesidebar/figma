import { Command, FileText, Calendar, Target, Lightbulb, Shield, TrendingUp, Folder, FileUp, Users, DollarSign, Briefcase, Clock } from 'lucide-react';

interface ExecutiveSidebarProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

export default function ExecutiveSidebar({ activeView, onViewChange }: ExecutiveSidebarProps) {
  const commandNav = [
    { id: 'command-center', label: 'Command Center', icon: Command },
    { id: 'daily-brief', label: 'Daily Brief', icon: FileText },
    { id: 'decisions', label: 'Decisions', icon: Target },
    { id: 'meetings', label: 'Meeting Prep', icon: Calendar },
  ];

  const intelligenceNav = [
    { id: 'insights', label: 'Insights', icon: Lightbulb },
    { id: 'strategy', label: 'Strategy Board', icon: TrendingUp },
    { id: 'risk-monitor', label: 'Risk Monitor', icon: Shield },
    { id: 'team-pulse', label: 'Team Pulse', icon: Users },
    { id: 'financials', label: 'Financial Snapshot', icon: DollarSign },
  ];

  const resourcesNav = [
    { id: 'projects', label: 'Active Projects', icon: Briefcase },
    { id: 'files', label: 'Files', icon: Folder },
    { id: 'notes', label: 'Notes', icon: FileText },
    { id: 'upload', label: 'Upload Context', icon: FileUp },
  ];

  const NavSection = ({ title, items }: { title: string; items: typeof commandNav }) => {
    const badges: Record<string, number> = {
      'decisions': 2,
      'daily-brief': 3,
      'risk-monitor': 4,
    };

    return (
      <div className="mb-6">
        <h4 className="px-4 mb-2 text-xs uppercase tracking-wider text-slate-400">{title}</h4>
        <ul className="space-y-0.5">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;
            const badgeCount = badges[item.id];

            return (
              <li key={item.id}>
                <button
                  onClick={() => onViewChange(item.id)}
                  className={`w-full flex items-center justify-between gap-3 px-4 py-2.5 text-sm transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </div>
                  {badgeCount && !isActive && (
                    <span className="w-5 h-5 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center">
                      {badgeCount}
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };

  return (
    <aside className="w-64 bg-slate-900 flex flex-col h-full border-r border-slate-800">
      <div className="p-6 border-b border-slate-800">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
            <Command className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-white text-sm">Executive Engine OS</h1>
          </div>
        </div>
        <p className="text-xs text-slate-400">Decision-ready execution system</p>
      </div>

      <nav className="flex-1 p-4 overflow-auto">
        <NavSection title="Command" items={commandNav} />
        <NavSection title="Intelligence" items={intelligenceNav} />
        <NavSection title="Resources" items={resourcesNav} />
      </nav>

      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3 px-3 py-3 bg-slate-800 rounded-lg">
          <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white text-sm">
            WW
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-sm text-white">Executive Mode</div>
            <div className="text-xs text-slate-400">Decision-ready</div>
          </div>
        </div>
      </div>
    </aside>
  );
}
