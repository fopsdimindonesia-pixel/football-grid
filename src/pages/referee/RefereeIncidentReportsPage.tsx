import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlertCircle, MoreHorizontal, FileText, Eye } from "lucide-react";
import { useState } from "react";

export default function RefereeIncidentReportsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const incidents = [
    {
      id: "INC-001",
      match: "Arsenal vs Chelsea",
      type: "Violence",
      reportedBy: "Jon Smith",
      date: "2025-01-15",
      status: "Investigating",
      severity: "High",
      description: "Player altercation in second half",
    },
    {
      id: "INC-002",
      match: "Manchester City vs Liverpool",
      type: "Abuse",
      reportedBy: "Sarah Jones",
      date: "2025-01-12",
      status: "Reported",
      severity: "Medium",
      description: "Verbal abuse towards match officials",
    },
    {
      id: "INC-003",
      match: "Tottenham vs Manchester United",
      type: "Crowd Issues",
      reportedBy: "Mike Thompson",
      date: "2025-01-10",
      status: "Resolved",
      severity: "Low",
      description: "Minor crowd disruption resolved quickly",
    },
    {
      id: "INC-004",
      match: "Liverpool vs Arsenal",
      type: "Equipment",
      reportedBy: "Emma Wilson",
      date: "2025-01-08",
      status: "Investigating",
      severity: "Low",
      description: "Goal line technology malfunction",
    },
  ];

  const filteredIncidents = incidents.filter((inc) => {
    const matchesSearch =
      inc.match.toLowerCase().includes(searchTerm.toLowerCase()) ||
      inc.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || inc.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusColor = (
    status: string
  ): "default" | "secondary" | "destructive" => {
    if (status === "Resolved") return "default";
    if (status === "Investigating") return "secondary";
    return "destructive";
  };

  const getSeverityColor = (
    severity: string
  ): "default" | "secondary" | "destructive" => {
    if (severity === "High") return "destructive";
    if (severity === "Medium") return "secondary";
    return "default";
  };

  const handleCreateReport = () => {
    // Handle create new incident
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Incident Reports
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage and investigate match incidents
          </p>
        </div>
        <Button onClick={handleCreateReport}>New Report</Button>
      </div>

      {/* Alert */}
      <Alert className="border-yellow-200 dark:border-yellow-900 bg-yellow-50 dark:bg-yellow-950/20">
        <AlertCircle className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
        <AlertDescription className="text-yellow-800 dark:text-yellow-300">
          2 incidents require immediate investigation attention
        </AlertDescription>
      </Alert>

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
                placeholder="Search by match or incident ID..."
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
                <option value="Reported">Reported</option>
                <option value="Investigating">Investigating</option>
                <option value="Resolved">Resolved</option>
              </select>
            </div>
          </div>
        </div>
      </Card>

      {/* Incidents Table */}
      <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 overflow-x-auto">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                  Incident
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                  Match
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                  Type
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                  Severity
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                  Date
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              {filteredIncidents.map((incident) => (
                <tr
                  key={incident.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-900 transition"
                >
                  <td className="px-6 py-4">
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {incident.id}
                    </p>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                    {incident.match}
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant="outline">{incident.type}</Badge>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={getStatusColor(incident.status)}>
                      {incident.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={getSeverityColor(incident.severity)}>
                      {incident.severity}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                    {incident.date}
                  </td>
                  <td className="px-6 py-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>
                          <FileText className="w-4 h-4 mr-2" />
                          Generate Report
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Investigation Workflow */}
      <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Investigation Workflow
          </h2>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              {
                step: 1,
                title: "Reported",
                description: "Incident reported to administration",
              },
              {
                step: 2,
                title: "Investigating",
                description: "Evidence and statements collected",
              },
              {
                step: 3,
                title: "Review",
                description: "Case reviewed by disciplinary committee",
              },
              {
                step: 4,
                title: "Resolved",
                description: "Decision made and communicated",
              },
            ].map((stage) => (
              <div key={stage.step} className="text-center">
                <div className="w-10 h-10 rounded-full bg-blue-600 dark:bg-blue-500 text-white font-bold flex items-center justify-center mx-auto mb-2">
                  {stage.step}
                </div>
                <p className="font-semibold text-gray-900 dark:text-white mb-1">
                  {stage.title}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Active Investigations */}
      <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Active Investigations
          </h2>

          <div className="space-y-4">
            {filteredIncidents
              .filter((i) => i.status !== "Resolved")
              .map((inc) => (
                <div
                  key={inc.id}
                  className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:shadow-md transition"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">
                        {inc.match}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {inc.id} • {inc.date}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant={getSeverityColor(inc.severity)}>
                        {inc.severity} Severity
                      </Badge>
                    </div>
                  </div>

                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    {inc.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      Reported by {inc.reportedBy}
                    </p>
                    <Button size="sm">View & Update</Button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
