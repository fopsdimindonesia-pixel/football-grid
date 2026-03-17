import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const MatchChecklistMobilePage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Pre-Match Preparation",
      items: ["Pitch orientation", "Teams briefing", "Coin toss"],
    },
    {
      title: "Equipment Check",
      items: ["Uniforms checked", "Ball condition verified", "Whistles tested"],
    },
    {
      title: "Ground Inspection",
      items: ["Goal nets secure", "Corner flags set", "No obstacles"],
    },
    {
      title: "Final Briefing",
      items: ["Lineups confirmed", "Team sheets collected", "Players ready"],
    },
  ];

  const currentStepData = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Match Day Checklist</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">Step-by-step preparation</p>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <div className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Progress</span>
              <span className="text-sm font-medium">{currentStep + 1}/{steps.length}</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
              <div className="bg-blue-600 h-3 rounded-full transition-all" style={{ width: `${progress}%` }}></div>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            {currentStepData.title}
          </h3>

          <div className="space-y-3 mb-6">
            {currentStepData.items.map((item, idx) => (
              <label key={idx} className="flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-700 rounded cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 transition">
                <input type="checkbox" className="w-5 h-5" />
                <span className="text-gray-900 dark:text-white">{item}</span>
              </label>
            ))}
          </div>

          <div className="flex gap-3">
            <Button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              variant="outline"
              disabled={currentStep === 0}
              className="flex-1"
            >
              ← Previous
            </Button>
            <Button
              onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
              disabled={currentStep === steps.length - 1}
              className="flex-1"
            >
              Next →
            </Button>
          </div>

          {currentStep === steps.length - 1 && (
            <Button className="w-full mt-3">✓ Complete Checklist</Button>
          )}
        </CardContent>
      </Card>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <h3 className="font-semibold mb-4">All Steps</h3>
          <div className="space-y-2">
            {steps.map((step, idx) => (
              <div
                key={idx}
                onClick={() => setCurrentStep(idx)}
                className={`p-3 rounded cursor-pointer transition ${
                  idx === currentStep
                    ? 'bg-blue-100 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-700'
                    : 'bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  {idx < currentStep && <CheckCircle2 className="w-5 h-5 text-green-600" />}
                  {idx === currentStep && <Badge variant="default" className="text-xs">Current</Badge>}
                  <span className="text-sm font-medium">{step.title}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MatchChecklistMobilePage;
