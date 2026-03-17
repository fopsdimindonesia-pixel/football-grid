import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { KPICard } from "@/components/shared/KPICard";
import { Calendar, Clock, Star, Zap } from "lucide-react";

export default function RefereeDashboardPage() {
  const currentUser = {
    name: "James Mitchell",
    badge: "Gold",
    nextMatch: "Arsenal vs Chelsea",
    nextMatchDate: "2025-01-20",
  };

  const kpis = [
    { label: "Matches This Season", value: "24", icon: Calendar, color: "blue" },
    { label: "Next Assignment", value: "Jan 20", icon: Clock, color: "purple" },
    { label: "Average Rating", value: "4.8/5", icon: Star, color: "yellow" },
    { label: "Fitness Score", value: "92%", icon: Zap, color: "green" },
  ];

  const upcomingAssignments = [
    { date: "2025-01-20", match: "Arsenal vs Chelsea", status: "confirmed" },
    { date: "2025-01-22", match: "Manchester City vs Liverpool", status: "confirmed" },
    { date: "2025-01-25", match: "Tottenham vs Manchester United", status: "pending" },
  ];

  const recentMatches = [
    {
      id: 1,
      match: "Brighton vs West Ham",
      date: "2025-01-15",
      rating: 4.7,
      status: "Completed",
    },
    {
      id: 2,
      match: "Newcastle vs Aston Villa",
      date: "2025-01-12",
      rating: 4.9,
      status: "Completed",
    },
    {
      id: 3,
      match: "Everton vs Fulham",
      date: "2025-01-10",
      rating: 4.5,
      status: "Completed",
    },
  ];

  const pendingEvaluations = [
    { id: 1, match: "Brighton vs West Ham", assessor: "Jon Smith", daysAgo: 5 },
    { id: 2, match: "Newcastle vs Aston Villa", assessor: "Sarah Jones", daysAgo: 8 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Welcome back, {currentUser.name}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Your next assignment: <strong>{currentUser.nextMatch}</strong> on{" "}
          {currentUser.nextMatchDate}
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, idx) => (
          <KPICard
            key={idx}
            label={kpi.label}
            value={kpi.value}
            icon={<kpi.icon className="w-6 h-6" />}
          />
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Upcoming Assignments */}
        <div className="lg:col-span-2">
          <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Upcoming Assignments
              </h2>
              <div className="space-y-3">
                {upcomingAssignments.map((assignment, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition"
                  >
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {assignment.match}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {assignment.date}
                      </p>
                    </div>
                    <Badge
                      variant={
                        assignment.status === "confirmed"
                          ? "default"
                          : "secondary"
                      }
                    >
                      {assignment.status.charAt(0).toUpperCase() +
                        assignment.status.slice(1)}
                    </Badge>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4">View All Assignments</Button>
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <div>
          <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 h-full">
            <div className="p-6 space-y-3">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                Quick Actions
              </h3>
              <Button variant="outline" size="sm" className="w-full">
                Submit Match Report
              </Button>
              <Button variant="outline" size="sm" className="w-full">
                Update Availability
              </Button>
              <Button variant="outline" size="sm" className="w-full">
                View Certifications
              </Button>
              <Button variant="outline" size="sm" className="w-full">
                Fitness Results
              </Button>
              <Button variant="outline" size="sm" className="w-full">
                Training Courses
              </Button>
            </div>
          </Card>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Match Reports */}
        <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Recent Match Reports
            </h2>
            <div className="space-y-3">
              {recentMatches.map((match) => (
                <div
                  key={match.id}
                  className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition"
                >
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {match.match}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {match.date}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-yellow-600 dark:text-yellow-400">
                      {match.rating}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Rating
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Pending Evaluations */}
        <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
          <div className="p-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Pending Evaluations
            </h2>
            <div className="space-y-3">
              {pendingEvaluations.length > 0 ? (
                pendingEvaluations.map((eval_item) => (
                  <div
                    key={eval_item.id}
                    className="p-4 border border-blue-200 dark:border-blue-900 rounded-lg bg-blue-50 dark:bg-blue-950/20"
                  >
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {eval_item.match}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      By {eval_item.assessor} • {eval_item.daysAgo} days ago
                    </p>
                    <Button size="sm" className="mt-2 w-full">
                      View Evaluation
                    </Button>
                  </div>
                ))
              ) : (
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  No pending evaluations
                </p>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
