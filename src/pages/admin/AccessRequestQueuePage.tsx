import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, CheckCircle, XCircle, Clock } from "lucide-react";

const AccessRequestQueuePage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const requests = [
    { id: 1, name: "John Brown", email: "john@example.com", requestedRole: "Coach", requestDate: "2024-01-19", status: "Pending", reason: "Applying for coaching position" },
    { id: 2, name: "Sarah Wilson", email: "sarah@example.com", requestedRole: "Administrator", requestDate: "2024-01-18", status: "Pending", reason: "Need admin access to manage organization" },
    { id: 3, name: "Mike Taylor", email: "mike@example.com", requestedRole: "Player", requestDate: "2024-01-17", status: "Approved", reason: "Want to join the academy" },
    { id: 4, name: "Lisa Anderson", email: "lisa@example.com", requestedRole: "Referee", requestDate: "2024-01-16", status: "Rejected", reason: "Referee certification request" },
    { id: 5, name: "James Davis", email: "james@example.com", requestedRole: "Coach", requestDate: "2024-01-15", status: "Pending", reason: "Assistant coach position" },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Approved":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "Rejected":
        return <XCircle className="w-4 h-4 text-red-600" />;
      default:
        return <Clock className="w-4 h-4 text-yellow-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100";
      case "Rejected":
        return "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100";
      case "Pending":
        return "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100";
      default:
        return "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100";
    }
  };

  return (
    <div className="space-y-6 pb-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Access Request Queue</h1>
          <p className="text-gray-600 dark:text-gray-400">Review and approve pending access requests</p>
        </div>
      </div>

      <div className="flex gap-3 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input placeholder="Search requests..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10 dark:bg-slate-700 dark:border-slate-600" />
        </div>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <div className="space-y-3">
            {requests.map((request) => (
              <div key={request.id} className="p-4 border border-gray-200 dark:border-slate-700 rounded-lg hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-gray-900 dark:text-white">{request.name}</span>
                      <Badge className={getStatusColor(request.status)}>
                        <span className="flex items-center gap-1">
                          {getStatusIcon(request.status)}
                          {request.status}
                        </span>
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{request.email}</p>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{request.requestDate}</span>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-3">
                  <div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Requested Role</p>
                    <p className="font-medium text-gray-900 dark:text-white">{request.requestedRole}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 dark:text-gray-400">Reason</p>
                    <p className="text-sm text-gray-900 dark:text-white">{request.reason}</p>
                  </div>
                </div>

                {request.status === "Pending" && (
                  <div className="flex gap-2 pt-3 border-t border-gray-200 dark:border-slate-700">
                    <Button variant="outline" size="sm" className="text-red-600">Reject</Button>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">Approve</Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AccessRequestQueuePage;
