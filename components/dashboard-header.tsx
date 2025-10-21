import { Button } from "@/components/ui/button"
import { Bell, Settings, User } from "lucide-react"

export function DashboardHeader() {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">W</span>
              </div>
              <h1 className="text-xl font-semibold text-foreground">Workday Analytics</h1>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                Overview
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Reports
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Workflows
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Analytics
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Testing
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
