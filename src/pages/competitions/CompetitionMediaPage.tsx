import React from "react";

import { Card, CardContent } from "@/components/ui/card";

const CompetitionMediaPage: React.FC = () => (
  <div className="space-y-6 pb-12">
    <PageHeader title="Media Coverage" subtitle="Manage photographs and video highlights" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Competitions", href: "/competitions" }, { label: "Media Coverage" }]} />
    <Card className="shadow-elevation-1 bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
      <CardContent className="pt-6">
        <p className="text-sm text-muted-foreground dark:text-slate-400">Organize and manage competition media assets</p>
      </CardContent>
    </Card>
  </div>
);

export default CompetitionMediaPage;
