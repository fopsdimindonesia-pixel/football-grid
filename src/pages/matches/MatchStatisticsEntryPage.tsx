import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const MatchStatisticsEntryPage: React.FC = () => {
  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Match Statistics Entry</h1>
        <p className="text-gray-600 dark:text-gray-400">Record match statistics and analytics data</p>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <form className="space-y-6">
            <h3 className="font-semibold">Team Statistics</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="possession">Possession (%)</Label>
                <Input id="possession" type="number" placeholder="62" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="possessionOpp">Opponent Possession (%)</Label>
                <Input id="possessionOpp" type="number" placeholder="38" className="mt-2" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="shots">Shots</Label>
                <Input id="shots" type="number" placeholder="8" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="shotsOpp">Opponent Shots</Label>
                <Input id="shotsOpp" type="number" placeholder="4" className="mt-2" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="shotsOnTarget">Shots on Target</Label>
                <Input id="shotsOnTarget" type="number" placeholder="5" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="shotsOnTargetOpp">Opponent Shots on Target</Label>
                <Input id="shotsOnTargetOpp" type="number" placeholder="2" className="mt-2" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="corners">Corners</Label>
                <Input id="corners" type="number" placeholder="7" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="cornersOpp">Opponent Corners</Label>
                <Input id="cornersOpp" type="number" placeholder="3" className="mt-2" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="fouls">Fouls Committed</Label>
                <Input id="fouls" type="number" placeholder="8" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="foulsOpp">Opponent Fouls</Label>
                <Input id="foulsOpp" type="number" placeholder="12" className="mt-2" />
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <h3 className="font-semibold mb-4">Additional Analytics</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="passes">Passes Completed</Label>
                  <Input id="passes" type="number" placeholder="450" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="passAccuracy">Pass Accuracy (%)</Label>
                  <Input id="passAccuracy" type="number" placeholder="85" className="mt-2" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <Label htmlFor="tackles">Tackles</Label>
                  <Input id="tackles" type="number" placeholder="34" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="offsides">Offsides</Label>
                  <Input id="offsides" type="number" placeholder="2" className="mt-2" />
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
              <Button type="submit">Save Statistics</Button>
              <Button type="button" variant="outline">Cancel</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default MatchStatisticsEntryPage;
