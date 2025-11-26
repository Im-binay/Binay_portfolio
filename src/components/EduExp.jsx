import React, { useState, useEffect, useLayoutEffect } from 'react';

export default function EduExpTimelineAccordion() {
  const [selected, setSelected] = useState('education');
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Detect dark mode before first paint
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useLayoutEffect(() => {
    setIsDark(document.body.classList.contains('dark-mode'));
    setMounted(true);
  }, []);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.body.classList.contains('dark-mode'));
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  if (!mounted) return null;

  const education = [
    { title: 'Bal Bikas English Boarding School', subtitle: 'SEE / 2018', badge: 'GPA 3.7', details: 'Completed secondary education with strong academic record.' },
    { title: 'Gaindakot Namuna Secondary School', subtitle: '+2 Science with Computer / 2020', badge: 'GPA 3.16', details: 'Focused on computer science and mathematics.' },
    { title: 'Oxford College of Engineering and Management', subtitle: 'Bachelor of Computer Application / 2021 - 2025', badge: 'Currently Studying', details: 'Pursuing Bachelor in Computer Application, focusing on UI/UX and frontend development.' },
  ];

  const experience = [
    { title: 'Frontend Developer Intern', subtitle: 'Akshyaraanga Sanjaal Pvt. Ltd. — Dec 2024 – Feb 2025 ', points: ['Built responsive UI with React & Tailwind CSS', 'Collaborated with designers on UI/UX improvements'] },
    { title: 'Data Entry', subtitle: 'Navya Technologies — Jan 2025 – Mar 2025', points: ['Accurately digitised 5,000+ building-permit records', 'Maintained data quality and supported smooth rollout'] },
  ];

  const data = selected === 'education' ? education : experience;
  const handleToggle = (idx) => setExpandedIndex(expandedIndex === idx ? null : idx);

  return (
    <section id="education" className="py-8 px-3 sm:py-12 sm:px-6 md:px-12">

      {/* Tabs */}
      <div className="flex justify-center gap-3 sm:gap-6 mb-6 sm:mb-12">
        {['education', 'experience'].map(tab => (
          <button
            key={tab}
            onClick={() => { setSelected(tab); setExpandedIndex(null); }}
            className={`relative px-3 sm:px-4 py-1 sm:py-2 font-medium transition-all duration-300 ${selected === tab ? 'font-bold text-blue-600 dark:text-blue-400' : 'font-medium text-gray-600 dark:text-gray-300'}`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
            {selected === tab && <span className="absolute -bottom-1 left-0 w-full h-1 rounded-full bg-blue-600 dark:bg-blue-400" />}
          </button>
        ))}
      </div>

      {/* Timeline Accordion */}
      <div className="relative max-w-4xl mx-auto">
        {/* Central vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 timeline-line"></div>

        <div className="space-y-3 sm:space-y-6">
          {data.map((item, idx) => (
            <div key={idx} className="relative flex flex-col items-center">

              {/* Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 sm:w-5 sm:h-5 rounded-full timeline-dot shadow-md"></div>

              {/* Accordion Header */}
              <div
                className="ml-0 md:ml-6 w-full cursor-pointer flex flex-col sm:flex-row justify-between items-start sm:items-center p-3 sm:p-5 rounded-2xl accordion-card"
                onClick={() => handleToggle(idx)}
              >
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold flex flex-wrap items-center gap-1 sm:gap-4">
                    {item.title}
                    {item.badge && (
                      <span className="ml-0 sm:ml-2 text-xs px-2 py-1 rounded-full accordion-badge">
                        {item.badge}
                      </span>
                    )}
                  </h3>
                  <p className="text-xs sm:text-sm mt-1 accordion-subtitle">{item.subtitle}</p>
                </div>

                {/* Toggle symbol */}
                <span className="font-bold text-lg sm:text-xl mt-1 sm:mt-0 text-blue-600 dark:text-blue-400">
                  {expandedIndex === idx ? '−' : '+'}
                </span>
              </div>

              {/* Accordion Content */}
              {expandedIndex === idx && (
                <div className="w-full flex justify-center">
                  <div className="mt-1 sm:mt-2 px-4 py-3 rounded-2xl shadow-inner max-w-[90%] inline-block accordion-card">
                    {item.points ? (
                      <ul className="list-disc pl-4 space-y-1 text-sm sm:text-base">
                        {item.points.map((p, i) => <li key={i}>{p}</li>)}
                      </ul>
                    ) : (
                      <p className="text-sm sm:text-base">{item.details}</p>
                    )}
                  </div>
                </div>
              )}

            </div>
          ))}
        </div>
      </div>

      {/* Download CV */}
      <div className="mt-8 sm:mt-12 flex justify-center">
        <a
          href="/BinayUI_Cv.pdf"
          download
          className="px-4 sm:px-6 py-2 sm:py-3  rounded-xl font-medium text-sm sm:text-base transition-all duration-300 bg-blue-600 dark:bg-blue-400 text-white"
        >
          Download CV
          
        </a>
      </div>

    </section>
  );
}
