import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Plus, Edit, Trash2, Users } from "lucide-react";

const RoleManagementPage: React.FC = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedRole, setSelectedRole] = useState<number | null>(null);
  const [roleName, setRoleName] = useState("");
  const [permissions, setPermissions] = useState({
    read: false,
    write: false,
    delete: false,
    admin: false,
  });

  const roles = [
    {
      id: 1,
      name: "Administrator",
      description: "Full system access and permissions",
      users: 3,
      permissions: ["read", "write", "delete", "admin"],
      color: "red",
    },
    {
      id: 2,
      name: "Coach",
      description: "Can manage players and matches",
      users: 24,
      permissions: ["read", "write"],
      color: "blue",
    },
    {
      id: 3,
      name: "Player",
      description: "Can view own profile and statistics",
      users: 1230,
      permissions: ["read"],
      color: "green",
    },
    {
      id: 4,
      name: "Referee",
      description: "Can create and view match reports",
      users: 45,
      permissions: ["read", "write"],
      color: "yellow",
    },
    {
      id: 5,
      name: "Organization Admin",
      description: "Can manage organization settings",
      users: 12,
      permissions: ["read", "write", "delete"],
      color: "purple",
    },
  ];

  const allPermissions = [
    { key: "read", label: "Read Data", description: "View and read data" },
    { key: "write", label: "Write Data", description: "Create and modify data" },
    { key: "delete", label: "Delete Data", description: "Delete data and records" },
    { key: "admin", label: "Admin Access", description: "Manage system settings" },
  ];

  const getBadgeColor = (color: string) => {
    const colors: Record<string, string> = {
      red: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100",
      blue: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100",
      green: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100",
      yellow: "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100",
      purple: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100",
    };
    return colors[color] || colors.blue;
  };

  const handleEditRole = (role: typeof roles[0]) => {
    setSelectedRole(role.id);
    setRoleName(role.name);
    setOpenDialog(true);
  };

  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Role Management</h1>
          <p className="text-gray-600 dark:text-gray-400">Define roles and manage permissions</p>
        </div>
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogTrigger asChild>
            <Button
              className="bg-blue-600 hover:bg-blue-700"
              onClick={() => {
                setSelectedRole(null);
                setRoleName("");
                setPermissions({ read: false, write: false, delete: false, admin: false });
              }}
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Role
            </Button>
          </DialogTrigger>
          <DialogContent className="dark:bg-slate-800 dark:border-slate-700 max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-gray-900 dark:text-white">
                {selectedRole ? "Edit Role" : "Create New Role"}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-6 py-4">
              <div className="space-y-2">
                <Label htmlFor="roleName" className="text-gray-700 dark:text-gray-300">
                  Role Name
                </Label>
                <Input
                  id="roleName"
                  placeholder="e.g., Content Manager"
                  value={roleName}
                  onChange={(e) => setRoleName(e.target.value)}
                  className="dark:bg-slate-700 dark:border-slate-600"
                />
              </div>

              <div className="space-y-3">
                <Label className="text-gray-700 dark:text-gray-300">Permissions</Label>
                <div className="space-y-3">
                  {allPermissions.map((perm) => (
                    <label
                      key={perm.key}
                      className="flex items-start gap-3 p-3 border border-gray-200 dark:border-slate-700 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-slate-700/50"
                    >
                      <Checkbox
                        checked={permissions[perm.key as keyof typeof permissions]}
                        onCheckedChange={(checked) =>
                          setPermissions({
                            ...permissions,
                            [perm.key]: checked,
                          })
                        }
                      />
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white text-sm">{perm.label}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">{perm.description}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-4 border-t border-gray-200 dark:border-slate-700">
                <Button variant="outline" onClick={() => setOpenDialog(false)} className="flex-1">
                  Cancel
                </Button>
                <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                  {selectedRole ? "Update Role" : "Create Role"}
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {roles.map((role) => (
          <Card key={role.id} className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
            <CardContent className="pt-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Badge className={getBadgeColor(role.color)}>{role.name}</Badge>
                    <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                      <Users className="w-4 h-4" />
                      {role.users} users
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{role.description}</p>

                  <div className="flex gap-2 flex-wrap">
                    {role.permissions.map((perm) => (
                      <Badge key={perm} variant="outline" className="capitalize text-xs">
                        {perm}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 ml-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEditRole(role)}
                  >
                    <Edit className="w-4 h-4" />
                  </Button>
                  {role.id !== 1 && (
                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
        <CardContent className="pt-6">
          <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Permission Levels</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-800 dark:text-blue-200">
            <div>
              <p className="font-medium mb-1">Read</p>
              <p>Users can view and access data</p>
            </div>
            <div>
              <p className="font-medium mb-1">Write</p>
              <p>Users can create and modify data</p>
            </div>
            <div>
              <p className="font-medium mb-1">Delete</p>
              <p>Users can remove data permanently</p>
            </div>
            <div>
              <p className="font-medium mb-1">Admin</p>
              <p>Users can manage system settings</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RoleManagementPage;
