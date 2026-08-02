import React from "react";
import contactImg from "../assets/contact.png";

const Contact = ({ darkMode }) => {
  return (
    <section
      id="contact"
      className={`py-16 sm:py-20 md:py-24 relative overflow-hidden transition-colors duration-300 ${
        darkMode
          ? "bg-black"
          : "bg-gradient-to-b from-white via-emerald-50/20 to-white"
      }`}
    >
      {/* Background Ambient Glow */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none opacity-20 ${
          darkMode ? "bg-teal-500/20" : "bg-emerald-300/30"
        }`}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-12" data-aos="fade-up">
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-3 tracking-tight ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500">
              Touch
            </span>
          </h2>
          <p
            className={`text-base sm:text-lg ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Let's Discuss Your Project & Build Something Great Together
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 items-center max-w-6xl mx-auto">
          
          {/* Left Side: Illustration Image */}
          <div
            className="flex justify-center order-2 lg:order-1"
            data-aos="fade-right"
          >
            <div className="relative">
              <img
                src={contactImg}
                alt="contact"
                className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto object-contain relative z-10 transition-transform duration-500 hover:scale-105"
              />
              <div
                className={`absolute inset-0 rounded-full blur-2xl -z-0 opacity-40 ${
                  darkMode ? "bg-teal-500/30" : "bg-emerald-300/40"
                }`}
              />
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <form
            className={`rounded-2xl p-6 sm:p-8 border shadow-xl transition-all duration-300 order-1 lg:order-2 ${
              darkMode
                ? "bg-gray-900/70 border-gray-800 backdrop-blur-md"
                : "bg-white/90 border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.05)] backdrop-blur-md"
            }`}
            data-aos="fade-left"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* First Name */}
              <input
                type="text"
                placeholder="First Name"
                className={`w-full px-4 py-3 rounded-xl border text-sm sm:text-base outline-none transition-all duration-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 ${
                  darkMode
                    ? "bg-gray-800/80 border-gray-700 text-white placeholder-gray-400"
                    : "bg-emerald-50/50 border-emerald-100 text-gray-800 placeholder-gray-400"
                }`}
                required
              />

              {/* Last Name */}
              <input
                type="text"
                placeholder="Last Name"
                className={`w-full px-4 py-3 rounded-xl border text-sm sm:text-base outline-none transition-all duration-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 ${
                  darkMode
                    ? "bg-gray-800/80 border-gray-700 text-white placeholder-gray-400"
                    : "bg-emerald-50/50 border-emerald-100 text-gray-800 placeholder-gray-400"
                }`}
                required
              />

              {/* Email Address */}
              <input
                type="email"
                placeholder="Email Address"
                className={`w-full px-4 py-3 sm:col-span-2 rounded-xl border text-sm sm:text-base outline-none transition-all duration-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 ${
                  darkMode
                    ? "bg-gray-800/80 border-gray-700 text-white placeholder-gray-400"
                    : "bg-emerald-50/50 border-emerald-100 text-gray-800 placeholder-gray-400"
                }`}
                required
              />

              {/* Phone Number */}
              <input
                type="tel"
                placeholder="Phone Number"
                className={`w-full px-4 py-3 sm:col-span-2 rounded-xl border text-sm sm:text-base outline-none transition-all duration-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 ${
                  darkMode
                    ? "bg-gray-800/80 border-gray-700 text-white placeholder-gray-400"
                    : "bg-emerald-50/50 border-emerald-100 text-gray-800 placeholder-gray-400"
                }`}
                required
              />

              {/* Message */}
              <textarea
                rows="5"
                placeholder="Message"
                className={`w-full px-4 py-3 sm:col-span-2 rounded-xl border text-sm sm:text-base outline-none transition-all duration-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 resize-none ${
                  darkMode
                    ? "bg-gray-800/80 border-gray-700 text-white placeholder-gray-400"
                    : "bg-emerald-50/50 border-emerald-100 text-gray-800 placeholder-gray-400"
                }`}
                required
              />

              {/* Send Message Button */}
              <button
                type="submit"
                className="w-full sm:col-span-2 py-3.5 px-6 rounded-xl text-white text-base font-semibold bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:scale-[1.01] transition-all duration-300 cursor-pointer"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;