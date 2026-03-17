import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const MatchListPage: React.FC = () => {
  const matches = [
    { id: 1, home: "FC Garuda", away: "PSM Makassar", date: "2026-03-20", time: "15:00", venue: "Gelora Bung Karno", status: "Scheduled", score: null },
    { id: 2, home: "Persipura", away: "Bhayangkara", date: "2026-03-20", time: "19:00", venue: "Mandala", status: "Scheduled", score: null },
    { id: 3, home: "Arema FC", away: "Persija", date: "2026-03-21", time: "15:00", venue: "Kanjuruhan", status: "Scheduled", score: null },
    { id: 4, home: "Team A", away: "Team B", date: "2026-03-19", time: "19:00", venue: "Stadium A", status: "Completed", score: "2-1" },
  ];

  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Matches</h1>
        <p className="text-gray-600 dark:text-gray-400">Browse all matches</p>
      </div>

      <div className="flex gap-2 mb-6 flex-wrap">
        <Button variant="outline" size="sm">Competition: All</Button>
        <Button variant="outline" size="sm">Date Range</Button>
        <Button variant="outline" size="sm">Status: All</Button>
        <Button variant="outline" size="sm">Venue</Button>
      </div>

      <div className="space-y-3">
        {matches.map((match) => (
          <Card key={match.id} className="p-4 border border-gray-200 dark:border-gray-800 hover:shadow-elevation-2 cursor-pointer">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
              <div className="md:col-span-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900 dark:text-white">{match.home}</span>
                  <span className="text-xs text-muted-foreground">vs</span>
                  <span className="font-semibold text-gray-900 dark:text-white">{match.away}</span>
                </div>
              </div>
              <div className="md:col-span-2">
                {match.score ? (
                  <div className="font-bold text-lg text-center text-gray-900 dark:text-white">{match.score}</div>
                ) : (
                  <div className="text-center text-muted-foreground text-sm">-</div>
                )}
              </div>
              <div className="md:col-span-3">
                <div className="text-sm">
                  <p className="font-medium text-gray-900 dark:text-white">{match.date}</p>
                  <p className="text-muted-foreground">{match.time}</p>
                </div>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-muted-foreground">{match.venue}</p>
              </div>
              <div className="md:col-span-1">
                <Badge variant={match.status === "Completed" ? "secondary" : "default"}>
                  {match.status}
                </Badge>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MatchListPage;
