import { Shield } from 'lucide-react';

export default function VersionBadge() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-900 text-white rounded-lg">
          <Shield className="w-4 h-4" />
          <span className="text-sm font-medium">V125</span>
          <div className="w-px h-4 bg-white/20" />
          <span className="text-xs text-white/80">Stability Lock</span>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200/60 rounded-lg">
          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-xs font-medium text-emerald-700">System Stable</span>
        </div>
      </div>
      <div className="text-xs text-slate-500">
        10/10 Stability Audit
      </div>
    </div>
  );
}
