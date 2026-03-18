import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Clock, AlertCircle, Plus } from "lucide-react";

const TransferWindowManagerPage: React.FC = () => {
  const stages = [
    {
      name: "Identified",
      color: "bg-blue-100 dark:bg-blue-900",
      textColor: "text-blue-800 dark:text-blue-100",
      count: 8,
      players: [
        { name: "John Striker", club: "North FC", position: "CF", status: "Interested" },
        { name: "Mike Defender", club: "South United", position: "CB", status: "Contacted" },
      ],
    },
    {
      name: "Offer Made",
      color: "bg-yellow-100 dark:bg-yellow-900",
      textColor: "text-yellow-800 dark:text-yellow-100",
      count: 4,
      players: [
        { name: "Alex Midfielder", club: "East City", position: "CM", status: "Offer $2M" },
        { name: "Sarah Winger", club: "West Town", position: "LW", status: "Offer $1.5M" },
      ],
    },
    {
      name: "Negotiation",
      color: "bg-orange-100 dark:bg-orange-900",
      textColor: "text-orange-800 dark:text-orange-100",
      count: 3,
      players: [
        { name: "Chris Keeper", club: "Central FC", position: "GK", status: "Counter $2.5M" },
      ],
    },
    {
      name: "Completed",
      color: "bg-green-100 dark:bg-green-900",
      textColor: "text-green-800 dark:text-green-100",
      count: 2,
      players: [
        { name: "David Striker", club: "Downtown", position: "ST", status: "Signed 2 years" },
      ],
    },
  ];

  return (
    <div className="space-y-6 pb-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Transfer Window Manager</h1>
          <p className="text-gray-600 dark:text-gray-400">Track player transfer pipeline</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700"><Plus className="w-4 h-4 mr-2" />New Transfer</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
        {stages.map((stage, idx) => (
          <div key={idx} className="relative">
            <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm text-gray-900 dark:text-white">{stage.name}</CardTitle>
                  <Badge className={`${stage.color} ${stage.textColor}`}>{stage.count}</Badge>
                </div>
              </CardHeader>
            </Card>
            {idx < stages.length - 1 && (
              <ArrowRight className="absolute -right-6 top-8 w-5 h-5 text-gray-400 hidden lg:block" />
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {stages.map((stage, idx) => (
          <div key={idx} className="space-y-3">
            {stage.players.map((player, pidx) => (
              <Card
                key={pidx}
                className={`${stage.color} border-0 dark:border dark:border-opacity-20 hover:shadow-md transition-shadow`}
              >
                <CardContent className="pt-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{player.name}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-700 mb-2">{player.club}</p>
                  <div className="flex items-center justify-between text-xs">
                    <Badge variant="outline" className="text-gray-700 dark:text-gray-300">
                      {player.position}
                    </Badge>
                    <span className="text-gray-700 dark:text-gray-800">{player.status}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ))}
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">Transfer Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded">
              <p className="text-sm text-gray-600 dark:text-gray-400">Potential Investment</p>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">$12.5M</p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded">
              <p className="text-sm text-gray-600 dark:text-gray-400">Completed Transfers</p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">2</p>
            </div>
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded">
              <p className="text-sm text-gray-600 dark:text-gray-400">In Progress</p>
              <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">7</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TransferWindowManagerPage;
