import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma } from "react-icons/fa";

export default function SkillModernCard() {
  const skills = [
    { name: "HTML / CSS", percent: 85, icon: <FaHtml5 className="text-orange-500 text-3xl sm:text-4xl" /> },
    { name: "JavaScript", percent: 70, icon: <FaJs className="text-yellow-400 text-3xl sm:text-4xl" /> },
    { name: "Figma", percent: 80, icon: <FaFigma className="text-pink-500 text-3xl sm:text-4xl" /> },
    { name: "Tailwind CSS", percent: 80, icon: <FaCss3Alt className="text-sky-500 text-3xl sm:text-4xl" /> },
    // { name: "React", percent: 70, icon: <FaReact className="text-blue-500 text-3xl sm:text-4xl" /> },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-10 sm:py-12 bg-light text-dark"
    >
      <div className="max-w-5xl w-full text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 mb-10 sm:mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-white/70 backdrop-blur-md border border-gray-200 hover:border-blue-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 sm:p-6 flex flex-col justify-between"
            >
              {/* Top section: Icon + Skill name + Percent */}
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                {/* Left: Icon + Name */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="p-2 sm:p-3 bg-blue-50 rounded-xl shadow-inner">
                    {skill.icon}
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900">
                    {skill.name}
                  </h3>
                </div>

                {/* Right: Responsive Circular Percentage */}
                <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                  <svg viewBox="0 0 48 48" className="w-full h-full transform -rotate-90">
                    <circle
                      cx="24"
                      cy="24"
                      r="20"
                      stroke="#e5e7eb"
                      strokeWidth="4"
                      fill="none"
                    />
                    <circle
                      cx="24"
                      cy="24"
                      r="20"
                      stroke="#3b82f6"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray={2 * Math.PI * 20} // 2πr
                      strokeDashoffset={(1 - skill.percent / 100) * 2 * Math.PI * 20}
                      strokeLinecap="round"
                      className="transition-all duration-700 ease-out"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-xs sm:text-sm font-semibold text-blue-700">
                    {skill.percent}%
                  </span>
                </div>
              </div>

              {/* Bottom subtle line */}
              <div className="w-full h-1 bg-blue-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-700"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>

              {/* Hover Accent text */}
              <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out mt-1 text-xs sm:text-sm text-gray-500 text-center">
                <p>Design · Develop · Iterate</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
