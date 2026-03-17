import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Award, CheckCircle, Clock } from "lucide-react";

export default function RefereeTrainingDevelopmentPage() {
  const enrolledCourses = [
    {
      id: 1,
      title: "VAR Technology & Decision Making",
      provider: "FA",
      duration: "4 weeks",
      progress: 75,
      status: "In Progress",
      completionDate: "2025-02-15",
    },
    {
      id: 2,
      title: "Laws of the Game 2024/25 Update",
      provider: "IFAB/FA",
      duration: "2 weeks",
      progress: 100,
      status: "Completed",
      completionDate: "2025-01-10",
    },
    {
      id: 3,
      title: "Communication & Game Management",
      provider: "FA",
      duration: "3 weeks",
      progress: 45,
      status: "In Progress",
      completionDate: "2025-03-01",
    },
  ];

  const availableCourses = [
    {
      id: 4,
      title: "Positioning & Movement Techniques",
      provider: "FA",
      duration: "3 weeks",
      cpdPoints: 6,
      level: "Intermediate",
    },
    {
      id: 5,
      title: "Conflict Resolution in Football",
      provider: "FA",
      duration: "2 weeks",
      cpdPoints: 4,
      level: "Intermediate",
    },
    {
      id: 6,
      title: "Handball & Offside: Advanced Topics",
      provider: "UEFA",
      duration: "4 weeks",
      cpdPoints: 8,
      level: "Advanced",
    },
    {
      id: 7,
      title: "Fitness Training Program",
      provider: "FA",
      duration: "6 weeks",
      cpdPoints: 10,
      level: "Advanced",
    },
  ];

  const certificates = [
    {
      id: 1,
      title: "Responsible Officiating",
      issuer: "FA",
      date: "2024-12-15",
      score: 92,
    },
    {
      id: 2,
      title: "Advanced Positioning",
      issuer: "UEFA",
      date: "2024-11-20",
      score: 88,
    },
    {
      id: 3,
      title: "Decision Making Excellence",
      issuer: "FA",
      date: "2024-10-05",
      score: 95,
    },
  ];

  const cpdStats = {
    currentPoints: 34,
    requiredPoints: 40,
    completed: 9,
    inProgress: 3,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Training & Development
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Enhance your skills through our learning platform
        </p>
      </div>

      {/* CPD Points Summary */}
      <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Continuing Professional Development (CPD)
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Current Points
              </p>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                {cpdStats.currentPoints}
              </p>
            </div>
            <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Required Points
              </p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                {cpdStats.requiredPoints}
              </p>
            </div>
            <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Completed Courses
              </p>
              <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                {cpdStats.completed}
              </p>
            </div>
            <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                In Progress
              </p>
              <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">
                {cpdStats.inProgress}
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Progress towards requirement
              </span>
              <span className="text-sm font-bold text-gray-900 dark:text-white">
                {Math.round((cpdStats.currentPoints / cpdStats.requiredPoints) * 100)}%
              </span>
            </div>
            <Progress
              value={(cpdStats.currentPoints / cpdStats.requiredPoints) * 100}
              className="h-3"
            />
          </div>
        </div>
      </Card>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Enrolled Courses */}
        <div className="lg:col-span-2">
          <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Enrolled Courses
              </h2>

              <div className="space-y-4">
                {enrolledCourses.map((course) => (
                  <div
                    key={course.id}
                    className="border border-gray-200 dark:border-gray-800 rounded-lg p-4"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white">
                          {course.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {course.provider} • {course.duration}
                        </p>
                      </div>
                      <Badge
                        variant={
                          course.status === "Completed"
                            ? "default"
                            : "secondary"
                        }
                      >
                        {course.status}
                      </Badge>
                    </div>

                    <div className="mb-3">
                      <div className="flex justify-between mb-1">
                        <span className="text-xs text-gray-600 dark:text-gray-400">
                          Progress
                        </span>
                        <span className="text-xs font-bold text-gray-900 dark:text-white">
                          {course.progress}%
                        </span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        Completion: {course.completionDate}
                      </p>
                      <Button size="sm" variant="outline">
                        Continue
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Available Courses */}
          <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 mt-6">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Available Courses
              </h2>

              <div className="space-y-4">
                {availableCourses.map((course) => (
                  <div
                    key={course.id}
                    className="border border-gray-200 dark:border-gray-800 rounded-lg p-4 hover:shadow-md transition"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white">
                          {course.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {course.provider} • {course.duration}
                        </p>
                      </div>
                      <Badge variant="outline">{course.level}</Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {course.cpdPoints} CPD Points
                      </span>
                      <Button size="sm">Enroll</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        {/* Certificates */}
        <Card className="border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 h-fit">
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Certificates
            </h3>

            <div className="space-y-3">
              {certificates.map((cert) => (
                <div key={cert.id} className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg">
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">
                        {cert.title}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {cert.issuer}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        {cert.date}
                      </p>
                      <p className="text-sm font-bold text-yellow-600 dark:text-yellow-400 mt-1">
                        Score: {cert.score}%
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
