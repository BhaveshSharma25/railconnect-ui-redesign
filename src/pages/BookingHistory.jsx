import React from "react";
import Navbar from "../components/layout/Navbar";
import { FaTrain, FaDownload, FaRedo, FaEye } from "react-icons/fa";

const bookings = [
  {
    id: 1,
    train: "Rajdhani Express",
    number: "12958",
    from: "Jaipur",
    to: "New Delhi",
    date: "22 Jul 2026",
    coach: "B2",
    seat: "32",
    status: "Completed",
  },
  {
    id: 2,
    train: "Shatabdi Express",
    number: "12015",
    from: "Delhi",
    to: "Jaipur",
    date: "15 Jul 2026",
    coach: "C1",
    seat: "18",
    status: "Completed",
  },
  {
    id: 3,
    train: "Double Decker",
    number: "22986",
    from: "Ahmedabad",
    to: "Mumbai",
    date: "10 Jul 2026",
    coach: "D3",
    seat: "41",
    status: "Cancelled",
  },
];

function BookingHistory() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[var(--bg)] py-10 px-4">

        <div className="max-w-6xl mx-auto">

          <h1 className="font-serif text-3xl font-semibold text-[var(--text)]">
            Booking History
          </h1>
          <p className="text-[var(--text-muted)] mt-1 mb-8">
            View all your previous railway journeys
          </p>

          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-5 mb-8">
            <input
              type="text"
              placeholder="Search by Train Name or PNR..."
              className="w-full p-3 bg-[var(--surface-2)] border border-[var(--border)] rounded-xl text-[var(--text)] placeholder-[var(--text-faint)] outline-none focus:ring-2 focus:ring-emerald-400/50"
            />
          </div>

          <div className="space-y-4">

            {bookings.map((booking) => (

              <div
                key={booking.id}
                className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--border)] transition"
              >

                <div className="flex flex-col lg:flex-row justify-between gap-6">

                  <div>

                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center">
                        <FaTrain className="text-[var(--text-muted)] text-sm" />
                      </div>
                      <h2 className="text-lg font-semibold text-[var(--text)]">
                        {booking.train}
                      </h2>
                    </div>

                    <p className="text-[var(--text-muted)] text-sm mt-2">
                      Train No. {booking.number}
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-5 text-sm">
                      <div>
                        <p className="text-[var(--text-muted)]">Route</p>
                        <h3 className="font-medium text-[var(--text)]">
                          {booking.from} → {booking.to}
                        </h3>
                      </div>
                      <div>
                        <p className="text-[var(--text-muted)]">Journey Date</p>
                        <h3 className="font-medium text-[var(--text)]">{booking.date}</h3>
                      </div>
                      <div>
                        <p className="text-[var(--text-muted)]">Coach</p>
                        <h3 className="font-medium text-[var(--text)]">{booking.coach}</h3>
                      </div>
                      <div>
                        <p className="text-[var(--text-muted)]">Seat</p>
                        <h3 className="font-medium text-[var(--text)]">{booking.seat}</h3>
                      </div>
                    </div>

                  </div>

                  <div className="flex flex-col justify-between items-start lg:items-end gap-4">

                    <span
                      className={`px-4 py-1.5 rounded-full text-xs font-medium border ${
                        booking.status === "Completed"
                          ? "bg-emerald-400/10 text-emerald-300 border-emerald-400/20"
                          : "bg-red-500/10 text-red-400 border-red-500/20"
                      }`}
                    >
                      {booking.status}
                    </span>

                    <div className="flex gap-2">
                      <button className="bg-[#3E5C99] hover:bg-[#34508A] text-white px-4 py-2.5 rounded-xl flex items-center gap-2 transition text-sm">
                        <FaEye /> View
                      </button>
                      <button className="bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-white px-4 py-2.5 rounded-xl flex items-center gap-2 transition text-sm">
                        <FaDownload /> Download
                      </button>
                      <button className="bg-[var(--surface-2)] hover:bg-[var(--border)] border border-[var(--border)] text-[var(--text)] px-4 py-2.5 rounded-xl flex items-center gap-2 transition text-sm">
                        <FaRedo /> Book Again
                      </button>
                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </>
  );
}

export default BookingHistory;
