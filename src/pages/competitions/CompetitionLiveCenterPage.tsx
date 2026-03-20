import { PageHeader } from "@/components/shared";
import React from "react";

import { Card, CardContent } from "@/components/ui/card";

const CompetitionLiveCenterPage: React.FC = () => (
  <div className="space-y-6 pb-12">
    <PageHeader title="Live Center" subtitle="Real-time competition updates" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Competitions", href: "/competitions" }, { label: "Live" }]} />
    <Card className="shadow-elevation-1 bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
      <CardContent className="pt-6">
        <p className="text-sm text-muted-foreground dark:text-slate-400">Real-time scores, live standings, and match events</p>
      </CardContent>
    </Card>
  </div>
);

export default CompetitionLiveCenterPage;
