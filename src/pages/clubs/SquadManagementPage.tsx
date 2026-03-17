import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LayoutGrid, List, Plus } from "lucide-react";

const SquadManagementPage: React.FC = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const players = [
    { id: 1, name: "Marcus Johnson", position: "Striker", number: 9, status: "Active", nationality: "English", age: 28 },
    { id: 2, name: "Alex Smith", position: "Midfielder", number: 7, status: "Active", nationality: "English", age: 25 },
    { id: 3, name: "David Brown", position: "Defender", number: 4, status: "Active", nationality: "English", age: 30 },
    { id: 4, name: "Tom Wilson", position: "Goalkeeper", number: 1, status: "Active", nationality: "English", age: 32 },
    { id: 5, name: "Chris Lee", position: "Forward", number: 10, status: "Injured", nationality: "English", age: 26 },
    { id: 6, name: "Paul Harris", position: "Defender", number: 5, status: "Active", nationality: "Scottish", age: 27 },
  ];

  const getPositionColor = (position: string) => {
    switch (position) {
      case "Striker":
      case "Forward":
        return "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100";
      case "Midfielder":
        return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100";
      case "Defender":
        return "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100";
      case "Goalkeeper":
        return "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100";
      default:
        return "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100";
    }
  };

  if (viewMode === "grid") {
    return (
      <div className="space-y-6 pb-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Squad Management</h1>
            <p className="text-gray-600 dark:text-gray-400">Manage team players and positions</p>
          </div>
          <div className="flex gap-2">
            <Button variant={viewMode === "grid" ? "default" : "outline"} size="sm" onClick={() => setViewMode("grid")}>
              <LayoutGrid className="w-4 h-4 mr-2" />Grid
            </Button>
            <Button variant={viewMode === "list" ? "default" : "outline"} size="sm" onClick={() => setViewMode("list")}>
              <List className="w-4 h-4 mr-2" />List
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700"><Plus className="w-4 h-4 mr-2" />Add Player</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {players.map((player) => (
            <Card key={player.id} className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-3xl font-bold text-gray-400 dark:text-gray-600">#{player.number}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{player.name}</h3>
                  </div>
                  <Badge className={getPositionColor(player.position)}>{player.position}</Badge>
                </div>
                <div className="space-y-2 mb-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400">Age: {player.age}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Nationality: {player.nationality}</p>
                  <Badge className={player.status === "Active" ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100" : "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100"}>
                    {player.status}
                  </Badge>
                </div>
                <Button variant="outline" size="sm" className="w-full">View Details</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Squad Management</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage team players and positions</p>
        </div>
        <div className="flex gap-2">
          <Button variant={viewMode === "grid" ? "default" : "outline"} size="sm" onClick={() => setViewMode("grid")}>
            <LayoutGrid className="w-4 h-4 mr-2" />Grid
          </Button>
          <Button variant={viewMode === "list" ? "default" : "outline"} size="sm" onClick={() => setViewMode("list")}>
            <List className="w-4 h-4 mr-2" />List
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700"><Plus className="w-4 h-4 mr-2" />Add Player</Button>
        </div>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-slate-700">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">#</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Position</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Nationality</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Age</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Status</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Action</th>
                </tr>
              </thead>
              <tbody>
                {players.map((player) => (
                  <tr key={player.id} className="border-b border-gray-100 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700/50">
                    <td className="py-3 px-4 font-bold text-gray-400 dark:text-gray-600">#{player.number}</td>
                    <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">{player.name}</td>
                    <td className="py-3 px-4"><Badge className={getPositionColor(player.position)}>{player.position}</Badge></td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{player.nationality}</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{player.age}</td>
                    <td className="py-3 px-4">
                      <Badge className={player.status === "Active" ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100" : "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100"}>
                        {player.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-right"><Button variant="outline" size="sm">View</Button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SquadManagementPage;
