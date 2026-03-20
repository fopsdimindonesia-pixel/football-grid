import { PageHeader } from "@/components/shared";
import React from "react";

import { Card, CardContent } from "@/components/ui/card";

const CompetitionSponsorManagementPage: React.FC = () => (
  <div className="space-y-6 pb-12">
    <PageHeader title="Sponsor Management" subtitle="Manage sponsors and partnerships" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Competitions", href: "/competitions" }, { label: "Sponsors" }]} />
    <Card className="shadow-elevation-1 bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
      <CardContent className="pt-6">
        <p className="text-sm text-muted-foreground dark:text-slate-400">Sponsor tier management and deliverables tracking</p>
      </CardContent>
    </Card>
  </div>
);

export default CompetitionSponsorManagementPage;
