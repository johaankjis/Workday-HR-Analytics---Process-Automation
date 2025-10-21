import { Card } from "@/components/ui/card"
import { FileText, Users, CheckCircle, AlertCircle } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "report",
    title: "Onboarding Report Generated",
    description: "Q2 2024 metrics compiled",
    time: "2 hours ago",
    icon: FileText,
  },
  {
    id: 2,
    type: "workflow",
    title: "Workflow Completed",
    description: "Emily Rodriguez onboarding",
    time: "4 hours ago",
    icon: CheckCircle,
  },
  {
    id: 3,
    type: "alert",
    title: "SLA Breach Warning",
    description: "Background check delayed",
    time: "6 hours ago",
    icon: AlertCircle,
  },
  {
    id: 4,
    type: "team",
    title: "New Team Member",
    description: "Sarah Johnson joined Engineering",
    time: "1 day ago",
    icon: Users,
  },
  {
    id: 5,
    type: "report",
    title: "Attrition Analysis Updated",
    description: "Department metrics refreshed",
    time: "1 day ago",
    icon: FileText,
  },
]

const iconConfig = {
  report: { color: "text-chart-1", bg: "bg-chart-1/10" },
  workflow: { color: "text-chart-3", bg: "bg-chart-3/10" },
  alert: { color: "text-destructive", bg: "bg-destructive/10" },
  team: { color: "text-chart-2", bg: "bg-chart-2/10" },
}

export function RecentActivity() {
  return (
    <Card className="p-6">
      <div className="space-y-1 mb-6">
        <h3 className="text-lg font-semibold text-foreground">Recent Activity</h3>
        <p className="text-sm text-muted-foreground">Latest system updates</p>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon
          const config = iconConfig[activity.type as keyof typeof iconConfig]

          return (
            <div key={activity.id} className="flex gap-3">
              <div className={`h-10 w-10 rounded-lg ${config.bg} flex items-center justify-center flex-shrink-0`}>
                <Icon className={`h-5 w-5 ${config.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">{activity.title}</p>
                <p className="text-sm text-muted-foreground truncate">{activity.description}</p>
                <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
