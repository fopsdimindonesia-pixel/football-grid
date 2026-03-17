import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, ArrowLeft } from "lucide-react";

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        {!submitted ? (
          <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700 shadow-lg">
            <CardContent className="pt-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
                  <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Forgot Password?</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  No problem. Enter your email address and we'll send you a link to reset your password.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="dark:bg-slate-700 dark:border-slate-600"
                  />
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white h-10 mt-6">
                  Send Reset Link
                </Button>
              </form>

              <div className="pt-4 border-t border-gray-200 dark:border-slate-700 mt-6">
                <a
                  href="/login"
                  className="flex items-center justify-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 text-sm font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to login
                </a>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700 shadow-lg">
            <CardContent className="pt-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
                  <Mail className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Check Your Email</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  We've sent a password reset link to <strong>{email}</strong>
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">What's next?</h3>
                <ol className="text-sm text-blue-800 dark:text-blue-200 space-y-2 list-decimal list-inside">
                  <li>Check your email for the password reset link</li>
                  <li>Click the link to proceed with resetting your password</li>
                  <li>Enter your new password and confirm it</li>
                  <li>Log in with your new password</li>
                </ol>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-4">
                If you don't see the email, check your spam folder or{" "}
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium"
                >
                  try again
                </button>
                .
              </p>

              <a
                href="/login"
                className="block w-full text-center px-4 py-2 bg-gray-100 dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-200 dark:hover:bg-slate-600 font-medium"
              >
                Back to Login
              </a>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
