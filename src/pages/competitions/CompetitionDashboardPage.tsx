import React, { useMemo, useState } from "react";

import { KPICard, PageHeader, DataTable, TabNavigation } from "@/components/shared";
import {
  Activity,
  Calendar,
  Goal,
  Trophy,
  Users,
  TrendingUp,
  AlertCircle,
  FileText,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const CompetitionDashboardPage: React.FC = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState("season");

  const competitions = useMemo(
    () => [
      {
        id: "CMP-001",
        name: "Liga Nusantara 2025/26",
        type: "League",
        status: "active",
        teams: 18,
        matchesPlayedTotal: 132,
        matchesRemaining: 174,
        totalGoals: 387,
        revenue: 2500000000,
      },
      {
        id: "CMP-002",
        name: "Piala Indonesia 2026",
        type: "Cup",
        status: "active",
        teams: 32,
        matchesPlayedTotal: 24,
        matchesRemaining: 8,
        totalGoals: 156,
        revenue: 1200000000,
      },
      {
        id: "CMP-003",
        name: "Superliga Asia 2026",
        type: "Group Stage",
        status: "upcoming",
        teams: 8,
        matchesPlayedTotal: 0,
        matchesRemaining: 56,
        totalGoals: 0,
        revenue: 8500000000,
      },
    ],
    []
  );

  const kpiMetrics = [
    {
      label: "Active Competitions",
      value: "3",
      change: "+1",
      accent: "text-primary",
    },
    {
      label: "Total Teams Registered",
      value: "58",
      change: "+12",
      accent: "text-blue-600 dark:text-blue-400",
    },
    {
      label: "Matches Played",
      value: "156",
      change: "+28",
      accent: "text-purple-600 dark:text-purple-400",
    },
    {
      label: "Revenue Generated",
      value: "Rp 12.2B",
      change: "+8.5%",
      accent: "text-emerald-600 dark:text-emerald-400",
    },
  ];

  const upcomingMatches = [
    {
      id: "M001",
      home: "FC Garuda",
      away: "PSM Makassar",
      date: "2026-03-20",
      time: "15:00",
      venue: "GBK Stadium",
      competition: "Liga Nusantara",
    },
    {
      id: "M002",
      home: "Persija Jakarta",
      away: "Bali United",
      date: "2026-03-20",
      time: "19:00",
      venue: "Stadion Manahan",
      competition: "Liga Nusantara",
    },
    {
      id: "M003",
      home: "Arema FC",
      away: "Persib Bandung",
      date: "2026-03-21",
      time: "15:00",
      venue: "Stadion Kanjuruhan",
      competition: "Liga Nusantara",
    },
  ];

  const revenueChartData = [
    { label: "Liga Nusantara", value: 2500, color: "bg-primary" },
    { label: "Piala Indonesia", value: 1200, color: "bg-blue-600 dark:bg-blue-500" },
    { label: "Intl. Leagues", value: 8500, color: "bg-purple-600 dark:bg-purple-500" },
  ];

  const topCompetiions = [
    {
      name: "Superliga Asia 2026",
      teams: 8,
      prize: "Rp 8.5B",
      status: "Upcoming",
    },
    {
      name: "Liga Nusantara 2025/26",
      teams: 18,
      prize: "Rp 2.5B",
      status: "In Progress",
    },
    {
      name: "Piala Indonesia 2026",
      teams: 32,
      prize: "Rp 1.2B",
      status: "In Progress",
    },
  ];

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        title="Competition Dashboard"
        subtitle="Manage and monitor all football competitions"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Competitions", href: "/competitions" },
          { label: "Dashboard" },
        ]}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiMetrics.map((metric) => (
          <KPICard
            key={metric.label}
            label={metric.label}
            value={metric.value}
            trend={metric.change}
            accent={metric.accent}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 shadow-elevation-1 bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-bold flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Revenue Distribution
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {revenueChartData.map((item) => (
              <div key={item.label} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-bold dark:text-slate-100">
                    {item.label}
                  </span>
                  <span className="font-bold text-primary">Rp {item.value}B</span>
                </div>
                <div className="h-2 bg-muted dark:bg-slate-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${item.color}`}
                    style={{
                      width: `${(item.value / 8500) * 100}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-elevation-1 bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-bold flex items-center gap-2">
              <Trophy className="h-5 w-5 text-primary" />
              Quick Stats
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between pb-2 border-b border-dashed border-muted dark:border-slate-600">
              <span className="text-xs font-bold text-muted-foreground dark:text-slate-400 uppercase">
                Avg. Teams
              </span>
              <span className="text-sm font-bold dark:text-slate-100">19.3</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-dashed border-muted dark:border-slate-600">
              <span className="text-xs font-bold text-muted-foreground dark:text-slate-400 uppercase">
                Avg. Goals/Match
              </span>
              <span className="text-sm font-bold dark:text-slate-100">2.47</span>
            </div>
            <div className="flex justify-between pb-2 border-b border-dashed border-muted dark:border-slate-600">
              <span className="text-xs font-bold text-muted-foreground dark:text-slate-400 uppercase">
                Completion %
              </span>
              <span className="text-sm font-bold text-primary">87%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xs font-bold text-muted-foreground dark:text-slate-400 uppercase">
                Top Scorer
              </span>
              <span className="text-sm font-bold dark:text-slate-100">
                Ahmad (18 goals)
              </span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 shadow-elevation-1 bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-bold flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              Upcoming Matches
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {upcomingMatches.map((match) => (
              <div
                key={match.id}
                className="p-3 rounded-lg bg-muted/30 dark:bg-slate-700/50 dark:border dark:border-slate-600"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">
                    {match.date} • {match.time}
                  </span>
                  <Badge variant="secondary" className="text-[10px]">
                    {match.competition}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm dark:text-slate-100">
                    {match.home}
                  </span>
                  <span className="text-xs text-muted-foreground dark:text-slate-400">
                    vs
                  </span>
                  <span className="font-bold text-sm dark:text-slate-100">
                    {match.away}
                  </span>
                </div>
                <div className="text-xs text-muted-foreground dark:text-slate-400 mt-1">
                  📍 {match.venue}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="shadow-elevation-1 bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-bold flex items-center gap-2">
              <Goal className="h-5 w-5 text-primary" />
              Featured Competitions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {topCompetiions.map((comp) => (
              <div
                key={comp.name}
                className="p-2 rounded-lg bg-muted/30 dark:bg-slate-700/50"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <h4 className="font-bold text-xs dark:text-slate-100 truncate">
                      {comp.name}
                    </h4>
                    <p className="text-[10px] text-muted-foreground dark:text-slate-400">
                      {comp.teams} teams • {comp.prize}
                    </p>
                  </div>
                  <Badge variant="outline" className="text-[10px] whitespace-nowrap">
                    {comp.status}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-elevation-1 bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardHeader className="pb-3 border-b border-muted dark:border-slate-700">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-bold flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              All Competitions
            </CardTitle>
            <Button size="sm" className="gap-2 font-bold">
              <FileText className="h-4 w-4" /> New Competition
            </Button>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-3">
            {competitions.map((comp) => (
              <div
                key={comp.id}
                className="p-3 rounded-lg border border-muted dark:border-slate-600 dark:bg-slate-700/30"
              >
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-bold text-sm dark:text-slate-100">
                      {comp.name}
                    </h4>
                    <p className="text-xs text-muted-foreground dark:text-slate-400">
                      ID: {comp.id}
                    </p>
                  </div>
                  <Badge
                    variant={comp.status === "active" ? "default" : "outline"}
                  >
                    {comp.type}
                  </Badge>
                </div>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="p-1 rounded bg-muted dark:bg-slate-600/50">
                    <span className="text-muted-foreground dark:text-slate-400">
                      Teams:{" "}
                    </span>
                    <span className="font-bold dark:text-slate-100">
                      {comp.teams}
                    </span>
                  </div>
                  <div className="p-1 rounded bg-muted dark:bg-slate-600/50">
                    <span className="text-muted-foreground dark:text-slate-400">
                      Matches:{" "}
                    </span>
                    <span className="font-bold dark:text-slate-100">
                      {comp.matchesPlayedTotal}/{comp.matchesPlayedTotal + comp.matchesRemaining}
                    </span>
                  </div>
                  <div className="p-1 rounded bg-muted dark:bg-slate-600/50">
                    <span className="text-muted-foreground dark:text-slate-400">
                      Goals:{" "}
                    </span>
                    <span className="font-bold dark:text-slate-100">
                      {comp.totalGoals}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompetitionDashboardPage;
