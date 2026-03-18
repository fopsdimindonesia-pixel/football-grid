import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Clock, MapPin } from "lucide-react";

const TrainingSchedulePage: React.FC = () => {
  const schedule = [
    { day: "Monday", time: "10:00 - 12:00", location: "Main Pitch", type: "Technical", coach: "John Smith", participants: 24 },
    { day: "Monday", time: "14:00 - 16:00", location: "Youth Academy", type: "Youth", coach: "Sarah Johnson", participants: 18 },
    { day: "Tuesday", time: "10:00 - 12:00", location: "Main Pitch", type: "Tactical", coach: "Mike Wilson", participants: 22 },
    { day: "Wednesday", time: "10:00 - 12:00", location: "Main Pitch", type: "Physical", coach: "Lisa Brown", participants: 20 },
    { day: "Thursday", time: "15:00 - 17:00", location: "Gym", type: "Strength Training", coach: "James Taylor", participants: 15 },
    { day: "Friday", time: "10:00 - 12:00", location: "Main Pitch", type: "Match Prep", coach: "John Smith", participants: 24 },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Technical":
        return "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100";
      case "Tactical":
        return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100";
      case "Physical":
        return "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-100";
      case "Strength Training":
        return "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100";
      case "Youth":
        return "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100";
      case "Match Prep":
        return "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100";
      default:
        return "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100";
    }
  };

  return (
    <div className="space-y-6 pb-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Training Schedule</h1>
          <p className="text-gray-600 dark:text-gray-400">Weekly training program</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700"><Plus className="w-4 h-4 mr-2" />Add Session</Button>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {schedule.map((session, idx) => (
          <Card key={idx} className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700 hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">{session.day}</h3>
                    <Badge className={getTypeColor(session.type)}>{session.type}</Badge>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <Clock className="w-4 h-4" />
                      {session.time}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4" />
                      {session.location}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900 dark:text-white">{session.coach}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{session.participants} participants</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TrainingSchedulePage;
