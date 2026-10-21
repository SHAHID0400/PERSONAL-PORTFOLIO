import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send, CheckCircle, AlertCircle, Sparkles, Mail, MessageSquare, User } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { currentTheme, darkMode } = useTheme();
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage(null);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      () => {
        setIsSending(false);
        setStatusMessage("success");
        form.current.reset();
      },
      (error) => {
        setIsSending(false);
        setStatusMessage("error");
        console.error("EmailJS Error:", error);
      }
    );
  };

  return (
    <section
      id="contact"
      className={`relative py-24 sm:py-32 transition-colors duration-300 overflow-hidden bg-transparent ${
        darkMode ? "text-white" : "text-gray-900"
      }`}
    >
      {/* Background Ambient Glow Orbs */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[160px] opacity-15 pointer-events-none"
        style={{ backgroundColor: currentTheme.primary }}
      />

      <div className="container max-w-3xl mx-auto px-6 sm:px-10 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border shadow-sm backdrop-blur-md"
            style={{
              borderColor: darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)",
              backgroundColor: darkMode ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)",
            }}
          >
            {/* <Sparkles className="text-xs" style={{ color: currentTheme.primary }} /> */}
            <span>Let's Connect</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-black mb-4 tracking-tight"
          >
            Get In{" "}
            <span
              className={`text-transparent bg-clip-text bg-gradient-to-r ${currentTheme.gradientText}`}
            >
              Touch
            </span>
          </motion.h2>
          <p className={`text-sm sm:text-base max-w-md mx-auto ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
            Have a project in mind or want to collaborate? Drop a message and let's build something amazing together!
          </p>
        </div>

        {/* 4D Glassmorphic Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`relative p-8 sm:p-12 rounded-[2.5rem] border backdrop-blur-2xl transition-all shadow-2xl ${
            darkMode
              ? "bg-gray-950/75 border-gray-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              : "bg-white/90 border-gray-200/80 shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
          }`}
        >
          {/* Top Neon Border Glow Highlight */}
          <div
            className="absolute top-0 left-1/4 right-1/4 h-[2px] opacity-70 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, transparent, ${currentTheme.primary}, transparent)`,
            }}
          />

          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
            {/* Name Input */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                <User size={14} style={{ color: currentTheme.primary }} />
                <span>Your Name</span>
              </label>
              <input
                type="text"
                name="user_name"
                required
                placeholder="MD Shahid"
                className={`w-full px-5 py-4 rounded-2xl border outline-none transition-all text-sm font-medium ${
                  darkMode
                    ? "bg-gray-900/60 border-gray-800 text-white focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
                    : "bg-gray-50 border-gray-200 text-gray-900 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
                }`}
              />
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                <Mail size={14} style={{ color: currentTheme.primary }} />
                <span>Your Email</span>
              </label>
              <input
                type="email"
                name="user_email"
                required
                placeholder="shahid@example.com"
                className={`w-full px-5 py-4 rounded-2xl border outline-none transition-all text-sm font-medium ${
                  darkMode
                    ? "bg-gray-900/60 border-gray-800 text-white focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
                    : "bg-gray-50 border-gray-200 text-gray-900 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
                }`}
              />
            </div>

            {/* Message Input */}
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                <MessageSquare size={14} style={{ color: currentTheme.primary }} />
                <span>Your Message</span>
              </label>
              <textarea
                name="message"
                rows="5"
                required
                placeholder="Hi Shahid, I would like to talk about..."
                className={`w-full px-5 py-4 rounded-2xl border outline-none transition-all resize-none text-sm font-medium ${
                  darkMode
                    ? "bg-gray-900/60 border-gray-800 text-white focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
                    : "bg-gray-50 border-gray-200 text-gray-900 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
                }`}
              />
            </div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSending}
              className={`w-full py-4 px-6 rounded-2xl font-bold text-white bg-gradient-to-r ${currentTheme.gradientButton} transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-50 shadow-xl`}
            >
              {isSending ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Transmitting Message...</span>
                </div>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </motion.button>

            {/* Status Feedback Alerts */}
            {statusMessage === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-center gap-3 p-4 rounded-2xl border text-sm font-medium ${currentTheme.tagBg}`}
              >
                <CheckCircle className="w-5 h-5 flex-shrink-0 text-emerald-400" />
                <span>Thank you! Your message has been sent directly to my inbox.</span>
              </motion.div>
            )}

            {statusMessage === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 p-4 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium"
              >
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span>Transmission failed. Please try again later or reach out via email directly.</span>
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;