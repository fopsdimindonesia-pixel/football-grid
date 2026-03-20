import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppLayout } from "@/components/AppLayout";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

// Referee Pages
import RefereeDashboardPage from "./pages/referee/RefereeDashboardPage.tsx";
import RefereeProfilePage from "./pages/referee/RefereeProfilePage.tsx";
import RefereeListAdminPage from "./pages/referee/RefereeListAdminPage.tsx";
import RefereeRegistrationPage from "./pages/referee/RefereeRegistrationPage.tsx";
import RefereeCertificationManagementPage from "./pages/referee/RefereeCertificationManagementPage.tsx";
import RefereeAssignmentBoardPage from "./pages/referee/RefereeAssignmentBoardPage.tsx";
import RefereeMatchReportFormPage from "./pages/referee/RefereeMatchReportFormPage.tsx";
import RefereeEvaluationDashboardPage from "./pages/referee/RefereeEvaluationDashboardPage.tsx";
import RefereeAvailabilityCalendarPage from "./pages/referee/RefereeAvailabilityCalendarPage.tsx";
import RefereeFitnessTrackingPage from "./pages/referee/RefereeFitnessTrackingPage.tsx";
import RefereePaymentManagementPage from "./pages/referee/RefereePaymentManagementPage.tsx";
import RefereeIncidentReportsPage from "./pages/referee/RefereeIncidentReportsPage.tsx";
import RefereeTrainingDevelopmentPage from "./pages/referee/RefereeTrainingDevelopmentPage.tsx";
import RefereeStatisticsPage from "./pages/referee/RefereeStatisticsPage.tsx";
import RefereeGeographyMapPage from "./pages/referee/RefereeGeographyMapPage.tsx";
import RefereeSanctionsPage from "./pages/referee/RefereeSanctionsPage.tsx";

// Competition Pages
import CompetitionsPage from "./pages/competitions/CompetitionsPage.tsx";
import CompetitionDetailPage from "./pages/competitions/CompetitionDetailPage.tsx";
import CompetitionSchedulePage from "./pages/competitions/CompetitionSchedulePage.tsx";
import CompetitionTablePage from "./pages/competitions/CompetitionTablePage.tsx";
import CompetitionTeamsPage from "./pages/competitions/CompetitionTeamsPage.tsx";
import CompetitionPlayersPage from "./pages/competitions/CompetitionPlayersPage.tsx";
import CompetitionRulesPage from "./pages/competitions/CompetitionRulesPage.tsx";
import CompetitionVenuesPage from "./pages/competitions/CompetitionVenuesPage.tsx";
import CompetitionRefereesPage from "./pages/competitions/CompetitionRefereesPage.tsx";
import CompetitionReportsPage from "./pages/competitions/CompetitionReportsPage.tsx";
import CompetitionAnalyticsPage from "./pages/competitions/CompetitionAnalyticsPage.tsx";
import CompetitionStatisticsPage from "./pages/competitions/CompetitionStatisticsPage.tsx";
import CompetitionInjuriesPage from "./pages/competitions/CompetitionInjuriesPage.tsx";
import CompetitionAwardsPage from "./pages/competitions/CompetitionAwardsPage.tsx";
import CompetitionNewsPage from "./pages/competitions/CompetitionNewsPage.tsx";
import CompetitionCommunityPage from "./pages/competitions/CompetitionCommunityPage.tsx";
import CompetitionTicketingPage from "./pages/competitions/CompetitionTicketingPage.tsx";
import CompetitionPartnershipPage from "./pages/competitions/CompetitionPartnershipPage.tsx";
import CompetitionSponsorshipPage from "./pages/competitions/CompetitionSponsorshipPage.tsx";
import CompetitionFinancialPage from "./pages/competitions/CompetitionFinancialPage.tsx";
import CompetitionHRPage from "./pages/competitions/CompetitionHRPage.tsx";
import CompetitionGovernancePage from "./pages/competitions/CompetitionGovernancePage.tsx";
import CompetitionCompliancePage from "./pages/competitions/CompetitionCompliancePage.tsx";
import CompetitionAppealPage from "./pages/competitions/CompetitionAppealPage.tsx";
import CompetitionAuditPage from "./pages/competitions/CompetitionAuditPage.tsx";
import CompetitionArchivePage from "./pages/competitions/CompetitionArchivePage.tsx";
import CompetitionScoutingPage from "./pages/competitions/CompetitionScoutingPage.tsx";
import CompetitionMediaPage from "./pages/competitions/CompetitionMediaPage.tsx";
import CompetitionBroadcastPage from "./pages/competitions/CompetitionBroadcastPage.tsx";
import CompetitionDisciplinaryPage from "./pages/competitions/CompetitionDisciplinaryPage.tsx";

// Additional Competition Pages
import CompetitionDashboardPage from "./pages/competitions/CompetitionDashboardPage.tsx";
import CompetitionListPage from "./pages/competitions/CompetitionListPage.tsx";
import CreateCompetitionPage from "./pages/competitions/CreateCompetitionPage.tsx";
import CompetitionFixturesPage from "./pages/competitions/CompetitionFixturesPage.tsx";
import CompetitionStandingsPage from "./pages/competitions/CompetitionStandingsPage.tsx";
import CompetitionResultsPage from "./pages/competitions/CompetitionResultsPage.tsx";
import CompetitionFinancialSummaryPage from "./pages/competitions/CompetitionFinancialSummaryPage.tsx";
import CompetitionAwardsManagementPage from "./pages/competitions/CompetitionAwardsManagementPage.tsx";
import CompetitionCalendarPublicPage from "./pages/competitions/CompetitionCalendarPublicPage.tsx";
import CompetitionLiveCenterPage from "./pages/competitions/CompetitionLiveCenterPage.tsx";
import CompetitionMediaCenterPage from "./pages/competitions/CompetitionMediaCenterPage.tsx";
import CompetitionPlayerRegistrationPage from "./pages/competitions/CompetitionPlayerRegistrationPage.tsx";
import CompetitionProtestManagementPage from "./pages/competitions/CompetitionProtestManagementPage.tsx";
import CompetitionRulesEditorPage from "./pages/competitions/CompetitionRulesEditorPage.tsx";
import CompetitionScoutingPage2 from "./pages/competitions/CompetitionScoutingPage.tsx";
import CompetitionSponsorManagementPage from "./pages/competitions/CompetitionSponsorManagementPage.tsx";
import GroupStageManagerPage from "./pages/competitions/GroupStageManagerPage.tsx";
import KnockoutBracketPage from "./pages/competitions/KnockoutBracketPage.tsx";
import SchedulingEnginePage from "./pages/competitions/SchedulingEnginePage.tsx";
import TeamRegistrationManagementPage from "./pages/competitions/TeamRegistrationManagementPage.tsx";
import VenueManagementPage from "./pages/competitions/VenueManagementPage.tsx";

// Match Pages
import MatchCenterDashboardPage from "./pages/matches/MatchCenterDashboardPage.tsx";
import MatchListPage from "./pages/matches/MatchListPage.tsx";
import MatchDetailPreMatchPage from "./pages/matches/MatchDetailPreMatchPage.tsx";
import LiveMatchCenterPage from "./pages/matches/LiveMatchCenterPage.tsx";
import MatchDetailPostMatchPage from "./pages/matches/MatchDetailPostMatchPage.tsx";
import MatchSetupFormPage from "./pages/matches/MatchSetupFormPage.tsx";
import LineupSubmissionPage from "./pages/matches/LineupSubmissionPage.tsx";
import MatchTimelineEditorPage from "./pages/matches/MatchTimelineEditorPage.tsx";
import MatchStatisticsEntryPage from "./pages/matches/MatchStatisticsEntryPage.tsx";
import MatchReportGeneratorPage from "./pages/matches/MatchReportGeneratorPage.tsx";
import MatchGalleryPage from "./pages/matches/MatchGalleryPage.tsx";
import MatchConditionsPage from "./pages/matches/MatchConditionsPage.tsx";
import MatchAttendancePage from "./pages/matches/MatchAttendancePage.tsx";
import MatchDayOperationsPage from "./pages/matches/MatchDayOperationsPage.tsx";
import MatchReschedulePage from "./pages/matches/MatchReschedulePage.tsx";
import MatchProtestFormPage from "./pages/matches/MatchProtestFormPage.tsx";
import MatchVARReviewLogPage from "./pages/matches/MatchVARReviewLogPage.tsx";
import MatchBroadcastManagementPage from "./pages/matches/MatchBroadcastManagementPage.tsx";
import PlayerPerformanceMatchPage from "./pages/matches/PlayerPerformanceMatchPage.tsx";
import MatchComparisonPage from "./pages/matches/MatchComparisonPage.tsx";
import MatchBulkSchedulePage from "./pages/matches/MatchBulkSchedulePage.tsx";
import OfflineMatchReportPage from "./pages/matches/OfflineMatchReportPage.tsx";
import MatchChecklistMobilePage from "./pages/matches/MatchChecklistMobilePage.tsx";
import MatchEventFeedPage from "./pages/matches/MatchEventFeedPage.tsx";
import MultiMatchLiveViewPage from "./pages/matches/MultiMatchLiveViewPage.tsx";
import MatchAnalyticsDeepDivePage from "./pages/matches/MatchAnalyticsDeepDivePage.tsx";

// Grassroots Pages
import GrassrootsDashboardPage from "./pages/grassroots/GrassrootsDashboardPage.tsx";
import AcademyManagementPage from "./pages/grassroots/AcademyManagementPage.tsx";
import YouthCompetitionHubPage from "./pages/grassroots/YouthCompetitionHubPage.tsx";
import PlayerDevelopmentTrackerPage from "./pages/grassroots/PlayerDevelopmentTrackerPage.tsx";
import TalentIdentificationProgramPage from "./pages/grassroots/TalentIdentificationProgramPage.tsx";
import YouthPlayerRegistrationPage from "./pages/grassroots/YouthPlayerRegistrationPage.tsx";
import AcademyEnrollmentPage from "./pages/grassroots/AcademyEnrollmentPage.tsx";
import ParentPortalPage from "./pages/grassroots/ParentPortalPage.tsx";
import YouthCoachManagementPage from "./pages/grassroots/YouthCoachManagementPage.tsx";
import GrassrootsEventCalendarPage from "./pages/grassroots/GrassrootsEventCalendarPage.tsx";
import SchoolFootballProgramPage from "./pages/grassroots/SchoolFootballProgramPage.tsx";
import GrassrootsAnalyticsPage from "./pages/grassroots/GrassrootsAnalyticsPage.tsx";
import GrassrootsFacilityBookingPage from "./pages/grassroots/GrassrootsFacilityBookingPage.tsx";
import GrassrootsFundingGrantsPage from "./pages/grassroots/GrassrootsFundingGrantsPage.tsx";

// Auth Pages
import LoginPage from "./pages/auth/LoginPage.tsx";
import RegistrationPage from "./pages/auth/RegistrationPage.tsx";
import EmailVerificationPage from "./pages/auth/EmailVerificationPage.tsx";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage.tsx";
import ResetPasswordPage from "./pages/auth/ResetPasswordPage.tsx";
import TwoFactorAuthSetupPage from "./pages/auth/TwoFactorAuthSetupPage.tsx";
import ActiveSessionsPage from "./pages/auth/ActiveSessionsPage.tsx";
import ApiKeysManagementPage from "./pages/auth/ApiKeysManagementPage.tsx";
import AuditLogViewerPage from "./pages/auth/AuditLogViewerPage.tsx";
import RoleManagementPage from "./pages/auth/RoleManagementPage.tsx";

// Admin/User Management Pages
import UserDirectoryPage from "./pages/admin/UserDirectoryPage.tsx";
import UserProfileDetailPage from "./pages/admin/UserProfileDetailPage.tsx";
import OrganizationListPage from "./pages/admin/OrganizationListPage.tsx";
import OrganizationDetailPage from "./pages/admin/OrganizationDetailPage.tsx";
import OrganizationFormPage from "./pages/admin/OrganizationFormPage.tsx";
import TenantManagementPage from "./pages/admin/TenantManagementPage.tsx";
import InvitationManagementPage from "./pages/admin/InvitationManagementPage.tsx";
import UserInviteFormPage from "./pages/admin/UserInviteFormPage.tsx";
import OrganizationSettingsPage from "./pages/admin/OrganizationSettingsPage.tsx";
import UserActivityLogPage from "./pages/admin/UserActivityLogPage.tsx";
import OrganizationMembersPage from "./pages/admin/OrganizationMembersPage.tsx";
import BulkUserImportPage from "./pages/admin/BulkUserImportPage.tsx";
import UserMergeToolPage from "./pages/admin/UserMergeToolPage.tsx";
import AccessRequestQueuePage from "./pages/admin/AccessRequestQueuePage.tsx";
import OrganizationAnalyticsPage from "./pages/admin/OrganizationAnalyticsPage.tsx";
import UserSelfProfilePage from "./pages/admin/UserSelfProfilePage.tsx";

// Club Pages
import ClubDashboardPage from "./pages/clubs/ClubDashboardPage.tsx";
import ClubProfilePage from "./pages/clubs/ClubProfilePage.tsx";
import ClubStaffDirectoryPage from "./pages/clubs/ClubStaffDirectoryPage.tsx";
import SquadManagementPage from "./pages/clubs/SquadManagementPage.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Auth pages outside layout */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/verify-email" element={<EmailVerificationPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />

          {/* All app pages inside layout */}
          <Route element={<AppLayout />}>
            <Route path="/" element={<Index />} />

            {/* Clubs */}
            <Route path="/clubs/dashboard" element={<ClubDashboardPage />} />
            <Route path="/clubs/:clubId" element={<ClubProfilePage />} />
            <Route path="/clubs/:clubId/staff" element={<ClubStaffDirectoryPage />} />
            <Route path="/clubs/:clubId/squad" element={<SquadManagementPage />} />

            {/* Referee Routes */}
            <Route path="/referee/dashboard" element={<RefereeDashboardPage />} />
            <Route path="/referees/:refId" element={<RefereeProfilePage />} />
            <Route path="/admin/referees" element={<RefereeListAdminPage />} />
            <Route path="/referees/register" element={<RefereeRegistrationPage />} />
            <Route path="/referees/:refId/certifications" element={<RefereeCertificationManagementPage />} />
            <Route path="/admin/referee-assignments" element={<RefereeAssignmentBoardPage />} />
            <Route path="/referee/match-report/:matchId" element={<RefereeMatchReportFormPage />} />
            <Route path="/admin/referee-evaluations" element={<RefereeEvaluationDashboardPage />} />
            <Route path="/referee/availability" element={<RefereeAvailabilityCalendarPage />} />
            <Route path="/referees/:refId/fitness" element={<RefereeFitnessTrackingPage />} />
            <Route path="/admin/referee-payments" element={<RefereePaymentManagementPage />} />
            <Route path="/admin/referee-incidents" element={<RefereeIncidentReportsPage />} />
            <Route path="/referee/training" element={<RefereeTrainingDevelopmentPage />} />
            <Route path="/referees/:refId/stats" element={<RefereeStatisticsPage />} />
            <Route path="/admin/referee-map" element={<RefereeGeographyMapPage />} />
            <Route path="/admin/referee-sanctions" element={<RefereeSanctionsPage />} />

            {/* Competition Routes */}
            <Route path="/competitions" element={<CompetitionsPage />} />
            <Route path="/competitions/create" element={<CreateCompetitionPage />} />
            <Route path="/competitions/dashboard" element={<CompetitionDashboardPage />} />
            <Route path="/competitions/list" element={<CompetitionListPage />} />
            <Route path="/competitions/:compId" element={<CompetitionDetailPage />} />
            <Route path="/competitions/:compId/schedule" element={<CompetitionSchedulePage />} />
            <Route path="/competitions/:compId/table" element={<CompetitionTablePage />} />
            <Route path="/competitions/:compId/teams" element={<CompetitionTeamsPage />} />
            <Route path="/competitions/:compId/players" element={<CompetitionPlayersPage />} />
            <Route path="/competitions/:compId/rules" element={<CompetitionRulesPage />} />
            <Route path="/competitions/:compId/venues" element={<CompetitionVenuesPage />} />
            <Route path="/competitions/:compId/referees" element={<CompetitionRefereesPage />} />
            <Route path="/competitions/:compId/reports" element={<CompetitionReportsPage />} />
            <Route path="/competitions/:compId/analytics" element={<CompetitionAnalyticsPage />} />
            <Route path="/competitions/:compId/statistics" element={<CompetitionStatisticsPage />} />
            <Route path="/competitions/:compId/injuries" element={<CompetitionInjuriesPage />} />
            <Route path="/competitions/:compId/awards" element={<CompetitionAwardsPage />} />
            <Route path="/competitions/:compId/news" element={<CompetitionNewsPage />} />
            <Route path="/competitions/:compId/community" element={<CompetitionCommunityPage />} />
            <Route path="/competitions/:compId/ticketing" element={<CompetitionTicketingPage />} />
            <Route path="/competitions/:compId/partnerships" element={<CompetitionPartnershipPage />} />
            <Route path="/competitions/:compId/sponsorship" element={<CompetitionSponsorshipPage />} />
            <Route path="/competitions/:compId/financial" element={<CompetitionFinancialPage />} />
            <Route path="/competitions/:compId/hr" element={<CompetitionHRPage />} />
            <Route path="/competitions/:compId/governance" element={<CompetitionGovernancePage />} />
            <Route path="/competitions/:compId/compliance" element={<CompetitionCompliancePage />} />
            <Route path="/competitions/:compId/appeals" element={<CompetitionAppealPage />} />
            <Route path="/competitions/:compId/audit" element={<CompetitionAuditPage />} />
            <Route path="/competitions/:compId/archive" element={<CompetitionArchivePage />} />
            <Route path="/competitions/:compId/scouting" element={<CompetitionScoutingPage />} />
            <Route path="/competitions/:compId/media" element={<CompetitionMediaPage />} />
            <Route path="/competitions/:compId/broadcast" element={<CompetitionBroadcastPage />} />
            <Route path="/competitions/:compId/disciplinary" element={<CompetitionDisciplinaryPage />} />
            <Route path="/competitions/:compId/fixtures" element={<CompetitionFixturesPage />} />
            <Route path="/competitions/:compId/standings" element={<CompetitionStandingsPage />} />
            <Route path="/competitions/:compId/results" element={<CompetitionResultsPage />} />
            <Route path="/competitions/:compId/financial-summary" element={<CompetitionFinancialSummaryPage />} />
            <Route path="/competitions/:compId/awards-management" element={<CompetitionAwardsManagementPage />} />
            <Route path="/competitions/:compId/calendar" element={<CompetitionCalendarPublicPage />} />
            <Route path="/competitions/:compId/live" element={<CompetitionLiveCenterPage />} />
            <Route path="/competitions/:compId/media-center" element={<CompetitionMediaCenterPage />} />
            <Route path="/competitions/:compId/player-registration" element={<CompetitionPlayerRegistrationPage />} />
            <Route path="/competitions/:compId/protests" element={<CompetitionProtestManagementPage />} />
            <Route path="/competitions/:compId/rules-editor" element={<CompetitionRulesEditorPage />} />
            <Route path="/competitions/:compId/sponsor-management" element={<CompetitionSponsorManagementPage />} />
            <Route path="/competitions/:compId/groups" element={<GroupStageManagerPage />} />
            <Route path="/competitions/:compId/knockout" element={<KnockoutBracketPage />} />
            <Route path="/competitions/:compId/scheduling" element={<SchedulingEnginePage />} />
            <Route path="/competitions/:compId/team-registration" element={<TeamRegistrationManagementPage />} />
            <Route path="/competitions/:compId/venue-management" element={<VenueManagementPage />} />

            {/* Match Routes */}
            <Route path="/matches/dashboard" element={<MatchCenterDashboardPage />} />
            <Route path="/matches" element={<MatchListPage />} />
            <Route path="/matches/new" element={<MatchSetupFormPage />} />
            <Route path="/matches/live" element={<MultiMatchLiveViewPage />} />
            <Route path="/matches/compare" element={<MatchComparisonPage />} />
            <Route path="/competitions/:compId/schedule/bulk" element={<MatchBulkSchedulePage />} />
            <Route path="/matches/:matchId" element={<MatchDetailPreMatchPage />} />
            <Route path="/matches/:matchId/live" element={<LiveMatchCenterPage />} />
            <Route path="/matches/:matchId/post" element={<MatchDetailPostMatchPage />} />
            <Route path="/matches/:matchId/lineup" element={<LineupSubmissionPage />} />
            <Route path="/matches/:matchId/timeline" element={<MatchTimelineEditorPage />} />
            <Route path="/matches/:matchId/stats/entry" element={<MatchStatisticsEntryPage />} />
            <Route path="/matches/:matchId/report" element={<MatchReportGeneratorPage />} />
            <Route path="/matches/:matchId/gallery" element={<MatchGalleryPage />} />
            <Route path="/matches/:matchId/conditions" element={<MatchConditionsPage />} />
            <Route path="/matches/:matchId/attendance" element={<MatchAttendancePage />} />
            <Route path="/matches/:matchId/operations" element={<MatchDayOperationsPage />} />
            <Route path="/matches/:matchId/reschedule" element={<MatchReschedulePage />} />
            <Route path="/matches/:matchId/protest" element={<MatchProtestFormPage />} />
            <Route path="/matches/:matchId/var" element={<MatchVARReviewLogPage />} />
            <Route path="/matches/:matchId/broadcast" element={<MatchBroadcastManagementPage />} />
            <Route path="/matches/:matchId/player-performance" element={<PlayerPerformanceMatchPage />} />
            <Route path="/matches/:matchId/offline-report" element={<OfflineMatchReportPage />} />
            <Route path="/matches/:matchId/checklist" element={<MatchChecklistMobilePage />} />
            <Route path="/matches/:matchId/feed" element={<MatchEventFeedPage />} />
            <Route path="/matches/:matchId/analytics" element={<MatchAnalyticsDeepDivePage />} />

            {/* Grassroots Routes */}
            <Route path="/grassroots" element={<GrassrootsDashboardPage />} />
            <Route path="/grassroots/academies" element={<AcademyManagementPage />} />
            <Route path="/grassroots/competitions" element={<YouthCompetitionHubPage />} />
            <Route path="/grassroots/player-development" element={<PlayerDevelopmentTrackerPage />} />
            <Route path="/grassroots/talent-identification" element={<TalentIdentificationProgramPage />} />
            <Route path="/grassroots/register-player" element={<YouthPlayerRegistrationPage />} />
            <Route path="/grassroots/enrollment" element={<AcademyEnrollmentPage />} />
            <Route path="/grassroots/parent-portal" element={<ParentPortalPage />} />
            <Route path="/grassroots/coaches" element={<YouthCoachManagementPage />} />
            <Route path="/grassroots/events" element={<GrassrootsEventCalendarPage />} />
            <Route path="/grassroots/school-programs" element={<SchoolFootballProgramPage />} />
            <Route path="/grassroots/analytics" element={<GrassrootsAnalyticsPage />} />
            <Route path="/grassroots/facility-booking" element={<GrassrootsFacilityBookingPage />} />
            <Route path="/grassroots/funding-grants" element={<GrassrootsFundingGrantsPage />} />

            {/* Settings & Auth */}
            <Route path="/settings/two-factor" element={<TwoFactorAuthSetupPage />} />
            <Route path="/settings/sessions" element={<ActiveSessionsPage />} />
            <Route path="/settings/api-keys" element={<ApiKeysManagementPage />} />
            <Route path="/settings/audit-log" element={<AuditLogViewerPage />} />
            <Route path="/admin/roles" element={<RoleManagementPage />} />

            {/* Admin/User Management Routes */}
            <Route path="/admin/users" element={<UserDirectoryPage />} />
            <Route path="/admin/users/:userId" element={<UserProfileDetailPage />} />
            <Route path="/admin/organizations" element={<OrganizationListPage />} />
            <Route path="/admin/organizations/:orgId" element={<OrganizationDetailPage />} />
            <Route path="/admin/organizations/new" element={<OrganizationFormPage />} />
            <Route path="/admin/organizations/:orgId/edit" element={<OrganizationFormPage />} />
            <Route path="/admin/tenants" element={<TenantManagementPage />} />
            <Route path="/admin/invitations" element={<InvitationManagementPage />} />
            <Route path="/admin/invite-user" element={<UserInviteFormPage />} />
            <Route path="/admin/organizations/:orgId/settings" element={<OrganizationSettingsPage />} />
            <Route path="/admin/activity-log" element={<UserActivityLogPage />} />
            <Route path="/admin/organizations/:orgId/members" element={<OrganizationMembersPage />} />
            <Route path="/admin/users/bulk-import" element={<BulkUserImportPage />} />
            <Route path="/admin/users/merge" element={<UserMergeToolPage />} />
            <Route path="/admin/access-requests" element={<AccessRequestQueuePage />} />
            <Route path="/admin/organizations/:orgId/analytics" element={<OrganizationAnalyticsPage />} />
            <Route path="/profile" element={<UserSelfProfilePage />} />
          </Route>

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
