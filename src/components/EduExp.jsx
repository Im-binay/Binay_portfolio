import React, { useState } from 'react';

export default function EduExp() {
  const [selected, setSelected] = useState('education');

  return (
    <section
      id="education"
      className="flex flex-col items-center justify-center h-auto pb-10 pt-8 md:px-5 bg-light text-black dark:bg-gray-800 dark:text-white transition-colors duration-300"
    >
      {/* Radio Toggle */}
      <div className=" radio flex gap-4 mb-8 mt-10 bg-blue-100 dark:bg-gray-700 p-2 rounded-full shadow-inner">
        {['education', 'experience'].map((type) => (
          <label key={type} className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="toggle"
              value={type}
              checked={selected === type}
              onChange={() => setSelected(type)}
              className="hidden"
            />
            <span
              className={`px-4 py-2 rounded-full transition-colors duration-300 ${
                selected === type
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-800 dark:text-gray-300'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </span>
          </label>
        ))}
      </div>

      <div className="w-full max-w-4xl" data-aos="fade-up">
        {/* === EDUCATION SECTION === */}
        {selected === 'education' && (
          <div className=" education-card bg-blue-50 dark:bg-gray-900 shadow-lg p-5 rounded-lg">
            <h1 className="text-blue-800 dark:text-blue-300 font-bold text-xl md:text-3xl mb-4">
              Education
            </h1>
            <div className="border-l-2 border-blue-600 dark:border-blue-400 px-4">
              <div className="border-b border-gray-300 dark:border-gray-600 pb-2 mt-1">
                <h4 className="text-xl md:text-2xl font-medium">
                  Bal Bikas English Boarding School
                </h4>
                <p className="text-sm dark:text-gray-300">
                  Secondary Education Examination (SEE) / 2018 AD
                </p>
              </div>
              <div className="border-b border-gray-300 dark:border-gray-600 pb-2 mt-6">
                <h4 className="text-xl md:text-2xl font-medium">
                  Gaindakot Namuna Secondary School
                </h4>
                <p className="text-sm dark:text-gray-300">
                  School Leaving Certificate / 2020 AD
                </p>
              </div>
              <div className="border-b border-gray-300 dark:border-gray-600 pb-2 mt-6">
                <h4 className="text-xl md:text-2xl font-medium">
                  Oxford College of Engineering and Management
                </h4>
                <p className="text-sm dark:text-gray-300">
                  Bachelor of Computer Application (BCA) / 2021 - Present
                </p>
              </div>
            </div>
          </div>
        )}

        {/* === EXPERIENCE SECTION === */}
        {selected === 'experience' && (
          <div className="experience-card bg-blue-50 dark:bg-gray-900 shadow-lg p-5 rounded-lg">
            <h1 className="text-blue-800 dark:text-blue-300 font-bold text-xl md:text-3xl mb-4">
              Experience
            </h1>
            <div className="border-l-2 border-blue-600 dark:border-blue-400 px-4">
              <div className="border-b border-gray-300 dark:border-gray-600 pb-3 mt-1">
                <h4 className="text-base md:text-2xl font-semibold">Frontend Developer Intern</h4>
                <p className="text-sm text-blue-500 font-bold dark:text-gray-300">
                  Akshyaraanga Sanjaal Pvt. Ltd. — (Mar 2025 – Present)
                </p>
                <ul className="list-disc list-inside text-base mt-1 dark:text-gray-300">
                  <li>Built responsive UI using HTML, Tailwind CSS, React</li>
                  <li>Worked closely with designers on UI/UX improvements</li>
                </ul>
              </div>
              <div className="border-b border-gray-300 dark:border-gray-600 pb-3 mt-6">
                <h4 className="text-base md:text-2xl font-semibold">Data Entry</h4>
                <p className="text-sm font-bold text-blue-700 dark:text-gray-300">
                  Navya Technologies (Jan 2025 – Mar 2025)
                </p>
                <ul className="list-disc list-inside text-base mt-1 dark:text-gray-300">
                  <li>Accurately digitised 5,000+ building-permit records</li>
                  <li>Maintained data quality and supported smooth rollout</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Download CV */}
      <div className="mt-10 flex justify-center">
        <a
          href="/BinaySharmaCV.pdf"
          download
          className="bg-[#141d97] dark:bg-blue-700 px-4 py-2 rounded text-white hover:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-300"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
