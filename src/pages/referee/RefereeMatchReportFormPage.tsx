import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Users } from "lucide-react";
import { useState } from "react";

export default function RefereeMatchReportFormPage() {
  const [activeSection, setActiveSection] = useState("verification");
  const [reportData, setReportData] = useState({
    pitchCondition: "Good",
    equipmentStatus: "OK",
    homeTeamSheet: true,
    awayTeamSheet: true,
    goals: [],
    yellowCards: [],
    redCards: [],
    substitutions: [],
    incidents: "",
    postMatchNotes: "",
  });

  const match = {
    id: "match-001",
    homeTeam: "Arsenal",
    awayTeam: "Chelsea",
    date: "2025-01-20",
    time: "15:00",
    venue: "Emirates Stadium",
    attendance: "61,000",
  };

  const sections = [
    { id: "verification", label: "Pre-Match" },
    { id: "events", label: "Match Events" },
    { id: "cards", label: "Disciplinary" },
    { id: "incidents", label: "Incidents" },
    { id: "notes", label: "Post-Match" },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6 py-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Match Report
        </h1>

        {/* Match Info Card */}
        <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {match.homeTeam} vs {match.awayTeam}
                </h2>
              </div>
              <Badge variant="default">In Progress</Badge>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Date</p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {match.date} {match.time}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Venue</p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {match.venue}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <div>
                  <p className="text-gray-600 dark:text-gray-400">Attendance</p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {match.attendance}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Section Navigation */}
      <div className="flex gap-2 overflow-x-auto">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`px-4 py-2 rounded-lg whitespace-nowrap font-medium transition ${
              activeSection === section.id
                ? "bg-blue-600 dark:bg-blue-500 text-white"
                : "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700"
            }`}
          >
            {section.label}
          </button>
        ))}
      </div>

      {/* Form Sections */}
      <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="p-8 min-h-96">
          {/* Pre-Match Verification */}
          {activeSection === "verification" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Pre-Match Verification
              </h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Pitch Condition
                  </label>
                  <select
                    value={reportData.pitchCondition}
                    onChange={(e) =>
                      setReportData({
                        ...reportData,
                        pitchCondition: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-900 dark:text-white"
                  >
                    <option>Good</option>
                    <option>Fair</option>
                    <option>Poor</option>
                    <option>Waterlogged</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Equipment Status
                  </label>
                  <select
                    value={reportData.equipmentStatus}
                    onChange={(e) =>
                      setReportData({
                        ...reportData,
                        equipmentStatus: e.target.value,
                      })
                    }
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-900 dark:text-white"
                  >
                    <option>OK</option>
                    <option>Issues Found</option>
                    <option>Replacement Needed</option>
                  </select>
                </div>

                <div className="flex items-center gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={reportData.homeTeamSheet}
                      onChange={(e) =>
                        setReportData({
                          ...reportData,
                          homeTeamSheet: e.target.checked,
                        })
                      }
                      className="w-4 h-4"
                    />
                    <span className="text-gray-700 dark:text-gray-300">
                      Home team sheet received
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={reportData.awayTeamSheet}
                      onChange={(e) =>
                        setReportData({
                          ...reportData,
                          awayTeamSheet: e.target.checked,
                        })
                      }
                      className="w-4 h-4"
                    />
                    <span className="text-gray-700 dark:text-gray-300">
                      Away team sheet received
                    </span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Match Events */}
          {activeSection === "events" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Match Events
              </h2>

              <div className="space-y-4">
                <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 dark:text-white mb-3">
                    Record Goals
                  </p>
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <Input placeholder="Minute" type="number" className="w-20" />
                      <select className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-900 dark:text-white">
                        <option>Select player</option>
                        <option>Player 1</option>
                        <option>Player 2</option>
                      </select>
                      <Button variant="outline" size="sm">
                        Add
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 dark:text-white mb-3">
                    Record Substitutions
                  </p>
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <Input placeholder="Minute" type="number" className="w-20" />
                      <Input placeholder="Player off" className="flex-1" />
                      <Input placeholder="Player on" className="flex-1" />
                      <Button variant="outline" size="sm">
                        Add
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Disciplinary */}
          {activeSection === "cards" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Disciplinary Details
              </h2>

              <div className="space-y-4">
                <div className="border border-yellow-200 dark:border-yellow-900 rounded-lg p-4 bg-yellow-50 dark:bg-yellow-950/20">
                  <p className="font-semibold text-gray-900 dark:text-white mb-3">
                    Yellow Cards
                  </p>
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <Input placeholder="Minute" type="number" className="w-20" />
                      <select className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-900 dark:text-white">
                        <option>Select player</option>
                        <option>Player 1</option>
                        <option>Player 2</option>
                      </select>
                      <Button variant="outline" size="sm">
                        Add
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="border border-red-200 dark:border-red-900 rounded-lg p-4 bg-red-50 dark:bg-red-950/20">
                  <p className="font-semibold text-gray-900 dark:text-white mb-3">
                    Red Cards
                  </p>
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <Input placeholder="Minute" type="number" className="w-20" />
                      <select className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-900 dark:text-white">
                        <option>Select player</option>
                        <option>Player 1</option>
                        <option>Player 2</option>
                      </select>
                      <Button variant="outline" size="sm">
                        Add
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Incidents */}
          {activeSection === "incidents" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Incident Report
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Incidents (Violence, Abuse, Crowd Issues, etc.)
                </label>
                <textarea
                  value={reportData.incidents}
                  onChange={(e) =>
                    setReportData({
                      ...reportData,
                      incidents: e.target.value,
                    })
                  }
                  rows={6}
                  placeholder="Describe any incidents..."
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-900 dark:text-white"
                />
              </div>
            </div>
          )}

          {/* Post-Match Notes */}
          {activeSection === "notes" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Post-Match Notes
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  General Comments
                </label>
                <textarea
                  value={reportData.postMatchNotes}
                  onChange={(e) =>
                    setReportData({
                      ...reportData,
                      postMatchNotes: e.target.value,
                    })
                  }
                  rows={6}
                  placeholder="Any additional notes..."
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-900 dark:text-white"
                />
              </div>
            </div>
          )}
        </div>
      </Card>

      {/* Actions */}
      <div className="flex gap-2 justify-end">
        <Button variant="outline">Save as Draft</Button>
        <Button>Submit Report</Button>
      </div>
    </div>
  );
}
