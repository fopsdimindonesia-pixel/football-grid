import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

const CompetitionRulesEditorPage: React.FC = () => (
  <div className="space-y-6 pb-12">
    <PageHeader title="Rules Editor" subtitle="Edit competition rules and regulations" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Competitions", href: "/competitions" }, { label: "Rules" }]} />
    <Card className="shadow-elevation-1 bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
      <CardContent className="pt-6">
        <Textarea placeholder="Competition rules and regulations..." className="bg-white dark:bg-slate-700 dark:border-slate-600" rows={8} />
      </CardContent>
    </Card>
  </div>
);

export default CompetitionRulesEditorPage;
