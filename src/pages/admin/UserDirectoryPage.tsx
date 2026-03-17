import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Edit, Trash2, Mail, Phone } from "lucide-react";

const UserDirectoryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const users = [
    { id: 1, name: "John Smith", email: "john@example.com", phone: "+1 (555) 123-4567", role: "Administrator", status: "Active", joinDate: "2024-01-15" },
    { id: 2, name: "Sarah Johnson", email: "sarah@example.com", phone: "+1 (555) 234-5678", role: "Coach", status: "Active", joinDate: "2024-02-01" },
    { id: 3, name: "Michael Chen", email: "michael@example.com", phone: "+1 (555) 345-6789", role: "Player", status: "Inactive", joinDate: "2024-01-20" },
    { id: 4, name: "Emma Wilson", email: "emma@example.com", phone: "+1 (555) 456-7890", role: "Referee", status: "Active", joinDate: "2024-03-01" },
    { id: 5, name: "David Brown", email: "david@example.com", phone: "+1 (555) 567-8901", role: "Coach", status: "Active", joinDate: "2024-02-15" },
  ];

  const getStatusColor = (status: string) => {
    if (status === "Active") return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100";
    return "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100";
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Administrator":
        return "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100";
      case "Coach":
        return "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100";
      case "Player":
        return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100";
      case "Referee":
        return "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100";
      default:
        return "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100";
    }
  };

  return (
    <div className="space-y-6 pb-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">User Directory</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage system users and their roles</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700"><Plus className="w-4 h-4 mr-2" />Add User</Button>
      </div>

      <div className="flex gap-3 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input placeholder="Search users..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10 dark:bg-slate-700 dark:border-slate-600" />
        </div>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-slate-700">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Email</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Phone</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Role</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Joined</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b border-gray-100 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700/50">
                    <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">{user.name}</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{user.email}</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{user.phone}</td>
                    <td className="py-3 px-4"><Badge className={getRoleColor(user.role)}>{user.role}</Badge></td>
                    <td className="py-3 px-4"><Badge className={getStatusColor(user.status)}>{user.status}</Badge></td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{user.joinDate}</td>
                    <td className="py-3 px-4 text-right flex justify-end gap-2">
                      <Button variant="outline" size="sm"><Edit className="w-4 h-4" /></Button>
                      <Button variant="outline" size="sm" className="text-red-600"><Trash2 className="w-4 h-4" /></Button>
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

export default UserDirectoryPage;
