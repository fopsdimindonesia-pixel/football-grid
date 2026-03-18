import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, TrendingUp, Star, Target } from "lucide-react";

const ClubYouthDevelopmentPage: React.FC = () => {
  const youngPlayers = [
    {
      id: 1,
      name: "Alex Thompson",
      age: 17,
      position: "Forward",
      joinDate: "2021",
      rating: "8/10",
      status: "High Potential",
      lastAssessment: "2024-01-18",
    },
    {
      id: 2,
      name: "Jordan Williams",
      age: 18,
      position: "Midfielder",
      joinDate: "2020",
      rating: "7.5/10",
      status: "Ready for First Team",
      lastAssessment: "2024-01-15",
    },
    {
      id: 3,
      name: "Sam Davis",
      age: 16,
      position: "Defender",
      joinDate: "2022",
      rating: "7/10",
      status: "Developing",
      lastAssessment: "2024-01-12",
    },
    {
      id: 4,
      name: "Casey Roberts",
      age: 17,
      position: "Goalkeeper",
      joinDate: "2021",
      rating: "6.5/10",
      status: "Development",
      lastAssessment: "2024-01-10",
    },
  ];

  const getStatusColor = (status: string) => {
    if (status.includes("High")) return "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100";
    if (status.includes("Ready")) return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100";
    return "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100";
  };

  return (
    <div className="space-y-6 pb-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Youth Development</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage and track young player development</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700"><Plus className="w-4 h-4 mr-2" />Add Player</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6 text-center">
            <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <p className="text-sm text-gray-600 dark:text-gray-400">Total Players</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">24</p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6 text-center">
            <TrendingUp className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <p className="text-sm text-gray-600 dark:text-gray-400">High Potential</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">8</p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6 text-center">
            <Target className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <p className="text-sm text-gray-600 dark:text-gray-400">Ready for First Team</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">3</p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">Avg. Age</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">16.2</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {youngPlayers.map((player) => (
          <Card key={player.id} className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white text-lg">{player.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{player.position} • Age {player.age}</p>
                </div>
                <Badge className={getStatusColor(player.status)}>{player.status}</Badge>
              </div>

              <div className="space-y-2 mb-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Joined</span>
                  <span className="font-medium text-gray-900 dark:text-white">{player.joinDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Current Rating</span>
                  <span className="font-medium text-gray-900 dark:text-white">{player.rating}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Last Assessment</span>
                  <span className="font-medium text-gray-900 dark:text-white">{player.lastAssessment}</span>
                </div>
              </div>

              <Button variant="outline" className="w-full">View Full Profile</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ClubYouthDevelopmentPage;
