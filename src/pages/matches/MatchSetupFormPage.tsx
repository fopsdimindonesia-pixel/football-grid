import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const MatchSetupFormPage: React.FC = () => {
  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Create New Match</h1>
        <p className="text-gray-600 dark:text-gray-400">Setup match details and configuration</p>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="competition">Competition</Label>
                <Input id="competition" placeholder="Select competition" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="round">Round / Matchweek</Label>
                <Input id="round" placeholder="e.g., Matchweek 22" className="mt-2" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="homeTeam">Home Team</Label>
                <Input id="homeTeam" placeholder="Select home team" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="awayTeam">Away Team</Label>
                <Input id="awayTeam" placeholder="Select away team" className="mt-2" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="time">Time</Label>
                <Input id="time" type="time" className="mt-2" />
              </div>
            </div>

            <div>
              <Label htmlFor="venue">Venue / Stadium</Label>
              <Input id="venue" placeholder="Stadium name" className="mt-2" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="referee">Referee Assignment</Label>
                <Input id="referee" placeholder="Select referee" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="commissioner">Match Commissioner</Label>
                <Input id="commissioner" placeholder="Select commissioner" className="mt-2" />
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit">Create Match</Button>
              <Button type="button" variant="outline">Cancel</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default MatchSetupFormPage;
