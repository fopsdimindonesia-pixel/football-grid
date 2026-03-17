import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, Phone, MapPin, Calendar, Edit, Key } from "lucide-react";

const UserProfileDetailPage: React.FC = () => {
  const user = {
    id: 1,
    name: "John Smith",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    role: "Administrator",
    status: "Active",
    joinDate: "2024-01-15",
    lastLogin: "2024-03-17 14:30",
    organization: "Elite Football Academy",
    bio: "Football coach with 15 years of experience",
  };

  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{user.name}</h1>
          <div className="flex items-center gap-2">
            <Badge className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100">{user.role}</Badge>
            <Badge className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100">{user.status}</Badge>
          </div>
        </div>
        <div className="flex gap-2">
          <Button className="bg-blue-600 hover:bg-blue-700"><Edit className="w-4 h-4 mr-2" />Edit Profile</Button>
          <Button variant="outline"><Key className="w-4 h-4 mr-2" />Reset Password</Button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-2">
              <Mail className="w-4 h-4 text-blue-600" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Email</span>
            </div>
            <p className="font-semibold text-gray-900 dark:text-white">{user.email}</p>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-2">
              <Phone className="w-4 h-4 text-green-600" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Phone</span>
            </div>
            <p className="font-semibold text-gray-900 dark:text-white">{user.phone}</p>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-purple-600" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Location</span>
            </div>
            <p className="font-semibold text-gray-900 dark:text-white">{user.location}</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="permissions">Permissions</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4 mt-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Organization</p>
                  <p className="text-gray-900 dark:text-white">{user.organization}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Joined Date</p>
                  <p className="text-gray-900 dark:text-white">{user.joinDate}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Last Login</p>
                  <p className="text-gray-900 dark:text-white">{user.lastLogin}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Status</p>
                  <Badge className="mt-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100">{user.status}</Badge>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Bio</p>
                <p className="text-gray-900 dark:text-white mt-1">{user.bio}</p>
              </div>
            </TabsContent>

            <TabsContent value="activity" className="space-y-4 mt-6">
              <p className="text-sm text-gray-600 dark:text-gray-400">Activity tracking and login history</p>
              <div className="space-y-2">
                <p className="text-sm">Last login: {user.lastLogin}</p>
                <p className="text-sm">Account created: {user.joinDate}</p>
              </div>
            </TabsContent>

            <TabsContent value="permissions" className="space-y-4 mt-6">
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" defaultChecked className="rounded" id="perm1" />
                  <label htmlFor="perm1" className="ml-2 text-sm text-gray-700 dark:text-gray-300">Read system data</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" defaultChecked className="rounded" id="perm2" />
                  <label htmlFor="perm2" className="ml-2 text-sm text-gray-700 dark:text-gray-300">Write system data</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" defaultChecked className="rounded" id="perm3" />
                  <label htmlFor="perm3" className="ml-2 text-sm text-gray-700 dark:text-gray-300">Delete system data</label>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserProfileDetailPage;
