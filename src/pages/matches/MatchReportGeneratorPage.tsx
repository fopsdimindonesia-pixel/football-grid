import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MatchReportGeneratorPage: React.FC = () => {
  return (
    <div className="space-y-6 pb-12">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Match Report Generator</h1>
          <p className="text-gray-600 dark:text-gray-400">FC Garuda vs PSM Makassar - Final Report</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Save Draft</Button>
          <Button>Export PDF</Button>
        </div>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <Tabs defaultValue="summary">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="summary">Summary</TabsTrigger>
              <TabsTrigger value="incidents">Incidents</TabsTrigger>
              <TabsTrigger value="stats">Stats</TabsTrigger>
              <TabsTrigger value="notes">Referee Notes</TabsTrigger>
            </TabsList>

            <TabsContent value="summary" className="space-y-4">
              <div>
                <h3 className="font-semibold mb-3">Match Summary</h3>
                <textarea
                  placeholder="Enter match summary..."
                  className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                  rows={6}
                  defaultValue="FC Garuda dominated possession and created multiple scoring opportunities. PSM responded well in the second half with a penalty goal. Final score 2-1 to Garuda."
                ></textarea>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Match Result</h3>
                <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded">
                  <p className="text-lg font-bold text-center">FC Garuda 2 - 1 PSM Makassar</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="incidents" className="space-y-4">
              <h3 className="font-semibold mb-3">Notable Incidents</h3>
              <div className="space-y-3">
                <div className="p-4 border border-yellow-300 bg-yellow-50 dark:bg-yellow-900/20 rounded">
                  <p className="font-medium text-sm">12' - Goal: Ahmad (Garuda) - Direct kick conversion</p>
                </div>
                <div className="p-4 border border-red-300 bg-red-50 dark:bg-red-900/20 rounded">
                  <p className="font-medium text-sm">23' - Yellow Card: Player X (PSM) - Reckless challenge</p>
                </div>
                <div className="p-4 border border-orange-300 bg-orange-50 dark:bg-orange-900/20 rounded">
                  <p className="font-medium text-sm">35' - VAR Review: Penalty awarded to PSM</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="stats" className="space-y-4">
              <h3 className="font-semibold mb-3">Final Match Statistics</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm p-2 bg-slate-50 dark:bg-slate-700 rounded">
                  <span>Possession</span>
                  <span>62% - 38%</span>
                </div>
                <div className="flex justify-between text-sm p-2 bg-slate-50 dark:bg-slate-700 rounded">
                  <span>Shots</span>
                  <span>8 - 4</span>
                </div>
                <div className="flex justify-between text-sm p-2 bg-slate-50 dark:bg-slate-700 rounded">
                  <span>Shots on Target</span>
                  <span>5 - 2</span>
                </div>
                <div className="flex justify-between text-sm p-2 bg-slate-50 dark:bg-slate-700 rounded">
                  <span>Corners</span>
                  <span>7 - 3</span>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="notes" className="space-y-4">
              <h3 className="font-semibold mb-3">Referee Notes</h3>
              <textarea
                placeholder="Enter referee notes..."
                className="w-full p-4 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-700 text-gray-900 dark:text-white"
                rows={6}
                defaultValue="Match played in professional manner. Both teams showed good sportsmanship. Weather conditions were favorable. Pitch condition was excellent."
              ></textarea>
            </TabsContent>
          </Tabs>

          <div className="flex gap-3 pt-6 border-t border-gray-200 dark:border-gray-700">
            <Button>Publish Report</Button>
            <Button variant="outline">Preview</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MatchReportGeneratorPage;
