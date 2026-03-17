import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const MatchVARReviewLogPage: React.FC = () => {
  const reviews = [
    { id: 1, minute: 12, incident: 'Possible handball in penalty area', original: 'No penalty', decision: 'No penalty', result: 'Upheld', videoRef: 'VAR0012' },
    { id: 2, minute: 35, incident: 'Goalkeeper foul', original: 'Handball outside area', decision: 'Penalty awarded', result: 'Overturned', videoRef: 'VAR0035' },
    { id: 3, minute: 67, incident: 'Offside position', original: 'Goal allowed', decision: 'Goal disallowed', result: 'Overturned', videoRef: 'VAR0067' },
  ];

  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">VAR / Video Review Log</h1>
        <p className="text-gray-600 dark:text-gray-400">Track all video-assisted referee decisions</p>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{review.minute}'  - {review.incident}</p>
                    <p className="text-sm text-muted-foreground">Video Ref: {review.videoRef}</p>
                  </div>
                  <Badge variant={review.result === 'Overturned' ? 'default' : 'secondary'}>
                    {review.result}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Original Decision</p>
                    <p className="font-medium text-gray-900 dark:text-white">{review.original}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Review Decision</p>
                    <p className="font-medium text-gray-900 dark:text-white">{review.decision}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <h3 className="font-semibold mb-4">Summary</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">3</p>
              <p className="text-sm text-muted-foreground">Total Reviews</p>
            </div>
            <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded">
              <p className="text-2xl font-bold text-green-600">1</p>
              <p className="text-sm text-muted-foreground">Overturned</p>
            </div>
            <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded">
              <p className="text-2xl font-bold text-blue-600">2</p>
              <p className="text-sm text-muted-foreground">Upheld</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MatchVARReviewLogPage;
