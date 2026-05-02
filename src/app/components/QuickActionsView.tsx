import { Calendar, Mail, FileText, Users, Video, Briefcase, MessageSquare, Bell } from 'lucide-react';

export default function QuickActionsView() {
  const quickActions = [
    { icon: Calendar, label: 'Schedule Meeting', description: 'Set up a new meeting', color: 'bg-chart-1' },
    { icon: Mail, label: 'Send Email', description: 'Compose a message', color: 'bg-chart-2' },
    { icon: FileText, label: 'Create Document', description: 'Start a new document', color: 'bg-chart-3' },
    { icon: Users, label: 'Team Chat', description: 'Message your team', color: 'bg-chart-4' },
    { icon: Video, label: 'Start Video Call', description: 'Launch instant meeting', color: 'bg-chart-5' },
    { icon: Briefcase, label: 'New Project', description: 'Create a project', color: 'bg-chart-1' },
    { icon: MessageSquare, label: 'Quick Note', description: 'Jot down ideas', color: 'bg-chart-2' },
    { icon: Bell, label: 'Set Reminder', description: 'Add a reminder', color: 'bg-chart-3' },
  ];

  const recentFiles = [
    { name: 'Q2 Financial Report.pdf', type: 'PDF', size: '2.4 MB', modified: '2 hours ago' },
    { name: 'Strategy Presentation.pptx', type: 'Presentation', size: '8.1 MB', modified: '5 hours ago' },
    { name: 'Team Meeting Notes.doc', type: 'Document', size: '156 KB', modified: 'Yesterday' },
    { name: 'Project Timeline.xlsx', type: 'Spreadsheet', size: '892 KB', modified: '2 days ago' },
  ];

  const upcomingEvents = [
    { title: 'Executive Meeting', time: '2:00 PM - 3:00 PM', attendees: 8 },
    { title: 'Product Review', time: '3:30 PM - 4:30 PM', attendees: 5 },
    { title: 'Client Call', time: '5:00 PM - 5:30 PM', attendees: 3 },
  ];

  return (
    <div className="p-8 space-y-8">
      <div>
        <h2>Quick Actions</h2>
        <p className="text-muted-foreground mt-1">Access your most-used tools instantly</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickActions.map((action, index) => {
          const Icon = action.icon;
          return (
            <button
              key={index}
              className="group bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg transition-all text-left"
            >
              <div className={`${action.color} text-white rounded-lg p-3 w-fit mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6" />
              </div>
              <h4 className="mb-1">{action.label}</h4>
              <p className="text-sm text-muted-foreground">{action.description}</p>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="mb-4">Recent Files</h3>
          <div className="space-y-3">
            {recentFiles.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm">{file.name}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{file.size} • {file.modified}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="mb-4">Today's Schedule</h3>
          <div className="space-y-3">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="p-4 bg-gradient-to-r from-chart-1/10 to-chart-3/10 border-l-4 border-chart-1 rounded-lg"
              >
                <h4>{event.title}</h4>
                <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {event.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {event.attendees} attendees
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-primary/5 to-chart-3/5 border border-border rounded-lg p-8 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
            <Briefcase className="w-8 h-8 text-primary" />
          </div>
          <h3>Boost Your Productivity</h3>
          <p className="text-muted-foreground">
            Customize your quick actions to match your workflow. Add your most-used tools and integrations for instant access.
          </p>
          <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
            Customize Actions
          </button>
        </div>
      </div>
    </div>
  );
}
