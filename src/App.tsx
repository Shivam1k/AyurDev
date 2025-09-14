
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './component/layout/Footer';
import Header from './component/layout/Header';
import Login from './pages/Login'; // Make sure this path is correct
import Home from "./pages/Home";
import Registration from "./pages/Registration";
import DoctorRegistration from "./component/DoctorRegisterModal";
import PatientRegistration from "./component/PatientRegisterModal";
import Dashboard from "./pages/Dashboard";
import ICD11Management from "./pages/ICD11Management";
import PatientManagement from "./pages/PatientManagement";
import Reports from "./pages/Reports";
import ComplianceAudit from "./pages/Compliance";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
           <Route path="/register" element={<Registration />} />
            <Route path="/register/doctor" element={<DoctorRegistration />} />
        <Route path="/register/patient" element={<PatientRegistration />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/icd11" element={<ICD11Management/>} />
        <Route path="/patients" element={<PatientManagement />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/compliance" element={<ComplianceAudit />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
