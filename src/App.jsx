import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Booking from "./pages/Booking";
import Ticket from "./pages/Ticket";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import SeatSelection from "./pages/SeatSelection";
import payment from "./pages/payment";
import TrainDetails from "./pages/TrainDetails";
import LiveStatus from "./pages/LiveStatus";
import PnrStatus from "./pages/PnrStatus";
import BookingHistory from "./pages/BookingHistory";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/ticket" element={<Ticket />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
      <Route path="/seat-selection" element={<SeatSelection />} />
      <Route path="/payment" element={<payment />} />
      <Route path="/train-details" element={<TrainDetails />} />
      <Route path="/live-status" element={<LiveStatus />} />
      <Route path="/pnr-status" element={<PnrStatus />} />

      <Route path="/booking-history" element={<BookingHistory />} />

      <Route path="/notifications" element={<Notifications />} />

      <Route path="/settings" element={<Settings />} />

      <Route path="/admin" element={<AdminDashboard />} />

    </Routes>
  );
}

export default App;
