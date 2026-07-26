import React, { useState } from "react";
import { FaSearch, FaBuilding, FaTrain, FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const STATIONS = [
  "Jaipur (JPR)",
  "New Delhi (NDLS)",
  "Mumbai Central (MMCT)",
  "Ahmedabad (ADI)",
  "Bengaluru (SBC)",
  "Chennai Central (MAS)",
  "Kolkata (KOAA)",
  "Kota Junction (KOTA)",
  "Agra Cantt (AGC)",
  "Lucknow (LKO)",
];

function SearchCard() {

  const navigate = useNavigate();
  const { theme } = useTheme();
  const isLight = theme === "light";

  const [from, setFrom] = useState("Jaipur (JPR)");
  const [to, setTo] = useState("New Delhi (NDLS)");

  return (
    <div className="max-w-3xl mx-auto bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-8 shadow-xl shadow-black/5">

      <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 items-center">

        <div>
          <label className="text-[var(--text-muted)] text-sm">From</label>
          <div className="relative mt-2 flex items-center gap-3 bg-[var(--surface-2)] border border-[var(--border)] rounded-xl px-4 py-3">
            <FaBuilding className="text-[var(--text-faint)] shrink-0" />
            <select
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              className="w-full bg-transparent outline-none text-[var(--text)] appearance-none pr-6 cursor-pointer"
            >
              {STATIONS.map((station) => (
                <option key={station} value={station} className="bg-[var(--surface)] text-[var(--text)]">
                  {station}
                </option>
              ))}
            </select>
            <FaChevronDown className="text-[var(--text-faint)] text-xs absolute right-4 pointer-events-none" />
          </div>
        </div>

        <div className="flex justify-center py-2 md:py-0">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center rotate-90 md:rotate-0 ${
              isLight
                ? "bg-gradient-to-br from-[#1E3A8A] to-[#3B5FCB]"
                : "bg-gradient-to-br from-emerald-400 to-teal-500"
            }`}
          >
            <FaTrain className="text-white text-sm" />
          </div>
        </div>

        <div>
          <label className="text-[var(--text-muted)] text-sm">To</label>
          <div className="relative mt-2 flex items-center gap-3 bg-[var(--surface-2)] border border-[var(--border)] rounded-xl px-4 py-3">
            <FaBuilding className="text-[var(--text-faint)] shrink-0" />
            <select
              value={to}
              onChange={(e) => setTo(e.target.value)}
              className="w-full bg-transparent outline-none text-[var(--text)] appearance-none pr-6 cursor-pointer"
            >
              {STATIONS.map((station) => (
                <option key={station} value={station} className="bg-[var(--surface)] text-[var(--text)]">
                  {station}
                </option>
              ))}
            </select>
            <FaChevronDown className="text-[var(--text-faint)] text-xs absolute right-4 pointer-events-none" />
          </div>
        </div>

      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-6">

        <div>
          <label className="text-[var(--text-muted)] text-sm">Journey Date</label>
          <input
            type="date"
            className="w-full mt-2 p-3 bg-[var(--surface-2)] border border-[var(--border)] rounded-xl text-[var(--text)] outline-none focus:ring-2 focus:ring-emerald-400/50"
          />
        </div>

        <div>
          <label className="text-[var(--text-muted)] text-sm">Class</label>
          <select className="w-full mt-2 p-3 bg-[var(--surface-2)] border border-[var(--border)] rounded-xl text-[var(--text)] outline-none focus:ring-2 focus:ring-emerald-400/50">
            <option>AC 3 Tier</option>
            <option>Sleeper</option>
            <option>AC 2 Tier</option>
            <option>AC 1st Class</option>
          </select>
        </div>

        <div>
          <label className="text-[var(--text-muted)] text-sm">Passengers</label>
          <input
            type="number"
            defaultValue={1}
            className="w-full mt-2 p-3 bg-[var(--surface-2)] border border-[var(--border)] rounded-xl text-[var(--text)] outline-none focus:ring-2 focus:ring-emerald-400/50"
          />
        </div>

      </div>

      <button
        onClick={() => navigate("/search")}
        className="mt-6 w-full bg-[#3E5C99] hover:bg-[#34508A] text-white py-4 rounded-xl font-medium transition flex items-center justify-center gap-2"
      >
        <FaSearch />
        Search Trains
      </button>

    </div>
  );
}

export default SearchCard;
