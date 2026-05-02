import { Calendar, TrendingUp, AlertTriangle, CheckCircle2, Clock, Users, Zap, Target, FileText } from 'lucide-react';
import ViewContainer from './ViewContainer';

export default function DailyBriefView() {
  return (
    <ViewContainer
      title="Daily Executive Brief"
      description="Your decision-ready morning intelligence · Friday, April 25, 2026"
      icon={FileText}
    >
      <div className="max-w-5xl mx-auto px-8 py-8 animate-fadeIn">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5 text-blue-700" />
              <h3 className="text-blue-900">Top Priority</h3>
            </div>
            <p className="text-blue-950">Board presentation approval by 2 PM</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-5 h-5 text-orange-700" />
              <h3 className="text-orange-900">Urgent</h3>
            </div>
            <p className="text-orange-950">2 decisions pending your approval</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-green-700" />
              <h3 className="text-green-900">Momentum</h3>
            </div>
            <p className="text-green-950">14 actions completed this week</p>
          </div>
        </div>

        <div className="space-y-6">
          <section className="bg-white border-2 border-slate-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="w-5 h-5 text-slate-700" />
              <h2 className="text-slate-900">Today's Schedule</h2>
            </div>
            <div className="space-y-3">
              {[
                { time: '9:00 AM', title: 'Leadership Team Standup', attendees: 8, type: 'critical' },
                { time: '10:30 AM', title: 'Q2 Strategy Review', attendees: 5, type: 'strategic' },
                { time: '1:00 PM', title: 'Investor Update Call', attendees: 3, type: 'critical' },
                { time: '3:00 PM', title: 'Product Roadmap Planning', attendees: 6, type: 'normal' },
                { time: '4:30 PM', title: '1:1 with CFO', attendees: 1, type: 'strategic' },
              ].map((meeting, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between p-4 rounded-lg border ${
                    meeting.type === 'critical'
                      ? 'bg-red-50 border-red-200'
                      : meeting.type === 'strategic'
                      ? 'bg-blue-50 border-blue-200'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className="text-sm text-slate-600 w-20">{meeting.time}</div>
                    <div>
                      <h4 className="text-slate-900">{meeting.title}</h4>
                      <p className="text-sm text-slate-600 mt-0.5">
                        {meeting.attendees} {meeting.attendees === 1 ? 'participant' : 'participants'}
                      </p>
                    </div>
                  </div>
                  <button className="text-sm text-blue-600 hover:text-blue-700">Prep →</button>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white border-2 border-slate-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-slate-700" />
              <h2 className="text-slate-900">Decisions Awaiting You</h2>
            </div>
            <div className="space-y-3">
              {[
                {
                  title: 'Approve $120K additional marketing spend for Q2',
                  impact: 'High',
                  deadline: 'Today',
                  context: 'ROI projection: 3.2x based on Q1 performance',
                },
                {
                  title: 'Sign off on new enterprise pricing tier',
                  impact: 'Critical',
                  deadline: 'Today',
                  context: '3 enterprise deals pending this decision',
                },
              ].map((decision, index) => (
                <div key={index} className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-slate-900 flex-1">{decision.title}</h4>
                    <span className="text-xs px-2 py-1 bg-orange-200 text-orange-800 rounded">
                      {decision.impact}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">{decision.context}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">Due: {decision.deadline}</span>
                    <div className="flex gap-2">
                      <button className="px-4 py-1.5 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700">
                        Approve
                      </button>
                      <button className="px-4 py-1.5 bg-slate-200 text-slate-700 rounded-lg text-sm hover:bg-slate-300">
                        Review
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white border-2 border-slate-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-slate-700" />
              <h2 className="text-slate-900">Key Metrics & Alerts</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Revenue (MTD)', value: '$1.2M', change: '+12%', positive: true },
                { label: 'Active Users', value: '48.2K', change: '+8%', positive: true },
                { label: 'Burn Rate', value: '$420K', change: '+15%', positive: false },
                { label: 'Team Capacity', value: '87%', change: '-3%', positive: false },
              ].map((metric, index) => (
                <div key={index} className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                  <p className="text-sm text-slate-600 mb-1">{metric.label}</p>
                  <div className="flex items-baseline gap-2">
                    <h3 className="text-2xl text-slate-900">{metric.value}</h3>
                    <span
                      className={`text-sm ${
                        metric.positive ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {metric.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5" />
              <h2>Ready to Execute</h2>
            </div>
            <p className="text-slate-300 mb-4">
              Your day is structured for maximum impact. All critical decisions have supporting data ready.
              3 strategic meetings prepped. Team is aligned on priorities.
            </p>
            <button className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Open Command Center
            </button>
          </section>
        </div>
      </div>
    </ViewContainer>
  );
}
