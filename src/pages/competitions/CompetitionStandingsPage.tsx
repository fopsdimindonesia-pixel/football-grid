import { PageHeader } from "@/components/shared";
import React, { useMemo } from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CompetitionStandingsPage: React.FC = () => {
  const standings = useMemo(
    () => [
      { rank: 1, team: "FC Garuda", played: 20, won: 12, drawn: 5, lost: 3, gf: 38, ga: 20, gd: "+18", points: 41 },
      { rank: 2, team: "Persija Jakarta", played: 20, won: 11, drawn: 6, lost: 3, gf: 35, ga: 20, gd: "+15", points: 39 },
      { rank: 3, team: "PSM Makassar", played: 20, won: 10, drawn: 7, lost: 3, gf: 32, ga: 20, gd: "+12", points: 37 },
      { rank: 4, team: "Arema FC", played: 20, won: 10, drawn: 5, lost: 5, gf: 30, ga: 22, gd: "+8", points: 35 },
      { rank: 5, team: "Persib Bandung", played: 20, won: 9, drawn: 6, lost: 5, gf: 28, ga: 24, gd: "+4", points: 33 },
    ],
    []
  );

  return (
    <div className="space-y-6 pb-12">
      <PageHeader
        title="Competition Standings"
        subtitle="Current season league table"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Competitions", href: "/competitions" },
          { label: "Standings" },
        ]}
      />

      <Card className="shadow-elevation-1 bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-bold">Liga Nusantara 2025/26</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-primary dark:border-primary">
                  <th className="text-left py-3 px-2 font-bold text-xs uppercase">#</th>
                  <th className="text-left py-3 px-2 font-bold text-xs uppercase">Team</th>
                  <th className="text-center py-3 px-1 font-bold text-xs uppercase">P</th>
                  <th className="text-center py-3 px-1 font-bold text-xs uppercase">W</th>
                  <th className="text-center py-3 px-1 font-bold text-xs uppercase">D</th>
                  <th className="text-center py-3 px-1 font-bold text-xs uppercase">L</th>
                  <th className="text-center py-3 px-1 font-bold text-xs uppercase">GF</th>
                  <th className="text-center py-3 px-1 font-bold text-xs uppercase">GA</th>
                  <th className="text-center py-3 px-1 font-bold text-xs uppercase">GD</th>
                  <th className="text-center py-3 px-1 font-bold text-xs uppercase">Pts</th>
                </tr>
              </thead>
              <tbody>
                {standings.map((row) => (
                  <tr
                    key={row.rank}
                    className={`border-b border-muted dark:border-slate-700 hover:bg-muted/50 dark:hover:bg-slate-700/30 ${
                      row.rank <= 3
                        ? "bg-green-50/30 dark:bg-green-900/10"
                        : row.rank === 4 || row.rank === 5
                        ? "bg-yellow-50/30 dark:bg-yellow-900/10"
                        : ""
                    }`}
                  >
                    <td className="py-3 px-2 font-bold dark:text-slate-100">{row.rank}</td>
                    <td className="py-3 px-2 font-bold dark:text-slate-100">{row.team}</td>
                    <td className="text-center py-3 px-1 dark:text-slate-100">{row.played}</td>
                    <td className="text-center py-3 px-1 dark:text-slate-100">{row.won}</td>
                    <td className="text-center py-3 px-1 dark:text-slate-100">{row.drawn}</td>
                    <td className="text-center py-3 px-1 dark:text-slate-100">{row.lost}</td>
                    <td className="text-center py-3 px-1 dark:text-slate-100">{row.gf}</td>
                    <td className="text-center py-3 px-1 dark:text-slate-100">{row.ga}</td>
                    <td className="text-center py-3 px-1 font-bold text-primary">{row.gd}</td>
                    <td className="text-center py-3 px-1 font-bold text-lg text-primary">{row.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 pt-4 border-t border-muted dark:border-slate-700 space-y-2 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-muted-foreground dark:text-slate-400">Champions League (1-3)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="text-muted-foreground dark:text-slate-400">Playoff Zone (4-5)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <span className="text-muted-foreground dark:text-slate-400">Relegation Zone (6+)</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompetitionStandingsPage;
