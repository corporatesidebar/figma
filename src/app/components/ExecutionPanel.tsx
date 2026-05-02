import { Zap, Target, AlertCircle, CheckCircle2, TrendingUp, Calendar, DollarSign, Users } from 'lucide-react';

interface ExecutionPanelProps {
  latestOutput: any;
}

export default function ExecutionPanel({ latestOutput }: ExecutionPanelProps) {
  const recentDecisions = [
    { text: 'Approve Q2 marketing budget increase', time: '2 hours ago' },
    { text: 'Postpone product launch to Q3', time: '5 hours ago' },
    { text: 'Hire senior engineer for Platform team', time: 'Yesterday' },
  ];

  const quickMetrics = [
    { label: 'MRR', value: '$1.2M', trend: '+12%', positive: true },
    { label: 'Active Users', value: '48.2K', trend: '+8%', positive: true },
    { label: 'Team Velocity', value: '85%', trend: '+5%', positive: true },
  ];

  const upcomingMilestones = [
    { title: 'Q2 Board Meeting', time: 'Today, 2:00 PM', critical: true },
    { title: 'Product Launch', time: 'May 15', critical: false },
    { title: 'Series B Deadline', time: 'Jun 30', critical: true },
  ];

  return (
    <aside className="h-full overflow-auto flex-shrink-0 bg-white rounded-xl border border-slate-200/60 shadow-sm">
      <div className="p-4">
        <div className="bg-gradient-to-br from-violet-500 to-indigo-600 text-white rounded-lg p-4 mb-4">
          <div className="flex items-center gap-2 mb-1.5">
            <Zap className="w-4 h-4" />
            <h3 className="text-sm font-medium">Today's Focus</h3>
          </div>
          <p className="text-xs text-white/80">
            What needs to happen next
          </p>
          <div className="mt-3 pt-3 border-t border-white/20">
            <div className="text-xs text-white/70 mb-0.5">Current Time</div>
            <div className="text-sm font-medium">Friday, 1:45 PM</div>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-xs font-medium text-slate-900 mb-2 flex items-center gap-1.5">
            <TrendingUp className="w-3.5 h-3.5" />
            Metrics
          </h4>
          <div className="space-y-1.5">
            {quickMetrics.map((metric, index) => (
              <div key={index} className="bg-slate-50/50 border border-slate-200/60 rounded-md p-2.5">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-600">{metric.label}</span>
                  <div className="text-right">
                    <div className="text-xs font-medium text-slate-900">{metric.value}</div>
                    <div className={`text-xs ${metric.positive ? 'text-emerald-600' : 'text-rose-600'}`}>
                      {metric.trend}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {latestOutput && (
          <>
            <div className="mb-4">
              <div className="flex items-center gap-1.5 mb-2">
                <Zap className="w-3.5 h-3.5 text-amber-600" />
                <h4 className="text-xs font-medium text-slate-900">Next Move</h4>
              </div>
              <div className="bg-white border border-slate-200/60 rounded-lg p-3">
                <p className="text-xs text-slate-700 leading-relaxed">{latestOutput.nextMove}</p>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-xs font-medium text-slate-900 mb-2">Snapshot</h4>
              <div className="space-y-1.5">
                <div className="bg-slate-50/50 border border-slate-200/60 rounded-md p-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-600">Active Priorities</span>
                    <span className="text-xs font-medium text-slate-900">3</span>
                  </div>
                </div>
                <div className="bg-slate-50/50 border border-slate-200/60 rounded-md p-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-600">Decisions Today</span>
                    <span className="text-xs font-medium text-slate-900">5</span>
                  </div>
                </div>
                <div className="bg-slate-50/50 border border-slate-200/60 rounded-md p-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-600">Risks Flagged</span>
                    <span className="text-xs font-medium text-rose-600">2</span>
                  </div>
                </div>
              </div>
            </div>

            {latestOutput.actions && latestOutput.actions.length > 0 && (
              <div className="mb-4">
                <h4 className="text-xs font-medium text-slate-900 mb-2">Actions</h4>
                <div className="bg-white border border-slate-200/60 rounded-lg p-3">
                  <ul className="space-y-2">
                    {latestOutput.actions.map((action: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" />
                        <span className="text-xs text-slate-700 leading-relaxed">{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </>
        )}

        <div className="mb-4">
          <h4 className="text-xs font-medium text-slate-900 mb-2">Recent Decisions</h4>
          <div className="space-y-1.5">
            {recentDecisions.map((decision, index) => (
              <div key={index} className="bg-white border border-slate-200/60 rounded-md p-2.5">
                <p className="text-xs text-slate-700 leading-relaxed mb-1">{decision.text}</p>
                <p className="text-xs text-slate-400">{decision.time}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <h4 className="text-xs font-medium text-slate-900 mb-2 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            Milestones
          </h4>
          <div className="space-y-1.5">
            {upcomingMilestones.map((milestone, index) => (
              <div
                key={index}
                className={`p-2.5 rounded-md border ${
                  milestone.critical
                    ? 'bg-amber-50 border-amber-200/60'
                    : 'bg-slate-50/50 border-slate-200/60'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h5 className="text-xs font-medium text-slate-900 mb-0.5">{milestone.title}</h5>
                    <p className="text-xs text-slate-500">{milestone.time}</p>
                  </div>
                  {milestone.critical && (
                    <AlertCircle className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-emerald-50 border border-emerald-200/60 rounded-lg p-3 mb-4">
          <div className="flex items-center gap-1.5 mb-1.5">
            <Target className="w-3.5 h-3.5 text-emerald-700" />
            <h4 className="text-xs font-medium text-emerald-900">Today's Goal</h4>
          </div>
          <p className="text-xs text-emerald-800/90 leading-relaxed">
            Finalize Q2 financial strategy and secure board approval for key initiatives.
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-lg p-3">
          <h4 className="text-xs font-medium mb-2">AI Recommendations</h4>
          <div className="space-y-2.5 text-xs">
            <div className="flex items-start gap-2">
              <Zap className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
              <p className="text-white/80 leading-relaxed">
                Prioritize board prep - meeting in 15 minutes
              </p>
            </div>
            <div className="flex items-start gap-2">
              <Users className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
              <p className="text-white/80 leading-relaxed">
                Sales team morale dipped - schedule 1:1 with Jennifer
              </p>
            </div>
            <div className="flex items-start gap-2">
              <DollarSign className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
              <p className="text-white/80 leading-relaxed">
                Burn rate trending up - review Q2 spending plan
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
