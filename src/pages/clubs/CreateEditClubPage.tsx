import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Save, ArrowLeft } from "lucide-react";

const CreateEditClubPage: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    clubName: "",
    foundedYear: "",
    country: "",
    city: "",
    description: "",
    contactEmail: "",
    phoneNumber: "",
    stadium: "",
    capacity: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-3xl mx-auto pb-12">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="icon"><ArrowLeft className="w-5 h-5" /></Button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Create Club</h1>
          <p className="text-gray-600 dark:text-gray-400">Add a new club to the system - Step {step} of 2</p>
        </div>
      </div>

      <div className="mb-6 flex gap-2">
        {[1, 2].map((s) => (
          <div key={s} className={`flex-1 h-2 rounded ${s <= step ? "bg-blue-600" : "bg-gray-200 dark:bg-slate-700"}`}></div>
        ))}
      </div>

      {step === 1 && (
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="clubName" className="text-gray-700 dark:text-gray-300">Club Name *</Label>
                <Input
                  id="clubName"
                  name="clubName"
                  placeholder="e.g., Metropolitan United"
                  value={formData.clubName}
                  onChange={handleInputChange}
                  className="dark:bg-slate-700 dark:border-slate-600"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="foundedYear" className="text-gray-700 dark:text-gray-300">Founded Year *</Label>
                <Input
                  id="foundedYear"
                  name="foundedYear"
                  type="number"
                  placeholder="e.g., 1998"
                  value={formData.foundedYear}
                  onChange={handleInputChange}
                  className="dark:bg-slate-700 dark:border-slate-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="country" className="text-gray-700 dark:text-gray-300">Country *</Label>
                <Input
                  id="country"
                  name="country"
                  placeholder="e.g., United Kingdom"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="dark:bg-slate-700 dark:border-slate-600"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city" className="text-gray-700 dark:text-gray-300">City *</Label>
                <Input
                  id="city"
                  name="city"
                  placeholder="e.g., London"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="dark:bg-slate-700 dark:border-slate-600"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-gray-700 dark:text-gray-300">Club Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Brief description of the club..."
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                className="dark:bg-slate-700 dark:border-slate-600"
              />
            </div>

            <div className="flex gap-3 pt-6 border-t border-gray-200 dark:border-slate-700">
              <Button variant="outline">Cancel</Button>
              <Button className="ml-auto bg-blue-600 hover:bg-blue-700" onClick={() => setStep(2)}>Next Step</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 2 && (
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">Contact & Facilities</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="contactEmail" className="text-gray-700 dark:text-gray-300">Contact Email</Label>
                <Input
                  id="contactEmail"
                  name="contactEmail"
                  type="email"
                  placeholder="contact@club.com"
                  value={formData.contactEmail}
                  onChange={handleInputChange}
                  className="dark:bg-slate-700 dark:border-slate-600"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phoneNumber" className="text-gray-700 dark:text-gray-300">Phone Number</Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="+1234567890"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="dark:bg-slate-700 dark:border-slate-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="stadium" className="text-gray-700 dark:text-gray-300">Stadium Name</Label>
                <Input
                  id="stadium"
                  name="stadium"
                  placeholder="e.g., Metropolitan Park"
                  value={formData.stadium}
                  onChange={handleInputChange}
                  className="dark:bg-slate-700 dark:border-slate-600"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="capacity" className="text-gray-700 dark:text-gray-300">Stadium Capacity</Label>
                <Input
                  id="capacity"
                  name="capacity"
                  type="number"
                  placeholder="e.g., 60000"
                  value={formData.capacity}
                  onChange={handleInputChange}
                  className="dark:bg-slate-700 dark:border-slate-600"
                />
              </div>
            </div>

            <div className="flex gap-3 pt-6 border-t border-gray-200 dark:border-slate-700">
              <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
              <Button variant="outline">Cancel</Button>
              <Button className="ml-auto bg-blue-600 hover:bg-blue-700"><Save className="w-4 h-4 mr-2" />Create Club</Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default CreateEditClubPage;
