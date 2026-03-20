import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { Bell, Search, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AppLayout() {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDark = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          {/* Top Bar */}
          <header className="h-14 border-b bg-card flex items-center justify-between px-4 shrink-0 sticky top-0 z-30">
            <div className="flex items-center gap-3">
              <SidebarTrigger className="text-muted-foreground hover:text-foreground" />
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search players, clubs, matches..."
                  className="pl-9 w-72 h-9 bg-muted/50 border-0 focus-visible:ring-1"
                />
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="relative h-9 w-9">
                <Bell className="h-4 w-4" />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-destructive" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9" onClick={toggleDark}>
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="sm" className="ml-1 gap-2 font-medium">
                <div className="h-7 w-7 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
                  AD
                </div>
                <span className="hidden md:inline text-sm">Admin</span>
              </Button>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-auto p-6 md:p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}
