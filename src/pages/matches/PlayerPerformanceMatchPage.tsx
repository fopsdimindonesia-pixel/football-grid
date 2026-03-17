import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PlayerPerformanceMatchPage: React.FC = () => {
  const players = [
    { name: 'Ahmad', number: 10, position: 'FW', minutesPlayed: 90, touches: 45, passes: 32, shots: 8, tackles: 2, duels: 12, rating: 8.5 },
    { name: 'Budi', number: 7, position: 'MF', minutesPlayed: 90, touches: 68, passes: 52, shots: 3, tackles: 5, duels: 15, rating: 8.0 },
    { name: 'Candra', number: 3, position: 'DF', minutesPlayed: 45, touches: 32, passes: 28, shots: 0, tackles: 8, duels: 9, rating: 7.5 },
  ];

  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Player Performance</h1>
        <p className="text-gray-600 dark:text-gray-400">Per-player match analytics and ratings</p>
      </div>

      <Tabs defaultValue="statistics">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="statistics">Statistics</TabsTrigger>
          <TabsTrigger value="heatmap">Heat Map</TabsTrigger>
        </TabsList>

        <TabsContent value="statistics" className="space-y-4">
          {players.map((player, idx) => (
            <Card key={idx} className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{player.name} #{player.number}</p>
                    <p className="text-sm text-muted-foreground">{player.position}</p>
                  </div>
                  <Badge className="bg-yellow-600">{player.rating}/10</Badge>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground text-xs">Minutes</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{player.minutesPlayed}'</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs">Touches</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{player.touches}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs">Passes</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{player.passes}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs">Shots</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{player.shots}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs">Tackles</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{player.tackles}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs">Duels</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{player.duels}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="heatmap" className="space-y-4">
          {players.map((player) => (
            <Card key={player.number} className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
              <CardContent className="pt-6">
                <p className="font-semibold mb-4">{player.name} #{player.number} - Movement Heat Map</p>
                <div className="bg-gradient-to-b from-red-500 to-blue-500 rounded-lg p-8 aspect-video flex items-center justify-center">
                  <p className="text-white text-center">Pitch Heat Map Visualization</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PlayerPerformanceMatchPage;
