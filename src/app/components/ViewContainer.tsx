import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface ViewContainerProps {
  children: ReactNode;
  title: string;
  description?: string;
  icon?: LucideIcon;
  actions?: ReactNode;
}

export default function ViewContainer({
  children,
  title,
  description,
  icon: Icon,
  actions,
}: ViewContainerProps) {
  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden bg-white rounded-xl border border-slate-200/60 shadow-sm">
      <header className="border-b border-slate-100 px-6 py-4 flex-shrink-0">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            {Icon && (
              <div className="w-9 h-9 bg-gradient-to-br from-violet-500 to-indigo-600 rounded-lg flex items-center justify-center">
                <Icon className="w-5 h-5 text-white" />
              </div>
            )}
            <div>
              <h1 className="text-lg text-slate-900 mb-0.5">{title}</h1>
              {description && <p className="text-xs text-slate-500">{description}</p>}
            </div>
          </div>
          {actions && <div className="flex items-center gap-2">{actions}</div>}
        </div>
      </header>
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
}
