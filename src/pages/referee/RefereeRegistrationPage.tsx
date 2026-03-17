import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormStepper } from "@/components/shared/FormStepper";
import { AlertCircle, Upload, Check } from "lucide-react";
import { useState } from "react";

export default function RefereeRegistrationPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    nationality: "",
    badgeLevel: "",
    certificationDate: "",
    certificationExpiry: "",
    certDocuments: null as any,
    region: "",
    preferenceNotes: "",
    bankName: "",
    accountNumber: "",
    sortCode: "",
  });

  const steps = [
    { label: "Personal Info", number: 1 },
    { label: "Certification", number: 2 },
    { label: "Availability", number: 3 },
    { label: "Bank Details", number: 4 },
    { label: "Review", number: 5 },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      certDocuments: e.target.files,
    }));
  };

  const nextStep = () => {
    if (step < steps.length) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    // Handle submission logic here
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Referee Registration
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Register as a referee and get assigned to matches
        </p>
      </div>

      {/* Stepper */}
      <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="p-8">
          <FormStepper steps={steps} currentStep={step} />
        </div>
      </Card>

      {/* Form Content */}
      <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="p-8 min-h-96">
          {/* Step 1: Personal Info */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Personal Information
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    First Name *
                  </label>
                  <Input
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Last Name *
                  </label>
                  <Input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number *
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+44 20 xxxx xxxx"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Date of Birth *
                  </label>
                  <Input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nationality *
                  </label>
                  <select
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-900 dark:text-white"
                  >
                    <option value="">Select nationality</option>
                    <option value="British">British</option>
                    <option value="European">European</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Certification */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Certification Details
                </h2>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Badge Level *
                </label>
                <select
                  name="badgeLevel"
                  value={formData.badgeLevel}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-900 dark:text-white"
                >
                  <option value="">Select badge level</option>
                  <option value="Gold">Gold</option>
                  <option value="Silver">Silver</option>
                  <option value="Bronze">Bronze</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Issue Date *
                  </label>
                  <Input
                    type="date"
                    name="certificationDate"
                    value={formData.certificationDate}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Expiry Date *
                  </label>
                  <Input
                    type="date"
                    name="certificationExpiry"
                    value={formData.certificationExpiry}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Certification Documents *
                </label>
                <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-8 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                    id="fileUpload"
                  />
                  <label htmlFor="fileUpload" className="cursor-pointer">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Click to upload or drag and drop
                    </p>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Availability */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Availability & Preferences
                </h2>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Preferred Region *
                </label>
                <select
                  name="region"
                  value={formData.region}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-900 dark:text-white"
                >
                  <option value="">Select region</option>
                  <option value="London Southeast">London Southeast</option>
                  <option value="Midlands">Midlands</option>
                  <option value="North West">North West</option>
                  <option value="South Coast">South Coast</option>
                  <option value="Yorkshire">Yorkshire</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Preference Notes
                </label>
                <textarea
                  name="preferenceNotes"
                  value={formData.preferenceNotes}
                  onChange={handleInputChange}
                  placeholder="Any availability preferences or restrictions"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-900 dark:text-white"
                />
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-lg p-4 flex gap-3">
                <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-900 dark:text-blue-300">
                  You'll be able to update your availability schedule after registration
                </p>
              </div>
            </div>
          )}

          {/* Step 4: Bank Details */}
          {step === 4 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Bank Details
                </h2>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Bank Name *
                </label>
                <Input
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleInputChange}
                  placeholder="Bank name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Account Number *
                </label>
                <Input
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleInputChange}
                  placeholder="Account number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Sort Code *
                </label>
                <Input
                  name="sortCode"
                  value={formData.sortCode}
                  onChange={handleInputChange}
                  placeholder="Sort code (XX-XX-XX)"
                />
              </div>

              <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900 rounded-lg p-4 flex gap-3">
                <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-amber-900 dark:text-amber-300">
                  Your bank details are secure and only used for match fee payments
                </p>
              </div>
            </div>
          )}

          {/* Step 5: Review */}
          {step === 5 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Review & Confirm
                </h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                  <Check className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Personal Information
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {formData.firstName} {formData.lastName} ({formData.email})
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                  <Check className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Certification
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {formData.badgeLevel} Badge - Valid until{" "}
                      {formData.certificationExpiry}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                  <Check className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Preferred Region
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {formData.region}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900 rounded-lg p-4">
                <p className="text-sm text-green-900 dark:text-green-300">
                  Please review all information carefully. You can edit details after
                  submission.
                </p>
              </div>
            </div>
          )}
        </div>
      </Card>

      {/* Navigation */}
      <div className="flex gap-4 justify-between">
        <Button
          variant="outline"
          onClick={prevStep}
          disabled={step === 1}
        >
          Previous
        </Button>
        <div className="flex gap-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Step {step} of {steps.length}
          </span>
        </div>
        {step < steps.length ? (
          <Button onClick={nextStep}>Next</Button>
        ) : (
          <Button onClick={handleSubmit}>Submit Registration</Button>
        )}
      </div>
    </div>
  );
}
