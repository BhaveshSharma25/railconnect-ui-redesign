import React from "react";
import {
  FaTrain,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const trains = [
  {
    number: "12958",
    name: "Rajdhani Express",
    status: "On Time",
    platform: "3",
    station: "Kota Junction",
    arrival: "08:45 PM",
    color: "bg-emerald-400/10 text-emerald-300 border border-emerald-400/20",
  },
  {
    number: "12015",
    name: "Shatabdi Express",
    status: "Delayed 10 min",
    platform: "2",
    station: "Mathura Junction",
    arrival: "06:30 PM",
    color: "bg-amber-400/10 text-amber-300 border border-amber-400/20",
  },
  {
    number: "22986",
    name: "Double Decker",
    status: "Boarding",
    platform: "1",
    station: "Jaipur Junction",
    arrival: "09:20 AM",
    color: "bg-[#3E5C99]/20 text-[#8FA9E0] border border-[#3E5C99]/30",
  },
];

function LiveTrainStatus() {
  return (
    <section className="py-16 px-6 bg-[var(--bg)]">
      <div className="max-w-7xl mx-auto">

        <h2 className="font-serif text-3xl font-semibold text-center text-[var(--text)]">
          Live Train Status
        </h2>

        <p className="text-center text-[var(--text-muted)] mt-2 mb-10">
          Stay updated with real-time train information.
        </p>

        <div className="grid lg:grid-cols-3 gap-6">

          {trains.map((train, index) => (
            <div
              key={index}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--border)] transition"
            >

              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-[var(--text)]">
                    {train.name}
                  </h3>
                  <p className="text-[var(--text-muted)] text-sm">#{train.number}</p>
                </div>

                <div className="w-10 h-10 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center">
                  <FaTrain className="text-[var(--text-muted)] text-sm" />
                </div>
              </div>

              <span className={`inline-block mt-5 px-3 py-1 rounded-full text-xs font-medium ${train.color}`}>
                {train.status}
              </span>

              <div className="mt-6 space-y-3 text-sm">

                <div className="flex items-center gap-2 text-[var(--text-muted)]">
                  <FaMapMarkerAlt className="text-emerald-400 text-xs" />
                  {train.station}
                </div>

                <div className="flex items-center gap-2 text-[var(--text-muted)]">
                  <FaClock className="text-emerald-400 text-xs" />
                  {train.arrival}
                </div>

                <div className="flex justify-between items-center pt-1">
                  <span className="text-[var(--text-muted)]">Platform</span>
                  <span className="font-semibold text-[var(--text)] text-lg">
                    {train.platform}
                  </span>
                </div>

              </div>

              <button className="mt-6 w-full bg-[#3E5C99] hover:bg-[#34508A] text-white py-2.5 rounded-xl transition text-sm font-medium">
                Track Train
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default LiveTrainStatus;
