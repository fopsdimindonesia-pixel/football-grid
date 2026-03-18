import { BarChart, LineChart, Users, TrendingUp, Activity, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

/**
 * OrganizationAnalyticsPage - Dashboard Pattern C
 * View key performance indicators and analytics
 * Route: /org/analytics
 * Access: Org Admin
 */
export default function OrganizationAnalyticsPage() {
  const kpis = [
    { label: 'Total Members', value: '1,234', change: '+12%', icon: Users, color: 'bg-blue-100 text-blue-600' },
    { label: 'Active Events', value: '24', change: '+5%', icon: Activity, color: 'bg-green-100 text-green-600' },
    { label: 'Revenue', value: '$45,231', change: '+8%', icon: TrendingUp, color: 'bg-purple-100 text-purple-600' },
    { label: 'Engagement Rate', value: '78%', change: '+3%', icon: Activity, color: 'bg-orange-100 text-orange-600' },
  ];

  const chartData = [
    { month: 'Jan', value: 400, target: 350 },
    { month: 'Feb', value: 500, target: 450 },
    { month: 'Mar', value: 620, target: 600 },
    { month: 'Apr', value: 580, target: 550 },
    { month: 'May', value: 720, target: 700 },
    { month: 'Jun', value: 850, target: 800 },
  ];

  const activityData = [
    { action: 'Member Signup', count: 45, time: '2 hours ago' },
    { action: 'Event Created', count: 8, time: '5 hours ago' },
    { action: 'Revenue Generated', count: '$3,450', time: '1 day ago' },
    { action: 'Document Uploaded', count: 12, time: '2 days ago' },
  ];

  return (
    <div className="space-y-6 p-6">
      <div className="text-sm text-muted-foreground">
        Dashboard &gt; Organization &gt; Analytics
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Analytics Dashboard</h1>
          <p className="text-muted-foreground mt-2">View organization performance and metrics</p>
        </div>
        <Select defaultValue="6m">
          <SelectTrigger className="w-[150px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1m">Last Month</SelectItem>
            <SelectItem value="3m">Last 3 Months</SelectItem>
            <SelectItem value="6m">Last 6 Months</SelectItem>
            <SelectItem value="1y">Last Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {kpis.map((kpi, idx) => (
          <Card key={idx} className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-muted-foreground text-sm">{kpi.label}</p>
                <p className="text-2xl font-bold mt-2">{kpi.value}</p>
                <p className="text-xs text-green-600 mt-1">{kpi.change} vs last period</p>
              </div>
              <div className={`p-3 rounded-lg ${kpi.color}`}>
                <kpi.icon className="w-5 h-5" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Card className="p-6">
          <h3 className="font-semibold mb-4">Member Growth</h3>
          <div className="flex items-end gap-2 h-48">
            {chartData.map((data, idx) => (
              <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                <div className="flex gap-1 items-end h-32">
                  <div
                    className="bg-blue-600 rounded-t"
                    style={{ height: `${(data.value / 1000) * 100}%`, width: '60%' }}
                  ></div>
                  <div
                    className="bg-blue-200 rounded-t"
                    style={{ height: `${(data.target / 1000) * 100}%`, width: '40%' }}
                  ></div>
                </div>
                <span className="text-xs text-muted-foreground">{data.month}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-4 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded"></div>
              <span>Actual</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-200 rounded"></div>
              <span>Target</span>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-4">Revenue Trend</h3>
          <div className="flex items-end gap-1 h-48">
            {chartData.map((data, idx) => (
              <div key={idx} className="flex-1">
                <div
                  className="bg-green-600 rounded-t"
                  style={{ height: `${(data.value / 1000) * 100}%` }}
                ></div>
              </div>
            ))}
          </div>
          <p className="text-sm text-green-600 mt-4">Total Revenue: $65,450</p>
        </Card>
      </div>

      <Card className="p-6">
        <h3 className="font-semibold mb-4">Recent Activity</h3>
        <div className="space-y-3">
          {activityData.map((activity, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50">
              <div>
                <p className="font-medium">{activity.action}</p>
                <p className="text-sm text-muted-foreground">{activity.time}</p>
              </div>
              <div className="text-right">
                <p className="font-semibold">{activity.count}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="flex justify-end gap-2">
        <Button variant="outline">Export Report</Button>
        <Button>Share Dashboard</Button>
      </div>
    </div>
  );
}
