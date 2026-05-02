import { Calendar, Users, FileText, Zap, Clock, AlertCircle, CheckCircle2 } from 'lucide-react';
import ViewContainer from './ViewContainer';

export default function MeetingPrepView() {
  const upcomingMeetings = [
    {
      id: 1,
      title: 'Q2 Board Meeting',
      time: 'Today, 2:00 PM',
      duration: '90 min',
      attendees: ['Board Members', 'Executive Team'],
      prepared: false,
      critical: true,
      prepItems: [
        { item: 'Financial deck review', status: 'pending' },
        { item: 'Q2 metrics summary', status: 'pending' },
        { item: 'Risk analysis', status: 'pending' },
      ],
    },
    {
      id: 2,
      title: 'Leadership Team Standup',
      time: 'Tomorrow, 9:00 AM',
      duration: '30 min',
      attendees: ['Executive Team', 'Department Leads'],
      prepared: true,
      critical: false,
      prepItems: [
        { item: 'Weekly priorities', status: 'complete' },
        { item: 'Blocker review', status: 'complete' },
      ],
    },
    {
      id: 3,
      title: 'Enterprise Client Presentation',
      time: 'Tomorrow, 3:00 PM',
      duration: '60 min',
      attendees: ['Fortune 500 CTO', 'Sales Team'],
      prepared: false,
      critical: true,
      prepItems: [
        { item: 'Custom demo preparation', status: 'in-progress' },
        { item: 'Pricing proposal', status: 'pending' },
        { item: 'Technical Q&A brief', status: 'complete' },
      ],
    },
  ];

  const meetingInsights = [
    {
      meeting: 'Q2 Board Meeting',
      insights: [
        'Board expects update on enterprise expansion progress',
        'CFO flagged runway discussion - prepare contingency scenarios',
        'Sarah (Board Member) asked about AI roadmap in last meeting',
      ],
      suggestedTopics: ['Q2 Performance vs Plan', 'Q3 Growth Strategy', 'Hiring Plan Update'],
      risks: ['Revenue below target - prepare mitigation plan', 'Burn rate increase needs justification'],
    },
  ];

  return (
    <ViewContainer
      title="Meeting Prep"
      description="AI-powered preparation for your upcoming meetings"
      icon={Calendar}
    >
      <div className="max-w-5xl mx-auto px-8 py-8 animate-fadeIn">

        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
            <div className="text-sm text-orange-700 mb-1">Needs Prep</div>
            <div className="text-3xl text-orange-900">2</div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-xl p-5">
            <div className="text-sm text-green-700 mb-1">Ready</div>
            <div className="text-3xl text-green-900">1</div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
            <div className="text-sm text-blue-700 mb-1">This Week</div>
            <div className="text-3xl text-blue-900">8</div>
          </div>
        </div>

        <div className="space-y-6 mb-8">
          <h2 className="text-slate-900">Upcoming Meetings</h2>
          {upcomingMeetings.map((meeting) => (
            <div
              key={meeting.id}
              className={`bg-white border-2 rounded-2xl p-6 ${
                meeting.critical ? 'border-orange-300' : 'border-slate-200'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-slate-900">{meeting.title}</h3>
                    {meeting.critical && (
                      <span className="text-xs px-2 py-1 bg-orange-100 text-orange-700 rounded-full">
                        Critical
                      </span>
                    )}
                    {meeting.prepared ? (
                      <CheckCircle2 className="w-5 h-5 text-green-600" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-orange-600" />
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {meeting.time}
                    </span>
                    <span>{meeting.duration}</span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {meeting.attendees.join(', ')}
                    </span>
                  </div>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  <Zap className="w-4 h-4" />
                  AI Prep
                </button>
              </div>

              <div className="bg-slate-50 rounded-xl p-4">
                <h4 className="text-sm text-slate-700 mb-3">Preparation Checklist</h4>
                <div className="space-y-2">
                  {meeting.prepItems.map((prep, index) => (
                    <div key={index} className="flex items-center gap-3">
                      {prep.status === 'complete' ? (
                        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                      ) : prep.status === 'in-progress' ? (
                        <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      ) : (
                        <div className="w-5 h-5 border-2 border-slate-300 rounded-full flex-shrink-0" />
                      )}
                      <span
                        className={`text-sm ${
                          prep.status === 'complete' ? 'text-slate-500 line-through' : 'text-slate-700'
                        }`}
                      >
                        {prep.item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-5 h-5 text-blue-700" />
            <h2 className="text-blue-900">AI Meeting Intelligence: Q2 Board Meeting</h2>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-xl p-5">
              <h4 className="text-slate-900 mb-3">Context & Insights</h4>
              <ul className="space-y-2">
                {meetingInsights[0].insights.map((insight, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-5">
              <h4 className="text-slate-900 mb-3">Suggested Topics</h4>
              <div className="flex flex-wrap gap-2">
                {meetingInsights[0].suggestedTopics.map((topic, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-blue-100 text-blue-800 rounded-lg text-sm"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle className="w-5 h-5 text-red-700" />
                <h4 className="text-red-900">Potential Challenges</h4>
              </div>
              <ul className="space-y-2">
                {meetingInsights[0].risks.map((risk, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-red-800">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span>{risk}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Generate Full Prep Brief
            </button>
          </div>
        </div>
      </div>
    </ViewContainer>
  );
}
