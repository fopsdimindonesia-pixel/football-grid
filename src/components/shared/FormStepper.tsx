import React from "react";
import { CheckCircle, Circle } from "lucide-react";

interface Step {
  label: string;
  number: number;
}

interface FormStepperProps {
  steps: Step[];
  currentStep: number;
}

export function FormStepper({ steps, currentStep }: FormStepperProps) {
  return (
    <div className="flex items-center justify-between">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center flex-1">
          <div className="flex items-center gap-3">
            {step.number < currentStep ? (
              <div className="w-10 h-10 rounded-full bg-green-600 dark:bg-green-500 flex items-center justify-center text-white">
                <CheckCircle className="w-6 h-6" />
              </div>
            ) : step.number === currentStep ? (
              <div className="w-10 h-10 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white font-bold">
                {step.number}
              </div>
            ) : (
              <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 font-bold">
                {step.number}
              </div>
            )}
            <span
              className={`text-sm font-medium ${
                step.number <= currentStep
                  ? "text-gray-900 dark:text-white"
                  : "text-gray-600 dark:text-gray-400"
              }`}
            >
              {step.label}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`flex-1 h-1 mx-3 ${
                step.number < currentStep
                  ? "bg-green-600 dark:bg-green-500"
                  : "bg-gray-200 dark:bg-gray-800"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}
