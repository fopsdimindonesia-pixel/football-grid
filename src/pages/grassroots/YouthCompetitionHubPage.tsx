import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const YouthCompetitionHubPage: React.FC = () => {
  const standings = [
    { rank: 1, team: "Elite Academy", played: 8, wins: 7, draws: 1, losses: 0, points: 22 },
    { rank: 2, team: "Downtown United", played: 8, wins: 6, draws: 1, losses: 1, points: 19 },
    { rank: 3, team: "Youth Stars", played: 8, wins: 5, draws: 2, losses: 1, points: 17 },
  ];

  const fixtures = [
    { id: 1, home: "Elite Academy", away: "Downtown United", date: "2026-03-20", time: "15:00", status: "Scheduled" },
    { id: 2, home: "Youth Stars", away: "Rising Talent", date: "2026-03-21", time: "16:00", status: "Upcoming" },
  ];

  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Youth Competition Hub</h1>
        <p className="text-gray-600 dark:text-gray-400">U12, U14, U16 league management and standings</p>
      </div>

      <Tabs defaultValue="standings" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="standings">Standings</TabsTrigger>
          <TabsTrigger value="fixtures">Fixtures</TabsTrigger>
        </TabsList>

        <TabsContent value="standings" className="space-y-4">
          <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
            <CardContent className="pt-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-slate-700">
                      <th className="text-left py-2 px-2">Pos</th>
                      <th className="text-left py-2 px-2">Team</th>
                      <th className="text-center py-2 px-2">P</th>
                      <th className="text-center py-2 px-2">W</th>
                      <th className="text-center py-2 px-2">D</th>
                      <th className="text-center py-2 px-2">L</th>
                      <th className="text-center py-2 px-2">Pts</th>
                    </tr>
                  </thead>
                  <tbody>
                    {standings.map((row) => (
                      <tr key={row.rank} className="border-b border-gray-100 dark:border-slate-700">
                        <td className="py-3 px-2 font-semibold">{row.rank}</td>
                        <td className="py-3 px-2">{row.team}</td>
                        <td className="text-center py-3 px-2">{row.played}</td>
                        <td className="text-center py-3 px-2 text-green-600">{row.wins}</td>
                        <td className="text-center py-3 px-2 text-yellow-600">{row.draws}</td>
                        <td className="text-center py-3 px-2 text-red-600">{row.losses}</td>
                        <td className="text-center py-3 px-2 font-bold">{row.points}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fixtures" className="space-y-4">
          {fixtures.map((fixture) => (
            <Card key={fixture.id} className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
              <CardContent className="pt-6">
                <div className="flex justify-between items-center">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 dark:text-white">{fixture.home}</p>
                  </div>
                  <div className="text-center mx-4">
                    <p className="text-sm font-bold">vs</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">{fixture.date} @ {fixture.time}</p>
                  </div>
                  <div className="flex-1 text-right">
                    <p className="font-semibold text-gray-900 dark:text-white">{fixture.away}</p>
                  </div>
                  <Badge className="ml-4">{fixture.status}</Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default YouthCompetitionHubPage;
