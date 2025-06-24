import React from 'react';

export default function Skill() {
  return (
    <section
      aria-labelledby="skill-heading"
      id="skills"
      className="flex flex-col items-center justify-center h-auto pb-10 pt-8 md:px-5 bg-light text-dark transition-colors duration-300"
    >
      <div
        className=" skill-div w-full max-w-4xl mt-15 p-5  bg-blue-50 shadow-lg rounded-lg"
        data-aos="fade-up"
      >
        <h1
          id="skill-heading"
          className="p-2 rounded-md mb-4 text-blue-800 font-bold text-xl md:text-3xl"
        >
          Skills
        </h1>
        <div className="flex flex-col gap-4 border-l-2 border-primary px-2 text-lg">
          {[
            { name: 'HTML/CSS', percent: 90 },
            { name: 'JavaScript', percent: 75 },
            { name: 'Figma', percent: 90 },
            { name: 'Tailwind CSS', percent: 85 },
            { name: 'React', percent: 70 },
          ].map((skill) => (
            <div key={skill.name}>
              <label htmlFor={skill.name}>{skill.name}</label>
              <div className="skill-percent w-full bg-blue-200 rounded-full">
                <div
                  className="bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 text-sm font-bold text-center p-0.5 leading-none rounded-full shadow-md bg-amber-500"
                  style={{ width: `${skill.percent}%` }}
                >
                  {skill.percent}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
