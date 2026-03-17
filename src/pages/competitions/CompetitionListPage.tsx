import React, { useState, useMemo } from "react";

import { FilterBar } from "@/components/shared";
import { Plus, Grid, List, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const CompetitionListPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  const competitions = useMemo(
    () => [
      {
        id: "CMP-001",
        name: "Liga Nusantara 2025/26",
        type: "League",
        status: "active",
        teams: 18,
        matches: "132/306",
        region: "National",
        startDate: "2025-08-01",
        endDate: "2026-05-31",
        logo: "https://api.dicebear.com/7.x/initials/svg?seed=Liga",
      },
      {
        id: "CMP-002",
        name: "Piala Indonesia 2026",
        type: "Cup",
        status: "active",
        teams: 32,
        matches: "24/32",
        region: "National",
        startDate: "2026-01-15",
        endDate: "2026-05-15",
        logo: "https://api.dicebear.com/7.x/initials/svg?seed=PI",
      },
      {
        id: "CMP-003",
        name: "Superliga Asia 2026",
        type: "Group Stage",
        status: "upcoming",
        teams: 8,
        matches: "0/56",
        region: "Asia",
        startDate: "2026-04-01",
        endDate: "2026-06-30",
        logo: "https://api.dicebear.com/7.x/initials/svg?seed=SA",
      },
      {
        id: "CMP-004",
        name: "Youth League U-23",
        type: "League",
        status: "active",
        teams: 12,
        matches: "45/132",
        region: "National",
        startDate: "2025-09-01",
        endDate: "2026-06-30",
        logo: "https://api.dicebear.com/7.x/initials/svg?seed=YL",
      },
      {
        id: "CMP-005",
        name: "Jakarta Derby Cup",
        type: "Cup",
        status: "completed",
        teams: 8,
        matches: "8/8",
        region: "Regional",
        startDate: "2025-11-01",
        endDate: "2025-11-30",
        logo: "https://api.dicebear.com/7.x/initials/svg?seed=JD",
      },
      {
        id: "CMP-006",
        name: "Community 5-a-Side",
        type: "Tournament",
        status: "upcoming",
        teams: 24,
        matches: "0/48",
        region: "Jakarta",
        startDate: "2026-04-15",
        endDate: "2026-05-15",
        logo: "https://api.dicebear.com/7.x/initials/svg?seed=C5",
      },
    ],
    []
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400";
      case "upcoming":
        return "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400";
      case "completed":
        return "bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-400";
      default:
        return "bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-400";
    }
  };

  const displayCompetiions = competitions.filter((comp) => {
    const matchesSearch =
      comp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comp.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === "all" || comp.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6 pb-12">
      <PageHeader
        title="Competitions"
        subtitle="Browse and manage all competitions"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Competitions" },
        ]}
        action={
          <Button className="gap-2 font-bold">
            <Plus className="h-4 w-4" /> Create Competition
          </Button>
        }
      />

      <Card className="shadow-elevation-1 bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Input
                placeholder="Search competitions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-white dark:bg-slate-700 dark:border-slate-600"
              />
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="h-10 px-3 rounded-md border border-muted dark:border-slate-600 bg-white dark:bg-slate-700 dark:text-slate-100 text-sm font-medium"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="upcoming">Upcoming</option>
                <option value="completed">Completed</option>
              </select>
              <Button size="sm" variant="outline" className="gap-2">
                <Download className="h-4 w-4" /> Export
              </Button>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground dark:text-slate-400">
                {displayCompetiions.length} competitions
              </span>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant={viewMode === "grid" ? "default" : "outline"}
                  onClick={() => setViewMode("grid")}
                  className="gap-2"
                >
                  <Grid className="h-4 w-4" /> Grid
                </Button>
                <Button
                  size="sm"
                  variant={viewMode === "list" ? "default" : "outline"}
                  onClick={() => setViewMode("list")}
                  className="gap-2"
                >
                  <List className="h-4 w-4" /> List
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayCompetiions.map((comp) => (
            <Card
              key={comp.id}
              className="shadow-elevation-1 bg-white dark:bg-slate-800 border-0 dark:border-slate-700 hover:shadow-lg transition-shadow cursor-pointer"
            >
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <img
                      src={comp.logo}
                      alt={comp.name}
                      className="h-16 w-16 rounded-lg"
                    />
                    <Badge className={`text-xs font-bold ${getStatusColor(comp.status)}`}>
                      {comp.status.toUpperCase()}
                    </Badge>
                  </div>

                  <div>
                    <h3 className="font-bold text-sm dark:text-slate-100">
                      {comp.name}
                    </h3>
                    <p className="text-xs text-muted-foreground dark:text-slate-400">
                      {comp.type} • {comp.region}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-2 border-t border-muted dark:border-slate-700">
                    <div>
                      <p className="text-xs text-muted-foreground dark:text-slate-400">
                        Teams
                      </p>
                      <p className="font-bold text-sm dark:text-slate-100">
                        {comp.teams}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground dark:text-slate-400">
                        Matches
                      </p>
                      <p className="font-bold text-sm dark:text-slate-100">
                        {comp.matches}
                      </p>
                    </div>
                  </div>

                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full font-bold"
                  >
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="shadow-elevation-1 bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <div className="space-y-2">
              {displayCompetiions.map((comp) => (
                <div
                  key={comp.id}
                  className="p-3 rounded-lg border border-muted dark:border-slate-600 dark:bg-slate-700/30 hover:bg-muted/50 dark:hover:bg-slate-700/60 cursor-pointer transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <img
                      src={comp.logo}
                      alt={comp.name}
                      className="h-10 w-10 rounded"
                    />
                    <div className="min-w-0">
                      <h4 className="font-bold text-sm dark:text-slate-100">
                        {comp.name}
                      </h4>
                      <p className="text-xs text-muted-foreground dark:text-slate-400">
                        {comp.type} • {comp.teams} teams • {comp.matches} matches
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 ml-4">
                    <Badge className={`text-xs font-bold ${getStatusColor(comp.status)}`}>
                      {comp.status}
                    </Badge>
                    <ActionDropdown
                      label="Actions"
                      actions={[
                        { label: "View Details", onClick: () => {} },
                        { label: "Edit", onClick: () => {} },
                        { label: "Standings", onClick: () => {} },
                        { label: "Fixtures", onClick: () => {} },
                      ]}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CompetitionListPage;
