import React from "react";
import profile from "../assets/images/aboutimage.JPG";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center py-14 px-4 sm:px-6 md:px-0 bg-light text-dark transition-colors duration-300 overflow-hidden"
    >
      {/* Decorative Background Element */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-transparent to-transparent" />

      <div
        className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16 max-w-6xl mx-auto"
        data-aos="fade-up"
      >
        {/* Left: Text Content */}
        <div className="w-full md:w-[55%] space-y-4 sm:space-y-6">
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-800 relative inline-block">
              Meet Binay Sharma
              <span className="absolute -bottom-2 left-0 w-20 h-[3px] bg-blue-700 rounded-full"></span>
            </h2>
          </div>

        <p className="text-base sm:text-lg md:text-xl text-justify leading-relaxed text-gray-800">
          I’m <span className="font-semibold text-blue-700">Binay Sharma</span>, a passionate 
          <span className="font-semibold"> UI/UX Designer & Frontend Developer</span>. 
          I craft intuitive, visually engaging digital experiences that solve real problems.
        </p>

        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-justify text-gray-800">
          My design process combines <span className="font-medium text-blue-600">research, wireframing, prototyping, and user testing</span> with clean front-end development in 
          <span className="font-medium text-blue-600"> Figma, Tailwind CSS</span>, and 
          <span className="font-medium text-blue-600"> JavaScript</span>.
        </p>

        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-800 text-justify">
          Recently, I completed my <span className="font-medium text-blue-700">Bachelor’s in Computer Application (BCA)</span> at Pokhara University. 
          Now, I focus on building responsive interfaces, seamless user journeys, and subtle motion design to create experiences that feel alive.
        </p>

          {/* Responsive Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-0">
            <a href="/BinayUI_Cv.pdf"
            target="_blank"
              id="hire-me-button"
              className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 bg-blue-700 text-white font-medium rounded-xl shadow-md hover:bg-blue-800 hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
            >
              View My Resume
            </a>
            <a
              href="#contact"
              className="text-blue-700 font-semibold hover:underline underline-offset-4 text-sm sm:text-base text-center"
            >
              Let’s Connect →
            </a>
          </div>
        </div>

        {/* Right: Image Section */}
        <div
          className="w-full md:w-[40%] flex justify-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="relative group">
            {/* Floating accent circle */}
            <div className="absolute -top-10 -left-8 w-20 sm:w-28 h-20 sm:h-28 bg-blue-200 rounded-full blur-2xl opacity-50 -z-10" />

            <div
              className="relative transition-transform duration-700 transform group-hover:scale-[1.05] group-hover:rotate-1 bg-gradient-to-tr from-blue-100 to-blue-50 rounded-3xl shadow-2xl p-2 sm:p-3"
              style={{ transformStyle: "preserve-3d" }}
            >
              <img
                src={profile}
                alt="Profile of Binay Sharma"
                className="rounded-2xl object-cover w-full max-h-[350px] sm:max-h-[400px] shadow-md grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />

              {/* Floating badge overlay */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-md text-sm font-medium text-blue-800 text-center whitespace-nowrap">
                UI/UX Designer ✦ Frontend Developer
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
