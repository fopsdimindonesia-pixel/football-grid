import { useState } from 'react';
import { Search, Plus, Globe, MoreVertical, Eye } from 'lucide-react';
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
 * TenantManagementPage - Pattern A (List/Table)
 * Super admin view of all tenant organizations
 * Route: /super-admin/tenants
 * Access: Platform Super Admin
 */
export default function TenantManagementPageNew() {
  const [selectedTenants, setSelectedTenants] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [planFilter, setPlanFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const mockTenants = [
    { id: '1', name: 'PSSI Jakarta', domain: 'pssi-jakarta.com', plan: 'Professional', users: 45, storage: 125, billingStatus: 'active', monthlyFee: '$299', status: 'active', createdDate: '2023-01-15' },
    { id: '2', name: 'PSSI Bandung', domain: 'pssi-bandung.com', plan: 'Starter', users: 12, storage: 25, billingStatus: 'active', monthlyFee: '$99', status: 'active', createdDate: '2023-02-10' },
    { id: '3', name: 'PSSI Surabaya', domain: 'pssi-surabaya.com', plan: 'Enterprise', users: 120, storage: 500, billingStatus: 'overdue', monthlyFee: '$999', status: 'inactive', createdDate: '2023-03-05' },
  ];

  const handleSelectAll = () => {
    if (selectedTenants.size === mockTenants.length) {
      setSelectedTenants(new Set());
    } else {
      setSelectedTenants(new Set(mockTenants.map(t => t.id)));
    }
  };

  const handleSelectTenant = (id: string) => {
    const newSelected = new Set(selectedTenants);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedTenants(newSelected);
  };

  const filteredTenants = mockTenants.filter(tenant =>
    (searchQuery === '' || tenant.name.toLowerCase().includes(searchQuery.toLowerCase()) || tenant.domain.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (planFilter === 'all' || tenant.plan === planFilter)
  );

  const paginatedTenants = filteredTenants.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  const totalPages = Math.ceil(filteredTenants.length / pageSize);

  return (
    <div className="space-y-6 p-6">
      <div className="text-sm text-muted-foreground">
        Dashboard &gt; Super Admin &gt; Tenants
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tenant Management</h1>
          <p className="text-muted-foreground mt-2">Manage all organizations and their subscriptions</p>
        </div>
        <Button className="gap-2">
          <Plus className="w-4 h-4" />
          Add Tenant
        </Button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <Card className="p-4">
          <p className="text-muted-foreground text-sm">Total Tenants</p>
          <p className="text-2xl font-bold mt-1">{mockTenants.length}</p>
        </Card>
        <Card className="p-4">
          <p className="text-muted-foreground text-sm">Active</p>
          <p className="text-2xl font-bold text-green-600 mt-1">{mockTenants.filter(t => t.status === 'active').length}</p>
        </Card>
        <Card className="p-4">
          <p className="text-muted-foreground text-sm">Total Storage</p>
          <p className="text-2xl font-bold text-blue-600 mt-1">{mockTenants.reduce((sum, t) => sum + t.storage, 0)} GB</p>
        </Card>
        <Card className="p-4">
          <p className="text-muted-foreground text-sm">Monthly Revenue</p>
          <p className="text-2xl font-bold text-purple-600 mt-1">${mockTenants.reduce((sum, t) => sum + parseInt(t.monthlyFee.replace('$', '')), 0)}</p>
        </Card>
      </div>

      <div className="flex gap-3 items-center flex-wrap bg-white p-4 rounded-lg border">
        <div className="relative flex-1 min-w-[250px]">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search tenants..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        <Select value={planFilter} onValueChange={(value) => { setPlanFilter(value); setCurrentPage(1); }}>
          <SelectTrigger className="w-[120px]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Plans</SelectItem>
            <SelectItem value="Starter">Starter</SelectItem>
            <SelectItem value="Professional">Professional</SelectItem>
            <SelectItem value="Enterprise">Enterprise</SelectItem>
          </SelectContent>
        </Select>

        <Button variant="outline" onClick={() => { setSearchQuery(''); setPlanFilter('all'); setCurrentPage(1); }}>
          Reset Filters
        </Button>
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-muted border-b">
              <tr>
                <th className="p-3 text-left">
                  <Checkbox checked={selectedTenants.size === mockTenants.length} onCheckedChange={handleSelectAll} />
                </th>
                <th className="p-3 text-left font-semibold">Name</th>
                <th className="p-3 text-left font-semibold">Domain</th>
                <th className="p-3 text-left font-semibold">Plan</th>
                <th className="p-3 text-left font-semibold">Users</th>
                <th className="p-3 text-left font-semibold">Storage</th>
                <th className="p-3 text-left font-semibold">Billing Status</th>
                <th className="p-3 text-left font-semibold">Status</th>
                <th className="p-3 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedTenants.map((tenant) => (
                <tr key={tenant.id} className="border-b hover:bg-muted/50 transition-colors">
                  <td className="p-3">
                    <Checkbox checked={selectedTenants.has(tenant.id)} onCheckedChange={() => handleSelectTenant(tenant.id)} />
                  </td>
                  <td className="p-3 font-medium">{tenant.name}</td>
                  <td className="p-3 text-sm flex items-center gap-1">
                    <Globe className="w-3 h-3 text-muted-foreground" />
                    {tenant.domain}
                  </td>
                  <td className="p-3 text-sm">{tenant.plan}</td>
                  <td className="p-3 text-sm">{tenant.users}</td>
                  <td className="p-3 text-sm">{tenant.storage} GB</td>
                  <td className="p-3 text-sm">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${tenant.billingStatus === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                      {tenant.billingStatus === 'active' ? 'Paid' : 'Overdue'}
                    </span>
                  </td>
                  <td className="p-3">
                    <StatusBadge status={tenant.status as 'active' | 'inactive'} />
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
          Showing {paginatedTenants.length > 0 ? (currentPage - 1) * pageSize + 1 : 0} to {Math.min(currentPage * pageSize, filteredTenants.length)} of {filteredTenants.length}
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
