import React from 'react';

export default function Skill() {
  return (
    <section
      aria-labelledby="skill-heading"
      id="skills"
      className="flex flex-col items-center justify-center h-auto pb-5 px-2 md:px-5 bg-light text-dark transition-colors duration-300"
    >
      <div className="flex flex-col md:flex-row justify-evenly mx-auto mt-10 md:mt-25 gap-5 rounded  w-full max-w-6xl">
        {/* Skill Section */}
        <div
          className="w-full md:w-[50%] flex h-auto flex-col p-5 shadow-lg rounded-lg bg-blue-50"
          data-aos="fade-up"
        >
          <h1
            id="skill-heading"
            className="p-2 rounded-md mb-2 text-blue-800 font-bold text-xl md:text-3xl"
          >
            Skills
          </h1>
          <div className="flex flex-col gap-4 border-l-2 border-primary px-2">
  {[
    { name: 'HTML/CSS', percent: 90 },
    { name: 'JavaScript', percent: 75 },
    { name: 'Figma', percent: 90 },
    { name: 'Tailwind CSS', percent: 85},
    // { name: 'SQL', percent: 80 },
    { name: 'React', percent: 70 },
  ].map((skill) => (
    <div key={skill.name}>
      <label htmlFor={skill.name}>{skill.name}</label>
      <div className="w-full bg-light-alt rounded-full">
        <div
          className="bg-gradient-to-r from-blue-300 via-blue-400 to-blue-600 text-xs font-bold text-dark text-center p-0.5 leading-none rounded-full shadow-md"
          style={{ width: `${skill.percent}%` }}
        >
          {skill.percent}%
        </div>
      </div>
    </div>
  ))}
</div>

        </div>

        {/* Education Section */}
        <div
          className="w-full  md:w-[50%] bg-light-alt shadow-lg p-5 mt-8 pb-8 md:mt-0 rounded-lg bg-blue-50"
          data-aos="fade-up"
        >
          <div className="w-full flex justify-between">
            <h1 className="p-2 rounded-md text-blue-800 font-bold text-xl md:text-3xl">
              Education
            </h1>
          </div>
          <div className="flex mt-2">
            <div className="border-l-2 border-primary">
              <span className="hidden">Binay</span>
            </div>
            <div className="px-4 w-full">
              <div className="border-b pb-2 mt-1">
                <div className="text-base md:text-lg font-medium flex flex-col md:flex-row gap-1 md:gap-2">
                  <h4>Bal Bikas English Boarding School</h4>
                  <span className="w-[85px] bg-gradient-to-r from-blue-100 to-blue-200 text-blue-900 text-xs font-semibold px-3 py-2 rounded-full shadow ring-1 ring-blue-400 transition-transform duration-300 hover:scale-105">
                    🏅 GPA: 3.7
                  </span>
                </div>
                <div className="mt-1 text-xs leading-5">
                  <p>Secondary Education Examination (SEE) / 2018 AD</p>
                </div>
              </div>

              <div className="border-b pb-2 mt-6">
                <div className="text-base md:text-lg font-medium flex flex-col md:flex-row gap-1 md:gap-2">
                  <h4>Gaindakot Namuna Secondary School</h4>
                  <span className="w-[85px] bg-gradient-to-r from-blue-100 to-blue-200 text-blue-900 text-xs font-semibold px-2 py-2 rounded-full shadow ring-1 ring-blue-400 transition-transform duration-300 hover:scale-105">
                    🏅 GPA: 3.16
                  </span>
                </div>
                <div className="mt-1 text-xs leading-5">
                  <p>School Leaving Certificate (SLC) Examination / 2020 AD</p>
                </div>
              </div>

              <div className="border-b pb-2 mt-6">
                <div className="text-base md:text-lg font-medium">
                  <h4>Oxford College of Engineering and Management</h4>
                </div>
                <div className="mt-1 text-xs leading-5">
                  <p>Bachelor of Computer Application (BCA) / 2021 AD - Present</p>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>

      {/* Download CV Button */}
      <div className="mb-10 mt-6 flex justify-center items-center">
        <a
          href="/BinaySharmaCV.pdf"
          download
          className="bg-[#141d97] px-4 py-2 rounded text-white ml-0 md:ml-4 mb-2 md:mb-0 hover:bg-blue-500 transition-colors duration-300"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
