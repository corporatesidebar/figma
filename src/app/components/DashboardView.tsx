import { TrendingUp, CheckCircle2, Clock, Target } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const weeklyData = [
  { day: 'Mon', tasks: 12, hours: 7.5 },
  { day: 'Tue', tasks: 15, hours: 8.2 },
  { day: 'Wed', tasks: 8, hours: 6.1 },
  { day: 'Thu', tasks: 18, hours: 9.0 },
  { day: 'Fri', tasks: 14, hours: 7.8 },
];

const productivityData = [
  { time: '9AM', focus: 75 },
  { time: '10AM', focus: 85 },
  { time: '11AM', focus: 90 },
  { time: '12PM', focus: 70 },
  { time: '1PM', focus: 60 },
  { time: '2PM', focus: 80 },
  { time: '3PM', focus: 95 },
  { time: '4PM', focus: 85 },
  { time: '5PM', focus: 75 },
];

export default function DashboardView() {
  const stats = [
    { label: 'Tasks Completed', value: '67', change: '+12%', icon: CheckCircle2, color: 'text-chart-2' },
    { label: 'Hours Tracked', value: '38.6', change: '+5%', icon: Clock, color: 'text-chart-1' },
    { label: 'Goals Achieved', value: '8/10', change: '80%', icon: Target, color: 'text-chart-3' },
    { label: 'Productivity', value: '94%', change: '+8%', icon: TrendingUp, color: 'text-chart-4' },
  ];

  return (
    <div className="p-8 space-y-8">
      <div>
        <h2>Overview</h2>
        <p className="text-muted-foreground mt-1">Your productivity metrics at a glance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <div className="space-y-1">
                    <h3 className="text-3xl">{stat.value}</h3>
                    <p className="text-sm text-chart-2">{stat.change}</p>
                  </div>
                </div>
                <div className={`${stat.color} bg-muted rounded-lg p-3`}>
                  <Icon className="w-5 h-5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="mb-4">Weekly Activity</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={weeklyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="day" stroke="var(--muted-foreground)" />
              <YAxis stroke="var(--muted-foreground)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--popover)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px'
                }}
              />
              <Bar dataKey="tasks" fill="var(--chart-1)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="mb-4">Focus Score</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={productivityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="time" stroke="var(--muted-foreground)" />
              <YAxis stroke="var(--muted-foreground)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--popover)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px'
                }}
              />
              <Line
                type="monotone"
                dataKey="focus"
                stroke="var(--chart-3)"
                strokeWidth={2}
                dot={{ fill: 'var(--chart-3)', r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {[
            { action: 'Completed "Q2 Strategy Review"', time: '5 minutes ago', type: 'task' },
            { action: 'Logged 2 hours on Project Alpha', time: '23 minutes ago', type: 'time' },
            { action: 'Achievement unlocked: 5-day streak', time: '1 hour ago', type: 'goal' },
            { action: 'Meeting scheduled with Design Team', time: '2 hours ago', type: 'calendar' },
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between py-3 border-b border-border last:border-0">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-chart-2"></div>
                <span>{activity.action}</span>
              </div>
              <span className="text-sm text-muted-foreground">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
