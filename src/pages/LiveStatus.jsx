import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import { FaTrain, FaSearch, FaBell } from "react-icons/fa";

function LiveStatus() {
  const [trainNo, setTrainNo] = useState("12958");

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[var(--bg)] py-10 px-4">

        <div className="max-w-6xl mx-auto">

          <h1 className="font-serif text-3xl font-semibold text-[var(--text)] flex items-center gap-3">
            <FaTrain /> Live Train Status
          </h1>
          <p className="text-[var(--text-muted)] mt-1 mb-8">Track your train in real time</p>

          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6">
            <div className="flex gap-3">
              <input
                value={trainNo}
                onChange={(e) => setTrainNo(e.target.value)}
                placeholder="Enter Train Number"
                className="flex-1 bg-[var(--surface-2)] border border-[var(--border)] rounded-xl p-4 text-[var(--text)] outline-none focus:ring-2 focus:ring-emerald-400/50"
              />
              <button className="bg-[#3E5C99] hover:bg-[#34508A] text-white px-6 rounded-xl flex items-center gap-2 transition font-medium">
                <FaSearch /> Search
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mt-6">

            <div className="lg:col-span-2 space-y-6">

              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8">

                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-semibold text-[var(--text)]">Rajdhani Express</h2>
                    <p className="text-[var(--text-muted)] text-sm">Train No. {trainNo}</p>
                  </div>
                  <span className="bg-emerald-400/10 text-emerald-300 border border-emerald-400/20 px-4 py-1.5 rounded-full text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" /> Running On Time
                  </span>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-8 text-sm">
                  <div><p className="text-[var(--text-muted)]">Current Station</p><h3 className="text-[var(--text)] font-medium text-lg">Alwar Junction</h3></div>
                  <div><p className="text-[var(--text-muted)]">Next Station</p><h3 className="text-[var(--text)] font-medium text-lg">Gurgaon</h3></div>
                  <div><p className="text-[var(--text-muted)]">Platform</p><h3 className="text-[var(--text)] font-medium text-lg">3</h3></div>
                  <div><p className="text-[var(--text-muted)]">Speed</p><h3 className="text-[var(--text)] font-medium text-lg">82 km/h</h3></div>
                </div>

              </div>

              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-8">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-5">Journey Progress</h2>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3 text-[var(--text-muted)]"><span className="text-emerald-400">✔</span> Jaipur</div>
                  <div className="flex items-center gap-3 text-[var(--text-muted)]"><span className="text-emerald-400">✔</span> Alwar</div>
                  <div className="flex items-center gap-3 text-[var(--text)] font-medium"><span className="text-emerald-400 animate-pulse">●</span> Rewari (Current)</div>
                  <div className="flex items-center gap-3 text-[var(--text-faint)]"><span>○</span> Gurgaon</div>
                  <div className="flex items-center gap-3 text-[var(--text-faint)]"><span>○</span> New Delhi</div>
                </div>
              </div>

            </div>

            <div className="space-y-6">

              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-4">Train Info</h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between"><span className="text-[var(--text-muted)]">Distance</span><span className="text-[var(--text)]">308 km</span></div>
                  <div className="flex justify-between"><span className="text-[var(--text-muted)]">Covered</span><span className="text-[var(--text)]">182 km</span></div>
                  <div className="flex justify-between"><span className="text-[var(--text-muted)]">Remaining</span><span className="text-[var(--text)]">126 km</span></div>
                  <div className="flex justify-between"><span className="text-[var(--text-muted)]">Delay</span><span className="text-emerald-400">0 Minutes</span></div>
                  <div className="flex justify-between"><span className="text-[var(--text-muted)]">Arrival</span><span className="text-[var(--text)]">02:40 AM</span></div>
                </div>
              </div>

              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-4">Weather</h2>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-[var(--text)]"><span>☀ Jaipur</span><span>34°C</span></div>
                  <div className="flex justify-between text-[var(--text)]"><span>☁ Delhi</span><span>29°C</span></div>
                </div>
              </div>

              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6">
                <h2 className="text-lg font-semibold text-[var(--text)] mb-4 flex items-center gap-2"><FaBell /> Updates</h2>
                <div className="space-y-2">
                  <div className="border border-[var(--border)] rounded-xl p-3 text-sm text-[var(--text-muted)]">Platform changed to 3</div>
                  <div className="border border-[var(--border)] rounded-xl p-3 text-sm text-[var(--text-muted)]">Running on time</div>
                  <div className="border border-[var(--border)] rounded-xl p-3 text-sm text-[var(--text-muted)]">Coach position updated</div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </>
  );
}

export default LiveStatus;
