import React from "react";
import Navbar from "../components/layout/Navbar";
import {
  FaUserCircle,
  FaTrain,
  FaHistory,
  FaHeart,
  FaBell,
  FaCog,
  FaTicketAlt,
  FaWallet,
  FaMapMarkerAlt,
  FaStar,
} from "react-icons/fa";

const stats = [
  { icon: FaTrain, value: "24", label: "Total Trips" },
  { icon: FaTicketAlt, value: "18", label: "Confirmed Tickets" },
  { icon: FaWallet, value: "₹14,820", label: "Total Spent" },
  { icon: FaStar, value: "Gold", label: "Loyalty Tier" },
];

function Profile() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[var(--bg)] py-10 px-4 transition-colors">

        <div className="max-w-6xl mx-auto">

          <div className="relative bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-10">

            <div className="flex flex-col md:flex-row items-center gap-6">
              <FaUserCircle size={90} className="text-[var(--text-faint)]" />
              <div className="text-center md:text-left">
                <h1 className="font-serif text-3xl font-semibold text-[var(--text)]">Bhavesh Sharma</h1>
                <p className="text-[var(--text-muted)] mt-1">bhavesh@gmail.com</p>
                <p className="mt-2 text-emerald-500 text-sm font-medium">IRCTC Member since 2026</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4 mt-6">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center mb-3">
                  <Icon className="text-emerald-500 text-sm" />
                </div>
                <h2 className="text-2xl font-semibold text-[var(--text)]">{value}</h2>
                <p className="text-[var(--text-muted)] text-sm">{label}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mt-6">

            <div className="lg:col-span-2 space-y-6">

              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8 transition-colors">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-5">Upcoming Journey</h2>
                <div className="border border-[var(--border)] rounded-2xl p-6">
                  <h3 className="text-lg font-semibold text-[var(--text)]">Rajdhani Express</h3>
                  <p className="text-[var(--text-muted)] text-sm">Jaipur → New Delhi</p>
                  <div className="grid md:grid-cols-3 gap-6 mt-5 text-sm">
                    <div><p className="text-[var(--text-muted)]">Date</p><h4 className="text-[var(--text)] font-medium">22 Jul 2026</h4></div>
                    <div><p className="text-[var(--text-muted)]">Coach</p><h4 className="text-[var(--text)] font-medium">B2</h4></div>
                    <div><p className="text-[var(--text-muted)]">Seat</p><h4 className="text-[var(--text)] font-medium">32</h4></div>
                  </div>
                </div>
              </div>

              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8 transition-colors">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-2">Recent Bookings</h2>
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex justify-between items-center border-b border-[var(--border)] py-4 last:border-b-0">
                    <div>
                      <h3 className="font-medium text-[var(--text)] text-sm">Shatabdi Express</h3>
                      <p className="text-[var(--text-muted)] text-sm">Delhi → Jaipur</p>
                    </div>
                    <button className="bg-[var(--surface-2)] hover:opacity-80 border border-[var(--border)] text-[var(--text)] px-4 py-2 rounded-xl text-sm transition">
                      View
                    </button>
                  </div>
                ))}
              </div>

            </div>

            <div className="space-y-6">

              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 transition-colors">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-4">Quick Actions</h2>
                <div className="space-y-2">
                  <button className="w-full flex items-center gap-3 bg-[var(--surface-2)] hover:opacity-80 p-3 rounded-xl transition text-[var(--text)] text-sm">
                    <FaHistory className="text-emerald-500" /> Booking History
                  </button>
                  <button className="w-full flex items-center gap-3 bg-[var(--surface-2)] hover:opacity-80 p-3 rounded-xl transition text-[var(--text)] text-sm">
                    <FaHeart className="text-emerald-500" /> Favourite Routes
                  </button>
                  <button className="w-full flex items-center gap-3 bg-[var(--surface-2)] hover:opacity-80 p-3 rounded-xl transition text-[var(--text)] text-sm">
                    <FaBell className="text-emerald-500" /> Notifications
                  </button>
                  <button className="w-full flex items-center gap-3 bg-[var(--surface-2)] hover:opacity-80 p-3 rounded-xl transition text-[var(--text)] text-sm">
                    <FaCog className="text-emerald-500" /> Settings
                  </button>
                </div>
              </div>

              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 transition-colors">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-4">Favourite Routes</h2>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-[var(--text)]"><FaMapMarkerAlt className="text-emerald-500" /> Jaipur → Delhi</div>
                  <div className="flex items-center gap-2 text-[var(--text)]"><FaMapMarkerAlt className="text-emerald-500" /> Mumbai → Ahmedabad</div>
                  <div className="flex items-center gap-2 text-[var(--text)]"><FaMapMarkerAlt className="text-emerald-500" /> Bangalore → Chennai</div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </>
  );
}

export default Profile;
