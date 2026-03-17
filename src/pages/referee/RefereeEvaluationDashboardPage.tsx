import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { KPICard } from "@/components/shared/KPICard";
import { Input } from "@/components/ui/input";
import { Star, Zap, Target, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function RefereeEvaluationDashboardPage() {
  const [activeTab, setActiveTab] = useState("list");
  const [selectedRef, setSelectedRef] = useState<string | null>(null);

  const evaluations = [
    {
      id: 1,
      referee: "James Mitchell",
      evaluator: "Jon Smith",
      date: "2025-01-15",
      score: 4.7,
      positioning: 9,
      decisions: 9,
      gameManagement: 8,
      communication: 9,
      fitness: 9,
    },
    {
      id: 2,
      referee: "Sarah Connor",
      evaluator: "Sarah Jones",
      date: "2025-01-12",
      score: 4.9,
      positioning: 10,
      decisions: 9,
      gameManagement: 9,
      communication: 10,
      fitness: 10,
    },
    {
      id: 3,
      referee: "Mike Thompson",
      evaluator: "Jon Smith",
      date: "2025-01-10",
      score: 4.3,
      positioning: 8,
      decisions: 8,
      gameManagement: 7,
      communication: 8,
      fitness: 9,
    },
  ];

  const referees = [
    { id: "ref-001", name: "James Mitchell" },
    { id: "ref-002", name: "Sarah Connor" },
    { id: "ref-003", name: "Mike Thompson" },
    { id: "ref-004", name: "Emma Wilson" },
  ];

  const handleCreateEvaluation = () => {
    setActiveTab("create");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Referee Evaluation Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Assess and track referee performance
          </p>
        </div>
        <Button onClick={handleCreateEvaluation}>Create Evaluation</Button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          label="Total Evaluations"
          value="124"
          icon={<Star className="w-6 h-6" />}
        />
        <KPICard
          label="Average Score"
          value="4.6/5"
          icon={<Target className="w-6 h-6" />}
        />
        <KPICard
          label="Referees Evaluated"
          value="48"
          icon={<Zap className="w-6 h-6" />}
        />
        <KPICard
          label="Pending Reviews"
          value="8"
          icon={<MessageSquare className="w-6 h-6" />}
        />
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-200 dark:border-gray-800">
        <button
          onClick={() => setActiveTab("list")}
          className={`px-4 py-2 font-medium border-b-2 transition ${
            activeTab === "list"
              ? "border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400"
              : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
          }`}
        >
          Evaluation List
        </button>
        <button
          onClick={() => setActiveTab("create")}
          className={`px-4 py-2 font-medium border-b-2 transition ${
            activeTab === "create"
              ? "border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400"
              : "border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
          }`}
        >
          Create New
        </button>
      </div>

      {/* List View */}
      {activeTab === "list" && (
        <div className="space-y-4">
          {evaluations.map((eval_) => (
            <Card
              key={eval_.id}
              className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 cursor-pointer hover:shadow-lg transition"
              onClick={() => setSelectedRef(eval_.id.toString())}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {eval_.referee}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Evaluated by {eval_.evaluator} on {eval_.date}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
                      {eval_.score}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Overall Score
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {eval_.positioning}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Positioning
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {eval_.decisions}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Decisions
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {eval_.gameManagement}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Game Mgmt
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {eval_.communication}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Communication
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {eval_.fitness}
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Fitness
                    </p>
                  </div>
                </div>

                <Button size="sm" className="mt-4">
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* Create New Evaluation */}
      {activeTab === "create" && (
        <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
          <div className="p-8 max-w-2xl">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Create New Evaluation
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Select Referee *
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-900 dark:text-white">
                  <option value="">Choose a referee</option>
                  {referees.map((ref) => (
                    <option key={ref.id} value={ref.id}>
                      {ref.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Match Reference *
                </label>
                <Input placeholder="e.g., Arsenal vs Chelsea - Jan 20" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Evaluation Date *
                </label>
                <Input type="date" />
              </div>

              {/* Scoring Rubric */}
              <div className="border-t border-gray-200 dark:border-gray-800 pt-6">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                  Performance Assessment (1-10 Scale)
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Positioning & Movement
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-1">
                      <span>Poor</span>
                      <span>Excellent</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Decision Accuracy
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-1">
                      <span>Poor</span>
                      <span>Excellent</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Game Management
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-1">
                      <span>Poor</span>
                      <span>Excellent</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Communication
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-1">
                      <span>Poor</span>
                      <span>Excellent</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Physical Fitness
                    </label>
                    <input
                      type="range"
                      min="1"
                      max="10"
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mt-1">
                      <span>Poor</span>
                      <span>Excellent</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Comments & Feedback
                </label>
                <textarea
                  placeholder="Provide constructive feedback..."
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-900 dark:text-white"
                />
              </div>

              <div className="flex gap-2 justify-end">
                <Button variant="outline" onClick={() => setActiveTab("list")}>
                  Cancel
                </Button>
                <Button>Submit Evaluation</Button>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
