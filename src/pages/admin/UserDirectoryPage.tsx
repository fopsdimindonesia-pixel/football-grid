import { useState } from 'react';
import { Search, Plus, Eye, Pencil, Trash2, Download, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { StatusBadge } from '@/components/shared/StatusBadge';

/**
 * UserDirectoryPage - Pattern A: List/Table
 * Displays all platform users with filtering, search, and bulk actions
 */
export default function UserDirectoryPage() {
  const [selectedUsers, setSelectedUsers] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  // Mock data - replace with API call via userService
  const users = [
    { id: '1', name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'active', joinDate: '2024-01-15' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'Manager', status: 'active', joinDate: '2024-02-10' },
    { id: '3', name: 'Bob Wilson', email: 'bob@example.com', role: 'User', status: 'inactive', joinDate: '2024-01-20' },
    { id: '4', name: 'Alice Brown', email: 'alice@example.com', role: 'Manager', status: 'active', joinDate: '2024-03-01' },
    { id: '5', name: 'Charlie Davis', email: 'charlie@example.com', role: 'User', status: 'active', joinDate: '2024-03-05' },
  ];

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedUsers(new Set(users.map(u => u.id)));
    } else {
      setSelectedUsers(new Set());
    }
  };

  const handleSelectUser = (userId: string, checked: boolean) => {
    const newSelected = new Set(selectedUsers);
    if (checked) {
      newSelected.add(userId);
    } else {
      newSelected.delete(userId);
    }
    setSelectedUsers(newSelected);
  };

  const totalUsers = users.length;
  const activeUsers = users.filter(u => u.status === 'active').length;
  const newUsers = users.filter(u => new Date(u.joinDate) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)).length;

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="text-sm text-muted-foreground">
        Dashboard &gt; Users & Organizations &gt; User Directory
      </div>

      {/* PAGE HEADER - Pattern A */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">User Directory</h1>
          <p className="text-muted-foreground mt-2">Manage all platform users and their access permissions</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Add New User
        </Button>
      </div>

      {/* STATS BAR */}
      <Card className="p-4 bg-card border">
        <div className="flex gap-8 text-sm">
          <div>
            <span className="text-muted-foreground">Total Users:</span>
            <span className="ml-2 font-semibold">{totalUsers}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Active:</span>
            <span className="ml-2 font-semibold text-green-600">{activeUsers}</span>
          </div>
          <div>
            <span className="text-muted-foreground">New (30 days):</span>
            <span className="ml-2 font-semibold text-blue-600">{newUsers}</span>
          </div>
        </div>
      </Card>

      {/* FILTER BAR - Pattern A */}
      <div className="flex gap-3 items-center flex-wrap">
        <div className="flex-1 min-w-[200px] relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search users..." className="pl-10" />
        </div>
        <Select defaultValue="all-roles">
          <SelectTrigger className="w-[150px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-roles">All Roles</SelectItem>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="manager">Manager</SelectItem>
            <SelectItem value="user">User</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="all-status">
          <SelectTrigger className="w-[150px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all-status">All Status</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
        <Button variant="outline" size="icon">
          <RotateCcw className="w-4 h-4" />
        </Button>
        <Button variant="outline" size="icon">
          <Download className="w-4 h-4" />
        </Button>
      </div>

      {/* TABLE - Pattern A */}
      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/50">
                <th className="px-4 py-3 text-left">
                  <Checkbox
                    checked={selectedUsers.size === users.length && users.length > 0}
                    onCheckedChange={handleSelectAll}
                  />
                </th>
                <th className="px-4 py-3 text-left font-medium">Name</th>
                <th className="px-4 py-3 text-left font-medium">Email</th>
                <th className="px-4 py-3 text-left font-medium">Role</th>
                <th className="px-4 py-3 text-left font-medium">Status</th>
                <th className="px-4 py-3 text-left font-medium">Join Date</th>
                <th className="px-4 py-3 text-left font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b hover:bg-muted/50 transition-colors">
                  <td className="px-4 py-3">
                    <Checkbox
                      checked={selectedUsers.has(user.id)}
                      onCheckedChange={(checked) => handleSelectUser(user.id, checked as boolean)}
                    />
                  </td>
                  <td className="px-4 py-3 font-medium">{user.name}</td>
                  <td className="px-4 py-3 text-muted-foreground">{user.email}</td>
                  <td className="px-4 py-3">{user.role}</td>
                  <td className="px-4 py-3">
                    <StatusBadge status={user.status} />
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">
                    {new Date(user.joinDate).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" title="View">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" title="Edit">
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive" title="Delete">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* PAGINATION - Pattern A */}
      <div className="flex items-center justify-between text-sm">
        <span className="text-muted-foreground">
          Showing page {currentPage} of {Math.ceil(users.length / pageSize)}
        </span>
        <div className="flex gap-2 items-center">
          <Button variant="outline" size="sm" disabled={currentPage === 1}>
            ← Prev
          </Button>
          <span className="text-muted-foreground">Page {currentPage}</span>
          <Button variant="outline" size="sm" disabled={currentPage >= Math.ceil(users.length / pageSize)}>
            Next →
          </Button>
          <Select defaultValue="10">
            <SelectTrigger className="w-[70px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
          <span className="text-muted-foreground">per page</span>
        </div>
      </div>
    </div>
  );
}
