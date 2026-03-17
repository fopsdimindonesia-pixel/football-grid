import React from "react";
import { Card } from "@/components/ui/card";

interface ProfileHeaderProps {
  name: string;
  title?: string;
  description?: string;
  avatar?: string;
}

export function ProfileHeader({
  name,
  title,
  description,
  avatar,
}: ProfileHeaderProps) {
  return (
    <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="p-6">
        <div className="flex items-center gap-4">
          {avatar && (
            <img
              src={avatar}
              alt={name}
              className="w-16 h-16 rounded-full"
            />
          )}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              {name}
            </h2>
            {title && (
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {title}
              </p>
            )}
            {description && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
