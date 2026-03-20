import { PageHeader } from "@/components/shared";
import React from "react";

import { Card, CardContent } from "@/components/ui/card";

const CompetitionMediaCenterPage: React.FC = () => (
  <div className="space-y-6 pb-12">
    <PageHeader title="Media Center" subtitle="Manage competition media and press" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Competitions", href: "/competitions" }, { label: "Media" }]} />
    <Card className="shadow-elevation-1 bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
      <CardContent className="pt-6">
        <p className="text-sm text-muted-foreground dark:text-slate-400">Press releases, media gallery, highlights, and accreditation</p>
      </CardContent>
    </Card>
  </div>
);

export default CompetitionMediaCenterPage;
