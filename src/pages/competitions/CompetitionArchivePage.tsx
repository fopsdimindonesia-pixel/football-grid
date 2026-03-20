import { PageHeader } from "@/components/shared";
import React from "react";

import { Card, CardContent } from "@/components/ui/card";

const CompetitionArchivePage: React.FC = () => (
  <div className="space-y-6 pb-12">
    <PageHeader title="Archive" subtitle="Past seasons and historical data" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Competitions", href: "/competitions" }, { label: "Archive" }]} />
    <Card className="shadow-elevation-1 bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
      <CardContent className="pt-6">
        <p className="text-sm text-muted-foreground dark:text-slate-400">Access historical competition data and past seasons</p>
      </CardContent>
    </Card>
  </div>
);

export default CompetitionArchivePage;
