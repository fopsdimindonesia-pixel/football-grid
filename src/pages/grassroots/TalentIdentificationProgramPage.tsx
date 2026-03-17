import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Users, CheckCircle2 } from "lucide-react";

const TalentIdentificationProgramPage: React.FC = () => {
  const events = [
    {
      id: 1,
      name: "Regional Talent Scout",
      date: "2026-03-28",
      location: "Central Park",
      participants: 120,
      status: "Open",
    },
    {
      id: 2,
      name: "U14 Elite Selection",
      date: "2026-04-15",
      location: "Stadium A",
      participants: 85,
      status: "Registering",
    },
  ];

  const selected = [
    { id: 1, name: "Michael Thompson", age: 14, score: 92, status: "Selected" },
    { id: 2, name: "Emma Wilson", age: 13, score: 88, status: "Selected" },
    { id: 3, name: "Jamie Connor", age: 14, score: 85, status: "Waitlist" },
  ];

  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Talent Identification Program</h1>
        <p className="text-gray-600 dark:text-gray-400">Scout and select promising young talents</p>
      </div>

      <Tabs defaultValue="events" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="selected">Selected Players</TabsTrigger>
        </TabsList>

        <TabsContent value="events" className="space-y-4">
          {events.map((event) => (
            <Card key={event.id} className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{event.name}</h3>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                        <Users className="w-4 h-4" />
                        {event.participants} participants
                      </div>
                    </div>
                  </div>
                  <Badge className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100">
                    {event.status}
                  </Badge>
                </div>
                <Button className="w-full">View Details</Button>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="selected" className="space-y-4">
          {selected.map((player) => (
            <Card key={player.id} className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
              <CardContent className="pt-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{player.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">U{player.age}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-lg font-bold">{player.score}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Score</p>
                    </div>
                    <Badge
                      className={
                        player.status === "Selected"
                          ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100"
                          : "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100"
                      }
                    >
                      {player.status}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TalentIdentificationProgramPage;
