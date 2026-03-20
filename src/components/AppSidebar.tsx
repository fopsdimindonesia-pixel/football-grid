import {
  LayoutDashboard,
  Shield,
  Users,
  Building2,
  UserCircle,
  GraduationCap,
  CreditCard,
  Trophy,
  ClipboardList,
  Scale,
  HeartPulse,
  Search,
  DollarSign,
  Newspaper,
  BarChart3,
  Ticket,
  ShoppingCart,
  Sprout,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";

const mainNav = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard },
  { title: "Auth & Security", url: "/login", icon: Shield },
  { title: "Users & Orgs", url: "/admin/users", icon: Users },
  { title: "Clubs", url: "/clubs/dashboard", icon: Building2 },
  { title: "Players", url: "/players", icon: UserCircle },
  { title: "Coaches", url: "/coaches", icon: GraduationCap },
  { title: "Referees", url: "/referee/dashboard", icon: CreditCard },
  { title: "Competitions", url: "/competitions", icon: Trophy },
  { title: "Matches", url: "/matches", icon: ClipboardList },
  { title: "Disciplinary", url: "/disciplinary", icon: Scale },
  { title: "Medical", url: "/medical", icon: HeartPulse },
  { title: "Scouting", url: "/scouting", icon: Search },
  { title: "Finance", url: "/finance", icon: DollarSign },
  { title: "Media", url: "/media", icon: Newspaper },
  { title: "Analytics", url: "/analytics", icon: BarChart3 },
  { title: "Fan Platform", url: "/fans", icon: Ticket },
  { title: "Marketplace", url: "/marketplace", icon: ShoppingCart },
  { title: "Grassroots", url: "/grassroots", icon: Sprout },
];

const bottomNav = [
  { title: "Admin", url: "/admin/organizations", icon: Settings },
  { title: "Help", url: "/help", icon: HelpCircle },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        {/* Brand */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-primary font-extrabold tracking-tight text-base">
            {collapsed ? "⚽" : "⚽ SoccerOS"}
          </SidebarGroupLabel>
        </SidebarGroup>

        {/* Main navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>Platform</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNav.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className="hover:bg-sidebar-accent/50"
                      activeClassName="bg-sidebar-accent text-sidebar-primary font-semibold"
                    >
                      <item.icon className="h-4 w-4 shrink-0" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarMenu>
          {bottomNav.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <NavLink
                  to={item.url}
                  className="hover:bg-sidebar-accent/50"
                  activeClassName="bg-sidebar-accent text-sidebar-primary font-semibold"
                >
                  <item.icon className="h-4 w-4 shrink-0" />
                  {!collapsed && <span>{item.title}</span>}
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
          <SidebarMenuItem>
            <SidebarMenuButton className="hover:bg-sidebar-accent/50 text-destructive">
              <LogOut className="h-4 w-4 shrink-0" />
              {!collapsed && <span>Logout</span>}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
