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
        return "bg-destructive/10 text-destructive";
      case "Midfielder":
        return "bg-primary/10 text-primary";
      case "Defender":
        return "bg-secondary/10 text-secondary";
      case "Goalkeeper":
        return "bg-accent/10 text-accent";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const header = (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight mb-1">Squad Management</h1>
        <p className="text-sm text-muted-foreground">Manage team players and positions</p>
      </div>
      <div className="flex gap-2">
        <Button variant={viewMode === "grid" ? "default" : "outline"} size="sm" onClick={() => setViewMode("grid")}>
          <LayoutGrid className="w-4 h-4 mr-2" />Grid
        </Button>
        <Button variant={viewMode === "list" ? "default" : "outline"} size="sm" onClick={() => setViewMode("list")}>
          <List className="w-4 h-4 mr-2" />List
        </Button>
        <Button><Plus className="w-4 h-4 mr-2" />Add Player</Button>
      </div>
    </div>
  );

  if (viewMode === "grid") {
    return (
      <div className="space-y-6 pb-12">
        {header}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {players.map((player) => (
            <Card key={player.id} className="hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-3xl font-bold text-muted-foreground/40">#{player.number}</span>
                    <h3 className="font-semibold">{player.name}</h3>
                  </div>
                  <Badge className={getPositionColor(player.position)}>{player.position}</Badge>
                </div>
                <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                  <p>Age: {player.age}</p>
                  <p>Nationality: {player.nationality}</p>
                  <Badge className={player.status === "Active" ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"}>
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
      {header}
      <Card>
        <CardContent className="pt-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold text-muted-foreground">#</th>
                  <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Position</th>
                  <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Nationality</th>
                  <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Age</th>
                  <th className="text-left py-3 px-4 font-semibold text-muted-foreground">Status</th>
                  <th className="text-right py-3 px-4 font-semibold text-muted-foreground">Action</th>
                </tr>
              </thead>
              <tbody>
                {players.map((player) => (
                  <tr key={player.id} className="border-b hover:bg-muted/50">
                    <td className="py-3 px-4 font-bold text-muted-foreground/40">#{player.number}</td>
                    <td className="py-3 px-4 font-medium">{player.name}</td>
                    <td className="py-3 px-4"><Badge className={getPositionColor(player.position)}>{player.position}</Badge></td>
                    <td className="py-3 px-4 text-muted-foreground">{player.nationality}</td>
                    <td className="py-3 px-4 text-muted-foreground">{player.age}</td>
                    <td className="py-3 px-4">
                      <Badge className={player.status === "Active" ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"}>
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
