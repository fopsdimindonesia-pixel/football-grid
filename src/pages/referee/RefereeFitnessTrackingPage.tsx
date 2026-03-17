import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { KPICard } from "@/components/shared/KPICard";
import { Progress } from "@/components/ui/progress";
import { Activity, TrendingUp, CheckCircle, AlertCircle } from "lucide-react";

export default function RefereeFitnessTrackingPage() {
  const fitnessTests = [
    {
      id: 1,
      type: "Beep Test",
      date: "2025-01-01",
      result: "Level 12",
      benchmark: "Level 12+",
      status: "Passed",
      score: 95,
    },
    {
      id: 2,
      type: "Sprint Test (100m)",
      date: "2024-12-15",
      result: "42 seconds",
      benchmark: "45 seconds",
      status: "Passed",
      score: 88,
    },
    {
      id: 3,
      type: "Endurance (12min Run)",
      date: "2024-11-20",
      result: "2,850 meters",
      benchmark: "2,400 meters",
      status: "Passed",
      score: 92,
    },
    {
      id: 4,
      type: "Vertical Jump",
      date: "2024-10-10",
      result: "58 inches",
      benchmark: "50 inches",
      status: "Passed",
      score: 90,
    },
  ];

  const currentFitnessScore = 91;
  const benchmarkScore = 85;

  const trendData = [
    { month: "Oct", score: 87 },
    { month: "Nov", score: 89 },
    { month: "Dec", score: 91 },
    { month: "Jan", score: 93 },
  ];

  const nextTestDue = "2025-04-15";

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Fitness Tracking
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Monitor your fitness test results and progress
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          label="Current Fitness Score"
          value={`${currentFitnessScore}%`}
          icon={<Activity className="w-6 h-6" />}
        />
        <KPICard
          label="Benchmark"
          value={`${benchmarkScore}%`}
          icon={<CheckCircle className="w-6 h-6" />}
        />
        <KPICard
          label="Tests Passed"
          value="4/4"
          icon={<TrendingUp className="w-6 h-6" />}
        />
        <KPICard
          label="Next Test Due"
          value="Apr 15"
          icon={<AlertCircle className="w-6 h-6" />}
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Fitness Score Overview */}
        <Card className="lg:col-span-2 border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Fitness Score Progress
            </h2>

            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Your Score
                  </span>
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                    {currentFitnessScore}%
                  </span>
                </div>
                <Progress value={currentFitnessScore} className="h-3" />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Benchmark
                  </span>
                  <span className="text-lg font-bold text-gray-900 dark:text-white">
                    {benchmarkScore}%
                  </span>
                </div>
                <Progress value={benchmarkScore} className="h-3" />
              </div>

              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-lg p-4">
                <p className="text-sm text-green-900 dark:text-green-300">
                  ✓ You exceed the benchmark score. Good job maintaining your
                  fitness levels!
                </p>
              </div>
            </div>

            {/* Trend Chart */}
            <div className="mt-8">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                Trend (Last 4 Months)
              </h3>
              <div className="flex items-end gap-2 h-32">
                {trendData.map((data, idx) => (
                  <div
                    key={idx}
                    className="flex-1 flex flex-col items-center gap-2"
                  >
                    <div
                      className="w-full bg-blue-600 dark:bg-blue-500 rounded-t"
                      style={{ height: `${data.score * 1.2}px` }}
                    />
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      {data.month}
                    </span>
                    <span className="text-xs font-bold text-gray-900 dark:text-white">
                      {data.score}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Schedule */}
        <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Test Schedule
            </h3>

            <div className="space-y-3">
              <div className="p-3 border border-gray-200 dark:border-gray-800 rounded-lg">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Next Test Due
                </p>
                <p className="font-bold text-gray-900 dark:text-white">
                  {nextTestDue}
                </p>
                <Badge className="mt-2">72 days away</Badge>
              </div>

              <div className="p-3 border border-gray-200 dark:border-gray-800 rounded-lg bg-blue-50 dark:bg-blue-950/20">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Testing Location
                </p>
                <p className="font-bold text-gray-900 dark:text-white">
                  FA Training Centre
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  Manchester, England
                </p>
              </div>

              <Button className="w-full">Register for Test</Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Test History */}
      <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Test History
          </h2>

          <div className="space-y-3">
            {fitnessTests.map((test) => (
              <div
                key={test.id}
                className="flex items-center gap-4 p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {test.type}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {test.date}
                  </p>
                </div>

                <div className="text-right">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-900 dark:text-white">
                      {test.result}
                    </span>
                    {test.status === "Passed" && (
                      <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                    )}
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    vs {test.benchmark}
                  </p>
                </div>

                <div className="text-right min-w-16">
                  <Progress
                    value={test.score}
                    className="h-2 mb-1"
                  />
                  <p className="text-sm font-bold text-gray-900 dark:text-white">
                    {test.score}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Recommendations */}
      <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Recommendations
          </h2>

          <div className="space-y-3 text-sm">
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700 dark:text-gray-300">
                Maintain current fitness levels - continue regular training
              </p>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700 dark:text-gray-300">
                Focus on sprint speed - consider interval training
              </p>
            </div>
            <div className="flex gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700 dark:text-gray-300">
                Schedule pre-test training 4 weeks before April test
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
