import { useEffect, useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
// Imported GitHub, LinkedIn, and WhatsApp icons from react-icons
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
// Import EmailJS standard browser package
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef();

  // Controlled form values state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Transaction state handlers
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { 
        threshold: 0.15, 
        rootMargin: "-100px 0px -100px 0px" 
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Update local state when inputs modify
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit Handler using EmailJS
  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage({ type: "", text: "" });

    // ================= PLACE YOUR COPIED KEYS HERE =================
    const SERVICE_ID = "service_rg9dkqt";
    const TEMPLATE_ID = "template_sc8x4wz";
    const PUBLIC_KEY = "cecmltbcV-hG0dTwO";

    // These parameters must match your dynamic tags within your EmailJS template editor
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatusMessage({ type: "success", text: "Message sent successfully! ✨" });
          setFormData({ name: "", email: "", subject: "", message: "" }); // Reset inputs
        },
        (error) => {
          console.log("FAILED...", error);
          setStatusMessage({ 
            type: "error", 
            text: "Something went wrong. Please check your credentials or connectivity." 
          });
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen bg-[#c8c9c4] flex items-center pt-10 pb-12 md:pt-14 md:pb-16 lg:pt-20 overflow-hidden scroll-mt-0"
    >
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-10 lg:px-16">

        {/* ================= Header ================= */}
        <div 
          className={`flex flex-row items-center justify-between gap-3 mb-8 md:mb-10 w-full flex-nowrap transition-all duration-[1000ms] ease-[cubic-bezier(0.25,1,0.5,1)] transform
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <div className="flex items-center flex-1">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold whitespace-nowrap tracking-tight">
              &lt; Contact /&gt;
            </h2>
            <div className="hidden sm:block ml-4 md:ml-5 flex-1 h-[1px] overflow-hidden bg-neutral-600 rounded-full"></div>
          </div>
        </div>

        {/* ================= Main Split Grid Layout ================= */}
        <div className="grid grid-cols-1 md:grid-cols-[4fr_6fr] gap-10 md:gap-8 lg:gap-16 items-start">

          {/* ================= Left Side Context Panel (40%) ================= */}
          <div 
            className={`w-full transition-all duration-[1100ms] delay-150 ease-[cubic-bezier(0.25,1,0.5,1)] transform
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
          >
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight tracking-tight text-neutral-900">
              Let's create something amazing.
            </h3>

            <p className="mt-3 md:mt-4 max-w-md text-xs md:text-sm lg:text-base leading-relaxed md:leading-6 lg:leading-7 text-justify text-neutral-700 hyphens-auto">
              Whether you're looking for a UI/UX Designer,
              want to collaborate, discuss an internship,
              or simply say hello — I'd love to hear from you.
            </p>

            <div className="mt-6 md:mt-8 space-y-3 md:space-y-4">

              {/* Email Block */}
              <div className="flex items-center gap-3.5 md:gap-4">
                <div className="w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                  <Mail size={16} className="text-neutral-700 md:w-[17px] md:h-[17px] lg:w-[18px] lg:h-[18px]" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] md:text-xs text-neutral-500">
                    Email
                  </p>
                  <a
                    href="mailto:sharmabinay88@gmail.com"
                    className="text-xs md:text-sm font-semibold hover:underline block truncate"
                  >
                    sharmabinay88@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone Block */}
              <div className="flex items-center gap-3.5 md:gap-4">
                <div className="w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-neutral-700 md:w-[17px] md:h-[17px] lg:w-[18px] lg:h-[18px]" />
                </div>
                <div>
                  <p className="text-[11px] md:text-xs text-neutral-500">
                    Phone
                  </p>
                  <a
                    href="tel:+9779869681196"
                    className="text-xs md:text-sm font-semibold hover:underline block whitespace-nowrap"
                  >
                    +977 9869681196
                  </a>
                </div>
              </div>

              {/* Location Block */}
              <div className="flex items-center gap-3.5 md:gap-4">
                <div className="w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-neutral-700 md:w-[17px] md:h-[17px] lg:w-[18px] lg:h-[18px]" />
                </div>
                <div>
                  <p className="text-[11px] md:text-xs text-neutral-500">
                    Location
                  </p>
                  <p className="text-xs md:text-sm font-semibold text-neutral-900">
                    Gaindakot-1, Nawalpur, Nepal
                  </p>
                </div>
              </div>

              {/* ================= Social Icons Block ================= */}
              <div className="flex items-center gap-4 pt-4 md:pt-5">
                {/* GitHub */}
                <a
                  href="https://github.com/your-username"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 text-neutral-700 hover:text-black hover:scale-110 transition-all duration-300"
                >
                  <FaGithub className="w-4 h-4 md:w-[17px] md:h-[17px] lg:w-[18px] lg:h-[18px]" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/binaysharma111"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 text-neutral-700 hover:text-blue-600 hover:scale-110 transition-all duration-300"
                >
                  <FaLinkedinIn className="w-4 h-4 md:w-[17px] md:h-[17px] lg:w-[18px] lg:h-[18px]" />
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/9779869681196"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 text-neutral-700 hover:text-green-600 hover:scale-110 transition-all duration-300"
                >
                  <FaWhatsapp className="w-4 h-4 md:w-[17px] md:h-[17px] lg:w-[18px] lg:h-[18px]" />
                </a>
              </div>

            </div>
          </div>

          {/* ================= Right Side Form Card (60%) ================= */}
          <div 
            className={`bg-[#f0f0eb] rounded-xl md:rounded-2xl lg:rounded-3xl shadow-md p-5 md:p-6 lg:p-7 border border-neutral-200 mt-2 md:mt-0 w-full transition-all duration-[1100ms] delay-300 ease-[cubic-bezier(0.25,1,0.5,1)] transform
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}
          >
            <h3 className="text-lg md:text-xl font-bold text-neutral-900">
              Send Message
            </h3>

            <p className="text-[11px] md:text-xs text-neutral-500 mt-0.5 md:mt-1 mb-5 md:mb-6">
              Fill out the form and I'll get back to you as soon as possible.
            </p>

            <form className="space-y-4 lg:space-y-5" onSubmit={sendEmail}>
              <div>
                <label className="block mb-1 text-[11px] md:text-xs font-medium text-neutral-800">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full rounded-lg md:rounded-xl border border-neutral-200 bg-white px-3.5 py-2.5 md:px-4 md:py-3 text-xs md:text-sm outline-none transition-all duration-300 focus:border-black"
                />
              </div>

              <div>
                <label className="block mb-1 text-[11px] md:text-xs font-medium text-neutral-800">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full rounded-lg md:rounded-xl border border-neutral-200 bg-white px-3.5 py-2.5 md:px-4 md:py-3 text-xs md:text-sm outline-none transition-all duration-300 focus:border-black"
                />
              </div>

              <div>
                <label className="block mb-1 text-[11px] md:text-xs font-medium text-neutral-800">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Discussion"
                  className="w-full rounded-lg md:rounded-xl border border-neutral-200 bg-white px-3.5 py-2.5 md:px-4 md:py-3 text-xs md:text-sm outline-none transition-all duration-300 focus:border-black"
                />
              </div>

              <div>
                <label className="block mb-1 text-[11px] md:text-xs font-medium text-neutral-800">
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full rounded-lg md:rounded-xl border border-neutral-200 bg-white px-3.5 py-2.5 md:px-4 md:py-3 text-xs md:text-sm outline-none resize-none transition-all duration-300 focus:border-black"
                />
              </div>

              {/* Status indicator message banner */}
              {statusMessage.text && (
                <div className={`text-xs md:text-sm font-semibold tracking-wide ${statusMessage.type === "success" ? "text-green-700" : "text-red-600"}`}>
                  {statusMessage.text}
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSending}
                  className="group relative w-full sm:w-auto h-[48px] overflow-hidden rounded-full bg-neutral-900 px-8 text-white transition-all duration-300 hover:bg-black hover:shadow-lg active:scale-95 disabled:bg-neutral-400 disabled:pointer-events-none"
                >
                  <div className="relative flex items-center justify-center gap-2 h-full">
                    <div className="relative h-5 overflow-hidden text-xs md:text-sm font-medium tracking-wide">
                      <span className={`flex flex-col transition-transform duration-500 ease-in-out ${isSending ? "" : "group-hover:-translate-y-5"}`}>
                        <span className="h-5 flex items-center">{isSending ? "Sending..." : "Send Message"}</span>
                        <span className="h-5 flex items-center font-bold text-neutral-300">Let's build this.</span>
                      </span>
                    </div>

                    {!isSending && (
                      <div className="relative w-4 h-4 overflow-hidden">
                        <Mail 
                          size={14} 
                          className="absolute inset-0 m-auto transition-all duration-500 ease-in-out transform -translate-x-5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100" 
                        />
                        <span className="absolute inset-0 m-auto text-xs font-bold transition-all duration-500 ease-in-out transform group-hover:translate-x-5 group-hover:opacity-0">
                          →
                        </span>
                      </div>
                    )}
                  </div>
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;