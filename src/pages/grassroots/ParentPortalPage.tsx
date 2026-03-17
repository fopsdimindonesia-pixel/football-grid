import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Eye, Download, MessageSquare } from "lucide-react";

const ParentPortalPage: React.FC = () => {
  const children = [
    {
      id: 1,
      name: "Alex Turner",
      age: 13,
      position: "Midfielder",
      academy: "Elite Academy",
      skillLevel: 76,
      attendance: 95,
      upcomingMatch: "vs Downtown United - Mar 20",
    },
    {
      id: 2,
      name: "Jordan Turner",
      age: 11,
      position: "Forward",
      academy: "Development Center",
      skillLevel: 68,
      attendance: 88,
      upcomingMatch: "vs Youth Stars - Mar 22",
    },
  ];

  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Parent Portal</h1>
        <p className="text-gray-600 dark:text-gray-400">Monitor your child's football development and academy updates</p>
      </div>

      <div className="grid gap-6">
        {children.map((child) => (
          <Card key={child.id} className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
            <CardContent className="pt-6">
              <div className="mb-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{child.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      U{child.age} • {child.position} • {child.academy}
                    </p>
                  </div>
                  <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100">Active</Badge>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3 mb-4">
                  <p className="text-sm font-medium text-blue-900 dark:text-blue-100">
                    Next Match: {child.upcomingMatch}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Skill Development</span>
                      <span className="text-sm font-bold">{child.skillLevel}%</span>
                    </div>
                    <Progress value={child.skillLevel} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Attendance</span>
                      <span className="text-sm font-bold">{child.attendance}%</span>
                    </div>
                    <Progress value={child.attendance} className="h-2" />
                  </div>
                </div>
              </div>

              <Tabs defaultValue="performance" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="performance">Performance</TabsTrigger>
                  <TabsTrigger value="progress">Progress</TabsTrigger>
                  <TabsTrigger value="messages">Messages</TabsTrigger>
                </TabsList>

                <TabsContent value="performance" className="space-y-3 mt-4">
                  <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded">
                    <p className="text-sm font-medium">Latest Training Feedback</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Great improvement in passing accuracy. Keep working on defensive positioning.
                    </p>
                  </div>
                </TabsContent>

                <TabsContent value="progress" className="space-y-3 mt-4">
                  <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded">
                    <p className="text-sm font-medium">Development Goals</p>
                    <ul className="text-xs text-gray-600 dark:text-gray-400 mt-1 space-y-1">
                      <li>✓ Improve ball control</li>
                      <li>○ Master set piece delivery</li>
                      <li>○ Build defensive strength</li>
                    </ul>
                  </div>
                </TabsContent>

                <TabsContent value="messages" className="space-y-3 mt-4">
                  <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded">
                    <p className="text-sm font-medium">Coach: John Smith</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Available for parent-coach discussion
                    </p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ParentPortalPage;
