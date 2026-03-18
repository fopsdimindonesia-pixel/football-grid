import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Upload, Download, File, Folder, Plus, Trash2 } from "lucide-react";

const ClubDocumentsPage: React.FC = () => {
  const [documents] = useState([
    { id: 1, name: "Club Constitution.pdf", type: "PDF", size: "2.4 MB", uploadedDate: "2024-01-15", category: "Legal" },
    { id: 2, name: "Financial Report 2023.xlsx", type: "Excel", size: "1.8 MB", uploadedDate: "2024-01-10", category: "Finance" },
    { id: 3, name: "Training Manual.docx", type: "Word", size: "3.2 MB", uploadedDate: "2024-01-08", category: "Training" },
    { id: 4, name: "Safety Protocol.pdf", type: "PDF", size: "1.2 MB", uploadedDate: "2024-01-05", category: "Legal" },
    { id: 5, name: "Stadium Capacity Report.xlsx", type: "Excel", size: "0.9 MB", uploadedDate: "2024-01-01", category: "Infrastructure" },
  ]);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Legal":
        return "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100";
      case "Finance":
        return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100";
      case "Training":
        return "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100";
      case "Infrastructure":
        return "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100";
      default:
        return "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100";
    }
  };

  return (
    <div className="space-y-6 pb-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Documents</h1>
          <p className="text-gray-600 dark:text-gray-400">Manage club documents and files</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700"><Upload className="w-4 h-4 mr-2" />Upload Document</Button>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <div className="border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-lg p-8 text-center hover:border-blue-500 transition-colors">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-2" />
            <p className="font-medium text-gray-900 dark:text-white">Drop files here or click to upload</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Max file size: 50 MB</p>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-3">
        <div className="p-4 bg-gray-50 dark:bg-slate-700/50 rounded-lg">
          <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">By Category</h3>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">All Documents</Button>
            <Button variant="outline" size="sm">Legal (2)</Button>
            <Button variant="outline" size="sm">Finance (2)</Button>
            <Button variant="outline" size="sm">Training (1)</Button>
          </div>
        </div>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <div className="space-y-2">
            {documents.map((doc) => (
              <div key={doc.id} className="p-4 border border-gray-200 dark:border-slate-700 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                  <File className="w-8 h-8 text-gray-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">{doc.name}</h4>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-gray-600 dark:text-gray-400">{doc.size}</span>
                      <span className="text-xs text-gray-600 dark:text-gray-400">•</span>
                      <Badge className={getCategoryColor(doc.category)} variant="outline">
                        {doc.category}
                      </Badge>
                      <span className="text-xs text-gray-600 dark:text-gray-400">•</span>
                      <span className="text-xs text-gray-600 dark:text-gray-400">{doc.uploadedDate}</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm"><Download className="w-4 h-4" /></Button>
                  <Button variant="outline" size="sm"><Trash2 className="w-4 h-4 text-red-600" /></Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClubDocumentsPage;
