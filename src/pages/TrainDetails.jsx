import React from "react";
import Navbar from "../components/layout/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import Sparkle from "../components/ui/Sparkle";

function TrainDetails() {
  const navigate = useNavigate();
  const location = useLocation();

  const train = location.state?.train;

  if (!train) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex flex-col justify-center items-center bg-[var(--bg)]">
          <h1 className="font-serif text-3xl font-semibold text-[var(--text)] mb-4">
            No Train Selected
          </h1>
          <button
            onClick={() => navigate("/search")}
            className="bg-[#3E5C99] hover:bg-[#34508A] text-white px-6 py-3 rounded-xl font-medium transition"
          >
            Go Back
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[var(--bg)] py-10 px-4">

        <div className="max-w-6xl mx-auto">

          {/* Hero */}

          <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-8">

            <h1 className="font-serif text-3xl font-semibold text-[var(--text)]">
              {train.name}
            </h1>

            <p className="text-[var(--text-muted)] mt-1">Train No. {train.number}</p>

            <div className="flex flex-wrap gap-2 mt-5">
              <span className="bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text-muted)] px-4 py-1.5 rounded-full text-sm">
                ★ 4.8 Rating
              </span>
              <span className="bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text-muted)] px-4 py-1.5 rounded-full text-sm">
                Runs Daily
              </span>
              <span className="bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text-muted)] px-4 py-1.5 rounded-full text-sm">
                Superfast
              </span>
              <span className="bg-[var(--surface-2)] border border-[var(--border)] text-[var(--text-muted)] px-4 py-1.5 rounded-full text-sm">
                Premium
              </span>
            </div>

          </div>

          {/* Main */}

          <div className="grid lg:grid-cols-3 gap-6 mt-6">

            {/* Left */}

            <div className="lg:col-span-2 space-y-6">

              {/* Journey */}

              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-8">

                <h2 className="text-xl font-semibold text-[var(--text)] mb-6">
                  Journey Details
                </h2>

                <div className="grid grid-cols-3 items-center">

                  <div>
                    <h3 className="text-2xl font-semibold text-[var(--text)]">
                      {train.departure}
                    </h3>
                    <p className="text-[var(--text-muted)] mt-1 text-sm">Jaipur</p>
                  </div>

                  <div className="text-center px-4">
                    <p className="text-[var(--text-muted)] text-sm mb-3">{train.duration}</p>
                    <div className="relative h-1 rounded-full bg-[var(--surface-2)]">
                      <div className="absolute inset-y-0 left-0 w-[65%] rounded-full bg-white/40" />
                      <div className="absolute top-1/2 left-[65%] -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-[#5B7FA6] ring-4 ring-[var(--surface)]" />
                    </div>
                    <p className="text-[var(--text-muted)] mt-3 text-sm">Duration</p>
                  </div>

                  <div className="text-right">
                    <h3 className="text-2xl font-semibold text-[var(--text)]">
                      {train.arrival}
                    </h3>
                    <p className="text-[var(--text-muted)] mt-1 text-sm">New Delhi</p>
                  </div>

                </div>

              </div>

              {/* Classes */}

              <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-8">

                <h2 className="text-xl font-semibold text-[var(--text)] mb-6">
                  Available Classes
                </h2>

                <div className="grid md:grid-cols-2 gap-4">

                  {[
                    { className: "Sleeper", fare: 550, seats: 112, coach: "S4" },
                    { className: "3A", fare: train.price, seats: 34, coach: "B2" },
                    { className: "2A", fare: 1450, seats: 15, coach: "A1" },
                    { className: "1A", fare: 2600, seats: 4, coach: "H1" },
                  ].map((item, index) => (

                    <div
                      key={index}
                      className="border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--border)] transition"
                    >
                      <h3 className="text-lg font-semibold text-[var(--text)]">
                        {item.className}
                      </h3>

                      <p className="text-emerald-400 mt-2 text-sm">
                        {item.seats} Seats Available
                      </p>

                      <p className="text-2xl font-semibold text-[var(--text)] mt-2">
                        ₹{item.fare}
                      </p>

                      <button
                        onClick={() =>
                          navigate("/seat-selection", {
                            state: {
                              train,
                              seatClass: item.className,
                              fare: item.fare,
                              coach: item.coach,
                            },
                          })
                        }
                        className="mt-5 bg-[var(--surface-2)] hover:bg-[var(--border)] border border-[var(--border)] text-[var(--text)] px-6 py-3 rounded-xl w-full transition font-medium text-sm"
                      >
                        Select {item.className}
                      </button>
                    </div>

                  ))}

                </div>

              </div>

            </div>

            {/* Right — Booking Summary */}

            <div>

              <div className="relative bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-8 sticky top-24 overflow-hidden">

                <h2 className="text-xl font-semibold text-[var(--text)] mb-6">
                  Booking Summary
                </h2>

                <div className="space-y-4 text-sm">

                  <div className="flex justify-between">
                    <span className="text-[var(--text-muted)]">Train</span>
                    <span className="text-[var(--text)]">{train.name}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-[var(--text-muted)]">Train No.</span>
                    <span className="text-[var(--text)]">{train.number}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-[var(--text-muted)]">Departure</span>
                    <span className="text-[var(--text)]">{train.departure}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-[var(--text-muted)]">Arrival</span>
                    <span className="text-[var(--text)]">{train.arrival}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-[var(--text-muted)]">Seats</span>
                    <span className="text-[var(--text)]">{train.seats}</span>
                  </div>

                  <div className="flex justify-between font-semibold pt-1">
                    <span className="text-[var(--text-muted)] font-normal">Fare</span>
                    <span className="text-emerald-400">₹{train.price}</span>
                  </div>

                  <hr className="border-[var(--border)]" />

                  <button
                    onClick={() => navigate("/booking")}
                    className="w-full bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-white py-4 rounded-xl font-medium transition"
                  >
                    Continue Booking →
                  </button>

                </div>

                <Sparkle className="w-5 h-5 text-[var(--text-muted)] absolute bottom-5 right-5" />

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default TrainDetails;
