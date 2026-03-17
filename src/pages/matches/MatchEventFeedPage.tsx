import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const MatchEventFeedPage: React.FC = () => {
  const events = [
    { type: 'goal', minute: 41, team: 'Garuda', message: 'Ahmad scores! 🎉', author: 'Live Update', reactions: 245 },
    { type: 'card', minute: 38, team: 'PSM', message: 'Yellow card to Player X', author: 'Referee', reactions: 42 },
    { type: 'photo', minute: 35, message: 'Penalty incident captured', author: 'Media', reactions: 156 },
    { type: 'comment', minute: 30, message: 'Amazing defensive play by Garuda!', author: 'Fan User', reactions: 89 },
    { type: 'goal', minute: 12, team: 'Garuda', message: 'Ahmad opens the scoring! ⚽', author: 'Live Update', reactions: 512 },
  ];

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'goal':
        return '⚽';
      case 'card':
        return '🟨';
      case 'photo':
        return '📷';
      case 'comment':
        return '💬';
      default:
        return '•';
    }
  };

  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Match Event Feed</h1>
        <p className="text-gray-600 dark:text-gray-400">Live match updates & fan reactions</p>
      </div>

      <div className="space-y-4">
        {events.map((event, idx) => (
          <Card key={idx} className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700 hover:shadow-elevation-2 transition">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <div className="text-3xl flex-shrink-0">{getEventIcon(event.type)}</div>
                
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <Badge className="mr-2" variant={event.team ? 'default' : 'secondary'}>
                        {event.minute}'
                      </Badge>
                      {event.team && (
                        <Badge variant="outline" className="text-xs">
                          {event.team}
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">{event.author}</p>
                  </div>
                  
                  <p className="text-gray-900 dark:text-white font-medium mb-3">{event.message}</p>
                  
                  <div className="flex gap-4 text-sm">
                    <Button variant="ghost" size="sm" className="h-auto p-1">
                      👍 {event.reactions}
                    </Button>
                    <Button variant="ghost" size="sm" className="h-auto p-1">
                      💬 Reply
                    </Button>
                    <Button variant="ghost" size="sm" className="h-auto p-1">
                      🔗 Share
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <h3 className="font-semibold mb-3">Rate This Match</h3>
          <div className="flex gap-2 justify-center">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button key={rating} className="text-3xl hover:scale-125 transition">
                ⭐
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MatchEventFeedPage;
