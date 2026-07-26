import React from "react";

function TravelStats() {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-8">
      <h2 className="text-2xl font-bold mb-4">Travel Stats</h2>
      <div className="grid gap-4 sm:grid-cols-3 text-gray-700">
        <div>
          <p className="text-3xl font-bold">0</p>
          <p>Trips</p>
        </div>
        <div>
          <p className="text-3xl font-bold">0</p>
          <p>Tickets</p>
        </div>
        <div>
          <p className="text-3xl font-bold">0</p>
          <p>Saved Routes</p>
        </div>
      </div>
    </div>
  );
}

export default TravelStats;
