import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Upload, FileCheck, AlertCircle } from "lucide-react";

const BulkUserImportPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<any[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      // Mock preview data
      setPreview([
        { name: "John Doe", email: "john@example.com", role: "Player", status: "Valid" },
        { name: "Sarah Smith", email: "sarah@example.com", role: "Coach", status: "Valid" },
        { name: "Mike Johnson", email: "invalid-email", role: "Referee", status: "Invalid Email" },
        { name: "Lisa Brown", email: "lisa@example.com", role: "Administrator", status: "Valid" },
      ]);
    }
  };

  const getStatusColor = (status: string) => {
    if (status === "Valid") return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100";
    return "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100";
  };

  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Bulk User Import</h1>
        <p className="text-gray-600 dark:text-gray-400">Import multiple users at once via CSV file</p>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">Upload CSV File</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition">
            <input type="file" accept=".csv" onChange={handleFileChange} className="hidden" id="fileInput" />
            <label htmlFor="fileInput" className="cursor-pointer flex flex-col items-center gap-2">
              <Upload className="w-8 h-8 text-gray-400" />
              <p className="font-medium text-gray-900 dark:text-white">Drop your CSV file here</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">or click to browse</p>
            </label>
          </div>
          {file && <p className="text-sm text-green-600 dark:text-green-400">✓ File selected: {file.name}</p>}
          <p className="text-xs text-gray-600 dark:text-gray-400">Required columns: Name, Email, Role</p>
        </CardContent>
      </Card>

      {preview.length > 0 && (
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">Import Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200 dark:border-slate-700">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Name</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Email</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Role</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {preview.map((row, idx) => (
                    <tr key={idx} className="border-b border-gray-100 dark:border-slate-700">
                      <td className="py-3 px-4 text-gray-900 dark:text-white">{row.name}</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{row.email}</td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-400">{row.role}</td>
                      <td className="py-3 px-4"><Badge className={getStatusColor(row.status)}>{row.status}</Badge></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-yellow-900 dark:text-yellow-100">3 of 4 records are valid</p>
                <p className="text-xs text-yellow-800 dark:text-yellow-200">1 record has validation errors</p>
              </div>
            </div>
            <div className="flex gap-3 mt-6 pt-6 border-t border-gray-200 dark:border-slate-700">
              <Button variant="outline">Cancel</Button>
              <Button className="bg-blue-600 hover:bg-blue-700"><FileCheck className="w-4 h-4 mr-2" />Import Users</Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default BulkUserImportPage;
