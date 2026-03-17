import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertCircle, Clock } from "lucide-react";

const MatchDayOperationsPage: React.FC = () => {
  const operations = [
    { task: "Security briefing", status: 'completed' },
    { task: "Medical team briefing", status: 'completed' },
    { task: "Ambulance on standby", status: 'completed' },
    { task: "Broadcast setup", status: 'in-progress' },
    { task: "Announcer briefing", status: 'pending' },
    { task: "Ball boys assignment", status: 'completed' },
    { task: "Kit check", status: 'completed' },
    { task: "Pitch inspection", status: 'completed' },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle2 className="w-5 h-5 text-green-600" />;
      case 'in-progress':
        return <Clock className="w-5 h-5 text-blue-600" />;
      default:
        return <AlertCircle className="w-5 h-5 text-yellow-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">Completed</Badge>;
      case 'in-progress':
        return <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">In Progress</Badge>;
      default:
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">Pending</Badge>;
    }
  };

  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Match Day Operations</h1>
        <p className="text-gray-600 dark:text-gray-400">Pre-match operational checklist</p>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <div className="space-y-3">
            {operations.map((op, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition">
                <div className="flex items-center gap-4">
                  {getStatusIcon(op.status)}
                  <span className="font-medium text-gray-900 dark:text-white">{op.task}</span>
                </div>
                {getStatusBadge(op.status)}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <h3 className="font-semibold mb-4">Overall Status</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Completion</span>
              <span className="font-semibold">75%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-3">
              <div className="bg-green-600 h-3 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MatchDayOperationsPage;
