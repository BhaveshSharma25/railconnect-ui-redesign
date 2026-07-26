import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import { useNavigate } from "react-router-dom";
import Sparkle from "../components/ui/Sparkle";
import { FaCheckCircle, FaCreditCard, FaMobileAlt, FaUniversity, FaWallet, FaLock } from "react-icons/fa";

function Payment() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("card");

  const methods = [
    { id: "card", label: "Credit / Debit Card", icon: FaCreditCard },
    { id: "upi", label: "UPI", icon: FaMobileAlt },
    { id: "netbanking", label: "Net Banking", icon: FaUniversity },
    { id: "wallet", label: "Wallet", icon: FaWallet },
  ];

  const inputClass =
    "w-full bg-[var(--surface-2)] border border-[var(--border)] rounded-xl p-4 text-[var(--text)] placeholder-[var(--text-faint)] outline-none focus:ring-2 focus:ring-emerald-400/50";

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[var(--bg)] py-10 px-4">

        <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-6">

          {/* Left */}

          <div className="lg:col-span-2 bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-8">

            <h1 className="font-serif text-3xl font-medium text-[#D8B788]">
              Payment
            </h1>
            <p className="text-[var(--text-muted)] mt-1 mb-8">
              Complete your booking securely
            </p>

            <h2 className="text-sm font-medium text-[var(--text-muted)] mb-4">
              Choose Payment Method
            </h2>

            <div className="grid md:grid-cols-2 gap-3">

              {methods.map(({ id, label, icon: Icon }) => (
                <label
                  key={id}
                  className={`flex items-center justify-between gap-3 border rounded-xl p-4 cursor-pointer transition ${
                    paymentMethod === id
                      ? "border-emerald-400/60 bg-emerald-400/5"
                      : "border-[var(--border)] hover:border-[var(--text-faint)]"
                  }`}
                >
                  <span className="flex items-center gap-3 text-[var(--text)]">
                    <Icon className="text-[var(--text-muted)]" />
                    {label}
                  </span>

                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                      paymentMethod === id
                        ? "bg-emerald-400 border-emerald-400"
                        : "border-[var(--border)]"
                    }`}
                  >
                    {paymentMethod === id && (
                      <FaCheckCircle className="text-white text-xs" />
                    )}
                  </span>

                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === id}
                    onChange={() => setPaymentMethod(id)}
                    className="hidden"
                  />
                </label>
              ))}

            </div>

            {paymentMethod === "card" && (
              <div className="mt-8">
                <h2 className="text-sm font-medium text-[var(--text-muted)] mb-4">
                  Card Details
                </h2>

                <div className="space-y-4">

                  <div>
                    <label className="block mb-2 text-sm text-[var(--text-muted)]">Card Number</label>
                    <input type="text" placeholder="1234 5678 9012 3456" className={inputClass} />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 text-sm text-[var(--text-muted)]">Expiry</label>
                      <input type="text" placeholder="MM/YY" className={inputClass} />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm text-[var(--text-muted)]">CVV</label>
                      <input type="password" placeholder="***" className={inputClass} />
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-sm text-[var(--text-muted)]">Card Holder Name</label>
                    <input type="text" placeholder="Bhavesh" className={inputClass} />
                  </div>

                </div>
              </div>
            )}

            {paymentMethod === "upi" && (
              <div className="mt-8">
                <label className="block mb-2 text-sm text-[var(--text-muted)]">UPI ID</label>
                <input type="text" placeholder="example@upi" className={inputClass} />
              </div>
            )}

            <div className="mt-8 bg-emerald-400/5 border border-emerald-400/20 rounded-xl p-5 flex items-center gap-3">
              <FaLock className="text-emerald-400" />
              <div>
                <h3 className="font-medium text-[var(--text)] text-sm">Secure Payment</h3>
                <p className="text-xs text-[var(--text-muted)] mt-1">
                  Your payment is protected with 256-bit SSL encryption.
                </p>
              </div>
            </div>

          </div>

          {/* Right */}

          <div className="relative bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-8 h-fit sticky top-24 overflow-hidden">

            <h2 className="text-xl font-semibold text-[var(--text)] mb-6">
              Booking Summary
            </h2>

            <div className="space-y-4 text-sm">

              <div className="flex justify-between">
                <span className="text-[var(--text-muted)]">Train</span>
                <span className="text-[var(--text)]">Rajdhani Express</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[var(--text-muted)]">Route</span>
                <span className="text-[var(--text)]">Jaipur → Delhi</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[var(--text-muted)]">Date</span>
                <span className="text-[var(--text)]">22 Jul 2026</span>
              </div>

              <div className="flex justify-between">
                <span className="text-[var(--text-muted)]">Passenger</span>
                <span className="text-[var(--text)]">1 Adult</span>
              </div>

              <hr className="border-[var(--border)]" />

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
                onClick={() => navigate("/ticket")}
                className="w-full mt-4 bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-white py-4 rounded-xl font-medium transition flex items-center justify-center gap-2"
              >
                <FaLock className="text-sm" />
                Pay Securely ₹970
              </button>

            </div>

            <Sparkle className="w-5 h-5 text-[var(--text-muted)] absolute bottom-5 right-5" />

          </div>

        </div>

      </div>
    </>
  );
}

export default Payment;
