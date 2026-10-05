import React, { useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "Custom Website Development",
    budget: "$5,000 - $10,000",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        service: "Custom Website Development",
        budget: "$5,000 - $10,000",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 6000);
    }, 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="space-y-12 py-8 max-w-3xl mx-auto pt-20"
    >
      <div className="text-center space-y-4">
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-block text-[#c7f943] text-xs font-bold uppercase tracking-widest bg-[#c7f943]/10 px-3 py-1 rounded-full"
        >
          Get In Touch
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-5xl font-black"
        >
          Request a Consultation
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-zinc-400 text-lg"
        >
          Tell us about your project requirements, and our team will get back to
          you promptly.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-zinc-900 border border-white/10 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden"
      >
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="bg-[#c7f943]/10 border border-[#c7f943] text-[#c7f943] p-8 rounded-2xl text-center space-y-4"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 0.1,
                }}
              >
                <CheckCircle2 size={48} className="mx-auto" />
              </motion.div>
              <h4 className="font-bold text-2xl">
                Consultation Request Received!
              </h4>
              <p className="text-base text-zinc-300 max-w-md mx-auto">
                Thank you! Your inquiry has been securely sent to our team. We
                will review your project details and contact you shortly.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-xl bg-[#c7f943] text-[#181b1c] font-bold text-xs cursor-pointer"
              >
                Submit Another Inquiry
              </motion.button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onSubmit={handleFormSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#c7f943] transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#c7f943] transition-colors"
                    placeholder="john@business.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">
                    Service Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#c7f943] transition-colors"
                  >
                    <option
                      value="Custom Website Development"
                      className="bg-zinc-900 text-white"
                    >
                      Custom Website Development
                    </option>
                    <option
                      value="Mobile Apps"
                      className="bg-zinc-900 text-white"
                    >
                      Mobile Apps
                    </option>
                    <option
                      value="Specialized Enterprise Systems"
                      className="bg-zinc-900 text-white"
                    >
                      Specialized Enterprise Systems
                    </option>
                    <option
                      value="UI/UX Design"
                      className="bg-zinc-900 text-white"
                    >
                      UI/UX Design
                    </option>
                    <option
                      value="Logo & Brand Identity Design"
                      className="bg-zinc-900 text-white"
                    >
                      Logo & Brand Identity Design
                    </option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300">
                    Project Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#c7f943] transition-colors"
                  >
                    <option
                      value="$3,000 - $5,000"
                      className="bg-zinc-900 text-white"
                    >
                      $3,000 - $5,000
                    </option>
                    <option
                      value="$5,000 - $10,000"
                      className="bg-zinc-900 text-white"
                    >
                      $5,000 - $10,000
                    </option>
                    <option
                      value="$10,000 - $25,000"
                      className="bg-zinc-900 text-white"
                    >
                      $10,000 - $25,000
                    </option>
                    <option value="$25,000+" className="bg-zinc-900 text-white">
                      $25,000+
                    </option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">
                  Project Details & Requirements *
                </label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-[#c7f943] transition-colors resize-none"
                  placeholder="Describe your business, your goals, and what kind of website, app, system, or brand identity you need..."
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl bg-[#c7f943] text-[#181b1c] font-bold text-base shadow-lg shadow-[#c7f943]/20 hover:bg-[#b5e634] transition-all flex items-center justify-center space-x-2 cursor-pointer disabled:opacity-70"
              >
                {loading ? (
                  <span className="flex items-center space-x-2">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#181b1c]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <span>Sending Inquiry...</span>
                  </span>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
