import React, { useState } from 'react';

export default function EduExp() {
  const [selected, setSelected] = useState('education');

  return (
    <section
      id="education"
      className=" flex flex-col items-center justify-center h-auto pb-10 pt-5 md:px-5 transition-colors duration-300"
    >
      {/* Radio Toggle */}
      <div className="radio flex gap-4 mb-8 mt-10 bg-blue-100 p-2 rounded-full shadow">
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
                selected === type ? 'bg-blue-600 text-white' : 'text-gray-800'
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </span>
          </label>
        ))}
      </div>

      <div className="education-section w-full max-w-4xl p-6" data-aos="fade-up">
        {/* === EDUCATION SECTION === */}
        {selected === 'education' && (
          <div className="education-card bg-blue-50 shadow-lg p-5 rounded-lg p">
            <h1 className="font-bold text-2xl text-blue-600 md:text-3xl mb-4">Education</h1>
            <div className="border-l-2  px-4">
              <div className="border-b border-gray-300 pb-2 mt-1">
                <h4 className="text-xl md:text-2xl font-medium">
                  Bal Bikas English Boarding School
                </h4>
                <p className="text-xs md:text-base">
                  Secondary Education Examination (SEE) / 2018 AD
                  <br className="md:hidden" />
                  <span className="inline-flex items-center gap-1 md:ml-2 bg-blue-100   text-blue-800 dark:bg-blue-800 dark:text-blue-100  mt-1 md:mt-0  px-2 py-0.5 rounded-full">
                  🎓 GPA 3.7
                </span>
                </p>
                
              </div>
              <div className="border-b border-gray-300 pb-2 mt-6">
                <h4 className="text-xl md:text-2xl font-medium">
                  Gaindakot Namuna Secondary School
                </h4>
                <p className="text-xs md:text-base eduexp-muted">
                  +2 with Computer Science / 2020 AD
                  <br className="md:hidden" />
                      <span className="inline-block md:inline-flex items-center gap-1 bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100 mt-1 md:mt-0 md:ml-2 px-2 py-0.5 rounded-full">
                        🎓 GPA 3.22
                    </span>
                </p>

              </div>
              <div className="border-b border-gray-300 pb-2 mt-6">
                <h4 className="text-xl md:text-2xl font-medium">
                  Oxford College of Engineering and Management
                </h4>
                <p className="text-xs md:text-base eduexp-muted">
                  Bachelor of Computer Application (BCA) / 2021 - Present
                  <br className="md:hidden" />
                  <span className="nline-flex items-center gap-1 md:ml-2 bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-100  mt-1 md:mt-0  px-2 py-0.5 rounded-full">
                  📚 Currently Studying
                  </span>
                </p>
              </div>
            </div>
          </div>
        )}

        {/* === EXPERIENCE SECTION === */}
        {selected === 'experience' && (
          <div className="experience-card bg-blue-50 shadow-lg p-5 rounded-lg">
            <h1 className="font-bold text-2xl md:text-3xl text-blue-600 mb-4">Experience</h1>
            <div className="border-l-2 eduexp-border px-4">
              <div className="border-b border-gray-300 pb-3 mt-1">
                <h4 className="text-xl md:text-2xl font-semibold">Frontend Developer Intern</h4>
                <p className=" text-sm md:text-lg font-semibold text-blue-500">
                  Akshyaraanga Sanjaal Pvt. Ltd. — (Mar 2025 – Present)
                </p>
                <ul className="list-disc list-outside text-base mt-1 ml-5">
                  <li>Built responsive UI using HTML, Tailwind CSS, React</li>
                  <li>Worked closely with designers on UI/UX improvements</li>
                </ul>
              </div>
              <div className="border-b border-gray-300 pb-3 mt-6">
                <h4 className="text-xl md:text-2xl font-semibold">Data Entry</h4>
                <p className=" text-sm md:text-lg font-semibold text-blue-700">
                  Navya Technologies (Jan 2025 – Mar 2025)
                </p>
                <ul className="list-disc list-outside text-base mt-1 ml-5 ">
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
          className="bg-[#141d97] px-4 py-2 rounded text-white hover:bg-blue-500 transition-colors duration-300"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}
