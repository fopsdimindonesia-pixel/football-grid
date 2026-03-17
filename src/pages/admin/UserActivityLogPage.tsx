import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User, CheckCircle, AlertCircle } from "lucide-react";

const UserActivityLogPage: React.FC = () => {
  const activities = [
    {
      id: 1,
      user: "John Smith",
      action: "Login",
      description: "Successfully logged in",
      timestamp: "2024-01-20 14:30:00",
      type: "login",
      status: "success",
    },
    {
      id: 2,
      user: "Sarah Johnson",
      action: "Profile Update",
      description: "Updated profile information",
      timestamp: "2024-01-20 13:15:00",
      type: "update",
      status: "success",
    },
    {
      id: 3,
      user: "Mike Wilson",
      action: "Failed Login",
      description: "Multiple failed login attempts",
      timestamp: "2024-01-20 12:45:00",
      type: "login",
      status: "warning",
    },
    {
      id: 4,
      user: "Lisa Brown",
      action: "Role Change",
      description: "Promoted to Administrator",
      timestamp: "2024-01-20 11:20:00",
      type: "system",
      status: "success",
    },
    {
      id: 5,
      user: "James Taylor",
      action: "Account Deactivated",
      description: "Account has been deactivated",
      timestamp: "2024-01-20 10:00:00",
      type: "system",
      status: "warning",
    },
  ];

  const getStatusIcon = (status: string) => {
    if (status === "success") return <CheckCircle className="w-4 h-4 text-green-600" />;
    return <AlertCircle className="w-4 h-4 text-orange-600" />;
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "login":
        return "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100";
      case "update":
        return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100";
      case "system":
        return "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100";
      default:
        return "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100";
    }
  };

  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Activity Log</h1>
        <p className="text-gray-600 dark:text-gray-400">Track user actions and system events</p>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <Card key={activity.id} className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700 hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 pt-1">{getStatusIcon(activity.status)}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span className="font-semibold text-gray-900 dark:text-white">{activity.user}</span>
                    </div>
                    <Badge className={getTypeColor(activity.type)}>{activity.action}</Badge>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">{activity.description}</p>
                  <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                    <Clock className="w-3 h-3" />
                    {activity.timestamp}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UserActivityLogPage;
