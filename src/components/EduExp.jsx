import { useEffect, useRef, useState } from "react";
import {
  GraduationCap,
  Briefcase,
  Layers,
} from "lucide-react";

// ========================================
// Education & Experience Data
// ========================================
const timeline = [
  {
    id: 2,
    type: "education",
    title: "Bachelor of Computer Application (BCA)",
    organization: "Oxford College of Engineering and Management",
    start: "July 2021",
    end: "August 2025",
    startDate: "2021-07",
    endDate: "2025-08",
    description:
      "Completed a Bachelor of Computer Application with a strong foundation in programming, software development, web technologies, and user-centered design.",
  },

  {
    id: 1,
    type: "experience",
    title: "Frontend Developer Intern",
    organization: "Akshyaraanga Sanjaal Pvt. Ltd.",
    start: "December 2024",
    end: "February 2025",
    startDate: "2024-12",
    endDate: "2025-02",
    description:
      "Designed and developed responsive websites for Sungava College and Royal Rhino Riders using Figma, React.js, and Tailwind CSS.",
  },

  {
    id: 3,
    type: "experience",
    title: "Data Entry Assistant",
    organization: "Navya Technologies",
    start: "January 2025",
    end: "March 2025",
    startDate: "2025-01",
    endDate: "2025-03",
    description:
      "Managed, validated, and maintained accurate digital records for the Gaindakot Municipality Digitization Project.",
  },
];

// ========================================
// Education & Experience Component
// ========================================
const EduExp = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.05,
        rootMargin: "-40px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // ========================================
  // Convert dates into timestamps for sorting
  // ========================================
  const parseStartDate = (dateStr) => {
    if (!dateStr) return 0;

    if (/^\d{4}$/.test(dateStr.trim())) {
      return new Date(`${dateStr.trim()}-01-01`).getTime();
    }

    const timestamp = Date.parse(dateStr);

    return isNaN(timestamp) ? 0 : timestamp;
  };

  // ========================================
  // Newest → Oldest
  // ========================================
  const sortedTimeline = [...timeline].sort(
    (a, b) =>
      parseStartDate(b.start) -
      parseStartDate(a.start)
  );

  // ========================================
  // Filter
  // ========================================
  const filteredTimeline = sortedTimeline.filter((item) => {
    if (activeFilter === "all") return true;

    return item.type === activeFilter;
  });

  return (
    <section
      id="education"
      ref={sectionRef}
      aria-labelledby="education-heading"
      className="min-h-fit lg:min-h-screen bg-[var(--bg-color)] flex items-center pt-9 pb-4 md:pt-20 md:pb-10 lg:pt-8 lg:pb-3 overflow-hidden scroll-mt-14 md:scroll-mt-16"
    >
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-10 lg:px-16">

        {/* ========================================
            SECTION HEADER
        ========================================= */}
        <header
          className={`flex flex-row items-center justify-between gap-3 mb-6 md:mb-6 lg:mb-6 w-full flex-nowrap transition-all duration-700 ease-out transform ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center flex-1">

            <h2
              id="education-heading"
              className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold whitespace-nowrap tracking-[-0.02em] leading-none text-[var(--text-color)]"
            >
              Education & Experience
            </h2>

            <div
              aria-hidden="true"
              className="hidden sm:block ml-6 md:ml-8 flex-1 h-px bg-[var(--accent-color)]"
            />

          </div>
        </header>

        {/* ========================================
            MOBILE FILTER
        ========================================= */}
        <nav
          aria-label="Filter education and experience"
          className={`flex md:hidden gap-1.5 p-1 bg-[var(--border-color)] rounded-xl mb-6 max-w-sm transition-all duration-700 delay-100 ease-out transform ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >

          <button
            type="button"
            onClick={() => setActiveFilter("all")}
            aria-pressed={activeFilter === "all"}
            className={`flex-1 flex items-center justify-center gap-1 py-2 text-xs font-semibold rounded-lg transition-all ${
              activeFilter === "all"
                ? "bg-[var(--accent-color)] text-white"
                : "text-[var(--text-muted)] hover:bg-[var(--accent-light)]"
            }`}
          >
            <Layers size={13} aria-hidden="true" />
            All
          </button>

          <button
            type="button"
            onClick={() => setActiveFilter("education")}
            aria-pressed={activeFilter === "education"}
            className={`flex-1 flex items-center justify-center gap-1 py-2 text-xs font-semibold rounded-lg transition-all ${
              activeFilter === "education"
                ? "bg-[var(--accent-color)] text-white"
                : "text-[var(--text-muted)] hover:bg-[var(--accent-light)]"
            }`}
          >
            <GraduationCap size={13} aria-hidden="true" />
            Education
          </button>

          <button
            type="button"
            onClick={() => setActiveFilter("experience")}
            aria-pressed={activeFilter === "experience"}
            className={`flex-1 flex items-center justify-center gap-1 py-2 text-xs font-semibold rounded-lg transition-all ${
              activeFilter === "experience"
                ? "bg-[var(--accent-color)] text-white"
                : "text-[var(--text-muted)] hover:bg-[var(--accent-light)]"
            }`}
          >
            <Briefcase size={13} aria-hidden="true" />
            Experience
          </button>

        </nav>

        {/* ========================================
            TIMELINE
        ========================================= */}
        <div
          className="relative pl-5 md:pl-0"
          aria-label="Binay Sharma's education and professional experience timeline"
        >

          {/* Timeline Line */}
          <div
            aria-hidden="true"
            className={`absolute left-1 md:left-1/2 top-6 bottom-6 -translate-x-1/2 w-px bg-[var(--border-color)] transition-all duration-1000 delay-200 origin-top transform ${
              isVisible
                ? "scale-y-100 opacity-100"
                : "scale-y-0 opacity-0"
            }`}
          />

          <div className="flex flex-col gap-4 md:gap-2">

            {filteredTimeline.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <article
                  key={item.id}
                  aria-labelledby={`timeline-title-${item.id}`}
                  className={`relative flex flex-col md:flex-row w-full ${
                    isEven
                      ? "md:justify-start"
                      : "md:justify-end"
                  }`}
                >

                  {/* Timeline Dot */}
                  <div
                    aria-hidden="true"
                    style={{
                      transitionDelay: `${250 + index * 80}ms`,
                    }}
                    className={`absolute left-1 md:left-1/2 top-[24px] md:top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 transition-all duration-500 transform ${
                      isVisible
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-50"
                    }`}
                  >
                    <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-[var(--accent-color)] border-2 md:border-[3px] border-[var(--bg-color)]" />
                  </div>

                  {/* Timeline Card */}
                  <div
                    style={{
                      transitionDelay: `${300 + index * 100}ms`,
                    }}
                    className={`w-full md:w-[46%] lg:w-[45%] rounded-xl md:rounded-2xl bg-[var(--card-color)] border border-[var(--border-color)] p-4 sm:p-5 lg:p-6 transition-all duration-700 ease-out transform hover:-translate-y-1 hover:border-[var(--accent-color)]/40 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                  >

                    {/* Type + Date */}
                    <div className="flex flex-row items-center justify-between gap-2 flex-wrap sm:flex-nowrap">

                      <span className="inline-flex items-center gap-1 rounded-full bg-[var(--accent-light)] px-2.5 py-1 text-[9px] md:text-[10px] font-semibold text-[var(--accent-color)] select-none">

                        {item.type === "education" ? (
                          <>
                            <GraduationCap
                              size={11}
                              aria-hidden="true"
                            />
                            Education
                          </>
                        ) : (
                          <>
                            <Briefcase
                              size={11}
                              aria-hidden="true"
                            />
                            Experience
                          </>
                        )}

                      </span>

                      <time
                        dateTime={`${item.startDate}/${item.endDate}`}
                        className="text-[10px] md:text-xs font-medium tracking-wide text-[var(--text-muted)] whitespace-nowrap"
                      >
                        {item.start} — {item.end}
                      </time>

                    </div>

                    {/* Title */}
                    <h3
                      id={`timeline-title-${item.id}`}
                      className="mt-4 text-sm md:text-base lg:text-lg font-bold tracking-[-0.01em] leading-[1.2] text-[var(--text-color)]"
                    >
                      {item.title}
                    </h3>

                    {/* Organization */}
                    <p className="mt-1 text-[11px] md:text-xs lg:text-sm font-medium text-[var(--text-muted)]">
                      {item.organization}
                    </p>

                    {/* Description */}
                    <p className="mt-2.5 text-[11px] md:text-xs lg:text-[13px] leading-relaxed md:leading-5 lg:leading-6 text-[var(--text-muted)]">
                      {item.description}
                    </p>

                  </div>
                </article>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
};

export default EduExp;