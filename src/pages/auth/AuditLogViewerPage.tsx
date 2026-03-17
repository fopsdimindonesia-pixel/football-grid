import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronRight, Filter, Download } from "lucide-react";

const AuditLogViewerPage: React.FC = () => {
  const [selectedLog, setSelectedLog] = useState<number | null>(null);
  const [filterType, setFilterType] = useState("all");

  const logs = [
    {
      id: 1,
      action: "User Login",
      user: "john.doe@example.com",
      timestamp: "2024-03-17 14:32:15",
      type: "authentication",
      status: "success",
      ip: "192.168.1.1",
      device: "Chrome on macOS",
      details: "User successfully logged in from San Francisco, CA",
    },
    {
      id: 2,
      action: "Password Changed",
      user: "jane.smith@example.com",
      timestamp: "2024-03-17 13:45:22",
      type: "account",
      status: "success",
      ip: "192.168.1.2",
      device: "Safari on iPhone",
      details: "Account password was successfully updated",
    },
    {
      id: 3,
      action: "API Key Created",
      user: "api_user@example.com",
      timestamp: "2024-03-17 12:18:45",
      type: "api",
      status: "success",
      ip: "192.168.1.3",
      device: "API Client",
      details: "New API key created with read+write permissions",
    },
    {
      id: 4,
      action: "Two-Factor Disabled",
      user: "mike.johnson@example.com",
      timestamp: "2024-03-17 11:05:30",
      type: "security",
      status: "warning",
      ip: "192.168.1.4",
      device: "Firefox on Windows",
      details: "Two-factor authentication was disabled",
    },
    {
      id: 5,
      action: "Session Terminated",
      user: "sarah.brown@example.com",
      timestamp: "2024-03-17 10:22:10",
      type: "session",
      status: "success",
      ip: "192.168.1.5",
      device: "Mobile Browser",
      details: "User session was forcefully terminated",
    },
  ];

  const getActionColor = (type: string) => {
    switch (type) {
      case "authentication":
        return "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100";
      case "account":
        return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100";
      case "api":
        return "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100";
      case "security":
        return "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-100";
      case "session":
        return "bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-100";
      default:
        return "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "success":
        return "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300";
      case "warning":
        return "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300";
      case "error":
        return "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300";
      default:
        return "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300";
    }
  };

  const selectedLogData = logs.find((log) => log.id === selectedLog);

  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Audit Log</h1>
          <p className="text-gray-600 dark:text-gray-400">View account activity and security events</p>
        </div>
        <Button variant="outline" className="gap-2">
          <Download className="w-4 h-4" />
          Export Log
        </Button>
      </div>

      <div className="flex gap-3 mb-4">
        <Input placeholder="Search by user, action, or IP..." className="dark:bg-slate-700 dark:border-slate-600" />
        <Select value={filterType} onValueChange={setFilterType}>
          <SelectTrigger className="w-48 dark:bg-slate-700 dark:border-slate-600">
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Events</SelectItem>
            <SelectItem value="authentication">Authentication</SelectItem>
            <SelectItem value="account">Account Changes</SelectItem>
            <SelectItem value="api">API Access</SelectItem>
            <SelectItem value="security">Security</SelectItem>
            <SelectItem value="session">Sessions</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="icon">
          <Filter className="w-4 h-4" />
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="space-y-2">
            {logs.map((log) => (
              <Card
                key={log.id}
                className={`bg-white dark:bg-slate-800 border-0 dark:border-slate-700 cursor-pointer transition-colors ${
                  selectedLog === log.id ? "ring-2 ring-blue-500" : ""
                }`}
                onClick={() => setSelectedLog(log.id)}
              >
                <CardContent className="pt-4 pb-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 dark:text-white text-sm truncate">{log.action}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{log.user}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">{log.timestamp}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          {selectedLogData ? (
            <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">{selectedLogData.action}</h3>
                    <Badge className={getActionColor(selectedLogData.type)}>{selectedLogData.type}</Badge>
                    <Badge className={`ml-2 ${getStatusColor(selectedLogData.status)}`}>{selectedLogData.status}</Badge>
                  </div>

                  <div className="border-t border-gray-200 dark:border-slate-700 pt-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600 dark:text-gray-400 font-medium">User Email</p>
                        <p className="text-gray-900 dark:text-white">{selectedLogData.user}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 dark:text-gray-400 font-medium">Timestamp</p>
                        <p className="text-gray-900 dark:text-white">{selectedLogData.timestamp}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 dark:text-gray-400 font-medium">IP Address</p>
                        <p className="text-gray-900 dark:text-white">{selectedLogData.ip}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 dark:text-gray-400 font-medium">Device</p>
                        <p className="text-gray-900 dark:text-white">{selectedLogData.device}</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 dark:border-slate-700 pt-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Event Details</h4>
                    <div className="bg-gray-50 dark:bg-slate-700 p-3 rounded text-sm text-gray-700 dark:text-gray-300">
                      {selectedLogData.details}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
              <CardContent className="pt-12 pb-12 text-center">
                <p className="text-gray-600 dark:text-gray-400">Select a log entry to view details</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuditLogViewerPage;
