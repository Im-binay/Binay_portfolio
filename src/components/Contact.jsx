import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current['name'].value.trim();
    const email = form.current['email'].value.trim();
    const message = form.current['message'].value.trim();

    // Basic validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
      alert("Please enter your name.");
      return;
    }

    if (!email || !emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!message || message.length < 10) {
      alert("Please enter a message with at least 10 characters.");
      return;
    }

    // Send email using EmailJS
    emailjs
      .sendForm(
        'service_6t098un',      
        'template_w932j3j',     
        form.current,
        'cecmltbcV-hG0dTwO'       
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error("Email send error:", error);
        alert("Failed to send message. Please try again.");
      });
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center px-4 py-8" id="contact">
      <div className="w-screen max-w-6xl h-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-5 mx-5 md:pr-8 text-dark bg-light shadow-xl rounded-2xl mt-10 md:mt-10 bg-blue-50" data-aos="fade-in">
        
        {/* Left Side - Contact Info */}
        <div className="px-2 py-8 mb-5 md:mb-0" data-aos="zoom-in" data-aos-duration="1000">
          <h1 className="text-xl md:text-2xl font-bold text-blue-800 mb-5 text-center underline">Contact Information</h1>
          <p className="text-justify mb-5 mt-5 md:mt-10 text-sm">
            Please do not hesitate to get in touch with me regarding any
            inquiries or opportunities. I will respond at my earliest
            convenience.
          </p>
          <ul className="space-y-4 text-[14px]">
            <li className="flex items-center">
              <i className="fas fa-map-marker-alt w-5 h-5 mr-3 text-blue-600"></i>
              <span>Gaindakot-1, Nawalpur, Nepal</span>
            </li>
            <li className="flex items-center">
              <i className="fa fa-phone w-5 h-5 mr-3 text-blue-600"></i>
              <span>+977 9869681196</span>
            </li>
            <li className="flex items-center">
              <i className="fas fa-envelope w-5 h-5 mr-3 text-blue-600"></i>
              <span>sharmabinay88@gmail.com</span>
            </li>
          </ul>

          <h5 className="mt-8 mb-3 underline">Follow me on:</h5>
          <ul className="flex justify-evenly w-full md:w-[50%]">
            <li>
              <a href="https://www.facebook.com/binay.sharma.bashyal" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-facebook fa-xl text-blue-800"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/imbinay_/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-square-instagram fa-xl text-blue-800"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/binay-sharma-3507652a1/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin fa-xl text-blue-800"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/Im-binay" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github fa-xl text-blue-800"></i>
              </a>
            </li>
          </ul>
        </div>

        {/* Right Side - Form */}
        <div className="px-4 py-8 border-t-5 md:border-l-5 md:border-t-0 border-blue-300" data-aos="zoom-in" data-aos-duration="1000">
          <h1 className="text-xl md:text-2xl font-bold text-blue-800 mb-5 text-center underline">Get in Touch</h1>
          <form ref={form} onSubmit={sendEmail} className="space-y-4 text-[18px]">
            <div>
              <label className="block text-base md:text-lg font-medium">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full mt-1 text-sm p-2 border-2 border-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
                required
              />
            </div>
            <div>
              <label className="block text-base md:text-lg font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="your@example.com"
                className="w-full mt-1 p-2 text-sm border-2 border-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-base md:text-lg font-medium">Message:</label>
              <textarea
                rows="3"
                name="message"
                placeholder="Your Message..."
                className="w-full mt-1 p-2 border-2 border-gray-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-sm placeholder:text-sm"
                required
                minLength={10}
              ></textarea>
            </div>
            <div className="text-center mt-4 pb-4">
              <button
                type="submit"
                className="bg-[#141d97] text-white px-3 py-3 rounded-xl hover:bg-blue-500 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
