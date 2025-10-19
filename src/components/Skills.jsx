import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma } from 'react-icons/fa';

export default function Skill() {
  const skills = [
    { name: 'HTML/CSS', percent: 90, icon: <FaHtml5 className="inline mr-2 text-orange-500" /> },
    { name: 'JavaScript', percent: 75, icon: <FaJs className="inline mr-2 text-yellow-400" /> },
    { name: 'Figma', percent: 90, icon: <FaFigma className="inline mr-2 text-pink-500" /> },
    { name: 'Tailwind CSS', percent: 85, icon: <FaCss3Alt className="inline mr-2 text-sky-500" /> },
    { name: 'React', percent: 70, icon: <FaReact className="inline mr-2 text-blue-500" /> },
  ];

  return (
    <section
      aria-labelledby="skill-heading"
      id="skills"
      className="relative flex flex-col items-center justify-center h-auto pb-10 p-5 pt-8 md:px-5 bg-light text-dark transition-colors duration-300"
    >
      {/* Optional floating shapes for design */}
      <div className="absolute -z-10 w-32 h-32 bg-blue-200 rounded-full top-0 right-10 opacity-20"></div>
      <div className="absolute -z-10 w-40 h-40 bg-blue-100 rounded-full bottom-0 left-10 opacity-20"></div>

      <div
        className="w-full max-w-4xl mt-8 p-6 bg-blue-50 shadow-lg rounded-xl"
        data-aos="fade-up"
      >
        <h1
          id="skill-heading"
          className="p-2 rounded-md mb-6 text-blue-800 font-bold text-2xl md:text-4xl"
        >
          Skills
        </h1>

        <div className="flex flex-col gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col">
              {/* Skill Label + Percent */}
              <div className="flex justify-between items-center mb-2">
                <label className="flex items-center font-semibold text-lg">
                  {skill.icon} {skill.name}
                </label>
                <span className="text-sm font-semibold">{skill.percent}%</span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-4 bg-blue-100 rounded-full overflow-hidden shadow-inner">
                <div
                  className="h-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 rounded-full transform transition-all duration-1000 ease-in-out hover:scale-y-110"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
