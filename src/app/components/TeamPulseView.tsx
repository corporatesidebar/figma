import { Users, TrendingUp, AlertCircle, MessageSquare, Award, Clock } from 'lucide-react';
import ViewContainer from './ViewContainer';

export default function TeamPulseView() {
  const teams = [
    {
      name: 'Engineering',
      lead: 'Sarah Chen',
      size: 24,
      velocity: 87,
      velocityChange: +5,
      morale: 92,
      bandwidth: 65,
      alerts: 1,
    },
    {
      name: 'Product',
      lead: 'Marcus Rivera',
      size: 8,
      velocity: 94,
      velocityChange: +12,
      morale: 88,
      bandwidth: 78,
      alerts: 0,
    },
    {
      name: 'Sales',
      lead: 'Jennifer Wu',
      size: 15,
      velocity: 76,
      velocityChange: -8,
      morale: 71,
      bandwidth: 92,
      alerts: 2,
    },
    {
      name: 'Marketing',
      lead: 'David Park',
      size: 12,
      velocity: 82,
      velocityChange: +3,
      morale: 85,
      bandwidth: 70,
      alerts: 0,
    },
  ];

  const insights = [
    {
      type: 'positive',
      team: 'Engineering',
      message: 'Team velocity up 5% this sprint - strong momentum on platform rebuild',
      time: '2 hours ago',
    },
    {
      type: 'warning',
      team: 'Sales',
      message: 'Morale dipped 12 points - recommended 1:1 with team lead',
      time: '4 hours ago',
    },
    {
      type: 'alert',
      team: 'Sales',
      message: 'Team at 92% capacity - consider resource rebalancing',
      time: '5 hours ago',
    },
    {
      type: 'positive',
      team: 'Product',
      message: 'Shipped 3 major features ahead of schedule',
      time: 'Yesterday',
    },
  ];

  const topPerformers = [
    { name: 'Alex Martinez', team: 'Engineering', impact: 'Delivered critical infrastructure upgrade 2 weeks early' },
    { name: 'Lisa Thompson', team: 'Sales', impact: 'Closed $450K enterprise deal with Fortune 500' },
    { name: 'James Wilson', team: 'Product', impact: 'Led successful beta launch with 95% satisfaction' },
  ];

  return (
    <ViewContainer
      title="Team Pulse"
      description="Real-time insights into team health, velocity, and capacity"
      icon={Users}
    >
      <div className="max-w-6xl mx-auto px-8 py-8 animate-fadeIn">

        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <div className="text-sm text-blue-700 mb-1">Total Headcount</div>
            <div className="text-3xl text-blue-900">59</div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <div className="text-sm text-green-700 mb-1">Avg Velocity</div>
            <div className="text-3xl text-green-900">85%</div>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
            <div className="text-sm text-purple-700 mb-1">Avg Morale</div>
            <div className="text-3xl text-purple-900">84%</div>
          </div>
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
            <div className="text-sm text-orange-700 mb-1">Active Alerts</div>
            <div className="text-3xl text-orange-900">3</div>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <h2 className="text-slate-900">Team Overview</h2>
          {teams.map((team, index) => (
            <div key={index} className="bg-white border-2 border-slate-200 rounded-xl p-6">
              <div className="flex items-start justify-between mb-5">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="text-slate-900">{team.name}</h3>
                    {team.alerts > 0 && (
                      <span className="flex items-center gap-1 text-xs px-2 py-1 bg-orange-100 text-orange-700 rounded-full">
                        <AlertCircle className="w-3 h-3" />
                        {team.alerts}
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-slate-600">
                    Led by {team.lead} · {team.size} members
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4">
                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="text-sm text-slate-600 mb-1">Velocity</div>
                  <div className="flex items-baseline gap-2">
                    <div className="text-2xl text-slate-900">{team.velocity}%</div>
                    <span
                      className={`text-sm ${
                        team.velocityChange > 0 ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {team.velocityChange > 0 ? '+' : ''}
                      {team.velocityChange}%
                    </span>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="text-sm text-slate-600 mb-1">Morale</div>
                  <div className="text-2xl text-slate-900">{team.morale}%</div>
                </div>

                <div className="bg-slate-50 rounded-lg p-4">
                  <div className="text-sm text-slate-600 mb-1">Bandwidth</div>
                  <div className="text-2xl text-slate-900">{team.bandwidth}%</div>
                </div>

                <div className="bg-slate-50 rounded-lg p-4 flex items-center justify-center">
                  <button className="text-sm text-blue-600 hover:text-blue-700">View Details →</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6 mb-8">
          <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <MessageSquare className="w-5 h-5 text-slate-700" />
              <h2 className="text-slate-900">Team Insights</h2>
            </div>
            <div className="space-y-3">
              {insights.map((insight, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border ${
                    insight.type === 'positive'
                      ? 'bg-green-50 border-green-200'
                      : insight.type === 'warning'
                      ? 'bg-yellow-50 border-yellow-200'
                      : 'bg-orange-50 border-orange-200'
                  }`}
                >
                  <div className="flex items-start justify-between mb-1">
                    <span
                      className={`text-sm px-2 py-0.5 rounded ${
                        insight.type === 'positive'
                          ? 'bg-green-200 text-green-800'
                          : insight.type === 'warning'
                          ? 'bg-yellow-200 text-yellow-800'
                          : 'bg-orange-200 text-orange-800'
                      }`}
                    >
                      {insight.team}
                    </span>
                    <span className="text-xs text-slate-500">{insight.time}</span>
                  </div>
                  <p className="text-sm text-slate-700 mt-2">{insight.message}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-purple-700" />
              <h2 className="text-purple-900">Top Performers</h2>
            </div>
            <div className="space-y-4">
              {topPerformers.map((performer, index) => (
                <div key={index} className="bg-white rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white">
                      {performer.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="text-slate-900">{performer.name}</h4>
                      <p className="text-sm text-slate-600">{performer.team}</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-700 pl-13">{performer.impact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ViewContainer>
  );
}
