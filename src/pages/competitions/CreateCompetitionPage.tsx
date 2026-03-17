import React, { useState } from "react";

import { FormStepper } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronRight, ChevronLeft } from "lucide-react";

const CreateCompetitionPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    type: "league",
    description: "",
    logo: "",
    format: "round-robin",
    pointsSystem: "1w-1d",
    registrationStart: "",
    registrationEnd: "",
    maxTeams: 18,
    entryFee: 0,
    startDate: "",
    endDate: "",
    matchDuration: 90,
    subRules: "3-5",
    prizePool: 0,
  });

  const totalSteps = 6;

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNext = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="font-bold text-lg dark:text-slate-100">
              Basic Information
            </h3>
            <div className="space-y-3">
              <div>
                <label className="text-xs font-bold text-muted-foreground dark:text-slate-400 uppercase">
                  Competition Name
                </label>
                <Input
                  name="name"
                  placeholder="e.g., Liga Nusantara 2026"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 bg-white dark:bg-slate-700 dark:border-slate-600"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-muted-foreground dark:text-slate-400 uppercase">
                    Type
                  </label>
                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    className="w-full mt-1 h-10 px-3 rounded-md border border-muted dark:border-slate-600 bg-white dark:bg-slate-700 dark:text-slate-100"
                  >
                    <option value="league">League</option>
                    <option value="cup">Cup/Tournament</option>
                    <option value="group">Group Stage</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-muted-foreground dark:text-slate-400 uppercase">
                    Logo Upload
                  </label>
                  <Input
                    type="file"
                    name="logo"
                    onChange={handleInputChange}
                    className="mt-1 bg-white dark:bg-slate-700 dark:border-slate-600 text-xs"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-muted-foreground dark:text-slate-400 uppercase">
                  Description
                </label>
                <Textarea
                  name="description"
                  placeholder="Describe your competition..."
                  value={formData.description}
                  onChange={handleInputChange}
                  className="mt-1 bg-white dark:bg-slate-700 dark:border-slate-600"
                  rows={3}
                />
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="font-bold text-lg dark:text-slate-100">
              Rules & Format
            </h3>
            <div className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-muted-foreground dark:text-slate-400 uppercase">
                    Format
                  </label>
                  <select
                    name="format"
                    value={formData.format}
                    onChange={handleInputChange}
                    className="w-full mt-1 h-10 px-3 rounded-md border border-muted dark:border-slate-600 bg-white dark:bg-slate-700 dark:text-slate-100"
                  >
                    <option value="round-robin">Round Robin</option>
                    <option value="knockout">Knockout</option>
                    <option value="group-knockout">Group + Knockout</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-muted-foreground dark:text-slate-400 uppercase">
                    Points System
                  </label>
                  <select
                    name="pointsSystem"
                    value={formData.pointsSystem}
                    onChange={handleInputChange}
                    className="w-full mt-1 h-10 px-3 rounded-md border border-muted dark:border-slate-600 bg-white dark:bg-slate-700 dark:text-slate-100"
                  >
                    <option value="1w-1d">1W-1D (Win: 1, Draw: 1)</option>
                    <option value="3w-1d">3W-1D (Win: 3, Draw: 1)</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-xs font-bold text-muted-foreground dark:text-slate-400 uppercase">
                  Substitution Rules
                </label>
                <Input
                  name="subRules"
                  placeholder="e.g., 3-5 substitutes"
                  value={formData.subRules}
                  onChange={handleInputChange}
                  className="mt-1 bg-white dark:bg-slate-700 dark:border-slate-600"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-muted-foreground dark:text-slate-400 uppercase">
                  Match Duration (minutes)
                </label>
                <Input
                  type="number"
                  name="matchDuration"
                  value={formData.matchDuration}
                  onChange={handleInputChange}
                  className="mt-1 bg-white dark:bg-slate-700 dark:border-slate-600"
                />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <h3 className="font-bold text-lg dark:text-slate-100">
              Registration Settings
            </h3>
            <div className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-muted-foreground dark:text-slate-400 uppercase">
                    Registration Starts
                  </label>
                  <Input
                    type="date"
                    name="registrationStart"
                    value={formData.registrationStart}
                    onChange={handleInputChange}
                    className="mt-1 bg-white dark:bg-slate-700 dark:border-slate-600"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-muted-foreground dark:text-slate-400 uppercase">
                    Registration Ends
                  </label>
                  <Input
                    type="date"
                    name="registrationEnd"
                    value={formData.registrationEnd}
                    onChange={handleInputChange}
                    className="mt-1 bg-white dark:bg-slate-700 dark:border-slate-600"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-muted-foreground dark:text-slate-400 uppercase">
                    Maximum Teams
                  </label>
                  <Input
                    type="number"
                    name="maxTeams"
                    value={formData.maxTeams}
                    onChange={handleInputChange}
                    className="mt-1 bg-white dark:bg-slate-700 dark:border-slate-600"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-muted-foreground dark:text-slate-400 uppercase">
                    Entry Fee (Rp)
                  </label>
                  <Input
                    type="number"
                    name="entryFee"
                    value={formData.entryFee}
                    onChange={handleInputChange}
                    className="mt-1 bg-white dark:bg-slate-700 dark:border-slate-600"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="space-y-4">
            <h3 className="font-bold text-lg dark:text-slate-100">
              Competition Schedule
            </h3>
            <div className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-muted-foreground dark:text-slate-400 uppercase">
                    Competition Starts
                  </label>
                  <Input
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    className="mt-1 bg-white dark:bg-slate-700 dark:border-slate-600"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-muted-foreground dark:text-slate-400 uppercase">
                    Competition Ends
                  </label>
                  <Input
                    type="date"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleInputChange}
                    className="mt-1 bg-white dark:bg-slate-700 dark:border-slate-600"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case 5:
        return (
          <div className="space-y-4">
            <h3 className="font-bold text-lg dark:text-slate-100">
              Prizes & Awards
            </h3>
            <div className="space-y-3">
              <div>
                <label className="text-xs font-bold text-muted-foreground dark:text-slate-400 uppercase">
                  Total Prize Pool (Rp)
                </label>
                <Input
                  type="number"
                  name="prizePool"
                  value={formData.prizePool}
                  onChange={handleInputChange}
                  className="mt-1 bg-white dark:bg-slate-700 dark:border-slate-600"
                />
              </div>
              <p className="text-xs text-muted-foreground dark:text-slate-400">
                Champion: {(formData.prizePool * 0.5).toLocaleString()} (50%)
              </p>
              <p className="text-xs text-muted-foreground dark:text-slate-400">
                Runner-up: {(formData.prizePool * 0.3).toLocaleString()} (30%)
              </p>
              <p className="text-xs text-muted-foreground dark:text-slate-400">
                Third Place: {(formData.prizePool * 0.2).toLocaleString()} (20%)
              </p>
            </div>
          </div>
        );
      case 6:
        return (
          <div className="space-y-4">
            <h3 className="font-bold text-lg dark:text-slate-100">
              Review & Publish
            </h3>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-bold dark:text-slate-100">Name:</span>{" "}
                <span className="text-muted-foreground dark:text-slate-400">
                  {formData.name}
                </span>
              </p>
              <p>
                <span className="font-bold dark:text-slate-100">Type:</span>{" "}
                <span className="text-muted-foreground dark:text-slate-400">
                  {formData.type}
                </span>
              </p>
              <p>
                <span className="font-bold dark:text-slate-100">Teams:</span>{" "}
                <span className="text-muted-foreground dark:text-slate-400">
                  Up to {formData.maxTeams}
                </span>
              </p>
              <p>
                <span className="font-bold dark:text-slate-100">Start Date:</span>{" "}
                <span className="text-muted-foreground dark:text-slate-400">
                  {formData.startDate}
                </span>
              </p>
              <p>
                <span className="font-bold dark:text-slate-100">Prize Pool:</span>{" "}
                <span className="text-muted-foreground dark:text-slate-400">
                  Rp {formData.prizePool.toLocaleString()}
                </span>
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8 pb-12">
      <PageHeader
        title="Create Competition"
        subtitle="Set up a new competition or tournament"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Competitions", href: "/competitions" },
          { label: "Create" },
        ]}
      />

      <FormStepper
        steps={[
          "Basic Info",
          "Rules",
          "Registration",
          "Schedule",
          "Prizes",
          "Review",
        ]}
        currentStep={currentStep}
      />

      <Card className="shadow-elevation-1 bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          {renderStep()}
        </CardContent>
      </Card>

      <div className="flex gap-3 justify-between">
        <Button
          variant="outline"
          onClick={handlePrev}
          disabled={currentStep === 1}
          className="gap-2 font-bold"
        >
          <ChevronLeft className="h-4 w-4" /> Back
        </Button>
        <div className="flex gap-3">
          <Button variant="outline" className="font-bold">
            Save Draft
          </Button>
          {currentStep === totalSteps ? (
            <Button className="gap-2 font-bold">
              Publish Competition
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              className="gap-2 font-bold"
            >
              Next <ChevronRight className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateCompetitionPage;
