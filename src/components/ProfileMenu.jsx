
// src/components/ProfileMenu.jsx
import ProfileSettingsModal from "./ProfileSettingsModal";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, LogOut } from "lucide-react";

export default function ProfileMenu({ onLogout }) {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showSettings, setShowSettings] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!user) return null;

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      >
        {/* <img
          src={user.profilePic || "https://via.placeholder.com/40"}
          alt="Profile"
          className="w-8 h-8 rounded-full object-cover"
        /> */}
        <span className="hidden md:inline text-sm font-medium">
          Welcome, {user.username}
        </span>
        <ChevronDown size={16} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-900 rounded-lg shadow-lg border dark:border-gray-700 overflow-hidden z-50">
          <div className="p-4 border-b dark:border-gray-700">
            <p className="font-semibold text-gray-900 dark:text-gray-200">
              {user.username}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{user.email}</p>
          </div>
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900 transition"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      )}
            {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-900 rounded-lg shadow-lg border dark:border-gray-700 overflow-hidden z-50">
          <div className="p-4 border-b dark:border-gray-700">
            <p className="font-semibold text-gray-900 dark:text-gray-200">
              {user.username}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{user.email}</p>
          </div>
          <button
            onClick={() => setShowSettings(true)}
            className="w-full flex items-center gap-2 px-4 py-2 text-purple-600 hover:bg-purple-100 dark:hover:bg-purple-900 transition"
          >
            Profile & Settings
          </button>
          <button
            onClick={onLogout}
            className="w-full flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-100 dark:hover:bg-red-900 transition"
          >
            <LogOut size={16} /> Logout
          </button>
        </div>
      )}
           <ProfileSettingsModal
        user={user}
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
        onSave={(updated) => {
          // TODO: Send updated info to backend, update localStorage, update state
          setUser({ ...user, ...updated, password: undefined });
          localStorage.setItem("user", JSON.stringify({ ...user, ...updated, password: undefined }));
          setShowSettings(false);
        }}
      />
    </div>
  );
}




