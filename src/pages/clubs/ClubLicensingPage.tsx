import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertCircle, Clock } from "lucide-react";

const ClubLicensingPage: React.FC = () => {
  const licenses = [
    { id: 1, name: "Playing License", status: "Completed", dueDate: "2024-12-31", completion: 100, icon: "✓" },
    { id: 2, name: "Safety Certification", status: "In Progress", dueDate: "2024-02-15", completion: 65, icon: "⟳" },
    { id: 3, name: "Financial Compliance", status: "Pending", dueDate: "2024-03-30", completion: 0, icon: "!" },
    { id: 4, name: "Youth Development", status: "Completed", dueDate: "2024-06-30", completion: 100, icon: "✓" },
    { id: 5, name: "Governance Training", status: "In Progress", dueDate: "2024-01-31", completion: 45, icon: "⟳" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100";
      case "In Progress":
        return "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100";
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
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Club Licensing</h1>
          <p className="text-gray-600 dark:text-gray-400">Track licensing requirements and compliance</p>
        </div>
      </div>

      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-700 dark:to-slate-700 border-0">
        <CardContent className="pt-6">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Overall Progress</p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">63%</p>
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Completed</p>
              <p className="text-3xl font-bold text-green-600 dark:text-green-400">2</p>
            </div>
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Pending</p>
              <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">3</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3">
        {licenses.map((license) => (
          <Card key={license.id} className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">{license.icon}</span>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{license.name}</h3>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Due: {license.dueDate}</p>
                </div>
                <Badge className={getStatusColor(license.status)}>{license.status}</Badge>
              </div>
              <div className="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full transition-all" style={{ width: `${license.completion}%` }}></div>
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-600 dark:text-gray-400">{license.completion}% complete</span>
                <Button variant="outline" size="sm">View Details</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ClubLicensingPage;
