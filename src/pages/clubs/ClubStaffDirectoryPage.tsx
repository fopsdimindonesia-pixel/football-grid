import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Mail, Phone } from "lucide-react";

const ClubStaffDirectoryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const staff = [
    { id: 1, name: "John Smith", role: "President", email: "john@club.com", phone: "+1234567890", department: "Administration" },
    { id: 2, name: "Sarah Johnson", role: "Head Coach", email: "sarah@club.com", phone: "+1234567891", department: "Coaching" },
    { id: 3, name: "Mike Wilson", role: "Assistant Coach", email: "mike@club.com", phone: "+1234567892", department: "Coaching" },
    { id: 4, name: "Lisa Brown", role: "Team Manager", email: "lisa@club.com", phone: "+1234567893", department: "Management" },
    { id: 5, name: "James Taylor", role: "Youth Coach", email: "james@club.com", phone: "+1234567894", department: "Youth Academy" },
    { id: 6, name: "Emma Davis", role: "Physiotherapist", email: "emma@club.com", phone: "+1234567895", department: "Medical" },
  ];

  return (
    <div className="space-y-6 pb-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Staff Directory</h1>
          <p className="text-gray-600 dark:text-gray-400">Club staff and management</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700"><Plus className="w-4 h-4 mr-2" />Add Staff</Button>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <Input placeholder="Search staff..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10 dark:bg-slate-700 dark:border-slate-600" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {staff.map((member) => (
          <Card key={member.id} className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700 hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{member.role}</p>
                </div>
              </div>
              <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 mb-3">{member.department}</Badge>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Mail className="w-4 h-4" />
                  {member.email}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Phone className="w-4 h-4" />
                  {member.phone}
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">View Profile</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ClubStaffDirectoryPage;
