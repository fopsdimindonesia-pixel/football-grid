import { PageHeader } from "@/components/shared";
import React from "react";

import { Card, CardContent } from "@/components/ui/card";

const Groupo: React.FC = () => (
  <div className="space-y-6 pb-12">
    <PageHeader title="Group Stage Manager" subtitle="Manage group draw and assignments" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Competitions", href: "/competitions" }, { label: "Groups" }]} />
    <Card className="shadow-elevation-1 bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
      <CardContent className="pt-6">
        <p className="text-sm text-muted-foreground dark:text-slate-400">Drag-and-drop group assignment interface</p>
      </CardContent>
    </Card>
  </div>
);

export default Groupo;
