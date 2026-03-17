import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Monitor, Globe, Clock, LogOut } from "lucide-react";

const ActiveSessionsPage: React.FC = () => {
  const sessions = [
    {
      id: 1,
      device: "MacBook Pro",
      type: "Desktop",
      browser: "Chrome 128.0",
      location: "San Francisco, CA",
      ip: "192.168.1.1",
      lastActive: "Just now",
      current: true,
      icon: Monitor,
    },
    {
      id: 2,
      device: "iPhone 15",
      type: "Mobile",
      browser: "Safari Mobile",
      location: "San Francisco, CA",
      ip: "192.168.1.2",
      lastActive: "2 hours ago",
      current: false,
      icon: Smartphone,
    },
    {
      id: 3,
      device: "iPad Air",
      type: "Tablet",
      browser: "Safari Mobile",
      location: "Oakland, CA",
      ip: "192.168.1.3",
      lastActive: "1 day ago",
      current: false,
      icon: Smartphone,
    },
    {
      id: 4,
      device: "Windows PC",
      type: "Desktop",
      browser: "Firefox 131.0",
      location: "Los Angeles, CA",
      ip: "192.168.1.4",
      lastActive: "3 days ago",
      current: false,
      icon: Monitor,
    },
  ];

  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Active Sessions</h1>
        <p className="text-gray-600 dark:text-gray-400">Manage your active sessions across devices</p>
      </div>

      <Card className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
        <CardContent className="pt-6">
          <p className="text-sm text-blue-900 dark:text-blue-100">
            You have {sessions.length} active session(s). For security, log out sessions you don't recognize.
          </p>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {sessions.map((session) => {
          const Icon = session.icon;
          return (
            <Card key={session.id} className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="p-3 bg-gray-100 dark:bg-slate-700 rounded-lg">
                      <Icon className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-900 dark:text-white">{session.device}</h3>
                        {session.current && (
                          <Badge className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100">
                            Current
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{session.browser}</p>
                      <div className="grid grid-cols-2 gap-3 text-xs text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-1">
                          <Globe className="w-4 h-4" />
                          {session.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="font-mono">{session.ip}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400 mb-3">
                      <Clock className="w-3 h-3" />
                      {session.lastActive}
                    </div>
                    {!session.current && (
                      <Button variant="destructive" size="sm" className="bg-red-600 hover:bg-red-700">
                        <LogOut className="w-4 h-4 mr-1" />
                        Sign Out
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Sign Out All Other Sessions</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            This will sign out all sessions except the current one. You may need to log in again on other devices.
          </p>
          <Button variant="destructive" className="bg-red-600 hover:bg-red-700">
            Sign Out All
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ActiveSessionsPage;
