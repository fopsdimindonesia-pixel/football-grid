import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, Clock, CheckCircle2, FileText } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function RefereeSanctionsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const sanctions = [
    {
      id: "SAN-001",
      referee: "John Smith",
      reason: "Misconduct in match",
      duration: "6 weeks",
      startDate: "2025-01-10",
      endDate: "2025-02-21",
      status: "Active",
      severity: "High",
      appealStatus: "None",
    },
    {
      id: "SAN-002",
      referee: "Lisa Anderson",
      reason: "Violent conduct",
      duration: "12 weeks",
      startDate: "2025-01-05",
      endDate: "2025-03-23",
      status: "Active",
      severity: "Critical",
      appealStatus: "Pending",
    },
    {
      id: "SAN-003",
      referee: "Tom Davies",
      reason: "Breach of code of conduct",
      duration: "4 weeks",
      startDate: "2024-12-01",
      endDate: "2024-12-29",
      status: "Completed",
      severity: "Medium",
      appealStatus: "None",
    },
    {
      id: "SAN-004",
      referee: "Emma Wilson",
      reason: "Poor performance + complaints",
      duration: "2 weeks",
      startDate: "2024-11-15",
      endDate: "2024-11-29",
      status: "Completed",
      severity: "Low",
      appealStatus: "Appealed",
    },
  ];

  const filteredSanctions = sanctions.filter((sanction) => {
    const matchesSearch =
      sanction.referee.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sanction.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || sanction.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (
    status: string
  ): "default" | "secondary" | "destructive" => {
    if (status === "Active") return "destructive";
    if (status === "Appealed") return "secondary";
    return "default";
  };

  const getSeverityColor = (
    severity: string
  ): "default" | "secondary" | "destructive" => {
    if (severity === "Critical") return "destructive";
    if (severity === "High") return "secondary";
    return "default";
  };

  const activeSanctionsCount = sanctions.filter((s) => s.status === "Active").length;
  const appealedCount = sanctions.filter((s) => s.appealStatus === "Pending").length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Sanctions Management
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage referee suspensions and disciplinary sanctions
          </p>
        </div>
        <Button>Create Sanction</Button>
      </div>

      {/* Alerts */}
      {activeSanctionsCount > 0 && (
        <Alert className="border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20">
          <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
          <AlertDescription className="text-red-800 dark:text-red-300">
            {activeSanctionsCount} active sanction(s) currently in effect
          </AlertDescription>
        </Alert>
      )}

      {appealedCount > 0 && (
        <Alert className="border-yellow-200 dark:border-yellow-900 bg-yellow-50 dark:bg-yellow-950/20">
          <Clock className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
          <AlertDescription className="text-yellow-800 dark:text-yellow-300">
            {appealedCount} sanction appeal(s) pending review
          </AlertDescription>
        </Alert>
      )}

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
          <div className="p-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Total Sanctions
            </p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white mt-2">
              {sanctions.length}
            </p>
          </div>
        </Card>

        <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
          <div className="p-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Active
            </p>
            <p className="text-3xl font-bold text-red-600 dark:text-red-400 mt-2">
              {activeSanctionsCount}
            </p>
          </div>
        </Card>

        <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
          <div className="p-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Completed
            </p>
            <p className="text-3xl font-bold text-green-600 dark:text-green-400 mt-2">
              {sanctions.filter((s) => s.status === "Completed").length}
            </p>
          </div>
        </Card>

        <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
          <div className="p-6">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Appeals Pending
            </p>
            <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mt-2">
              {appealedCount}
            </p>
          </div>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="p-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Filters
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Search
              </label>
              <Input
                placeholder="Search by referee or sanction ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Status
              </label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-900 dark:text-white"
              >
                <option value="all">All Status</option>
                <option value="Active">Active</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
          </div>
        </div>
      </Card>

      {/* Sanctions Table */}
      <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 overflow-x-auto">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                  Sanction ID
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                  Referee
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                  Reason
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                  Duration
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                  Severity
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                  Appeal
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              {filteredSanctions.map((sanction) => (
                <tr
                  key={sanction.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-900 transition"
                >
                  <td className="px-6 py-4">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {sanction.id}
                    </p>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                    {sanction.referee}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                    {sanction.reason}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                    {sanction.duration}
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={getStatusColor(sanction.status)}>
                      {sanction.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={getSeverityColor(sanction.severity)}>
                      {sanction.severity}
                    </Badge>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant="outline">
                      {sanction.appealStatus || "None"}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Active Sanctions Details */}
      {filteredSanctions.filter((s) => s.status === "Active").length > 0 && (
        <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Active Suspensions
            </h2>

            <div className="space-y-4">
              {filteredSanctions
                .filter((s) => s.status === "Active")
                .map((sanction) => {
                  const endDate = new Date(sanction.endDate);
                  const today = new Date();
                  const daysRemaining = Math.ceil(
                    (endDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)
                  );

                  return (
                    <div
                      key={sanction.id}
                      className="border border-red-200 dark:border-red-900 rounded-lg p-4 bg-red-50 dark:bg-red-950/20"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-bold text-gray-900 dark:text-white">
                            {sanction.referee}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {sanction.id} • {sanction.reason}
                          </p>
                        </div>
                        <Badge variant="destructive">
                          {daysRemaining} days remaining
                        </Badge>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-3 text-sm">
                        <div>
                          <p className="text-gray-600 dark:text-gray-400">
                            Start Date
                          </p>
                          <p className="font-semibold text-gray-900 dark:text-white">
                            {sanction.startDate}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600 dark:text-gray-400">
                            End Date
                          </p>
                          <p className="font-semibold text-gray-900 dark:text-white">
                            {sanction.endDate}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600 dark:text-gray-400">
                            Duration
                          </p>
                          <p className="font-semibold text-gray-900 dark:text-white">
                            {sanction.duration}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600 dark:text-gray-400">
                            Severity
                          </p>
                          <Badge variant={getSeverityColor(sanction.severity)}>
                            {sanction.severity}
                          </Badge>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <FileText className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                        <Button size="sm" variant="outline">
                          Update
                        </Button>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </Card>
      )}

      {/* Appeal Management */}
      {filteredSanctions.filter((s) => s.appealStatus === "Pending").length > 0 && (
        <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Pending Appeals
            </h2>

            <div className="space-y-4">
              {filteredSanctions
                .filter((s) => s.appealStatus === "Pending")
                .map((sanction) => (
                  <div
                    key={sanction.id}
                    className="border border-yellow-200 dark:border-yellow-900 rounded-lg p-4 bg-yellow-50 dark:bg-yellow-950/20"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white">
                          {sanction.referee}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {sanction.id} • Appeal pending since{" "}
                          {sanction.startDate}
                        </p>
                      </div>
                      <Badge variant="secondary">Under Review</Badge>
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        Review Appeal
                      </Button>
                      <Button size="sm" variant="outline">
                        Request Documents
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
