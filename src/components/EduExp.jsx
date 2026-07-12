import { useEffect, useRef, useState } from "react";
import { GraduationCap, Briefcase, Layers } from "lucide-react";

// ========================================
// Timeline Data (Cleaned up: No extra sort keys!)
// ========================================
const timeline = [
  {
    id: 2,
    type: "education",
    title: "Bachelor in Computer Application(BCA)",
    organization: "Oxford College of Engineering and Management",
    start: "July 2021", 
    end: "Aug 2025",
    description: "Built a strong foundation in programming, software development, and user-centered design.",
  },
  {
    id: 1,
    type: "experience",
    title: "Frontend Developer Intern",
    organization: "Akshyaraanga Sanjaal Pvt. Ltd.",
    start: "Dec 2024",
    end: "Feb 2025",
    description: "Designed and developed responsive websites for Sungava College and Royal Rhino Riders using Figma, React.js, and Tailwind CSS.",
  },
  {
    id: 3,
    type: "experience",
    title: "Data Entry Assistant",
    organization: "Navya Technologies",
    start: "Jan 2025",
    end: "Mar 2025",
    description: "Managed, validated, and maintained accurate digital records for the Gaindakot Municipality Digitization Project.",
  },
  // {
  //   id: 4,
  //   type: "education",
  //   title: "Higher Secondary Education (+2)",
  //   organization: "Gaindakot Namuna Secondary School",
  //   start: "",
  //   end: " Feb 2019",
  //   description: "Completed higher secondary education with a computer science background.",
  // },
  // {
  //   id: 5,
  //   type: "education",
  //   title: "Secondary Education (SEE)",
  //   organization: "Bal Bikas English Secondary School",
  //   start: "",
  //   end: "2018",
  //   description: "Completed secondary education while building a strong academic foundation.",
  // },
];

const EduExp = () => {
  const [activeFilter, setActiveFilter] = useState("all"); 
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05, rootMargin: "-40px 0px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // HELPER: Converts any human "start" date string into a reliable timestamp
  const parseStartDate = (dateStr) => {
    // If it's just a 4-digit year like "2022"
    if (/^\d{4}$/.test(dateStr.trim())) {
      return new Date(`${dateStr.trim()}-01-01`).getTime();
    }
    // For formats like "January 2026" or "Dec 2024"
    const timestamp = Date.parse(dateStr);
    return isNaN(timestamp) ? 0 : timestamp;
  };

  // Sorts items chronologically from Newest to Oldest directly using item.start
  const sortedTimeline = [...timeline].sort((a, b) => 
    parseStartDate(b.start) - parseStartDate(a.start)
  );

  const filteredTimeline = sortedTimeline.filter((item) => {
    if (activeFilter === "all") return true;
    return item.type === activeFilter;
  });

  return (
    <section
      id="education"
      ref={sectionRef}
      className="min-h-fit lg:min-h-screen bg-[#c8c9c4] flex items-center pt-10 pb-14 md:pt-14 md:pb-16 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-10 lg:px-16">

        {/* ================= Header ================= */}
        <div 
          className={`flex flex-row items-center justify-between gap-3 mb-6 md:mb-10 w-full flex-nowrap transition-all duration-700 ease-out transform
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div className="flex items-center flex-1">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold whitespace-nowrap tracking-tight">
              &lt; Education & Experience /&gt;
            </h2>
            <div className="hidden sm:block ml-4 md:ml-5 flex-1 h-[1px] overflow-hidden bg-neutral-600 rounded-full"></div>
          </div>
        </div>

        {/* ================= Mobile Filter Controls ================= */}
        <div 
          className={`flex md:hidden gap-1.5 p-1 bg-black/5 rounded-xl mb-6 max-w-sm transition-all duration-700 delay-100 ease-out transform
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <button
            onClick={() => setActiveFilter("all")}
            className={`flex-1 flex items-center justify-center gap-1 py-2 text-xs font-semibold rounded-lg transition-all ${
              activeFilter === "all" ? "bg-black text-white shadow-sm" : "text-neutral-700 hover:bg-black/5"
            }`}
          >
            <Layers size={13} /> All
          </button>
          <button
            onClick={() => setActiveFilter("education")}
            className={`flex-1 flex items-center justify-center gap-1 py-2 text-xs font-semibold rounded-lg transition-all ${
              activeFilter === "education" ? "bg-black text-white shadow-sm" : "text-neutral-700 hover:bg-black/5"
            }`}
          >
            <GraduationCap size={13} /> Edu
          </button>
          <button
            onClick={() => setActiveFilter("experience")}
            className={`flex-1 flex items-center justify-center gap-1 py-2 text-xs font-semibold rounded-lg transition-all ${
              activeFilter === "experience" ? "bg-black text-white shadow-sm" : "text-neutral-700 hover:bg-black/5"
            }`}
          >
            <Briefcase size={13} /> Exp
          </button>
        </div>

        {/* ================= Timeline Tracker Layout ================= */}
        <div className="relative pl-5 md:pl-0">

          <div 
            className={`absolute left-1 md:left-1/2 top-6 bottom-6 -translate-x-1/2 w-[1.5px] bg-black/15 transition-all duration-1000 delay-200 origin-top transform
              ${isVisible ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"}`}
          ></div>

          <div className="flex flex-col gap-4 md:gap-2">
            {filteredTimeline.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row w-full ${
                    isEven ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Timeline Dot Indicator */}
                  <div 
                    style={{ transitionDelay: `${250 + index * 80}ms` }}
                    className={`absolute left-1 md:left-1/2 top-[24px] md:top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 transition-all duration-500 transform
                      ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
                  >
                    <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-black border-[2.5px] md:border-[3.5px] border-[#c8c9c4] shadow-sm"></div>
                  </div>

                  {/* Timeline Card */}
                  <div 
                    style={{ transitionDelay: `${300 + index * 100}ms` }}
                    className={`w-full md:w-[46%] lg:w-[45%] rounded-xl md:rounded-2xl bg-[#F7F7F5] border border-neutral-300 p-3.5 sm:p-4 lg:p-5 shadow-sm transition-all duration-700 ease-out transform
                      hover:-translate-y-1 hover:shadow-md hover:border-black/20
                      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  >
                    
                    {/* Upper details label row */}
                    <div className="flex flex-row items-center justify-between gap-2 flex-wrap sm:flex-nowrap">
                      <span className="inline-flex items-center gap-1 rounded-full bg-black px-2 py-0.5 text-[9px] md:text-[10px] font-medium text-white select-none">
                        {item.type === "education" ? (
                          <>
                            <GraduationCap size={11} />
                            Education
                          </>
                        ) : (
                          <>
                            <Briefcase size={11} />
                            Experience
                          </>
                        )}
                      </span>

                      <span className="text-[11px] md:text-xs font-medium text-neutral-500 whitespace-nowrap">
                        {item.start} — {item.end}
                      </span>
                    </div>

                    {/* Content text items */}
                    <h3 className="mt-2 text-sm md:text-base lg:text-lg font-bold leading-tight text-neutral-900">
                      {item.title}
                    </h3>

                    <p className="mt-0.5 text-[11px] md:text-xs lg:text-sm font-semibold text-neutral-800">
                      {item.organization}
                    </p>

                    <p className="mt-1.5 text-[11px] md:text-xs lg:text-[13px] leading-relaxed md:leading-5 lg:leading-6 text-neutral-600 text-justify hyphens-auto">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default EduExp;