import { useState, useEffect } from "react";
import { Moon, Sun, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModel";
import RegisterModal from "./RegisterModel";
import ProfileMenu from "./ProfileMenu";

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [featuresTimeout, setFeaturesTimeout] = useState(null);
  const [moduleOpen, setModuleOpen] = useState(false);
  const [moduleTimeout, setModuleTimeout] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setLoggedIn(true);
    }
  }, []);

  const handleAuthSuccess = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    setLoggedIn(true);
    setShowLogin(false);
    setShowRegister(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    setLoggedIn(false);
    window.location.href = "/";
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-white dark:bg-gradient-to-r dark:from-gray-900 dark:to-purple-800 shadow text-gray-800 dark:text-white transition-colors duration-500">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-600 dark:text-purple-300">Bilaytics</h1>

          <ul className="hidden md:flex gap-6 text-sm font-medium relative">
            <li><a href="#" className="hover:text-purple-600 dark:hover:text-purple-300">Dashboard</a></li>
            <li><a href="/about" onClick={handleLinkClick} className="hover:text-purple-600 dark:hover:text-purple-300">About</a></li>
            <li
              className="relative"
              onMouseEnter={() => {
                clearTimeout(featuresTimeout);
                setFeaturesOpen(true);
              }}
              onMouseLeave={() => {
                const timeout = setTimeout(() => setFeaturesOpen(false), 300);
                setFeaturesTimeout(timeout);
              }}
            >
              <button className="hover:text-purple-600 dark:hover:text-purple-300">Features</button>
              {featuresOpen && (
                <ul className="absolute top-8 left-0 bg-white dark:bg-gray-800 shadow-xl rounded p-2 w-52 z-10">
                  <Link
                    to="/bill-upload"
                    onClick={handleLinkClick}
                    className="hover:bg-gray-100 dark:hover:bg-purple-700 px-3 py-1 rounded cursor-pointer"
                  >
                    Bill Upload & View
                  </Link>
                  <li
                    className="relative"
                    onMouseEnter={() => {
                      clearTimeout(moduleTimeout);
                      setModuleOpen(true);
                    }}
                    onMouseLeave={() => {
                      const timeout = setTimeout(() => setModuleOpen(false), 300);
                      setModuleTimeout(timeout);
                    }}
                  >
                    <div className="hover:bg-gray-100 dark:hover:bg-purple-700 px-3 py-1 rounded cursor-pointer flex items-center justify-between">
                      Modules
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    {moduleOpen && (
                      <ul className="absolute top-0 left-full ml-1 bg-white dark:bg-gray-900 shadow-lg rounded p-2 w-44 z-20">
                        <li className="hover:bg-gray-100 dark:hover:bg-purple-700 px-3 py-1 rounded">
                          <Link to="/analytics-dashboard" onClick={handleLinkClick}>Analytics Dashboard</Link>
                        </li>
                        <li className="hover:bg-gray-100 dark:hover:bg-purple-700 px-3 py-1 rounded">
                          <Link to="/export-report" onClick={handleLinkClick}>Export Reports</Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li className="hover:bg-gray-100 dark:hover:bg-purple-700 px-3 py-1 rounded cursor-pointer">Role-Based Access</li>
                </ul>
              )}
            </li>
            <li>
              <a href="/contact" onClick={handleLinkClick} className="hover:text-purple-600 dark:hover:text-purple-300">Contact</a>
            </li>
          </ul>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-purple-700 transition"
            >
              {isDark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-gray-700" />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-full bg-gray-100 dark:bg-gray-800"
            >
              <Menu className="w-6 h-6 text-gray-700 dark:text-white" />
            </button>

            {loggedIn ? (
              <ProfileMenu user={user} onLogout={handleLogout} />
            ) : (
              <div className="hidden md:flex gap-2">
                <button onClick={() => setShowLogin(true)} className="bg-purple-600 text-white px-4 py-2 rounded-lg">
                  Login
                </button>
                <button onClick={() => setShowRegister(true)} className="bg-purple-600 text-white px-4 py-2 rounded-lg">
                  Register
                </button>
              </div>
            )}
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="px-6 pb-4 md:hidden text-sm font-medium">
            <ul className="flex flex-col gap-3">
              <li><a href="#" onClick={handleLinkClick} className="hover:text-purple-600 dark:hover:text-purple-300">Dashboard</a></li>
              <li><a href="/about" onClick={handleLinkClick} className="hover:text-purple-600 dark:hover:text-purple-300">About</a></li>
              <li>
                <details className="bg-white dark:bg-gray-800 rounded px-2 py-1">
                  <summary className="cursor-pointer hover:text-purple-600 dark:hover:text-purple-300">Features</summary>
                  <ul className="pl-4">
                    <li>
                      <Link to="/bill-upload" onClick={handleLinkClick} className="block px-2 py-1 hover:bg-gray-100 dark:hover:bg-purple-700 rounded">
                        Bill Upload & View
                      </Link>
                    </li>
                    <li>
                      <details>
                        <summary className="cursor-pointer px-2 py-1 hover:bg-gray-100 dark:hover:bg-purple-700 rounded">Modules</summary>
                        <ul className="pl-4">
                          <li><Link to="/analytics-dashboard" onClick={handleLinkClick}>Analytics Dashboard</Link></li>
                          <li><Link to="/export-report" onClick={handleLinkClick}>Export Reports</Link></li>
                        </ul>
                      </details>
                    </li>
                    <li className="hover:bg-gray-100 dark:hover:bg-purple-700 px-2 py-1 rounded">Role-Based Access</li>
                  </ul>
                </details>
              </li>
              <li><a href="/contact" onClick={handleLinkClick} className="hover:text-purple-600 dark:hover:text-purple-300">Contact</a></li>

              {!loggedIn && (
                <div className="flex gap-2 mt-4">
                  <button onClick={() => { setShowLogin(true); setIsMobileMenuOpen(false); }} className="bg-purple-600 text-white px-4 py-2 rounded-lg">
                    Login
                  </button>
                  <button onClick={() => { setShowRegister(true); setIsMobileMenuOpen(false); }} className="bg-purple-600 text-white px-4 py-2 rounded-lg">
                    Register
                  </button>
                </div>
              )}
            </ul>
          </div>
        )}
      </nav>

      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} onLoginSuccess={handleAuthSuccess} />
      <RegisterModal isOpen={showRegister} onClose={() => setShowRegister(false)} onRegisterSuccess={handleAuthSuccess} />
    </>
  );
}
