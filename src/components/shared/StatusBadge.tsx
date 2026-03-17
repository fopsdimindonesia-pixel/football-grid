import React from "react";
import { Badge } from "@/components/ui/badge";

interface StatusBadgeProps {
  status: "active" | "inactive" | "pending" | "completed" | "error";
  label?: string;
}

export function StatusBadge({ status, label }: StatusBadgeProps) {
  const statusConfig = {
    active: { variant: "default" as const, text: "Active" },
    inactive: { variant: "secondary" as const, text: "Inactive" },
    pending: { variant: "secondary" as const, text: "Pending" },
    completed: { variant: "default" as const, text: "Completed" },
    error: { variant: "destructive" as const, text: "Error" },
  };

  const config = statusConfig[status];

  return (
    <Badge variant={config.variant}>
      {label || config.text}
    </Badge>
  );
}
