import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const MatchBroadcastManagementPage: React.FC = () => {
  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Broadcast Management</h1>
        <p className="text-gray-600 dark:text-gray-400">Manage broadcast schedule and streaming</p>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <h3 className="font-semibold mb-4">Broadcast Partners</h3>
          <div className="space-y-3">
            {['RCTI', 'Indosiar', 'Net TV', 'Streaming Platform'].map((partner, idx) => (
              <div key={idx} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg flex justify-between items-center">
                <span className="font-medium text-gray-900 dark:text-white">{partner}</span>
                <Button variant="outline" size="sm">Edit</Button>
              </div>
            ))}
          </div>
          <Button className="mt-4" variant="outline" size="sm">+ Add Partner</Button>
        </CardContent>
      </Card>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <h3 className="font-semibold mb-4">Broadcast Schedule</h3>
          <div className="space-y-4">
            <div>
              <Label htmlFor="tvStart">TV Broadcast Start Time</Label>
              <Input id="tvStart" type="time" defaultValue="14:30" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="streamStart">Live Stream Start Time</Label>
              <Input id="streamStart" type="time" defaultValue="14:45" className="mt-2" />
            </div>
            <div>
              <Label htmlFor="production">Production Notes</Label>
              <textarea placeholder="Any special requirements or notes..." className="w-full mt-2 p-3 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-700 text-gray-900 dark:text-white" rows={3}></textarea>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <h3 className="font-semibold mb-4">Commentary Assignments</h3>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="tvCommentary">TV Commentary Lead</Label>
                <Input id="tvCommentary" placeholder="Name" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="streamCommentary">Stream Commentary Lead</Label>
                <Input id="streamCommentary" placeholder="Name" className="mt-2" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="analystTV">Analyst (TV)</Label>
                <Input id="analystTV" placeholder="Name" className="mt-2" />
              </div>
              <div>
                <Label htmlFor="analystStream">Analyst (Stream)</Label>
                <Input id="analystStream" placeholder="Name" className="mt-2" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Button>Save Broadcast Settings</Button>
    </div>
  );
};

export default MatchBroadcastManagementPage;
