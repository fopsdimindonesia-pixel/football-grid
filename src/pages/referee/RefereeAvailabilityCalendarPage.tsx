import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { useState } from "react";

export default function RefereeAvailabilityCalendarPage() {
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 0)); // January 2025
  const [availabilityPattern, setAvailabilityPattern] = useState({
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: false,
    friday: false,
    saturday: true,
    sunday: true,
  });

  const daysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const firstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const getDayOfWeek = (day: number): string => {
    const d = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    return days[d.getDay()];
  };

  const isAvailable = (day: number): boolean => {
    const dayOfWeek = getDayOfWeek(day);
    return availabilityPattern[dayOfWeek as keyof typeof availabilityPattern];
  };

  const monthName = currentMonth.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const days = [];
  const firstDay = firstDayOfMonth(currentMonth);
  const numDays = daysInMonth(currentMonth);

  // Empty cells for days before month starts
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  // Days of month
  for (let i = 1; i <= numDays; i++) {
    days.push(i);
  }

  const blackoutDates = [5, 18, 24]; // Example blackout dates

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Availability Calendar
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Set your weekly availability and blackout dates
          </p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Blackout Period
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <div className="lg:col-span-2">
          <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
            <div className="p-6">
              {/* Month Navigation */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {monthName}
                </h2>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={prevMonth}>
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={nextMonth}>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Day Headers */}
              <div className="grid grid-cols-7 gap-2 mb-2">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                  <div
                    key={day}
                    className="text-center text-sm font-semibold text-gray-600 dark:text-gray-400 py-2"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Days */}
              <div className="grid grid-cols-7 gap-2">
                {days.map((day, idx) => (
                  <div key={idx}>
                    {day ? (
                      <button
                        className={`w-full aspect-square rounded-lg text-sm font-medium transition ${
                          isAvailable(day)
                            ? "bg-green-100 dark:bg-green-950/30 text-green-900 dark:text-green-300 border border-green-300 dark:border-green-900"
                            : "bg-red-100 dark:bg-red-950/30 text-red-900 dark:text-red-300 border border-red-300 dark:border-red-900"
                        } ${
                          blackoutDates.includes(day)
                            ? "ring-2 ring-yellow-500 dark:ring-yellow-400"
                            : ""
                        }`}
                      >
                        {day}
                      </button>
                    ) : (
                      <div />
                    )}
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="mt-6 flex gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-green-100 dark:bg-green-950/30 border border-green-300 dark:border-green-900" />
                  <span className="text-gray-600 dark:text-gray-400">Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-red-100 dark:bg-red-950/30 border border-red-300 dark:border-red-900" />
                  <span className="text-gray-600 dark:text-gray-400">Unavailable</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded ring-2 ring-yellow-500 dark:ring-yellow-400" />
                  <span className="text-gray-600 dark:text-gray-400">Blackout</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Patterns */}
        <div className="space-y-6">
          <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Weekly Pattern
              </h3>

              <div className="space-y-3">
                {[
                  { day: "Monday", key: "monday" },
                  { day: "Tuesday", key: "tuesday" },
                  { day: "Wednesday", key: "wednesday" },
                  { day: "Thursday", key: "thursday" },
                  { day: "Friday", key: "friday" },
                  { day: "Saturday", key: "saturday" },
                  { day: "Sunday", key: "sunday" },
                ].map((d) => (
                  <label
                    key={d.key}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={
                        availabilityPattern[
                          d.key as keyof typeof availabilityPattern
                        ]
                      }
                      onChange={(e) =>
                        setAvailabilityPattern({
                          ...availabilityPattern,
                          [d.key]: e.target.checked,
                        })
                      }
                      className="w-4 h-4"
                    />
                    <span className="text-gray-700 dark:text-gray-300">
                      {d.day}
                    </span>
                  </label>
                ))}
              </div>

              <Button className="w-full mt-6">Save Pattern</Button>
            </div>
          </Card>

          <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Blackout Dates
              </h3>

              <div className="space-y-2">
                {blackoutDates.map((date) => (
                  <div
                    key={date}
                    className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-800 rounded-lg bg-yellow-50 dark:bg-yellow-950/20"
                  >
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {currentMonth.toLocaleString("default", {
                        month: "short",
                      })}{" "}
                      {date}
                    </span>
                    <button className="text-red-600 dark:text-red-400 text-sm font-medium hover:underline">
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <Button variant="outline" className="w-full mt-4">
                <Plus className="w-4 h-4 mr-2" />
                Add Date
              </Button>
            </div>
          </Card>

          <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Sync Status
              </h3>

              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Last Updated
                  </span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    Today
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Synced with Assignments
                  </span>
                  <Badge variant="default">Live</Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
