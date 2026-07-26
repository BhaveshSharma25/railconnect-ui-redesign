import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaTrain } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg)] border-t border-[var(--border)]">

      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

        <div className="flex items-center gap-2 text-[var(--text-muted)] text-sm">
          <Link to="/" className="hover:text-[var(--text)] transition">Home</Link>
          <span className="text-[var(--text-faint)]">·</span>
          <Link to="/search" className="hover:text-[var(--text)] transition">Book Ticket</Link>
          <span className="text-[var(--text-faint)]">·</span>
          <Link to="/profile" className="hover:text-[var(--text)] transition">Profile</Link>
        </div>

        <div className="flex items-center gap-2 text-[var(--text-muted)] text-sm">
          <span>Follow us:</span>
          <div className="flex gap-3 text-[var(--text-muted)]">
            <FaFacebookF className="hover:text-[var(--text)] transition cursor-pointer" />
            <FaTwitter className="hover:text-[var(--text)] transition cursor-pointer" />
            <FaLinkedinIn className="hover:text-[var(--text)] transition cursor-pointer" />
            <FaInstagram className="hover:text-[var(--text)] transition cursor-pointer" />
          </div>
        </div>

      </div>

      <div className="border-t border-[var(--border)] px-6 py-4">
        <p className="max-w-7xl mx-auto text-[var(--text-faint)] text-xs flex items-center gap-2">
          <FaTrain className="shrink-0" />
          © {new Date().getFullYear()} RailConnect+. All rights reserved. · Privacy Policy
        </p>
      </div>

    </footer>
  );
}
