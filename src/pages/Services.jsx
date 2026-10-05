import React from "react";
import {
  Layout,
  Smartphone,
  Server,
  Layers,
  Palette,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Services({ setActiveTab }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="space-y-16 py-8 pt-20"
    >
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-block text-[#c7f943] text-xs font-bold uppercase tracking-widest bg-[#c7f943]/10 px-3 py-1 rounded-full"
        >
          What We Offer
        </motion.span>

        
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl sm:text-5xl font-black"
        >
          Professional Digital Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-zinc-400 text-lg"
        >
          Our services include custom website development, mobile apps,
          specialized enterprise systems, UI/UX design, and logo & brand
          identity design.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6"
      >
        {[
          {
            icon: <Layout size={28} className="text-[#181b1c]" />,
            title: "Custom Websites",
            desc: "Modern, responsive, and SEO-optimized websites tailored to your brand identity.",
          },
          {
            icon: <Smartphone size={28} className="text-[#181b1c]" />,
            title: "Mobile Apps",
            desc: "Powerful cross-platform iOS and Android mobile apps engineered for your business.",
          },
          {
            icon: <Server size={28} className="text-[#181b1c]" />,
            title: "Enterprise Systems",
            desc: "POS systems, inventory management, and ERP tools built to streamline operations.",
          },
          {
            icon: <Layers size={28} className="text-[#181b1c]" />,
            title: "UI/UX Design",
            desc: "Immersive digital product design focusing on user empathy and conversion.",
          },
          {
            icon: <Palette size={28} className="text-[#181b1c]" />,
            title: "Brand Identity",
            desc: "Minimalist logomarks, color systems, and comprehensive brand guidelines.",
          },
        ].map((serv, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="bg-zinc-900 border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#c7f943] transition-all shadow-xl group"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#c7f943] flex items-center justify-center shadow-lg shadow-[#c7f943]/25 group-hover:scale-110 transition-transform">
                {serv.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{serv.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {serv.desc}
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab("contact")}
              className="mt-6 w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-white/5 hover:bg-[#c7f943] hover:text-[#181b1c] font-bold text-xs transition-all border border-white/10 group/btn cursor-pointer"
            >
              <span>Request Service</span>
              <ArrowRight
                size={14}
                className="group-hover/btn:translate-x-1 transition-transform"
              />
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
