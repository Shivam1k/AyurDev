import { 
  Users, 
  FileText, 
  BarChart3, 
  Shield, 
  Activity, 
  Clock,
  AlertTriangle,
  CheckCircle
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
// import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

// ✅ Types for strictness
type QuickStat = {
  title: string
  value: string
  change: string
  icon: LucideIcon
  color: string
}

type NavigationCard = {
  title: string
  description: string
  icon: LucideIcon
  route: string
  color: string
}

type RecentActivity = {
  icon: LucideIcon
  title: string
  time: string
  status: "success" | "info" | "warning"
}

const quickStats: QuickStat[] = [
  {
    title: "Total Patients",
    value: "2,847",
    change: "+12.5%",
    icon: Users,
    color: "text-primary"
  },
  {
    title: "ICD-11 Codes",
    value: "45,329",
    change: "+2.1%",
    icon: FileText,
    color: "text-accent"
  },
  {
    title: "Active Reports",
    value: "156",
    change: "+8.3%",
    icon: BarChart3,
    color: "text-primary"
  },
  {
    title: "Compliance Score",
    value: "98.2%",
    change: "+0.5%",
    icon: Shield,
    color: "text-accent"
  }
];

const navigationCards: NavigationCard[] = [
  {
    title: "Patient Management",
    description: "Manage patient records, demographics, and medical history",
    icon: Users,
    route: "/patients",
    color: "bg-gradient-primary"
  },
  {
    title: "ICD-11 Code Management",
    description: "Search, map, and validate ICD-11 diagnostic codes",
    icon: FileText,
    route: "/icd11",
    color: "bg-gradient-card"
  },
  {
    title: "Reports Generation",
    description: "Generate compliance reports and data analytics",
    icon: BarChart3,
    route: "/reports",
    color: "bg-gradient-primary"
  },
  {
    title: "Compliance Audit",
    description: "View audit logs and compliance monitoring",
    icon: Shield,
    route: "/compliance",
    color: "bg-gradient-card"
  }
];

const recentActivities: RecentActivity[] = [
  {
    icon: CheckCircle,
    title: "Patient data validated",
    time: "2 minutes ago",
    status: "success"
  },
  {
    icon: Activity,
    title: "ICD-11 mapping completed",
    time: "15 minutes ago",
    status: "info"
  },
  {
    icon: Clock,
    title: "Compliance report generated",
    time: "1 hour ago",
    status: "info"
  },
  {
    icon: AlertTriangle,
    title: "Data validation error",
    time: "2 hours ago",
    status: "warning"
  }
];

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6 p-6 lg:p-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-foreground">Healthcare Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Welcome to the NAMASTE EMR system. Monitor your healthcare data management at a glance.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quickStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.title} className="bg-gradient-card border-border shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className={`text-sm ${stat.color}`}>{stat.change} from last month</p>
                  </div>
                  <Icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Navigation Cards */}
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {navigationCards.map((card) => {
            const Icon = card.icon;
            return (
              <Card 
                key={card.title} 
                className="cursor-pointer transition-all duration-300 hover:scale-105 shadow-card hover:shadow-medical border-border"
                onClick={() => navigate(card.route)}
              >
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${card.color} rounded-xl mx-auto mb-4 flex items-center justify-center`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-foreground">{card.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {card.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gradient-card border-border shadow-card">
          <CardHeader>
            <CardTitle className="text-foreground">Recent Activity</CardTitle>
            <CardDescription className="text-muted-foreground">
              Latest system activities and updates
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <Icon className={`h-5 w-5 ${
                      activity.status === 'success' ? 'text-accent' :
                      activity.status === 'warning' ? 'text-destructive' :
                      'text-primary'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{activity.title}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* System Status */}
        <Card className="bg-gradient-card border-border shadow-card">
          <CardHeader>
            <CardTitle className="text-foreground">System Status</CardTitle>
            <CardDescription className="text-muted-foreground">
              Current system health and performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Database Connection</span>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span className="text-sm text-accent">Online</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">ICD-11 API</span>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span className="text-sm text-accent">Connected</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Data Validation</span>
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-primary" />
                  <span className="text-sm text-primary">Processing</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground">Backup Status</span>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  <span className="text-sm text-accent">Up to date</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
