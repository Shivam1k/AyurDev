// import  { useState } from "react";
// import { Search, Plus, Filter, Download, User, Phone, Mail, Calendar } from "lucide-react";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
// import { Button } from "../components/ui/button";
// import { Input } from "../components/ui/input";
// import { Label } from "../components/ui/label";
// import { Badge } from "../components/ui/badge";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "../components/ui/table";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "../components/ui/dialog";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

// // Mock patient data
// const mockPatients = [
//   {
//     id: "P001",
//     name: "John Smith",
//     age: 45,
//     gender: "Male",
//     phone: "+1 (555) 123-4567",
//     email: "john.smith@email.com",
//     lastVisit: "2024-01-15",
//     status: "Active",
//     mrn: "MRN001234"
//   },
//   {
//     id: "P002",
//     name: "Sarah Johnson",
//     age: 32,
//     gender: "Female",
//     phone: "+1 (555) 987-6543",
//     email: "sarah.j@email.com",
//     lastVisit: "2024-01-12",
//     status: "Active",
//     mrn: "MRN001235"
//   },
//   {
//     id: "P003",
//     name: "Michael Brown",
//     age: 67,
//     gender: "Male",
//     phone: "+1 (555) 456-7890",
//     email: "m.brown@email.com",
//     lastVisit: "2024-01-10",
//     status: "Inactive",
//     mrn: "MRN001236"
//   }
// ];

// const PatientManagement = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [isAddPatientOpen, setIsAddPatientOpen] = useState(false);
//   const [patients] = useState(mockPatients);

//   const filteredPatients = patients.filter(patient =>
//     patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     patient.mrn.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     patient.email.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="space-y-6 p-6 lg:p-8">
//       {/* Header */}
//       <div className="flex justify-between items-start">
//         <div>
//           <h1 className="text-3xl font-semibold text-foreground">Patient Management</h1>
//           <p className="text-muted-foreground mt-2">
//             Manage patient records, demographics, and medical information
//           </p>
//         </div>
//         <Dialog open={isAddPatientOpen} onOpenChange={setIsAddPatientOpen}>
//           <DialogTrigger asChild>
//             <Button className="bg-gradient-primary text-white shadow-medical">
//               <Plus className="h-4 w-4 mr-2" />
//               Add Patient
//             </Button>
//           </DialogTrigger>
//           <DialogContent className="max-w-2xl bg-card border-border">
//             <DialogHeader>
//               <DialogTitle className="text-foreground">Add New Patient</DialogTitle>
//               <DialogDescription className="text-muted-foreground">
//                 Enter patient information to create a new record
//               </DialogDescription>
//             </DialogHeader>
//             <AddPatientForm onClose={() => setIsAddPatientOpen(false)} />
//           </DialogContent>
//         </Dialog>
//       </div>

//       {/* Statistics Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//         <Card className="bg-gradient-card border-border shadow-card">
//           <CardContent className="p-6">
//             <div className="flex items-center gap-3">
//               <User className="h-8 w-8 text-primary" />
//               <div>
//                 <p className="text-2xl font-bold text-foreground">2,847</p>
//                 <p className="text-sm text-muted-foreground">Total Patients</p>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//         <Card className="bg-gradient-card border-border shadow-card">
//           <CardContent className="p-6">
//             <div className="flex items-center gap-3">
//               <Calendar className="h-8 w-8 text-accent" />
//               <div>
//                 <p className="text-2xl font-bold text-foreground">156</p>
//                 <p className="text-sm text-muted-foreground">This Month</p>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//         <Card className="bg-gradient-card border-border shadow-card">
//           <CardContent className="p-6">
//             <div className="flex items-center gap-3">
//               <Phone className="h-8 w-8 text-primary" />
//               <div>
//                 <p className="text-2xl font-bold text-foreground">2,691</p>
//                 <p className="text-sm text-muted-foreground">Active</p>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//         <Card className="bg-gradient-card border-border shadow-card">
//           <CardContent className="p-6">
//             <div className="flex items-center gap-3">
//               <Mail className="h-8 w-8 text-accent" />
//               <div>
//                 <p className="text-2xl font-bold text-foreground">156</p>
//                 <p className="text-sm text-muted-foreground">Inactive</p>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Search and Filters */}
//       <Card className="bg-gradient-card border-border shadow-card">
//         <CardContent className="p-6">
//           <div className="flex flex-col sm:flex-row gap-4">
//             <div className="flex-1 relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//               <Input
//                 placeholder="Search patients by name, MRN, or email..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="pl-10 bg-background border-border"
//               />
//             </div>
//             <div className="flex gap-2">
//               <Button variant="outline" className="border-border">
//                 <Filter className="h-4 w-4 mr-2" />
//                 Filter
//               </Button>
//               <Button variant="outline" className="border-border">
//                 <Download className="h-4 w-4 mr-2" />
//                 Export
//               </Button>
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Patient Table */}
//       <Card className="bg-gradient-card border-border shadow-card">
//         <CardHeader>
//           <CardTitle className="text-foreground">Patient Records</CardTitle>
//           <CardDescription className="text-muted-foreground">
//             {filteredPatients.length} patients found
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <Table>
//             <TableHeader>
//               <TableRow className="border-border">
//                 <TableHead className="text-muted-foreground">MRN</TableHead>
//                 <TableHead className="text-muted-foreground">Name</TableHead>
//                 <TableHead className="text-muted-foreground">Age</TableHead>
//                 <TableHead className="text-muted-foreground">Gender</TableHead>
//                 <TableHead className="text-muted-foreground">Contact</TableHead>
//                 <TableHead className="text-muted-foreground">Last Visit</TableHead>
//                 <TableHead className="text-muted-foreground">Status</TableHead>
//                 <TableHead className="text-muted-foreground">Actions</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {filteredPatients.map((patient) => (
//                 <TableRow key={patient.id} className="border-border hover:bg-muted/50">
//                   <TableCell className="font-medium text-foreground">{patient.mrn}</TableCell>
//                   <TableCell className="text-foreground">{patient.name}</TableCell>
//                   <TableCell className="text-foreground">{patient.age}</TableCell>
//                   <TableCell className="text-foreground">{patient.gender}</TableCell>
//                   <TableCell>
//                     <div className="text-sm">
//                       <div className="text-foreground">{patient.phone}</div>
//                       <div className="text-muted-foreground">{patient.email}</div>
//                     </div>
//                   </TableCell>
//                   <TableCell className="text-foreground">{patient.lastVisit}</TableCell>
//                   <TableCell>
//                     <Badge 
//                       variant={patient.status === 'Active' ? 'default' : 'secondary'}
//                       className={patient.status === 'Active' ? 'bg-accent text-accent-foreground' : ''}
//                     >
//                       {patient.status}
//                     </Badge>
//                   </TableCell>
//                   <TableCell>
//                     <Button variant="outline" size="sm" className="border-border">
//                       View
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// const AddPatientForm = ({ onClose }: { onClose: () => void }) => {
//   return (
//     <Tabs defaultValue="demographics" className="w-full">
//       <TabsList className="grid w-full grid-cols-3 bg-muted">
//         <TabsTrigger value="demographics">Demographics</TabsTrigger>
//         <TabsTrigger value="contact">Contact</TabsTrigger>
//         <TabsTrigger value="medical">Medical</TabsTrigger>
//       </TabsList>
      
//       <TabsContent value="demographics" className="space-y-4 pt-4">
//         <div className="grid grid-cols-2 gap-4">
//           <div className="space-y-2">
//             <Label htmlFor="firstName" className="text-foreground">First Name</Label>
//             <Input id="firstName" placeholder="John" className="bg-background border-border" />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
//             <Input id="lastName" placeholder="Doe" className="bg-background border-border" />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="dob" className="text-foreground">Date of Birth</Label>
//             <Input id="dob" type="date" className="bg-background border-border" />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="gender" className="text-foreground">Gender</Label>
//             <Input id="gender" placeholder="Male/Female/Other" className="bg-background border-border" />
//           </div>
//         </div>
//       </TabsContent>
      
//       <TabsContent value="contact" className="space-y-4 pt-4">
//         <div className="grid grid-cols-1 gap-4">
//           <div className="space-y-2">
//             <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
//             <Input id="phone" placeholder="+1 (555) 123-4567" className="bg-background border-border" />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="email" className="text-foreground">Email Address</Label>
//             <Input id="email" type="email" placeholder="john.doe@email.com" className="bg-background border-border" />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="address" className="text-foreground">Address</Label>
//             <Input id="address" placeholder="123 Main St, City, State 12345" className="bg-background border-border" />
//           </div>
//         </div>
//       </TabsContent>
      
//       <TabsContent value="medical" className="space-y-4 pt-4">
//         <div className="grid grid-cols-1 gap-4">
//           <div className="space-y-2">
//             <Label htmlFor="mrn" className="text-foreground">Medical Record Number</Label>
//             <Input id="mrn" placeholder="MRN001234" className="bg-background border-border" />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="insurance" className="text-foreground">Insurance Provider</Label>
//             <Input id="insurance" placeholder="Blue Cross Blue Shield" className="bg-background border-border" />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="allergies" className="text-foreground">Known Allergies</Label>
//             <Input id="allergies" placeholder="Penicillin, Latex" className="bg-background border-border" />
//           </div>
//         </div>
//       </TabsContent>
      
//       <div className="flex justify-end gap-3 pt-6">
//         <Button variant="outline" onClick={onClose} className="border-border">
//           Cancel
//         </Button>
//         <Button onClick={onClose} className="bg-gradient-primary text-white shadow-medical">
//           Add Patient
//         </Button>
//       </div>
//     </Tabs>
//   );
// };

// export default PatientManagement;





// import React, { useState } from "react";

// interface SearchResult {
//   rank: number;
//   term: string;
//   id: number;
//   score: number;
// }

// interface SearchResponse {
//   query: string;
//   results: SearchResult[];
// }

// const MedicalSearchForm: React.FC = () => {
//   const [query, setQuery] = useState("");
//   const [searchData, setSearchData] = useState<SearchResponse | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   // ✅ handle API call
//   const handleSearch = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!query.trim()) return;

//     setLoading(true);
//     setError("");
//     setSearchData(null);

//     try {
//       const response = await fetch(`/search?q=${encodeURIComponent(query)}`);
//       if (!response.ok) throw new Error(`HTTP ${response.status}`);

//       const data: SearchResponse = await response.json();
//       setSearchData(data);
//     } catch (err: any) {
//       setError(`Search Error: ${err.message}`);
//       console.error("❌ Fetch error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ✅ Components
//   const ScoreBar: React.FC<{ score: number }> = ({ score }) => {
//     const percentage = Math.round(score * 100);
//     return (
//       <div className="flex items-center gap-3">
//         <span className="text-blue-500 font-semibold text-sm">
//           {score.toFixed(3)}
//         </span>
//         <div className="w-20 h-1.5 bg-gray-200 rounded-full overflow-hidden">
//           <div
//             className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-500"
//             style={{ width: `${percentage}%` }}
//           />
//         </div>
//       </div>
//     );
//   };

//   const ResultItem: React.FC<{ result: SearchResult }> = ({ result }) => (
//     <div className="bg-white border border-gray-200 rounded-xl p-5 mb-4 shadow hover:shadow-lg transition-all duration-300">
//       <div className="flex justify-between items-center mb-3">
//         <div className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
//           #{result.rank}
//         </div>
//       </div>
//       <div className="text-lg font-semibold text-gray-800 mb-3">
//         {result.term}
//       </div>
//       <div className="flex justify-between items-center pt-3 border-t border-gray-100">
//         <span className="text-sm text-gray-500 font-mono">ID: {result.id}</span>
//         <ScoreBar score={result.score} />
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 p-5">
//       <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
//         {/* Header */}
//         <div className="bg-gradient-to-r from-blue-400 to-cyan-400 text-white p-8 text-center">
//           <h1 className="text-4xl font-light mb-2">🔍 Medical Term Search</h1>
//           <p className="text-blue-100 text-lg">
//             Search for medical terms and conditions in multiple languages
//           </p>
//         </div>

//         {/* Search Box */}
//         <form onSubmit={handleSearch} className="p-8">
//           <div className="flex gap-4 mb-8">
//             <input
//               type="text"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               className="flex-1 px-5 py-4 border-2 border-gray-200 rounded-xl text-lg focus:border-blue-400 focus:ring focus:ring-blue-100 outline-none"
//               placeholder="Enter medical term (e.g., पेट दर्द, stomach pain, dolor de estómago...)"
//             />
//             <button
//               type="submit"
//               disabled={loading}
//               className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg transition disabled:opacity-50"
//             >
//               {loading ? "Searching..." : "Search"}
//             </button>
//           </div>

//           {/* Error */}
//           {error && (
//             <div className="bg-red-50 border border-red-200 text-red-700 px-5 py-4 rounded-xl mb-6">
//               {error}
//             </div>
//           )}

//           {/* Results */}
//           {searchData && (
//             <div>
//               <div className="bg-cyan-50 p-5 rounded-xl mb-6 border-l-4 border-blue-400">
//                 <h3 className="text-gray-700 font-semibold">Search Query:</h3>
//                 <p className="text-xl font-semibold">{searchData.query}</p>
//               </div>

//               {searchData.results.length > 0 ? (
//                 searchData.results.map((r) => (
//                   <ResultItem key={r.id} result={r} />
//                 ))
//               ) : (
//                 <p className="text-gray-500 text-center">No results found</p>
//               )}
//             </div>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default MedicalSearchForm;














// import { useState, useEffect } from "react";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
// import { Label } from "../components/ui/label";
// import { Input } from "../components/ui/input";
// import { Button } from "../components/ui/button";
// import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";

// interface SearchResult {
//   rank: number;
//   term: string;
//   id: number;
//   score: number;
// }

// const AddPatientForm = ({ onClose }: { onClose: () => void }) => {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState<SearchResult[]>([]);
//   const [loading, setLoading] = useState(false);
//   const [selectedTerm, setSelectedTerm] = useState<string | null>(null);
//   const [error, setError] = useState("");

//   // Fetch suggestions from backend when query changes
//   useEffect(() => {
//     const fetchResults = async () => {
//       if (!query.trim()) {
//         setResults([]);
//         return;
//       }

//       setLoading(true);
//       setError("");

//       try {
//         // ✅ Use relative path for Vite proxy
//         const res = await fetch(`/search?q=${encodeURIComponent(query)}`);
//         if (!res.ok) throw new Error(`HTTP ${res.status}`);

//         const data = await res.json();
//         setResults(data.results || []);
//       } catch (err: any) {
//         console.error("Error fetching search results:", err);
//         setError("Failed to fetch search results. Make sure backend is running.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     const debounce = setTimeout(fetchResults, 400); // debounce search
//     return () => clearTimeout(debounce);
//   }, [query]);

//   return (
//     <Tabs defaultValue="demographics" className="w-full">
//       <TabsList className="grid w-full grid-cols-3 bg-muted">
//         <TabsTrigger value="demographics">Demographics</TabsTrigger>
//         <TabsTrigger value="contact">Contact</TabsTrigger>
//         <TabsTrigger value="medical">Medical</TabsTrigger>
//       </TabsList>

//       {/* DEMOGRAPHICS */}
//       <TabsContent value="demographics" className="space-y-4 pt-4">
//         <div className="grid grid-cols-2 gap-4">
//           <div className="space-y-2">
//             <Label htmlFor="firstName">First Name</Label>
//             <Input id="firstName" placeholder="John" />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="lastName">Last Name</Label>
//             <Input id="lastName" placeholder="Doe" />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="dob">Date of Birth</Label>
//             <Input id="dob" type="date" />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="gender">Gender</Label>
//             <Input id="gender" placeholder="Male/Female/Other" />
//           </div>
//         </div>
//       </TabsContent>

//       {/* CONTACT */}
//       <TabsContent value="contact" className="space-y-4 pt-4">
//         <div className="grid grid-cols-1 gap-4">
//           <div className="space-y-2">
//             <Label htmlFor="phone">Phone Number</Label>
//             <Input id="phone" placeholder="+1 (555) 123-4567" />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="email">Email Address</Label>
//             <Input id="email" type="email" placeholder="john.doe@email.com" />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="address">Address</Label>
//             <Input id="address" placeholder="123 Main St, City, State 12345" />
//           </div>
//         </div>
//       </TabsContent>

//       {/* MEDICAL */}
//       <TabsContent value="medical" className="space-y-4 pt-4">
//         <div className="grid grid-cols-1 gap-4">
//           <div className="space-y-2">
//             <Label htmlFor="mrn">Medical Record Number</Label>
//             <Input id="mrn" placeholder="MRN001234" />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="insurance">Insurance Provider</Label>
//             <Input id="insurance" placeholder="Blue Cross Blue Shield" />
//           </div>
//           <div className="space-y-2">
//             <Label htmlFor="allergies">Known Allergies</Label>
//             <Input id="allergies" placeholder="Penicillin, Latex" />
//           </div>

//           {/* 🔍 Symptom Search */}
//           <div className="space-y-2">
//             <Label htmlFor="symptom">Symptoms</Label>
//             <Input
//               id="symptom"
//               placeholder="Type symptom (e.g. stomach pain)"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//             />
//             {loading && <p className="text-sm text-muted-foreground">Searching...</p>}
//             {error && <p className="text-sm text-red-600">{error}</p>}
//           </div>

//           {/* Show selectable results */}
//           {results.length > 0 && (
//             <div className="space-y-3 mt-4">
//               <Label>Select from search results</Label>
//               <RadioGroup
//                 value={selectedTerm || ""}
//                 onValueChange={(val) => setSelectedTerm(val)}
//               >
//                 {results.map((item) => (
//                   <div
//                     key={item.id}
//                     className="flex items-center space-x-2 border rounded-md p-2 hover:bg-muted cursor-pointer"
//                   >
//                     <RadioGroupItem value={item.term} id={`term-${item.id}`} />
//                     <Label htmlFor={`term-${item.id}`} className="flex flex-col cursor-pointer">
//                       <span className="font-medium">{item.term}</span>
//                       <span className="text-xs text-muted-foreground">
//                         Rank {item.rank} • Score {item.score.toFixed(2)}
//                       </span>
//                     </Label>
//                   </div>
//                 ))}
//               </RadioGroup>
//             </div>
//           )}
//         </div>
//       </TabsContent>

//       {/* ACTION BUTTONS */}
//       <div className="flex justify-end gap-3 pt-6">
//         <Button variant="outline" onClick={onClose}>
//           Cancel
//         </Button>
//         <Button
//           onClick={() => {
//             console.log("✅ Selected Symptom:", selectedTerm);
//             onClose();
//           }}
//           className="bg-gradient-primary text-white shadow-medical"
//           disabled={!selectedTerm}
//         >
//           Add Patient
//         </Button>
//       </div>
//     </Tabs>
//   );
// };

// export default AddPatientForm;

















// import { useState, useEffect } from "react";
// import { Plus } from "lucide-react";
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
// import { Button } from "../components/ui/button";
// import { Input } from "../components/ui/input";
// import { Badge } from "../components/ui/badge";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
// import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "../components/ui/dialog";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
// import { Label } from "../components/ui/label";
// import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";

// interface Patient {
//   id: string;
//   firstName: string;
//   lastName: string;
//   dob: string;
//   gender: string;
//   phone: string;
//   email: string;
//   address: string;
//   mrn: string;
//   insurance: string;
//   allergies: string;
//   symptoms: string[];
//   status: string;
// }

// interface SearchResult {
//   rank: number;
//   term: string;
//   id: number;
//   score: number;
// }

// const PatientManagement = () => {
//   const [patients, setPatients] = useState<Patient[]>([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [isAddPatientOpen, setIsAddPatientOpen] = useState(false);

//   // Form states
//   const [formData, setFormData] = useState<Omit<Patient, "id" | "status" | "symptoms">>({
//     firstName: "",
//     lastName: "",
//     dob: "",
//     gender: "",
//     phone: "",
//     email: "",
//     address: "",
//     mrn: "",
//     insurance: "",
//     allergies: "",
//   });
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState<SearchResult[]>([]);
//   const [selectedTerm, setSelectedTerm] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);

//   // Filtered patients
//   const filteredPatients = patients.filter(
//     p =>
//       p.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       p.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       p.mrn.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       p.email.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Fetch symptom suggestions
//   useEffect(() => {
//     if (!query.trim()) {
//       setResults([]);
//       return;
//     }
//     setLoading(true);
//     const fetchResults = async () => {
//       try {
//         const res = await fetch(`/search?q=${encodeURIComponent(query)}`);
//         const data = await res.json();
//         setResults(data.results || []);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     const debounce = setTimeout(fetchResults, 400);
//     return () => clearTimeout(debounce);
//   }, [query]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { id, value } = e.target;
//     setFormData(prev => ({ ...prev, [id]: value }));
//   };

//   const handleAddPatient = () => {
//     const newPatient: Patient = {
//       id: `P${Math.floor(Math.random() * 10000).toString().padStart(3, "0")}`,
//       status: "Active",
//       symptoms: selectedTerm ? [selectedTerm] : query ? [query] : [],
//       ...formData,
//     };
//     setPatients(prev => [...prev, newPatient]);
//     setFormData({
//       firstName: "",
//       lastName: "",
//       dob: "",
//       gender: "",
//       phone: "",
//       email: "",
//       address: "",
//       mrn: "",
//       insurance: "",
//       allergies: "",
//     });
//     setQuery("");
//     setSelectedTerm(null);
//     setIsAddPatientOpen(false);
//   };

//   return (
//     <div className="space-y-6 p-6 lg:p-8">
//       {/* Header */}
//       <div className="flex justify-between items-start">
//         <h1 className="text-3xl font-semibold text-foreground">Patient Management</h1>
//         <Dialog open={isAddPatientOpen} onOpenChange={setIsAddPatientOpen}>
//           <DialogTrigger asChild>
//             <Button className="bg-gradient-primary text-white shadow-medical">
//               <Plus className="h-4 w-4 mr-2" /> Add Patient
//             </Button>
//           </DialogTrigger>
//           <DialogContent className="max-w-2xl bg-card border-border">
//             <DialogHeader>
//               <DialogTitle>Add New Patient</DialogTitle>
//               <DialogDescription>Fill patient info and add symptom</DialogDescription>
//             </DialogHeader>

//             {/* Form */}
//             <Tabs defaultValue="demographics" className="w-full">
//               <TabsList className="grid w-full grid-cols-3 bg-muted">
//                 <TabsTrigger value="demographics">Demographics</TabsTrigger>
//                 <TabsTrigger value="contact">Contact</TabsTrigger>
//                 <TabsTrigger value="medical">Medical</TabsTrigger>
//               </TabsList>

//               {/* Demographics */}
//               <TabsContent value="demographics" className="space-y-4 pt-4">
//                 <div className="grid grid-cols-2 gap-4">
//                   <div>
//                     <Label htmlFor="firstName">First Name</Label>
//                     <Input id="firstName" value={formData.firstName} onChange={handleChange} />
//                   </div>
//                   <div>
//                     <Label htmlFor="lastName">Last Name</Label>
//                     <Input id="lastName" value={formData.lastName} onChange={handleChange} />
//                   </div>
//                   <div>
//                     <Label htmlFor="dob">Date of Birth</Label>
//                     <Input id="dob" type="date" value={formData.dob} onChange={handleChange} />
//                   </div>
//                   <div>
//                     <Label htmlFor="gender">Gender</Label>
//                     <Input id="gender" value={formData.gender} onChange={handleChange} />
//                   </div>
//                 </div>
//               </TabsContent>

//               {/* Contact */}
//               <TabsContent value="contact" className="space-y-4 pt-4">
//                 <div>
//                   <Label htmlFor="phone">Phone</Label>
//                   <Input id="phone" value={formData.phone} onChange={handleChange} />
//                 </div>
//                 <div>
//                   <Label htmlFor="email">Email</Label>
//                   <Input id="email" value={formData.email} onChange={handleChange} />
//                 </div>
//                 <div>
//                   <Label htmlFor="address">Address</Label>
//                   <Input id="address" value={formData.address} onChange={handleChange} />
//                 </div>
//               </TabsContent>

//               {/* Medical */}
//               <TabsContent value="medical" className="space-y-4 pt-4">
//                 <div>
//                   <Label htmlFor="mrn">MRN</Label>
//                   <Input id="mrn" value={formData.mrn} onChange={handleChange} />
//                 </div>
//                 <div>
//                   <Label htmlFor="insurance">Insurance</Label>
//                   <Input id="insurance" value={formData.insurance} onChange={handleChange} />
//                 </div>
//                 <div>
//                   <Label htmlFor="allergies">Allergies</Label>
//                   <Input id="allergies" value={formData.allergies} onChange={handleChange} />
//                 </div>

//                 {/* Symptom */}
//                 <div>
//                   <Label htmlFor="symptom">Symptoms</Label>
//                   <Input
//                     id="symptom"
//                     placeholder="Type symptom"
//                     value={query}
//                     onChange={(e) => setQuery(e.target.value)}
//                   />
//                   {loading && <p className="text-sm text-muted-foreground">Searching...</p>}
//                   {results.length > 0 && (
//                     <RadioGroup value={selectedTerm || ""} onValueChange={setSelectedTerm}>
//                       {results.map(item => (
//                         <div key={item.id}>
//                           <RadioGroupItem value={item.term} id={`term-${item.id}`} />
//                           <Label htmlFor={`term-${item.id}`}>{item.term}</Label>
//                         </div>
//                       ))}
//                     </RadioGroup>
//                   )}
//                 </div>
//               </TabsContent>
//             </Tabs>

//             {/* Buttons */}
//             <div className="flex justify-end gap-3 pt-6">
//               <Button variant="outline" onClick={() => setIsAddPatientOpen(false)}>Cancel</Button>
//               <Button
//                 onClick={handleAddPatient}
//                 className="bg-gradient-primary text-white shadow-medical"
//                 disabled={!formData.firstName || !formData.lastName || !formData.mrn}
//               >
//                 Add Patient
//               </Button>
//             </div>
//           </DialogContent>
//         </Dialog>
//       </div>

//       {/* Search */}
//       <Card className="bg-gradient-card border-border shadow-card">
//         <CardContent>
//           <Input
//             placeholder="Search patients by name, MRN, or email..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </CardContent>
//       </Card>

//       {/* Patient Table */}
//       <Card className="bg-gradient-card border-border shadow-card">
//         <CardHeader>
//           <CardTitle>Patient Records</CardTitle>
//           <CardDescription>{filteredPatients.length} patients found</CardDescription>
//         </CardHeader>
//         <CardContent>
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>MRN</TableHead>
//                 <TableHead>Name</TableHead>
//                 <TableHead>Age</TableHead>
//                 <TableHead>Gender</TableHead>
//                 <TableHead>Contact</TableHead>
//                 <TableHead>Status</TableHead>
//                 <TableHead>Symptoms</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {filteredPatients.map((p) => (
//                 <TableRow key={p.id}>
//                   <TableCell>{p.mrn}</TableCell>
//                   <TableCell>{p.firstName} {p.lastName}</TableCell>
//                   <TableCell>{p.dob}</TableCell>
//                   <TableCell>{p.gender}</TableCell>
//                   <TableCell>{p.phone} / {p.email}</TableCell>
//                   <TableCell>
//                     <Badge variant={p.status === "Active" ? "default" : "secondary"}>{p.status}</Badge>
//                   </TableCell>
//                   <TableCell>{p.symptoms.join(", ")}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default PatientManagement;












import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../components/ui/card";
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
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "../components/ui/dialog";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Label } from "../components/ui/label";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";

interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  dob: string;
  gender: string;
  phone: string;
  email: string;
  address: string;
  mrn: string;
  insurance: string;
  allergies: string;
  symptoms: string[];
  status: string;
}

interface SearchResult {
  rank: number;
  term: string;
  id: number;
  score: number;
}

const PatientManagement = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isAddPatientOpen, setIsAddPatientOpen] = useState(false);

  // Form states
  const [formData, setFormData] = useState<
    Omit<Patient, "id" | "status" | "symptoms">
  >({
    firstName: "",
    lastName: "",
    dob: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    mrn: "",
    insurance: "",
    allergies: "",
  });
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedTerm, setSelectedTerm] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Filtered patients
  const filteredPatients = patients.filter(
    (p) =>
      p.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.mrn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Fetch symptom suggestions
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    setLoading(true);
    const fetchResults = async () => {
      try {
        const res = await fetch(`/search?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        setResults(data.results || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    const debounce = setTimeout(fetchResults, 400);
    return () => clearTimeout(debounce);
  }, [query]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleAddPatient = () => {
    const newPatient: Patient = {
      id: `P${Math.floor(Math.random() * 10000)
        .toString()
        .padStart(3, "0")}`,
      status: "Active",
      symptoms: selectedTerm ? [selectedTerm] : query ? [query] : [],
      ...formData,
    };
    setPatients((prev) => [...prev, newPatient]);
    setFormData({
      firstName: "",
      lastName: "",
      dob: "",
      gender: "",
      phone: "",
      email: "",
      address: "",
      mrn: "",
      insurance: "",
      allergies: "",
    });
    setQuery("");
    setSelectedTerm(null);
    setIsAddPatientOpen(false);
  };

  return (
    <div className="space-y-6 p-10 lg:p-8">
      {/* Header */}
      <div className="flex justify-between items-start ">
        <h1 className="text-3xl font-semibold text-foreground">
          Patient Management
        </h1>
        <Dialog open={isAddPatientOpen} onOpenChange={setIsAddPatientOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-primary text-white shadow-medical">
              <Plus className="h-4 w-4 mr-2" /> Add Patient
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl bg-card border-border">
            <DialogHeader>
              <DialogTitle>Add New Patient</DialogTitle>
              <DialogDescription>
                Fill patient info and add symptom
              </DialogDescription>
            </DialogHeader>

            {/* Form */}
            <Tabs defaultValue="demographics" className="w-full ">
              <TabsList className="grid w-full grid-cols-3 bg-muted">
                <TabsTrigger value="demographics">Demographics</TabsTrigger>
                <TabsTrigger value="contact">Contact</TabsTrigger>
                <TabsTrigger value="medical">Medical</TabsTrigger>
              </TabsList>

              {/* Demographics */}
              <TabsContent value="demographics" className="space-y-4 pt-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input
                      id="dob"
                      type="date"
                      value={formData.dob}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <Label htmlFor="gender">Gender</Label>
                    <Input
                      id="gender"
                      value={formData.gender}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </TabsContent>

              {/* Contact */}
              <TabsContent value="contact" className="space-y-4 pt-4">
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="address">Address</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </div>
              </TabsContent>

              {/* Medical */}
              <TabsContent value="medical" className="space-y-4 pt-4 max-h-[400px] overflow-y-auto pr-2 ">
                <div>
                  <Label htmlFor="mrn">Medical Record Number</Label>
                  <Input
                    id="mrn"
                    value={formData.mrn}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="insurance">Insurance</Label>
                  <Input
                    id="insurance"
                    value={formData.insurance}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="allergies">Allergies</Label>
                  <Input
                    id="allergies"
                    value={formData.allergies}
                    onChange={handleChange}
                  />
                </div>

                {/* Symptom */}
                <div>
                  <Label htmlFor="symptom">Symptoms</Label>
                  <Input
                    id="symptom"
                    placeholder="Type symptom"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  {loading && (
                    <p className="text-sm text-muted-foreground">Searching...</p>
                  )}

                  {results.length > 0 && (
                    <div className="space-y-3 mt-4">
                      <Label>Select from search results</Label>
                      <RadioGroup
                        value={selectedTerm || ""}
                        onValueChange={(val) => setSelectedTerm(val)}
                      >
                        {results.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center space-x-2 border rounded-md p-2 hover:bg-muted cursor-pointer"
                          >
                            <RadioGroupItem
                              value={item.term}
                              id={`term-${item.id}`}
                            />
                            <Label
                              htmlFor={`term-${item.id}`}
                              className="flex flex-col cursor-pointer"
                            >
                              <span className="font-medium">{item.term}</span>
                              <span className="text-xs text-muted-foreground">
                                Rank {item.rank} • Score {item.score.toFixed(2)}
                              </span>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>
                  )}
                </div>
              </TabsContent>
            </Tabs>

            {/* Buttons */}
            <div className="flex justify-end gap-3 pt-6">
              <Button
                variant="outline"
                onClick={() => setIsAddPatientOpen(false)}
              >
                Cancel
              </Button>
              <Button
                onClick={handleAddPatient}
                className="bg-gradient-primary text-white shadow-medical"
                disabled={!formData.firstName || !formData.lastName || !formData.mrn}
              >
                Add Patient
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search */}
      <Card className="bg-gradient-card border-border shadow-card pt-4">
        <CardContent>
          <Input
            placeholder="Search patients by name, MRN, or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </CardContent>
      </Card>

      {/* Patient Table */}
      <Card className="bg-gradient-card border-border shadow-card ">
        <CardHeader>
          <CardTitle>Patient Records</CardTitle>
          <CardDescription>
            {filteredPatients.length} patients found
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>MRN</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Age</TableHead>
                <TableHead>Gender</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Symptoms</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPatients.map((p) => (
                <TableRow key={p.id}>
                  <TableCell>{p.mrn}</TableCell>
                  <TableCell>
                    {p.firstName} {p.lastName}
                  </TableCell>
                  <TableCell>{p.dob}</TableCell>
                  <TableCell>{p.gender}</TableCell>
                  <TableCell>
                    {p.phone} / {p.email}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={p.status === "Active" ? "default" : "secondary"}
                    >
                      {p.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{p.symptoms.join(", ")}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default PatientManagement;
