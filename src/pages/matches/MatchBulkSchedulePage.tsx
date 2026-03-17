import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const MatchBulkSchedulePage: React.FC = () => {
  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Match Schedule (Bulk View)</h1>
        <p className="text-gray-600 dark:text-gray-400">Gantt-chart style view of all competition matches</p>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <div className="flex gap-3 mb-6">
            <Button variant="outline" size="sm">Week View</Button>
            <Button variant="outline" size="sm">Month View</Button>
            <Button variant="outline" size="sm">Season View</Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left py-3 px-4">Matchweek</th>
                  <th>Mar 15</th>
                  <th>Mar 16</th>
                  <th>Mar 17</th>
                  <th>Mar 18</th>
                  <th>Mar 19</th>
                  <th>Mar 20</th>
                  <th>Mar 21</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="text-left py-3 px-4 font-medium">Matchweek 20</td>
                  <td className="p-2"><Badge>TBD</Badge></td>
                  <td className="p-2"><Badge variant="secondary">Scheduled</Badge></td>
                  <td className="p-2"><Badge variant="secondary">Scheduled</Badge></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="text-left py-3 px-4 font-medium">Matchweek 21</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="p-2"><Badge variant="secondary">Scheduled</Badge></td>
                  <td className="p-2"><Badge variant="secondary">Scheduled</Badge></td>
                  <td className="p-2"><Badge>Live</Badge></td>
                  <td className="p-2"><Badge variant="secondary">Scheduled</Badge></td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <td className="text-left py-3 px-4 font-medium">Matchweek 22</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td className="p-2"><Badge variant="secondary">Scheduled</Badge></td>
                  <td className="p-2"><Badge variant="secondary">Scheduled</Badge></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded">
            <p className="text-sm text-yellow-800 dark:text-yellow-400">⚠️ Conflict detected: Matchweek 20 has 3 matches scheduled for Mar 16-17</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <h3 className="font-semibold mb-4">Bulk Actions</h3>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline">Export Schedule</Button>
            <Button variant="outline">Send Notifications</Button>
            <Button variant="outline">Reschedule Multiple</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MatchBulkSchedulePage;
