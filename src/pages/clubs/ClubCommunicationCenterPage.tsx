import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Send, MessageSquare, Bell, Plus, Search } from "lucide-react";

const ClubCommunicationCenterPage: React.FC = () => {
  const [messages] = useState([
    { id: 1, from: "John Smith", subject: "Training Schedule Update", time: "2 hours ago", unread: true },
    { id: 2, from: "Sarah Johnson", subject: "Equipment Request Approved", time: "5 hours ago", unread: true },
    { id: 3, from: "Mike Wilson", subject: "Match Analysis Report", time: "1 day ago", unread: false },
    { id: 4, from: "Lisa Brown", subject: "Facility Maintenance Done", time: "2 days ago", unread: false },
  ]);

  const [notifications] = useState([
    { id: 1, type: "Match", message: "Upcoming match in 3 days vs Northern Stars", time: "Today" },
    { id: 2, type: "Training", message: "Training session scheduled for Monday", time: "Today" },
    { id: 3, type: "Alert", message: "License renewal due in 15 days", time: "Yesterday" },
    { id: 4, type: "Event", message: "Team celebration event scheduled", time: "2 days ago" },
  ]);

  return (
    <div className="space-y-6 pb-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Communication Center</h1>
          <p className="text-gray-600 dark:text-gray-400">Messages and notifications</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700"><Plus className="w-4 h-4 mr-2" />New Message</Button>
      </div>

      <Tabs defaultValue="messages" className="w-full">
        <TabsList className="dark:bg-slate-800 dark:border-slate-700">
          <TabsTrigger value="messages" className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            Messages
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="w-4 h-4" />
            Notifications
          </TabsTrigger>
        </TabsList>

        <TabsContent value="messages" className="space-y-4">
          <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
            <CardContent className="pt-6">
              <div className="mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Search messages..."
                    className="pl-10 dark:bg-slate-700 dark:border-slate-600"
                  />
                </div>
              </div>

              <div className="space-y-2">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`p-4 rounded border-l-4 border-l-blue-600 ${
                      msg.unread
                        ? "bg-blue-50 dark:bg-slate-700"
                        : "bg-gray-50 dark:bg-slate-700/50"
                    } hover:shadow transition-shadow cursor-pointer`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <p className={`font-semibold ${msg.unread ? "text-gray-900 dark:text-white" : "text-gray-700 dark:text-gray-300"}`}>
                          {msg.from}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{msg.subject}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {msg.unread && (
                          <span className="inline-block w-3 h-3 bg-blue-600 rounded-full"></span>
                        )}
                        <span className="text-xs text-gray-500 dark:text-gray-400">{msg.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
            <CardContent className="pt-6">
              <div className="space-y-3">
                {notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className="p-4 rounded border-l-4 bg-gray-50 dark:bg-slate-700/50 hover:shadow transition-shadow"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <Badge className="mb-2 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100">
                          {notif.type}
                        </Badge>
                        <p className="text-sm text-gray-900 dark:text-white">{notif.message}</p>
                      </div>
                      <span className="text-xs text-gray-500 dark:text-gray-400 ml-2">{notif.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">Compose Message</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="To: Select recipient..."
            className="dark:bg-slate-700 dark:border-slate-600"
          />
          <Input
            placeholder="Subject"
            className="dark:bg-slate-700 dark:border-slate-600"
          />
          <textarea
            placeholder="Message body..."
            rows={4}
            className="w-full px-4 py-2 rounded border dark:bg-slate-700 dark:border-slate-600 dark:text-white"
          />
          <div className="flex justify-end gap-2">
            <Button variant="outline">Discard</Button>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Send className="w-4 h-4 mr-2" />
              Send
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClubCommunicationCenterPage;
