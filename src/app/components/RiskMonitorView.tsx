import { Shield, AlertTriangle, TrendingDown, AlertCircle, CheckCircle2, Clock } from 'lucide-react';
import ViewContainer from './ViewContainer';

export default function RiskMonitorView() {
  const criticalRisks = [
    {
      id: 1,
      title: 'Revenue Target Miss',
      severity: 'high',
      probability: 75,
      impact: 'Critical',
      description: 'Q2 revenue tracking 14% below target with 6 weeks remaining',
      owner: 'Revenue Team',
      status: 'active',
      mitigations: [
        'Accelerate 3 enterprise deals in pipeline ($420K total)',
        'Launch expansion campaign for existing customers',
        'Fast-track 2 product features requested by prospects',
      ],
      lastUpdated: '2 hours ago',
    },
    {
      id: 2,
      title: 'Runway Compression',
      severity: 'high',
      probability: 60,
      impact: 'Critical',
      description: 'Burn rate increased 8% MoM while revenue growth slowed',
      owner: 'CFO',
      status: 'active',
      mitigations: [
        'Implement cost reduction plan targeting 15% savings',
        'Accelerate Series B fundraise timeline',
        'Defer non-critical hires by 1 quarter',
      ],
      lastUpdated: '5 hours ago',
    },
    {
      id: 3,
      title: 'Key Engineering Departures',
      severity: 'medium',
      probability: 45,
      impact: 'High',
      description: '2 senior engineers showing signs of disengagement based on team pulse data',
      owner: 'Engineering Lead',
      status: 'monitoring',
      mitigations: [
        'Schedule retention conversations this week',
        'Review compensation benchmarking',
        'Create individual career development plans',
      ],
      lastUpdated: 'Yesterday',
    },
  ];

  const emergingRisks = [
    { title: 'Competitor launching similar AI features', severity: 'medium', detected: 'Today' },
    { title: 'Large customer (15% MRR) up for renewal in 30 days', severity: 'medium', detected: 'Yesterday' },
    { title: 'Infrastructure costs trending 20% over budget', severity: 'low', detected: '2 days ago' },
  ];

  const riskCategories = [
    { category: 'Financial', count: 3, critical: 2 },
    { category: 'Operational', count: 2, critical: 0 },
    { category: 'Market', count: 4, critical: 1 },
    { category: 'People', count: 2, critical: 1 },
    { category: 'Technical', count: 1, critical: 0 },
  ];

  return (
    <ViewContainer
      title="Risk Monitor"
      description="Proactive risk identification and mitigation tracking"
      icon={Shield}
    >
      <div className="max-w-6xl mx-auto px-8 py-8 animate-fadeIn">

        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-red-50 border border-red-200 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-red-700" />
              <div className="text-sm text-red-700">Critical</div>
            </div>
            <div className="text-3xl text-red-900">4</div>
          </div>

          <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <AlertCircle className="w-4 h-4 text-orange-700" />
              <div className="text-sm text-orange-700">High</div>
            </div>
            <div className="text-3xl text-orange-900">3</div>
          </div>

          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-yellow-700" />
              <div className="text-sm text-yellow-700">Monitoring</div>
            </div>
            <div className="text-3xl text-yellow-900">5</div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-4 h-4 text-green-700" />
              <div className="text-sm text-green-700">Mitigated</div>
            </div>
            <div className="text-3xl text-green-900">12</div>
          </div>
        </div>

        <div className="space-y-6 mb-8">
          <h2 className="text-slate-900">Active High-Priority Risks</h2>
          {criticalRisks.map((risk) => (
            <div
              key={risk.id}
              className={`bg-white border-2 rounded-2xl p-6 ${
                risk.severity === 'high'
                  ? 'border-red-300'
                  : risk.severity === 'medium'
                  ? 'border-orange-300'
                  : 'border-yellow-300'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-slate-900">{risk.title}</h3>
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full ${
                        risk.severity === 'high'
                          ? 'bg-red-100 text-red-700'
                          : risk.severity === 'medium'
                          ? 'bg-orange-100 text-orange-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {risk.severity.toUpperCase()}
                    </span>
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full ${
                        risk.status === 'active'
                          ? 'bg-blue-100 text-blue-700'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {risk.status}
                    </span>
                  </div>
                  <p className="text-slate-600 mb-3">{risk.description}</p>
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <span>Owner: {risk.owner}</span>
                    <span>Impact: {risk.impact}</span>
                    <span>Updated: {risk.lastUpdated}</span>
                  </div>
                </div>
                <div className="text-right ml-4">
                  <div className="text-sm text-slate-600 mb-1">Probability</div>
                  <div className="text-3xl text-slate-900">{risk.probability}%</div>
                </div>
              </div>

              <div className="mb-4">
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${
                      risk.severity === 'high'
                        ? 'bg-red-500'
                        : risk.severity === 'medium'
                        ? 'bg-orange-500'
                        : 'bg-yellow-500'
                    }`}
                    style={{ width: `${risk.probability}%` }}
                  />
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-4">
                <h4 className="text-sm text-slate-700 mb-3">Mitigation Plan</h4>
                <ul className="space-y-2">
                  {risk.mitigations.map((mitigation, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                      <div className="w-5 h-5 border-2 border-slate-300 rounded flex-shrink-0 mt-0.5" />
                      <span>{mitigation}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-3 pt-3 border-t border-slate-200">
                  <button className="text-sm text-blue-600 hover:text-blue-700">
                    Update mitigation progress →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-white border-2 border-slate-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <TrendingDown className="w-5 h-5 text-slate-700" />
              <h2 className="text-slate-900">Emerging Risks</h2>
            </div>
            <div className="space-y-3">
              {emergingRisks.map((risk, index) => (
                <div key={index} className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-sm text-slate-900 flex-1">{risk.title}</h4>
                    <span
                      className={`text-xs px-2 py-0.5 rounded ${
                        risk.severity === 'high'
                          ? 'bg-red-100 text-red-700'
                          : risk.severity === 'medium'
                          ? 'bg-orange-100 text-orange-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {risk.severity}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">Detected: {risk.detected}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border-2 border-slate-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-slate-700" />
              <h2 className="text-slate-900">Risk by Category</h2>
            </div>
            <div className="space-y-3">
              {riskCategories.map((category, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                  <div>
                    <div className="text-sm text-slate-900">{category.category}</div>
                    <div className="text-xs text-slate-600 mt-0.5">
                      {category.critical} critical
                    </div>
                  </div>
                  <div className="text-2xl text-slate-900">{category.count}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-2xl p-8">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="mb-3">AI Risk Intelligence</h2>
              <p className="text-slate-300 mb-4 max-w-2xl">
                The system continuously monitors 47 risk indicators across financial, operational, market, people, and technical domains.
                Current risk score: 6.2/10 (moderate).
              </p>
              <div className="flex gap-3">
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Run Risk Analysis
                </button>
                <button className="px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600">
                  Export Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ViewContainer>
  );
}
