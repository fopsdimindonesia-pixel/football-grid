import React from "react";

import { Card, CardContent } from "@/components/ui/card";

const VenueManagementPage: React.FC = () => (
  <div className="space-y-6 pb-12">
    <PageHeader title="Venue Management" subtitle="Manage competition venues" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Competitions", href: "/competitions" }, { label: "Venues" }]} />
    <Card className="shadow-elevation-1 bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
      <CardContent className="pt-6">
        <p className="text-sm text-muted-foreground dark:text-slate-400">Stadium and venue information, booking calendar, capacity</p>
      </CardContent>
    </Card>
  </div>
);

export default VenueManagementPage;
