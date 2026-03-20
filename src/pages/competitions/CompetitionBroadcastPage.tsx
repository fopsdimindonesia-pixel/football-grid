import { PageHeader } from "@/components/shared";
import React from "react";

import { Card, CardContent } from "@/components/ui/card";

const CompetitionBroadcastPage: React.FC = () => (
  <div className="space-y-6 pb-12">
    <PageHeader title="Broadcast Schedule" subtitle="Live stream and broadcast management" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Competitions", href: "/competitions" }, { label: "Broadcast Schedule" }]} />
    <Card className="shadow-elevation-1 bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
      <CardContent className="pt-6">
        <p className="text-sm text-muted-foreground dark:text-slate-400">Schedule and manage competition broadcasts</p>
      </CardContent>
    </Card>
  </div>
);

export default CompetitionBroadcastPage;
