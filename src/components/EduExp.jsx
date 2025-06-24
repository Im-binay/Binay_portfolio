import React, { useState } from 'react';

export default function EduExp() {
  const [selected, setSelected] = useState('education'); // default view

  return (
    <section
      id="education"
      className="flex flex-col items-center justify-center h-auto pb-10 pt-8 md:px-5 bg-light dark:bg-dark text-dark dark:text-light transition-colors duration-300"
    >
      {/* === RADIO TOGGLE ===================================================== */}
      <div className="radio flex gap-4 mb-8 mt-10 bg-blue-50 dark:bg-dark-alt p-2 rounded-full shadow-inner">
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="toggle"
            value="education"
            checked={selected === 'education'}
            onChange={() => setSelected('education')}
            className="hidden"
          />
          <span
            className={`px-4 py-2 rounded-full font-bold transition-colors duration-300 ${
              selected === 'education' ? 'bg-blue-600 text-white' : 'text-black dark:text-white'
            }`}
          >
            Education
          </span>
        </label>

        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name="toggle"
            value="experience"
            checked={selected === 'experience'}
            onChange={() => setSelected('experience')}
            className="hidden"
          />
          <span
            className={`px-4 py-2 rounded-full font-bold transition-colors duration-300 ${
              selected === 'experience' ? 'bg-blue-600 text-white' : 'text-black dark:text-white'
            }`}
          >
            Experience
          </span>
        </label>
      </div>

      <div className="w-full max-w-4xl" data-aos="fade-up">
        {/* === EDUCATION SECTION ============================================== */}
        {selected === 'education' && (
          <div className="education-card bg-blue-50 dark:bg-dark-alt shadow-lg p-5 rounded-lg">
            <h1 className="text-blue-800 font-bold text-xl md:text-3xl mb-4">
              Education
            </h1>
            <div className="border-l-2 border-primary dark:border-blue-500 px-4">
              {/* SEE */}
              <div className="border-b border-gray-300 dark:border-gray-600 pb-2 mt-1">
                <h4 className="text-xl md:text-2xl font-semibold">
                  Bal Bikas English Boarding School
                </h4>
                <p className="text-sm md:text-base leading-5">
                  Secondary Education Examination (SEE) / 2018in  AD
                </p>
              </div>

              {/* +2 */}
              <div className="border-b border-gray-300 dark:border-gray-600 pb-2 mt-6">
                <h4 className="text-xl md:text-2xl font-semibold">
                  Gaindakot Namuna Secondary School
                </h4>
                <p className="text-sm md:text-base leading-5">
                  +2 (Computer Science) / 2020 AD
                </p>
              </div>

              {/* Bachelor */}
              <div className="border-b border-gray-300 dark:border-gray-600 pb-2 mt-6">
                <h4 className="text-xl md:text-2xl font-semibold">
                  Oxford College of Engineering and Management
                </h4>
                <p className="text-sm md:text-base leading-5">
                  Bachelor of Computer Application (BCA) / 2021&nbsp;–&nbsp;Present
                </p>
              </div>
            </div>
          </div>
        )}

        {/* === EXPERIENCE SECTION ============================================ */}
        {selected === 'experience' && (
          <div className="experience-card bg-blue-50 dark:bg-dark-alt shadow-lg p-5 rounded-lg">
            <h1 className="text-blue-800 font-bold text-xl md:text-3xl mb-4">
              Experience
            </h1>
            <div className="border-l-2 border-primary dark:border-blue-500 px-4">
              {/* Internship */}
             <div className="border-b border-gray-300 dark:border-gray-600 pb-3 mt-1">
                <h4 className="text-base md:text-2xl font-semibold">Frontend Developer Intern</h4>
                <p className="text-sm text-blue-600 font-bold">
                  Akshyaraanga Sanjaal Pvt. Ltd. — (1<sup>st</sup> Dec 2024 – 16<sup>th</sup> Feb 2025)
                </p>
                <ul className="list-disc list-outside text-base mt-1 ml-4  text-black dark:text-white">
                  <li>Built responsive UI using HTML, Tailwind CSS, React</li>
                  <li>Worked closely with designers on UI/UX improvements</li>
                </ul>
              </div>

              {/* Data Entry */}
              <div className="border-b border-gray-300 dark:border-gray-600 pb-3 mt-1">
                <h4 className="text-base md:text-2xl font-semibold">Data Entry</h4>
                <p className="text-sm text-blue-600 font-bold">
                  Navya Technologies (Jan&nbsp;2025&nbsp;–&nbsp;Mar&nbsp;2025) 
                </p>
                <ul className="list-disc list-outside text-black dark:text-white text-base mt-1 ml-4">
                  <li>Accurately digitised 5,000+ building-permit records</li>
                  <li>Maintained data quality and supported smooth rollout</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* === DOWNLOAD CV BUTTON ============================================== */}
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
