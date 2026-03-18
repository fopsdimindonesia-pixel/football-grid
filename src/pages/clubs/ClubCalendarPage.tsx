import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";

const ClubCalendarPage: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date(2024, 0));

  const events = [
    { date: 5, title: "Training Session", type: "Training" },
    { date: 8, title: "Match vs City FC", type: "Match" },
    { date: 15, title: "Board Meeting", type: "Meeting" },
    { date: 22, title: "Match vs United", type: "Match" },
    { date: 28, title: "Team Dinner", type: "Social" },
  ];

  const getDaysInMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const getFirstDayOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);
  const daysArray = [...Array(firstDay), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "Match":
        return "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100";
      case "Training":
        return "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100";
      case "Meeting":
        return "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100";
      case "Social":
        return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100";
      default:
        return "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100";
    }
  };

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="space-y-6 pb-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Club Calendar</h1>
          <p className="text-gray-600 dark:text-gray-400">Schedule and events</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700"><Plus className="w-4 h-4 mr-2" />Add Event</Button>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">{monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}>
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={() => setCurrentMonth(new Date())}>Today</Button>
              <Button variant="outline" size="sm" onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}>
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2 mb-2">
            {dayNames.map((day) => (
              <div key={day} className="text-center font-semibold text-gray-700 dark:text-gray-300 text-sm p-2">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {daysArray.map((day, idx) => {
              const hasEvent = day && events.some((e) => e.date === day);
              const dayEvents = day ? events.filter((e) => e.date === day) : [];

              return (
                <div
                  key={idx}
                  className={`aspect-square p-2 rounded-lg border border-gray-200 dark:border-slate-700 ${
                    day ? "bg-white dark:bg-slate-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-600" : "bg-gray-50 dark:bg-slate-800"
                  }`}
                >
                  {day && (
                    <>
                      <p className={`text-sm font-semibold ${hasEvent ? "text-blue-600 dark:text-blue-400" : "text-gray-900 dark:text-white"}`}>{day}</p>
                      <div className="flex flex-col gap-0.5 mt-1">
                        {dayEvents.slice(0, 2).map((event, i) => (
                          <Badge key={i} className={`text-xs ${getEventTypeColor(event.type)}`}>{event.type}</Badge>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Upcoming Events</h3>
          <div className="space-y-2">
            {events.map((event) => (
              <div key={event.date} className="p-3 bg-gray-50 dark:bg-slate-700/50 rounded flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{event.title}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">January {event.date}, 2024</p>
                </div>
                <Badge className={getEventTypeColor(event.type)}>{event.type}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClubCalendarPage;
