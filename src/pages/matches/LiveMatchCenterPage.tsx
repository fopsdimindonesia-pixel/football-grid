import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LiveMatchCenterPage: React.FC = () => {
  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></span>
          <span className="text-sm font-bold text-red-600">LIVE</span>
          <span className="text-lg font-bold text-gray-900 dark:text-white ml-auto">45:23</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">FC Garuda vs PSM Makassar</h1>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6 text-center">
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">FC Garuda</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gray-900 dark:text-white">2 - 1</p>
            </div>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">PSM Makassar</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <h3 className="font-semibold mb-4">Match Events</h3>
          <div className="space-y-2">
            <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded flex items-center gap-3">
              <span className="text-lg">⚽</span>
              <div>
                <p className="text-sm font-medium">12' GOAL - Ahmad (#10, Garuda)</p>
                <p className="text-xs text-muted-foreground">Assist: Budi (#7)</p>
              </div>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded flex items-center gap-3">
              <span className="text-lg">🟨</span>
              <p className="text-sm font-medium">23' YELLOW CARD - Player X (#6, PSM)</p>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded flex items-center gap-3">
              <span className="text-lg">⚽</span>
              <p className="text-sm font-medium">35' GOAL - Player Y (#9, PSM) - Penalty</p>
            </div>
            <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded flex items-center gap-3">
              <span className="text-lg">⚽</span>
              <div>
                <p className="text-sm font-medium">41' GOAL - Ahmad (#10, Garuda)</p>
                <p className="text-xs text-muted-foreground">Assist: Candra (#11)</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <h3 className="font-semibold mb-4">Live Statistics</h3>
          <Tabs defaultValue="stats">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="stats">Stats</TabsTrigger>
              <TabsTrigger value="lineups">Lineups</TabsTrigger>
            </TabsList>

            <TabsContent value="stats" className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Possession</span>
                  <span>62% - 38%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-800 rounded h-2 flex">
                  <div className="bg-blue-600 h-2 rounded" style={{ width: '62%' }}></div>
                  <div className="bg-green-600 h-2 rounded" style={{ width: '38%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Shots</span>
                  <span>8 - 4</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Shots on Target</span>
                  <span>4 - 2</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Corners</span>
                  <span>6 - 3</span>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="lineups">
              <p className="text-muted-foreground text-sm">Pitch formations displayed here</p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default LiveMatchCenterPage;
