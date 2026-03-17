import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle } from "lucide-react";

const OfflineMatchReportPage: React.FC = () => {
  return (
    <div className="space-y-6 pb-12">
      <div className="flex gap-2 items-center mb-8">
        <AlertCircle className="w-5 h-5 text-blue-600" />
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">Offline Match Report</h1>
          <p className="text-gray-600 dark:text-gray-400">Mobile offline-first form for referees</p>
        </div>
      </div>

      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded">
        <p className="text-sm text-blue-800 dark:text-blue-400">✓ Form cached locally - works offline. Changes will sync when connection is restored.</p>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <form className="space-y-6">
            <div>
              <Label htmlFor="matchId">Match ID</Label>
              <Input id="matchId" value="MAT-2026-0320-001" disabled className="mt-2" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="homeTeam">Home Team</Label>
                <Input id="homeTeam" value="FC Garuda" disabled className="mt-2" />
              </div>
              <div>
                <Label htmlFor="awayTeam">Away Team</Label>
                <Input id="awayTeam" value="PSM Makassar" disabled className="mt-2" />
              </div>
            </div>

            <div>
              <Label htmlFor="finalScore">Final Score</Label>
              <Input id="finalScore" placeholder="e.g., 2-1" className="mt-2" />
            </div>

            <div>
              <Label htmlFor="summary">Match Summary</Label>
              <textarea id="summary" placeholder="Quick summary of the match..." className="w-full mt-2 p-3 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-700 text-gray-900 dark:text-white" rows={4}></textarea>
            </div>

            <div>
              <Label htmlFor="incidents">Notable Incidents</Label>
              <textarea id="incidents" placeholder="Injuries, red cards, VAR reviews..." className="w-full mt-2 p-3 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-700 text-gray-900 dark:text-white" rows={4}></textarea>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="refName">Referee Name</Label>
                <Input id="refName" placeholder="Your name" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="signature">Signature</Label>
                <div className="mt-2 border border-gray-300 dark:border-gray-600 rounded h-12 flex items-center justify-center bg-white dark:bg-slate-700">
                  <span className="text-muted-foreground text-sm">Draw signature</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
              <Button type="submit">Save (Local)</Button>
              <p className="text-xs text-muted-foreground">Form saved locally on device</p>
              <Button type="button" variant="outline">Sync When Online</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default OfflineMatchReportPage;
