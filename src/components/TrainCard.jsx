import React from "react";
import { useNavigate } from "react-router-dom";

function TrainCard({ train }) {

  const navigate = useNavigate();

  return (
    <div className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/30 transition hover:-translate-y-1">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{train.number}</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">{train.name}</h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div>
              <p className="text-sm text-slate-400">Departure</p>
              <p className="mt-2 text-lg font-semibold text-white">{train.departure}</p>
            </div>
            <div>
              <p className="text-sm text-slate-400">Duration</p>
              <p className="mt-2 text-lg font-semibold text-white">{train.duration}</p>
            </div>
            <div>
              <p className="text-sm text-slate-400">Arrival</p>
              <p className="mt-2 text-lg font-semibold text-white">{train.arrival}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 text-right lg:items-end lg:text-right">
          <span className="rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300">
            {train.seats}
          </span>
          <p className="text-3xl font-semibold text-emerald-400">₹{train.price}</p>
          <button
            onClick={() =>
              navigate("/train-details", {
                state: { train },
              })
            }
            className="rounded-3xl bg-gradient-to-r from-emerald-500 to-emerald-600 px-8 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:opacity-95"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default TrainCard;