import { KPICard, PageHeader } from "@/components/shared";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Trophy,
  Users,
  ClipboardList,
  UserCircle,
  Calendar,
  TrendingUp,
  Plus,
  ArrowRight,
  Activity,
} from "lucide-react";
import { Link } from "react-router-dom";

const kpis = [
  { label: "Active Competitions", value: "7", trend: "+2 this month", icon: <Trophy className="h-5 w-5" /> },
  { label: "Registered Clubs", value: "142", trend: "+8 this week", icon: <Users className="h-5 w-5" /> },
  { label: "Total Players", value: "3,847", trend: "+124 new", icon: <UserCircle className="h-5 w-5" /> },
  { label: "Matches This Week", value: "23", trend: "6 live now", icon: <ClipboardList className="h-5 w-5" /> },
];

const upcomingMatches = [
  { id: "1", home: "FC Garuda", away: "PSM Makassar", date: "Today 15:00", venue: "GBK Stadium", comp: "Liga Nusantara" },
  { id: "2", home: "Persija Jakarta", away: "Bali United", date: "Today 19:00", venue: "Stadion Manahan", comp: "Liga Nusantara" },
  { id: "3", home: "Arema FC", away: "Persib Bandung", date: "Tomorrow 15:00", venue: "Stadion Kanjuruhan", comp: "Piala Indonesia" },
];

const recentActivity = [
  { text: "Ahmad Rizki scored 2 goals vs PSM Makassar", time: "12 min ago", type: "goal" },
  { text: "FC Garuda registered 3 new players", time: "1h ago", type: "transfer" },
  { text: "Referee evaluation submitted for Match #M-2847", time: "2h ago", type: "review" },
  { text: "Youth League U-23 standings updated", time: "3h ago", type: "update" },
  { text: "New academy enrollment from Jakarta", time: "4h ago", type: "registration" },
];

const quickActions = [
  { label: "New Competition", icon: Trophy, href: "/competitions/create", color: "bg-primary text-primary-foreground" },
  { label: "Register Player", icon: UserCircle, href: "/grassroots/register-player", color: "bg-secondary text-secondary-foreground" },
  { label: "Schedule Match", icon: Calendar, href: "/matches/new", color: "bg-accent text-accent-foreground" },
  { label: "View Analytics", icon: TrendingUp, href: "/grassroots/analytics", color: "bg-muted text-foreground" },
];

const Index = () => {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Dashboard"
        subtitle="Welcome back — here's what's happening across SoccerOS today."
      />

      {/* KPI Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi) => (
          <KPICard key={kpi.label} label={kpi.label} value={kpi.value} trend={kpi.trend} icon={kpi.icon} />
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {quickActions.map((action) => (
          <Link key={action.label} to={action.href}>
            <Card className="group cursor-pointer border hover:shadow-md transition-shadow active:scale-[0.98]">
              <CardContent className="p-4 flex items-center gap-3">
                <div className={`h-10 w-10 rounded-lg ${action.color} flex items-center justify-center shrink-0`}>
                  <action.icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-semibold">{action.label}</span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Upcoming Matches */}
        <Card className="lg:col-span-3">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base font-bold flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                Upcoming Matches
              </CardTitle>
              <Button variant="ghost" size="sm" className="text-xs gap-1" asChild>
                <Link to="/matches">
                  View all <ArrowRight className="h-3 w-3" />
                </Link>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {upcomingMatches.map((match) => (
              <div key={match.id} className="p-3 rounded-lg bg-muted/40 hover:bg-muted/60 transition-colors">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[11px] font-bold text-primary uppercase tracking-wider">
                    {match.date}
                  </span>
                  <Badge variant="secondary" className="text-[10px]">{match.comp}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-sm">{match.home}</span>
                  <span className="text-xs text-muted-foreground px-2">vs</span>
                  <span className="font-semibold text-sm">{match.away}</span>
                </div>
                <p className="text-[11px] text-muted-foreground mt-1">📍 {match.venue}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="lg:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-bold flex items-center gap-2">
              <Activity className="h-4 w-4 text-primary" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="h-2 w-2 rounded-full bg-primary mt-1.5 shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm leading-snug">{item.text}</p>
                  <p className="text-[11px] text-muted-foreground mt-0.5">{item.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
