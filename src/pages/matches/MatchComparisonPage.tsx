import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const MatchComparisonPage: React.FC = () => {
  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Match Comparison</h1>
        <p className="text-gray-600 dark:text-gray-400">Compare statistics from two matches side-by-side</p>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="flex-1">
          <label className="text-sm font-medium">Match 1</label>
          <select className="w-full mt-2 p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-700 text-gray-900 dark:text-white">
            <option>FC Garuda vs PSM (Mar 20, 2026)</option>
            <option>Team A vs Team B (Mar 15, 2026)</option>
          </select>
        </div>
        <div className="flex-1">
          <label className="text-sm font-medium">Match 2</label>
          <select className="w-full mt-2 p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-700 text-gray-900 dark:text-white">
            <option>Previous meeting (Nov 2024)</option>
            <option>Team A vs Team B (Feb 2026)</option>
          </select>
        </div>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <h3 className="font-semibold mb-4">Statistics Comparison</h3>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Possession</span>
                <div className="flex gap-2">
                  <span>62%</span>
                  <span>56%</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="h-3 bg-blue-600 rounded" style={{ width: '62%' }}></div>
                <div className="h-3 bg-green-600 rounded justify-self-end" style={{ width: '56%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Shots</span>
                <div className="flex gap-2">
                  <span>8</span>
                  <span>6</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Shots on Target</span>
                <div className="flex gap-2">
                  <span>5</span>
                  <span>3</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Corners</span>
                <div className="flex gap-2">
                  <span>7</span>
                  <span>5</span>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span>Fouls</span>
                <div className="flex gap-2">
                  <span>8</span>
                  <span>12</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <h3 className="font-semibold mb-4">Lineups Comparison</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-medium mb-2">Match 1 Formation</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">4-3-3</p>
            </div>
            <div>
              <p className="text-sm font-medium mb-2">Match 2 Formation</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">4-2-3-1</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Button>Generate Report</Button>
    </div>
  );
};

export default MatchComparisonPage;
