import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const MatchDetailPostMatchPage: React.FC = () => {
  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Match Finished</h1>
        <div className="text-xl font-bold text-gray-900 dark:text-white mb-4">FC Garuda 2 - 1 PSM Makassar</div>
        <Badge variant="secondary">Completed</Badge>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-4">Final Statistics</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Possession</span>
                <span className="font-semibold">62% - 38%</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shots</span>
                <span className="font-semibold">8 - 4</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shots on Target</span>
                <span className="font-semibold">5 - 2</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Corners</span>
                <span className="font-semibold">7 - 3</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Fouls</span>
                <span className="font-semibold">8 - 12</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Yellow Cards</span>
                <span className="font-semibold">2 - 3</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Red Cards</span>
                <span className="font-semibold">0 - 0</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-4">Player Ratings</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-700 rounded">
                <span className="text-sm">Ahmad (#10, Goal Scorer)</span>
                <span className="font-bold text-yellow-600">8.5</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-700 rounded">
                <span className="text-sm">Budi (#7, Assists)</span>
                <span className="font-bold text-yellow-600">8.0</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-700 rounded">
                <span className="text-sm">Goalkeeper (#1)</span>
                <span className="font-bold text-yellow-600">7.5</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <h3 className="font-semibold mb-4">Man of the Match</h3>
          <div className="p-4 bg-gradient-to-r from-yellow-100 to-yellow-50 dark:from-yellow-900/20 dark:to-yellow-800/10 rounded">
            <p className="font-semibold text-gray-900 dark:text-white">Ahmad #10 - FC Garuda</p>
            <p className="text-sm text-muted-foreground">2 Goals, 1 assist</p>
          </div>
        </CardContent>
      </Card>

      <div className="flex gap-3">
        <Button>View Full Report</Button>
        <Button variant="outline">Download PDF</Button>
      </div>
    </div>
  );
};

export default MatchDetailPostMatchPage;
