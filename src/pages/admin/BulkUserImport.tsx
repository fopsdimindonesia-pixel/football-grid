import { useState } from 'react';
import { Upload, FileText, AlertCircle, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

/**
 * BulkUserImportPage - File Upload + Preview
 * Import multiple users via CSV file upload
 * Route: /admin/import-users
 * Access: Platform Admin
 */
export default function BulkUserImportPage() {
  const [uploadStep, setUploadStep] = useState('upload');
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [mappingConfig, setMappingConfig] = useState({
    emailColumn: 'A',
    nameColumn: 'B',
    roleColumn: 'C',
    organizationColumn: 'D',
  });
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());

  const mockImportData = [
    { email: 'user1@example.com', name: 'John Doe', role: 'Coach', organization: 'PSSI Jakarta', status: 'valid' },
    { email: 'user2@example.com', name: 'Jane Smith', role: 'Manager', organization: 'PSSI Bandung', status: 'valid' },
    { email: 'invalid-email', name: 'Bob Johnson', role: 'Admin', organization: 'PSSI Surabaya', status: 'error' },
    { email: 'user4@example.com', name: 'Alice Brown', role: 'Staff', organization: 'PSSI Jakarta', status: 'valid' },
    { email: 'user5@example.com', name: 'Charlie White', role: 'Coach', organization: 'PSSI Medan', status: 'valid' },
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setCsvFile(e.target.files[0]);
      setUploadStep('mapping');
    }
  };

  const handleSelectAll = () => {
    if (selectedRows.size === mockImportData.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(mockImportData.map((_, idx) => idx)));
    }
  };

  const handleSelectRow = (idx: number) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(idx)) {
      newSelected.delete(idx);
    } else {
      newSelected.add(idx);
    }
    setSelectedRows(newSelected);
  };

  return (
    <div className="space-y-6 p-6">
      <div className="text-sm text-muted-foreground">
        Dashboard &gt; Admin &gt; Import Users
      </div>

      <div>
        <h1 className="text-3xl font-bold tracking-tight">Bulk Import Users</h1>
        <p className="text-muted-foreground mt-2">Upload and configure user data for bulk import</p>
      </div>

      {uploadStep === 'upload' && (
        <Card className="p-8">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <Upload className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-center">
              <h3 className="font-semibold">Upload CSV File</h3>
              <p className="text-sm text-muted-foreground mt-1">Drag and drop your CSV file or click to browse</p>
            </div>
            <input
              type="file"
              accept=".csv"
              onChange={handleFileUpload}
              className="hidden"
              id="csv-upload"
            />
            <Button asChild variant="outline">
              <label htmlFor="csv-upload" className="cursor-pointer">
                Select CSV File
              </label>
            </Button>
            <div className="text-xs text-muted-foreground bg-muted p-3 rounded">
              <p>CSV should include columns: Email, Name, Role, Organization</p>
            </div>
          </div>
        </Card>
      )}

      {uploadStep === 'mapping' && (
        <div className="space-y-6">
          <Tabs defaultValue="mapping">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="mapping">Column Mapping</TabsTrigger>
              <TabsTrigger value="preview">Preview Data</TabsTrigger>
            </TabsList>

            <TabsContent value="mapping" className="space-y-4 mt-4">
              <Card className="p-6 space-y-4">
                <h3 className="font-semibold">Map CSV Columns</h3>
                <p className="text-sm text-muted-foreground">Select which column represents each field</p>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Email Column</label>
                    <Select value={mappingConfig.emailColumn} onValueChange={(value) =>
                      setMappingConfig(prev => ({ ...prev, emailColumn: value }))
                    }>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="A">Column A</SelectItem>
                        <SelectItem value="B">Column B</SelectItem>
                        <SelectItem value="C">Column C</SelectItem>
                        <SelectItem value="D">Column D</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Name Column</label>
                    <Select value={mappingConfig.nameColumn} onValueChange={(value) =>
                      setMappingConfig(prev => ({ ...prev, nameColumn: value }))
                    }>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="A">Column A</SelectItem>
                        <SelectItem value="B">Column B</SelectItem>
                        <SelectItem value="C">Column C</SelectItem>
                        <SelectItem value="D">Column D</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Role Column</label>
                    <Select value={mappingConfig.roleColumn} onValueChange={(value) =>
                      setMappingConfig(prev => ({ ...prev, roleColumn: value }))
                    }>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="A">Column A</SelectItem>
                        <SelectItem value="B">Column B</SelectItem>
                        <SelectItem value="C">Column C</SelectItem>
                        <SelectItem value="D">Column D</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium">Organization Column</label>
                    <Select value={mappingConfig.organizationColumn} onValueChange={(value) =>
                      setMappingConfig(prev => ({ ...prev, organizationColumn: value }))
                    }>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="A">Column A</SelectItem>
                        <SelectItem value="B">Column B</SelectItem>
                        <SelectItem value="C">Column C</SelectItem>
                        <SelectItem value="D">Column D</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="preview" className="mt-4">
              <Card className="overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-muted border-b">
                      <tr>
                        <th className="p-3 text-left">
                          <Checkbox checked={selectedRows.size === mockImportData.length} onCheckedChange={handleSelectAll} />
                        </th>
                        <th className="p-3 text-left font-semibold">Email</th>
                        <th className="p-3 text-left font-semibold">Name</th>
                        <th className="p-3 text-left font-semibold">Role</th>
                        <th className="p-3 text-left font-semibold">Organization</th>
                        <th className="p-3 text-left font-semibold">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockImportData.map((row, idx) => (
                        <tr key={idx} className="border-b hover:bg-muted/50">
                          <td className="p-3">
                            <Checkbox checked={selectedRows.has(idx)} onCheckedChange={() => handleSelectRow(idx)} />
                          </td>
                          <td className="p-3 text-sm">{row.email}</td>
                          <td className="p-3 text-sm">{row.name}</td>
                          <td className="p-3 text-sm">{row.role}</td>
                          <td className="p-3 text-sm">{row.organization}</td>
                          <td className="p-3">
                            <div className="flex items-center gap-2">
                              {row.status === 'valid' ? (
                                <>
                                  <Check className="w-4 h-4 text-green-600" />
                                  <span className="text-xs text-green-600">Valid</span>
                                </>
                              ) : (
                                <>
                                  <AlertCircle className="w-4 h-4 text-red-600" />
                                  <span className="text-xs text-red-600">Invalid</span>
                                </>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setUploadStep('upload')}>Back</Button>
            <Button onClick={() => setUploadStep('confirm')}>Continue to Import</Button>
          </div>
        </div>
      )}

      {uploadStep === 'confirm' && (
        <Card className="p-6 space-y-4">
          <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
            <Check className="w-5 h-5 text-green-600" />
            <div>
              <p className="font-semibold text-green-900">Ready to Import</p>
              <p className="text-sm text-green-800">{selectedRows.size} valid users will be imported</p>
            </div>
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={() => setUploadStep('mapping')}>Back</Button>
            <Button>Confirm Import</Button>
          </div>
        </Card>
      )}
    </div>
  );
}
