import { useState } from 'react';
import { User, Mail, Phone, MapPin, Edit2, Save, X, MoreVertical, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

/**
 * UserSelfProfilePage - Pattern B (Detail/Profile)
 * User personal profile, settings, and privacy management
 * Route: /profile
 * Access: Authenticated Users
 */
export default function UserSelfProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [profile, setProfile] = useState({
    name: 'Ahmad Rizki',
    email: 'ahmad@example.com',
    phone: '+62 812-3456-7890',
    location: 'Jakarta, Indonesia',
    role: 'Coach',
    bio: 'Passionate football coach with 10+ years experience',
    avatar: 'https://via.placeholder.com/128',
    joinDate: '2023-01-15',
  });

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    smsNotifications: false,
    pushNotifications: true,
    weeklyDigest: true,
    monthlyReport: false,
  });

  const [privacy, setPrivacy] = useState({
    profilePublic: true,
    showEmail: false,
    showPhone: false,
    showLocation: true,
    allowMessages: true,
  });

  const handleSave = () => {
    setIsEditing(false);
    console.log('Profile saved:', profile);
  };

  return (
    <div className="space-y-6 p-6">
      <div className="text-sm text-muted-foreground">
        Dashboard &gt; My Profile
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
          <TabsTrigger value="privacy">Privacy & Security</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6 mt-4">
          <Card className="p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="w-20 h-20">
                  <AvatarImage src={profile.avatar} />
                  <AvatarFallback>AR</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-2xl font-bold">{profile.name}</h2>
                  <p className="text-muted-foreground">{profile.role}</p>
                  <p className="text-sm text-muted-foreground mt-1">Joined {profile.joinDate}</p>
                </div>
              </div>
              <Button
                variant={isEditing ? 'destructive' : 'default'}
                onClick={() => isEditing ? setIsEditing(false) : setIsEditing(true)}
                className="gap-2"
              >
                {isEditing ? (
                  <>
                    <X className="w-4 h-4" />
                    Cancel
                  </>
                ) : (
                  <>
                    <Edit2 className="w-4 h-4" />
                    Edit Profile
                  </>
                )}
              </Button>
            </div>
          </Card>

          <div className="grid grid-cols-2 gap-4">
            {isEditing ? (
              <>
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={profile.name}
                    onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="role">Role</Label>
                  <Select value={profile.role} onValueChange={(value) => setProfile(prev => ({ ...prev, role: value }))}>
                    <SelectTrigger id="role" className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Coach">Coach</SelectItem>
                      <SelectItem value="Manager">Manager</SelectItem>
                      <SelectItem value="Player">Player</SelectItem>
                      <SelectItem value="Staff">Staff</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </>
            ) : (
              <>
                <Card className="p-4">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium mt-1">{profile.email}</p>
                </Card>
                <Card className="p-4">
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium mt-1">{profile.phone || 'Not provided'}</p>
                </Card>
              </>
            )}
          </div>

          {isEditing && (
            <>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={profile.email}
                  onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={profile.phone}
                  onChange={(e) => setProfile(prev => ({ ...prev, phone: e.target.value }))}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={profile.location}
                  onChange={(e) => setProfile(prev => ({ ...prev, location: e.target.value }))}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="bio">Bio</Label>
                <Input
                  id="bio"
                  value={profile.bio}
                  onChange={(e) => setProfile(prev => ({ ...prev, bio: e.target.value }))}
                  className="mt-1"
                />
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
                <Button onClick={handleSave} className="gap-2">
                  <Save className="w-4 h-4" />
                  Save Changes
                </Button>
              </div>
            </>
          )}
        </TabsContent>

        <TabsContent value="preferences" className="space-y-4 mt-4">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Notification Preferences</h3>
            <div className="space-y-3">
              {Object.entries(preferences).map(([key, value]) => (
                <label key={key} className="flex items-center gap-2 cursor-pointer p-3 border rounded-lg hover:bg-muted/50">
                  <Checkbox
                    checked={value}
                    onCheckedChange={(checked) =>
                      setPreferences(prev => ({ ...prev, [key]: checked as boolean }))
                    }
                  />
                  <span className="font-medium capitalize flex-1">{key.replace(/([A-Z])/g, ' $1')}</span>
                </label>
              ))}
            </div>
          </Card>

          <div className="flex justify-end">
            <Button>Save Preferences</Button>
          </div>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-4 mt-4">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Privacy Settings</h3>
            <div className="space-y-3">
              {Object.entries(privacy).map(([key, value]) => (
                <label key={key} className="flex items-center gap-2 cursor-pointer p-3 border rounded-lg hover:bg-muted/50">
                  <Checkbox
                    checked={value}
                    onCheckedChange={(checked) =>
                      setPrivacy(prev => ({ ...prev, [key]: checked as boolean }))
                    }
                  />
                  <span className="font-medium capitalize flex-1">{key.replace(/([A-Z])/g, ' $1')}</span>
                </label>
              ))}
            </div>
          </Card>

          <Card className="p-6 border-red-200 bg-red-50">
            <h3 className="font-semibold text-red-900 mb-2">Danger Zone</h3>
            <p className="text-sm text-red-800 mb-4">Permanently delete your account and all associated data</p>
            <Button variant="destructive">Delete Account</Button>
          </Card>

          <div className="flex justify-end">
            <Button>Save Privacy Settings</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
