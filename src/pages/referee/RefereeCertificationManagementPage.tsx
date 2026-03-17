import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle, Download, Upload, Clock, CheckCircle2 } from "lucide-react";

export default function RefereeCertificationManagementPage() {
  const certifications = [
    {
      id: 1,
      type: "Premier League",
      level: "Gold",
      issuer: "FA",
      issueDate: "2024-01-15",
      expiryDate: "2025-01-15",
      status: "active",
      daysToExpiry: 15,
    },
    {
      id: 2,
      type: "EFL Championship",
      level: "Gold",
      issuer: "FA",
      issueDate: "2024-01-15",
      expiryDate: "2025-01-15",
      status: "active",
      daysToExpiry: 15,
    },
    {
      id: 3,
      type: "International Matches",
      level: "Silver",
      issuer: "UEFA",
      issueDate: "2023-06-20",
      expiryDate: "2026-06-20",
      status: "active",
      daysToExpiry: 518,
    },
    {
      id: 4,
      type: "VAR Certification",
      level: "Gold",
      issuer: "FA",
      issueDate: "2023-11-01",
      expiryDate: "2024-11-01",
      status: "expired",
      daysToExpiry: -71,
    },
  ];

  const getStatusColor = (
    status: string,
    daysToExpiry: number
  ): "default" | "secondary" | "destructive" => {
    if (status === "expired") return "destructive";
    if (daysToExpiry < 30 && daysToExpiry > 0) return "secondary";
    return "default";
  };

  const getStatusText = (status: string, daysToExpiry: number): string => {
    if (status === "expired") return "Expired";
    if (daysToExpiry < 30 && daysToExpiry > 0)
      return `Expires in ${daysToExpiry} days`;
    if (daysToExpiry > 0) return "Active";
    return "Expired";
  };

  const renewalInfo = {
    process: [
      {
        step: 1,
        title: "Request Renewal",
        description:
          "Submit renewal request when your certification is within 90 days of expiry",
      },
      {
        step: 2,
        title: "Assessment",
        description:
          "Pass fitness and practical assessment tests to maintain standards",
      },
      {
        step: 3,
        title: "Documentation",
        description: "Update medical records and necessary documentation",
      },
      {
        step: 4,
        title: "Issuance",
        description: "Receive new certification upon approval",
      },
    ],
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Certification Management
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          View, manage, and renew your referee certifications
        </p>
      </div>

      {/* Alerts */}
      {certifications.some((c) => c.status === "expired") && (
        <Alert className="border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20">
          <AlertCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
          <AlertDescription className="text-red-800 dark:text-red-300">
            You have 1 expired certification. Please renew it immediately to
            continue refereeing.
          </AlertDescription>
        </Alert>
      )}

      {certifications.some((c) => c.daysToExpiry < 30 && c.daysToExpiry > 0) && (
        <Alert className="border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950/20">
          <Clock className="h-4 w-4 text-amber-600 dark:text-amber-400" />
          <AlertDescription className="text-amber-800 dark:text-amber-300">
            Some of your certifications are expiring soon. Start the renewal
            process to avoid interruption.
          </AlertDescription>
        </Alert>
      )}

      {/* Active Certifications */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Active Certifications
        </h2>
        <div className="space-y-4">
          {certifications
            .filter((c) => c.status === "active")
            .map((cert) => (
              <Card
                key={cert.id}
                className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950"
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {cert.type}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        {cert.level} | Issued by {cert.issuer}
                      </p>
                    </div>
                    <Badge variant={getStatusColor(cert.status, cert.daysToExpiry)}>
                      {getStatusText(cert.status, cert.daysToExpiry)}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Issue Date
                      </p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {cert.issueDate}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Expiry Date
                      </p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {cert.expiryDate}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Valid For
                      </p>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {Math.floor(cert.daysToExpiry / 365)} years{" "}
                        {cert.daysToExpiry % 365} days
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Status
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                        <p className="font-semibold text-green-600 dark:text-green-400">
                          Valid
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download Certificate
                    </Button>
                    {cert.daysToExpiry < 90 && cert.daysToExpiry > 0 && (
                      <Button size="sm">Start Renewal</Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
        </div>
      </div>

      {/* Expired Certifications */}
      {certifications.some((c) => c.status === "expired") && (
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Expired Certifications
          </h2>
          <div className="space-y-4">
            {certifications
              .filter((c) => c.status === "expired")
              .map((cert) => (
                <Card
                  key={cert.id}
                  className="border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/20"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {cert.type}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {cert.level} | Issued by {cert.issuer}
                        </p>
                      </div>
                      <Badge variant="destructive">Expired</Badge>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Issue Date
                        </p>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {cert.issueDate}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Expiry Date
                        </p>
                        <p className="font-semibold text-red-600 dark:text-red-400">
                          {cert.expiryDate}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Expired
                        </p>
                        <p className="font-semibold text-red-600 dark:text-red-400">
                          {Math.abs(cert.daysToExpiry)} days ago
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Status
                        </p>
                        <p className="font-semibold text-red-600 dark:text-red-400 mt-1">
                          Invalid
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-red-900 dark:text-red-300 mb-4">
                      This certification has expired. You cannot officiate matches
                      until it is renewed.
                    </p>

                    <Button size="sm">Start Renewal Process</Button>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      )}

      {/* Renewal Information */}
      <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Certification Renewal Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {renewalInfo.process.map((step) => (
              <div key={step.step} className="flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white font-bold text-sm">
                    {step.step}
                  </div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {step.title}
                  </p>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {step.description}
                </p>
                {step.step < 4 && (
                  <div className="mt-4 text-center text-gray-400">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Upload Documents */}
      <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Supporting Documents
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Upload any additional documents related to your certifications
          </p>
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8 text-center">
            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Click to upload or drag and drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              PDF, DOC, DOCX up to 10MB
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
