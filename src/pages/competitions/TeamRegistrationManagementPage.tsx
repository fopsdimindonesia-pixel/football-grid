import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable, PageHeader } from "@/components/shared";

const TeamRegistrationManagementPage: React.FC = () => {
  const registrations = [
    { club: "FC Garuda", status: "approved", payment: "paid", docs: "complete", date: "2026-03-01" },
    { club: "Persija", status: "pending", payment: "paid", docs: "2/3", date: "2026-03-02" },
  ];

  return (
    <div className="space-y-6 pb-12">
      <PageHeader title="Team Registrations" subtitle="Manage team registration" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Competitions", href: "/competitions" }, { label: "Registrations" }]} />
      <Card className="shadow-elevation-1 bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardHeader className="pb-3">
          <CardTitle>Registered Teams</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-2">
            {registrations.map((reg, idx) => (
              <div key={idx} className="p-3 rounded-lg border border-muted dark:border-slate-600">
                <div className="flex justify-between items-center">
                  <span className="font-bold dark:text-slate-100">{reg.club}</span>
                  <span className="text-xs font-bold text-primary uppercase">{reg.status}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeamRegistrationManagementPage;
