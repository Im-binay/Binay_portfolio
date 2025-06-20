import React from "react";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      id="home"
      className="h-screen flex flex-col items-center justify-center text-center text-dark bg-light"
    >
      <div className="flex flex-col items-center justify-center gap-2 mt-10">
        <h4
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-sm md:text-xl mb-1"
        >
          Developing Interactive Website since — 2023
        </h4>
        <h1
          className="text-8xl md:text-9xl lg:text-9xl text-blue-600 font-extrabold uppercase"
          data-aos="fade-right"
        >
          Binay
        </h1>
        <h2
          className="text-7xl md:text-6xl lg:text-8xl font-extrabold uppercase"
          data-aos="fade-left"
        >
          Sharma
        </h2>
      </div>
      <a href="#about" className="flex text-link justify-center mt-5 text-2xl mx-auto  text-blue-800 ">
        See More
        <i className="fa-solid fa-angles-down ml-3 mt-1 pt-1 animate-bounce"></i>
      </a>
    </section>
  );
}
