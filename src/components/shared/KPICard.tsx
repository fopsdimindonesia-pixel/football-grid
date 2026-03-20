import { Card } from "@/components/ui/card";
import React from "react";

interface KPICardProps {
  label: string;
  value: string;
  icon?: React.ReactNode;
  trend?: string;
  accent?: string;
}

export function KPICard({ label, value, icon, trend, accent }: KPICardProps) {
  return (
    <Card className="border bg-card">
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            {label}
          </p>
          {icon && <div className="text-muted-foreground">{icon}</div>}
        </div>
        <p className={`text-3xl font-bold tabular-nums ${accent || ""}`}>
          {value}
        </p>
        {trend && (
          <p className="text-xs text-muted-foreground mt-1">{trend}</p>
        )}
      </div>
    </Card>
  );
}
