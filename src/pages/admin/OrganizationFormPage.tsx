import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Save, ArrowLeft } from "lucide-react";

const OrganizationFormPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    description: "",
    industry: "",
    size: "",
    website: "",
    location: "",
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-3xl mx-auto pb-12">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="icon"><ArrowLeft className="w-5 h-5" /></Button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Create Organization</h1>
          <p className="text-gray-600 dark:text-gray-400">Add a new organization to the system</p>
        </div>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">Organization Information</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">Organization Name *</Label>
                <Input id="name" name="name" placeholder="e.g., Elite Football Academy" value={formData.name} onChange={handleInputChange} className="dark:bg-slate-700 dark:border-slate-600" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type" className="text-gray-700 dark:text-gray-300">Organization Type *</Label>
                <Select value={formData.type} onValueChange={(value) => handleSelectChange("type", value)}>
                  <SelectTrigger className="dark:bg-slate-700 dark:border-slate-600">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-slate-700">
                    <SelectItem value="academy">Academy</SelectItem>
                    <SelectItem value="club">Club</SelectItem>
                    <SelectItem value="league">League</SelectItem>
                    <SelectItem value="federation">Federation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-gray-700 dark:text-gray-300">Description</Label>
              <Textarea id="description" name="description" placeholder="Organization description..." value={formData.description} onChange={handleInputChange} rows={4} className="dark:bg-slate-700 dark:border-slate-600" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="industry" className="text-gray-700 dark:text-gray-300">Industry</Label>
                <Input id="industry" name="industry" placeholder="e.g., Sports & Athletics" value={formData.industry} onChange={handleInputChange} className="dark:bg-slate-700 dark:border-slate-600" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="size" className="text-gray-700 dark:text-gray-300">Organization Size</Label>
                <Select value={formData.size} onValueChange={(value) => handleSelectChange("size", value)}>
                  <SelectTrigger className="dark:bg-slate-700 dark:border-slate-600">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent className="dark:bg-slate-700">
                    <SelectItem value="small">Small (1-50)</SelectItem>
                    <SelectItem value="medium">Medium (51-200)</SelectItem>
                    <SelectItem value="large">Large (201-1000)</SelectItem>
                    <SelectItem value="enterprise">Enterprise (1000+)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="website" className="text-gray-700 dark:text-gray-300">Website</Label>
                <Input id="website" name="website" type="url" placeholder="https://example.com" value={formData.website} onChange={handleInputChange} className="dark:bg-slate-700 dark:border-slate-600" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email</Label>
                <Input id="email" name="email" type="email" placeholder="contact@example.com" value={formData.email} onChange={handleInputChange} className="dark:bg-slate-700 dark:border-slate-600" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="text-gray-700 dark:text-gray-300">Location</Label>
              <Input id="location" name="location" placeholder="City, Country" value={formData.location} onChange={handleInputChange} className="dark:bg-slate-700 dark:border-slate-600" />
            </div>

            <div className="flex gap-3 pt-6 border-t border-gray-200 dark:border-slate-700">
              <Button variant="outline">Cancel</Button>
              <Button className="bg-blue-600 hover:bg-blue-700"><Save className="w-4 h-4 mr-2" />Create Organization</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrganizationFormPage;
