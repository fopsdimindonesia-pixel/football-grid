import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2, DollarSign, Calendar } from "lucide-react";

const ClubSponsorshipManagementPage: React.FC = () => {
  const sponsorships = [
    {
      id: 1,
      name: "TechCorp Industries",
      packageType: "Premium",
      value: "$500,000",
      startDate: "2024-01-01",
      endDate: "2024-12-31",
      status: "Active",
      contactPerson: "Robert Chen",
    },
    {
      id: 2,
      name: "Global Sports Gear",
      packageType: "Gold",
      value: "$250,000",
      startDate: "2024-02-01",
      endDate: "2025-01-31",
      status: "Active",
      contactPerson: "Emma Wilson",
    },
    {
      id: 3,
      name: "City Bank Finance",
      packageType: "Silver",
      value: "$150,000",
      startDate: "2024-03-01",
      endDate: "2024-12-31",
      status: "Negotiation",
      contactPerson: "James Johnson",
    },
    {
      id: 4,
      name: "National Airlines",
      packageType: "Gold",
      value: "$300,000",
      startDate: "2024-06-01",
      endDate: "2025-05-31",
      status: "Expired",
      contactPerson: "Sarah Martinez",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100";
      case "Negotiation":
        return "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100";
      case "Expired":
        return "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100";
      default:
        return "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100";
    }
  };

  return (
    <div className="space-y-6 pb-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Sponsorship Management</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage sponsor contracts and partnerships</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700"><Plus className="w-4 h-4 mr-2" />New Sponsorship</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6 text-center">
            <DollarSign className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="text-sm text-gray-600 dark:text-gray-400">Total Revenue</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">$1.2M</p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6 text-center">
            <Badge className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 mx-auto mb-2">Active</Badge>
            <p className="text-sm text-gray-600 dark:text-gray-400">Active Deals</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">3</p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6 text-center">
            <Badge className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 mx-auto mb-2">Negotiating</Badge>
            <p className="text-sm text-gray-600 dark:text-gray-400">In Negotiation</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">1</p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6 text-center">
            <Calendar className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <p className="text-sm text-gray-600 dark:text-gray-400">Avg. Contract</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">18 mo</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <div className="space-y-3">
            {sponsorships.map((sponsor) => (
              <div
                key={sponsor.id}
                className="p-4 border border-gray-200 dark:border-slate-700 rounded hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{sponsor.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Contact: {sponsor.contactPerson}</p>
                  </div>
                  <Badge className={getStatusColor(sponsor.status)}>{sponsor.status}</Badge>
                </div>
                <div className="grid grid-cols-4 gap-4 text-sm mb-3">
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Package</p>
                    <p className="font-medium text-gray-900 dark:text-white">{sponsor.packageType}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Value</p>
                    <p className="font-medium text-gray-900 dark:text-white">{sponsor.value}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Start Date</p>
                    <p className="font-medium text-gray-900 dark:text-white">{sponsor.startDate}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">End Date</p>
                    <p className="font-medium text-gray-900 dark:text-white">{sponsor.endDate}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm"><Edit className="w-4 h-4" /></Button>
                  <Button variant="outline" size="sm"><Trash2 className="w-4 h-4 text-red-600" /></Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClubSponsorshipManagementPage;
