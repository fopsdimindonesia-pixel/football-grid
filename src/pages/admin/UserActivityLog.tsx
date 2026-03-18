import { useState } from 'react';
import { Calendar, Activity } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

/**
 * UserActivityLogPage - Timeline View
 * Display all user actions in chronological order
 * Route: /admin/users/:userId/activity
 * Access: Platform Admin
 */
export default function UserActivityLogPage() {
  const [dateFilter, setDateFilter] = useState('all');
  const [actionFilter, setActionFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock activity data
  const activities = [
    { date: '2024-03-16', time: '14:23', action: 'LOGIN', details: 'Logged in from Chrome on MacOS', user: 'Ahmad Rizki', type: 'auth' },
    { date: '2024-03-16', time: '14:25', action: 'UPDATE_PROFILE', details: 'Updated profile information', user: 'Ahmad Rizki', type: 'profile' },
    { date: '2024-03-16', time: '15:10', action: 'CREATE_EVENT', details: 'Created new competition Liga U-17 2026', user: 'Ahmad Rizki', type: 'event' },
    { date: '2024-03-16', time: '16:05', action: 'INVITE_USER', details: 'Sent invitation to john@example.com', user: 'Ahmad Rizki', type: 'user' },
    { date: '2024-03-15', time: '10:30', action: 'LOGIN', details: 'Logged in from Safari on iPhone', user: 'Ahmad Rizki', type: 'auth' },
    { date: '2024-03-15', time: '11:20', action: 'VIEW_REPORT', details: 'Viewed organization quarterly report', user: 'Ahmad Rizki', type: 'report' },
    { date: '2024-03-15', time: '14:00', action: 'EXPORT_DATA', details: 'Exported user list (CSV)', user: 'Ahmad Rizki', type: 'export' },
    { date: '2024-03-14', time: '09:15', action: 'LOGOUT', details: 'Logged out', user: 'Ahmad Rizki', type: 'auth' },
  ];

  const getActionColor = (type: string) => {
    switch (type) {
      case 'auth': return 'bg-blue-100 text-blue-700';
      case 'profile': return 'bg-purple-100 text-purple-700';
      case 'event': return 'bg-green-100 text-green-700';
      case 'user': return 'bg-orange-100 text-orange-700';
      case 'report': return 'bg-indigo-100 text-indigo-700';
      case 'export': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6 p-6">
      <div className="text-sm text-muted-foreground">
        Dashboard &gt; Users &gt; Activity Log
      </div>

      <div>
        <h1 className="text-3xl font-bold tracking-tight">User Activity Log</h1>
        <p className="text-muted-foreground mt-2">View all user actions and activities</p>
      </div>

      <div className="flex gap-3 items-center flex-wrap">
        <div className="relative">
          <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Select value={dateFilter} onValueChange={setDateFilter}>
            <SelectTrigger className="pl-10 w-[150px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Time</SelectItem>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">Last 7 Days</SelectItem>
              <SelectItem value="month">Last 30 Days</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Select value={actionFilter} onValueChange={setActionFilter}>
          <SelectTrigger className="w-[150px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Actions</SelectItem>
            <SelectItem value="auth">Authentication</SelectItem>
            <SelectItem value="profile">Profile Changes</SelectItem>
            <SelectItem value="event">Events</SelectItem>
            <SelectItem value="export">Exports</SelectItem>
          </SelectContent>
        </Select>

        <Input placeholder="Search activities..." className="flex-1 min-w-[200px]" />
      </div>

      <div className="space-y-3">
        {activities.map((activity, idx) => (
          <Card key={idx} className="p-4 hover:bg-muted/50 transition-colors">
            <div className="flex gap-4">
              <div className="flex-shrink-0 flex flex-col items-center">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                {idx < activities.length - 1 && (
                  <div className="w-0.5 h-12 bg-muted mt-1"></div>
                )}
              </div>

              <div className="flex-1 pt-1">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${getActionColor(activity.type)}`}>
                        {activity.action}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {activity.date} {activity.time}
                      </span>
                    </div>
                    <p className="text-sm font-medium">{activity.details}</p>
                  </div>
                  <Button variant="ghost" size="sm">Details</Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex justify-center gap-2">
        <Button variant="outline">Previous</Button>
        <div className="px-3 py-1 text-sm">Page 1 of 5</div>
        <Button variant="outline">Next</Button>
      </div>
    </div>
  );
}
