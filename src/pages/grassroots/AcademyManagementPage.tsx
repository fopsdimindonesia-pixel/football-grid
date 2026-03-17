import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Mail, CheckCircle2, AlertCircle } from "lucide-react";

const AcademyManagementPage: React.FC = () => {
  const academies = [
    { id: 1, name: "Downtown Academy", coach: "John Smith", players: 45, status: "Active" },
    { id: 2, name: "Youth Development Center", coach: "Maria Garcia", players: 38, status: "Active" },
    { id: 3, name: "Elite Training Program", coach: "Alex Johnson", players: 52, status: "Active" },
  ];

  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Academy Management</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage youth development academies and programs</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">Create Academy</Button>
      </div>

      <div className="grid gap-6">
        {academies.map((academy) => (
          <Card key={academy.id} className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{academy.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Head Coach: {academy.coach}</p>
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{academy.players} Players</span>
                    </div>
                    <Badge className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100">
                      {academy.status}
                    </Badge>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">Details</Button>
                  <Button variant="outline">Edit</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Compliance Overview</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-700 rounded">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span className="text-sm">Coaching Licenses Updated</span>
              </div>
              <span className="text-sm font-semibold">12/12</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-700 rounded">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-yellow-600" />
                <span className="text-sm">First Aid Certifications</span>
              </div>
              <span className="text-sm font-semibold">10/12</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AcademyManagementPage;
