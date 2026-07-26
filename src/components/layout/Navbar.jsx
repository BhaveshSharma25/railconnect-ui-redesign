import React from "react";
import { Link } from "react-router-dom";
import { FaTrain } from "react-icons/fa";
import ThemeToggle from "../ui/ThemeToggle";

function Navbar() {
  return (
    <nav className="bg-[var(--bg)]/95 border-b border-[var(--border)] backdrop-blur sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        <Link to="/" className="flex items-center gap-2 font-serif text-xl font-semibold text-[var(--text)]">
          <FaTrain className="text-[var(--text)]" />
          <span>RailConnect+</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-[var(--text-muted)] font-medium">
          <Link to="/" className="text-[var(--text)]">Home</Link>
          <Link to="/search" className="hover:text-[var(--text)] transition">Book Ticket</Link>
          <Link to="/ticket" className="hover:text-[var(--text)] transition">My Trips</Link>
          <Link to="/profile" className="hover:text-[var(--text)] transition">Profile</Link>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link
            to="/login"
            className="border border-[var(--border)] hover:bg-[var(--border)] text-[var(--text)] px-5 py-2 rounded-full font-medium transition text-sm"
          >
            Login
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;
