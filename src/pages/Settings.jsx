import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import {
  FaUser,
  FaLock,
  FaBell,
  FaMoon,
  FaLanguage,
  FaSignOutAlt,
  FaSave,
} from "react-icons/fa";

function Settings() {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("English");

  const inputClass =
    "w-full bg-[var(--surface-2)] border border-[var(--border)] p-4 rounded-xl text-[var(--text)] outline-none focus:ring-2 focus:ring-emerald-400/50";

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[var(--bg)] py-10 px-4">

        <div className="max-w-5xl mx-auto">

          <h1 className="font-serif text-3xl font-semibold text-[var(--text)]">Settings</h1>
          <p className="text-[var(--text-muted)] mt-1 mb-8">Manage your RailConnect account</p>

          <div className="grid lg:grid-cols-2 gap-6">

            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8">
              <h2 className="text-lg font-semibold text-[var(--text)] mb-5 flex items-center gap-3">
                <FaUser className="text-emerald-400" /> Account
              </h2>
              <div className="space-y-3">
                <input type="text" defaultValue="Bhavesh Sharma" className={inputClass} />
                <input type="email" defaultValue="bhavesh@gmail.com" className={inputClass} />
                <input type="tel" defaultValue="+91 9876543210" className={inputClass} />
              </div>
            </div>

            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8">
              <h2 className="text-lg font-semibold text-[var(--text)] mb-5 flex items-center gap-3">
                <FaLock className="text-emerald-400" /> Change Password
              </h2>
              <div className="space-y-3">
                <input type="password" placeholder="Current Password" className={inputClass} />
                <input type="password" placeholder="New Password" className={inputClass} />
                <input type="password" placeholder="Confirm Password" className={inputClass} />
              </div>
            </div>

            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8">
              <h2 className="text-lg font-semibold text-[var(--text)] mb-5">Preferences</h2>
              <div className="space-y-5">

                <div className="flex justify-between items-center">
                  <div className="flex gap-3 items-center text-[var(--text-muted)] text-sm"><FaBell className="text-emerald-400" /> Notifications</div>
                  <input type="checkbox" checked={notifications} onChange={() => setNotifications(!notifications)} className="w-5 h-5 accent-emerald-400" />
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex gap-3 items-center text-[var(--text-muted)] text-sm"><FaMoon className="text-emerald-400" /> Dark Mode</div>
                  <input type="checkbox" checked={darkMode} onChange={() => setDarkMode(!darkMode)} className="w-5 h-5 accent-emerald-400" />
                </div>

                <div>
                  <label className="flex items-center gap-3 mb-3 text-[var(--text-muted)] text-sm font-medium"><FaLanguage className="text-emerald-400" /> Language</label>
                  <select value={language} onChange={(e) => setLanguage(e.target.value)} className={inputClass}>
                    <option>English</option>
                    <option>Hindi</option>
                    <option>Gujarati</option>
                    <option>Marathi</option>
                  </select>
                </div>

              </div>
            </div>

            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8">
              <h2 className="text-lg font-semibold text-[var(--text)] mb-5">Account Actions</h2>
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-white py-3.5 rounded-xl flex items-center justify-center gap-3 font-medium transition">
                  <FaSave /> Save Changes
                </button>
                <button className="w-full bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 py-3.5 rounded-xl flex items-center justify-center gap-3 font-medium transition">
                  <FaSignOutAlt /> Logout
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

    </>
  );
}

export default Settings;
