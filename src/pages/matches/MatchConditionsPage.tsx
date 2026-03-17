import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle } from "lucide-react";

const MatchConditionsPage: React.FC = () => {
  const checklist = [
    { item: "Pitch inspection completed", status: true },
    { item: "Goal nets secured", status: true },
    { item: "Corner flags in place", status: true },
    { item: "Ball condition checked", status: true },
    { item: "Weather forecast reviewed", status: true },
  ];

  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Match Conditions</h1>
        <p className="text-gray-600 dark:text-gray-400">Weather and field conditions tracking</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-4">Pre-Match Conditions</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Temperature</p>
                <p className="text-muted-foreground">28°C</p>
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Weather</p>
                <p className="text-muted-foreground">Partly Cloudy</p>
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Wind Speed</p>
                <p className="text-muted-foreground">5 km/h</p>
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Pitch Condition</p>
                <p className="text-muted-foreground">Excellent</p>
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Humidity</p>
                <p className="text-muted-foreground">65%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-4">Post-Match Conditions</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Pitch Condition After Match</p>
                <p className="text-muted-foreground">Good</p>
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Injuries/Damage</p>
                <p className="text-muted-foreground">None reported</p>
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Crowd Behavior</p>
                <p className="text-muted-foreground">Excellent</p>
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Lighting Status</p>
                <p className="text-muted-foreground">Optimal</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <h3 className="font-semibold mb-4">Pre-Match Checklist</h3>
          <div className="space-y-3">
            {checklist.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700 rounded">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-900 dark:text-white">{item.item}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Button>Save Conditions</Button>
    </div>
  );
};

export default MatchConditionsPage;
