import  { useState } from "react";
import { Shield, AlertTriangle, CheckCircle, Clock, Eye, Download, Activity, FileText } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

// Mock audit logs data
const mockAuditLogs = [
  {
    id: "AUD001",
    timestamp: "2024-01-15 14:30:25",
    user: "Dr. Sarah Johnson",
    action: "Patient Record Access",
    resource: "Patient ID: P001234",
    status: "Success",
    ipAddress: "192.168.1.100",
    severity: "Info"
  },
  {
    id: "AUD002",
    timestamp: "2024-01-15 14:28:15",
    user: "System Admin",
    action: "ICD-11 Code Update",
    resource: "Code: 1A00.0",
    status: "Success", 
    ipAddress: "10.0.0.50",
    severity: "Info"
  },
  {
    id: "AUD003",
    timestamp: "2024-01-15 14:25:10",
    user: "Nurse Mary Smith",
    action: "Failed Login Attempt",
    resource: "Authentication System",
    status: "Failed",
    ipAddress: "192.168.1.200",
    severity: "Warning"
  },
  {
    id: "AUD004",
    timestamp: "2024-01-15 14:20:45",
    user: "Dr. Michael Brown",
    action: "Report Generation",
    resource: "Compliance Report RPT003",
    status: "Success",
    ipAddress: "192.168.1.150",
    severity: "Info"
  }
];

const complianceChecks = [
  {
    category: "Data Security",
    checks: [
      { name: "Encryption at Rest", status: "Compliant", lastChecked: "2024-01-15 12:00" },
      { name: "Access Controls", status: "Compliant", lastChecked: "2024-01-15 12:00" },
      { name: "Audit Logging", status: "Compliant", lastChecked: "2024-01-15 12:00" },
      { name: "Data Backup", status: "Warning", lastChecked: "2024-01-15 11:45" }
    ]
  },
  {
    category: "HIPAA Compliance",
    checks: [
      { name: "PHI Protection", status: "Compliant", lastChecked: "2024-01-15 12:00" },
      { name: "User Training", status: "Compliant", lastChecked: "2024-01-14 16:30" },
      { name: "Business Associate Agreements", status: "Compliant", lastChecked: "2024-01-14 15:20" },
      { name: "Risk Assessment", status: "Due", lastChecked: "2024-01-10 09:15" }
    ]
  },
  {
    category: "ICD-11 Standards",
    checks: [
      { name: "Code Validation", status: "Compliant", lastChecked: "2024-01-15 13:30" },
      { name: "Mapping Accuracy", status: "Compliant", lastChecked: "2024-01-15 13:30" },
      { name: "Documentation Standards", status: "Compliant", lastChecked: "2024-01-15 13:15" },
      { name: "Version Compliance", status: "Compliant", lastChecked: "2024-01-15 13:00" }
    ]
  }
];

const Compliance = () => {
  const [auditLogs] = useState(mockAuditLogs);
  const [selectedSeverity, setSelectedSeverity] = useState("all");

  const filteredLogs = auditLogs.filter(log => 
    selectedSeverity === "all" || log.severity.toLowerCase() === selectedSeverity.toLowerCase()
  );

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'compliant': return 'bg-accent text-accent-foreground';
      case 'warning': return 'bg-yellow-500 text-yellow-50';
      case 'due': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'info': return 'bg-primary text-primary-foreground';
      case 'warning': return 'bg-yellow-500 text-yellow-50';
      case 'error': return 'bg-destructive text-destructive-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="space-y-6 p-6 lg:p-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-foreground">Compliance & Audit</h1>
        <p className="text-muted-foreground mt-2">
          Monitor compliance status, audit trails, and regulatory requirements
        </p>
      </div>

      {/* Compliance Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-card border-border shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <CheckCircle className="h-8 w-8 text-accent" />
              <div>
                <p className="text-2xl font-bold text-foreground">98.2%</p>
                <p className="text-sm text-muted-foreground">Overall Score</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card border-border shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold text-foreground">24</p>
                <p className="text-sm text-muted-foreground">Active Checks</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card border-border shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <AlertTriangle className="h-8 w-8 text-yellow-500" />
              <div>
                <p className="text-2xl font-bold text-foreground">2</p>
                <p className="text-sm text-muted-foreground">Warnings</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card border-border shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Activity className="h-8 w-8 text-accent" />
              <div>
                <p className="text-2xl font-bold text-foreground">1,247</p>
                <p className="text-sm text-muted-foreground">Audit Events</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Compliance Status */}
      <Card className="bg-gradient-card border-border shadow-card">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-foreground">Compliance Status</CardTitle>
              <CardDescription className="text-muted-foreground">
                Current compliance status across all categories
              </CardDescription>
            </div>
            <Button variant="outline" className="border-border">
              <Download className="h-4 w-4 mr-2" />
              Export Report
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-muted">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="security">Data Security</TabsTrigger>
              <TabsTrigger value="hipaa">HIPAA</TabsTrigger>
              <TabsTrigger value="icd11">ICD-11</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="space-y-4 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {complianceChecks.map((category) => (
                  <Card key={category.category} className="border-border">
                    <CardHeader>
                      <CardTitle className="text-lg text-foreground">{category.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {category.checks.map((check, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <span className="text-sm text-foreground">{check.name}</span>
                            <Badge 
                              variant="secondary" 
                              className={getStatusColor(check.status)}
                            >
                              {check.status}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            {complianceChecks.map((category) => (
              <TabsContent 
                key={category.category.toLowerCase().replace(' ', '')} 
                value={category.category.toLowerCase().replace(' ', '')}
                className="pt-4"
              >
                <div className="space-y-4">
                  {category.checks.map((check, index) => (
                    <Card key={index} className="border-border">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h3 className="font-medium text-foreground">{check.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              Last checked: {check.lastChecked}
                            </p>
                          </div>
                          <Badge 
                            variant="secondary" 
                            className={getStatusColor(check.status)}
                          >
                            {check.status}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      {/* Audit Logs */}
      <Card className="bg-gradient-card border-border shadow-card">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-foreground">Audit Logs</CardTitle>
              <CardDescription className="text-muted-foreground">
                System access and activity tracking
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <select
                value={selectedSeverity}
                onChange={(e) => setSelectedSeverity(e.target.value)}
                className="px-3 py-2 bg-background border border-border rounded-md text-foreground"
              >
                <option value="all">All Severities</option>
                <option value="info">Info</option>
                <option value="warning">Warning</option>
                <option value="error">Error</option>
              </select>
              <Button variant="outline" className="border-border">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-border">
                <TableHead className="text-muted-foreground">Timestamp</TableHead>
                <TableHead className="text-muted-foreground">User</TableHead>
                <TableHead className="text-muted-foreground">Action</TableHead>
                <TableHead className="text-muted-foreground">Resource</TableHead>
                <TableHead className="text-muted-foreground">Status</TableHead>
                <TableHead className="text-muted-foreground">Severity</TableHead>
                <TableHead className="text-muted-foreground">IP Address</TableHead>
                <TableHead className="text-muted-foreground">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredLogs.map((log) => (
                <TableRow key={log.id} className="border-border hover:bg-muted/50">
                  <TableCell className="font-mono text-sm text-foreground">{log.timestamp}</TableCell>
                  <TableCell className="text-foreground">{log.user}</TableCell>
                  <TableCell className="text-foreground">{log.action}</TableCell>
                  <TableCell className="text-foreground">{log.resource}</TableCell>
                  <TableCell>
                    <Badge 
                      variant={log.status === 'Success' ? 'default' : 'destructive'}
                      className={log.status === 'Success' ? 'bg-accent text-accent-foreground' : ''}
                    >
                      {log.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant="secondary" 
                      className={getSeverityColor(log.severity)}
                    >
                      {log.severity}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-mono text-sm text-foreground">{log.ipAddress}</TableCell>
                  <TableCell>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="border-border">
                          <Eye className="h-3 w-3 mr-1" />
                          Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-card border-border">
                        <DialogHeader>
                          <DialogTitle className="text-foreground">Audit Log Details</DialogTitle>
                          <DialogDescription className="text-muted-foreground">
                            Event ID: {log.id}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">Timestamp:</span>
                              <span className="ml-2 text-foreground font-mono">{log.timestamp}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">User:</span>
                              <span className="ml-2 text-foreground">{log.user}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Action:</span>
                              <span className="ml-2 text-foreground">{log.action}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Resource:</span>
                              <span className="ml-2 text-foreground">{log.resource}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Status:</span>
                              <span className="ml-2 text-foreground">{log.status}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">IP Address:</span>
                              <span className="ml-2 text-foreground font-mono">{log.ipAddress}</span>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Compliance;