import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../components/ui/dropdown-menu";


const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dashboardOpen, setDashboardOpen] = useState(false); // desktop dropdown

  return (
    <>
      {/* Top Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
          {/* Logo Section */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-md bg-gradient-to-br from-orange-500 to-orange-400 flex items-center justify-center text-white font-bold text-lg">
              NHA
            </div>
            <div className="hidden sm:block text-gray-800">
              <h1 className="text-lg font-bold leading-tight">national</h1>
              <h2 className="text-sm font-normal text-gray-500">health authority</h2>
            </div>
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-green-500 to-green-800 flex items-center justify-center text-white text-xl sm:text-2xl">
              🏥
            </div>
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-5">
            <div className="flex items-center gap-1 text-gray-600 cursor-pointer px-3 py-1 rounded hover:bg-gray-100">
              <span>English</span>
              <span className="text-xs">▼</span>
            </div>
            <button className="bg-gradient-to-br from-orange-500 to-orange-400 text-white font-semibold px-6 py-2 rounded-md shadow hover:shadow-lg hover:-translate-y-0.5 transform transition">
              Create ABHA Address
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-700 text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Navbar */}
      <nav className="bg-gradient-to-r from-blue-500 to-blue-700">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          {/* Menu (Desktop) */}
          <ul className="hidden md:flex items-center relative">
            <li>
              <Link
                to="/"
                className="flex items-center gap-2 px-6 py-4 text-white font-medium border-b-4 border-orange-500  hover:bg-white/10 cursor-pointer rounded-md transition"
              >
                Home
              </Link>
            </li>

            {/* Dashboard Dropdown */}
          
<li>
  <DropdownMenu>
    <DropdownMenuTrigger className="flex items-center gap-2 px-6 py-4 text-white font-medium hover:bg-white/10 cursor-pointer rounded-md transition">
      <span>Tools</span>
      <span className="text-xs">▼</span>
    </DropdownMenuTrigger>

    <DropdownMenuContent className="w-56 bg-white text-gray-800 shadow-md rounded-md">
      <DropdownMenuItem asChild>
        <Link to="/dashboard">Dashboard</Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link to="/compliance">Compliance</Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link to="/reports">Reports</Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link to="/patients">Patients</Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link to="/icd11">ICD-11 Management</Link>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</li>

            <li>
              <a
                href="#"
                className="flex items-center gap-2 px-6 py-4 text-white font-medium hover:bg-white/10  cursor-pointer rounded-md transition"
              >
                Resource Center <span className="text-xs">▼</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-2 px-6 py-4 text-white font-medium hover:bg-white/10 cursor-pointer rounded-md transition"
              >
                Support <span className="text-xs">▼</span>
              </a>
            </li>
          </ul>

          {/* User Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-5">
            <Link
              to="/login"
              className="flex items-center gap-2 px-5 py-2 text-white font-medium hover:bg-white/10 rounded transition"
            >
              <span className="text-lg">👤</span> Login
            </Link>
            <a
              href="#"
              className="flex items-center gap-2 px-5 py-2 text-white font-medium bg-white/20 border border-white/30 rounded hover:bg-white/30 transition"
            >
              <span className="text-lg">🆔</span> Create ABHA Number
            </a>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-blue-600">
            <ul className="flex flex-col">
              <li>
                <Link
                  to="/"
                  className="block px-6 py-3 text-white font-medium hover:bg-blue-500"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
              </li>

              {/* Mobile Dashboard Dropdown */}
              <li>
                <div
                  className="block px-6 py-3 text-white font-medium hover:bg-blue-500 cursor-pointer"
                  onClick={() => setDashboardOpen(!dashboardOpen)}
                >
                  Dashboard <span className="text-xs">▼</span>
                </div>
                {dashboardOpen && (
                  <ul className="bg-blue-500">
                    <li>
                      <Link
                        to="/dashboard"
                        className="block px-8 py-2 text-white hover:bg-blue-400"
                        onClick={() => setMenuOpen(false)}
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/compliance"
                        className="block px-8 py-2 text-white hover:bg-blue-400"
                        onClick={() => setMenuOpen(false)}
                      >
                        Compliance
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/reports"
                        className="block px-8 py-2 text-white hover:bg-blue-400"
                        onClick={() => setMenuOpen(false)}
                      >
                        Reports
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/patients"
                        className="block px-8 py-2 text-white hover:bg-blue-400"
                        onClick={() => setMenuOpen(false)}
                      >
                        Patients
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/icd11"
                        className="block px-8 py-2 text-white hover:bg-blue-400"
                        onClick={() => setMenuOpen(false)}
                      >
                        ICD-11 Management
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <a
                  href="#"
                  className="block px-6 py-3 text-white font-medium hover:bg-blue-500"
                >
                  Resource Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-6 py-3 text-white font-medium hover:bg-blue-500"
                >
                  Support
                </a>
              </li>
              <li className="border-t border-blue-400 mt-2">
                <Link
                  to="/login"
                  className="block px-6 py-3 text-white font-medium hover:bg-blue-500"
                  onClick={() => setMenuOpen(false)}
                >
                  👤 Login
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-6 py-3 text-white font-medium hover:bg-blue-500"
                >
                  🆔 Create ABHA Number
                </a>
              </li>
              <li className="px-6 py-3">
                <button className="w-full bg-gradient-to-br from-orange-500 to-orange-400 text-white font-semibold px-6 py-2 rounded-md shadow hover:shadow-lg transition">
                  Create ABHA Address
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;