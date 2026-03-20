import { PageHeader } from "@/components/shared";
import React from "react";

import { Card, CardContent } from "@/components/ui/card";

const CompetitionScoutingPage: React.FC = () => (
  <div className="space-y-6 pb-12">
    <PageHeader title="Scouting Network" subtitle="View and manage scout assignments" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Competitions", href: "/competitions" }, { label: "Scouting Network" }]} />
    <Card className="shadow-elevation-1 bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
      <CardContent className="pt-6">
        <p className="text-sm text-muted-foreground dark:text-slate-400">Monitor scout activities and their assigned matches</p>
      </CardContent>
    </Card>
  </div>
);

export default CompetitionScoutingPage;
