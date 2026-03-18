import { useState } from 'react';
import { Search, Users, Check, X, ArrowRight, Merge } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

/**
 * UserMergeToolPage - Side-by-Side Comparison
 * Detect and merge duplicate user accounts
 * Route: /admin/merge-users
 * Access: Platform Admin
 */
export default function UserMergeToolPage() {
  const [step, setStep] = useState(1);
  const [selectedDuplicate, setSelectedDuplicate] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [mergeConfig, setMergeConfig] = useState({
    keepPrimaryData: true,
    mergeActivity: true,
    redirectLinks: true,
  });

  const mockDuplicates = [
    {
      id: 'dup1',
      user1: { id: 'u1', name: 'Ahmad Rizki', email: 'ahmad@example.com', createdDate: '2023-01-15', lastActive: '2024-03-16' },
      user2: { id: 'u1b', name: 'Ahmad Rizky', email: 'ahmad.rizky@example.com', createdDate: '2023-01-20', lastActive: '2024-03-10' },
      similarity: 95,
    },
    {
      id: 'dup2',
      user1: { id: 'u2', name: 'Budi Santoso', email: 'budi@example.com', createdDate: '2023-02-10', lastActive: '2024-03-15' },
      user2: { id: 'u2b', name: 'Budi.Santoso', email: 'budi.s@example.com', createdDate: '2023-02-15', lastActive: '2024-03-14' },
      similarity: 88,
    },
    {
      id: 'dup3',
      user1: { id: 'u3', name: 'Citra Dewi', email: 'citra@example.com', createdDate: '2023-03-05', lastActive: '2024-03-12' },
      user2: { id: 'u3b', name: 'Citra D', email: 'citrad@example.com', createdDate: '2023-03-10', lastActive: '2024-03-08' },
      similarity: 82,
    },
  ];

  const currentDuplicate = mockDuplicates.find(d => d.id === selectedDuplicate);

  const getSimilarityColor = (similarity: number) => {
    if (similarity >= 90) return 'bg-red-100 text-red-700';
    if (similarity >= 80) return 'bg-orange-100 text-orange-700';
    return 'bg-yellow-100 text-yellow-700';
  };

  return (
    <div className="space-y-6 p-6">
      <div className="text-sm text-muted-foreground">
        Dashboard &gt; Admin &gt; Merge Users
      </div>

      <div>
        <h1 className="text-3xl font-bold tracking-tight">User Merge Tool</h1>
        <p className="text-muted-foreground mt-2">Detect and merge duplicate user accounts</p>
      </div>

      {step === 1 && (
        <div className="space-y-4">
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Potential Duplicates</h3>
            <p className="text-sm text-muted-foreground mb-4">{mockDuplicates.length} potential duplicate accounts detected</p>

            <div className="space-y-3">
              {mockDuplicates.map((dup) => (
                <div
                  key={dup.id}
                  onClick={() => setSelectedDuplicate(dup.id)}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedDuplicate === dup.id ? 'bg-blue-50 border-blue-300' : 'hover:bg-muted/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <Checkbox checked={selectedDuplicate === dup.id} disabled />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{dup.user1.name}</span>
                          <span className="text-muted-foreground text-sm">vs</span>
                          <span className="font-medium">{dup.user2.name}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{dup.user1.email} / {dup.user2.email}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded text-sm font-semibold ${getSimilarityColor(dup.similarity)}`}>
                      {dup.similarity}% match
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="flex justify-end gap-2">
            <Button variant="outline" disabled>Back</Button>
            <Button disabled={!selectedDuplicate} onClick={() => setStep(2)}>
              Review &amp; Merge
            </Button>
          </div>
        </div>
      )}

      {step === 2 && currentDuplicate && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Primary Account</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Name</p>
                  <p className="font-medium">{currentDuplicate.user1.name}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{currentDuplicate.user1.email}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Created</p>
                  <p className="font-medium">{currentDuplicate.user1.createdDate}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Last Active</p>
                  <p className="font-medium">{currentDuplicate.user1.lastActive}</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-semibold mb-4">Duplicate Account</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground">Name</p>
                  <p className="font-medium">{currentDuplicate.user2.name}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{currentDuplicate.user2.email}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Created</p>
                  <p className="font-medium">{currentDuplicate.user2.createdDate}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Last Active</p>
                  <p className="font-medium">{currentDuplicate.user2.lastActive}</p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Merge Options</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-2 cursor-pointer p-3 border rounded-lg hover:bg-muted/50">
                <Checkbox
                  checked={mergeConfig.keepPrimaryData}
                  onCheckedChange={(checked) =>
                    setMergeConfig(prev => ({ ...prev, keepPrimaryData: checked as boolean }))
                  }
                />
                <span className="font-medium flex-1">Keep primary account data</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer p-3 border rounded-lg hover:bg-muted/50">
                <Checkbox
                  checked={mergeConfig.mergeActivity}
                  onCheckedChange={(checked) =>
                    setMergeConfig(prev => ({ ...prev, mergeActivity: checked as boolean }))
                  }
                />
                <span className="font-medium flex-1">Merge activity history</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer p-3 border rounded-lg hover:bg-muted/50">
                <Checkbox
                  checked={mergeConfig.redirectLinks}
                  onCheckedChange={(checked) =>
                    setMergeConfig(prev => ({ ...prev, redirectLinks: checked as boolean }))
                  }
                />
                <span className="font-medium flex-1">Redirect old account links</span>
              </label>
            </div>
          </Card>

          <div className="flex justify-between gap-2">
            <Button variant="outline" onClick={() => setStep(1)}>Back</Button>
            <Button onClick={() => setStep(3)}>Confirm Merge</Button>
          </div>
        </div>
      )}

      {step === 3 && currentDuplicate && (
        <div className="space-y-4">
          <Card className="p-6 border-green-200 bg-green-50">
            <div className="flex items-center gap-3">
              <Check className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-semibold text-green-900">Merge Completed Successfully</p>
                <p className="text-sm text-green-800">Account {currentDuplicate.user2.name} has been merged into {currentDuplicate.user1.name}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Merge Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Primary Account Retained</span>
                <span className="font-medium">{currentDuplicate.user1.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Account Merged</span>
                <span className="font-medium">{currentDuplicate.user2.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Activity Records Merged</span>
                <span className="font-medium">24 records</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Redirects Created</span>
                <span className="font-medium">Yes</span>
              </div>
            </div>
          </Card>

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => { setStep(1); setSelectedDuplicate(null); }}>Merge Another</Button>
            <Button>Done</Button>
          </div>
        </div>
      )}
    </div>
  );
}
