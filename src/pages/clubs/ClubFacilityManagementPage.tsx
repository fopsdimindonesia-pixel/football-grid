import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, MapPin, Users, Zap } from "lucide-react";

const ClubFacilityManagementPage: React.FC = () => {
  const [facilities] = useState([
    { id: 1, name: "Main Pitch", type: "Grass", capacity: 100, status: "Available", lastMaintenance: "2024-01-15" },
    { id: 2, name: "Training Ground", type: "Artificial", capacity: 80, status: "In Use", lastMaintenance: "2024-01-18" },
    { id: 3, name: "Gym", type: "Equipment", capacity: 40, status: "Available", lastMaintenance: "2024-01-10" },
    { id: 4, name: "Young Players Pitch", type: "Grass", capacity: 50, status: "Available", lastMaintenance: "2024-01-12" },
    { id: 5, name: "Indoor Hall", type: "Indoor", capacity: 60, status: "Available", lastMaintenance: "2024-01-08" },
  ]);

  const getStatusColor = (status: string) => {
    if (status === "Available") return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100";
    return "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100";
  };

  return (
    <div className="space-y-6 pb-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Facility Management</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage club facilities and bookings</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700"><Plus className="w-4 h-4 mr-2" />Add Facility</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {facilities.map((facility) => (
          <Card key={facility.id} className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-gray-900 dark:text-white">{facility.name}</h3>
                <Badge className={getStatusColor(facility.status)}>{facility.status}</Badge>
              </div>
              <div className="space-y-2 mb-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">Type: {facility.type}</p>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Users className="w-4 h-4" />
                  Capacity: {facility.capacity}
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Last maintenance: {facility.lastMaintenance}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1"><Edit className="w-4 h-4" /></Button>
                <Button variant="outline" size="sm" className="flex-1"><Trash2 className="w-4 h-4 text-red-600" /></Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">Maintenance Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {facilities.map((facility) => (
              <div key={facility.id} className="p-3 bg-gray-50 dark:bg-slate-700/50 rounded flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{facility.name}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Last: {facility.lastMaintenance}</p>
                </div>
                <Button variant="outline" size="sm">Schedule</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClubFacilityManagementPage;
