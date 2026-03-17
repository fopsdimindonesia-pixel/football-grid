import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select } from "@/components/ui/select";
import { MapPin, Users, Navigation } from "lucide-react";
import { useState } from "react";

export default function RefereeGeographyMapPage() {
  const [selectedRegion, setSelectedRegion] = useState("all");

  const regions = [
    { id: "london", name: "London Southeast", referees: 24, density: "High" },
    { id: "midlands", name: "Midlands", referees: 18, density: "Medium" },
    { id: "northwest", name: "North West", referees: 22, density: "High" },
    { id: "northeast", name: "North East", referees: 12, density: "Low" },
    { id: "southwest", name: "South West", referees: 14, density: "Medium" },
    { id: "yorkshire", name: "Yorkshire", referees: 16, density: "Medium" },
  ];

  const refereesByRegion = {
    london: [
      {
        id: "ref-001",
        name: "James Mitchell",
        city: "London",
        matches: 24,
        distance: "Local",
      },
      {
        id: "ref-002",
        name: "Sarah Connor",
        city: "Brighton",
        matches: 18,
        distance: "30 miles",
      },
      {
        id: "ref-006",
        name: "Lisa Anderson",
        city: "Reading",
        matches: 16,
        distance: "45 miles",
      },
    ],
    midlands: [
      {
        id: "ref-003",
        name: "Mike Thompson",
        city: "Birmingham",
        matches: 26,
        distance: "Local",
      },
      {
        id: "ref-008",
        name: "Tom Davies",
        city: "Coventry",
        matches: 14,
        distance: "20 miles",
      },
    ],
    northwest: [
      {
        id: "ref-004",
        name: "Emma Wilson",
        city: "Manchester",
        matches: 12,
        distance: "Local",
      },
      {
        id: "ref-005",
        name: "David Brown",
        city: "Liverpool",
        matches: 20,
        distance: "35 miles",
      },
    ],
  };

  const getDensityColor = (
    density: string
  ): "bg-red-100 dark:bg-red-950/30" | "bg-yellow-100 dark:bg-yellow-950/30" | "bg-blue-100 dark:bg-blue-950/30" => {
    if (density === "High") return "bg-red-100 dark:bg-red-950/30";
    if (density === "Medium") return "bg-yellow-100 dark:bg-yellow-950/30";
    return "bg-blue-100 dark:bg-blue-950/30";
  };

  const getDensityTextColor = (
    density: string
  ): "text-red-900 dark:text-red-300" | "text-yellow-900 dark:text-yellow-300" | "text-blue-900 dark:text-blue-300" => {
    if (density === "High") return "text-red-900 dark:text-red-300";
    if (density === "Medium") return "text-yellow-900 dark:text-yellow-300";
    return "text-blue-900 dark:text-blue-300";
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Referee Geography & Coverage
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          View referee distribution across regions for assignment optimization
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Map Visualization */}
        <div className="lg:col-span-2">
          <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Referee Coverage Map
              </h2>

              {/* Simplified Map */}
              <div className="w-full bg-gradient-to-b from-blue-100 dark:from-blue-950 to-green-100 dark:to-green-950 rounded-lg p-8 relative h-96 overflow-hidden">
                {/* Regions with density visualization */}
                <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-3 gap-2 p-4">
                  {regions.map((region) => (
                    <div
                      key={region.id}
                      className={`rounded-lg p-3 cursor-pointer transition hover:shadow-lg ${getDensityColor(region.density)}`}
                      onClick={() => setSelectedRegion(region.id)}
                    >
                      <p className={`text-xs font-bold ${getDensityTextColor(region.density)}`}>
                        {region.name}
                      </p>
                      <p className="text-xl font-bold text-gray-900 dark:text-white">
                        {region.referees}
                      </p>
                      <p className={`text-xs ${getDensityTextColor(region.density)}`}>
                        {region.density}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Legend */}
              <div className="mt-6 grid grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-red-100 dark:bg-red-950/30 border border-red-300 dark:border-red-900" />
                  <span className="text-gray-600 dark:text-gray-400">
                    High Density
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-yellow-100 dark:bg-yellow-950/30 border border-yellow-300 dark:border-yellow-900" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Medium Density
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-blue-100 dark:bg-blue-950/30 border border-blue-300 dark:border-blue-900" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Low Density
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Regional Summary */}
        <div>
          <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 h-fit">
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Coverage Summary
              </h3>

              <div className="space-y-3">
                {regions.map((region) => (
                  <button
                    key={region.id}
                    onClick={() => setSelectedRegion(region.id)}
                    className={`w-full text-left p-3 rounded-lg border transition ${
                      selectedRegion === region.id
                        ? "border-blue-600 dark:border-blue-500 bg-blue-50 dark:bg-blue-950/20"
                        : "border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-900 dark:text-white text-sm">
                          {region.name}
                        </p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          {region.referees} referees
                        </p>
                      </div>
                      <Badge
                        variant={region.density === "High" ? "destructive" : "secondary"}
                        className="text-xs"
                      >
                        {region.density}
                      </Badge>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Selected Region Details */}
      {selectedRegion !== "all" && (
        <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {regions.find((r) => r.id === selectedRegion)?.name} - Referees
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {refereesByRegion[selectedRegion as keyof typeof refereesByRegion]?.map(
                (ref) => (
                  <div
                    key={ref.id}
                    className="border border-gray-200 dark:border-gray-800 rounded-lg p-4"
                  >
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                      {ref.name}
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <span className="text-gray-600 dark:text-gray-400">
                          {ref.city}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Navigation className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <span className="text-gray-600 dark:text-gray-400">
                          {ref.distance}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <span className="text-gray-600 dark:text-gray-400">
                          {ref.matches} matches
                        </span>
                      </div>
                    </div>
                    <Button size="sm" className="w-full mt-4">
                      View Profile
                    </Button>
                  </div>
                )
              )}
            </div>
          </div>
        </Card>
      )}

      {/* Travel Distance Analysis */}
      <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Assignment Optimization
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                Travel Distance Recommendations
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">
                    ✓
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Prioritize local referees (within 30 miles) for routine matches
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">
                    ✓
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Use experienced referees for assignments beyond 60 miles
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 dark:text-green-400 font-bold">
                    ✓
                  </span>
                  <span className="text-gray-700 dark:text-gray-300">
                    Consider travel costs in budget planning for regional matches
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                Coverage Gaps
              </h3>
              <div className="space-y-2 text-sm">
                <div className="p-3 border border-yellow-200 dark:border-yellow-900 rounded-lg bg-yellow-50 dark:bg-yellow-950/20">
                  <p className="font-bold text-yellow-900 dark:text-yellow-300">
                    North East
                  </p>
                  <p className="text-xs text-yellow-800 dark:text-yellow-300">
                    Low referee density - consider recruitment
                  </p>
                </div>
                <div className="p-3 border border-green-200 dark:border-green-900 rounded-lg bg-green-50 dark:bg-green-950/20">
                  <p className="font-bold text-green-900 dark:text-green-300">
                    London & North West
                  </p>
                  <p className="text-xs text-green-800 dark:text-green-300">
                    Good coverage - utilize for major matches
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
