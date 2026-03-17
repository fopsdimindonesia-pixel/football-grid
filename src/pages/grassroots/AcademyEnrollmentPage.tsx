import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CreditCard, CheckCircle2, Clock } from "lucide-react";

const AcademyEnrollmentPage: React.FC = () => {
  const enrollments = [
    {
      id: 1,
      studentName: "Alex Turner",
      program: "Premier Development Program",
      startDate: "2026-03-15",
      duration: "12 months",
      fees: 2400,
      paid: 1200,
      status: "Active",
    },
    {
      id: 2,
      studentName: "Jordan Lee",
      program: "Elite Coaching Program",
      startDate: "2026-04-01",
      duration: "6 months",
      fees: 1800,
      paid: 1800,
      status: "Paid",
    },
  ];

  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Academy Enrollment</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage enrollments and payment tracking</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">New Enrollment</Button>
      </div>

      <div className="grid gap-6">
        {enrollments.map((enrollment) => (
          <Card key={enrollment.id} className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
            <CardContent className="pt-6">
              <div className="mb-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{enrollment.studentName}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{enrollment.program}</p>
                  </div>
                  <Badge
                    className={
                      enrollment.status === "Paid"
                        ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100"
                        : "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100"
                    }
                  >
                    {enrollment.status}
                  </Badge>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="text-sm">
                  <p className="text-gray-600 dark:text-gray-400">Start Date</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{enrollment.startDate}</p>
                </div>
                <div className="text-sm">
                  <p className="text-gray-600 dark:text-gray-400">Duration</p>
                  <p className="font-semibold text-gray-900 dark:text-white">{enrollment.duration}</p>
                </div>
              </div>

              <div className="border-t border-gray-200 dark:border-slate-700 pt-4 mt-4">
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Fees</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">${enrollment.fees}</p>
                  </div>
                  <div className="flex-1 ml-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Paid</span>
                      <span className="text-sm font-bold">
                        ${enrollment.paid} / ${enrollment.fees}
                      </span>
                    </div>
                    <Progress value={(enrollment.paid / enrollment.fees) * 100} className="h-2" />
                  </div>
                </div>
              </div>

              <Button variant="outline" className="w-full mt-4">
                <CreditCard className="w-4 h-4 mr-2" />
                Make Payment
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AcademyEnrollmentPage;
