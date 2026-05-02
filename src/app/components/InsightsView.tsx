import { Lightbulb, TrendingUp, AlertTriangle, Target, Zap, Users, DollarSign } from 'lucide-react';
import ViewContainer from './ViewContainer';

export default function InsightsView() {
  const aiInsights = [
    {
      type: 'opportunity',
      priority: 'high',
      title: 'Enterprise expansion momentum accelerating',
      description: 'Win rate for enterprise deals (>$100K) increased from 28% to 41% in the last 30 days. 5 new enterprise opportunities entered pipeline this week.',
      action: 'Double down on enterprise sales - consider hiring additional AE',
      impact: 'Potential $2.4M additional ARR in Q3-Q4',
      confidence: 87,
    },
    {
      type: 'risk',
      priority: 'high',
      title: 'Engineering velocity declining',
      description: 'Sprint velocity down 15% over last 3 sprints. Team citing technical debt and infrastructure issues as primary blockers.',
      action: 'Schedule technical debt sprint or allocate 20% capacity to infrastructure',
      impact: 'Product roadmap at risk - could delay Q3 launch',
      confidence: 92,
    },
    {
      type: 'optimization',
      priority: 'medium',
      title: 'Customer success touch points underutilized',
      description: 'Only 34% of customers have had a check-in call in last 60 days. Correlation shows customers with quarterly check-ins have 2.3x higher expansion revenue.',
      action: 'Implement automated quarterly business review cadence',
      impact: 'Estimated 15-20% increase in expansion revenue',
      confidence: 78,
    },
    {
      type: 'opportunity',
      priority: 'medium',
      title: 'Strong product-led growth signals',
      description: 'Self-serve trial conversion up 22% this month. Users completing onboarding flow convert at 3.1x higher rate.',
      action: 'Invest in onboarding experience optimization',
      impact: 'Could increase monthly new revenue by $45K+',
      confidence: 81,
    },
  ];

  const marketIntel = [
    {
      topic: 'Competitor Movement',
      items: [
        'CompetitorX raised $50M Series C - likely to increase marketing spend',
        'CompetitorY launching similar AI features in Q3 (based on job postings)',
        'Industry consolidation: 2 acquisitions in our space this quarter',
      ],
    },
    {
      topic: 'Market Trends',
      items: [
        'Enterprise AI adoption accelerating - Gartner predicts 65% adoption by 2027',
        'Budget cycles shifting earlier - Q3 planning happening now',
        'Increased demand for compliance/security certifications',
      ],
    },
  ];

  const executiveThemes = [
    {
      theme: 'Revenue Acceleration',
      strength: 85,
      trend: 'up',
      keyPoints: ['Enterprise momentum strong', 'Pricing power validated', 'Pipeline healthy'],
    },
    {
      theme: 'Operational Efficiency',
      strength: 68,
      trend: 'down',
      keyPoints: ['Burn rate trending up', 'Engineering velocity down', 'Sales cycle lengthening'],
    },
    {
      theme: 'Team & Culture',
      strength: 82,
      trend: 'up',
      keyPoints: ['Morale high overall', 'Key retention risks identified', 'Strong hiring momentum'],
    },
  ];

  return (
    <ViewContainer
      title="AI Insights"
      description="Intelligence synthesized from across your entire operation"
      icon={Lightbulb}
    >
      <div className="max-w-6xl mx-auto px-8 py-8 animate-fadeIn">

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-2xl p-8 mb-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-purple-900 mb-2">Executive Summary</h2>
              <p className="text-purple-800 mb-4">
                Your company is in a strong growth phase with enterprise traction accelerating.
                Primary focus areas: maintain sales momentum while addressing engineering velocity concerns.
                Overall execution score: 7.8/10 (strong).
              </p>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
                  Generate Full Brief
                </button>
                <button className="px-4 py-2 bg-white text-purple-900 border border-purple-300 rounded-lg hover:bg-purple-50">
                  Share with Team
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 mb-8">
          <h2 className="text-slate-900">Top AI-Generated Insights</h2>
          {aiInsights.map((insight, index) => (
            <div
              key={index}
              className={`bg-white border-2 rounded-2xl p-6 ${
                insight.type === 'opportunity'
                  ? 'border-green-300'
                  : insight.type === 'risk'
                  ? 'border-red-300'
                  : 'border-blue-300'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    {insight.type === 'opportunity' ? (
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    ) : insight.type === 'risk' ? (
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                    ) : (
                      <Target className="w-5 h-5 text-blue-600" />
                    )}
                    <h3 className="text-slate-900">{insight.title}</h3>
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full ${
                        insight.priority === 'high'
                          ? 'bg-orange-100 text-orange-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}
                    >
                      {insight.priority.toUpperCase()} PRIORITY
                    </span>
                  </div>
                  <p className="text-slate-600 mb-3">{insight.description}</p>
                </div>
                <div className="text-right ml-4">
                  <div className="text-sm text-slate-600 mb-1">Confidence</div>
                  <div className="text-2xl text-slate-900">{insight.confidence}%</div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 mb-4">
                <h4 className="text-sm text-slate-700 mb-2">Recommended Action</h4>
                <p className="text-sm text-slate-900">{insight.action}</p>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm text-slate-600">
                  Estimated Impact: <span className="text-slate-900">{insight.impact}</span>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
                  Take Action →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-6 mb-8">
          {executiveThemes.map((theme, index) => (
            <div key={index} className="bg-white border-2 border-slate-200 rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-slate-900">{theme.theme}</h3>
                {theme.trend === 'up' ? (
                  <TrendingUp className="w-5 h-5 text-green-600" />
                ) : (
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                )}
              </div>
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-600">Strength Score</span>
                  <span className="text-slate-900">{theme.strength}%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${
                      theme.strength >= 80
                        ? 'bg-green-500'
                        : theme.strength >= 60
                        ? 'bg-blue-500'
                        : 'bg-orange-500'
                    }`}
                    style={{ width: `${theme.strength}%` }}
                  />
                </div>
              </div>
              <ul className="space-y-1.5">
                {theme.keyPoints.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start gap-2 text-sm text-slate-700">
                    <div className="w-1 h-1 bg-slate-400 rounded-full mt-2 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6">
          {marketIntel.map((section, index) => (
            <div key={index} className="bg-white border-2 border-slate-200 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="w-5 h-5 text-slate-700" />
                <h3 className="text-slate-900">{section.topic}</h3>
              </div>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2 text-sm text-slate-700 p-3 bg-slate-50 rounded-lg">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </ViewContainer>
  );
}
