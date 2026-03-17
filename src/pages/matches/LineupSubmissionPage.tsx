import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const LineupSubmissionPage: React.FC = () => {
  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Team Lineup Submission</h1>
        <p className="text-gray-600 dark:text-gray-400">Submit your team's formation and player lineup</p>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <h3 className="font-semibold mb-4">Formation Selection</h3>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-6">
            {['4-3-3', '4-2-3-1', '3-5-2', '5-3-2', '5-4-1'].map((formation) => (
              <Button key={formation} variant="outline" className="h-12">
                {formation}
              </Button>
            ))}
          </div>

          <div className="bg-gradient-to-b from-green-900 to-green-700 rounded-lg p-8 mb-6 aspect-video flex items-center justify-center">
            <p className="text-white text-center">Visual Pitch with Drag-and-Drop Formation</p>
          </div>

          <h3 className="font-semibold mb-4">Starting XI</h3>
          <div className="space-y-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num) => (
              <div key={num} className="p-3 bg-slate-50 dark:bg-slate-700 rounded flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Badge>{num}</Badge>
                  <span className="text-sm">Player Name #{num}</span>
                </div>
                <Button variant="ghost" size="sm">Edit</Button>
              </div>
            ))}
          </div>

          <h3 className="font-semibold mb-4 mt-6">Substitutes</h3>
          <div className="space-y-2">
            {[12, 13, 14, 15].map((num) => (
              <div key={num} className="p-3 bg-slate-50 dark:bg-slate-700 rounded flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <Badge variant="secondary">{num}</Badge>
                  <span className="text-sm">Substitute #{num}</span>
                </div>
                <Button variant="ghost" size="sm">Edit</Button>
              </div>
            ))}
          </div>

          <div className="flex gap-3 pt-6 mt-6 border-t border-gray-200 dark:border-gray-700">
            <Button>Submit Lineup</Button>
            <Button variant="outline">Save as Draft</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LineupSubmissionPage;
