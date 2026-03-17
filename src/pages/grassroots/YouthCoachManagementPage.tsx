import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, AlertCircle, Mail } from "lucide-react";

const YouthCoachManagementPage: React.FC = () => {
  const coaches = [
    {
      id: 1,
      name: "John Smith",
      specialization: "Youth Development",
      license: "UEFA B",
      licenseExpiry: "2026-12-31",
      firstAid: true,
      backgroundCheck: true,
      academy: "Elite Academy",
      active: true,
    },
    {
      id: 2,
      name: "Maria Garcia",
      specialization: "Goalkeeping",
      license: "UEFA B",
      licenseExpiry: "2025-06-30",
      firstAid: false,
      backgroundCheck: true,
      academy: "Development Center",
      active: true,
    },
  ];

  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Youth Coach Management</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage coaches, licenses, and compliance</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">Add Coach</Button>
      </div>

      <div className="grid gap-6">
        {coaches.map((coach) => (
          <Card key={coach.id} className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
            <CardContent className="pt-6">
              <div className="mb-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{coach.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {coach.specialization} • {coach.academy}
                    </p>
                  </div>
                  <Badge className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100">
                    {coach.active ? "Active" : "Inactive"}
                  </Badge>
                </div>
              </div>

              <Tabs defaultValue="credentials" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="credentials">Credentials</TabsTrigger>
                  <TabsTrigger value="compliance">Compliance</TabsTrigger>
                </TabsList>

                <TabsContent value="credentials" className="space-y-3 mt-4">
                  <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-medium">Coaching License</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{coach.license}</p>
                      </div>
                      <Badge variant="outline">Expires {coach.licenseExpiry}</Badge>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="compliance" className="space-y-3 mt-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded">
                      {coach.firstAid ? (
                        <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-yellow-600 mr-2" />
                      )}
                      <span className="text-sm font-medium flex-1">First Aid Certification</span>
                      <Badge variant="outline">{coach.firstAid ? "Valid" : "Pending"}</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded">
                      {coach.backgroundCheck ? (
                        <CheckCircle2 className="w-4 h-4 text-green-600 mr-2" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-yellow-600 mr-2" />
                      )}
                      <span className="text-sm font-medium flex-1">Background Check</span>
                      <Badge variant="outline">{coach.backgroundCheck ? "Cleared" : "Pending"}</Badge>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              <div className="flex gap-2 mt-4 pt-4 border-t border-gray-200 dark:border-slate-700">
                <Button variant="outline" className="flex-1">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Button>
                <Button variant="outline" className="flex-1">
                  Edit
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default YouthCoachManagementPage;
