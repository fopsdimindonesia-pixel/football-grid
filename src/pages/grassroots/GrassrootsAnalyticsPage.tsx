import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { KPICard } from "@/components/shared/KPICard";
import { BarChart3, TrendingUp, Users, Target } from "lucide-react";

const GrassrootsAnalyticsPage: React.FC = () => {
  const kpis = [
    { label: "Total Players", value: "2,845", icon: Users, color: "blue" },
    { label: "Programs Active", value: "24", icon: Target, color: "green" },
    { label: "YoY Growth", value: "32%", icon: TrendingUp, color: "purple" },
    { label: "Facilities", value: "18", icon: BarChart3, color: "orange" },
  ];

  const ageGroups = [
    { age: "U8", count: 320, percentage: 11 },
    { age: "U10", count: 480, percentage: 17 },
    { age: "U12", count: 650, percentage: 23 },
    { age: "U14", count: 720, percentage: 25 },
    { age: "U16", count: 550, percentage: 19 },
    { age: "U18", count: 145, percentage: 5 },
  ];

  const programMetrics = [
    { name: "Academy Programs", participants: 850, growth: 24 },
    { name: "School Initiatives", participants: 620, growth: 18 },
    { name: "Talent Identification", participants: 340, growth: 35 },
    { name: "Community Programs", participants: 1035, growth: 28 },
  ];

  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Grassroots Analytics</h1>
        <p className="text-gray-600 dark:text-gray-400">Overall youth football program metrics and insights</p>
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

      <Tabs defaultValue="ageGroups" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="ageGroups">Age Groups Distribution</TabsTrigger>
          <TabsTrigger value="programs">Program Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="ageGroups" className="space-y-4">
          <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
            <CardContent className="pt-6">
              <div className="space-y-4">
                {ageGroups.map((group) => (
                  <div key={group.age}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{group.age}</span>
                      <div className="text-right">
                        <span className="text-sm font-bold">{group.count}</span>
                        <span className="text-xs text-gray-600 dark:text-gray-400 ml-2">({group.percentage}%)</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-blue-600 dark:bg-blue-500 rounded-full h-2"
                        style={{ width: `${group.percentage * 5}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="programs" className="space-y-4">
          <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
            <CardContent className="pt-6">
              <div className="space-y-4">
                {programMetrics.map((program) => (
                  <div key={program.name} className="p-4 bg-slate-50 dark:bg-slate-700 rounded">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white">{program.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{program.participants} participants</p>
                      </div>
                      <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 px-2 py-1 rounded text-xs font-semibold">
                        +{program.growth}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GrassrootsAnalyticsPage;
