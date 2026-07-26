import React from "react";
import { FaArrowRight, FaTrain } from "react-icons/fa";
import Sparkle from "../ui/Sparkle";

const routes = [
  { from: "Jaipur", to: "Mumbai", time: "12h 40m" },
  { from: "Delhi", to: "Kolkata", time: "17h 20m" },
  { from: "Ahmedabad", to: "Surat", time: "3h 20m" },
  { from: "Bengaluru", to: "Chennai", time: "5h 10m" },
];

function PopularRoutes() {
  return (
    <section className="relative bg-[var(--bg)] px-6 py-16">
      <div className="max-w-7xl mx-auto">

        <h2 className="font-serif text-3xl font-semibold text-[var(--text)] mb-8">
          Popular Routes
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {routes.map((route, index) => (
            <div
              key={index}
              className="relative bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-6 pb-16 overflow-hidden hover:border-[var(--border)] transition"
            >
              <h3 className="text-lg font-semibold text-[var(--text)]">
                {route.from} to {route.to}
              </h3>

              <p className="text-[var(--text-muted)] text-sm mt-2">
                Approx. {route.time}
              </p>

              <FaTrain className="absolute bottom-4 right-4 text-[var(--border)] text-5xl" />
            </div>
          ))}
        </div>

      </div>

      <Sparkle className="w-6 h-6 text-[var(--text-muted)] absolute bottom-10 right-10 hidden lg:block" />
    </section>
  );
}

export default PopularRoutes;
