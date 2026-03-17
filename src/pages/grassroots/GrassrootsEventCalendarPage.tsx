import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

const GrassrootsEventCalendarPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState("2026-03-20");

  const events = [
    {
      id: 1,
      title: "U12 Training Session",
      date: "2026-03-20",
      time: "15:00",
      location: "Central Park, Field A",
      participants: 24,
      type: "Training",
    },
    {
      id: 2,
      title: "U14 Friendly Match",
      date: "2026-03-20",
      time: "17:00",
      location: "Central Park, Field B",
      participants: 22,
      type: "Match",
    },
    {
      id: 3,
      title: "Coaching Workshop",
      date: "2026-03-21",
      time: "19:00",
      location: "Academy Building",
      participants: 18,
      type: "Workshop",
    },
    {
      id: 4,
      title: "U16 League Match",
      date: "2026-03-22",
      time: "15:30",
      location: "Stadium Grounds",
      participants: 28,
      type: "Match",
    },
  ];

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case "Match":
        return "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100";
      case "Training":
        return "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100";
      case "Workshop":
        return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100";
      default:
        return "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100";
    }
  };

  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Event Calendar</h1>
          <p className="text-gray-600 dark:text-gray-400">Grassroots events, training, and matches</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">Create Event</Button>
      </div>

      <div className="grid gap-6">
        {events.map((event) => (
          <Card key={event.id} className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">{event.title}</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </div>
                  </div>
                </div>
                <Badge className={getTypeBadgeColor(event.type)}>{event.type}</Badge>
              </div>

              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <MapPin className="w-4 h-4" />
                  {event.location}
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <Users className="w-4 h-4" />
                  {event.participants} participants
                </div>
              </div>

              <div className="flex gap-2 pt-4 border-t border-gray-200 dark:border-slate-700">
                <Button variant="outline" className="flex-1">
                  View Details
                </Button>
                <Button variant="outline" className="flex-1">
                  Edit
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GrassrootsEventCalendarPage;
