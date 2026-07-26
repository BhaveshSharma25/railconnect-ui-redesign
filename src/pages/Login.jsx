import React from "react";
import { FaTrain } from "react-icons/fa";

function Login() {
  return (
    <div className="min-h-screen bg-[var(--bg)] flex items-center justify-center px-4">

      <div className="w-full max-w-md">

        <div className="flex items-center justify-center gap-2 mb-8 text-[var(--text)]">
          <FaTrain />
          <span className="font-serif text-xl font-semibold">RailConnect+</span>
        </div>

        <div className="bg-[var(--surface)] border border-[var(--border)] rounded-3xl p-8">

          <h1 className="font-serif text-2xl font-semibold text-[var(--text)]">Welcome back</h1>
          <p className="text-[var(--text-muted)] mt-1 mb-8 text-sm">Log in to manage your bookings</p>

          <form className="space-y-4">

            <div>
              <label className="block mb-2 text-sm text-[var(--text-muted)]">Email Address</label>
              <input
                type="email"
                placeholder="abc@gmail.com"
                className="w-full bg-[var(--surface-2)] border border-[var(--border)] rounded-xl p-4 text-[var(--text)] placeholder-[var(--text-faint)] outline-none focus:ring-2 focus:ring-emerald-400/50"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-[var(--text-muted)]">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full bg-[var(--surface-2)] border border-[var(--border)] rounded-xl p-4 text-[var(--text)] placeholder-[var(--text-faint)] outline-none focus:ring-2 focus:ring-emerald-400/50"
              />
            </div>

            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2 text-[var(--text-muted)]">
                <input type="checkbox" className="accent-emerald-400" />
                Remember me
              </label>
              <a href="#" className="text-emerald-400 font-medium">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-white py-3.5 rounded-xl font-medium transition"
            >
              Log In
            </button>

          </form>

          <p className="text-center text-[var(--text-muted)] mt-6 text-sm">
            Don&apos;t have an account?{" "}
            <a href="#" className="text-emerald-400 font-medium">Sign up</a>
          </p>

        </div>

      </div>

    </div>
  );
}

export default Login;
