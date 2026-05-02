import { Activity, Target, CheckCircle, Clock, Zap } from 'lucide-react';

export default function RightPanel() {
  return (
    <aside className="w-80 border-l border-slate-200 bg-white overflow-auto">
      <div className="p-6 space-y-6">
        {/* System Status */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-4 h-4 text-slate-600" />
            <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
              System Status
            </h3>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
            <div className="space-y-3">
              {[
                { label: 'Backend', status: 'Live', value: '99.9%' },
                { label: 'Database', status: 'Connected', value: '< 2ms' },
                { label: 'API', status: 'Healthy', value: '45ms' },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-slate-900">{item.label}</div>
                    <div className="text-xs text-slate-500">{item.value}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                    <span className="text-xs font-medium text-emerald-700">{item.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Your Engine */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-4 h-4 text-slate-600" />
            <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
              Your Engine
            </h3>
          </div>
          <div className="space-y-2">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
              <div className="text-xs text-slate-500 mb-1">Runs Today</div>
              <div className="text-2xl font-semibold text-slate-900">12</div>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
              <div className="text-xs text-slate-500 mb-1">Avg Response</div>
              <div className="text-2xl font-semibold text-slate-900">1.2s</div>
            </div>
          </div>
        </div>

        {/* Today's Focus */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-4 h-4 text-slate-600" />
            <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
              Today's Focus
            </h3>
          </div>
          <div className="space-y-2">
            {[
              'Board meeting preparation',
              'Review enterprise deals',
              'Team capacity planning',
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2 text-sm text-slate-700">
                <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-1.5 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Action Queue */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="w-4 h-4 text-slate-600" />
            <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
              Action Queue
            </h3>
          </div>
          <div className="space-y-2">
            {[
              'Review Q2 financial reports',
              'Schedule CFO 1:1 Thursday',
              'Approve marketing budget',
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-2.5 p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div className="w-4 h-4 border-2 border-slate-300 rounded flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-900">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Decisions */}
        <div>
          <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-4">
            Recent Decisions
          </h3>
          <div className="space-y-3">
            {[
              { text: 'Approved hiring 3 engineers', time: '2 hours ago' },
              { text: 'Delayed product launch to Q3', time: '5 hours ago' },
              { text: 'Increased marketing budget 15%', time: 'Yesterday' },
            ].map((item, index) => (
              <div key={index} className="pb-3 border-b border-slate-100 last:border-0">
                <p className="text-sm text-slate-900 mb-1">{item.text}</p>
                <p className="text-xs text-slate-500">{item.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Runs */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-4 h-4 text-slate-600" />
            <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
              Recent Runs
            </h3>
          </div>
          <div className="space-y-2.5">
            {[
              { time: '2:45 PM', query: 'Q2 budget decision' },
              { time: '1:30 PM', query: 'Hiring plan review' },
              { time: '11:20 AM', query: 'Product launch timeline' },
            ].map((item, index) => (
              <div key={index} className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                <div className="text-xs text-slate-500 mb-1">{item.time}</div>
                <div className="text-sm text-slate-900">{item.query}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
