import React from "react";

function QuickActions() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <button className="rounded-2xl bg-blue-900 text-white py-4 font-semibold hover:bg-blue-800">
          Book Again
        </button>
        <button className="rounded-2xl bg-slate-200 text-slate-900 py-4 font-semibold hover:bg-slate-300">
          Edit Profile
        </button>
      </div>
    </div>
  );
}

export default QuickActions;
