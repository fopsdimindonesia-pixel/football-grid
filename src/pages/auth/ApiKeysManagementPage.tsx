import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Copy, Trash2, Eye, EyeOff, Plus, Calendar } from "lucide-react";

const ApiKeysManagementPage: React.FC = () => {
  const [showKey, setShowKey] = useState<number | null>(null);
  const [keyName, setKeyName] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  const apiKeys = [
    {
      id: 1,
      name: "Production API Key",
      key: "sk_prod_abc123def456ghi789jkl012mno345",
      createdAt: "2024-01-15",
      lastUsed: "2 hours ago",
      status: "Active",
      permissions: ["read", "write"],
    },
    {
      id: 2,
      name: "Development API Key",
      key: "sk_dev_xyz789uvw456rst123qwe890asd567",
      createdAt: "2024-02-01",
      lastUsed: "30 minutes ago",
      status: "Active",
      permissions: ["read", "write", "delete"],
    },
    {
      id: 3,
      name: "Webhook Integration",
      key: "sk_webhook_123abc456def789ghi012jkl345",
      createdAt: "2024-01-20",
      lastUsed: "Never",
      status: "Inactive",
      permissions: ["read"],
    },
  ];

  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">API Keys</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage your API keys and access tokens</p>
        </div>
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Create API Key
            </Button>
          </DialogTrigger>
          <DialogContent className="dark:bg-slate-800 dark:border-slate-700">
            <DialogHeader>
              <DialogTitle className="text-gray-900 dark:text-white">Create New API Key</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="keyName" className="text-gray-700 dark:text-gray-300">
                  API Key Name
                </Label>
                <Input
                  id="keyName"
                  placeholder="e.g., Production API Key"
                  value={keyName}
                  onChange={(e) => setKeyName(e.target.value)}
                  className="dark:bg-slate-700 dark:border-slate-600"
                />
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  This is for your reference only. Keep it meaningful.
                </p>
              </div>

              <div className="space-y-3">
                <Label className="text-gray-700 dark:text-gray-300">Permissions</Label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Read access</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Write access</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Delete access</span>
                  </label>
                </div>
              </div>

              <div className="flex gap-2 pt-4 border-t border-gray-200 dark:border-slate-700">
                <Button variant="outline" onClick={() => setOpenDialog(false)} className="flex-1">
                  Cancel
                </Button>
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Create</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
        <CardContent className="pt-6">
          <p className="text-sm text-yellow-900 dark:text-yellow-100">
            <strong>Security Warning:</strong> Keep your API keys secret and never commit them to version control. Rotate keys regularly for added security.
          </p>
        </CardContent>
      </Card>

      <div className="space-y-4">
        {apiKeys.map((apiKey) => (
          <Card key={apiKey.id} className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-gray-900 dark:text-white">{apiKey.name}</h3>
                    <Badge
                      className={
                        apiKey.status === "Active"
                          ? "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100"
                          : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300"
                      }
                    >
                      {apiKey.status}
                    </Badge>
                  </div>

                  <div className="bg-gray-50 dark:bg-slate-700 rounded p-3 mb-3 font-mono text-sm text-gray-700 dark:text-gray-300 flex items-center justify-between">
                    {showKey === apiKey.id ? (
                      <>
                        <span>{apiKey.key}</span>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => setShowKey(null)}
                          className="h-auto p-1 text-gray-500"
                        >
                          <EyeOff className="w-4 h-4" />
                        </Button>
                      </>
                    ) : (
                      <>
                        <span>••••••••••••••{apiKey.key.slice(-8)}</span>
                        <div className="flex gap-1">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setShowKey(apiKey.id)}
                            className="h-auto p-1 text-gray-500"
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-auto p-1 text-gray-500">
                            <Copy className="w-4 h-4" />
                          </Button>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Created {apiKey.createdAt}
                    </div>
                    <div>Last used {apiKey.lastUsed}</div>
                  </div>

                  <div className="mt-3 flex gap-2">
                    {apiKey.permissions.map((perm) => (
                      <Badge key={perm} variant="outline" className="capitalize">
                        {perm}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">API Key Best Practices</h3>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2 list-disc list-inside">
            <li>Use separate keys for development and production</li>
            <li>Rotate your keys at least every 90 days</li>
            <li>Grant minimum required permissions to each key</li>
            <li>Never share your API keys via email or messaging apps</li>
            <li>Remove keys you no longer use</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default ApiKeysManagementPage;
