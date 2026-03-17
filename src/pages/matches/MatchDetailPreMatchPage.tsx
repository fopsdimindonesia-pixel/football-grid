import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MatchDetailPreMatchPage: React.FC = () => {
  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8 text-center">
        <p className="text-sm text-muted-foreground mb-2">Liga Nusantara — Matchweek 22</p>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">FC Garuda vs PSM Makassar</h1>
        <p className="text-muted-foreground">📅 Saturday, March 20, 2026 | ⏰ 15:00 WIB | 🏟️ Gelora Bung Karno Stadium</p>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <Tabs defaultValue="headtohead">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="headtohead">Head to Head</TabsTrigger>
              <TabsTrigger value="form">Form</TabsTrigger>
              <TabsTrigger value="lineups">Lineups</TabsTrigger>
              <TabsTrigger value="preview">Preview</TabsTrigger>
            </TabsList>

            <TabsContent value="headtohead" className="space-y-4">
              <h3 className="font-semibold">Last 5 Matches</h3>
              <div className="space-y-2">
                <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded">
                  <p className="text-sm">Mar 2025: Garuda 2-1 PSM</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded">
                  <p className="text-sm">Nov 2024: PSM 0-0 Garuda</p>
                </div>
                <div className="p-3 bg-slate-50 dark:bg-slate-700 rounded">
                  <p className="text-sm">Aug 2024: Garuda 1-0 PSM</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">Garuda Wins: 2 | Draws: 2 | PSM Wins: 1</p>
            </TabsContent>

            <TabsContent value="form" className="space-y-4">
              <h3 className="font-semibold">Recent Form (Last 5)</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium mb-2">FC Garuda</p>
                  <div className="flex gap-1">
                    {['W', 'W', 'D', 'W', 'L'].map((result, i) => (
                      <span key={i} className={`w-8 h-8 flex items-center justify-center rounded text-xs font-bold ${
                        result === 'W' ? 'bg-green-600 text-white' : result === 'D' ? 'bg-yellow-600 text-white' : 'bg-red-600 text-white'
                      }`}>{result}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">PSM Makassar</p>
                  <div className="flex gap-1">
                    {['W', 'D', 'W', 'L', 'W'].map((result, i) => (
                      <span key={i} className={`w-8 h-8 flex items-center justify-center rounded text-xs font-bold ${
                        result === 'W' ? 'bg-green-600 text-white' : result === 'D' ? 'bg-yellow-600 text-white' : 'bg-red-600 text-white'
                      }`}>{result}</span>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="lineups">
              <p className="text-muted-foreground">Lineups will be updated after team submissions</p>
            </TabsContent>

            <TabsContent value="preview">
              <p className="text-muted-foreground">Pre-match analysis and tactical preview</p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Button>View Analytics</Button>
    </div>
  );
};

export default MatchDetailPreMatchPage;
