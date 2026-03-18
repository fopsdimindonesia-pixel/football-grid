import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Palette, Upload, Save } from "lucide-react";

const ClubBrandingSettingsPage: React.FC = () => {
  const [colors, setColors] = useState({
    primaryColor: "#003399",
    secondaryColor: "#FFFFFF",
    accentColor: "#FFD700",
  });

  return (
    <div className="space-y-6 pb-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Branding Settings</h1>
        <p className="text-gray-600 dark:text-gray-400">Manage club brand identity and colors</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">Club Colors</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="primary" className="text-gray-700 dark:text-gray-300">Primary Color</Label>
              <div className="flex gap-3 mt-2">
                <input
                  id="primary"
                  type="color"
                  value={colors.primaryColor}
                  onChange={(e) => setColors({ ...colors, primaryColor: e.target.value })}
                  className="w-20 h-10 rounded cursor-pointer"
                />
                <Input value={colors.primaryColor} readOnly className="dark:bg-slate-700 dark:border-slate-600" />
              </div>
            </div>

            <div>
              <Label htmlFor="secondary" className="text-gray-700 dark:text-gray-300">Secondary Color</Label>
              <div className="flex gap-3 mt-2">
                <input
                  id="secondary"
                  type="color"
                  value={colors.secondaryColor}
                  onChange={(e) => setColors({ ...colors, secondaryColor: e.target.value })}
                  className="w-20 h-10 rounded cursor-pointer"
                />
                <Input value={colors.secondaryColor} readOnly className="dark:bg-slate-700 dark:border-slate-600" />
              </div>
            </div>

            <div>
              <Label htmlFor="accent" className="text-gray-700 dark:text-gray-300">Accent Color</Label>
              <div className="flex gap-3 mt-2">
                <input
                  id="accent"
                  type="color"
                  value={colors.accentColor}
                  onChange={(e) => setColors({ ...colors, accentColor: e.target.value })}
                  className="w-20 h-10 rounded cursor-pointer"
                />
                <Input value={colors.accentColor} readOnly className="dark:bg-slate-700 dark:border-slate-600" />
              </div>
            </div>

            <Separator className="dark:bg-slate-700" />

            <Button className="w-full bg-blue-600 hover:bg-blue-700"><Save className="w-4 h-4 mr-2" />Save Colors</Button>
          </CardContent>
        </Card>

        <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700 lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-gray-900 dark:text-white">Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 rounded-lg" style={{ backgroundColor: colors.primaryColor }}>
                <p className="text-white font-bold">Primary Color Preview</p>
                <p className="text-sm text-white opacity-80">Used for main UI elements</p>
              </div>

              <div className="p-4 rounded-lg border-2" style={{ borderColor: colors.secondaryColor, backgroundColor: colors.primaryColor }}>
                <p className="text-white font-bold">Secondary Color Preview</p>
                <p className="text-sm text-white opacity-80">Used for accents and borders</p>
              </div>

              <div className="p-4 rounded-lg flex items-center gap-3" style={{ backgroundColor: colors.accentColor }}>
                <div className="w-12 h-12 rounded-full" style={{ backgroundColor: colors.primaryColor }}></div>
                <div>
                  <p className="font-bold" style={{ color: colors.primaryColor }}>Accent Color Preview</p>
                  <p className="text-sm opacity-80">Used for highlights</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-white dark:bg-slate-800 border-0 dark:border-slate-700">
        <CardHeader>
          <CardTitle className="text-gray-900 dark:text-white">Logo & Assets</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition-colors">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-2" />
            <p className="font-medium text-gray-900 dark:text-white">Upload Club Logo</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">PNG, JPG (Max 5 MB)</p>
          </div>

          <div className="border-2 border-dashed border-gray-300 dark:border-slate-600 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition-colors">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-2" />
            <p className="font-medium text-gray-900 dark:text-white">Upload Badge/Crest</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">PNG, JPG (Max 5 MB)</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClubBrandingSettingsPage;
