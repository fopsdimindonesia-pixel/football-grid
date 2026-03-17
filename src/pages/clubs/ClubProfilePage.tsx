import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Calendar, Users, Trophy, Edit, Settings } from "lucide-react";

const ClubProfilePage: React.FC = () => {
  return (
    <div className="space-y-6 pb-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Club Profile</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage club information and details</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline"><Settings className="w-4 h-4 mr-2" />Settings</Button>
          <Button><Edit className="w-4 h-4 mr-2" />Edit Club</Button>
        </div>
      </div>

      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-700 border-0">
        <CardContent className="pt-6">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Metropolitan United</h2>
              <div className="flex items-center gap-2">
                <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100">Established 1998</Badge>
                <Badge className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100">Active</Badge>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-2">Premier League football club</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <MapPin className="w-8 h-8 text-blue-600" />
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Location</p>
                <p className="font-medium text-gray-900 dark:text-white">London, UK</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <Users className="w-8 h-8 text-green-600" />
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Total Players</p>
                <p className="font-medium text-gray-900 dark:text-white">48</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <Trophy className="w-8 h-8 text-amber-600" />
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Titles Won</p>
                <p className="font-medium text-gray-900 dark:text-white">15</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <Calendar className="w-8 h-8 text-purple-600" />
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Founded</p>
                <p className="font-medium text-gray-900 dark:text-white">1998</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-4 dark:bg-slate-700">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="officers">Officers</TabsTrigger>
          <TabsTrigger value="facilities">Facilities</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Club Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">President</p>
                  <p className="font-medium text-gray-900 dark:text-white">John Smith</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Manager</p>
                  <p className="font-medium text-gray-900 dark:text-white">Sarah Johnson</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Stadium</p>
                  <p className="font-medium text-gray-900 dark:text-white">Metropolitan Park</p>
                </div>
                <div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Capacity</p>
                  <p className="font-medium text-gray-900 dark:text-white">60,000</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="officers">
          <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Club Officers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">Officers list coming soon</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="facilities">
          <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Club Facilities</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">Facilities information coming soon</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history">
          <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Club History</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">Historical records coming soon</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ClubProfilePage;
