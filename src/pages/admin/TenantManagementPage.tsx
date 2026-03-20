import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Edit, Trash2, Building2 } from "lucide-react";

const TenantManagementPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const tenants = [
    { id: 1, name: "Tenant A Corp", subscription: "Professional", users: 45, status: "Active", joinDate: "2023-01-15" },
    { id: 2, name: "Sports Elite Inc", subscription: "Enterprise", users: 128, status: "Active", joinDate: "2022-05-20" },
    { id: 3, name: "Local Team Ltd", subscription: "Basic", users: 12, status: "Active", joinDate: "2023-08-10" },
    { id: 4, name: "Academy Plus", subscription: "Professional", users: 67, status: "Inactive", joinDate: "2022-11-30" },
    { id: 5, name: "Global Sports", subscription: "Enterprise", users: 234, status: "Active", joinDate: "2021-03-25" },
  ];

  const getSubscriptionColor = (subscription: string) => {
    switch (subscription) {
      case "Enterprise":
        return "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100";
      case "Professional":
        return "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100";
      case "Basic":
        return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100";
      default:
        return "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100";
    }
  };

  return (
    <div className="space-y-6 pb-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Tenant Management</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage system tenants and subscriptions</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700"><Plus className="w-4 h-4 mr-2" />Add Tenant</Button>
      </div>

      <div className="flex gap-3 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input placeholder="Search tenants..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10 dark:bg-slate-700 dark:border-slate-600" />
        </div>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 dark:border-slate-700">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Tenant Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Subscription</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Users</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Status</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Join Date</th>
                  <th className="text-right py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tenants.map((tenant) => (
                  <tr key={tenant.id} className="border-b border-gray-100 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700/50">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-gray-400" />
                        <span className="font-medium text-gray-900 dark:text-white">{tenant.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4"><Badge className={getSubscriptionColor(tenant.subscription)}>{tenant.subscription}</Badge></td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{tenant.users}</td>
                    <td className="py-3 px-4">
                      <Badge className={tenant.status === "Active" ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100" : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100"}>
                        {tenant.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{tenant.joinDate}</td>
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

export default TenantManagementPage;
