import { useState } from 'react';
import { Plus, X, Check, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

/**
 * UserInviteFormPage - Pattern D (Multi-step Form)
 * Invite single or multiple users to organization
 * Route: /invite-users
 * Access: Org Admin
 */
export default function UserInviteFormPageNew() {
  const [currentStep, setCurrentStep] = useState(1);
  const [inviteType, setInviteType] = useState('single');
  const [emailList, setEmailList] = useState<string[]>([]);
  const [emailInput, setEmailInput] = useState('');
  const [formData, setFormData] = useState({
    role: 'Coach',
    organization: 'pssi-jakarta',
    expiryDays: '7',
    message: '',
  });

  const handleAddEmail = () => {
    if (emailInput && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput)) {
      if (!emailList.includes(emailInput)) {
        setEmailList([...emailList, emailInput]);
        setEmailInput('');
      }
    }
  };

  const handleRemoveEmail = (email: string) => {
    setEmailList(emailList.filter(e => e !== email));
  };

  const handlePastEmails = (text: string) => {
    const emails = text.split('\n').map(e => e.trim()).filter(e => e && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e));
    const unique = [...new Set([...emailList, ...emails])];
    setEmailList(unique);
  };

  const isStepValid = () => {
    if (currentStep === 1) {
      if (inviteType === 'single') return emailInput.length > 0;
      return emailList.length > 0;
    }
    if (currentStep === 2) return formData.role && formData.organization;
    return true;
  };

  const stepTitles = ['Recipients', 'Details', 'Review'];
  const stepDescriptions = [
    'Add email addresses to invite',
    'Choose role and organization',
    'Review and confirm invitation',
  ];

  return (
    <div className="space-y-6 p-6 max-w-2xl mx-auto">
      <div className="text-sm text-muted-foreground">
        Dashboard &gt; Invitations &gt; New Invite
      </div>

      <div>
        <h1 className="text-3xl font-bold tracking-tight">Invite Users</h1>
        <p className="text-muted-foreground mt-2">Send invitations to join your organization</p>
      </div>

      {/* STEP INDICATOR */}
      <div className="flex items-center justify-between">
        {stepTitles.map((title, idx) => (
          <div key={idx} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
              currentStep === idx + 1 ? 'bg-blue-600 text-white' : idx + 1 < currentStep ? 'bg-green-600 text-white' : 'bg-muted text-muted-foreground'
            }`}>
              {idx + 1 < currentStep ? <Check className="w-4 h-4" /> : idx + 1}
            </div>
            {idx < stepTitles.length - 1 && (
              <div className={`flex-1 h-1 mx-2 ${idx + 1 < currentStep ? 'bg-green-600' : 'bg-muted'}`}></div>
            )}
          </div>
        ))}
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-1">{stepTitles[currentStep - 1]}</h2>
        <p className="text-sm text-muted-foreground mb-4">{stepDescriptions[currentStep - 1]}</p>

        {/* STEP 1: RECIPIENTS */}
        {currentStep === 1 && (
          <div className="space-y-4">
            <div className="flex gap-2 mb-4">
              <label className="flex items-center gap-2 cursor-pointer p-3 border rounded-lg flex-1 hover:bg-muted/50" style={{ borderColor: inviteType === 'single' ? '#3b82f6' : undefined }}>
                <Checkbox checked={inviteType === 'single'} onCheckedChange={() => setInviteType('single')} />
                <span className="font-medium">Single Email</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer p-3 border rounded-lg flex-1 hover:bg-muted/50" style={{ borderColor: inviteType === 'bulk' ? '#3b82f6' : undefined }}>
                <Checkbox checked={inviteType === 'bulk'} onCheckedChange={() => setInviteType('bulk')} />
                <span className="font-medium">Bulk Paste</span>
              </label>
            </div>

            {inviteType === 'single' ? (
              <div className="flex gap-2">
                <Input
                  placeholder="Enter email address"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAddEmail()}
                />
                <Button onClick={handleAddEmail} className="gap-2">
                  <Plus className="w-4 h-4" />
                  Add
                </Button>
              </div>
            ) : (
              <Textarea
                placeholder="Paste emails separated by new lines&#10;user1@example.com&#10;user2@example.com&#10;user3@example.com"
                value={emailList.join('\n')}
                onChange={(e) => handlePastEmails(e.target.value)}
                rows={5}
              />
            )}

            {emailList.length > 0 && (
              <div className="space-y-2 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="font-medium text-sm">Recipients ({emailList.length})</p>
                <div className="flex flex-wrap gap-2">
                  {emailList.map((email) => (
                    <div key={email} className="bg-white px-2 py-1 rounded border border-blue-200 flex items-center gap-2">
                      <span className="text-sm">{email}</span>
                      <button onClick={() => handleRemoveEmail(email)} className="text-red-600 hover:bg-red-50 rounded p-0.5">
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* STEP 2: DETAILS */}
        {currentStep === 2 && (
          <div className="space-y-4">
            <div>
              <Label htmlFor="role">Role</Label>
              <Select value={formData.role} onValueChange={(value) => setFormData(prev => ({ ...prev, role: value }))}>
                <SelectTrigger id="role" className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Member">Member</SelectItem>
                  <SelectItem value="Coach">Coach</SelectItem>
                  <SelectItem value="Manager">Manager</SelectItem>
                  <SelectItem value="Admin">Admin</SelectItem>
                  <SelectItem value="Medical Staff">Medical Staff</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="org">Organization</Label>
              <Select value={formData.organization} onValueChange={(value) => setFormData(prev => ({ ...prev, organization: value }))}>
                <SelectTrigger id="org" className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pssi-jakarta">PSSI Jakarta</SelectItem>
                  <SelectItem value="pssi-bandung">PSSI Bandung</SelectItem>
                  <SelectItem value="pssi-surabaya">PSSI Surabaya</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="expiry">Invitation Expires In</Label>
              <Select value={formData.expiryDays} onValueChange={(value) => setFormData(prev => ({ ...prev, expiryDays: value }))}>
                <SelectTrigger id="expiry" className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 day</SelectItem>
                  <SelectItem value="7">7 days</SelectItem>
                  <SelectItem value="14">14 days</SelectItem>
                  <SelectItem value="30">30 days</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="message">Custom Message (Optional)</Label>
              <Textarea
                id="message"
                placeholder="Add a personalized message to the invitations"
                value={formData.message}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                className="mt-1"
                rows={3}
              />
            </div>
          </div>
        )}

        {/* STEP 3: REVIEW */}
        {currentStep === 3 && (
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-900">{emailList.length} invitation(s) will be sent with these details:</h3>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between p-3 border rounded-lg">
                <span className="text-muted-foreground">Recipients</span>
                <span className="font-medium">{emailList.length} users</span>
              </div>
              <div className="flex justify-between p-3 border rounded-lg">
                <span className="text-muted-foreground">Role</span>
                <span className="font-medium">{formData.role}</span>
              </div>
              <div className="flex justify-between p-3 border rounded-lg">
                <span className="text-muted-foreground">Organization</span>
                <span className="font-medium">{formData.organization}</span>
              </div>
              <div className="flex justify-between p-3 border rounded-lg">
                <span className="text-muted-foreground">Expires In</span>
                <span className="font-medium">{formData.expiryDays} days</span>
              </div>
              {formData.message && (
                <div className="p-3 border rounded-lg">
                  <span className="text-muted-foreground block text-sm mb-1">Custom Message</span>
                  <p className="text-sm">{formData.message}</p>
                </div>
              )}
            </div>

            <Button className="w-full gap-2" size="lg">
              <Check className="w-4 h-4" />
              Send Invitations
            </Button>
          </div>
        )}
      </Card>

      {/* NAVIGATION BUTTONS */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          disabled={currentStep === 1}
          onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
        >
          Previous
        </Button>

        <div className="text-sm text-muted-foreground">
          Step {currentStep} of {stepTitles.length}
        </div>

        <Button
          disabled={!isStepValid()}
          onClick={() => setCurrentStep(Math.min(stepTitles.length, currentStep + 1))}
          className="gap-2"
        >
          {currentStep === stepTitles.length ? 'Send Invitations' : 'Next'}
          {currentStep < stepTitles.length && <ChevronRight className="w-4 h-4" />}
        </Button>
      </div>
    </div>
  );
}
