import { TrendingUp, TrendingDown, Activity, Target } from 'lucide-react';
import { PieChart, Pie, Cell, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const projectData = [
  { name: 'Project Alpha', value: 35, hours: 42 },
  { name: 'Strategy', value: 25, hours: 30 },
  { name: 'Product Design', value: 20, hours: 24 },
  { name: 'Operations', value: 12, hours: 14 },
  { name: 'Marketing', value: 8, hours: 10 },
];

const monthlyData = [
  { month: 'Jan', productivity: 82, tasks: 45, goals: 7 },
  { month: 'Feb', productivity: 85, tasks: 52, goals: 8 },
  { month: 'Mar', productivity: 88, tasks: 58, goals: 9 },
  { month: 'Apr', productivity: 94, tasks: 67, goals: 8 },
];

const performanceData = [
  { category: 'Task Completion', current: 94, previous: 86 },
  { category: 'Time Efficiency', current: 88, previous: 82 },
  { category: 'Goal Achievement', current: 80, previous: 75 },
  { category: 'Focus Score', current: 92, previous: 85 },
];

const COLORS = ['var(--chart-1)', 'var(--chart-2)', 'var(--chart-3)', 'var(--chart-4)', 'var(--chart-5)'];

export default function AnalyticsView() {
  return (
    <div className="p-8 space-y-8">
      <div>
        <h2>Analytics</h2>
        <p className="text-muted-foreground mt-1">Deep insights into your productivity patterns</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-muted-foreground">Overall Score</p>
            <Activity className="w-5 h-5 text-chart-1" />
          </div>
          <h3 className="text-3xl mb-2">91%</h3>
          <div className="flex items-center gap-2 text-sm text-chart-2">
            <TrendingUp className="w-4 h-4" />
            <span>+7% from last month</span>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-muted-foreground">Active Projects</p>
            <Target className="w-5 h-5 text-chart-2" />
          </div>
          <h3 className="text-3xl mb-2">12</h3>
          <div className="flex items-center gap-2 text-sm text-chart-2">
            <TrendingUp className="w-4 h-4" />
            <span>+3 this month</span>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-muted-foreground">Avg. Daily Hours</p>
            <Activity className="w-5 h-5 text-chart-3" />
          </div>
          <h3 className="text-3xl mb-2">7.8h</h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <TrendingDown className="w-4 h-4" />
            <span>-0.3h from target</span>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-muted-foreground">Streak</p>
            <Target className="w-5 h-5 text-chart-4" />
          </div>
          <h3 className="text-3xl mb-2">23 days</h3>
          <div className="flex items-center gap-2 text-sm text-chart-2">
            <TrendingUp className="w-4 h-4" />
            <span>Personal best!</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="mb-4">Time by Project</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={projectData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {projectData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--popover)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <h3 className="mb-4">Monthly Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="month" stroke="var(--muted-foreground)" />
              <YAxis stroke="var(--muted-foreground)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--popover)',
                  border: '1px solid var(--border)',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Line type="monotone" dataKey="productivity" stroke="var(--chart-1)" strokeWidth={2} />
              <Line type="monotone" dataKey="tasks" stroke="var(--chart-2)" strokeWidth={2} />
              <Line type="monotone" dataKey="goals" stroke="var(--chart-3)" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h3 className="mb-4">Performance Metrics</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={performanceData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis type="number" stroke="var(--muted-foreground)" />
            <YAxis dataKey="category" type="category" stroke="var(--muted-foreground)" width={150} />
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--popover)',
                border: '1px solid var(--border)',
                borderRadius: '8px'
              }}
            />
            <Legend />
            <Bar dataKey="current" fill="var(--chart-1)" name="Current Month" radius={[0, 8, 8, 0]} />
            <Bar dataKey="previous" fill="var(--chart-4)" name="Previous Month" radius={[0, 8, 8, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-chart-1/20 to-chart-1/5 border border-border rounded-lg p-6">
          <h4 className="mb-2">Best Day</h4>
          <p className="text-3xl mb-1">Thursday</p>
          <p className="text-sm text-muted-foreground">18 tasks completed on avg</p>
        </div>

        <div className="bg-gradient-to-br from-chart-2/20 to-chart-2/5 border border-border rounded-lg p-6">
          <h4 className="mb-2">Peak Hours</h4>
          <p className="text-3xl mb-1">2PM - 4PM</p>
          <p className="text-sm text-muted-foreground">Highest focus score window</p>
        </div>

        <div className="bg-gradient-to-br from-chart-3/20 to-chart-3/5 border border-border rounded-lg p-6">
          <h4 className="mb-2">Top Project</h4>
          <p className="text-3xl mb-1">Project Alpha</p>
          <p className="text-sm text-muted-foreground">42 hours this month</p>
        </div>
      </div>
    </div>
  );
}
