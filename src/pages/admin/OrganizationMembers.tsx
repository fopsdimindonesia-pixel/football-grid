import { useState } from 'react';
import { Search, Plus, Eye, Edit2, Trash2, MoreVertical } from 'lucide-react';
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
import { StatusBadge } from '@/components/shared';

/**
 * OrganizationMembersPage - Pattern A (List/Table)
 * Manage members within an organization
 * Route: /org/:orgId/members
 * Access: Org Admin
 */
export default function OrganizationMembersPage() {
  const [selectedMembers, setSelectedMembers] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const mockMembers = [
    { id: '1', name: 'Ahmad Rizki', email: 'ahmad@pssi.com', role: 'Admin', department: 'Management', joinDate: '2023-01-15', status: 'active' },
    { id: '2', name: 'Budi Santoso', email: 'budi@pssi.com', role: 'Manager', department: 'Coaching', joinDate: '2023-02-20', status: 'active' },
    { id: '3', name: 'Citra Dewi', email: 'citra@pssi.com', role: 'Coach', department: 'Coaching', joinDate: '2023-03-10', status: 'active' },
    { id: '4', name: 'Doni Hermawan', email: 'doni@pssi.com', role: 'Staff', department: 'Operations', joinDate: '2023-04-05', status: 'active' },
    { id: '5', name: 'Eka Putri', email: 'eka@pssi.com', role: 'Coach', department: 'Coaching', joinDate: '2023-05-12', status: 'inactive' },
  ];

  const handleSelectAll = () => {
    if (selectedMembers.size === mockMembers.length) {
      setSelectedMembers(new Set());
    } else {
      setSelectedMembers(new Set(mockMembers.map(m => m.id)));
    }
  };

  const handleSelectMember = (id: string) => {
    const newSelected = new Set(selectedMembers);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedMembers(newSelected);
  };

  const filteredMembers = mockMembers.filter(member =>
    (searchQuery === '' || member.name.toLowerCase().includes(searchQuery.toLowerCase()) || member.email.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (roleFilter === 'all' || member.role === roleFilter) &&
    (statusFilter === 'all' || member.status === statusFilter)
  );

  const paginatedMembers = filteredMembers.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  const totalPages = Math.ceil(filteredMembers.length / pageSize);

  return (
    <div className="space-y-6 p-6">
      <div className="text-sm text-muted-foreground">
        Dashboard &gt; Organizations &gt; Members
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Organization Members</h1>
          <p className="text-muted-foreground mt-2">Manage and monitor organizational staff</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Add Member
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <Card className="p-4">
          <p className="text-muted-foreground text-sm">Total Members</p>
          <p className="text-2xl font-bold mt-1">{mockMembers.length}</p>
        </Card>
        <Card className="p-4">
          <p className="text-muted-foreground text-sm">Active</p>
          <p className="text-2xl font-bold text-green-600 mt-1">{mockMembers.filter(m => m.status === 'active').length}</p>
        </Card>
        <Card className="p-4">
          <p className="text-muted-foreground text-sm">Admins</p>
          <p className="text-2xl font-bold text-blue-600 mt-1">{mockMembers.filter(m => m.role === 'Admin').length}</p>
        </Card>
        <Card className="p-4">
          <p className="text-muted-foreground text-sm">Coaches</p>
          <p className="text-2xl font-bold text-purple-600 mt-1">{mockMembers.filter(m => m.role === 'Coach').length}</p>
        </Card>
      </div>

      <div className="flex gap-3 items-center flex-wrap bg-white p-4 rounded-lg border">
        <div className="relative flex-1 min-w-[250px]">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search members..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        <Select value={roleFilter} onValueChange={(value) => { setRoleFilter(value); setCurrentPage(1); }}>
          <SelectTrigger className="w-[120px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Roles</SelectItem>
            <SelectItem value="Admin">Admin</SelectItem>
            <SelectItem value="Manager">Manager</SelectItem>
            <SelectItem value="Coach">Coach</SelectItem>
            <SelectItem value="Staff">Staff</SelectItem>
          </SelectContent>
        </Select>

        <Select value={statusFilter} onValueChange={(value) => { setStatusFilter(value); setCurrentPage(1); }}>
          <SelectTrigger className="w-[120px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>

        <Button variant="outline" onClick={() => { setSearchQuery(''); setRoleFilter('all'); setStatusFilter('all'); setCurrentPage(1); }}>
          Reset Filters
        </Button>
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted border-b">
              <tr>
                <th className="p-3 text-left">
                  <Checkbox checked={selectedMembers.size === mockMembers.length} onCheckedChange={handleSelectAll} />
                </th>
                <th className="p-3 text-left font-semibold">Name</th>
                <th className="p-3 text-left font-semibold">Email</th>
                <th className="p-3 text-left font-semibold">Role</th>
                <th className="p-3 text-left font-semibold">Department</th>
                <th className="p-3 text-left font-semibold">Join Date</th>
                <th className="p-3 text-left font-semibold">Status</th>
                <th className="p-3 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedMembers.map((member) => (
                <tr key={member.id} className="border-b hover:bg-muted/50 transition-colors">
                  <td className="p-3">
                    <Checkbox checked={selectedMembers.has(member.id)} onCheckedChange={() => handleSelectMember(member.id)} />
                  </td>
                  <td className="p-3 font-medium">{member.name}</td>
                  <td className="p-3 text-sm text-muted-foreground">{member.email}</td>
                  <td className="p-3 text-sm">{member.role}</td>
                  <td className="p-3 text-sm">{member.department}</td>
                  <td className="p-3 text-sm text-muted-foreground">{member.joinDate}</td>
                  <td className="p-3">
                    <StatusBadge status={member.status as 'active' | 'inactive'} />
                  </td>
                  <td className="p-3">
                    <Button variant="ghost" size="sm"><MoreVertical className="w-4 h-4" /></Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="flex justify-between items-center">
        <div className="text-sm text-muted-foreground">
          Showing {paginatedMembers.length > 0 ? (currentPage - 1) * pageSize + 1 : 0} to {Math.min(currentPage * pageSize, filteredMembers.length)} of {filteredMembers.length}
        </div>
        <div className="flex gap-2">
          <Button variant="outline" disabled={currentPage === 1} onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}>
            Previous
          </Button>
          {Array.from({ length: totalPages }).map((_, idx) => (
            <Button
              key={idx}
              variant={currentPage === idx + 1 ? 'default' : 'outline'}
              size="sm"
              onClick={() => setCurrentPage(idx + 1)}
            >
              {idx + 1}
            </Button>
          ))}
          <Button variant="outline" disabled={currentPage === totalPages} onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
