import React, { useMemo } from "react";

import { KPICard } from "@/components/shared";
import { Card, CardContent } from "@/components/ui/card";

const CompetitionFinancialSummaryPage: React.FC = () => {
  const kpis = useMemo(
    () => [
      { label: "Total Revenue", value: "Rp 12.2B", change: "+8.5%", accent: "text-primary" },
      { label: "Expenses", value: "Rp 4.8B", change: "-2.1%", accent: "text-red-600 dark:text-red-400" },
      { label: "Net Profit", value: "Rp 7.4B", change: "+15.2%", accent: "text-emerald-600 dark:text-emerald-400" },
      { label: "Sponsors", value: "8", change: "+2", accent: "text-blue-600 dark:text-blue-400" },
    ],
    []
  );

  return (
    <div className="space-y-6 pb-12">
      <PageHeader title="Financial Summary" subtitle="Competition financial analytics" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Competitions", href: "/competitions" }, { label: "Finance" }]} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <KPICard key={kpi.label} label={kpi.label} value={kpi.value} trend={kpi.change} accent={kpi.accent} />
        ))}
      </div>
      <Card className="shadow-elevation-1 bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <p className="text-sm text-muted-foreground dark:text-slate-400">Revenue and expense breakdown charts</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CompetitionFinancialSummaryPage;
