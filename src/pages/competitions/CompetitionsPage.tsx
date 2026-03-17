import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const CompetitionsPage: React.FC = () => {
  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Competitions</h1>
        <p className="text-gray-600 dark:text-gray-400">Browse and manage all competitions</p>
      </div>
      <Card className="shadow-elevation-1 bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground dark:text-slate-400">Competitions list goes here</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompetitionsPage;
