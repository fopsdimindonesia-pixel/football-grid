import React from "react";

import { Card, CardContent } from "@/components/ui/card";

const SchedulingEnginePage: React.FC = () => (
  <div className="space-y-6 pb-12">
    <PageHeader title="Scheduling Engine" subtitle="Auto-generate match schedule" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Competitions", href: "/competitions" }, { label: "Schedule" }]} />
    <Card className="shadow-elevation-1 bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
      <CardContent className="pt-6">
        <p className="text-sm text-muted-foreground dark:text-slate-400">Scheduling engine interface - 306 matches to schedule across 34 matchweeks</p>
      </CardContent>
    </Card>
  </div>
);

export default SchedulingEnginePage;
