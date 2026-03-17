import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const MatchProtestFormPage: React.FC = () => {
  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Submit Match Protest</h1>
        <p className="text-gray-600 dark:text-gray-400">File an official protest for match incidents</p>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardContent className="pt-6">
          <form className="space-y-6">
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded">
              <p className="text-sm font-medium text-yellow-800 dark:text-yellow-400">Filing deadline: 24 hours after match</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="club">Club Name</Label>
                <Input id="club" value="FC Garuda" disabled className="mt-2" />
              </div>
              <div>
                <Label htmlFor="manager">Club Manager</Label>
                <Input id="manager" placeholder="Your name" className="mt-2" />
              </div>
            </div>

            <div>
              <Label htmlFor="category">Protest Category</Label>
              <select id="category" className="w-full mt-2 p-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-700 text-gray-900 dark:text-white">
                <option>Refereeing decision</option>
                <option>Player conduct</option>
                <option>Pitch/Venue condition</option>
                <option>Administrative error</option>
                <option>Equipment malfunction</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <Label htmlFor="description">Detailed Description</Label>
              <textarea id="description" placeholder="Describe the incident in detail..." className="w-full mt-2 p-3 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-700 text-gray-900 dark:text-white" rows={5}></textarea>
            </div>

            <div>
              <Label htmlFor="evidence">Evidence Upload</Label>
              <div className="mt-2 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-8 text-center cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 transition">
                <p className="text-sm text-muted-foreground">📎 Drag and drop files or click to select</p>
                <p className="text-xs text-muted-foreground mt-1">Video, images, or documents</p>
                <Input id="evidence" type="file" multiple className="hidden" />
              </div>
            </div>

            <div>
              <Label htmlFor="requestedAction">Requested Action</Label>
              <textarea id="requestedAction" placeholder="What resolution are you requesting?" className="w-full mt-2 p-3 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-slate-700 text-gray-900 dark:text-white" rows={3}></textarea>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-700 rounded">
              <p className="text-sm font-medium text-gray-900 dark:text-white">Filing Fee: Rp 500,000</p>
            </div>

            <div className="flex gap-3 pt-4">
              <Button type="submit">Submit Protest</Button>
              <Button type="button" variant="outline">Cancel</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default MatchProtestFormPage;
