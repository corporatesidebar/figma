import { Target, TrendingUp, Clock, Users, CheckCircle2, AlertCircle } from 'lucide-react';
import ViewContainer from './ViewContainer';

export default function StrategyBoardView() {
  const objectives = [
    {
      title: 'Achieve $10M ARR by Q4 2026',
      progress: 68,
      status: 'on-track',
      keyResults: [
        { text: 'Close 15 enterprise deals', progress: 60, complete: 9, total: 15 },
        { text: 'Expand to 3 new markets', progress: 66, complete: 2, total: 3 },
        { text: 'Increase avg deal size to $100K', progress: 75, complete: true },
      ],
      owner: 'Revenue Team',
      dueDate: 'Dec 31, 2026',
    },
    {
      title: 'Launch AI-powered features suite',
      progress: 45,
      status: 'at-risk',
      keyResults: [
        { text: 'Complete ML model training', progress: 80, complete: true },
        { text: 'Beta with 50 customers', progress: 40, complete: 20, total: 50 },
        { text: 'Achieve 85% satisfaction score', progress: 30, complete: false },
      ],
      owner: 'Product Team',
      dueDate: 'Jun 30, 2026',
    },
    {
      title: 'Build world-class engineering team',
      progress: 55,
      status: 'on-track',
      keyResults: [
        { text: 'Hire 12 senior engineers', progress: 50, complete: 6, total: 12 },
        { text: 'Deploy new dev infrastructure', progress: 70, complete: true },
        { text: 'Reduce deployment time by 50%', progress: 45, complete: false },
      ],
      owner: 'Engineering',
      dueDate: 'Aug 15, 2026',
    },
  ];

  const initiatives = [
    { name: 'Enterprise Platform Rebuild', team: 'Engineering', progress: 72, health: 'green' },
    { name: 'European Market Expansion', team: 'Growth', progress: 38, health: 'yellow' },
    { name: 'Customer Success Program', team: 'CS', progress: 85, health: 'green' },
    { name: 'Brand Refresh Campaign', team: 'Marketing', progress: 22, health: 'red' },
  ];

  return (
    <ViewContainer
      title="Strategy Board"
      description="Company objectives, initiatives, and strategic execution"
      icon={Target}
    >
      <div className="max-w-6xl mx-auto px-8 py-8 animate-fadeIn">

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <div className="text-sm text-green-700 mb-1">On Track</div>
            <div className="text-3xl text-green-900">5</div>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
            <div className="text-sm text-yellow-700 mb-1">At Risk</div>
            <div className="text-3xl text-yellow-900">2</div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
            <div className="text-sm text-slate-700 mb-1">Completion Rate</div>
            <div className="text-3xl text-slate-900">62%</div>
          </div>
        </div>

        <div className="space-y-6 mb-8">
          <h2 className="text-slate-900">Strategic Objectives (OKRs)</h2>
          {objectives.map((objective, index) => (
            <div key={index} className="bg-white border-2 border-slate-200 rounded-2xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-slate-900">{objective.title}</h3>
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full ${
                        objective.status === 'on-track'
                          ? 'bg-green-100 text-green-700'
                          : objective.status === 'at-risk'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {objective.status === 'on-track' ? 'On Track' : objective.status === 'at-risk' ? 'At Risk' : 'Off Track'}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {objective.owner}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {objective.dueDate}
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl text-slate-900">{objective.progress}%</div>
                  <div className="text-sm text-slate-500">Complete</div>
                </div>
              </div>

              <div className="mb-4">
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all ${
                      objective.status === 'on-track'
                        ? 'bg-green-500'
                        : objective.status === 'at-risk'
                        ? 'bg-yellow-500'
                        : 'bg-red-500'
                    }`}
                    style={{ width: `${objective.progress}%` }}
                  />
                </div>
              </div>

              <div className="space-y-2.5">
                <h4 className="text-sm text-slate-700">Key Results</h4>
                {objective.keyResults.map((kr, krIndex) => (
                  <div key={krIndex} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                    {kr.complete === true ? (
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    ) : (
                      <div className="w-5 h-5 border-2 border-slate-300 rounded-full flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <div className="text-sm text-slate-700 mb-1">{kr.text}</div>
                      {typeof kr.complete === 'number' && kr.total && (
                        <div className="text-xs text-slate-500">
                          {kr.complete} of {kr.total} complete
                        </div>
                      )}
                    </div>
                    <div className="text-sm text-slate-900">{kr.progress}%</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-slate-900 mb-4">Active Initiatives</h2>
          <div className="grid grid-cols-2 gap-4">
            {initiatives.map((initiative, index) => (
              <div key={index} className="bg-white border-2 border-slate-200 rounded-xl p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="text-slate-900 mb-1">{initiative.name}</h4>
                    <p className="text-sm text-slate-600">{initiative.team}</p>
                  </div>
                  <div
                    className={`w-3 h-3 rounded-full ${
                      initiative.health === 'green'
                        ? 'bg-green-500'
                        : initiative.health === 'yellow'
                        ? 'bg-yellow-500'
                        : 'bg-red-500'
                    }`}
                  />
                </div>
                <div className="mb-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-600">Progress</span>
                    <span className="text-slate-900">{initiative.progress}%</span>
                  </div>
                  <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-blue-600"
                      style={{ width: `${initiative.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ViewContainer>
  );
}
