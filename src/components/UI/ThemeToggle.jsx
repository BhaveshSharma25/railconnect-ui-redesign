import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

function ThemeToggle({ className = "" }) {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle light and dark theme"
      className={`relative w-14 h-8 rounded-full border transition-colors ${
        isLight ? "bg-black/10 border-black/10" : "bg-white/10 border-white/15"
      } ${className}`}
    >
      <span
        className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow flex items-center justify-center transition-transform ${
          isLight ? "translate-x-6" : "translate-x-0"
        }`}
      >
        {isLight ? (
          <FaSun className="text-amber-500 text-xs" />
        ) : (
          <FaMoon className="text-[#12271F] text-xs" />
        )}
      </span>
    </button>
  );
}

export default ThemeToggle;
