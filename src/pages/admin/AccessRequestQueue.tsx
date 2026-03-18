import { useState } from 'react';
import { Search, Plus, Check, X, MoreVertical } from 'lucide-react';
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
 * AccessRequestQueuePage - Pattern A (List/Table)
 * Review and manage access requests from users
 * Route: /admin/access-requests
 * Access: Platform Admin
 */
export default function AccessRequestQueuePage() {
  const [selectedRequests, setSelectedRequests] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const mockRequests = [
    { id: '1', user: 'Ahmad Rizki', email: 'ahmad@example.com', resource: 'Advanced Analytics', priority: 'high', status: 'pending', days: 2 },
    { id: '2', user: 'Budi Santoso', email: 'budi@example.com', resource: 'Medical Records Module', priority: 'high', status: 'pending', days: 1 },
    { id: '3', user: 'Citra Dewi', email: 'citra@example.com', resource: 'Financial Reports', priority: 'medium', status: 'approved', days: 5 },
    { id: '4', user: 'Doni Hermawan', email: 'doni@example.com', resource: 'Player Database', priority: 'low', status: 'rejected', days: 7 },
    { id: '5', user: 'Eka Putri', email: 'eka@example.com', resource: 'Scouting Tools', priority: 'medium', status: 'pending', days: 3 },
  ];

  const handleSelectAll = () => {
    if (selectedRequests.size === mockRequests.length) {
      setSelectedRequests(new Set());
    } else {
      setSelectedRequests(new Set(mockRequests.map(r => r.id)));
    }
  };

  const handleSelectRequest = (id: string) => {
    const newSelected = new Set(selectedRequests);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedRequests(newSelected);
  };

  const filteredRequests = mockRequests.filter(request =>
    (searchQuery === '' || request.user.toLowerCase().includes(searchQuery.toLowerCase()) || request.email.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (priorityFilter === 'all' || request.priority === priorityFilter) &&
    (statusFilter === 'all' || request.status === statusFilter)
  );

  const paginatedRequests = filteredRequests.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  const totalPages = Math.ceil(filteredRequests.length / pageSize);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700';
      case 'medium': return 'bg-yellow-100 text-yellow-700';
      case 'low': return 'bg-blue-100 text-blue-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6 p-6">
      <div className="text-sm text-muted-foreground">
        Dashboard &gt; Admin &gt; Access Requests
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Access Requests</h1>
          <p className="text-muted-foreground mt-2">Review and manage system access requests</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <Card className="p-4">
          <p className="text-muted-foreground text-sm">Total Requests</p>
          <p className="text-2xl font-bold mt-1">{mockRequests.length}</p>
        </Card>
        <Card className="p-4">
          <p className="text-muted-foreground text-sm">Pending</p>
          <p className="text-2xl font-bold text-orange-600 mt-1">{mockRequests.filter(r => r.status === 'pending').length}</p>
        </Card>
        <Card className="p-4">
          <p className="text-muted-foreground text-sm">Approved</p>
          <p className="text-2xl font-bold text-green-600 mt-1">{mockRequests.filter(r => r.status === 'approved').length}</p>
        </Card>
        <Card className="p-4">
          <p className="text-muted-foreground text-sm">Rejected</p>
          <p className="text-2xl font-bold text-red-600 mt-1">{mockRequests.filter(r => r.status === 'rejected').length}</p>
        </Card>
      </div>

      <div className="flex gap-3 items-center flex-wrap bg-white p-4 rounded-lg border">
        <div className="relative flex-1 min-w-[250px]">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search requests..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        <Select value={priorityFilter} onValueChange={(value) => { setPriorityFilter(value); setCurrentPage(1); }}>
          <SelectTrigger className="w-[120px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Priority</SelectItem>
            <SelectItem value="high">High</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="low">Low</SelectItem>
          </SelectContent>
        </Select>

        <Select value={statusFilter} onValueChange={(value) => { setStatusFilter(value); setCurrentPage(1); }}>
          <SelectTrigger className="w-[120px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="approved">Approved</SelectItem>
            <SelectItem value="rejected">Rejected</SelectItem>
          </SelectContent>
        </Select>

        <Button variant="outline" onClick={() => { setSearchQuery(''); setPriorityFilter('all'); setStatusFilter('all'); setCurrentPage(1); }}>
          Reset
        </Button>
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted border-b">
              <tr>
                <th className="p-3 text-left">
                  <Checkbox checked={selectedRequests.size === mockRequests.length} onCheckedChange={handleSelectAll} />
                </th>
                <th className="p-3 text-left font-semibold">User</th>
                <th className="p-3 text-left font-semibold">Email</th>
                <th className="p-3 text-left font-semibold">Resource</th>
                <th className="p-3 text-left font-semibold">Priority</th>
                <th className="p-3 text-left font-semibold">Status</th>
                <th className="p-3 text-left font-semibold">Days Pending</th>
                <th className="p-3 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedRequests.map((request) => (
                <tr key={request.id} className="border-b hover:bg-muted/50 transition-colors">
                  <td className="p-3">
                    <Checkbox checked={selectedRequests.has(request.id)} onCheckedChange={() => handleSelectRequest(request.id)} />
                  </td>
                  <td className="p-3 font-medium">{request.user}</td>
                  <td className="p-3 text-sm text-muted-foreground">{request.email}</td>
                  <td className="p-3 text-sm">{request.resource}</td>
                  <td className="p-3">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${getPriorityColor(request.priority)}`}>
                      {request.priority.charAt(0).toUpperCase() + request.priority.slice(1)}
                    </span>
                  </td>
                  <td className="p-3">
                    <StatusBadge status={request.status === 'pending' ? 'inactive' : request.status === 'approved' ? 'active' : 'inactive'} />
                  </td>
                  <td className="p-3 text-sm">{request.days} days</td>
                  <td className="p-3">
                    <div className="flex gap-1">
                      <Button variant="ghost" size="sm" className="h-7 w-7 p-0"><Check className="w-3 h-3 text-green-600" /></Button>
                      <Button variant="ghost" size="sm" className="h-7 w-7 p-0"><X className="w-3 h-3 text-red-600" /></Button>
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
          Showing {paginatedRequests.length > 0 ? (currentPage - 1) * pageSize + 1 : 0} to {Math.min(currentPage * pageSize, filteredRequests.length)} of {filteredRequests.length}
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
