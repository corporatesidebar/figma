import { Target, CheckCircle2, Clock, TrendingUp, AlertCircle, Users } from 'lucide-react';
import ViewContainer from './ViewContainer';

export default function DecisionsView() {
  const pendingDecisions = [
    {
      id: 1,
      title: 'Approve $120K additional marketing spend for Q2',
      context: 'Marketing team requesting budget increase based on strong Q1 ROI (3.2x). Would accelerate enterprise acquisition.',
      impact: 'High',
      urgency: 'Today',
      owner: 'CMO',
      recommendation: 'Approve with weekly tracking',
      options: [
        { label: 'Approve full amount', risk: 'Low' },
        { label: 'Approve 50% now, review in 2 weeks', risk: 'Medium' },
        { label: 'Decline - reallocate from other budget', risk: 'Low' },
      ],
      data: {
        projected_roi: '3.2x',
        payback_period: '4 months',
        confidence: '85%',
      },
    },
    {
      id: 2,
      title: 'Move product launch date to Q3',
      context: 'Engineering team needs 4 additional weeks for critical AI features. Sales has 3 enterprise deals waiting on launch.',
      impact: 'Critical',
      urgency: 'This Week',
      owner: 'Product Lead',
      recommendation: 'Delay with partial early access',
      options: [
        { label: 'Delay to Q3 for full feature set', risk: 'Medium' },
        { label: 'Launch on time with reduced scope', risk: 'High' },
        { label: 'Delay + early access for enterprise customers', risk: 'Low' },
      ],
      data: {
        revenue_at_risk: '$450K',
        engineering_confidence: '95% complete in 4 weeks',
        customer_impact: '3 deals pending',
      },
    },
  ];

  const recentDecisions = [
    {
      title: 'Approved hiring 3 senior engineers',
      date: '2 days ago',
      outcome: 'In progress',
      impact: 'Accelerated platform rebuild by 6 weeks',
      decision: 'Approved',
    },
    {
      title: 'Declined partnership with TechCorp',
      date: '5 days ago',
      outcome: 'Completed',
      impact: 'Maintained product independence, exploring alternatives',
      decision: 'Declined',
    },
    {
      title: 'Approved Q2 price increase (8%)',
      date: '1 week ago',
      outcome: 'Live',
      impact: 'Early signals positive - 2% churn, MRR up 12%',
      decision: 'Approved',
    },
  ];

  const decisionMetrics = [
    { label: 'Decisions This Quarter', value: '23', trend: '+4' },
    { label: 'Avg Decision Time', value: '2.3 days', trend: '-0.5d' },
    { label: 'Success Rate', value: '87%', trend: '+3%' },
  ];

  return (
    <ViewContainer
      title="Decisions"
      description="Executive decision queue with AI-powered recommendations"
      icon={Target}
    >
      <div className="max-w-5xl mx-auto px-8 py-8 animate-fadeIn">

        <div className="grid grid-cols-3 gap-4 mb-8">
          {decisionMetrics.map((metric, index) => (
            <div key={index} className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <div className="text-sm text-blue-700 mb-1">{metric.label}</div>
              <div className="flex items-baseline gap-2">
                <div className="text-3xl text-blue-900">{metric.value}</div>
                <span className="text-sm text-blue-700">{metric.trend}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6 mb-8">
          <div className="flex items-center justify-between">
            <h2 className="text-slate-900">Pending Decisions</h2>
            <span className="text-sm text-slate-600">{pendingDecisions.length} awaiting your input</span>
          </div>

          {pendingDecisions.map((decision) => (
            <div key={decision.id} className="bg-white border-2 border-orange-300 rounded-2xl p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-slate-900">{decision.title}</h3>
                    <span className="text-xs px-2.5 py-1 bg-orange-100 text-orange-700 rounded-full">
                      {decision.urgency}
                    </span>
                    <span className="text-xs px-2.5 py-1 bg-red-100 text-red-700 rounded-full">
                      {decision.impact} Impact
                    </span>
                  </div>
                  <p className="text-slate-600 mb-3">{decision.context}</p>
                  <div className="text-sm text-slate-600">
                    Owner: {decision.owner}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-4">
                {Object.entries(decision.data).map(([key, value], index) => (
                  <div key={index} className="bg-slate-50 rounded-lg p-3">
                    <div className="text-xs text-slate-600 mb-1">
                      {key.replace(/_/g, ' ').toUpperCase()}
                    </div>
                    <div className="text-slate-900">{value}</div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-blue-700" />
                  <h4 className="text-blue-900">AI Recommendation</h4>
                </div>
                <p className="text-sm text-blue-800">{decision.recommendation}</p>
              </div>

              <div className="space-y-2 mb-4">
                <h4 className="text-sm text-slate-700">Decision Options</h4>
                {decision.options.map((option, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    <span className="text-sm text-slate-900">{option.label}</span>
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        option.risk === 'Low'
                          ? 'bg-green-100 text-green-700'
                          : option.risk === 'Medium'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {option.risk} Risk
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex gap-3">
                <button className="flex-1 px-4 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700">
                  Approve
                </button>
                <button className="flex-1 px-4 py-2.5 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300">
                  Request More Info
                </button>
                <button className="flex-1 px-4 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700">
                  Decline
                </button>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-slate-900 mb-4">Recent Decisions</h2>
          <div className="space-y-3">
            {recentDecisions.map((decision, index) => (
              <div key={index} className="bg-white border-2 border-slate-200 rounded-xl p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className="text-slate-900">{decision.title}</h4>
                      <span
                        className={`text-xs px-2.5 py-1 rounded-full ${
                          decision.decision === 'Approved'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        }`}
                      >
                        {decision.decision}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 mb-2">{decision.impact}</p>
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                      <span>{decision.date}</span>
                      <span>Status: {decision.outcome}</span>
                    </div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ViewContainer>
  );
}
