import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, Search } from "lucide-react";

const ClubListAdminPage: React.FC = () => {
  const [clubs] = useState([
    { id: 1, name: "Metropolitan United", location: "London", members: 48, status: "Active", founded: 1998 },
    { id: 2, name: "Northern Stars", location: "Manchester", members: 42, status: "Active", founded: 2001 },
    { id: 3, name: "Southern Eagles", location: "Birmingham", members: 38, status: "Active", founded: 1995 },
    { id: 4, name: "Eastern Dragons", location: "Norwich", members: 35, status: "Inactive", founded: 2005 },
    { id: 5, name: "Western Tigers", location: "Bristol", members: 45, status: "Active", founded: 1999 },
  ]);

  return (
    <div className="space-y-6 pb-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Club Management</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage all registered clubs</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700"><Plus className="w-4 h-4 mr-2" />New Club</Button>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <div className="flex gap-2 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search clubs..."
                className="pl-10 dark:bg-slate-700 dark:border-slate-600"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-gray-200 dark:border-slate-700">
                <tr>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Club Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Location</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Members</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-slate-700">
                {clubs.map((club) => (
                  <tr key={club.id} className="hover:bg-gray-50 dark:hover:bg-slate-700/50">
                    <td className="py-4 px-4 text-gray-900 dark:text-white font-medium">{club.name}</td>
                    <td className="py-4 px-4 text-gray-600 dark:text-gray-400">{club.location}</td>
                    <td className="py-4 px-4 text-gray-600 dark:text-gray-400">{club.members}</td>
                    <td className="py-4 px-4">
                      <Badge className={club.status === "Active" ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100" : "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100"}>
                        {club.status}
                      </Badge>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm"><Edit className="w-4 h-4" /></Button>
                        <Button variant="ghost" size="sm"><Trash2 className="w-4 h-4 text-red-600" /></Button>
                      </div>
                    </td>
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

export default ClubListAdminPage;
