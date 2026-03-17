import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock, CheckCircle2 } from "lucide-react";

const GrassrootsFacilityBookingPage: React.FC = () => {
  const facilities = [
    {
      id: 1,
      name: "Central Park Field A",
      capacity: 200,
      type: "Natural Grass",
      available: 8,
      bookingsToday: 2,
      status: "Available",
    },
    {
      id: 2,
      name: "Central Park Field B",
      capacity: 150,
      type: "Artificial Turf",
      available: 5,
      bookingsToday: 3,
      status: "Available",
    },
    {
      id: 3,
      name: "Academy Indoor Hall",
      capacity: 120,
      type: "Indoor",
      available: 2,
      bookingsToday: 5,
      status: "Limited",
    },
  ];

  const bookedSlots = [
    {
      id: 1,
      facility: "Central Park Field A",
      team: "Elite Academy U12",
      date: "2026-03-20",
      time: "15:00-16:30",
      status: "Confirmed",
    },
    {
      id: 2,
      facility: "Central Park Field A",
      team: "Youth Development Unit",
      date: "2026-03-20",
      time: "17:00-18:30",
      status: "Confirmed",
    },
    {
      id: 3,
      facility: "Academy Indoor Hall",
      team: "Goalkeeper Training",
      date: "2026-03-20",
      time: "19:00-20:00",
      status: "Pending",
    },
  ];

  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Facility Booking</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage grassroots facility scheduling and resources</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">New Booking</Button>
      </div>

      <div>
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Available Facilities</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {facilities.map((facility) => (
            <Card
              key={facility.id}
              className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700"
            >
              <CardContent className="pt-6">
                <div className="mb-3">
                  <h3 className="font-bold text-gray-900 dark:text-white">{facility.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{facility.type}</p>
                </div>

                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>Capacity: {facility.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>{facility.available} slots available</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Badge
                    className={
                      facility.status === "Available"
                        ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 flex-1"
                        : "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 flex-1"
                    }
                  >
                    {facility.status}
                  </Badge>
                </div>

                <Button variant="outline" className="w-full mt-3">
                  Book Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Today's Bookings</h2>
        <div className="space-y-3">
          {bookedSlots.map((slot) => (
            <Card key={slot.id} className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{slot.facility}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{slot.team}</p>
                    <div className="flex items-center gap-4 mt-2 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {slot.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {slot.time}
                      </div>
                    </div>
                  </div>
                  <Badge
                    className={
                      slot.status === "Confirmed"
                        ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100"
                        : "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100"
                    }
                  >
                    {slot.status}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GrassrootsFacilityBookingPage;
