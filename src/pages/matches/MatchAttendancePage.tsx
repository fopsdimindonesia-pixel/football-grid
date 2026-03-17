import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MatchAttendancePage: React.FC = () => {
  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Match Attendance</h1>
        <p className="text-gray-600 dark:text-gray-400">Ticket sales and attendance analytics</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground mb-1">Capacity</p>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">65,000</p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground mb-1">Actual Attendance</p>
            <p className="text-3xl font-bold text-green-600">54,230</p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground mb-1">Occupancy Rate</p>
            <p className="text-3xl font-bold text-blue-600">83.4%</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <h3 className="font-semibold mb-4">Stadium Zones Heatmap</h3>
          <div className="bg-gradient-to-b from-red-500 to-blue-500 rounded-lg p-8 aspect-video flex items-center justify-center">
            <p className="text-white text-center">Stadium Zones Heatmap Visualization</p>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <h3 className="font-semibold mb-4">Zone Breakdown</h3>
          <div className="space-y-3">
            {[
              { zone: 'North Stand', capacity: 12000, actual: 10200, occupancy: 85 },
              { zone: 'South Stand', capacity: 12000, actual: 9800, occupancy: 82 },
              { zone: 'East Stand', capacity: 20000, actual: 18500, occupancy: 93 },
              { zone: 'West Stand', capacity: 21000, actual: 15730, occupancy: 75 },
            ].map((z, idx) => (
              <div key={idx} className="p-3 bg-slate-50 dark:bg-slate-700 rounded">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-sm">{z.zone}</span>
                  <Badge variant="outline">{z.occupancy}%</Badge>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded h-2">
                  <div className="bg-green-600 h-2 rounded" style={{ width: `${z.occupancy}%` }}></div>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{z.actual} / {z.capacity}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MatchAttendancePage;
