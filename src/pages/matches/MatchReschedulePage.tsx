import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const MatchReschedulePage: React.FC = () => {
  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Reschedule Match</h1>
        <p className="text-gray-600 dark:text-gray-400">Change match date, time, or venue</p>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <form className="space-y-6">
            <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded">
              <p className="text-sm text-muted-foreground">Current Match Details</p>
              <p className="font-semibold text-gray-900 dark:text-white">FC Garuda vs PSM Makassar</p>
              <p className="text-sm text-muted-foreground">📅 Saturday, March 20, 2026 | ⏰ 15:00 WIB</p>
            </div>

            <div>
              <Label htmlFor="reason">Reschedule Reason</Label>
              <select id="reason" className="w-full mt-2 p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-700 text-gray-900 dark:text-white">
                <option>Weather conditions</option>
                <option>Venue unavailable</option>
                <option>Team unavailable</option>
                <option>Security concerns</option>
                <option>Medical emergency</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <Label htmlFor="reasonDetails">Description</Label>
              <textarea id="reasonDetails" placeholder="Provide detailed reason for rescheduling..." className="w-full mt-2 p-3 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-700 text-gray-900 dark:text-white" rows={4}></textarea>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <h3 className="font-semibold mb-4">Proposed New Details</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="newDate">New Date</Label>
                  <Input id="newDate" type="date" className="mt-2" />
                </div>
                <div>
                  <Label htmlFor="newTime">New Time</Label>
                  <Input id="newTime" type="time" className="mt-2" />
                </div>
              </div>

              <div className="mt-6">
                <Label htmlFor="newVenue">New Venue (Optional)</Label>
                <Input id="newVenue" placeholder="Leave blank if venue unchanged" className="mt-2" />
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <h3 className="font-semibold mb-4">Notifications</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700 rounded cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4" />
                  <span className="text-sm">Notify teams</span>
                </label>
                <label className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700 rounded cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4" />
                  <span className="text-sm">Notify referees</span>
                </label>
                <label className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-700 rounded cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4" />
                  <span className="text-sm">Notify fans</span>
                </label>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit">Submit for Approval</Button>
              <Button type="button" variant="outline">Cancel</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default MatchReschedulePage;
