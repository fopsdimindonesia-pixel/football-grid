import { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, Edit2, MoreVertical, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { StatusBadge } from '@/components/shared/StatusBadge';

/**
 * UserProfileDetailPage - Pattern B: Detail/Profile
 * Displays detailed user profile with tabs for overview, activity, and settings
 */
export default function UserProfileDetailPage() {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock user data - replace with API call from route params
  const user = {
    id: '1',
    name: 'John Smith',
    email: 'john@example.com',
    role: 'Administrator',
    status: 'active',
    avatar: '/avatars/user-1.jpg',
    joinDate: '2024-01-15',
    lastActive: '2024-03-18 14:32',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    department: 'Platform Admin',
    twoFactorEnabled: true,
    bio: 'Platform administrator managing SoccerOS workflows',
  };

  const activityLog = [
    { date: '2024-03-18', action: 'Logged in', time: '14:32' },
    { date: '2024-03-17', action: 'Updated profile photo', time: '10:15' },
    { date: '2024-03-16', action: 'Created user account', time: '09:45' },
    { date: '2024-03-15', action: 'Logged in', time: '15:20' },
  ];

  const stats = [
    { label: 'Active Sessions', value: '3' },
    { label: 'Last Activity', value: '2 min ago' },
    { label: 'Account Age', value: '74 days' },
  ];

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="text-sm text-muted-foreground">
        Dashboard &gt; Users & Organizations &gt; User Directory &gt; Profile
      </div>

      {/* PROFILE HEADER - Pattern B */}
      <Card className="p-6">
        <div className="flex items-start justify-between gap-6">
          <div className="flex gap-4 items-start flex-1">
            <Avatar className="w-24 h-24">
              <AvatarImage src={user.avatar} />
              <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-2xl font-bold">{user.name}</h1>
                <Badge variant="default">{user.role}</Badge>
                {user.status === 'active' && <Badge className="bg-green-100 text-green-800">Active</Badge>}
              </div>
              <p className="text-muted-foreground mb-3">{user.email}</p>
              <div className="flex gap-4 text-sm text-muted-foreground flex-wrap">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {user.location}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Joined {new Date(user.joinDate).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <Edit2 className="w-4 h-4" />
              Edit
            </Button>
            <Button variant="outline" size="icon">
              <MoreVertical className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </Card>

      {/* TAB BAR - Pattern B */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="permissions">Permissions</TabsTrigger>
        </TabsList>

        {/* OVERVIEW TAB */}
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* INFO CARD */}
            <Card className="p-6 md:col-span-2">
              <h3 className="font-semibold mb-4">Basic Information</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email:</span>
                  <span className="font-medium">{user.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Phone:</span>
                  <span className="font-medium">{user.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Role:</span>
                  <span className="font-medium">{user.role}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Department:</span>
                  <span className="font-medium">{user.department}</span>
                </div>
              </div>
            </Card>

            {/* STATS CARD */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Statistics</h3>
              <div className="space-y-3">
                {stats.map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                    <div className="text-lg font-semibold">{stat.value}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* BIO SECTION */}
          <Card className="p-6">
            <h3 className="font-semibold mb-3">Bio</h3>
            <p className="text-muted-foreground">{user.bio || 'No bio provided'}</p>
          </Card>
        </TabsContent>

        {/* ACTIVITY TAB */}
        <TabsContent value="activity">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-4">
              {activityLog.map((log, idx) => (
                <div key={idx} className="flex items-start gap-3 pb-3 border-b last:border-0">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="font-medium">{log.action}</div>
                    <div className="text-sm text-muted-foreground">{log.date} at {log.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        {/* SECURITY TAB */}
        <TabsContent value="security">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Security Settings</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Two-Factor Authentication</div>
                  <div className="text-sm text-muted-foreground">Protect your account with 2FA</div>
                </div>
                <div className="flex items-center gap-2">
                  {user.twoFactorEnabled && <Badge className="bg-green-100 text-green-800">Enabled</Badge>}
                  <Button variant="outline" size="sm">
                    {user.twoFactorEnabled ? 'Disable' : 'Enable'}
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-between pt-4 border-t">
                <div>
                  <div className="font-medium">Change Password</div>
                  <div className="text-sm text-muted-foreground">Update your password</div>
                </div>
                <Button variant="outline" size="sm" className="gap-2">
                  <Lock className="w-4 h-4" />
                  Change
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* PERMISSIONS TAB */}
        <TabsContent value="permissions">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Role & Permissions</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">Current Role:</span>
                <Badge variant="outline">{user.role}</Badge>
              </div>
              <div className="flex items-center justify-between pt-4 border-t">
                <span className="text-muted-foreground">Manage Permissions:</span>
                <Button variant="outline" size="sm">Edit</Button>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
