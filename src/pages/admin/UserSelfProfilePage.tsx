import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Phone, MapPin, Calendar, Lock, Edit, Settings } from "lucide-react";

const UserSelfProfilePage: React.FC = () => {
  const [user] = useState({
    name: "Ahmed Malik",
    role: "Administrator",
    email: "ahmed@example.com",
    phone: "+1234567890",
    location: "Jakarta, Indonesia",
    joinDate: "2020-06-15",
    lastLogin: "2024-01-19",
    bio: "Football enthusiast and academy founder",
    status: "Active",
  });

  return (
    <div className="space-y-6 pb-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">My Profile</h1>
          <p className="text-gray-600 dark:text-gray-400">View and manage your personal information</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline"><Settings className="w-4 h-4 mr-2" />Preferences</Button>
          <Button><Edit className="w-4 h-4 mr-2" />Edit Profile</Button>
        </div>
      </div>

      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-700 border-0">
        <CardContent className="pt-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{user.name}</h2>
              <div className="flex items-center gap-2">
                <Badge className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100">{user.role}</Badge>
                <Badge className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100">{user.status}</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <Mail className="w-8 h-8 text-blue-600" />
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Email</p>
                <p className="font-medium text-gray-900 dark:text-white">{user.email}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <Phone className="w-8 h-8 text-green-600" />
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Phone</p>
                <p className="font-medium text-gray-900 dark:text-white">{user.phone}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <MapPin className="w-8 h-8 text-purple-600" />
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Location</p>
                <p className="font-medium text-gray-900 dark:text-white">{user.location}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3 dark:bg-slate-700">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Profile Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Member Since</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <p className="font-medium text-gray-900 dark:text-white">{user.joinDate}</p>
                  </div>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Last Login</p>
                  <p className="font-medium text-gray-900 dark:text-white mt-2">{user.lastLogin}</p>
                </div>
              </div>

              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Bio</p>
                <p className="text-gray-900 dark:text-white mt-2">{user.bio}</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Security Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 border border-gray-200 dark:border-slate-700 rounded-lg flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    Password
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Last changed 60 days ago</p>
                </div>
                <Button variant="outline" size="sm">Change</Button>
              </div>

              <div className="p-4 border border-gray-200 dark:border-slate-700 rounded-lg flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    Two-Factor Authentication
                  </p>
                  <Badge className="mt-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100">Enabled</Badge>
                </div>
                <Button variant="outline" size="sm">Manage</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity">
          <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 dark:bg-slate-700/50 rounded">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Login</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">2024-01-19 14:30</p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-slate-700/50 rounded">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Profile Updated</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">2024-01-18 10:15</p>
                </div>
                <div className="p-3 bg-gray-50 dark:bg-slate-700/50 rounded">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Login</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">2024-01-17 09:45</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UserSelfProfilePage;
