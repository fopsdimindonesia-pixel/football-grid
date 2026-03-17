import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CompetitionResultsPage: React.FC = () => {
  const results = [
    { date: "2026-03-13", home: "FC Garuda", away: "Arema", score: "2-1", status: "completed" },
    { date: "2026-03-13", home: "Persiem", away: "Persib", score: "0-0", status: "completed" },
  ];

  return (
    <div className="space-y-6 pb-12">
      <PageHeader title="Results" subtitle="Latest match results" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Competitions", href: "/competitions" }, { label: "Results" }]} />
      <Card className="shadow-elevation-1 bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <div className="space-y-3">
            {results.map((result, idx) => (
              <div key={idx} className="p-4 rounded-lg border border-muted dark:border-slate-600">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold dark:text-slate-100">{result.home}</span>
                  <span className="text-lg font-bold text-primary">{result.score}</span>
                  <span className="text-sm font-bold dark:text-slate-100">{result.away}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompetitionResultsPage;
