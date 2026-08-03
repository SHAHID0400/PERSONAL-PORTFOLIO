import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

const Contact = ({ darkMode }) => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null); // 'success' | 'error' | null

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage(null);

    // 🟢 VITE ENVIRONMENT VARIABLES (100% Correct Syntax)
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        setIsSending(false);
        setStatusMessage("success");
        form.current.reset(); // Clear form fields
      },
      (error) => {
        setIsSending(false);
        setStatusMessage("error");
        console.error("EmailJS Error:", error);
      },
    );
  };

  return (
    <section
      id="contact"
      className={`py-20 sm:py-28 transition-colors duration-300 relative ${
        darkMode ? "bg-black text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="container max-w-4xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500">
              Touch
            </span>
          </h2>
          <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
            Have a project in mind or want to collaborate? Send me a message!
          </p>
        </div>

        {/* Contact Form */}
        <div
          className={`p-6 sm:p-10 rounded-3xl border backdrop-blur-md transition-all ${
            darkMode
              ? "bg-gray-900/60 border-gray-800 shadow-[0_0_30px_rgba(20,184,166,0.1)]"
              : "bg-white border-gray-200 shadow-xl"
          }`}
        >
          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
            {/* Name Input */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                placeholder="MD Shahid"
                className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all ${
                  darkMode
                    ? "bg-gray-800 border-gray-700 text-white focus:ring-teal-500"
                    : "bg-gray-50 border-gray-300 text-gray-900 focus:ring-emerald-500"
                }`}
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                name="user_email"
                required
                placeholder="shahid@example.com"
                className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all ${
                  darkMode
                    ? "bg-gray-800 border-gray-700 text-white focus:ring-teal-500"
                    : "bg-gray-50 border-gray-300 text-gray-900 focus:ring-emerald-500"
                }`}
              />
            </div>

            {/* Message Input */}
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                placeholder="Hi Shahid, I would like to talk about..."
                className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 transition-all resize-none ${
                  darkMode
                    ? "bg-gray-800 border-gray-700 text-white focus:ring-teal-500"
                    : "bg-gray-50 border-gray-300 text-gray-900 focus:ring-emerald-500"
                }`}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSending}
              className="w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500 hover:shadow-[0_0_25px_rgba(20,184,166,0.4)] hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isSending ? (
                <span>Sending...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>

            {/* Status Feedback Alerts */}
            {statusMessage === "success" && (
              <div className="flex items-center gap-2 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span>
                  Thank you! Your message has been sent directly to my inbox.
                </span>
              </div>
            )}

            {statusMessage === "error" && (
              <div className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span>Something went wrong. Please try again later.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
