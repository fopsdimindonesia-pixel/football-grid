import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const CompetitionStatisticsPage: React.FC = () => (
  <div className="space-y-6 pb-12">
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Statistics</h1>
      <p className="text-gray-600 dark:text-gray-400">Competition statistics and analytics</p>
    </div>
    <Card className="shadow-elevation-1 bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
      <CardContent className="pt-6">
        <p className="text-sm text-muted-foreground dark:text-slate-400">Top scorers, assists, cards, and team statistics</p>
      </CardContent>
    </Card>
  </div>
);

export default CompetitionStatisticsPage;
