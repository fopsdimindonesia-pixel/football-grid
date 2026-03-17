import React, { useState } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Grid, List as ListIcon } from "lucide-react";

const CompetitionFixturesPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<"calendar" | "list">("list");

  const fixtures = [
    { round: 1, date: "2026-03-20", time: "15:00", home: "FC Garuda", away: "PSM", venue: "GBK", status: "scheduled" },
    { round: 1, date: "2026-03-20", time: "19:00", home: "Persija", away: "Bali", venue: "Manahan", status: "scheduled" },
    { round: 1, date: "2026-03-21", time: "15:00", home: "Arema", away: "Persib", venue: "Kanjuruhan", status: "scheduled" },
    { round: 2, date: "2026-03-27", time: "15:00", home: "PSM", away: "Persija", venue: "Andi Mattalatta", status: "scheduled" },
  ];

  return (
    <div className="space-y-6 pb-12">
      <PageHeader
        title="Fixtures"
        subtitle="Competition match schedule"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Competitions", href: "/competitions" },
          { label: "Fixtures" },
        ]}
      />

      <Card className="shadow-elevation-1 bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <div className="flex gap-2 mb-4">
            <Button
              size="sm"
              variant={viewMode === "calendar" ? "default" : "outline"}
              onClick={() => setViewMode("calendar")}
              className="gap-2"
            >
              <Calendar className="h-4 w-4" /> Calendar
            </Button>
            <Button
              size="sm"
              variant={viewMode === "list" ? "default" : "outline"}
              onClick={() => setViewMode("list")}
              className="gap-2"
            >
              <ListIcon className="h-4 w-4" /> List
            </Button>
          </div>

          {viewMode === "list" && (
            <div className="space-y-3">
              {fixtures.map((fixture, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg border border-muted dark:border-slate-600 dark:bg-slate-700/30"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-primary uppercase">
                      Round {fixture.round} • {fixture.date} {fixture.time}
                    </span>
                    <Badge variant="secondary">{fixture.status}</Badge>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold dark:text-slate-100">{fixture.home}</span>
                    <span className="text-xs text-muted-foreground dark:text-slate-400">vs</span>
                    <span className="font-bold dark:text-slate-100">{fixture.away}</span>
                  </div>
                  <p className="text-xs text-muted-foreground dark:text-slate-400">📍 {fixture.venue}</p>
                </div>
              ))}
            </div>
          )}

          {viewMode === "calendar" && (
            <div className="text-center py-8 text-muted-foreground dark:text-slate-400">
              Calendar view - 32 matches scheduled
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CompetitionFixturesPage;
