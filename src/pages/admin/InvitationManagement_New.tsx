import { useState } from 'react';
import { Search, Plus, Mail, MoreVertical, Send, Trash2 } from 'lucide-react';
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
 * InvitationManagementPage - Pattern A (List/Table)
 * Manage outstanding user invitations
 * Route: /org/invitations
 * Access: Org Admin
 */
export default function InvitationManagementPageNew() {
  const [selectedInvites, setSelectedInvites] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const mockInvitations = [
    { id: '1', email: 'new.coach@example.com', role: 'Coach', organization: 'PSSI Jakarta', sentDate: '2024-03-15', expires: '2024-04-15', resendCount: 0, status: 'pending' },
    { id: '2', email: 'manager@example.com', role: 'Manager', organization: 'PSSI Bandung', sentDate: '2024-03-10', expires: '2024-04-10', resendCount: 1, status: 'accepted' },
    { id: '3', email: 'staff@example.com', role: 'Staff', organization: 'PSSI Jakarta', sentDate: '2024-02-15', expires: '2024-03-15', resendCount: 2, status: 'expired' },
    { id: '4', email: 'trainer@example.com', role: 'Coach', organization: 'PSSI Medan', sentDate: '2024-03-14', expires: '2024-04-14', resendCount: 0, status: 'pending' },
    { id: '5', email: 'admin@example.com', role: 'Admin', organization: 'PSSI Surabaya', sentDate: '2024-03-12', expires: '2024-04-12', resendCount: 0, status: 'pending' },
  ];

  const handleSelectAll = () => {
    if (selectedInvites.size === mockInvitations.length) {
      setSelectedInvites(new Set());
    } else {
      setSelectedInvites(new Set(mockInvitations.map(inv => inv.id)));
    }
  };

  const handleSelectInvite = (id: string) => {
    const newSelected = new Set(selectedInvites);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedInvites(newSelected);
  };

  const filteredInvites = mockInvitations.filter(invite =>
    (searchQuery === '' || invite.email.toLowerCase().includes(searchQuery.toLowerCase()) || invite.organization.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (statusFilter === 'all' || invite.status === statusFilter)
  );

  const paginatedInvites = filteredInvites.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  const totalPages = Math.ceil(filteredInvites.length / pageSize);

  return (
    <div className="space-y-6 p-6">
      <div className="text-sm text-muted-foreground">
        Dashboard &gt; Organization &gt; Invitations
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Invitation Management</h1>
          <p className="text-muted-foreground mt-2">Manage pending user invitations</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          New Invitation
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <Card className="p-4">
          <p className="text-muted-foreground text-sm">Total Invites</p>
          <p className="text-2xl font-bold mt-1">{mockInvitations.length}</p>
        </Card>
        <Card className="p-4">
          <p className="text-muted-foreground text-sm">Pending</p>
          <p className="text-2xl font-bold text-orange-600 mt-1">{mockInvitations.filter(i => i.status === 'pending').length}</p>
        </Card>
        <Card className="p-4">
          <p className="text-muted-foreground text-sm">Accepted</p>
          <p className="text-2xl font-bold text-green-600 mt-1">{mockInvitations.filter(i => i.status === 'accepted').length}</p>
        </Card>
        <Card className="p-4">
          <p className="text-muted-foreground text-sm">Expired</p>
          <p className="text-2xl font-bold text-red-600 mt-1">{mockInvitations.filter(i => i.status === 'expired').length}</p>
        </Card>
      </div>

      <div className="flex gap-3 items-center flex-wrap bg-white p-4 rounded-lg border">
        <div className="relative flex-1 min-w-[250px]">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search invitations..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        <Select value={statusFilter} onValueChange={(value) => { setStatusFilter(value); setCurrentPage(1); }}>
          <SelectTrigger className="w-[120px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="accepted">Accepted</SelectItem>
            <SelectItem value="expired">Expired</SelectItem>
          </SelectContent>
        </Select>

        <Button variant="outline" onClick={() => { setSearchQuery(''); setStatusFilter('all'); setCurrentPage(1); }}>
          Reset Filters
        </Button>
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted border-b">
              <tr>
                <th className="p-3 text-left">
                  <Checkbox checked={selectedInvites.size === mockInvitations.length} onCheckedChange={handleSelectAll} />
                </th>
                <th className="p-3 text-left font-semibold">Email</th>
                <th className="p-3 text-left font-semibold">Role</th>
                <th className="p-3 text-left font-semibold">Organization</th>
                <th className="p-3 text-left font-semibold">Sent Date</th>
                <th className="p-3 text-left font-semibold">Expires</th>
                <th className="p-3 text-left font-semibold">Status</th>
                <th className="p-3 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedInvites.map((invite) => (
                <tr key={invite.id} className="border-b hover:bg-muted/50 transition-colors">
                  <td className="p-3">
                    <Checkbox checked={selectedInvites.has(invite.id)} onCheckedChange={() => handleSelectInvite(invite.id)} />
                  </td>
                  <td className="p-3 font-medium flex items-center gap-2">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    {invite.email}
                  </td>
                  <td className="p-3 text-sm">{invite.role}</td>
                  <td className="p-3 text-sm">{invite.organization}</td>
                  <td className="p-3 text-sm text-muted-foreground">{invite.sentDate}</td>
                  <td className="p-3 text-sm text-muted-foreground">{invite.expires}</td>
                  <td className="p-3">
                    <StatusBadge status={invite.status === 'pending' ? 'inactive' : invite.status === 'accepted' ? 'active' : 'inactive'} />
                  </td>
                  <td className="p-3">
                    <div className="flex gap-1">
                      {invite.status === 'pending' && (
                        <Button variant="ghost" size="sm" className="h-7 w-7 p-0" title="Resend">
                          <Send className="w-3 h-3 text-blue-600" />
                        </Button>
                      )}
                      <Button variant="ghost" size="sm" className="h-7 w-7 p-0" title="Delete">
                        <Trash2 className="w-3 h-3 text-red-600" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      <div className="flex justify-between items-center">
        <div className="text-sm text-muted-foreground">
          Showing {paginatedInvites.length > 0 ? (currentPage - 1) * pageSize + 1 : 0} to {Math.min(currentPage * pageSize, filteredInvites.length)} of {filteredInvites.length}
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
