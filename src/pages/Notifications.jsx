import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import {
  FaBell,
  FaTrain,
  FaCheckCircle,
  FaMoneyCheckAlt,
  FaTrash,
} from "react-icons/fa";

const notificationData = [
  {
    id: 1,
    title: "Booking Confirmed",
    message: "Your Rajdhani Express ticket has been confirmed.",
    time: "5 min ago",
    icon: <FaCheckCircle className="text-emerald-400" />,
    read: false,
  },
  {
    id: 2,
    title: "Train Running Late",
    message: "Shatabdi Express is delayed by 20 minutes.",
    time: "30 min ago",
    icon: <FaTrain className="text-[var(--text-muted)]" />,
    read: false,
  },
  {
    id: 3,
    title: "Payment Successful",
    message: "₹970 has been paid successfully.",
    time: "Yesterday",
    icon: <FaMoneyCheckAlt className="text-emerald-400" />,
    read: true,
  },
  {
    id: 4,
    title: "Platform Changed",
    message: "Platform changed from 2 to 4.",
    time: "2 days ago",
    icon: <FaTrain className="text-[var(--text-muted)]" />,
    read: true,
  },
];

function Notifications() {
  const [notifications, setNotifications] = useState(notificationData);

  const deleteNotification = (id) =>
    setNotifications(notifications.filter((item) => item.id !== id));

  const markAllRead = () =>
    setNotifications(notifications.map((item) => ({ ...item, read: true })));

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[var(--bg)] py-10 px-4">

        <div className="max-w-5xl mx-auto">

          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="font-serif text-3xl font-semibold text-[var(--text)] flex items-center gap-3">
                <FaBell /> Notifications
              </h1>
              <p className="text-[var(--text-muted)] mt-1">Stay updated with your bookings</p>
            </div>

            <button
              onClick={markAllRead}
              className="bg-gradient-to-r from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 text-white px-5 py-2.5 rounded-xl font-medium transition text-sm"
            >
              Mark All Read
            </button>
          </div>

          <div className="space-y-3">

            {notifications.map((item) => (
              <div
                key={item.id}
                className={`rounded-2xl p-5 bg-[var(--surface)] border ${
                  item.read ? "border-[var(--border)]" : "border-emerald-400/40"
                }`}
              >
                <div className="flex justify-between">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[var(--surface-2)] border border-[var(--border)] flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h2 className="font-semibold text-[var(--text)]">{item.title}</h2>
                      <p className="text-[var(--text-muted)] text-sm mt-1">{item.message}</p>
                      <p className="text-[var(--text-faint)] text-xs mt-2">{item.time}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => deleteNotification(item.id)}
                    className="text-[var(--text-faint)] hover:text-red-400 transition h-fit"
                  >
                    <FaTrash size={16} />
                  </button>
                </div>
              </div>
            ))}

          </div>

          {notifications.length === 0 && (
            <div className="bg-[var(--surface)] border border-[var(--border)] rounded-2xl p-20 mt-8 text-center">
              <FaBell className="mx-auto text-[var(--text-faint)]" size={44} />
              <h2 className="font-serif text-2xl font-semibold text-[var(--text)] mt-6">
                No Notifications
              </h2>
              <p className="text-[var(--text-muted)] mt-2">You're all caught up!</p>
            </div>
          )}

        </div>

      </div>
    </>
  );
}

export default Notifications;
