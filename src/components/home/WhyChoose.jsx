import React from "react";
import {
  FaTrain,
  FaClock,
  FaShieldAlt,
  FaMobileAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaTrain size={20} />,
    title: "12,000+ Trains",
    description: "Search and book trains across India in seconds.",
  },
  {
    icon: <FaClock size={20} />,
    title: "Live Train Status",
    description: "Track trains and platforms in real time.",
  },
  {
    icon: <FaShieldAlt size={20} />,
    title: "Secure Payments",
    description: "Multiple payment options with complete security.",
  },
  {
    icon: <FaMobileAlt size={20} />,
    title: "Instant E-Tickets",
    description: "Receive tickets instantly and access them offline.",
  },
];

function WhyChoose() {
  return (
    <section className="bg-[var(--bg)] py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="font-serif text-3xl font-semibold text-center text-[var(--text)] mb-2">
          Why Choose RailConnect+
        </h2>

        <p className="text-center text-[var(--text-muted)] mb-12">
          A faster, smarter and more user-friendly railway booking experience.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-7 hover:border-[var(--border)] transition"
            >
              <div className="w-11 h-11 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center text-emerald-400 mb-5">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-[var(--text)] mb-2">
                {item.title}
              </h3>

              <p className="text-[var(--text-muted)] leading-6 text-sm">
                {item.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default WhyChoose;
