import React from "react";
import { CheckCircle } from "lucide-react";

type Step = string | { label: string; number: number };

interface FormStepperProps {
  steps: Step[];
  currentStep: number;
}

export function FormStepper({ steps, currentStep }: FormStepperProps) {
  const normalised = steps.map((s, i) =>
    typeof s === "string" ? { label: s, number: i + 1 } : s
  );

  return (
    <div className="flex items-center justify-between">
      {normalised.map((step, index) => (
        <div key={step.number} className="flex items-center flex-1">
          <div className="flex items-center gap-3">
            {step.number < currentStep ? (
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                <CheckCircle className="w-6 h-6" />
              </div>
            ) : step.number === currentStep ? (
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold">
                {step.number}
              </div>
            ) : (
              <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground font-bold">
                {step.number}
              </div>
            )}
            <span
              className={`text-sm font-medium hidden md:inline ${
                step.number <= currentStep
                  ? "text-foreground"
                  : "text-muted-foreground"
              }`}
            >
              {step.label}
            </span>
          </div>
          {index < normalised.length - 1 && (
            <div
              className={`flex-1 h-1 mx-3 rounded ${
                step.number < currentStep
                  ? "bg-primary"
                  : "bg-muted"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
