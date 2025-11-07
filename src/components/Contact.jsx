import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current['name'].value.trim();
    const email = form.current['email'].value.trim();
    const message = form.current['message'].value.trim();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) { alert("Please enter your name."); return; }
    if (!email || !emailPattern.test(email)) { alert("Please enter a valid email address."); return; }
    if (!message || message.length < 10) { alert("Please enter a message with at least 10 characters."); return; }

    emailjs.sendForm(
      'service_6t098un',
      'template_w932j3j',
      form.current,
      'cecmltbcV-hG0dTwO'
    ).then(() => {
      alert("Message sent successfully!");
      form.current.reset();
    }).catch((error) => {
      console.error("Email send error:", error);
      alert("Failed to send message. Please try again.");
    });
  };

  return (
    <section id="contact" className="relative w-full min-h-screen flex items-center justify-center px-4 py-4 sm:py-20">

      {/* Animated Blobs */}
      
      <div className="absolute w-48 h-48 sm:w-64 sm:h-64 bg-pink-300 rounded-full filter blur-3xl opacity-30 animate-pulse-slow top-1/2 left-1/4"></div>

      <div className="relative z-10 max-w-6xl w-full flex flex-col md:flex-row items-start gap-10 sm:gap-20">

        {/* Left Side - Contact Info */}
        <div className="flex-1 flex flex-col gap-4 sm:gap-6">
          <div className="text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-900 mb-3 sm:mb-4">
              Let’s Build Something Together
            </h2>
            <p className="text-gray-800 text-sm sm:text-base md:text-lg leading-relaxed">
              Whether you have a question, opportunity, or just want to say hi, my inbox is open. I’ll get back to you promptly.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:gap-4 text-gray-800 mt-1">
            <div className="flex items-center gap-2 sm:gap-3">
              <i className="fa fa-map-marker-alt text-blue-600 text-base sm:text-lg"></i>
              <span className="text-sm sm:text-base">Gaindakot-1, Nawalpur, Nepal</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <i className="fa fa-phone text-blue-600 text-base sm:text-lg"></i>
              <span className="text-sm sm:text-base">+977-9869681196</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <i className="fa fa-envelope text-blue-600 text-base sm:text-lg"></i>
              <span className="text-sm sm:text-base">sharmabinay88@gmail.com</span>
            </div>
          </div>

          {/* Socials */}
          <div className="flex justify-start gap-6 sm:gap-8 mt-4 sm:mt-6">
            <a href="https://wa.me/9779869681196?" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-whatsapp fa-lg sm:fa-2x text-green-500 hover:text-green-600 transition"></i>
            </a>
            <a href="https://www.linkedin.com/in/binay-sharma-3507652a1/" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-linkedin fa-lg sm:fa-2x text-blue-700 hover:text-blue-800 transition"></i>
            </a>
            <a href="https://github.com/Im-binay" target="_blank" rel="noreferrer">
              <i className="fa-brands fa-github fa-lg sm:fa-2x text-gray-800 hover:text-gray-900 transition"></i>
            </a>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className=" inputform flex-1 w-full max-w-xl bg-white/40 backdrop-blur-lg border border-white/30 rounded-3xl shadow-2xl p-4 sm:p-8 md:px-10 flex flex-col gap-4 sm:gap-6">

          <form ref={form} onSubmit={sendEmail} className="w-full flex flex-col gap-4 sm:gap-5">

            {/* Name Field */}
            <fieldset className="border border-gray-400 rounded-xl p-3 sm:p-4 pt-2">
              <legend className="text-gray-500 text-xs sm:text-sm px-1 ml-2">Your Name</legend>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-transparent text-black border-none focus:ring-0 focus:outline-none placeholder-gray-400 text-sm sm:text-base"
                placeholder="e.g Abc Xyz"
              />
            </fieldset>

            {/* Email Field */}
            <fieldset className="border border-gray-400 rounded-xl p-3 sm:p-4 pt-2">
              <legend className="text-gray-500 text-xs sm:text-sm px-1 ml-2">Your Email</legend>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-transparent text-black border-none focus:ring-0 focus:outline-none placeholder-gray-400 text-sm sm:text-base"
                placeholder="e.g example@gmail.com"
              />
            </fieldset>

            {/* Message Field */}
            <fieldset className="border border-gray-400 rounded-xl p-3 sm:p-4 pt-2">
              <legend className="text-gray-500 text-xs sm:text-sm px-1 ml-2">Your Message</legend>
              <textarea
                name="message"
                rows="3"
                required
                minLength={10}
                className="w-full bg-transparent text-black border-none focus:ring-0 focus:outline-none resize-none placeholder-gray-400 text-sm sm:text-base"
                placeholder="e.g I want to work with you..."
              ></textarea>
            </fieldset>

            <button
              type="submit"
              className="bg-gradient-to-r from-blue-600 to-purple-500 text-white font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-xl shadow-lg hover:scale-105 transition transform self-center text-sm sm:text-base"
            >
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
}
