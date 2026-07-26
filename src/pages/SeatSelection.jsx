import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import { useLocation, useNavigate } from "react-router-dom";

// Different seat layouts per class — pricier classes have fewer, roomier seats
const seatLayoutsByClass = {
  Sleeper: [
    { id: 1, type: "blue" }, { id: 2, type: "blue" }, { id: 3, type: "booked" }, { id: 4, type: "terracotta" },
    { id: 5, type: "blue" }, { id: 6, type: "booked" }, { id: 7, type: "blue" }, { id: 8, type: "terracotta" },
    { id: 9, type: "blue" }, { id: 10, type: "terracotta" }, { id: 11, type: "booked" }, { id: 12, type: "terracotta" },
  ],
  "3A": [
    { id: 1, type: "blue" }, { id: 2, type: "blue" }, { id: 3, type: "booked" }, { id: 4, type: "terracotta" },
    { id: 5, type: "blue" }, { id: 6, type: "booked" }, { id: 7, type: "blue" }, { id: 8, type: "terracotta" },
    { id: 9, type: "blue" }, { id: 10, type: "terracotta" }, { id: 11, type: "booked" }, { id: 12, type: "terracotta" },
  ],
  "2A": [
    { id: 1, type: "blue" }, { id: 2, type: "blue" }, { id: 3, type: "booked" }, { id: 4, type: "terracotta" },
    { id: 5, type: "blue" }, { id: 6, type: "booked" }, { id: 7, type: "blue" }, { id: 8, type: "terracotta" },
  ],
  "1A": [
    { id: 1, type: "blue" }, { id: 2, type: "terracotta" }, { id: 3, type: "blue" }, { id: 4, type: "booked" },
  ],
};

function SeatSelection() {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const train = location.state?.train;
  const seatClass = location.state?.seatClass || "Sleeper";
  const fare = location.state?.fare;
  const coach = location.state?.coach || "15";

  const seats = seatLayoutsByClass[seatClass] || seatLayoutsByClass.Sleeper;

  const handleSeatClick = (seat) => {
    if (seat.type === "booked") return;
    setSelectedSeat(seat.id);
  };

  const seatClasses = (seat) => {
    if (seat.type === "booked") {
      return "bg-[#2A303D] text-white/25 cursor-not-allowed";
    }
    if (selectedSeat === seat.id) {
      return "bg-white text-[#0B0F17] font-semibold ring-2 ring-white/50";
    }
    if (seat.type === "blue") {
      return "bg-[#5B7FA6] hover:bg-[#6A8DB2] text-white";
    }
    return "bg-[#C9714F] hover:bg-[#D28060] text-white";
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[var(--bg)] py-12 px-4">

        <div className="max-w-5xl mx-auto">

          <h1 className="font-serif text-3xl font-medium text-[#D8B788]">
            Select Your Seat
          </h1>
          <p className="text-[var(--text-muted)] mt-1 mb-10">
            {train ? `${train.name} · ` : ""}Class {seatClass} · Coach {coach}
          </p>

          <div className="grid lg:grid-cols-[1fr_320px] gap-6">

            {/* Seat map */}

            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-8">

              <div className="grid grid-cols-4 gap-4 max-w-md">

                {seats.map((seat) => (
                  <button
                    key={seat.id}
                    onClick={() => handleSeatClick(seat)}
                    className={`h-16 rounded-xl text-lg transition ${seatClasses(seat)}`}
                  >
                    {seat.id}
                  </button>
                ))}

              </div>

              <div className="flex gap-6 mt-8 flex-wrap text-sm">

                <div className="flex items-center gap-2 text-[var(--text-muted)]">
                  <div className="w-4 h-4 rounded bg-[#5B7FA6]" />
                  Available (Blue)
                </div>

                <div className="flex items-center gap-2 text-[var(--text-muted)]">
                  <div className="w-4 h-4 rounded bg-[#C9714F]" />
                  Available (Terracotta)
                </div>

                <div className="flex items-center gap-2 text-[var(--text-muted)]">
                  <div className="w-4 h-4 rounded bg-white border border-white/30" />
                  Selected
                </div>

              </div>

            </div>

            {/* Summary */}

            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-6 h-fit">

              <h2 className="text-lg font-semibold text-[var(--text)] mb-5">
                Your Selection
              </h2>

              <div className="flex gap-10 mb-2">
                <div>
                  <p className="text-[var(--text-muted)] text-sm">Class</p>
                  <p className="text-lg font-semibold text-[var(--text)]">{seatClass}</p>
                </div>
                <div>
                  <p className="text-[var(--text-muted)] text-sm">Coach</p>
                  <p className="text-lg font-semibold text-[var(--text)]">{coach}</p>
                </div>
                <div>
                  <p className="text-[var(--text-muted)] text-sm">Seat</p>
                  <p className="text-lg font-semibold text-[var(--text)]">
                    {selectedSeat ?? "—"}
                  </p>
                </div>
              </div>

              {fare && (
                <p className="text-emerald-400 text-sm mb-6">Fare: ₹{fare}</p>
              )}

              <button
                disabled={!selectedSeat}
                onClick={() =>
                  navigate("/payment", {
                    state: { train, seatClass, fare, coach, seat: selectedSeat },
                  })
                }
                className="w-full bg-[var(--surface-2)] hover:bg-[var(--border)] disabled:opacity-40 disabled:cursor-not-allowed border border-[var(--border)] text-[var(--text)] py-3.5 rounded-xl transition font-medium mt-4"
              >
                Continue to Payment
              </button>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default SeatSelection;
