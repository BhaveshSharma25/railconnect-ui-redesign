import React from "react";
import { useTheme } from "../../context/ThemeContext";

function Hero() {
  const { theme } = useTheme();
  const isLight = theme === "light";

  return (
    <section
      className={`pt-16 pb-10 px-4 transition-colors ${
        isLight
          ? "bg-gradient-to-br from-[#1E3A8A] to-[#3B5FCB]"
          : "bg-[var(--bg)]"
      }`}
    >

      <div className="max-w-4xl mx-auto text-center">

        <h1
          className={`font-serif text-4xl md:text-5xl font-medium ${
            isLight ? "text-[#0B1220]" : "text-[var(--text)]"
          }`}
        >
          Your Seamless Rail Journey Awaits
        </h1>

        <p
          className={`mt-4 tracking-wide ${
            isLight ? "text-[#0B1220]/70" : "text-[var(--text-muted)]"
          }`}
        >
          Fast · Secure · Comfortable
        </p>

      </div>

    </section>
  );
}

export default Hero;
