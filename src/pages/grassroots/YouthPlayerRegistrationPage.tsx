import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const YouthPlayerRegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    position: "",
    academy: "",
    parentName: "",
    parentEmail: "",
    parentPhone: "",
  });

  const positions = ["Goalkeeper", "Defender", "Midfielder", "Forward"];
  const academies = ["Downtown Academy", "Elite Training", "Youth Development Center"];

  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Youth Player Registration</h1>
        <p className="text-gray-600 dark:text-gray-400">Register a new young player for academy programs</p>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="Enter first name" className="dark:bg-slate-700 dark:border-slate-600" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Enter last name" className="dark:bg-slate-700 dark:border-slate-600" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="dob">Date of Birth</Label>
                <Input id="dob" type="date" className="dark:bg-slate-700 dark:border-slate-600" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="position">Position</Label>
                <Select>
                  <SelectTrigger className="dark:bg-slate-700 dark:border-slate-600">
                    <SelectValue placeholder="Select position" />
                  </SelectTrigger>
                  <SelectContent>
                    {positions.map((pos) => (
                      <SelectItem key={pos} value={pos}>
                        {pos}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="academy">Academy</Label>
              <Select>
                <SelectTrigger className="dark:bg-slate-700 dark:border-slate-600">
                  <SelectValue placeholder="Select academy" />
                </SelectTrigger>
                <SelectContent>
                  {academies.map((acad) => (
                    <SelectItem key={acad} value={acad}>
                      {acad}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="border-t border-gray-200 dark:border-slate-700 pt-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Parent Information</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="parentName">Parent/Guardian Name</Label>
                  <Input id="parentName" placeholder="Enter parent name" className="dark:bg-slate-700 dark:border-slate-600" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="parentEmail">Parent Email</Label>
                  <Input id="parentEmail" type="email" placeholder="Enter email" className="dark:bg-slate-700 dark:border-slate-600" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="parentPhone">Parent Phone</Label>
                <Input id="parentPhone" placeholder="Enter phone number" className="dark:bg-slate-700 dark:border-slate-600" />
              </div>
            </div>

            <div className="flex gap-4 justify-end pt-6 border-t border-gray-200 dark:border-slate-700">
              <Button variant="outline">Cancel</Button>
              <Button className="bg-blue-600 hover:bg-blue-700">Register Player</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default YouthPlayerRegistrationPage;
