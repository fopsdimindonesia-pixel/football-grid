import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Clock, Users } from "lucide-react";

const ClubHistoryHonoursPage: React.FC = () => {
  const timeline = [
    { year: 2023, event: "League Champions", type: "Championship" },
    { year: 2022, event: "Cup Final Runner-up", type: "Cup" },
    { year: 2021, event: "European Competition Entry", type: "European" },
    { year: 2020, event: "Promotion Campaign", type: "Championship" },
    { year: 2018, event: "Historic Double Win", type: "Championship" },
  ];

  const honours = [
    { id: 1, title: "League Title", count: 8, lastWon: 2023 },
    { id: 2, title: "Cup Victory", count: 5, lastWon: 2022 },
    { id: 3, title: "European Trophy", count: 2, lastWon: 2015 },
    { id: 4, title: "Shield Competition", count: 3, lastWon: 2021 },
  ];

  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Club History & Honours</h1>
        <p className="text-gray-600 dark:text-gray-400">Timeline and achievements</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Total Titles</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">18</p>
              </div>
              <Trophy className="w-10 h-10 text-amber-600 opacity-20" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Founded</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">1998</p>
              </div>
              <Clock className="w-10 h-10 text-blue-600 opacity-20" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Players Honored</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">42</p>
              </div>
              <Users className="w-10 h-10 text-green-600 opacity-20" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Years Active</p>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">26</p>
              </div>
              <Trophy className="w-10 h-10 text-purple-600 opacity-20" />
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Major Honours</h3>
            <div className="space-y-3">
              {honours.map((honour) => (
                <div key={honour.id} className="p-3 bg-gray-50 dark:bg-slate-700/50 rounded flex justify-between items-center">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{honour.title}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Last won: {honour.lastWon}</p>
                  </div>
                  <Badge className="bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-100">{honour.count}x</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Club Timeline</h3>
            <div className="relative space-y-4">
              {timeline.map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full mt-2"></div>
                    {idx < timeline.length - 1 && <div className="w-0.5 h-16 bg-gray-300 dark:bg-slate-600 mt-2"></div>}
                  </div>
                  <div className="pb-4">
                    <p className="font-bold text-gray-900 dark:text-white">{item.year}</p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{item.event}</p>
                    <Badge className="mt-1 text-xs">{item.type}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Trophy Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="aspect-square bg-gradient-to-br from-yellow-300 to-amber-500 rounded-lg flex items-center justify-center text-4xl">🏆</div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClubHistoryHonoursPage;
