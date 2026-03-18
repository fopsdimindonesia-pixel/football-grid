import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Trophy, TrendingUp } from "lucide-react";

const ClubComparisonPage: React.FC = () => {
  const [selectedClubs, setSelectedClubs] = useState(["club1", "club2"]);

  const clubs = [
    {
      id: "club1",
      name: "Metropolitan United",
      members: 48,
      titles: 15,
      winRate: "75%",
      budget: "$45.2M",
      founded: 1998,
      stadium: "Metropolitan Park",
    },
    {
      id: "club2",
      name: "Northern Stars",
      members: 42,
      titles: 12,
      winRate: "68%",
      budget: "$38.5M",
      founded: 2001,
      stadium: "North Arena",
    },
  ];

  const metrics = [
    { label: "Members", icon: Users, key: "members" },
    { label: "Titles", icon: Trophy, key: "titles" },
    { label: "Win Rate", icon: TrendingUp, key: "winRate" },
    { label: "Budget", icon: null, key: "budget" },
    { label: "Founded", icon: null, key: "founded" },
    { label: "Stadium", icon: null, key: "stadium" },
  ];

  return (
    <div className="space-y-6 pb-12">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Club Comparison</h1>
        <p className="text-gray-600 dark:text-gray-400">Compare club metrics and stats</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[0, 1].map((idx) => (
          <div key={idx} className="space-y-2">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Select Club {idx + 1}</label>
            <Select value={selectedClubs[idx]}>
              <SelectTrigger className="dark:bg-slate-800 dark:border-slate-700">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {clubs.map((club) => (
                  <SelectItem key={club.id} value={club.id}>
                    {club.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ))}
      </div>

      <div className="mt-8 space-y-4">
        {metrics.map((metric) => {
          const club1 = clubs.find((c) => c.id === selectedClubs[0]);
          const club2 = clubs.find((c) => c.id === selectedClubs[1]);

          return (
            <Card key={metric.key} className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
              <CardContent className="pt-6">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-2">
                      {metric.icon && <metric.icon className="w-4 h-4" />}
                      {metric.label}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {club1 ? club1[metric.key as keyof typeof club1] : "-"}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{club1?.name}</p>
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {club2 ? club2[metric.key as keyof typeof club2] : "-"}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{club2?.name}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ClubComparisonPage;
