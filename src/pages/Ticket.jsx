import React from "react";
import Navbar from "../components/layout/Navbar";
import { QRCodeCanvas } from "qrcode.react";
import Sparkle from "../components/ui/Sparkle";

function Ticket() {
  const ticket = {
    pnr: "4839201845",
    train: "12958 Rajdhani Express",
    passenger: "Bhavesh",
    coach: "B2",
    seat: "32",
    from: "Jaipur",
    to: "New Delhi",
    date: "22 July 2026",
    departure: "08:20 PM",
    arrival: "02:40 AM",
    status: "Confirmed",
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[var(--bg)] py-10 px-4">

        <div className="max-w-3xl mx-auto relative bg-[var(--surface)] border border-[var(--border)] rounded-3xl overflow-hidden">

          <div className="p-8 pb-4">
            <p className="text-[var(--text-muted)] text-sm uppercase tracking-wide">{ticket.date}</p>
            <h1 className="font-serif text-3xl font-semibold text-[var(--text)] mt-1">
              {ticket.from} — {ticket.to}
            </h1>
          </div>

          <div className="bg-[var(--surface-2)] mx-4 mb-4 rounded-2xl p-8 border border-[var(--border)]">

            <p className="text-[var(--text-muted)] text-sm">Passenger</p>
            <h2 className="text-xl font-semibold text-[var(--text)] mb-6">{ticket.passenger}</h2>

            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-2xl font-semibold text-[var(--text)]">{ticket.departure}</p>
                <p className="text-[var(--text-muted)] text-sm mt-1">{ticket.from}</p>
              </div>

              <div className="flex-1 mx-4 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="flex-1 border-t-2 border-dashed border-[var(--border)]" />
                <span className="text-[var(--text-faint)]">🚆</span>
                <span className="flex-1 border-t-2 border-dashed border-[var(--border)]" />
                <span className="w-2 h-2 rounded-full border-2 border-[var(--border)]" />
              </div>

              <div className="text-right">
                <p className="text-2xl font-semibold text-[var(--text)]">{ticket.arrival}</p>
                <p className="text-[var(--text-muted)] text-sm mt-1">{ticket.to}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 py-6 border-t border-b border-dashed border-[var(--border)]">
              <div>
                <p className="text-[var(--text-muted)] text-sm">Train Car</p>
                <p className="font-medium text-[var(--text)]">{ticket.coach}</p>
              </div>
              <div>
                <p className="text-[var(--text-muted)] text-sm">Train</p>
                <p className="font-medium text-[var(--text)]">{ticket.train.split(" ")[0]}</p>
              </div>
              <div>
                <p className="text-[var(--text-muted)] text-sm">Seat</p>
                <p className="font-medium text-[var(--text)]">{ticket.seat}</p>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-[var(--text-muted)] text-sm">Booking Reference</p>
                <p className="font-medium tracking-wide text-[var(--text)]">{ticket.pnr}</p>
              </div>

              <span className="bg-emerald-400/10 text-emerald-300 border border-emerald-400/20 px-4 py-1.5 rounded-full text-sm">
                {ticket.status}
              </span>
            </div>

            <div className="flex flex-col items-center mt-8 pt-6 border-t border-dashed border-[var(--border)]">
              <div className="bg-white p-3 rounded-xl">
                <QRCodeCanvas value={ticket.pnr} size={140} />
              </div>
              <p className="mt-4 text-[var(--text-muted)] text-sm">
                Scan during ticket verification
              </p>
            </div>

          </div>

          <div className="p-8 pt-2">
            <button className="w-full bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-white py-4 rounded-xl font-medium transition">
              ↓ Download PDF
            </button>
          </div>

          <Sparkle className="w-5 h-5 text-[var(--text-muted)] absolute top-6 right-6" />

        </div>

      </div>

    </>
  );
}

export default Ticket;
