import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DollarSign, FileText, CheckCircle2, Clock } from "lucide-react";

const GrassrootsFundingGrantsPage: React.FC = () => {
  const grants = [
    {
      id: 1,
      title: "Youth Development Fund 2026",
      provider: "National Sports Foundation",
      amount: 50000,
      deadline: "2026-04-15",
      status: "Open",
      progress: 45,
    },
    {
      id: 2,
      title: "Community Grassroots Initiative",
      provider: "Local Government Sports Department",
      amount: 30000,
      deadline: "2026-03-31",
      status: "Open",
      progress: 75,
    },
    {
      id: 3,
      title: "Women's Football Empowerment",
      provider: "Global Soccer Development",
      amount: 25000,
      deadline: "2026-05-01",
      status: "Submitted",
      progress: 100,
    },
  ];

  const applications = [
    {
      id: 1,
      grantName: "Youth Development Fund 2026",
      applicationDate: "2026-03-15",
      status: "Under Review",
      requestedAmount: 35000,
    },
    {
      id: 2,
      grantName: "Women's Football Empowerment",
      applicationDate: "2026-02-28",
      status: "Approved",
      requestedAmount: 20000,
    },
  ];

  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Funding & Grants</h1>
        <p className="text-gray-600 dark:text-gray-400">Find and manage grassroots funding opportunities</p>
      </div>

      <Tabs defaultValue="opportunities" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="opportunities">Grant Opportunities</TabsTrigger>
          <TabsTrigger value="applications">Applications</TabsTrigger>
        </TabsList>

        <TabsContent value="opportunities" className="space-y-4">
          {grants.map((grant) => (
            <Card key={grant.id} className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{grant.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{grant.provider}</p>
                    </div>
                    <Badge
                      className={
                        grant.status === "Open"
                          ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100"
                          : "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100"
                      }
                    >
                      {grant.status}
                    </Badge>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded">
                    <p className="text-xs font-medium text-gray-600 dark:text-gray-400">Award Amount</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">${grant.amount.toLocaleString()}</p>
                  </div>
                  <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded">
                    <p className="text-xs font-medium text-gray-600 dark:text-gray-400">Application Deadline</p>
                    <p className="text-lg font-bold text-gray-900 dark:text-white">{grant.deadline}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Application Progress</span>
                    <span className="text-sm font-bold">{grant.progress}%</span>
                  </div>
                  <Progress value={grant.progress} className="h-2" />
                </div>

                <Button className="w-full">
                  {grant.progress === 100 ? "Manage Application" : "Start Application"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="applications" className="space-y-4">
          {applications.map((app) => (
            <Card key={app.id} className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{app.grantName}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Applied: {app.applicationDate}</p>
                    </div>
                    <Badge
                      className={
                        app.status === "Approved"
                          ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100"
                          : "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100"
                      }
                    >
                      {app.status}
                    </Badge>
                  </div>
                </div>

                <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Requested Amount</span>
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      ${app.requestedAmount.toLocaleString()}
                    </span>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  <FileText className="w-4 h-4 mr-2" />
                  View Documents
                </Button>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GrassrootsFundingGrantsPage;
