import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Save, ArrowLeft, Mail } from "lucide-react";

const UserInviteFormPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    role: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, role: value }));
  };

  return (
    <div className="max-w-2xl mx-auto pb-12">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="icon"><ArrowLeft className="w-5 h-5" /></Button>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Send Invitation</h1>
          <p className="text-gray-600 dark:text-gray-400">Invite a user to join the system</p>
        </div>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">Invitation Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email Address *</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input id="email" name="email" type="email" placeholder="user@example.com" value={formData.email} onChange={handleInputChange} className="pl-10 dark:bg-slate-700 dark:border-slate-600" />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">The user will receive an invitation link at this email</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="role" className="text-gray-700 dark:text-gray-300">Role *</Label>
              <Select value={formData.role} onValueChange={handleSelectChange}>
                <SelectTrigger className="dark:bg-slate-700 dark:border-slate-600">
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent className="dark:bg-slate-700">
                  <SelectItem value="player">Player</SelectItem>
                  <SelectItem value="coach">Coach</SelectItem>
                  <SelectItem value="referee">Referee</SelectItem>
                  <SelectItem value="administrator">Administrator</SelectItem>
                  <SelectItem value="manager">Manager</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-xs text-gray-500 dark:text-gray-400">Assign the user's default role in the system</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">Personal Message</Label>
              <Textarea id="message" name="message" placeholder="Add a personal message to include with the invitation..." value={formData.message} onChange={handleInputChange} rows={5} className="dark:bg-slate-700 dark:border-slate-600" />
              <p className="text-xs text-gray-500 dark:text-gray-400">Optional message to personalize the invitation</p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <p className="text-sm text-blue-900 dark:text-blue-100">The user will receive an email invitation with a link to create their account. The invitation will expire in 7 days.</p>
            </div>

            <div className="flex gap-3 pt-6 border-t border-gray-200 dark:border-slate-700">
              <Button variant="outline">Cancel</Button>
              <Button className="bg-blue-600 hover:bg-blue-700"><Save className="w-4 h-4 mr-2" />Send Invitation</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserInviteFormPage;
