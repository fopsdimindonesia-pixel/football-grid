import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Users, Trophy, Activity } from "lucide-react";

const OrganizationAnalyticsPage: React.FC = () => {
  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Organization Analytics</h1>
        <p className="text-gray-600 dark:text-gray-400">Performance metrics and organizational insights</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Total Members</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">145</p>
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">+12 this month</p>
              </div>
              <Users className="w-10 h-10 text-blue-600 opacity-20" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Active Teams</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">12</p>
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">+2 new teams</p>
              </div>
              <Trophy className="w-10 h-10 text-amber-600 opacity-20" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Engagement Rate</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">78%</p>
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">+5% from last month</p>
              </div>
              <Activity className="w-10 h-10 text-green-600 opacity-20" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Events Hosted</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">24</p>
                <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-1">8 upcoming</p>
              </div>
              <BarChart3 className="w-10 h-10 text-purple-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Member Growth</h3>
            <div className="h-64 bg-gray-50 dark:bg-slate-700/50 rounded flex items-center justify-center text-gray-500 dark:text-gray-400">
              <p className="text-sm">Chart visualization coming soon</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Activity Distribution</h3>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-700 dark:text-gray-300">Events</span>
                  <span className="font-semibold text-gray-900 dark:text-white">42%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: "42%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-700 dark:text-gray-300">Training</span>
                  <span className="font-semibold text-gray-900 dark:text-white">28%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: "28%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-700 dark:text-gray-300">Meetings</span>
                  <span className="font-semibold text-gray-900 dark:text-white">20%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: "20%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-700 dark:text-gray-300">Other</span>
                  <span className="font-semibold text-gray-900 dark:text-white">10%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-2">
                  <div className="bg-amber-600 h-2 rounded-full" style={{ width: "10%" }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Top Performers</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-slate-700/50 rounded">
              <span className="text-sm text-gray-900 dark:text-white">John Smith - Coach</span>
              <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100">245 points</Badge>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-slate-700/50 rounded">
              <span className="text-sm text-gray-900 dark:text-white">Sarah Johnson - Coach</span>
              <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100">198 points</Badge>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-slate-700/50 rounded">
              <span className="text-sm text-gray-900 dark:text-white">Mike Wilson - Player</span>
              <Badge className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100">156 points</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrganizationAnalyticsPage;
