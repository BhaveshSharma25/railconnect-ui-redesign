import React from "react";

/**
 * Decorative four-point sparkle, used as this app's signature accent.
 * Place near the bottom-right corner of a hero or key card, as in the
 * reference designs (Home, Booking Summary, Seat Selection, Payment).
 */
function Sparkle({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <path
        d="M12 0C12 6.075 6.075 12 0 12C6.075 12 12 17.925 12 24C12 17.925 17.925 12 24 12C17.925 12 12 6.075 12 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default Sparkle;
