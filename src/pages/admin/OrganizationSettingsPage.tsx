import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Settings, Lock, CreditCard, Zap } from "lucide-react";

const OrganizationSettingsPage: React.FC = () => {
  const [settings, setSettings] = useState({
    allowPublicJoin: true,
    requireApproval: false,
    twoFactorAuth: true,
    apiAccess: false,
  });

  const handleToggle = (key: string) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Organization Settings</h1>
        <p className="text-gray-600 dark:text-gray-400">Manage your organization preferences and configurations</p>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-4 dark:bg-slate-700">
          <TabsTrigger value="general" className="flex items-center gap-2"><Settings className="w-4 h-4" />General</TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2"><Lock className="w-4 h-4" />Security</TabsTrigger>
          <TabsTrigger value="billing" className="flex items-center gap-2"><CreditCard className="w-4 h-4" />Billing</TabsTrigger>
          <TabsTrigger value="integrations" className="flex items-center gap-2"><Zap className="w-4 h-4" />Integrations</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">General Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Organization Profile</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="orgName" className="text-gray-700 dark:text-gray-300">Organization Name</Label>
                    <Input id="orgName" defaultValue="Elite Football Academy" className="dark:bg-slate-700 dark:border-slate-600 mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="orgWebsite" className="text-gray-700 dark:text-gray-300">Website URL</Label>
                    <Input id="orgWebsite" defaultValue="https://elite-academy.com" className="dark:bg-slate-700 dark:border-slate-600 mt-2" />
                  </div>
                </div>
              </div>

              <Separator className="dark:bg-slate-700" />

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Membership</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-gray-700 dark:text-gray-300">Allow Public Join</Label>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Allow users to join without invitation</p>
                    </div>
                    <Switch checked={settings.allowPublicJoin} onCheckedChange={() => handleToggle("allowPublicJoin")} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-gray-700 dark:text-gray-300">Require Approval</Label>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Approve new members before they join</p>
                    </div>
                    <Switch checked={settings.requireApproval} onCheckedChange={() => handleToggle("requireApproval")} />
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-6 border-t border-gray-200 dark:border-slate-700">
                <Button variant="outline">Cancel</Button>
                <Button className="bg-blue-600 hover:bg-blue-700">Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Security Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Authentication</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-gray-700 dark:text-gray-300">Two-Factor Authentication</Label>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Require 2FA for all members</p>
                    </div>
                    <Switch checked={settings.twoFactorAuth} onCheckedChange={() => handleToggle("twoFactorAuth")} />
                  </div>
                </div>
              </div>

              <Separator className="dark:bg-slate-700" />

              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-4">API Access</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-gray-700 dark:text-gray-300">Enable API Access</Label>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Allow third-party integrations</p>
                    </div>
                    <Switch checked={settings.apiAccess} onCheckedChange={() => handleToggle("apiAccess")} />
                  </div>
                </div>
              </div>

              <div className="flex gap-3 pt-6 border-t border-gray-200 dark:border-slate-700">
                <Button variant="outline">Cancel</Button>
                <Button className="bg-blue-600 hover:bg-blue-700">Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing">
          <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Billing Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <p className="text-sm text-blue-900 dark:text-blue-100">Current Plan: <strong>Professional</strong> - $99/month</p>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">Manage Plan</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations">
          <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-white">Integrations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">Configure third-party integrations and webhooks</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OrganizationSettingsPage;
