import { useState } from 'react';
import { Play, Pause, Square, Clock } from 'lucide-react';

interface TimeEntry {
  id: number;
  project: string;
  task: string;
  duration: string;
  date: string;
}

export default function TimeView() {
  const [isTracking, setIsTracking] = useState(false);
  const [currentTime, setCurrentTime] = useState('00:00:00');
  const [currentProject, setCurrentProject] = useState('');

  const timeEntries: TimeEntry[] = [
    { id: 1, project: 'Project Alpha', task: 'Development', duration: '2h 30m', date: 'Today' },
    { id: 2, project: 'Strategy Review', task: 'Analysis', duration: '1h 15m', date: 'Today' },
    { id: 3, project: 'Team Meeting', task: 'Planning', duration: '45m', date: 'Today' },
    { id: 4, project: 'Product Design', task: 'Review', duration: '3h 20m', date: 'Yesterday' },
    { id: 5, project: 'Client Presentation', task: 'Preparation', duration: '1h 50m', date: 'Yesterday' },
  ];

  const projects = ['Project Alpha', 'Strategy Review', 'Product Design', 'Operations', 'Marketing'];

  const toggleTracking = () => {
    setIsTracking(!isTracking);
  };

  return (
    <div className="p-8 space-y-8">
      <div>
        <h2>Time Tracking</h2>
        <p className="text-muted-foreground mt-1">Track and manage your time efficiently</p>
      </div>

      <div className="bg-gradient-to-br from-chart-1/20 to-chart-3/20 border border-border rounded-lg p-8">
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/50 rounded-lg">
              <Clock className="w-4 h-4" />
              <span className="text-sm text-muted-foreground">
                {isTracking ? 'Tracking in progress' : 'Ready to track'}
              </span>
            </div>
            <div className="text-6xl tabular-nums tracking-tight">
              {currentTime}
            </div>
          </div>

          <div className="space-y-3">
            <select
              value={currentProject}
              onChange={(e) => setCurrentProject(e.target.value)}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg"
            >
              <option value="">Select a project...</option>
              {projects.map((project) => (
                <option key={project} value={project}>{project}</option>
              ))}
            </select>

            <div className="flex gap-3">
              {!isTracking ? (
                <button
                  onClick={toggleTracking}
                  disabled={!currentProject}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-chart-2 text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Play className="w-5 h-5" />
                  Start Timer
                </button>
              ) : (
                <>
                  <button
                    onClick={toggleTracking}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-chart-1 text-white rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <Pause className="w-5 h-5" />
                    Pause
                  </button>
                  <button
                    onClick={() => {
                      setIsTracking(false);
                      setCurrentTime('00:00:00');
                      setCurrentProject('');
                    }}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-destructive text-destructive-foreground rounded-lg hover:opacity-90 transition-opacity"
                  >
                    <Square className="w-5 h-5" />
                    Stop
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-sm text-muted-foreground">Today</p>
          <h3 className="mt-2">5h 30m</h3>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-sm text-muted-foreground">This Week</p>
          <h3 className="mt-2">38h 45m</h3>
        </div>
        <div className="bg-card border border-border rounded-lg p-6">
          <p className="text-sm text-muted-foreground">This Month</p>
          <h3 className="mt-2">167h 20m</h3>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="mb-4">Recent Time Entries</h3>
        <div className="space-y-3">
          {timeEntries.map((entry) => (
            <div
              key={entry.id}
              className="flex items-center justify-between p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
            >
              <div className="flex-1">
                <h4>{entry.project}</h4>
                <p className="text-sm text-muted-foreground mt-1">{entry.task}</p>
              </div>
              <div className="text-right space-y-1">
                <div className="px-3 py-1 bg-chart-1/20 text-chart-1 rounded-lg inline-block">
                  {entry.duration}
                </div>
                <p className="text-sm text-muted-foreground">{entry.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
