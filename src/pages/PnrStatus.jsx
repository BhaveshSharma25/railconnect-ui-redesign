import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import { FaSearch, FaCheckCircle } from "react-icons/fa";

function PnrStatus() {
  const [pnr, setPnr] = useState("4839201845");

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[var(--bg)] py-10 px-4">

        <div className="max-w-5xl mx-auto">

          <h1 className="font-serif text-3xl font-semibold text-[var(--text)]">
            PNR Status
          </h1>
          <p className="text-[var(--text-muted)] mt-1 mb-8">
            Check your booking status instantly
          </p>

          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6">

            <div className="flex gap-3">
              <input
                value={pnr}
                onChange={(e) => setPnr(e.target.value)}
                className="flex-1 bg-[var(--surface-2)] border border-[var(--border)] rounded-xl p-4 text-[var(--text)] outline-none focus:ring-2 focus:ring-emerald-400/50"
                placeholder="Enter 10 Digit PNR"
              />
              <button className="bg-[#3E5C99] hover:bg-[#34508A] text-white px-6 rounded-xl flex items-center gap-2 transition font-medium">
                <FaSearch /> Check
              </button>
            </div>

          </div>

          <div className="grid lg:grid-cols-3 gap-6 mt-6">

            <div className="lg:col-span-2 bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8">

              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold text-[var(--text)]">Rajdhani Express</h2>
                  <p className="text-[var(--text-muted)] text-sm">Train No. 12958</p>
                </div>
                <span className="bg-emerald-400/10 text-emerald-300 border border-emerald-400/20 px-4 py-1.5 rounded-full text-sm flex items-center gap-2">
                  <FaCheckCircle /> Confirmed
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8 text-sm">
                <div>
                  <p className="text-[var(--text-muted)]">Passenger</p>
                  <h3 className="font-medium text-[var(--text)] text-lg">Bhavesh</h3>
                </div>
                <div>
                  <p className="text-[var(--text-muted)]">Coach</p>
                  <h3 className="font-medium text-[var(--text)] text-lg">B2</h3>
                </div>
                <div>
                  <p className="text-[var(--text-muted)]">Seat</p>
                  <h3 className="font-medium text-[var(--text)] text-lg">32</h3>
                </div>
                <div>
                  <p className="text-[var(--text-muted)]">Class</p>
                  <h3 className="font-medium text-[var(--text)] text-lg">3A</h3>
                </div>
                <div>
                  <p className="text-[var(--text-muted)]">Boarding</p>
                  <h3 className="font-medium text-[var(--text)] text-lg">Jaipur</h3>
                </div>
                <div>
                  <p className="text-[var(--text-muted)]">Destination</p>
                  <h3 className="font-medium text-[var(--text)] text-lg">New Delhi</h3>
                </div>
              </div>

            </div>

            <div className="space-y-6">

              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-5">Journey</h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-[var(--text-muted)]">Date</span><span className="text-[var(--text)]">22 Jul 2026</span></div>
                  <div className="flex justify-between"><span className="text-[var(--text-muted)]">Departure</span><span className="text-[var(--text)]">08:20 PM</span></div>
                  <div className="flex justify-between"><span className="text-[var(--text-muted)]">Arrival</span><span className="text-[var(--text)]">02:40 AM</span></div>
                  <div className="flex justify-between"><span className="text-[var(--text-muted)]">Platform</span><span className="text-[var(--text)]">3</span></div>
                </div>
              </div>

              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-4">Ticket Status</h2>
                <div className="space-y-2">
                  <div className="bg-emerald-400/10 text-emerald-300 border border-emerald-400/20 p-3 rounded-xl text-sm">✔ Chart Prepared</div>
                  <div className="bg-emerald-400/10 text-emerald-300 border border-emerald-400/20 p-3 rounded-xl text-sm">✔ Seat Confirmed</div>
                  <div className="bg-emerald-400/10 text-emerald-300 border border-emerald-400/20 p-3 rounded-xl text-sm">✔ Ready to Travel</div>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-white py-3.5 rounded-xl font-medium transition">
                Download Ticket
              </button>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default PnrStatus;
