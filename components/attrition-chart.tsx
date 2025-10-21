"use client"

import { Card } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"

const data = [
  { department: "Engineering", rate: 8.5 },
  { department: "Sales", rate: 15.2 },
  { department: "Marketing", rate: 11.8 },
  { department: "Operations", rate: 9.3 },
  { department: "Finance", rate: 7.1 },
  { department: "HR", rate: 6.4 },
]

export function AttritionChart() {
  return (
    <Card className="p-6">
      <div className="space-y-2 mb-6">
        <h3 className="text-lg font-semibold text-foreground">Attrition by Department</h3>
        <p className="text-sm text-muted-foreground">Current year attrition rates across departments</p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis
            dataKey="department"
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            angle={-45}
            textAnchor="end"
            height={80}
          />
          <YAxis
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
            label={{ value: "Rate (%)", angle: -90, position: "insideLeft" }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
            formatter={(value) => [`${value}%`, "Attrition Rate"]}
          />
          <Bar dataKey="rate" fill="hsl(var(--chart-2))" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="text-muted-foreground">Company Average: 12.3%</span>
        <span className="text-chart-3 font-medium">↓ 2.1% vs. last year</span>
      </div>
    </Card>
  )
}
