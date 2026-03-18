import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Download, BarChart3 } from "lucide-react";

const ClubMatchReportsPage: React.FC = () => {
  const [expandedReport, setExpandedReport] = useState<number | null>(null);

  const reports = [
    {
      id: 1,
      opponent: "Northern Stars",
      date: "2024-01-21",
      result: "3-1 Win",
      possession: "58%",
      shotsOnTarget: "8/12",
      passes: "485/612",
      tackles: "18",
      summary: "Dominant performance with excellent first-half display and clinical finishing.",
    },
    {
      id: 2,
      opponent: "Southern Eagles",
      date: "2024-01-14",
      result: "2-2 Draw",
      possession: "45%",
      shotsOnTarget: "6/14",
      passes: "412/598",
      tackles: "22",
      summary: "Resilient defensive display with comebacks from two goals down.",
    },
    {
      id: 3,
      opponent: "Eastern Dragons",
      date: "2024-01-07",
      result: "1-0 Win",
      possession: "52%",
      shotsOnTarget: "5/11",
      passes: "450/625",
      tackles: "20",
      summary: "Narrow victory with strong second-half control.",
    },
  ];

  const getResultColor = (result: string) => {
    if (result.includes("Win")) return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100";
    if (result.includes("Draw")) return "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100";
    return "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100";
  };

  return (
    <div className="space-y-6 pb-12">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Match Reports</h1>
        <p className="text-gray-600 dark:text-gray-400">Analysis and statistics from recent matches</p>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">Recent Matches</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {reports.map((report) => (
            <div key={report.id} className="border border-gray-200 dark:border-slate-700 rounded">
              <button
                className="w-full p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors"
                onClick={() => setExpandedReport(expandedReport === report.id ? null : report.id)}
              >
                <div className="flex items-center gap-4 flex-1 text-left">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">{report.opponent}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{report.date}</p>
                  </div>
                  <Badge className={getResultColor(report.result)}>{report.result}</Badge>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    expandedReport === report.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandedReport === report.id && (
                <div className="p-4 border-t border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-700/30">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Possession</p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">{report.possession}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Shots on Target</p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">{report.shotsOnTarget}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Passes Completed</p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">{report.passes}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Tackles</p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">{report.tackles}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Match Summary</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{report.summary}</p>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <BarChart3 className="w-4 h-4 mr-2" />
                      Detailed Stats
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download Report
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default ClubMatchReportsPage;
