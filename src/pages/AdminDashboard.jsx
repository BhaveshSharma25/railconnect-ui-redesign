import React from "react";
import Navbar from "../components/layout/Navbar";
import {
  FaTrain,
  FaUsers,
  FaTicketAlt,
  FaRupeeSign,
  FaUserCog,
  FaPlus,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

const trains = [
  { id: 1, name: "Rajdhani Express", number: "12958", from: "Jaipur", to: "Delhi", status: "Running" },
  { id: 2, name: "Shatabdi Express", number: "12015", from: "Delhi", to: "Jaipur", status: "Running" },
  { id: 3, name: "Double Decker", number: "22986", from: "Ahmedabad", to: "Mumbai", status: "Cancelled" },
];

const stats = [
  { icon: FaUsers, value: "12,580", label: "Total Users" },
  { icon: FaTrain, value: "265", label: "Active Trains" },
  { icon: FaTicketAlt, value: "7,850", label: "Bookings Today" },
  { icon: FaRupeeSign, value: "₹18.6L", label: "Today's Revenue" },
];

function AdminDashboard() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[var(--bg)]">

        <div className="max-w-7xl mx-auto py-10 px-4">

          <h1 className="font-serif text-3xl font-semibold text-[var(--text)]">Admin Dashboard</h1>
          <p className="text-[var(--text-muted)] mt-1 mb-8">Railway Management System</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6">
                <div className="w-11 h-11 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center mb-4">
                  <Icon className="text-emerald-400" />
                </div>
                <h2 className="text-2xl font-semibold text-[var(--text)]">{value}</h2>
                <p className="text-[var(--text-muted)] text-sm">{label}</p>
              </div>
            ))}
          </div>

          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl mt-8 p-8">

            <div className="flex justify-between items-center mb-6">
              <h2 className="font-serif text-2xl font-semibold text-[var(--text)]">Train Management</h2>
              <button className="bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-white px-5 py-2.5 rounded-xl flex items-center gap-2 transition font-medium text-sm">
                <FaPlus /> Add Train
              </button>
            </div>

            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--border)] text-left text-[var(--text-muted)] uppercase tracking-wide text-xs">
                  <th className="py-3 font-medium">Train</th>
                  <th className="font-medium">Number</th>
                  <th className="font-medium">Route</th>
                  <th className="font-medium">Status</th>
                  <th className="font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {trains.map((train) => (
                  <tr key={train.id} className="border-b border-[var(--border)] hover:bg-[var(--border)]/40 transition">
                    <td className="py-4 font-medium text-[var(--text)]">{train.name}</td>
                    <td className="text-[var(--text-muted)]">{train.number}</td>
                    <td className="text-[var(--text-muted)]">{train.from} → {train.to}</td>
                    <td>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                        train.status === "Running"
                          ? "bg-emerald-400/10 text-emerald-300 border-emerald-400/20"
                          : "bg-red-500/10 text-red-400 border-red-500/20"
                      }`}>
                        {train.status}
                      </span>
                    </td>
                    <td>
                      <div className="flex gap-2">
                        <button className="bg-[var(--surface-2)] hover:bg-[var(--border)] border border-[var(--border)] text-[var(--text)] p-2.5 rounded-lg transition"><FaEdit size={13} /></button>
                        <button className="bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 text-red-400 p-2.5 rounded-lg transition"><FaTrash size={13} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6">
              <div className="w-11 h-11 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center mb-4"><FaTrain className="text-emerald-400" /></div>
              <h3 className="text-lg font-semibold text-[var(--text)]">Manage Trains</h3>
              <p className="text-[var(--text-muted)] text-sm mt-1">Add, update and remove trains.</p>
            </div>
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6">
              <div className="w-11 h-11 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center mb-4"><FaUserCog className="text-emerald-400" /></div>
              <h3 className="text-lg font-semibold text-[var(--text)]">Manage Users</h3>
              <p className="text-[var(--text-muted)] text-sm mt-1">View user accounts and activity.</p>
            </div>
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6">
              <div className="w-11 h-11 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center mb-4"><FaTicketAlt className="text-emerald-400" /></div>
              <h3 className="text-lg font-semibold text-[var(--text)]">Booking Requests</h3>
              <p className="text-[var(--text-muted)] text-sm mt-1">View today's bookings.</p>
            </div>
          </div>

        </div>

      </div>

    </>
  );
}

export default AdminDashboard;
