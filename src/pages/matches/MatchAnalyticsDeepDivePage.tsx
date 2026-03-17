import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MatchAnalyticsDeepDivePage: React.FC = () => {
  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Advanced Match Analytics</h1>
        <p className="text-gray-600 dark:text-gray-400">Deep dive into advanced metrics and performance data</p>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <Tabs defaultValue="xg">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="xg">xG & xA</TabsTrigger>
              <TabsTrigger value="pressing">Pressing</TabsTrigger>
              <TabsTrigger value="progression">Progression</TabsTrigger>
              <TabsTrigger value="defense">Defense</TabsTrigger>
            </TabsList>

            <TabsContent value="xg" className="space-y-4">
              <h3 className="font-semibold">Expected Goals (xG) & Expected Assists (xA)</h3>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Expected Goals (xG)</span>
                    <span className="font-semibold">1.8 - 0.9</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-3 bg-blue-600 rounded" style={{ width: '65%' }}></div>
                    <div className="h-3 bg-green-600 rounded justify-self-end" style={{ width: '32%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Expected Assists (xA)</span>
                    <span className="font-semibold">0.9 - 0.5</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-3 bg-blue-600 rounded" style={{ width: '64%' }}></div>
                    <div className="h-3 bg-green-600 rounded justify-self-end" style={{ width: '36%' }}></div>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground mt-4">FC Garuda outperformed xG (2 goals from 1.8 xG)</p>
              </div>
            </TabsContent>

            <TabsContent value="pressing" className="space-y-4">
              <h3 className="font-semibold">Pressing Intensity</h3>
              
              <div className="space-y-3">
                <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Pressure Success Rate</span>
                    <span className="font-semibold">34%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-600 rounded h-2">
                    <div className="bg-blue-600 h-2 rounded" style={{ width: '34%' }}></div>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded">
                  <div className="flex justify-between text-sm mb-2">
                    <span>PPDA (Passes Per Defensive Action)</span>
                    <span className="font-semibold">8.2 - 12.5</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Lower is more aggressive</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="progression" className="space-y-4">
              <h3 className="font-semibold">Ball Progression</h3>
              
              <div className="space-y-3">
                <p className="text-sm">Pass Network Diagram</p>
                <div className="bg-gradient-to-b from-slate-200 to-slate-300 dark:from-slate-700 dark:to-slate-800 rounded-lg p-8 aspect-square flex items-center justify-center">
                  <p className="text-gray-600 dark:text-gray-400">Pass Network Visualization</p>
                </div>

                <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded">
                  <p className="text-sm font-medium mb-2">Progressive Passes</p>
                  <p className="text-2xl font-bold text-blue-600">42</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="defense" className="space-y-4">
              <h3 className="font-semibold">Defensive Line Height</h3>
              
              <div className="space-y-3">
                <p className="text-sm">Average Defensive Line Height: 45m from goal line</p>
                <div className="bg-gradient-to-b from-green-500 to-blue-500 rounded-lg p-8 aspect-video flex items-center justify-center">
                  <p className="text-white text-center">Pitch visualization with defensive line</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded">
                    <p className="text-xs text-muted-foreground mb-1">Highest Line</p>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">52m</p>
                  </div>
                  <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded">
                    <p className="text-xs text-muted-foreground mb-1">Lowest Line</p>
                    <p className="text-xl font-bold text-gray-900 dark:text-white">38m</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default MatchAnalyticsDeepDivePage;
