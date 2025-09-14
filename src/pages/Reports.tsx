import React, { useState } from "react";
import { BarChart3, FileText, Download, Calendar, Filter, TrendingUp, PieChart, Activity } from "lucide-react";
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
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";

// Mock reports data
const mockReports = [
  {
    id: "RPT001",
    name: "Patient Demographics Report",
    type: "Demographics",
    status: "Ready",
    lastGenerated: "2024-01-15 14:30",
    recordCount: 2847,
    size: "2.3 MB"
  },
  {
    id: "RPT002", 
    name: "ICD-11 Usage Analysis",
    type: "Clinical",
    status: "Ready",
    lastGenerated: "2024-01-15 12:15",
    recordCount: 12847,
    size: "5.7 MB"
  },
  {
    id: "RPT003",
    name: "Compliance Audit Report",
    type: "Compliance",
    status: "Processing",
    lastGenerated: "2024-01-14 16:45",
    recordCount: 0,
    size: "Pending"
  },
  {
    id: "RPT004",
    name: "Data Quality Assessment",
    type: "Quality",
    status: "Ready",
    lastGenerated: "2024-01-15 09:20",
    recordCount: 1567,
    size: "1.8 MB"
  }
];

const reportTemplates = [
  {
    id: "TPL001",
    name: "Patient Summary Report",
    description: "Comprehensive patient demographics and visit statistics",
    category: "Clinical",
    icon: FileText
  },
  {
    id: "TPL002", 
    name: "ICD-11 Code Distribution",
    description: "Analysis of diagnostic code usage and trends",
    category: "Analytics",
    icon: PieChart
  },
  {
    id: "TPL003",
    name: "Compliance Dashboard",
    description: "Regulatory compliance status and audit trails",
    category: "Compliance", 
    icon: Activity
  },
  {
    id: "TPL004",
    name: "Performance Metrics",
    description: "System performance and data processing statistics",
    category: "Performance",
    icon: TrendingUp
  }
];

const Reports = () => {
  const [reports] = useState(mockReports);
  const [isGenerateReportOpen, setIsGenerateReportOpen] = useState(false);

  return (
    <div className="space-y-6 p-6 lg:p-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-semibold text-foreground">Reports & Analytics</h1>
          <p className="text-muted-foreground mt-2">
            Generate comprehensive reports and analyze healthcare data trends
          </p>
        </div>
        <Dialog open={isGenerateReportOpen} onOpenChange={setIsGenerateReportOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-primary text-white shadow-medical">
              <BarChart3 className="h-4 w-4 mr-2" />
              Generate Report
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl bg-card border-border">
            <DialogHeader>
              <DialogTitle className="text-foreground">Generate New Report</DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Select a report template to generate custom analytics
              </DialogDescription>
            </DialogHeader>
            <GenerateReportForm onClose={() => setIsGenerateReportOpen(false)} />
          </DialogContent>
        </Dialog>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-card border-border shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <FileText className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold text-foreground">24</p>
                <p className="text-sm text-muted-foreground">Total Reports</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card border-border shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Calendar className="h-8 w-8 text-accent" />
              <div>
                <p className="text-2xl font-bold text-foreground">8</p>
                <p className="text-sm text-muted-foreground">This Month</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card border-border shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold text-foreground">156</p>
                <p className="text-sm text-muted-foreground">Data Points</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card border-border shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Download className="h-8 w-8 text-accent" />
              <div>
                <p className="text-2xl font-bold text-foreground">89</p>
                <p className="text-sm text-muted-foreground">Downloads</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Report Templates */}
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-4">Report Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reportTemplates.map((template) => (
            <Card 
              key={template.id} 
              className="cursor-pointer transition-all duration-300 hover:scale-105 shadow-card hover:shadow-medical border-border"
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <template.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-foreground">{template.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {template.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="w-full justify-center bg-muted text-muted-foreground">
                  {template.category}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Recent Reports */}
      <Card className="bg-gradient-card border-border shadow-card">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-foreground">Recent Reports</CardTitle>
              <CardDescription className="text-muted-foreground">
                Generated reports and analytics
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="border-border">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-border">
                <TableHead className="text-muted-foreground">Report ID</TableHead>
                <TableHead className="text-muted-foreground">Name</TableHead>
                <TableHead className="text-muted-foreground">Type</TableHead>
                <TableHead className="text-muted-foreground">Status</TableHead>
                <TableHead className="text-muted-foreground">Records</TableHead>
                <TableHead className="text-muted-foreground">Generated</TableHead>
                <TableHead className="text-muted-foreground">Size</TableHead>
                <TableHead className="text-muted-foreground">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reports.map((report) => (
                <TableRow key={report.id} className="border-border hover:bg-muted/50">
                  <TableCell className="font-mono text-primary font-medium">{report.id}</TableCell>
                  <TableCell className="text-foreground font-medium">{report.name}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="bg-muted text-muted-foreground">
                      {report.type}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant={report.status === 'Ready' ? 'default' : 'secondary'}
                      className={report.status === 'Ready' ? 'bg-accent text-accent-foreground' : ''}
                    >
                      {report.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-foreground">
                    {report.recordCount > 0 ? report.recordCount.toLocaleString() : 'N/A'}
                  </TableCell>
                  <TableCell className="text-foreground">{report.lastGenerated}</TableCell>
                  <TableCell className="text-foreground">{report.size}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      {report.status === 'Ready' && (
                        <Button variant="outline" size="sm" className="border-border">
                          <Download className="h-3 w-3 mr-1" />
                          Download
                        </Button>
                      )}
                      <Button variant="outline" size="sm" className="border-border">
                        View
                      </Button>
                    </div>
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

const GenerateReportForm = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="template" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-muted">
          <TabsTrigger value="template">Select Template</TabsTrigger>
          <TabsTrigger value="parameters">Parameters</TabsTrigger>
        </TabsList>
        
        <TabsContent value="template" className="space-y-4 pt-4">
          <div className="grid grid-cols-1 gap-4">
            {reportTemplates.map((template) => (
              <Card key={template.id} className="cursor-pointer hover:bg-muted/50 border-border">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <template.icon className="h-6 w-6 text-primary" />
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground">{template.name}</h3>
                      <p className="text-sm text-muted-foreground">{template.description}</p>
                    </div>
                    <Badge variant="secondary" className="bg-muted text-muted-foreground">
                      {template.category}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="parameters" className="space-y-4 pt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startDate" className="text-foreground">Start Date</Label>
              <Input id="startDate" type="date" className="bg-background border-border" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="endDate" className="text-foreground">End Date</Label>
              <Input id="endDate" type="date" className="bg-background border-border" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="reportName" className="text-foreground">Report Name</Label>
              <Input id="reportName" placeholder="Custom Report Name" className="bg-background border-border" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="format" className="text-foreground">Export Format</Label>
              <select className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground">
                <option>PDF</option>
                <option>Excel</option>
                <option>CSV</option>
              </select>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="flex justify-end gap-3 pt-6 border-t border-border">
        <Button variant="outline" onClick={onClose} className="border-border">
          Cancel
        </Button>
        <Button onClick={onClose} className="bg-gradient-primary text-white shadow-medical">
          Generate Report
        </Button>
      </div>
    </div>
  );
};

export default Reports;