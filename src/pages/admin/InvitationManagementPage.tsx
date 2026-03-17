import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Edit, Trash2, Mail, Clock } from "lucide-react";

const InvitationManagementPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const invitations = [
    { id: 1, email: "john.doe@example.com", role: "Coach", status: "Pending", sentDate: "2024-01-15", expiresIn: "5 days" },
    { id: 2, email: "sarah.smith@example.com", role: "Player", status: "Accepted", sentDate: "2024-01-10", expiresIn: "Accepted" },
    { id: 3, email: "mike.wilson@example.com", role: "Administrator", status: "Pending", sentDate: "2024-01-18", expiresIn: "2 days" },
    { id: 4, email: "lisa.brown@example.com", role: "Referee", status: "Expired", sentDate: "2023-12-15", expiresIn: "Expired" },
    { id: 5, email: "james.taylor@example.com", role: "Player", status: "Declined", sentDate: "2024-01-12", expiresIn: "Declined" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100";
      case "Accepted":
        return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100";
      case "Expired":
        return "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100";
      case "Declined":
        return "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100";
      default:
        return "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100";
    }
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
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Invitation Management</h1>
          <p className="text-gray-600 dark:text-gray-400">Track and manage user invitations</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700"><Plus className="w-4 h-4 mr-2" />Send Invitation</Button>
      </div>

      <div className="flex gap-3 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input placeholder="Search invitations..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10 dark:bg-slate-700 dark:border-slate-600" />
        </div>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-slate-700">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Email</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Role</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Sent Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Expires In</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {invitations.map((inv) => (
                  <tr key={inv.id} className="border-b border-gray-100 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700/50">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span className="font-medium text-gray-900 dark:text-white">{inv.email}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4"><Badge className={getRoleColor(inv.role)}>{inv.role}</Badge></td>
                    <td className="py-3 px-4"><Badge className={getStatusColor(inv.status)}>{inv.status}</Badge></td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{inv.sentDate}</td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />{inv.expiresIn}
                      </div>
                    </td>
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

export default InvitationManagementPage;
