import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DollarSign, TrendingUp, PieChart, AlertCircle } from "lucide-react";

const ClubFinancialOverviewPage: React.FC = () => {
  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Financial Overview</h1>
        <p className="text-gray-600 dark:text-gray-400">Club budget and financial performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Total Revenue</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">$45.2M</p>
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">+12% YoY</p>
              </div>
              <DollarSign className="w-10 h-10 text-green-600 opacity-20" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Total Expenses</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">$38.5M</p>
                <p className="text-xs text-red-600 dark:text-red-400 mt-1">+8% YoY</p>
              </div>
              <AlertCircle className="w-10 h-10 text-red-600 opacity-20" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Net Profit</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">$6.7M</p>
                <p className="text-xs text-green-600 dark:text-green-400 mt-1">Healthy margin</p>
              </div>
              <TrendingUp className="w-10 h-10 text-blue-600 opacity-20" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Budget Usage</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">85%</p>
                <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-1">Current season</p>
              </div>
              <PieChart className="w-10 h-10 text-amber-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Revenue Breakdown</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700 dark:text-gray-300">Ticket Sales</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 bg-gray-200 dark:bg-slate-600 rounded h-2">
                    <div className="bg-blue-600 h-2 rounded" style={{ width: "35%" }}></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">35%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700 dark:text-gray-300">Sponsorship</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 bg-gray-200 dark:bg-slate-600 rounded h-2">
                    <div className="bg-green-600 h-2 rounded" style={{ width: "40%" }}></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">40%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700 dark:text-gray-300">Merchandise</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 bg-gray-200 dark:bg-slate-600 rounded h-2">
                    <div className="bg-purple-600 h-2 rounded" style={{ width: "15%" }}></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">15%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700 dark:text-gray-300">Broadcasting</span>
                <div className="flex items-center gap-2">
                  <div className="w-32 bg-gray-200 dark:bg-slate-600 rounded h-2">
                    <div className="bg-orange-600 h-2 rounded" style={{ width: "10%" }}></div>
                  </div>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">10%</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Budget Categories</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700 dark:text-gray-300">Player Salaries</span>
                <Badge className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100">58%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700 dark:text-gray-300">Operations</span>
                <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100">22%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700 dark:text-gray-300">Infrastructure</span>
                <Badge className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100">15%</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-700 dark:text-gray-300">Marketing</span>
                <Badge className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100">5%</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ClubFinancialOverviewPage;
