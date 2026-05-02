import { DollarSign, TrendingUp, TrendingDown, AlertTriangle, Target } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import ViewContainer from './ViewContainer';

const revenueData = [
  { month: 'Oct', revenue: 820, target: 800, runway: 18 },
  { month: 'Nov', revenue: 950, target: 900, runway: 18 },
  { month: 'Dec', revenue: 1100, target: 1000, runway: 19 },
  { month: 'Jan', revenue: 980, target: 1100, runway: 18 },
  { month: 'Feb', revenue: 1150, target: 1200, runway: 19 },
  { month: 'Mar', revenue: 1300, target: 1300, runway: 20 },
  { month: 'Apr', revenue: 1200, target: 1400, runway: 19 },
];

const burnData = [
  { month: 'Oct', burn: 420, revenue: 820 },
  { month: 'Nov', burn: 445, revenue: 950 },
  { month: 'Dec', burn: 480, revenue: 1100 },
  { month: 'Jan', burn: 455, revenue: 980 },
  { month: 'Feb', burn: 490, revenue: 1150 },
  { month: 'Mar', burn: 510, revenue: 1300 },
  { month: 'Apr', burn: 520, revenue: 1200 },
];

export default function FinancialSnapshotView() {
  return (
    <ViewContainer
      title="Financial Snapshot"
      description="Real-time view of company financial health"
      icon={DollarSign}
    >
      <div className="max-w-6xl mx-auto px-8 py-8 animate-fadeIn">

        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-4 h-4 text-green-700" />
              <div className="text-sm text-green-700">MRR</div>
            </div>
            <div className="text-3xl text-green-900 mb-1">$1.2M</div>
            <div className="flex items-center gap-1 text-sm text-green-700">
              <TrendingUp className="w-4 h-4" />
              <span>+12% MoM</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-4 h-4 text-blue-700" />
              <div className="text-sm text-blue-700">ARR</div>
            </div>
            <div className="text-3xl text-blue-900 mb-1">$14.4M</div>
            <div className="text-sm text-blue-700">Target: $21M</div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 border border-orange-200 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <TrendingDown className="w-4 h-4 text-orange-700" />
              <div className="text-sm text-orange-700">Burn Rate</div>
            </div>
            <div className="text-3xl text-orange-900 mb-1">$520K</div>
            <div className="flex items-center gap-1 text-sm text-orange-700">
              <TrendingUp className="w-4 h-4" />
              <span>+8% MoM</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <AlertTriangle className="w-4 h-4 text-purple-700" />
              <div className="text-sm text-purple-700">Runway</div>
            </div>
            <div className="text-3xl text-purple-900 mb-1">19 mo</div>
            <div className="text-sm text-purple-700">Cash: $9.8M</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-white border-2 border-slate-200 rounded-2xl p-6">
            <h2 className="text-slate-900 mb-4">Revenue vs Target</h2>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="target"
                  stroke="#94a3b8"
                  fill="#f1f5f9"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#3b82f6"
                  fill="#dbeafe"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white border-2 border-slate-200 rounded-2xl p-6">
            <h2 className="text-slate-900 mb-4">Burn vs Revenue</h2>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={burnData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                  }}
                />
                <Bar dataKey="revenue" fill="#10b981" radius={[8, 8, 0, 0]} />
                <Bar dataKey="burn" fill="#f59e0b" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
            <h3 className="text-slate-900 mb-4">Top Revenue Sources</h3>
            <div className="space-y-3">
              {[
                { name: 'Enterprise', amount: '$780K', share: 65, color: 'blue' },
                { name: 'Mid-Market', amount: '$300K', share: 25, color: 'green' },
                { name: 'SMB', amount: '$120K', share: 10, color: 'purple' },
              ].map((source, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-slate-700">{source.name}</span>
                    <span className="text-sm text-slate-900">{source.amount}</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-${source.color}-500`}
                      style={{ width: `${source.share}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border-2 border-slate-200 rounded-xl p-6">
            <h3 className="text-slate-900 mb-4">Key Metrics</h3>
            <div className="space-y-3">
              {[
                { label: 'CAC', value: '$8,200', change: '-5%', positive: true },
                { label: 'LTV', value: '$42,000', change: '+12%', positive: true },
                { label: 'LTV:CAC', value: '5.1x', change: '+0.8x', positive: true },
                { label: 'Gross Margin', value: '78%', change: '+2%', positive: true },
              ].map((metric, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-sm text-slate-600">{metric.label}</span>
                  <div className="text-right">
                    <div className="text-slate-900">{metric.value}</div>
                    <div
                      className={`text-xs ${
                        metric.positive ? 'text-green-600' : 'text-red-600'
                      }`}
                    >
                      {metric.change}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-red-700" />
              <h3 className="text-red-900">Financial Alerts</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3">
                <p className="text-sm text-slate-700 mb-1">Burn rate up 8% MoM</p>
                <p className="text-xs text-slate-500">Review Q2 spending plan</p>
              </div>
              <div className="bg-white rounded-lg p-3">
                <p className="text-sm text-slate-700 mb-1">Below revenue target</p>
                <p className="text-xs text-slate-500">-14% vs plan this month</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 text-white rounded-2xl p-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="mb-2">Forecast: Path to Profitability</h2>
              <p className="text-slate-300">
                At current growth rate (12% MoM), reaching break-even in 8 months (Dec 2026).
                Accelerating to 15% MoM moves date to Oct 2026.
              </p>
            </div>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              View Full Model
            </button>
          </div>
        </div>
      </div>
    </ViewContainer>
  );
}
