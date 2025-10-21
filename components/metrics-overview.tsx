import { Card } from "@/components/ui/card"
import { TrendingUp, Users, Clock, CheckCircle } from "lucide-react"

const metrics = [
  {
    title: "Manual Effort Reduction",
    value: "42%",
    change: "+12%",
    trend: "up",
    icon: TrendingUp,
    description: "vs. last quarter",
  },
  {
    title: "Onboarding Cycle Time",
    value: "8.5 days",
    change: "-25%",
    trend: "up",
    icon: Clock,
    description: "Average time reduced",
  },
  {
    title: "Active Workflows",
    value: "127",
    change: "+18",
    trend: "up",
    icon: CheckCircle,
    description: "Automated processes",
  },
  {
    title: "Attrition Rate",
    value: "12.3%",
    change: "-2.1%",
    trend: "up",
    icon: Users,
    description: "Year over year",
  },
]

export function MetricsOverview() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => {
        const Icon = metric.icon
        return (
          <Card key={metric.title} className="p-6">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">{metric.title}</p>
                <p className="text-3xl font-bold text-foreground">{metric.value}</p>
              </div>
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Icon className="h-5 w-5 text-primary" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className={`text-sm font-medium ${metric.trend === "up" ? "text-chart-3" : "text-destructive"}`}>
                {metric.change}
              </span>
              <span className="text-sm text-muted-foreground">{metric.description}</span>
            </div>
          </Card>
        )
      })}
    </div>
  )
}
