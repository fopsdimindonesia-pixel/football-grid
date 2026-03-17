import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const ResetPasswordPage: React.FC = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState(false);

  const validatePassword = (pwd: string) => {
    const newErrors: string[] = [];
    if (pwd.length < 8) newErrors.push("Password must be at least 8 characters");
    if (!/[A-Z]/.test(pwd)) newErrors.push("Password must contain uppercase letters");
    if (!/[a-z]/.test(pwd)) newErrors.push("Password must contain lowercase letters");
    if (!/[0-9]/.test(pwd)) newErrors.push("Password must contain numbers");
    if (!/[!@#$%^&*]/.test(pwd)) newErrors.push("Password must contain special characters (!@#$%)");
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validatePassword(password);

    if (password !== confirmPassword) {
      validationErrors.push("Passwords do not match");
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }

    setSuccess(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700 shadow-lg">
          <CardContent className="pt-8">
            {!success ? (
              <>
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Reset Password</h1>
                  <p className="text-gray-600 dark:text-gray-400">Enter your new password below</p>
                </div>

                {errors.length > 0 && (
                  <div className="mb-6 space-y-2">
                    {errors.map((error, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg"
                      >
                        <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-red-700 dark:text-red-400">{error}</span>
                      </div>
                    ))}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-gray-700 dark:text-gray-300">
                      New Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        if (errors.length > 0) setErrors([]);
                      }}
                      className="dark:bg-slate-700 dark:border-slate-600"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-gray-700 dark:text-gray-300">
                      Confirm Password
                    </Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="dark:bg-slate-700 dark:border-slate-600"
                    />
                  </div>

                  <div className="bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg p-4 text-sm">
                    <p className="font-medium text-gray-900 dark:text-white mb-3">Password requirements:</p>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-xs">
                      <li className="flex items-center gap-2">
                        <span className={password.length >= 8 ? "text-green-600" : "text-gray-400"}>✓</span>
                        At least 8 characters
                      </li>
                      <li className="flex items-center gap-2">
                        <span className={/[A-Z]/.test(password) ? "text-green-600" : "text-gray-400"}>✓</span>
                        Uppercase letters
                      </li>
                      <li className="flex items-center gap-2">
                        <span className={/[a-z]/.test(password) ? "text-green-600" : "text-gray-400"}>✓</span>
                        Lowercase letters
                      </li>
                      <li className="flex items-center gap-2">
                        <span className={/[0-9]/.test(password) ? "text-green-600" : "text-gray-400"}>✓</span>
                        Numbers
                      </li>
                      <li className="flex items-center gap-2">
                        <span className={/[!@#$%^&*]/.test(password) ? "text-green-600" : "text-gray-400"}>✓</span>
                        Special characters (!@#$%)
                      </li>
                    </ul>
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white h-10 mt-6">
                    Reset Password
                  </Button>
                </form>
              </>
            ) : (
              <>
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Password Reset Successful</h1>
                  <p className="text-gray-600 dark:text-gray-400">Your password has been successfully reset</p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
                  <p className="text-sm text-green-900 dark:text-green-100">
                    You can now log in with your new password. For security reasons, all other sessions have been logged out.
                  </p>
                </div>

                <a
                  href="/login"
                  className="block w-full text-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium"
                >
                  Back to Login
                </a>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
