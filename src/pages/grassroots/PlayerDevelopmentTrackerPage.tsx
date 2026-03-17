import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, Target, Zap } from "lucide-react";

const PlayerDevelopmentTrackerPage: React.FC = () => {
  const players = [
    {
      id: 1,
      name: "Alex Rodriguez",
      age: 14,
      position: "Midfielder",
      skillLevel: 75,
      readiness: 68,
      metrics: [
        { skill: "Pace", value: 80 },
        { skill: "Dribbling", value: 75 },
        { skill: "Passing", value: 72 },
        { skill: "Defense", value: 65 },
      ],
    },
    {
      id: 2,
      name: "Sarah Chen",
      age: 13,
      position: "Forward",
      skillLevel: 82,
      readiness: 78,
      metrics: [
        { skill: "Pace", value: 85 },
        { skill: "Shooting", value: 82 },
        { skill: "Dribbling", value: 80 },
        { skill: "Positioning", value: 75 },
      ],
    },
  ];

  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Player Development Tracker</h1>
        <p className="text-gray-600 dark:text-gray-400">Monitor individual player progress and skill development</p>
      </div>

      <div className="grid gap-6">
        {players.map((player) => (
          <Card key={player.id} className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
            <CardContent className="pt-6">
              <div className="mb-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{player.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      U{player.age} • {player.position}
                    </p>
                  </div>
                  <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100">
                    Progressing
                  </Badge>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Overall Level</span>
                    <span className="text-sm font-bold">{player.skillLevel}%</span>
                  </div>
                  <Progress value={player.skillLevel} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Readiness</span>
                    <span className="text-sm font-bold">{player.readiness}%</span>
                  </div>
                  <Progress value={player.readiness} className="h-2" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {player.metrics.map((metric) => (
                  <div key={metric.skill}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-300">{metric.skill}</span>
                      <span className="text-xs font-bold">{metric.value}</span>
                    </div>
                    <Progress value={metric.value} className="h-1.5" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PlayerDevelopmentTrackerPage;
