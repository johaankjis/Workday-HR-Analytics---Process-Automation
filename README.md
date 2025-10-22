# Workday HR Analytics – Process Automation

A Next.js 15 dashboard that showcases Workday HR analytics and workflow automation metrics. The UI is composed of reusable shadcn/ui primitives and custom visualizations powered by Recharts.

## Tech stack
- **Framework:** Next.js 15 with the App Router (`app/` directory)
- **Language:** TypeScript with React 19
- **Styling:** Tailwind CSS (including custom CSS variables for chart colors) and shadcn/ui components
- **Data visualization:** Recharts for line and bar charts
- **Form & state helpers:** React Hook Form, Zod validators, Radix UI primitives

## Project structure
```
app/                Application entry point, global styles, and root layout
components/        Feature-level widgets (dashboard header, charts, workflow lists, activity feed)
components/ui/     Reusable UI primitives generated from shadcn/ui
hooks/             Custom React hooks (e.g., mobile detection, toast helpers)
lib/               Shared utilities such as Tailwind class merging
public/            Static assets exposed at runtime
styles/            Tailwind configuration and design tokens
```

## Key features
- **Dashboard shell** – `app/page.tsx` composes the primary layout with header, charts, workflow tracker, and activity feed.
- **Metrics overview** – `components/metrics-overview.tsx` shows KPI cards with icons and trend indicators.
- **Onboarding performance** – `components/onboarding-chart.tsx` renders a dual-line chart comparing onboarding cycle time against target values.
- **Attrition analysis** – `components/attrition-chart.tsx` visualizes attrition by department using a bar chart.
- **Workflow tracking** – `components/workflow-status.tsx` lists automated HR workflows with progress bars and status badges.
- **Recent activity** – `components/recent-activity.tsx` summarises the latest system events with contextual icons.

## Available scripts
| Command | Description |
| --- | --- |
| `pnpm dev` | Start the development server with hot reloading. |
| `pnpm build` | Build the production bundle. |
| `pnpm start` | Run the compiled production build. |
| `pnpm lint` | Lint the project with ESLint. |

## Getting started
1. Install dependencies with `pnpm install` (or your preferred package manager).
2. Run `pnpm dev` and open the reported localhost URL in your browser.

## License
No explicit license file is included. Treat the project as proprietary unless a license is added.
