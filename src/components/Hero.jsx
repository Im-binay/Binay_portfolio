import React, { useState, useEffect } from "react";

export default function Hero() {
  const [isDark, setIsDark] = useState(
    typeof window !== "undefined" && document.body.classList.contains("dark-mode")
  );

  // Observe body class changes to update dark mode dynamically
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.body.classList.contains("dark-mode"));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  // Function to render name letters with smooth hover
  const splitName = (name, defaultLight, defaultDark, hoverLight, hoverDark) =>
    name.split("").map((letter, i) => (
      <span
        key={i}
        className="inline-block transition-colors duration-500 transform hover:-translate-y-1"
        style={{
          color: isDark ? defaultDark : defaultLight,
          "--hover-color": isDark ? hoverDark : hoverLight,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = e.currentTarget.style.getPropertyValue("--hover-color"))}
        onMouseLeave={(e) => (e.currentTarget.style.color = isDark ? defaultDark : defaultLight)}
      >
        {letter}
      </span>
    ));

  return (
    <section
      id="home"
      className={`relative h-screen flex flex-col items-center justify-center text-center overflow-hidden transition-colors duration-500
        ${isDark
          ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-100"
          : "bg-gradient-to-b from-gray-100 via-gray-200 to-gray-100 text-gray-900"
        }`}
    >
      {/* Background blurred shapes */}
      <span
        className={`hero-shape absolute top-10 left-5 w-36 h-36 rounded-full blur-3xl animate-pulse-slow
          ${isDark ? "bg-blue-500 opacity-25" : "bg-blue-400 opacity-50"}`}
      ></span>
      <span
        className={`hero-shape absolute top-1/4 right-10 w-48 h-48 rounded-full blur-3xl animate-pulse-slow
          ${isDark ? "bg-pink-500 opacity-25" : "bg-pink-400 opacity-45"}`}
      ></span>
      <span
        className={`hero-shape absolute bottom-16 left-1/3 w-64 h-64 rounded-full blur-3xl animate-pulse-slow
          ${isDark ? "bg-green-500 opacity-25" : "bg-green-400 opacity-45"}`}
      ></span>
      <span
        className={`hero-shape absolute bottom-10 right-5 w-32 h-32 rounded-full blur-2xl animate-pulse-slow
          ${isDark ? "bg-purple-500 opacity-25" : "bg-purple-400 opacity-45"}`}
      ></span>

      {/* Floating lines using SVG */}
      <svg className="absolute top-0 left-0 w-full h-full" preserveAspectRatio="none">
        <line x1="10%" y1="20%" x2="40%" y2="30%" stroke={isDark ? "#60a5fa" : "#2563eb"} strokeWidth="1" className="animate-line-slow"/>
        <line x1="30%" y1="60%" x2="70%" y2="40%" stroke={isDark ? "#fcd34d" : "#fbbf24"} strokeWidth="1" className="animate-line-slow"/>
        <line x1="60%" y1="10%" x2="80%" y2="50%" stroke={isDark ? "#818cf8" : "#818cf8"} strokeWidth="1" className="animate-line-slow"/>
        <line x1="20%" y1="80%" x2="50%" y2="60%" stroke={isDark ? "#f472b6" : "#f472b6"} strokeWidth="1" className="animate-line-slow"/>
      </svg>

      {/* Hero content */}
      <div className="flex flex-col items-center justify-center gap-2 relative z-10">
        <h4 className={`text-sm md:text-xl mb-1 underline transition-colors duration-500 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
          Turning Ideas into Seamless UI/UX since — 2023
        </h4>

        <h1 className="text-7xl md:text-8xl lg:text-9xl font-extrabold uppercase leading-tight">
          {splitName(
            "Binay",
            "#2563eb", // Light default blue
            "#ffffff", // Dark default white
            "#000000", // Light hover black
            "#2563eb"  // Dark hover blue
          )}
        </h1>

        <h2 className="text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase leading-tight">
          {splitName(
            "Sharma",
            "#000000", // Light default black
            "#2563eb", // Dark default blue
            "#2563eb", // Light hover blue
            "#000000"  // Dark hover black
          )}
        </h2>
      </div>

      {/* Call-to-action */}
      <a
        href="#about"
        className={`absolute bottom-12 flex items-center justify-center gap-3 text-2xl animate-bounce transition-colors duration-500
          ${isDark ? "text-blue-400" : "text-blue-600"}`}
      >
        See More
        <i className="fa-solid fa-angles-down"></i>
      </a>

      {/* Animations */}
      <style>
        {`
          @keyframes pulse-slow {
            0%, 100% { transform: scale(1); opacity: 0.3; }
            50% { transform: scale(1.15); opacity: 0.5; }
          }
          .animate-pulse-slow { animation: pulse-slow 7s ease-in-out infinite; }

          @keyframes line-move {
            0%, 100% { transform: translate(0, 0); opacity: 0.2; }
            50% { transform: translate(5px, -5px); opacity: 0.5; }
          }
          .animate-line-slow { animation: line-move 10s ease-in-out infinite; }
        `}
      </style>
    </section>
  );
}
