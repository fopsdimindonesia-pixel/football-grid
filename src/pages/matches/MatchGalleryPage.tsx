import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const MatchGalleryPage: React.FC = () => {
  const photos = [
    { id: 1, minute: 12, caption: "Goal celebration", type: 'photo' },
    { id: 2, minute: 23, caption: "Yellow card incident", type: 'photo' },
    { id: 3, minute: 35, caption: "Penalty moment", type: 'video' },
    { id: 4, minute: 41, caption: "Second goal", type: 'photo' },
  ];

  return (
    <div className="space-y-6 pb-12">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Match Gallery</h1>
          <p className="text-gray-600 dark:text-gray-400">Photos and video highlights</p>
        </div>
        <Button>+ Upload Media</Button>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.map((item) => (
              <div key={item.id} className="relative group cursor-pointer">
                <div className="w-full aspect-square bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
                  <div className="text-center">
                    <span className="text-4xl">{item.type === 'video' ? '🎬' : '📷'}</span>
                    <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">Minute {item.minute}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition rounded-lg flex items-center justify-center gap-2">
                  <Button size="sm" variant="secondary">View</Button>
                  <Button size="sm" variant="secondary">Download</Button>
                </div>
                <div className="mt-2">
                  <Badge variant="outline">{item.minute}'</Badge>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <h3 className="font-semibold mb-4">Media Pack</h3>
          <Button variant="outline" className="w-full">📥 Download All Media (ZIP - 450 MB)</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default MatchGalleryPage;
