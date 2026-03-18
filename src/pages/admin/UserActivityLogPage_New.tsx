import { useState } from 'react';
import { Calendar, User, Activity, ArrowUp, ArrowDown } from 'lucide-react';
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
    { date: '2024-03-16', time: '15:10', action: 'CREATE_EVENT', details: 'Created new competition "Liga U-17 2026"', user: 'Ahmad Rizki', type: 'event' },
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
      {/* Breadcrumb */}
      <div className="text-sm text-muted-foreground">
        Dashboard &gt; Users &gt; Activity Log
      </div>

      {/* PAGE HEADER */}
      <div>
        <h1 className=\"text-3xl font-bold tracking-tight\">User Activity Log</h1>\n        <p className=\"text-muted-foreground mt-2\">View all user actions and activities</p>\n      </div>\n\n      {/* FILTERS */}\n      <div className=\"flex gap-3 items-center flex-wrap\">\n        <div className=\"relative\">\n          <Calendar className=\"absolute left-3 top-2.5 h-4 w-4 text-muted-foreground\" />\n          <Select value={dateFilter} onValueChange={setDateFilter}>\n            <SelectTrigger className=\"pl-10 w-[150px]\">\n              <SelectValue />\n            </SelectTrigger>\n            <SelectContent>\n              <SelectItem value=\"all\">All Time</SelectItem>\n              <SelectItem value=\"today\">Today</SelectItem>\n              <SelectItem value=\"week\">Last 7 Days</SelectItem>\n              <SelectItem value=\"month\">Last 30 Days</SelectItem>\n            </SelectContent>\n          </Select>\n        </div>\n\n        <Select value={actionFilter} onValueChange={setActionFilter}>\n          <SelectTrigger className=\"w-[150px]\">\n            <SelectValue />\n          </SelectTrigger>\n          <SelectContent>\n            <SelectItem value=\"all\">All Actions</SelectItem>\n            <SelectItem value=\"auth\">Authentication</SelectItem>\n            <SelectItem value=\"profile\">Profile Changes</SelectItem>\n            <SelectItem value=\"event\">Events</SelectItem>\n            <SelectItem value=\"export\">Exports</SelectItem>\n          </SelectContent>\n        </Select>\n\n        <Input placeholder=\"Search activities...\" className=\"flex-1 min-w-[200px]\" />\n      </div>\n\n      {/* TIMELINE */}\n      <div className=\"space-y-3\">\n        {activities.map((activity, idx) => (\n          <Card key={idx} className=\"p-4 hover:bg-muted/50 transition-colors\">\n            <div className=\"flex gap-4\">\n              <div className=\"flex-shrink-0 flex flex-col items-center\">\n                <div className=\"w-2 h-2 bg-blue-600 rounded-full mt-2\"></div>\n                {idx < activities.length - 1 && (\n                  <div className=\"w-0.5 h-12 bg-muted mt-1\"></div>\n                )}\n              </div>\n\n              <div className=\"flex-1 pt-1\">\n                <div className=\"flex items-start justify-between\">\n                  <div className=\"flex-1\">\n                    <div className=\"flex items-center gap-2 mb-1\">\n                      <span className={`px-2 py-1 rounded text-xs font-semibold ${getActionColor(activity.type)}`}>\n                        {activity.action}\n                      </span>\n                      <span className=\"text-xs text-muted-foreground\">\n                        {activity.date} • {activity.time}\n                      </span>\n                    </div>\n                    <p className=\"text-sm font-medium\">{activity.details}</p>\n                  </div>\n                  <Button variant=\"ghost\" size=\"sm\">Details</Button>\n                </div>\n              </div>\n            </div>\n          </Card>\n        ))}\n      </div>\n\n      {/* PAGINATION */}\n      <div className=\"flex justify-center gap-2\">\n        <Button variant=\"outline\">Previous</Button>\n        <div className=\"px-3 py-1 text-sm\">Page 1 of 5</div>\n        <Button variant=\"outline\">Next</Button>\n      </div>\n    </div>\n  );\n}\n