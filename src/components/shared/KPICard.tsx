import { Card } from "@/components/ui/card";
import React from "react";

interface KPICardProps {
  label: string;
  value: string;
  icon?: React.ReactNode;
}

export function KPICard({ label, value, icon }: KPICardProps) {
  return (
    <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
            {label}
          </p>
          {icon && <div className="text-gray-600 dark:text-gray-400">{icon}</div>}
        </div>
        <p className="text-3xl font-bold text-gray-900 dark:text-white">
          {value}
        </p>
      </div>
    </Card>
  );
}
