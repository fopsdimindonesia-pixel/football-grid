import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, Users, Trophy, TrendingUp, Calendar, AlertCircle } from "lucide-react";

const ClubDashboardPage: React.FC = () => {
  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Club Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400">Overview and management of club operations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Total Players</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">48</p>
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">+3 this month</p>
              </div>
              <Users className="w-10 h-10 text-blue-600 opacity-20" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Season Wins</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">24</p>
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">67% win rate</p>
              </div>
              <Trophy className="w-10 h-10 text-amber-600 opacity-20" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">League Position</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">3rd</p>
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">↑ 1 position</p>
              </div>
              <TrendingUp className="w-10 h-10 text-green-600 opacity-20" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Upcoming Match</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">5 days</p>
                <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-1">vs City FC</p>
              </div>
              <Calendar className="w-10 h-10 text-purple-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Performance Trend</h3>
            <div className="h-64 bg-gray-50 dark:bg-slate-700/50 rounded flex items-center justify-center text-gray-500 dark:text-gray-400">
              <p className="text-sm">Chart visualization</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Recent Alerts</h3>
            <div className="space-y-3">
              <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-red-900 dark:text-red-100">Player Injury</p>
                  <p className="text-xs text-red-800 dark:text-red-200">Forward sidelined for 3 weeks</p>
                </div>
              </div>
              <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-yellow-900 dark:text-yellow-100">License Renewal</p>
                  <p className="text-xs text-yellow-800 dark:text-yellow-200">Due in 30 days</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Team Statistics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Goals Scored</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">96</p>
            </div>
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Goals Conceded</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">34</p>
            </div>
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Clean Sheets</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">12</p>
            </div>
            <div>
              <p className="text-xs text-gray-600 dark:text-gray-400">Possession %</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">62%</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClubDashboardPage;
