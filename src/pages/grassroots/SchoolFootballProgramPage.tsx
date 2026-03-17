import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Users, Building, HandshakeIcon, TrendingUp } from "lucide-react";

const SchoolFootballProgramPage: React.FC = () => {
  const programs = [
    {
      id: 1,
      schoolName: "Central High School",
      coordinator: "Mr. James Wilson",
      students: 45,
      partnerships: 2,
      budget: 15000,
      spent: 12000,
      status: "Active",
    },
    {
      id: 2,
      schoolName: "Riverside Academy",
      coordinator: "Ms. Sarah Brown",
      students: 32,
      partnerships: 3,
      budget: 12000,
      spent: 8500,
      status: "Active",
    },
  ];

  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">School Football Programs</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage school partnerships and grassroots initiatives</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">New Program</Button>
      </div>

      <div className="grid gap-6">
        {programs.map((program) => (
          <Card key={program.id} className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
            <CardContent className="pt-6">
              <div className="mb-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{program.schoolName}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Coordinator: {program.coordinator}</p>
                  </div>
                  <Badge className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100">
                    {program.status}
                  </Badge>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded">
                  <div className="flex items-center gap-2 mb-1">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Students</span>
                  </div>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">{program.students}</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded">
                  <div className="flex items-center gap-2 mb-1">
                    <HandshakeIcon className="w-4 h-4 text-green-600" />
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Partnerships</span>
                  </div>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">{program.partnerships}</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-4 h-4 text-purple-600" />
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Budget</span>
                  </div>
                  <p className="text-lg font-bold text-gray-900 dark:text-white">${program.budget / 1000}k</p>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-slate-700 pt-4 mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Budget Spent</span>
                  <span className="text-sm font-bold">
                    ${program.spent} / ${program.budget}
                  </span>
                </div>
                <Progress value={(program.spent / program.budget) * 100} className="h-2" />
              </div>

              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  View Details
                </Button>
                <Button variant="outline" className="flex-1">
                  Manage Partnerships
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SchoolFootballProgramPage;
