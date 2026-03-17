import React from "react";

import { Card, CardContent } from "@/components/ui/card";

const CompetitionDisciplinaryPage: React.FC = () => (
  <div className="space-y-6 pb-12">
    <PageHeader title="Disciplinary Matters" subtitle="Manage cards, bans, and sanctions" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Competitions", href: "/competitions" }, { label: "Disciplinary Matters" }]} />
    <Card className="shadow-elevation-1 bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
      <CardContent className="pt-6">
        <p className="text-sm text-muted-foreground dark:text-slate-400">Track and manage disciplinary actions within competitions</p>
      </CardContent>
    </Card>
  </div>
);

export default CompetitionDisciplinaryPage;
