import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Trash2, Mail, UserMinus } from "lucide-react";

const OrganizationMembersPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const members = [
    { id: 1, name: "Ahmed Malik", email: "ahmed@example.com", role: "Founder", joinDate: "2020-06-15", status: "Active" },
    { id: 2, name: "Sarah Johnson", email: "sarah@example.com", role: "Coach", joinDate: "2020-08-20", status: "Active" },
    { id: 3, name: "John Smith", email: "john@example.com", role: "Coach", joinDate: "2021-03-10", status: "Active" },
    { id: 4, name: "Lisa Brown", email: "lisa@example.com", role: "Player", joinDate: "2021-11-05", status: "Active" },
    { id: 5, name: "Mike Wilson", email: "mike@example.com", role: "Player", joinDate: "2022-01-15", status: "Inactive" },
  ];

  const getRoleColor = (role: string) => {
    switch (role) {
      case "Founder":
        return "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100";
      case "Coach":
        return "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100";
      case "Player":
        return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100";
      default:
        return "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100";
    }
  };

  return (
    <div className="space-y-6 pb-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Organization Members</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage members of Elite Football Academy</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700"><Plus className="w-4 h-4 mr-2" />Add Member</Button>
      </div>

      <div className="flex gap-3 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input placeholder="Search members..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10 dark:bg-slate-700 dark:border-slate-600" />
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
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Role</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Join Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Status</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {members.map((member) => (
                  <tr key={member.id} className="border-b border-gray-100 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700/50">
                    <td className="py-3 px-4 font-medium text-gray-900 dark:text-white">{member.name}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-600 dark:text-gray-400">{member.email}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4"><Badge className={getRoleColor(member.role)}>{member.role}</Badge></td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{member.joinDate}</td>
                    <td className="py-3 px-4">
                      <Badge className={member.status === "Active" ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100" : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100"}>
                        {member.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-right">
                      <Button variant="outline" size="sm" className="text-red-600"><UserMinus className="w-4 h-4" /></Button>
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

export default OrganizationMembersPage;
