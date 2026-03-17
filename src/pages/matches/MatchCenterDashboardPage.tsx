import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { KPICard } from "@/components/shared/KPICard";
import { AlertCircle, Activity, Clock, Zap } from "lucide-react";

const MatchCenterDashboardPage: React.FC = () => {
  const kpis = [
    { label: "Today's Matches", value: "4", icon: Activity, color: "blue" },
    { label: "Live Now", value: "2", icon: Zap, color: "red" },
    { label: "Completed Today", value: "2", icon: Clock, color: "green" },
    { label: "Upcoming (7 days)", value: "12", icon: AlertCircle, color: "orange" },
  ];

  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Match Center</h1>
        <p className="text-gray-600 dark:text-gray-400">Dashboard for match operations and management</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, idx) => (
          <KPICard
            key={idx}
            label={kpi.label}
            value={kpi.value}
            icon={<kpi.icon className="w-6 h-6" />}
          />
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="shadow-elevation-1 bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-4">Live Match Ticker</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-700 rounded">
                <span>FC Garuda 2 - 1 PSM</span>
                <span className="text-red-600">45'</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-700 rounded">
                <span>Team A 1 - 0 Team B</span>
                <span className="text-orange-600">HALFTIME</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-elevation-1 bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-4">Today's Schedule</h3>
            <div className="space-y-3 text-sm">
              <div className="p-2 border-l-4 border-blue-600">
                <p className="font-medium">Team X vs Team Y</p>
                <p className="text-muted-foreground">15:00 WIB</p>
              </div>
              <div className="p-2 border-l-4 border-green-600">
                <p className="font-medium">Club A vs Club B</p>
                <p className="text-muted-foreground">19:00 WIB</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-elevation-1 bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <h3 className="font-semibold mb-4">Alerts & Notifications</h3>
          <div className="space-y-2 text-sm">
            <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded">
              <p className="font-medium">⚠️ Missing lineups - Match #5 (15:00)</p>
            </div>
            <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded">
              <p className="font-medium">❌ Unassigned referee - Match #8 (19:00)</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MatchCenterDashboardPage;
