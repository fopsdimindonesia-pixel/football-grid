import React from "react";

import { Card, CardContent } from "@/components/ui/card";

const CompetitionPlayerRegistrationPage: React.FC = () => (
  <div className="space-y-6 pb-12">
    <PageHeader title="Player Registration" subtitle="Register players for competition" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Competitions", href: "/competitions" }, { label: "Player Reg" }]} />
    <Card className="shadow-elevation-1 bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
      <CardContent className="pt-6">
        <p className="text-sm text-muted-foreground dark:text-slate-400">Squad submission and eligibility verification</p>
      </CardContent>
    </Card>
  </div>
);

export default CompetitionPlayerRegistrationPage;
