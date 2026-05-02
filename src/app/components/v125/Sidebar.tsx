import { Command, FileText, Target, Calendar, Folder, Lightbulb, BookOpen, User, Shield } from 'lucide-react';

export default function Sidebar() {
  const navItems = [
    { id: 'command', label: 'Command', icon: Command, active: true },
    { id: 'daily-brief', label: 'Daily Brief', icon: FileText },
    { id: 'decisions', label: 'Decisions', icon: Target },
    { id: 'meeting-prep', label: 'Meeting Prep', icon: Calendar },
    { id: 'personal', label: 'Personal / Misc', icon: Folder },
    { id: 'content-studio', label: 'Content Studio', icon: Lightbulb },
    { id: 'learning', label: 'Learning', icon: BookOpen },
    { id: 'profile', label: 'Your Profile', icon: User },
  ];

  return (
    <aside className="w-56 bg-slate-900 flex flex-col border-r border-slate-800">
      <div className="p-4 border-b border-slate-800">
        <div className="flex items-center gap-2 px-2.5 py-1.5 bg-slate-800 rounded-md">
          <Shield className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-xs font-medium text-white">V125</span>
          <div className="w-px h-3 bg-slate-700" />
          <span className="text-xs text-slate-400">Stability Lock</span>
        </div>
      </div>

      <nav className="flex-1 p-3 overflow-auto">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-md text-sm transition-colors mb-0.5 ${
                item.active
                  ? 'bg-slate-800 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
