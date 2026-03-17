import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, AlertCircle } from "lucide-react";

const UserMergeToolPage: React.FC = () => {
  const [mergeStep, setMergeStep] = useState("select");

  const user1 = {
    id: "U001",
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+1234567890",
    role: "Coach",
    joinDate: "2020-06-15",
    lastLogin: "2024-01-19",
  };

  const user2 = {
    id: "U002",
    name: "John S. Smith",
    email: "john.s.smith@example.com",
    phone: "+1234567890",
    role: "Coach",
    joinDate: "2020-06-20",
    lastLogin: "2024-01-18",
  };

  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">User Merge Tool</h1>
        <p className="text-gray-600 dark:text-gray-400">Merge duplicate user accounts</p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm font-medium text-blue-900 dark:text-blue-100">Merge Operation</p>
          <p className="text-xs text-blue-800 dark:text-blue-200">Merging duplicate accounts will consolidate data and deactivate one account</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">Primary Account (Keep)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Name</p>
                  <p className="font-medium text-gray-900 dark:text-white">{user1.name}</p>
                </div>
                <Badge className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100">Keep</Badge>
              </div>
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Email</p>
                <p className="text-sm text-gray-900 dark:text-white">{user1.email}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Phone</p>
                <p className="text-sm text-gray-900 dark:text-white">{user1.phone}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Role</p>
                <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 mt-1">{user1.role}</Badge>
              </div>
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Last Login</p>
                <p className="text-sm text-gray-900 dark:text-white">{user1.lastLogin}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">Duplicate Account (Remove)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Name</p>
                  <p className="font-medium text-gray-900 dark:text-white">{user2.name}</p>
                </div>
                <Badge variant="outline" className="text-red-600">Remove</Badge>
              </div>
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Email</p>
                <p className="text-sm text-gray-900 dark:text-white">{user2.email}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Phone</p>
                <p className="text-sm text-gray-900 dark:text-white">{user2.phone}</p>
              </div>
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Role</p>
                <Badge className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 mt-1">{user2.role}</Badge>
              </div>
              <div>
                <p className="text-xs text-gray-600 dark:text-gray-400">Last Login</p>
                <p className="text-sm text-gray-900 dark:text-white">{user2.lastLogin}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">Merge Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-700/50 rounded">
              <span className="text-sm text-gray-700 dark:text-gray-300">Account data will be consolidated</span>
              <Check className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-700/50 rounded">
              <span className="text-sm text-gray-700 dark:text-gray-300">Duplicate account will be deactivated</span>
              <Check className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-slate-700/50 rounded">
              <span className="text-sm text-gray-700 dark:text-gray-300">Activity history will be preserved</span>
              <Check className="w-5 h-5 text-green-600" />
            </div>
          </div>

          <div className="flex gap-3 pt-6 border-t border-gray-200 dark:border-slate-700">
            <Button variant="outline">Cancel</Button>
            <Button className="bg-red-600 hover:bg-red-700"><X className="w-4 h-4 mr-2" />Confirm Merge</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserMergeToolPage;
