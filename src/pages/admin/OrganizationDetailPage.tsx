import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Users, Edit, Settings, MapPin, Calendar, Trophy, BarChart3 } from "lucide-react";

const OrganizationDetailPage: React.FC = () => {
  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Elite Football Academy</h1>
        <p className="text-gray-600 dark:text-gray-400">Sports Academy · Est. 2020</p>
      </div>

      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-700 border-0">
        <CardContent className="pt-6">
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-gray-600 dark:text-gray-400">Status:</span>
                <Badge className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100">Active</Badge>
              </div>
              <p className="text-gray-700 dark:text-gray-300">A premier football academy focusing on youth development and professional training</p>
            </div>
            <div className="flex gap-3">
              <Button><Edit className="w-4 h-4 mr-2" />Edit Organization</Button>
              <Button variant="outline"><Settings className="w-4 h-4 mr-2" />Settings</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-blue-600" />
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Total Members</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">145</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <Trophy className="w-8 h-8 text-amber-600" />
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Teams</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">12</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <Calendar className="w-8 h-8 text-green-600" />
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Founded</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">2020</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <BarChart3 className="w-8 h-8 text-purple-600" />
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Activity Score</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">92</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4 dark:bg-slate-700">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="members">Members</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Organization Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Founder</p>
                  <p className="font-medium text-gray-900 dark:text-white">Ahmed Malik</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Type</p>
                  <p className="font-medium text-gray-900 dark:text-white">Sports Academy</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Location</p>
                  <p className="font-medium text-gray-900 dark:text-white">Jakarta, Indonesia</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Website</p>
                  <p className="font-medium text-gray-900 dark:text-white">elite-academy.com</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="members">
          <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Organization Members ({145})</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">Members list view coming soon</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="teams">
          <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Teams ({12})</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">Teams list view coming soon</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Organization Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">Settings configuration coming soon</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OrganizationDetailPage;
