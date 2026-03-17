import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Smartphone, MessageSquare, Key, Shield, CheckCircle2 } from "lucide-react";

const TwoFactorAuthSetupPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("methods");
  const [authenticatorEnabled, setAuthenticatorEnabled] = useState(false);
  const [smsEnabled, setSmsEnabled] = useState(false);
  const [backupEnabled, setBackupEnabled] = useState(true);

  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Two-Factor Authentication</h1>
        <p className="text-gray-600 dark:text-gray-400">Enhance your account security with two-factor authentication</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded">
                <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-600 dark:text-gray-400">Security Level</p>
                <p className="text-lg font-bold text-gray-900 dark:text-white">Strong</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded">
                <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-600 dark:text-gray-400">2FA Status</p>
                <p className="text-lg font-bold text-green-600 dark:text-green-400">Active</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded">
                <Key className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="text-xs font-medium text-gray-600 dark:text-gray-400">Backup Codes</p>
                <p className="text-lg font-bold text-gray-900 dark:text-white">8 left</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="methods">Authentication Methods</TabsTrigger>
              <TabsTrigger value="backup">Backup Options</TabsTrigger>
            </TabsList>

            <TabsContent value="methods" className="space-y-6 mt-6">
              {/* Authenticator App */}
              <div className="border border-gray-200 dark:border-slate-700 rounded-lg p-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded mt-0.5">
                      <Smartphone className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Authenticator App</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Use Google Authenticator, Microsoft Authenticator, or Authy
                      </p>
                    </div>
                  </div>
                  <Badge className={authenticatorEnabled ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100" : ""}>
                    {authenticatorEnabled ? "Enabled" : "Disabled"}
                  </Badge>
                </div>

                {!authenticatorEnabled && (
                  <Button variant="outline" className="w-full">
                    Enable Authenticator
                  </Button>
                )}

                {authenticatorEnabled && (
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <p className="mb-2">Last configured: 3 months ago</p>
                    <Button variant="outline" size="sm">
                      Reconfigure
                    </Button>
                  </div>
                )}
              </div>

              {/* SMS Authentication */}
              <div className="border border-gray-200 dark:border-slate-700 rounded-lg p-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded mt-0.5">
                      <MessageSquare className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">SMS Text Message</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Receive authentication codes via SMS to your phone
                      </p>
                    </div>
                  </div>
                  <Badge className={smsEnabled ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100" : ""}>
                    {smsEnabled ? "Enabled" : "Disabled"}
                  </Badge>
                </div>

                {!smsEnabled && (
                  <Button variant="outline" className="w-full">
                    Enable SMS
                  </Button>
                )}

                {smsEnabled && (
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <p className="mb-2">Registered phone: +1 (555) 123-4567</p>
                    <Button variant="outline" size="sm">
                      Change Number
                    </Button>
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="backup" className="space-y-6 mt-6">
              <div className="border border-gray-200 dark:border-slate-700 rounded-lg p-4">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">Backup Codes</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Save these codes in a secure location. Use one if you lose access to your 2FA methods.
                    </p>
                  </div>
                  <Badge className={backupEnabled ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100" : ""}>
                    {backupEnabled ? "Active" : "Inactive"}
                  </Badge>
                </div>

                <div className="bg-gray-50 dark:bg-slate-700 p-4 rounded mb-4 font-mono text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <p>5F4K-3M9L-2X7Q</p>
                  <p>8B2W-9D6H-4T1R</p>
                  <p>7N8P-1Q5S-3V2K</p>
                  <p>6G4J-2L9M-5X3W</p>
                  <p>4H7F-8K2P-1R6Y</p>
                  <p>••••-••••-•••• (5 more codes)</p>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline">Download Codes</Button>
                  <Button variant="outline">Regenerate Codes</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
        <CardContent className="pt-6">
          <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Security Recommendations</h3>
          <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-2 list-disc list-inside">
            <li>Use an authenticator app as your primary 2FA method</li>
            <li>Keep backup codes in a secure location (password manager, safe, etc.)</li>
            <li>Regenerate backup codes every 6 months</li>
            <li>Never share your 2FA codes with anyone</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default TwoFactorAuthSetupPage;
