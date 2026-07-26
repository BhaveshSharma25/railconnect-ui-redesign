import React from "react";
import Navbar from "../components/layout/Navbar";
import { useNavigate } from "react-router-dom";
import Sparkle from "../components/ui/Sparkle";

function Booking() {
  const navigate = useNavigate();

  const inputClass =
    "w-full bg-[var(--surface-2)] border border-[var(--border)] rounded-xl p-4 text-[var(--text)] placeholder-[var(--text-faint)] outline-none focus:ring-2 focus:ring-emerald-400/50";

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[var(--bg)] py-10 px-4">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-6">

          {/* Passenger Form */}
          <div className="lg:col-span-2 bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-8">

            <h2 className="font-serif text-2xl font-semibold text-[var(--text)] mb-8">
              Passenger Details
            </h2>

            <div className="space-y-5">

              <div>
                <label className="block mb-2 text-sm text-[var(--text-muted)]">Full Name</label>
                <input type="text" placeholder="Enter your full name" className={inputClass} />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block mb-2 text-sm text-[var(--text-muted)]">Age</label>
                  <input type="number" placeholder="Age" className={inputClass} />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-[var(--text-muted)]">Gender</label>
                  <select className={inputClass}>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block mb-2 text-sm text-[var(--text-muted)]">Berth Preference</label>
                <select className={inputClass}>
                  <option>Lower</option>
                  <option>Middle</option>
                  <option>Upper</option>
                  <option>Side Lower</option>
                  <option>Side Upper</option>
                  <option>No Preference</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm text-[var(--text-muted)]">Mobile Number</label>
                <input type="tel" placeholder="9876543210" className={inputClass} />
              </div>

              <div>
                <label className="block mb-2 text-sm text-[var(--text-muted)]">Email Address</label>
                <input type="email" placeholder="abc@gmail.com" className={inputClass} />
              </div>

            </div>

          </div>

          {/* Fare Summary */}

          <div className="relative bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-8 h-fit sticky top-24 overflow-hidden">

            <h2 className="text-xl font-semibold text-[var(--text)] mb-6">
              Fare Summary
            </h2>

            <div className="space-y-4 text-sm">

              <div className="flex justify-between">
                <span className="text-[var(--text-muted)]">Ticket Fare</span>
                <span className="text-[var(--text)]">₹945</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[var(--text-muted)]">Convenience Fee</span>
                <span className="text-[var(--text)]">₹20</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[var(--text-muted)]">GST</span>
                <span className="text-[var(--text)]">₹5</span>
              </div>

              <hr className="border-[var(--border)]" />

              <div className="flex justify-between text-lg font-semibold">
                <span className="text-[var(--text)]">Total</span>
                <span className="text-emerald-400">₹970</span>
              </div>

              <button
                onClick={() => navigate("/seat-selection")}
                className="w-full bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-white py-4 rounded-xl mt-4 font-medium transition"
              >
                Continue Booking →
              </button>

            </div>

            <Sparkle className="w-5 h-5 text-[var(--text-muted)] absolute bottom-5 right-5" />

          </div>

        </div>
      </div>
    </>
  );
}

export default Booking;
