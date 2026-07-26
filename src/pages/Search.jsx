import React from "react";
import Navbar from "../components/layout/Navbar";
import { useNavigate } from "react-router-dom";
import { FaStar, FaWifi, FaUtensils, FaBolt, FaSnowflake } from "react-icons/fa";

const trains = [
  {
    id: 1,
    name: "Rajdhani Express",
    number: "12958",
    departure: "08:20 PM",
    arrival: "02:40 AM",
    duration: "6h 20m",
    price: 945,
    seats: "Available",
    rating: 4.8,
    type: "Superfast",
    runs: "Runs Daily",
    classes: ["SL", "3A", "2A", "1A"],
    amenities: ["wifi", "food", "charging", "ac"],
  },
  {
    id: 2,
    name: "Shatabdi Express",
    number: "12015",
    departure: "07:15 AM",
    arrival: "01:10 PM",
    duration: "5h 55m",
    price: 780,
    seats: "Available",
    rating: 4.6,
    type: "Express",
    runs: "Mon, Wed, Fri",
    classes: ["CC", "EC"],
    amenities: ["food", "charging", "ac"],
  },
  {
    id: 3,
    name: "Double Decker",
    number: "22986",
    departure: "04:00 PM",
    arrival: "09:30 PM",
    duration: "5h 30m",
    price: 620,
    seats: "RAC 12",
    rating: 4.2,
    type: "Superfast",
    runs: "Runs Daily",
    classes: ["CC"],
    amenities: ["charging", "ac"],
  },
];

const amenityIcon = {
  wifi: FaWifi,
  food: FaUtensils,
  charging: FaBolt,
  ac: FaSnowflake,
};

const amenityLabel = {
  wifi: "WiFi",
  food: "Pantry",
  charging: "Charging",
  ac: "AC",
};

function Search() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[var(--bg)] py-10 px-4">

        <div className="max-w-5xl mx-auto">

          <h1 className="font-serif text-3xl font-semibold text-[var(--text)] mb-1">
            Available Trains
          </h1>

          <p className="text-[var(--text-muted)] mb-8">
            Jaipur → New Delhi | 22 July 2026
          </p>

          <div className="space-y-4">

            {trains.map((train) => (
              <div
                key={train.id}
                className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--border)] transition"
              >

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">

                  <div className="flex-1">

                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-lg font-semibold text-[var(--text)]">
                        {train.name}
                      </h2>
                      <span className="flex items-center gap-1 text-xs text-amber-300 bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded-full">
                        <FaStar size={10} /> {train.rating}
                      </span>
                      <span className="text-xs text-[var(--text-muted)] bg-[var(--surface-2)] border border-[var(--border)] px-2.5 py-1 rounded-full">
                        {train.type}
                      </span>
                      <span className="text-xs text-[var(--text-muted)]">{train.runs}</span>
                    </div>

                    <p className="text-[var(--text-muted)] text-sm mt-1">{train.number}</p>

                    <div className="flex flex-wrap gap-x-8 gap-y-2 mt-4 text-sm">
                      <div>
                        <p className="text-[var(--text-muted)]">Departure</p>
                        <p className="text-[var(--text)] font-medium">{train.departure}</p>
                      </div>
                      <div>
                        <p className="text-[var(--text-muted)]">Duration</p>
                        <p className="text-[var(--text)] font-medium">{train.duration}</p>
                      </div>
                      <div>
                        <p className="text-[var(--text-muted)]">Arrival</p>
                        <p className="text-[var(--text)] font-medium">{train.arrival}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mt-5 pt-4 border-t border-[var(--border)]">

                      <div className="flex gap-1.5">
                        {train.classes.map((c) => (
                          <span
                            key={c}
                            className="text-xs font-medium text-[var(--text-muted)] bg-[var(--surface-2)] border border-[var(--border)] px-2.5 py-1 rounded-lg"
                          >
                            {c}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        {train.amenities.map((a) => {
                          const Icon = amenityIcon[a];
                          return (
                            <span
                              key={a}
                              title={amenityLabel[a]}
                              className="flex items-center gap-1.5 text-xs text-[var(--text-faint)]"
                            >
                              <Icon size={12} />
                              {amenityLabel[a]}
                            </span>
                          );
                        })}
                      </div>

                    </div>

                  </div>

                  <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start gap-3 shrink-0">
                    <div className="text-right">
                      <p className="text-2xl font-semibold text-[#34D399]">
                        ₹{train.price}
                      </p>
                      <p className="text-[var(--text-muted)] text-sm">{train.seats}</p>
                    </div>

                    <button
                      onClick={() => navigate("/train-details", { state: { train } })}
                      className="bg-[#3E5C99] hover:bg-[#34508A] text-white px-6 py-2.5 rounded-xl transition font-medium text-sm"
                    >
                      View Details
                    </button>
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

export default Search;
