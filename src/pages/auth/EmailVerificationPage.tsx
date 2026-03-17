import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Clock, CheckCircle2 } from "lucide-react";

const EmailVerificationPage: React.FC = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(300);
  const [verified, setVerified] = useState(false);
  const [resendDisabled, setResendDisabled] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setResendDisabled(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      document.getElementById(`otp-${index + 1}`)?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-${index - 1}`)?.focus();
    }
  };

  const handleVerify = () => {
    const otpValue = otp.join("");
    if (otpValue.length === 6) {
      setVerified(true);
    }
  };

  const handleResend = () => {
    setTimeLeft(300);
    setResendDisabled(true);
    setOtp(["", "", "", "", "", ""]);
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700 shadow-lg">
          <CardContent className="pt-8">
            <div className="text-center mb-8">
              {verified ? (
                <>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Email Verified!</h1>
                  <p className="text-gray-600 dark:text-gray-400">Your email has been successfully verified</p>
                </>
              ) : (
                <>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
                    <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Verify Email</h1>
                  <p className="text-gray-600 dark:text-gray-400">We sent a code to you@example.com</p>
                </>
              )}
            </div>

            {!verified && (
              <>
                <div className="mb-8">
                  <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4 block">
                    Enter verification code
                  </Label>

                  <div className="flex gap-2 justify-center mb-4">
                    {otp.map((digit, index) => (
                      <Input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleKeyDown(index, e)}
                        className="w-12 h-12 text-center text-lg font-semibold dark:bg-slate-700 dark:border-slate-600"
                      />
                    ))}
                  </div>

                  <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                    <Clock className="w-4 h-4" />
                    <span>
                      Code expires in {minutes}:{seconds.toString().padStart(2, "0")}
                    </span>
                  </div>

                  <Button onClick={handleVerify} className="w-full bg-blue-600 hover:bg-blue-700 text-white h-10">
                    Verify Email
                  </Button>
                </div>

                <div className="border-t border-gray-200 dark:border-slate-700 pt-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 text-center mb-4">
                    Didn't receive the code?
                  </p>

                  <Button
                    onClick={handleResend}
                    disabled={resendDisabled}
                    variant="outline"
                    className="w-full"
                  >
                    {resendDisabled ? `Resend in ${Math.ceil(timeLeft / 60)}s` : "Resend Code"}
                  </Button>
                </div>
              </>
            )}

            {verified && (
              <div className="space-y-4 pt-4">
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
                  <p className="text-sm text-green-900 dark:text-green-100">
                    Your account is now fully verified. You can now access all features of SoccerOS.
                  </p>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Continue to Dashboard</Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EmailVerificationPage;
