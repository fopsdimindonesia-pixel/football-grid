import React from "react";

import { Card, CardContent } from "@/components/ui/card";

const CompetitionAwardsManagementPage: React.FC = () => (
  <div className="space-y-6 pb-12">
    <PageHeader title="Awards Management" subtitle="Manage competition awards and voting" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Competitions", href: "/competitions" }, { label: "Awards" }]} />
    <Card className="shadow-elevation-1 bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
      <CardContent className="pt-6">
        <p className="text-sm text-muted-foreground dark:text-slate-400">MVP, Golden Boot, Fair Play award management</p>
      </CardContent>
    </Card>
  </div>
);

export default CompetitionAwardsManagementPage;
