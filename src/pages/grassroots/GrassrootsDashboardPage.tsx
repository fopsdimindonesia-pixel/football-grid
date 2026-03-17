import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { KPICard } from "@/components/shared/KPICard";
import { Users, Trophy, Calendar, TrendingUp } from "lucide-react";

const GrassrootsDashboardPage: React.FC = () => {
  const kpis = [
    { label: "Active Programs", value: "24", icon: Trophy, color: "blue" },
    { label: "Youth Players", value: "2,450", icon: Users, color: "green" },
    { label: "Upcoming Events", value: "8", icon: Calendar, color: "orange" },
    { label: "Growth Rate", value: "24%", icon: TrendingUp, color: "purple" },
  ];

  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Grassroots Dashboard</h1>
        <p className="text-gray-600 dark:text-gray-400">Youth football programs overview and analytics</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, idx) => (
          <KPICard key={idx} label={kpi.label} value={kpi.value} icon={<kpi.icon className="w-6 h-6" />} />
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-4">Recent Events</h3>
            <div className="space-y-3">
              <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded">
                <p className="font-medium text-sm">U12 Development Program</p>
                <p className="text-xs text-muted-foreground">12 participants</p>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded">
                <p className="font-medium text-sm">U14 Championship Qualifiers</p>
                <p className="text-xs text-muted-foreground">8 teams registered</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-4">Program Status</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span>Active Academies</span>
                <span className="font-semibold">12</span>
              </div>
              <div className="flex justify-between">
                <span>Coaches Certified</span>
                <span className="font-semibold">34</span>
              </div>
              <div className="flex justify-between">
                <span>Facilities Available</span>
                <span className="font-semibold">18</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GrassrootsDashboardPage;
