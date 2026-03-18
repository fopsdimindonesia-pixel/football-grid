import { useState } from 'react';
import { Save, X, Bell, Lock, Eye, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

/**
 * OrganizationSettingsPage - Settings Form
 * Configure organization settings and preferences
 * Route: /org/settings
 * Access: Org Admin
 */
export default function OrganizationSettingsPage() {
  const [activeTab, setActiveTab] = useState('general');
  const [settings, setSettings] = useState({
    // General
    name: 'PSSI Jakarta',
    email: 'admin@pssi-jakarta.com',
    logo: null as File | null,
    // Notifications
    emailNotifications: true,
    matchNotifications: true,
    urgentOnly: false,
    // Security
    sessionTimeout: '30',
    requireMFA: false,
    ipWhitelist: '',
  });

  const handleSave = () => {
    console.log('Saving settings:', settings);
  };

  return (
    <div className="space-y-6 p-6">
      {/* Breadcrumb */}
      <div className="text-sm text-muted-foreground">
        Dashboard &gt; Organizations &gt; Settings
      </div>

      {/* PAGE HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Organization Settings</h1>
          <p className="text-muted-foreground mt-2">Manage your organization preferences</p>
        </div>
        <Button className="gap-2" onClick={handleSave}>
          <Save className="w-4 h-4" />
          Save Changes
        </Button>
      </div>

      {/* TAB NAVIGATION */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="branding">Branding</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>

        {/* GENERAL TAB */}
        <TabsContent value="general" className="space-y-4 mt-4">
          <Card className="p-6 space-y-4">
            <h3 className="font-semibold">General Information</h3>

            <div>
              <Label htmlFor="name">Organization Name</Label>
              <Input
                id="name"
                value={settings.name}
                onChange={(e) => setSettings(prev => ({ ...prev, name: e.target.value }))}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={settings.email}
                onChange={(e) => setSettings(prev => ({ ...prev, email: e.target.value }))}
                className="mt-1"
              />
            </div>

            <div>
              <Label htmlFor="logo">Logo</Label>
              <div className="mt-1 border-2 border-dashed rounded-lg p-6 text-center">
                <p className="text-sm text-muted-foreground">Click to upload logo</p>
              </div>
            </div>
          </Card>
        </TabsContent>

        {/* BRANDING TAB */}
        <TabsContent value="branding" className="space-y-4 mt-4">
          <Card className="p-6 space-y-4">
            <h3 className="font-semibold">Brand Customization</h3>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label>Primary Color</Label>
                <div className="mt-1 flex items-center gap-2">
                  <input type="color" defaultValue="#000000" className="w-12 h-12 rounded" />
                  <span className="text-sm text-muted-foreground">#000000</span>
                </div>
              </div>
              <div>
                <Label>Secondary Color</Label>
                <div className="mt-1 flex items-center gap-2">
                  <input type="color" defaultValue="#ffffff" className="w-12 h-12 rounded" />
                  <span className="text-sm text-muted-foreground">#ffffff</span>
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="website">Website URL</Label>
              <Input
                id="website"
                placeholder="https://your-org.com"
                className="mt-1"
              />
            </div>
          </Card>
        </TabsContent>

        {/* NOTIFICATIONS TAB */}
        <TabsContent value="notifications" className="space-y-4 mt-4">
          <Card className="p-6 space-y-4">
            <h3 className="font-semibold flex items-center gap-2">
              <Bell className="w-4 h-4" />
              Notification Preferences
            </h3>

            <div className="space-y-3">
              <label className="flex items-center gap-2 cursor-pointer p-3 border rounded-lg hover:bg-muted/50">
                <Checkbox
                  checked={settings.emailNotifications}
                  onCheckedChange={(checked) =>
                    setSettings(prev => ({ ...prev, emailNotifications: checked as boolean }))
                  }
                />
                <span className="font-medium flex-1">Email Notifications</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer p-3 border rounded-lg hover:bg-muted/50">
                <Checkbox
                  checked={settings.matchNotifications}
                  onCheckedChange={(checked) =>
                    setSettings(prev => ({ ...prev, matchNotifications: checked as boolean }))
                  }
                />
                <span className="font-medium flex-1">Match Notifications</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer p-3 border rounded-lg hover:bg-muted/50">
                <Checkbox
                  checked={settings.urgentOnly}
                  onCheckedChange={(checked) =>
                    setSettings(prev => ({ ...prev, urgentOnly: checked as boolean }))
                  }
                />
                <span className="font-medium flex-1">Only Urgent Notifications</span>
              </label>
            </div>
          </Card>
        </TabsContent>

        {/* SECURITY TAB */}
        <TabsContent value="security" className="space-y-4 mt-4">
          <Card className="p-6 space-y-4">
            <h3 className="font-semibold flex items-center gap-2">
              <Lock className="w-4 h-4" />
              Security Settings
            </h3>

            <div>
              <Label htmlFor="timeout">Session Timeout (minutes)</Label>
              <Select value={settings.sessionTimeout} onValueChange={(value) =>
                setSettings(prev => ({ ...prev, sessionTimeout: value }))
              }>
                <SelectTrigger id="timeout" className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">15 minutes</SelectItem>
                  <SelectItem value="30">30 minutes</SelectItem>
                  <SelectItem value="60">1 hour</SelectItem>
                  <SelectItem value="240">4 hours</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <label className="flex items-center gap-2 cursor-pointer p-3 border rounded-lg hover:bg-muted/50">
              <Checkbox
                checked={settings.requireMFA}
                onCheckedChange={(checked) =>
                  setSettings(prev => ({ ...prev, requireMFA: checked as boolean }))
                }
              />
              <span className="font-medium flex-1">Require Multi-Factor Authentication</span>
            </label>

            <div>
              <Label htmlFor="whitelist">IP Whitelist (comma-separated)</Label>
              <Input
                id="whitelist"
                placeholder="192.168.1.1, 10.0.0.1"
                value={settings.ipWhitelist}
                onChange={(e) => setSettings(prev => ({ ...prev, ipWhitelist: e.target.value }))}
                className="mt-1"
              />
            </div>
          </Card>
        </TabsContent>
      </Tabs>

      {/* FOOTER BUTTONS */}
      <div className="flex justify-end gap-2">
        <Button variant="outline" className="gap-2">
          <X className="w-4 h-4" />
          Cancel
        </Button>
        <Button className="gap-2" onClick={handleSave}>
          <Save className="w-4 h-4" />
          Save Changes
        </Button>
      </div>
    </div>
  );
}
