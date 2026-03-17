import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Calendar, Mail, Phone, MapPin, Award, Heart, Clock, TrendingUp, 
  FileText, CheckCircle, AlertCircle 
} from "lucide-react";

export default function RefereeProfilePage() {
  const referee = {
    id: "ref-001",
    name: "James Mitchell",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
    badge: "Gold",
    region: "London Southeast",
    email: "james.mitchell@referees.org",
    phone: "+44 20 7946 0958",
    dateOfBirth: "1985-03-15",
    nationality: "United Kingdom",
    joinDate: "2015-06-01",
    status: "Active",
  };

  const certifications = [
    { id: 1, type: "Premier League", level: "Gold", issuer: "FA", issueDate: "2024-01-15", expiryDate: "2025-01-15", status: "active" },
    { id: 2, type: "EFL Championship", level: "Gold", issuer: "FA", issueDate: "2024-01-15", expiryDate: "2025-01-15", status: "active" },
    { id: 3, type: "International", level: "Silver", issuer: "UEFA", issueDate: "2023-06-20", expiryDate: "2026-06-20", status: "active" },
  ];

  const matchHistory = [
    { id: 1, date: "2025-01-15", match: "Brighton vs West Ham", competition: "Premier League", rating: 4.7 },
    { id: 2, date: "2025-01-12", match: "Newcastle vs Aston Villa", competition: "Premier League", rating: 4.9 },
    { id: 3, date: "2025-01-10", match: "Everton vs Fulham", competition: "Premier League", rating: 4.5 },
    { id: 4, date: "2025-01-05", match: "Crystal Palace vs Manchester City", competition: "Premier League", rating: 4.8 },
  ];

  const evaluations = [
    { id: 1, date: "2025-01-15", assessor: "Jon Smith", overallScore: 4.7, positioning: 9, decisions: 9, gameManagement: 8 },
    { id: 2, date: "2025-01-12", assessor: "Sarah Jones", overallScore: 4.9, positioning: 10, decisions: 9, gameManagement: 9 },
  ];

  const fitnessTests = [
    { id: 1, date: "2025-01-01", type: "Beep Test", result: "Level 12", status: "Passed" },
    { id: 2, date: "2024-10-15", type: "Sprint Test", result: "42 sec (100m)", status: "Passed" },
    { id: 3, date: "2024-09-20", type: "Endurance Test", result: "45 min sustained", status: "Passed" },
  ];

  const availability = [
    { day: "Monday", available: true },
    { day: "Tuesday", available: true },
    { day: "Wednesday", available: true },
    { day: "Thursday", available: false },
    { day: "Friday", available: false },
    { day: "Saturday", available: true },
    { day: "Sunday", available: true },
  ];

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="p-8">
          <div className="flex items-start gap-6 mb-6">
            <Avatar className="w-24 h-24">
              <AvatarImage src={referee.avatar} alt={referee.name} />
              <AvatarFallback>{referee.name.charAt(0)}</AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  {referee.name}
                </h1>
                <Badge variant="default" className="text-base">
                  {referee.badge}
                </Badge>
                <Badge variant="outline">{referee.status}</Badge>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {referee.region} • Member since {referee.joinDate}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400">
                    {referee.email}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400">
                    {referee.phone}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400">
                    {referee.region}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                  <span className="text-gray-600 dark:text-gray-400">
                    Born {referee.dateOfBirth}
                  </span>
                </div>
              </div>
            </div>

            <Button>Edit Profile</Button>
          </div>
        </div>
      </Card>

      {/* Tabbed Content */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="certs">Certifications</TabsTrigger>
          <TabsTrigger value="matches">Match History</TabsTrigger>
          <TabsTrigger value="evals">Evaluations</TabsTrigger>
          <TabsTrigger value="fitness">Fitness</TabsTrigger>
          <TabsTrigger value="availability">Availability</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6 mt-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Stats */}
            <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
              <div className="p-6">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                  Career Statistics
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Total Matches
                    </span>
                    <strong className="text-gray-900 dark:text-white">
                      247
                    </strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Average Rating
                    </span>
                    <strong className="text-gray-900 dark:text-white">
                      4.8/5
                    </strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Red Cards Issued
                    </span>
                    <strong className="text-gray-900 dark:text-white">
                      28
                    </strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Yellow Cards Issued
                    </span>
                    <strong className="text-gray-900 dark:text-white">
                      412
                    </strong>
                  </div>
                </div>
              </div>
            </Card>

            {/* Personal Info */}
            <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
              <div className="p-6">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                  Personal Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Nationality
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {referee.nationality}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Date of Birth
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {referee.dateOfBirth}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Member Since
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {referee.joinDate}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </TabsContent>

        {/* Certifications Tab */}
        <TabsContent value="certs" className="space-y-4 mt-6">
          {certifications.map((cert) => (
            <Card
              key={cert.id}
              className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950"
            >
              <div className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {cert.type} - {cert.level}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Issued by {cert.issuer} • {cert.issueDate} to{" "}
                      {cert.expiryDate}
                    </p>
                  </div>
                </div>
                <Badge variant="default">Active</Badge>
              </div>
            </Card>
          ))}
          <Button className="w-full">Renew Certification</Button>
        </TabsContent>

        {/* Match History Tab */}
        <TabsContent value="matches" className="space-y-4 mt-6">
          {matchHistory.map((match) => (
            <Card
              key={match.id}
              className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950"
            >
              <div className="p-6 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {match.match}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {match.competition} • {match.date}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-yellow-600 dark:text-yellow-400">
                    {match.rating}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Rating
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>

        {/* Evaluations Tab */}
        <TabsContent value="evals" className="space-y-4 mt-6">
          {evaluations.map((eval_) => (
            <Card
              key={eval_.id}
              className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      Evaluation by {eval_.assessor}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {eval_.date}
                    </p>
                  </div>
                  <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                    {eval_.overallScore}
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">
                      Positioning
                    </p>
                    <p className="font-bold text-gray-900 dark:text-white">
                      {eval_.positioning}/10
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">Decisions</p>
                    <p className="font-bold text-gray-900 dark:text-white">
                      {eval_.decisions}/10
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-400">
                      Game Management
                    </p>
                    <p className="font-bold text-gray-900 dark:text-white">
                      {eval_.gameManagement}/10
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>

        {/* Fitness Tab */}
        <TabsContent value="fitness" className="space-y-4 mt-6">
          {fitnessTests.map((test) => (
            <Card
              key={test.id}
              className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950"
            >
              <div className="p-6 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {test.type}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {test.date}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-900 dark:text-white">
                    {test.result}
                  </p>
                  <Badge variant="default">{test.status}</Badge>
                </div>
              </div>
            </Card>
          ))}
        </TabsContent>

        {/* Availability Tab */}
        <TabsContent value="availability" className="mt-6">
          <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
            <div className="p-6">
              <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                Weekly Availability
              </h3>
              <div className="space-y-2">
                {availability.map((day) => (
                  <div key={day.day} className="flex items-center justify-between p-3 border border-gray-200 dark:border-gray-800 rounded-lg">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {day.day}
                    </span>
                    <Badge
                      variant={day.available ? "default" : "secondary"}
                    >
                      {day.available ? "Available" : "Unavailable"}
                    </Badge>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4">Update Availability</Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
