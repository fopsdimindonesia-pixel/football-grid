import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2 } from "lucide-react";

const RegistrationPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    club: "",
    password: "",
    confirmPassword: "",
  });

  const steps = [
    { number: 1, title: "Personal Info" },
    { number: 2, title: "Organization" },
    { number: 3, title: "Password" },
    { number: 4, title: "Confirm" },
  ];

  const currentStep = steps.find((s) => s.number === step)!;
  const progressPercentage = (step / steps.length) * 100;

  const handleNext = () => {
    if (step < steps.length) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex flex-col items-center justify-center p-4 py-12">
      <div className="w-full max-w-2xl">
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700 shadow-lg">
          <CardContent className="pt-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Create Account</h1>
              <p className="text-gray-600 dark:text-gray-400">Step {step} of {steps.length}</p>
            </div>

            <div className="mb-6">
              <Progress value={progressPercentage} className="h-2" />
            </div>

            <div className="flex justify-between mb-8">
              {steps.map((s) => (
                <div
                  key={s.number}
                  className={`flex flex-col items-center flex-1 ${s.number !== steps.length ? "after:content-[''] after:flex-1 after:border-t-2 after:mx-2" : ""}`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold mb-2 ${
                      s.number < step
                        ? "bg-green-600 text-white"
                        : s.number === step
                          ? "bg-blue-600 text-white"
                          : "bg-gray-200 dark:bg-slate-700 text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    {s.number < step ? <CheckCircle2 className="w-5 h-5" /> : s.number}
                  </div>
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center">{s.title}</span>
                </div>
              ))}
            </div>

            <form className="space-y-4 mb-8">
              {step === 1 && (
                <div className="space-y-4 animate-in fade-in">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="dark:bg-slate-700 dark:border-slate-600"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="dark:bg-slate-700 dark:border-slate-600"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="dark:bg-slate-700 dark:border-slate-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="dark:bg-slate-700 dark:border-slate-600"
                    />
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 animate-in fade-in">
                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Select value={formData.role} onValueChange={(value) => handleInputChange("role", value)}>
                      <SelectTrigger className="dark:bg-slate-700 dark:border-slate-600">
                        <SelectValue placeholder="Select your role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="player">Player</SelectItem>
                        <SelectItem value="coach">Coach</SelectItem>
                        <SelectItem value="admin">Administrator</SelectItem>
                        <SelectItem value="referee">Referee</SelectItem>
                        <SelectItem value="parent">Parent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="club">Club/Organization</Label>
                    <Input
                      id="club"
                      placeholder="Your club name"
                      value={formData.club}
                      onChange={(e) => handleInputChange("club", e.target.value)}
                      className="dark:bg-slate-700 dark:border-slate-600"
                    />
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                    <p className="text-sm text-blue-900 dark:text-blue-100">
                      Your role determines what features and data you can access in SoccerOS.
                    </p>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-4 animate-in fade-in">
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                      className="dark:bg-slate-700 dark:border-slate-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                      className="dark:bg-slate-700 dark:border-slate-600"
                    />
                  </div>

                  <div className="bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg p-4 text-sm space-y-2">
                    <p className="font-medium text-gray-900 dark:text-white">Password requirements:</p>
                    <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-xs">
                      <li>✓ At least 8 characters</li>
                      <li>✓ Mix of uppercase and lowercase letters</li>
                      <li>✓ At least one number</li>
                      <li>✓ At least one special character (!@#$%)</li>
                    </ul>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="space-y-4 animate-in fade-in">
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                    <h3 className="font-semibold text-green-900 dark:text-green-100 mb-3">Verify your information</h3>
                    <div className="space-y-2 text-sm text-green-800 dark:text-green-200">
                      <p>
                        <strong>Name:</strong> {formData.firstName} {formData.lastName}
                      </p>
                      <p>
                        <strong>Email:</strong> {formData.email}
                      </p>
                      <p>
                        <strong>Role:</strong> {formData.role}
                      </p>
                      <p>
                        <strong>Organization:</strong> {formData.club}
                      </p>
                    </div>
                  </div>

                  <label className="flex items-center gap-2 text-sm cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-gray-700 dark:text-gray-300">
                      I agree to the Terms of Service and Privacy Policy
                    </span>
                  </label>
                </div>
              )}
            </form>

            <div className="flex gap-4 pt-6 border-t border-gray-200 dark:border-slate-700">
              <Button
                onClick={handlePrev}
                variant="outline"
                disabled={step === 1}
                className="flex-1"
              >
                Previous
              </Button>
              <Button
                onClick={handleNext}
                disabled={step === steps.length}
                className="flex-1 bg-blue-600 hover:bg-blue-700"
              >
                {step === steps.length ? "Complete" : "Next"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegistrationPage;
