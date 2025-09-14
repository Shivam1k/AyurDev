import  { useState } from "react";
import { Search, Filter, BookOpen, Code, MapPin, Download, Eye } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
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

// Mock ICD-11 codes data
const mockIcdCodes = [
  {
    id: "1A00",
    title: "Cholera",
    parent: "1A0-1A9Z Intestinal infectious diseases",
    category: "Infectious diseases",
    status: "Current",
    mapped: true,
    usage: 23
  },
  {
    id: "1A20.0",
    title: "Typhoid fever",
    parent: "1A20-1A2Z Typhoid and paratyphoid fevers",
    category: "Infectious diseases", 
    status: "Current",
    mapped: true,
    usage: 45
  },
  {
    id: "2A00.0",
    title: "Malignant neoplasm of lip, oral cavity and pharynx",
    parent: "2A00-2F9Z Neoplasms",
    category: "Neoplasms",
    status: "Current",
    mapped: false,
    usage: 12
  },
  {
    id: "5A10",
    title: "Bipolar type I disorder",
    parent: "5A1-5A1Z Bipolar or related disorders",
    category: "Mental disorders",
    status: "Current", 
    mapped: true,
    usage: 78
  }
];

const ICD11Management = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [codes] = useState(mockIcdCodes);

  const filteredCodes = codes.filter(code => {
    const matchesSearch = code.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         code.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || code.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["all", ...Array.from(new Set(codes.map(code => code.category)))];

  return (
    <div className="space-y-6 p-6 lg:p-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold text-foreground">ICD-11 Code Management</h1>
        <p className="text-muted-foreground mt-2">
          Search, validate, and manage ICD-11 diagnostic codes for accurate medical coding
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-card border-border shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <BookOpen className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold text-foreground">45,329</p>
                <p className="text-sm text-muted-foreground">Total Codes</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card border-border shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <MapPin className="h-8 w-8 text-accent" />
              <div>
                <p className="text-2xl font-bold text-foreground">12,847</p>
                <p className="text-sm text-muted-foreground">Mapped Codes</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card border-border shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Code className="h-8 w-8 text-primary" />
              <div>
                <p className="text-2xl font-bold text-foreground">156</p>
                <p className="text-sm text-muted-foreground">Recently Used</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-gradient-card border-border shadow-card">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Filter className="h-8 w-8 text-accent" />
              <div>
                <p className="text-2xl font-bold text-foreground">98.2%</p>
                <p className="text-sm text-muted-foreground">Accuracy Rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Navigation */}
      <Card className="bg-gradient-card border-border shadow-card">
        <CardContent className="p-6">
          <Tabs defaultValue="search" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-muted">
              <TabsTrigger value="search">Code Search</TabsTrigger>
              <TabsTrigger value="browse">Browse Categories</TabsTrigger>
              <TabsTrigger value="mapping">Code Mapping</TabsTrigger>
            </TabsList>
            
            <TabsContent value="search" className="space-y-4 pt-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search ICD-11 codes by title, code, or description..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-background border-border"
                  />
                </div>
                <div className="flex gap-2">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-3 py-2 bg-background border border-border rounded-md text-foreground"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>
                        {category === "all" ? "All Categories" : category}
                      </option>
                    ))}
                  </select>
                  <Button variant="outline" className="border-border">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="browse" className="pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.slice(1).map(category => (
                  <Card key={category} className="cursor-pointer hover:bg-muted/50 border-border">
                    <CardContent className="p-4">
                      <h3 className="font-medium text-foreground">{category}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {codes.filter(code => code.category === category).length} codes
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="mapping" className="pt-4">
              <div className="text-center py-8">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">Code Mapping Tools</h3>
                <p className="text-muted-foreground mb-4">
                  Advanced tools for mapping between different coding systems
                </p>
                <Button className="bg-gradient-primary text-white shadow-medical">
                  Launch Mapping Tool
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* ICD-11 Codes Table */}
      <Card className="bg-gradient-card border-border shadow-card">
        <CardHeader>
          <CardTitle className="text-foreground">ICD-11 Codes</CardTitle>
          <CardDescription className="text-muted-foreground">
            {filteredCodes.length} codes found
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-border">
                <TableHead className="text-muted-foreground">Code</TableHead>
                <TableHead className="text-muted-foreground">Title</TableHead>
                <TableHead className="text-muted-foreground">Category</TableHead>
                <TableHead className="text-muted-foreground">Status</TableHead>
                <TableHead className="text-muted-foreground">Mapped</TableHead>
                <TableHead className="text-muted-foreground">Usage</TableHead>
                <TableHead className="text-muted-foreground">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCodes.map((code) => (
                <TableRow key={code.id} className="border-border hover:bg-muted/50">
                  <TableCell className="font-mono text-primary font-medium">{code.id}</TableCell>
                  <TableCell>
                    <div>
                      <div className="font-medium text-foreground">{code.title}</div>
                      <div className="text-sm text-muted-foreground">{code.parent}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary" className="bg-muted text-muted-foreground">
                      {code.category}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant="default"
                      className="bg-accent text-accent-foreground"
                    >
                      {code.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant={code.mapped ? 'default' : 'destructive'}
                      className={code.mapped ? 'bg-accent text-accent-foreground' : ''}
                    >
                      {code.mapped ? 'Mapped' : 'Unmapped'}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-foreground">{code.usage}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="border-border">
                            <Eye className="h-3 w-3 mr-1" />
                            View
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl bg-card border-border">
                          <DialogHeader>
                            <DialogTitle className="text-foreground">{code.title}</DialogTitle>
                            <DialogDescription className="text-muted-foreground">
                              ICD-11 Code: {code.id}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-medium text-foreground mb-2">Code Details</h4>
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                  <span className="text-muted-foreground">Category:</span>
                                  <span className="ml-2 text-foreground">{code.category}</span>
                                </div>
                                <div>
                                  <span className="text-muted-foreground">Status:</span>
                                  <span className="ml-2 text-foreground">{code.status}</span>
                                </div>
                                <div>
                                  <span className="text-muted-foreground">Usage Count:</span>
                                  <span className="ml-2 text-foreground">{code.usage}</span>
                                </div>
                                <div>
                                  <span className="text-muted-foreground">Mapping Status:</span>
                                  <span className="ml-2 text-foreground">
                                    {code.mapped ? 'Mapped' : 'Unmapped'}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-medium text-foreground mb-2">Parent Category</h4>
                              <p className="text-sm text-muted-foreground">{code.parent}</p>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
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

export default ICD11Management;