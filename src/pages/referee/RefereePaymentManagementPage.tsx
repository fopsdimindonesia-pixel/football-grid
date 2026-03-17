import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { KPICard } from "@/components/shared/KPICard";
import { DollarSign, Download, Filter, MoreHorizontal } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function RefereePaymentManagementPage() {
  const [statusFilter, setStatusFilter] = useState("all");

  const payments = [
    {
      id: 1,
      referee: "James Mitchell",
      matchCount: 4,
      totalAmount: 400,
      feePerMatch: 100,
      status: "Pending",
      date: "2025-01-15",
    },
    {
      id: 2,
      referee: "Sarah Connor",
      matchCount: 3,
      totalAmount: 300,
      feePerMatch: 100,
      status: "Processed",
      date: "2025-01-10",
    },
    {
      id: 3,
      referee: "Mike Thompson",
      matchCount: 5,
      totalAmount: 500,
      feePerMatch: 100,
      status: "Paid",
      date: "2025-01-01",
    },
    {
      id: 4,
      referee: "Emma Wilson",
      matchCount: 2,
      totalAmount: 200,
      feePerMatch: 100,
      status: "Pending",
      date: "2025-01-12",
    },
    {
      id: 5,
      referee: "David Brown",
      matchCount: 4,
      totalAmount: 400,
      feePerMatch: 100,
      status: "Paid",
      date: "2024-12-20",
    },
  ];

  const feeSchedule = [
    { level: "Premier League", fee: "£100" },
    { level: "EFL Championship", fee: "£75" },
    { level: "Lower Leagues", fee: "£50" },
    { level: "Women's Football", fee: "£60" },
  ];

  const stats = [
    {
      label: "Total Payable",
      value: "£1,800",
      icon: DollarSign,
      color: "blue",
    },
    {
      label: "Pending Payments",
      value: "£600",
      icon: DollarSign,
      color: "yellow",
    },
    {
      label: "Processed",
      value: "£300",
      icon: DollarSign,
      color: "blue",
    },
    {
      label: "Paid Out",
      value: "£900",
      icon: DollarSign,
      color: "green",
    },
  ];

  const filteredPayments =
    statusFilter === "all"
      ? payments
      : payments.filter((p) => p.status.toLowerCase() === statusFilter);

  const getStatusColor = (
    status: string
  ): "default" | "secondary" | "destructive" => {
    if (status === "Paid") return "default";
    if (status === "Processed") return "secondary";
    return "destructive";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Payment Management
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Track and process referee payments
          </p>
        </div>
        <Button>
          <Download className="w-4 h-4 mr-2" />
          Export to CSV
        </Button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <KPICard
            key={idx}
            label={stat.label}
            value={stat.value}
            icon={<stat.icon className="w-6 h-6" />}
          />
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Payment List */}
        <div className="lg:col-span-2 space-y-6">
          {/* Filters */}
          <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                <h3 className="font-bold text-gray-900 dark:text-white">
                  Filters
                </h3>
              </div>

              <div className="flex gap-2 flex-wrap">
                {["All", "Pending", "Processed", "Paid"].map((status) => (
                  <button
                    key={status}
                    onClick={() =>
                      setStatusFilter(status.toLowerCase() === "all" ? "all" : status.toLowerCase())
                    }
                    className={`px-4 py-2 rounded-lg font-medium transition ${
                      statusFilter === (status.toLowerCase() === "all" ? "all" : status.toLowerCase())
                        ? "bg-blue-600 dark:bg-blue-500 text-white"
                        : "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700"
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>
          </Card>

          {/* Payments Table */}
          <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 overflow-x-auto">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      Referee
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      Matches
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      Amount
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 dark:text-white">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                  {filteredPayments.map((payment) => (
                    <tr
                      key={payment.id}
                      className="hover:bg-gray-50 dark:hover:bg-gray-900 transition"
                    >
                      <td className="px-6 py-4">
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {payment.referee}
                        </p>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                        {payment.matchCount}
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-bold text-gray-900 dark:text-white">
                          £{payment.totalAmount}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          @ £{payment.feePerMatch}/match
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant={getStatusColor(payment.status)}>
                          {payment.status}
                        </Badge>
                      </td>
                      <td className="px-6 py-4">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Process Payment</DropdownMenuItem>
                            <DropdownMenuItem>Send Invoice</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Fee Schedule & Actions */}
        <div className="space-y-6">
          <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Fee Schedule
              </h3>

              <div className="space-y-3">
                {feeSchedule.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-800 rounded-lg"
                  >
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {item.level}
                    </span>
                    <span className="font-bold text-gray-900 dark:text-white">
                      {item.fee}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Actions
              </h3>

              <div className="space-y-2">
                <Button className="w-full">Process Batch Payment</Button>
                <Button variant="outline" className="w-full">
                  Generate Reports
                </Button>
                <Button variant="outline" className="w-full">
                  Payment Settings
                </Button>
              </div>
            </div>
          </Card>

          <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Summary
              </h3>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Total Referees
                  </span>
                  <span className="font-bold text-gray-900 dark:text-white">
                    5
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">
                    Pending Payments
                  </span>
                  <span className="font-bold text-yellow-600 dark:text-yellow-400">
                    2
                  </span>
                </div>
                <div className="flex justify-between pt-2 border-t border-gray-200 dark:border-gray-800">
                  <span className="text-gray-600 dark:text-gray-400">
                    Total Outstanding
                  </span>
                  <span className="font-bold text-gray-900 dark:text-white">
                    £600
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
