import { PageHeader } from "@/components/shared";
import React from "react";

import { Card, CardContent } from "@/components/ui/card";

const CompetitionCalendarPublicPage: React.FC = () => (
  <div className="space-y-6 pb-12">
    <PageHeader title="Calendar" subtitle="Public match calendar" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Competitions", href: "/competitions" }, { label: "Calendar" }]} />
    <Card className="shadow-elevation-1 bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
      <CardContent className="pt-6">
        <p className="text-sm text-muted-foreground dark:text-slate-400">Monthly calendar view of all matches with color-coded events</p>
      </CardContent>
    </Card>
  </div>
);

export default CompetitionCalendarPublicPage;
