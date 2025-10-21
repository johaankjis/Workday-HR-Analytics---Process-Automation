import { DashboardHeader } from "@/components/dashboard-header"
import { MetricsOverview } from "@/components/metrics-overview"
import { OnboardingChart } from "@/components/onboarding-chart"
import { AttritionChart } from "@/components/attrition-chart"
import { WorkflowStatus } from "@/components/workflow-status"
import { RecentActivity } from "@/components/recent-activity"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="container mx-auto px-4 py-6 space-y-6">
        <MetricsOverview />

        <div className="grid gap-6 md:grid-cols-2">
          <OnboardingChart />
          <AttritionChart />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <WorkflowStatus />
          </div>
          <RecentActivity />
        </div>
      </main>
    </div>
  )
}
