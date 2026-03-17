import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, Zap } from "lucide-react";
import { useState } from "react";

export default function RefereeAssignmentBoardPage() {
  const [assignments, setAssignments] = useState([
    {
      id: 1,
      match: "Arsenal vs Chelsea",
      date: "2025-01-20",
      time: "15:00",
      mainRef: "James Mitchell",
      ar1: "Sarah Connor",
      ar2: "Mike Thompson",
      fourthOfficial: "Emma Wilson",
      conflicts: [],
    },
    {
      id: 2,
      match: "Manchester City vs Liverpool",
      date: "2025-01-22",
      time: "19:45",
      mainRef: "David Brown",
      ar1: "James Mitchell",
      ar2: "Sarah Connor",
      fourthOfficial: "Mike Thompson",
      conflicts: ["overload"],
    },
    {
      id: 3,
      match: "Tottenham vs Manchester United",
      date: "2025-01-25",
      time: "17:30",
      mainRef: "",
      ar1: "",
      ar2: "",
      fourthOfficial: "",
      conflicts: [],
    },
  ]);

  const availableReferees = [
    "James Mitchell",
    "Sarah Connor",
    "Mike Thompson",
    "Emma Wilson",
    "David Brown",
    "John Smith",
    "Lisa Anderson",
  ];

  const handleAssignmentChange = (
    matchId: number,
    position: string,
    referee: string
  ) => {
    setAssignments(
      assignments.map((a) =>
        a.id === matchId ? { ...a, [position]: referee } : a
      )
    );
  };

  const detectConflicts = (
    matchId: number,
    position: string,
    referee: string
  ) => {
    const conflicts = [];

    // Check for overload (referee assigned more than 2 times this week)
    const assignmentCount = assignments.filter((a) => {
      return (
        (a.mainRef === referee ||
          a.ar1 === referee ||
          a.ar2 === referee ||
          a.fourthOfficial === referee) &&
        a.id !== matchId
      );
    }).length;

    if (assignmentCount >= 2) {
      conflicts.push("overload");
    }

    return conflicts;
  };

  const handleAutoAssign = () => {
    // Simple auto-assignment logic
    const newAssignments = assignments.map((match) => {
      if (!match.mainRef) {
        const availableRef = availableReferees.find(
          (ref) =>
            !assignments.some(
              (a) =>
                (a.mainRef === ref ||
                  a.ar1 === ref ||
                  a.ar2 === ref ||
                  a.fourthOfficial === ref) &&
                a.id !== match.id
            )
        );
        if (availableRef) {
          return { ...match, mainRef: availableRef };
        }
      }
      return match;
    });
    setAssignments(newAssignments);
  };

  const hasConflicts = assignments.some((a) => a.conflicts.length > 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Match Assignment Board
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Assign referees to upcoming matches and manage conflicts
          </p>
        </div>
        <Button onClick={handleAutoAssign}>
          <Zap className="w-4 h-4 mr-2" />
          Auto-Assign
        </Button>
      </div>

      {/* Alerts */}
      {hasConflicts && (
        <Alert className="border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20">
          <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
          <AlertDescription className="text-red-800 dark:text-red-300">
            Some assignments have conflicts. Please review and resolve before
            saving.
          </AlertDescription>
        </Alert>
      )}

      {/* Assignment Table */}
      <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 overflow-x-auto">
        <div className="overflow-x-auto p-6">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <th className="text-left px-4 py-3 font-bold text-gray-900 dark:text-white">
                  Match
                </th>
                <th className="text-left px-4 py-3 font-bold text-gray-900 dark:text-white">
                  Date/Time
                </th>
                <th className="text-left px-4 py-3 font-bold text-gray-900 dark:text-white">
                  Main Referee
                </th>
                <th className="text-left px-4 py-3 font-bold text-gray-900 dark:text-white">
                  AR1
                </th>
                <th className="text-left px-4 py-3 font-bold text-gray-900 dark:text-white">
                  AR2
                </th>
                <th className="text-left px-4 py-3 font-bold text-gray-900 dark:text-white">
                  4th Official
                </th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((match) => (
                <tr
                  key={match.id}
                  className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900"
                >
                  <td className="px-4 py-3">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {match.match}
                    </p>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                    {match.date} {match.time}
                  </td>
                  <td className="px-4 py-3">
                    <select
                      value={match.mainRef}
                      onChange={(e) =>
                        handleAssignmentChange(match.id, "mainRef", e.target.value)
                      }
                      className="px-2 py-1 border border-gray-300 dark:border-gray-700 rounded dark:bg-gray-800 dark:text-white text-sm"
                    >
                      <option value="">Select referee</option>
                      {availableReferees.map((ref) => (
                        <option key={ref} value={ref}>
                          {ref}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-4 py-3">
                    <select
                      value={match.ar1}
                      onChange={(e) =>
                        handleAssignmentChange(match.id, "ar1", e.target.value)
                      }
                      className="px-2 py-1 border border-gray-300 dark:border-gray-700 rounded dark:bg-gray-800 dark:text-white text-sm"
                    >
                      <option value="">Select referee</option>
                      {availableReferees.map((ref) => (
                        <option key={ref} value={ref}>
                          {ref}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-4 py-3">
                    <select
                      value={match.ar2}
                      onChange={(e) =>
                        handleAssignmentChange(match.id, "ar2", e.target.value)
                      }
                      className="px-2 py-1 border border-gray-300 dark:border-gray-700 rounded dark:bg-gray-800 dark:text-white text-sm"
                    >
                      <option value="">Select referee</option>
                      {availableReferees.map((ref) => (
                        <option key={ref} value={ref}>
                          {ref}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="px-4 py-3">
                    <select
                      value={match.fourthOfficial}
                      onChange={(e) =>
                        handleAssignmentChange(
                          match.id,
                          "fourthOfficial",
                          e.target.value
                        )
                      }
                      className="px-2 py-1 border border-gray-300 dark:border-gray-700 rounded dark:bg-gray-800 dark:text-white text-sm"
                    >
                      <option value="">Select referee</option>
                      {availableReferees.map((ref) => (
                        <option key={ref} value={ref}>
                          {ref}
                        </option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Conflict Detection */}
      <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Conflict Detection
          </h2>

          <div className="space-y-3">
            {assignments.map((match) => {
              const matchConflicts = [
                ...new Set(
                  [
                    ...detectConflicts(match.id, "mainRef", match.mainRef),
                    ...detectConflicts(match.id, "ar1", match.ar1),
                    ...detectConflicts(match.id, "ar2", match.ar2),
                    ...detectConflicts(match.id, "fourthOfficial", match.fourthOfficial),
                  ]
                ),
              ];

              if (matchConflicts.length === 0) {
                return (
                  <div
                    key={match.id}
                    className="flex items-center gap-3 p-3 border border-green-200 dark:border-green-900 rounded-lg bg-green-50 dark:bg-green-950/20"
                  >
                    <Badge variant="default" className="bg-green-600">
                      Clear
                    </Badge>
                    <span className="text-sm text-green-900 dark:text-green-300">
                      {match.match} - No conflicts detected
                    </span>
                  </div>
                );
              }

              return (
                <div
                  key={match.id}
                  className="flex items-center gap-3 p-3 border border-red-200 dark:border-red-900 rounded-lg bg-red-50 dark:bg-red-950/20"
                >
                  <Badge variant="destructive">Conflict</Badge>
                  <div className="text-sm text-red-900 dark:text-red-300">
                    <p className="font-semibold">{match.match}</p>
                    <p>
                      {matchConflicts.includes("overload")
                        ? "Referee overload detected"
                        : ""}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Card>

      {/* Actions */}
      <div className="flex gap-2 justify-end">
        <Button variant="outline">Cancel</Button>
        <Button>Save Assignments</Button>
      </div>
    </div>
  );
}
