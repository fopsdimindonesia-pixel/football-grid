import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const MatchTimelineEditorPage: React.FC = () => {
  const events = [
    { minute: 0, type: 'KICK-OFF', team: 'both', description: 'Match starts' },
    { minute: 12, type: 'GOAL', team: 'Garuda', description: 'Ahmad (#10) - Assist: Budi (#7)' },
    { minute: 23, type: 'YELLOW', team: 'PSM', description: 'Player X (#6) - Reckless tackle' },
    { minute: 35, type: 'GOAL', team: 'PSM', description: 'Player Y (#9) - Penalty' },
    { minute: 41, type: 'GOAL', team: 'Garuda', description: 'Ahmad (#10) - Assist: Candra (#11)' },
    { minute: 45, type: 'HT', team: 'both', description: 'Half-time (2-1)' },
  ];

  return (
    <div className="space-y-6 pb-12">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Match Timeline Editor</h1>
          <p className="text-gray-600 dark:text-gray-400">FC Garuda vs PSM Makassar</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Save</Button>
          <Button>Submit</Button>
        </div>
      </div>

      <Button className="mb-4">+ Add Event</Button>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <div className="space-y-3">
            {events.map((event, idx) => (
              <div key={idx} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700 cursor-pointer transition">
                <div className="flex justify-between items-start">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center font-bold">
                      {event.minute}'
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant={event.type === 'GOAL' ? 'default' : 'secondary'}>
                          {event.type === 'GOAL' ? '⚽' : event.type === 'YELLOW' ? '🟨' : event.type === 'HT' ? '⏸️' : '●'} {event.type}
                        </Badge>
                      </div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{event.description}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">Edit</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <h3 className="font-semibold mb-4">Add New Event</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Minute</label>
                <input type="number" placeholder="45" className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-700" />
              </div>
              <div>
                <label className="text-sm font-medium">Event Type</label>
                <select className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-700">
                  <option>Goal</option>
                  <option>Yellow Card</option>
                  <option>Red Card</option>
                  <option>Substitution</option>
                  <option>Injury</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Team</label>
              <select className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-700">
                <option>FC Garuda</option>
                <option>PSM Makassar</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">Description</label>
              <textarea placeholder="Event details..." className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-700" rows={3}></textarea>
            </div>
            <Button>Add Event</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MatchTimelineEditorPage;
