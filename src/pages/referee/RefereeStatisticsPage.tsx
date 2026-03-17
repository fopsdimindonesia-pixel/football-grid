import { Card } from "@/components/ui/card";
import { KPICard } from "@/components/shared/KPICard";
import {
  BarChart3, TrendingUp, Users, Target, AlertCircle, PieChart
} from "lucide-react";

export default function RefereeStatisticsPage() {
  const stats = {
    totalMatches: 247,
    cardsIssued: 440,
    penaltyDecisions: 38,
    varrOverturns: 3,
    averageRating: 4.8,
  };

  const kpis = [
    {
      label: "Cards Issued / Match",
      value: "1.78",
      icon: BarChart3,
      color: "red",
    },
    {
      label: "Penalty Decisions",
      value: "38",
      icon: Target,
      color: "yellow",
    },
    {
      label: "VAR Overturns",
      value: "3",
      icon: AlertCircle,
      color: "blue",
    },
    {
      label: "Average Rating",
      value: "4.8/5",
      icon: TrendingUp,
      color: "green",
    },
  ];

  const cardDataByMonth = [
    { month: "Jan", yellow: 15, red: 2 },
    { month: "Feb", yellow: 18, red: 1 },
    { month: "Mar", yellow: 20, red: 3 },
    { month: "Apr", yellow: 16, red: 2 },
    { month: "May", yellow: 22, red: 2 },
    { month: "Jun", yellow: 19, red: 1 },
  ];

  const maxCards = Math.max(...cardDataByMonth.map(d => d.yellow + d.red));

  const penaltyByOutcome = [
    { outcome: "Goal", count: 22, percentage: 58 },
    { outcome: "Saved", count: 10, percentage: 26 },
    { outcome: "Missed", count: 4, percentage: 11 },
    { outcome: "Retaken", count: 2, percentage: 5 },
  ];

  const homeAwayBias = {
    homeTeam: 52,
    awayTeam: 48,
  };

  const redCardTrend = [
    { competition: "Premier League", count: 12 },
    { competition: "Championship", count: 8 },
    { competition: "Women's Super League", count: 2 },
    { competition: "FA Cup", count: 3 },
  ];

  const matchesByCompetition = [
    { name: "Premier League", matches: 120, percentage: 49 },
    { name: "Championship", matches: 80, percentage: 32 },
    { name: "Women's Super League", matches: 25, percentage: 10 },
    { name: "FA Cup", matches: 22, percentage: 9 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Referee Statistics
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Performance analytics and detailed insights
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

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Cards Trend */}
        <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Cards Issued - Trend
            </h2>

            <div className="space-y-8">
              {cardDataByMonth.map((data, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {data.month}
                    </span>
                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                      {data.yellow + data.red} cards
                    </span>
                  </div>
                  <div className="flex gap-2 h-6">
                    <div
                      className="bg-yellow-500 dark:bg-yellow-400 rounded"
                      style={{
                        width: `${(data.yellow / maxCards) * 80}%`,
                        minWidth: data.yellow > 0 ? "4px" : "0",
                      }}
                      title={`${data.yellow} yellow`}
                    />
                    <div
                      className="bg-red-500 dark:bg-red-400 rounded"
                      style={{
                        width: `${(data.red / maxCards) * 20}%`,
                        minWidth: data.red > 0 ? "4px" : "0",
                      }}
                      title={`${data.red} red`}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-yellow-500 dark:bg-yellow-400" />
                <span className="text-gray-600 dark:text-gray-400">Yellow</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-red-500 dark:bg-red-400" />
                <span className="text-gray-600 dark:text-gray-400">Red</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Penalty Decisions Distribution */}
        <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Penalty Decisions
            </h2>

            <div className="space-y-3">
              {penaltyByOutcome.map((item, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {item.outcome}
                    </span>
                    <div className="text-right">
                      <span className="text-sm font-bold text-gray-900 dark:text-white">
                        {item.count}
                      </span>
                      <span className="text-xs text-gray-600 dark:text-gray-400 ml-2">
                        ({item.percentage}%)
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-800 rounded h-2">
                    <div
                      className="bg-blue-600 dark:bg-blue-500 rounded h-2"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Home/Away Bias Analysis */}
        <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Home/Away Bias Analysis
            </h2>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Favoring Home Team
                  </span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">
                    {homeAwayBias.homeTeam}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-800 rounded h-3">
                  <div
                    className="bg-green-600 dark:bg-green-500 rounded h-3"
                    style={{ width: `${homeAwayBias.homeTeam}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Favoring Away Team
                  </span>
                  <span className="text-sm font-bold text-gray-900 dark:text-white">
                    {homeAwayBias.awayTeam}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-800 rounded h-3">
                  <div
                    className="bg-blue-600 dark:bg-blue-500 rounded h-3"
                    style={{ width: `${homeAwayBias.awayTeam}%` }}
                  />
                </div>
              </div>

              <p className="text-xs text-gray-600 dark:text-gray-400 mt-4">
                Relatively balanced officiating across home and away matches
              </p>
            </div>
          </div>
        </Card>

        {/* Matches by Competition */}
        <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Matches by Competition
            </h2>

            <div className="space-y-3">
              {matchesByCompetition.map((item, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {item.name}
                    </span>
                    <div className="text-right">
                      <span className="text-sm font-bold text-gray-900 dark:text-white">
                        {item.matches}
                      </span>
                      <span className="text-xs text-gray-600 dark:text-gray-400 ml-2">
                        ({item.percentage}%)
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-800 rounded h-2">
                    <div
                      className="bg-purple-600 dark:bg-purple-500 rounded h-2"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Red Card Distribution */}
        <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Red Cards by Competition
            </h2>

            <div className="space-y-3">
              {redCardTrend.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-800 rounded-lg"
                >
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    {item.competition}
                  </span>
                  <span className="text-lg font-bold text-red-600 dark:text-red-400">
                    {item.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>

      {/* Performance Summary */}
      <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Performance Summary
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-600 dark:text-gray-400 mb-1">Total Matches</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {stats.totalMatches}
              </p>
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400 mb-1">Total Cards</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {stats.cardsIssued}
              </p>
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400 mb-1">
                Penalties Awarded
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {stats.penaltyDecisions}
              </p>
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400 mb-1">
                VAR Overturns
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {stats.varrOverturns}
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
