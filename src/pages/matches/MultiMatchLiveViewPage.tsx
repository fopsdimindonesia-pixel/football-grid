import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle } from "lucide-react";

const MultiMatchLiveViewPage: React.FC = () => {
  const matches = [
    { id: 1, home: 'FC Garuda', away: 'PSM Makassar', score: '2-1', minute: 45, status: 'live', homeColor: 'bg-red-600', awayColor: 'bg-blue-600' },
    { id: 2, home: 'Team A', away: 'Team B', score: '1-0', minute: 67, status: 'live', homeColor: 'bg-yellow-600', awayColor: 'bg-green-600' },
    { id: 3, home: 'Club X', away: 'Club Y', score: '0-0', minute: 23, status: 'live', homeColor: 'bg-purple-600', awayColor: 'bg-orange-600' },
    { id: 4, home: 'Team C', away: 'Team D', score: '2-2', minute: 89, status: 'live', homeColor: 'bg-pink-600', awayColor: 'bg-cyan-600' },
  ];

  return (
    <div className="space-y-6 pb-12">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Live Matches</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {matches.map((match) => (
          <Card
            key={match.id}
            className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700 cursor-pointer hover:shadow-elevation-2 transition"
          >
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-4">
                <Badge className="animate-pulse">LIVE {match.minute}'</Badge>
                {match.minute > 80 && (
                  <AlertCircle className="w-4 h-4 text-red-600" />
                )}
              </div>

              <div className="flex justify-between items-center mb-4">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">{match.home}</p>
                  <div className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full ${match.homeColor}`}></div>
                  </div>
                </div>

                <div className="text-center px-4">
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{match.score}</p>
                  <p className="text-xs text-muted-foreground">{match.minute}'</p>
                </div>

                <div className="flex-1 text-right">
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">{match.away}</p>
                  <div className="flex items-center gap-2 justify-end">
                    <div className={`w-8 h-8 rounded-full ${match.awayColor}`}></div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 text-center">
                <button className="text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400">
                  View Full Match →
                </button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <h3 className="font-semibold mb-4">Live Alerts</h3>
          <div className="space-y-3">
            <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded flex items-start gap-3">
              <span className="text-lg">⚽</span>
              <div className="text-sm">
                <p className="font-medium text-red-900 dark:text-red-400">GOAL! FC Garuda scores (41')</p>
              </div>
            </div>
            <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded flex items-start gap-3">
              <span className="text-lg">🟨</span>
              <div className="text-sm">
                <p className="font-medium text-yellow-900 dark:text-yellow-400">Yellow card to Team B Player (67')</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <p className="text-xs text-muted-foreground text-center">Scores update automatically</p>
    </div>
  );
};

export default MultiMatchLiveViewPage;
