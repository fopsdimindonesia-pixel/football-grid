import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { KPICard } from "@/components/shared/KPICard";
import { DataTable } from "@/components/shared/DataTable";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Users, Star, CheckCircle, AlertCircle, MoreHorizontal, Edit2, Trash2, Eye
} from "lucide-react";
import { useState } from "react";

export default function RefereeListAdminPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [badgeFilter, setBadgeFilter] = useState("all");
  const [regionFilter, setRegionFilter] = useState("all");
  const [availabilityFilter, setAvailabilityFilter] = useState("all");

  const referees = [
    {
      id: "ref-001",
      name: "James Mitchell",
      badge: "Gold",
      region: "London Southeast",
      seasonMatches: 24,
      rating: 4.8,
      availability: "Available",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    },
    {
      id: "ref-002",
      name: "Sarah Connor",
      badge: "Silver",
      region: "Midlands",
      seasonMatches: 18,
      rating: 4.6,
      availability: "Available",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      id: "ref-003",
      name: "Mike Thompson",
      badge: "Gold",
      region: "North West",
      seasonMatches: 26,
      rating: 4.9,
      availability: "Available",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    },
    {
      id: "ref-004",
      name: "Emma Wilson",
      badge: "Bronze",
      region: "South Coast",
      seasonMatches: 12,
      rating: 4.4,
      availability: "On Leave",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
    },
    {
      id: "ref-005",
      name: "David Brown",
      badge: "Silver",
      region: "Yorkshire",
      seasonMatches: 20,
      rating: 4.7,
      availability: "Available",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    },
  ];

  const kpis = [
    {
      label: "Total Referees",
      value: "156",
      icon: Users,
      color: "blue",
    },
    {
      label: "Available Now",
      value: "142",
      icon: CheckCircle,
      color: "green",
    },
    {
      label: "Inactive",
      value: "8",
      icon: AlertCircle,
      color: "red",
    },
    {
      label: "Average Rating",
      value: "4.7",
      icon: Star,
      color: "yellow",
    },
  ];

  const filteredReferees = referees.filter((ref) => {
    const matchesSearch = ref.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesBadge = badgeFilter === "all" || ref.badge === badgeFilter;
    const matchesRegion =
      regionFilter === "all" || ref.region === regionFilter;
    const matchesAvailability =
      availabilityFilter === "all" ||
      ref.availability === availabilityFilter;

    return matchesSearch && matchesBadge && matchesRegion && matchesAvailability;
  });

  const columns = [
    {
      key: "avatar",
      label: "ID",
      render: (value: unknown, row: any) => (
        <div className="flex items-center gap-3">
          <Avatar className="w-8 h-8">
            <AvatarImage src={row.avatar} alt={row.name} />
            <AvatarFallback>{row.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            {row.name}
          </span>
        </div>
      ),
    },
    {
      key: "badge",
      label: "Badge Level",
      render: (value: string) => <Badge>{value}</Badge>,
    },
    {
      key: "region",
      label: "Region",
      render: (value: string) => (
        <span className="text-sm text-gray-600 dark:text-gray-400">{value}</span>
      ),
    },
    {
      key: "seasonMatches",
      label: "Matches (Season)",
      render: (value: number) => (
        <span className="text-sm font-medium text-gray-900 dark:text-white">
          {value}
        </span>
      ),
    },
    {
      key: "rating",
      label: "Avg. Rating",
      render: (value: number) => (
        <span className="text-sm font-bold text-yellow-600 dark:text-yellow-400">
          {value}/5
        </span>
      ),
    },
    {
      key: "availability",
      label: "Status",
      render: (value: string) => (
        <Badge
          variant={
            value === "Available" ? "default" : "secondary"
          }
        >
          {value}
        </Badge>
      ),
    },
    {
      key: "actions",
      label: "Actions",
      render: (value: unknown, row: any) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Eye className="w-4 h-4 mr-2" />
              View Profile
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Edit2 className="w-4 h-4 mr-2" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-600 dark:text-red-400">
              <Trash2 className="w-4 h-4 mr-2" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Referee Management
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Manage and assign match officials
          </p>
        </div>
        <Button>Add New Referee</Button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, idx) => (
          <KPICard
            key={idx}
            label={kpi.label}
            value={kpi.value}
            icon={<kpi.icon className="w-6 h-6" />}
          />
        ))}
      </div>

      {/* Filters */}
      <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="p-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
            Filters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Search
              </label>
              <Input
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Badge Level
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-900 dark:text-white"
                value={badgeFilter}
                onChange={(e) => setBadgeFilter(e.target.value)}
              >
                <option value="all">All Levels</option>
                <option value="Gold">Gold</option>
                <option value="Silver">Silver</option>
                <option value="Bronze">Bronze</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Region
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-900 dark:text-white"
                value={regionFilter}
                onChange={(e) => setRegionFilter(e.target.value)}
              >
                <option value="all">All Regions</option>
                <option value="London Southeast">London Southeast</option>
                <option value="Midlands">Midlands</option>
                <option value="North West">North West</option>
                <option value="South Coast">South Coast</option>
                <option value="Yorkshire">Yorkshire</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Status
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-900 dark:text-white"
                value={availabilityFilter}
                onChange={(e) => setAvailabilityFilter(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="Available">Available</option>
                <option value="On Leave">On Leave</option>
              </select>
            </div>
          </div>
        </div>
      </Card>

      {/* Table */}
      <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
              <tr>
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white"
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
              {filteredReferees.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-gray-50 dark:hover:bg-gray-900 transition"
                >
                  {columns.map((col) => (
                    <td key={col.key} className="px-6 py-4">
                      {col.render(row[col.key as keyof typeof row], row)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Showing {filteredReferees.length} of {referees.length} referees
        </p>
        <div className="flex gap-2">
          <Button variant="outline" disabled>
            Previous
          </Button>
          <Button variant="outline" disabled>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
