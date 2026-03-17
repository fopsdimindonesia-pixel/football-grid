import React, { useMemo, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { ProfileHeader, StatusBadge } from "@/components/shared";
import {
  Edit2,
  Share2,
  Trophy,
  Users,
  Calendar,
  Download,
  Settings,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CompetitionDetailPage: React.FC = () => {
  const { compId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("overview");

  const competition = useMemo(
    () => ({
      id: compId || "CMP-001",
      name: "Liga Nusantara 2025/26",
      status: "active",
      type: "League",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=Liga",
      description: "Premier football league of Indonesia",
      teams: 18,
      matchesPlayed: 132,
      totalMatches: 306,
      totalGoals: 387,
      averageGoals: 2.94,
      startDate: "2025-08-01",
      endDate: "2026-05-31",
      season: "2025/26",
      organizer: "Indonesian Football Association",
      venue: "Multiple",
    }),
    [compId]
  );

  const standings = [
    { rank: 1, team: "FC Garuda", played: 20, won: 12, drawn: 5, lost: 3, goals: "+18", points: 41 },
    { rank: 2, team: "Persija Jakarta", played: 20, won: 11, drawn: 6, lost: 3, goals: "+15", points: 39 },
    { rank: 3, team: "PSM Makassar", played: 20, won: 10, drawn: 7, lost: 3, goals: "+12", points: 37 },
  ];

  const topScorers = [
    { rank: 1, player: "Ahmad Rizki", club: "FC Garuda", goals: 18, assists: 5 },
    { rank: 2, player: "Budi Santoso", club: "Persija Jakarta", goals: 15, assists: 3 },
    { rank: 3, player: "Clara Wijaya", club: "PSM Makassar", goals: 12, assists: 4 },
  ];

  const stats = [
    { label: "Total Matches", value: competition.totalMatches },
    { label: "Matches Played", value: competition.matchesPlayed },
    { label: "Total Goals", value: competition.totalGoals },
    { label: "Avg Goals/Match", value: competition.averageGoals.toFixed(2) },
  ];

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        title={competition.name}
        subtitle={`${competition.type} • Season ${competition.season}`}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Competitions", href: "/competitions" },
          { label: competition.name },
        ]}
      />

      <Card className="shadow-elevation-1 bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <div className="flex items-start justify-between gap-6">
            <div className="flex items-start gap-4 min-w-0">
              <img
                src={competition.logo}
                alt={competition.name}
                className="h-24 w-24 rounded-lg border-2 border-primary shrink-0"
              />
              <div className="min-w-0">
                <h2 className="text-2xl font-bold dark:text-slate-100 truncate">
                  {competition.name}
                </h2>
                <p className="text-sm text-muted-foreground dark:text-slate-400 mb-2">
                  {competition.description}
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  <StatusBadge status={competition.status} />
                  <Badge variant="outline" className="font-bold text-[10px] uppercase">
                    {competition.type}
                  </Badge>
                  <Badge variant="secondary" className="font-bold text-[10px] uppercase dark:bg-slate-700">
                    Season {competition.season}
                  </Badge>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <Button
                size="sm"
                variant="outline"
                className="gap-2 font-bold"
                onClick={() => navigate(`/competitions/${competition.id}/edit`)}
              >
                <Edit2 className="h-4 w-4" /> Edit
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="shadow-elevation-1 bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
            <CardContent className="pt-4">
              <p className="text-xs font-bold text-muted-foreground dark:text-slate-400 uppercase">
                {stat.label}
              </p>
              <p className="text-2xl font-bold text-primary mt-1">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5 bg-muted dark:bg-slate-700/50">
          <TabsTrigger value="overview" className="font-bold text-xs uppercase">
            Overview
          </TabsTrigger>
          <TabsTrigger value="standings" className="font-bold text-xs uppercase">
            Standings
          </TabsTrigger>
          <TabsTrigger value="teams" className="font-bold text-xs uppercase">
            Teams
          </TabsTrigger>
          <TabsTrigger value="matches" className="font-bold text-xs uppercase">
            Matches
          </TabsTrigger>
          <TabsTrigger value="stats" className="font-bold text-xs uppercase">
            Stats
          </TabsTrigger>
        </TabsList>

        <div className="mt-6">
          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="shadow-elevation-1 bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-bold">Competition Info</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between pb-2 border-b border-dashed border-muted dark:border-slate-600">
                    <span className="text-xs font-bold text-muted-foreground dark:text-slate-400 uppercase">
                      Organizer
                    </span>
                    <span className="text-sm font-bold dark:text-slate-100">{competition.organizer}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-dashed border-muted dark:border-slate-600">
                    <span className="text-xs font-bold text-muted-foreground dark:text-slate-400 uppercase">
                      Start Date
                    </span>
                    <span className="text-sm font-bold dark:text-slate-100">{competition.startDate}</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-dashed border-muted dark:border-slate-600">
                    <span className="text-xs font-bold text-muted-foreground dark:text-slate-400 uppercase">
                      End Date
                    </span>
                    <span className="text-sm font-bold dark:text-slate-100">{competition.endDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-xs font-bold text-muted-foreground dark:text-slate-400 uppercase">
                      Teams
                    </span>
                    <span className="text-sm font-bold dark:text-slate-100">{competition.teams}</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-elevation-1 bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base font-bold">Top Scorers</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {topScorers.map((scorer) => (
                    <div key={scorer.rank} className="flex items-center justify-between p-2 rounded-lg bg-muted/30 dark:bg-slate-700/50">
                      <div className="min-w-0">
                        <p className="font-bold text-sm dark:text-slate-100">{scorer.player}</p>
                        <p className="text-xs text-muted-foreground dark:text-slate-400">{scorer.club}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-sm dark:text-slate-100">{scorer.goals}</p>
                        <p className="text-xs text-muted-foreground dark:text-slate-400">goals</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="standings">
            <Card className="shadow-elevation-1 bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-muted dark:border-slate-700">
                        <th className="text-left py-2 px-2 font-bold text-xs uppercase">#</th>
                        <th className="text-left py-2 px-2 font-bold text-xs uppercase">Team</th>
                        <th className="text-center py-2 px-1 font-bold text-xs uppercase">P</th>
                        <th className="text-center py-2 px-1 font-bold text-xs uppercase">W</th>
                        <th className="text-center py-2 px-1 font-bold text-xs uppercase">D</th>
                        <th className="text-center py-2 px-1 font-bold text-xs uppercase">L</th>
                        <th className="text-center py-2 px-1 font-bold text-xs uppercase">GD</th>
                        <th className="text-center py-2 px-1 font-bold text-xs uppercase">Pts</th>
                      </tr>
                    </thead>
                    <tbody>
                      {standings.map((row) => (
                        <tr key={row.rank} className="border-b border-muted dark:border-slate-700 hover:bg-muted/50 dark:hover:bg-slate-700/30">
                          <td className="py-2 px-2 font-bold dark:text-slate-100">{row.rank}</td>
                          <td className="py-2 px-2 font-bold dark:text-slate-100">{row.team}</td>
                          <td className="text-center py-2 px-1 dark:text-slate-100">{row.played}</td>
                          <td className="text-center py-2 px-1 dark:text-slate-100">{row.won}</td>
                          <td className="text-center py-2 px-1 dark:text-slate-100">{row.drawn}</td>
                          <td className="text-center py-2 px-1 dark:text-slate-100">{row.lost}</td>
                          <td className="text-center py-2 px-1 font-bold text-primary">{row.goals}</td>
                          <td className="text-center py-2 px-1 font-bold text-lg text-primary">{row.points}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="teams">
            <Card className="shadow-elevation-1 bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground dark:text-slate-400">
                  Total: {competition.teams} teams registered and active
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="matches">
            <Card className="shadow-elevation-1 bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground dark:text-slate-400">
                  {competition.matchesPlayed} matches played • {competition.totalMatches - competition.matchesPlayed} remaining
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stats">
            <Card className="shadow-elevation-1 bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground dark:text-slate-400">
                  Total goals: {competition.totalGoals} • Average: {competition.averageGoals.toFixed(2)} per match
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default CompetitionDetailPage;
