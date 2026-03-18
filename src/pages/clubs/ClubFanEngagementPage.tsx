import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, BarChart3, MessageSquare, Target, Plus, TrendingUp } from "lucide-react";

const ClubFanEngagementPage: React.FC = () => {
  const campaigns = [
    {
      id: 1,
      name: "Match Day Experience 2024",
      type: "Experience",
      engagement: "85%",
      reach: "12,450",
      status: "Active",
      startDate: "2024-01-01",
    },
    {
      id: 2,
      name: "Fan Photo Contest",
      type: "Contest",
      engagement: "72%",
      reach: "8,320",
      status: "Active",
      startDate: "2024-01-15",
    },
    {
      id: 3,
      name: "Stadium Tour Promo",
      type: "Promotion",
      engagement: "68%",
      reach: "6,850",
      status: "Ended",
      startDate: "2023-12-01",
    },
    {
      id: 4,
      name: "Youth Academy Showcase",
      type: "Event",
      engagement: "91%",
      reach: "15,200",
      status: "Upcoming",
      startDate: "2024-02-10",
    },
  ];

  return (
    <div className="space-y-6 pb-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Fan Engagement</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage fan engagement campaigns and analytics</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700"><Plus className="w-4 h-4 mr-2" />Create Campaign</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6 text-center">
            <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <p className="text-sm text-gray-600 dark:text-gray-400">Total Followers</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">248K</p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6 text-center">
            <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <p className="text-sm text-gray-600 dark:text-gray-400">Growth This Month</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">+12%</p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6 text-center">
            <MessageSquare className="w-8 h-8 text-purple-600 mx-auto mb-2" />
            <p className="text-sm text-gray-600 dark:text-gray-400">Avg. Engagement</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">6.8%</p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardContent className="pt-6 text-center">
            <BarChart3 className="w-8 h-8 text-orange-600 mx-auto mb-2" />
            <p className="text-sm text-gray-600 dark:text-gray-400">Active Campaigns</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">4</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">Active Campaigns</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {campaigns.map((campaign) => {
            const getStatusColor = (status: string) => {
              if (status === "Active") return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100";
              if (status === "Upcoming") return "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100";
              return "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100";
            };

            return (
              <div
                key={campaign.id}
                className="p-4 border border-gray-200 dark:border-slate-700 rounded hover:shadow transition-shadow"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{campaign.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Started {campaign.startDate}</p>
                  </div>
                  <Badge className={getStatusColor(campaign.status)}>{campaign.status}</Badge>
                </div>

                <div className="grid grid-cols-4 gap-4 mb-3 text-sm">
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Type</p>
                    <p className="font-medium text-gray-900 dark:text-white">{campaign.type}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Engagement</p>
                    <p className="font-medium text-gray-900 dark:text-white">{campaign.engagement}</p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Reach</p>
                    <p className="font-medium text-gray-900 dark:text-white">{campaign.reach}</p>
                  </div>
                  <div>
                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                  </div>
                </div>

                <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${parseInt(campaign.engagement)}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">Social Media Performance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { platform: "X (Twitter)", followers: "85K", engagement: "7.2%" },
              { platform: "Instagram", followers: "120K", engagement: "8.5%" },
              { platform: "Facebook", followers: "43K", engagement: "4.1%" },
            ].map((social) => (
              <div key={social.platform} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-slate-700/50 rounded">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">{social.platform}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{social.followers} followers</p>
                </div>
                <p className="font-semibold text-gray-900 dark:text-white">{social.engagement}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">Fan Demographics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              { age: "13-24", percentage: 35 },
              { age: "25-34", percentage: 38 },
              { age: "35-44", percentage: 18 },
              { age: "45+", percentage: 9 },
            ].map((demo) => (
              <div key={demo.age}>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm text-gray-600 dark:text-gray-400">{demo.age}</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{demo.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${demo.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ClubFanEngagementPage;
