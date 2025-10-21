import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, AlertCircle, ArrowRight } from "lucide-react"

const workflows = [
  {
    id: 1,
    name: "New Hire Onboarding - Engineering",
    employee: "Sarah Johnson",
    status: "in-progress",
    progress: 65,
    currentStep: "IT Equipment Setup",
    dueDate: "2 days",
  },
  {
    id: 2,
    name: "Performance Review Approval",
    employee: "Michael Chen",
    status: "pending",
    progress: 30,
    currentStep: "Manager Approval",
    dueDate: "5 days",
  },
  {
    id: 3,
    name: "New Hire Onboarding - Sales",
    employee: "Emily Rodriguez",
    status: "completed",
    progress: 100,
    currentStep: "Completed",
    dueDate: "Completed",
  },
  {
    id: 4,
    name: "Department Transfer Request",
    employee: "David Kim",
    status: "in-progress",
    progress: 45,
    currentStep: "HR Review",
    dueDate: "3 days",
  },
  {
    id: 5,
    name: "New Hire Onboarding - Marketing",
    employee: "Jessica Taylor",
    status: "at-risk",
    progress: 20,
    currentStep: "Background Check",
    dueDate: "Overdue",
  },
]

const statusConfig = {
  completed: { icon: CheckCircle, color: "text-chart-3", bg: "bg-chart-3/10", label: "Completed" },
  "in-progress": { icon: Clock, color: "text-chart-1", bg: "bg-chart-1/10", label: "In Progress" },
  pending: { icon: Clock, color: "text-muted-foreground", bg: "bg-muted", label: "Pending" },
  "at-risk": { icon: AlertCircle, color: "text-destructive", bg: "bg-destructive/10", label: "At Risk" },
}

export function WorkflowStatus() {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-foreground">Active Workflows</h3>
          <p className="text-sm text-muted-foreground">Automated business process tracking</p>
        </div>
        <Button variant="outline" size="sm">
          View All
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-4">
        {workflows.map((workflow) => {
          const config = statusConfig[workflow.status as keyof typeof statusConfig]
          const StatusIcon = config.icon

          return (
            <div key={workflow.id} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium text-foreground">{workflow.name}</h4>
                    <Badge variant="secondary" className={`${config.bg} ${config.color} border-0`}>
                      <StatusIcon className="h-3 w-3 mr-1" />
                      {config.label}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{workflow.employee}</p>
                </div>
                <span className="text-sm text-muted-foreground">{workflow.dueDate}</span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{workflow.currentStep}</span>
                  <span className="font-medium text-foreground">{workflow.progress}%</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all"
                    style={{ width: `${workflow.progress}%` }}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
