import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Zap,
  Globe,
  Cpu,
  Layers,
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Home({
  setActiveTab,
  portfolioProjects,
  setSelectedProject,
}) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-32 pb-20 overflow-hidden bg-[#181b1c] text-white"
    >
      {/* 1. Hero Section */}
      <div className="relative pt-12 lg:pt-20">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content with Framer Motion Stagger */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 space-y-8 text-left"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-3 bg-zinc-900/80 border border-white/10 px-5 py-2.5 rounded-full shadow-lg hover:border-[#c7f943]/40 transition-all duration-300"
            >
              <Sparkles
                size={18}
                className="text-[#c7f943] animate-spin"
                style={{ animationDuration: "8s" }}
              />
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#c7f943]">
                Next-Gen Digital Evolution
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05]"
            >
              Engineering The <br />
              <span className="text-white">Future of Business</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-zinc-400 text-lg sm:text-xl font-light leading-relaxed max-w-2xl"
            >
              We architect high-performance web platforms, intelligent mobile
              apps, and immersive brand identities that set new industry
              standards.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-5 pt-4"
            >
              <button
                onClick={() => setActiveTab("portfolio")}
                className="group relative px-8 py-4 rounded-2xl bg-[#c7f943] text-[#181b1c] font-black text-sm tracking-wide overflow-hidden shadow-lg shadow-[#c7f943]/10 hover:shadow-xl hover:shadow-[#c7f943]/20 transition-all duration-300 transform hover:-translate-y-1.5 active:translate-y-0 flex items-center space-x-3"
              >
                <span>Explore Work</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1.5 transition-transform duration-300"
                />
              </button>

              <button
                onClick={() => setActiveTab("services")}
                className="group px-8 py-4 rounded-2xl bg-zinc-900/60 hover:bg-zinc-900 border border-white/10 hover:border-white/20 text-white font-semibold text-sm transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-2"
              >
                <span>Our Capabilities</span>
                <ChevronRight
                  size={16}
                  className="text-[#c7f943] group-hover:translate-x-1 transition-transform"
                />
              </button>
            </motion.div>

            {/* Quick Metrics Bar */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 pt-10 border-t border-white/10"
            >
              <div className="space-y-1 transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-black text-white flex items-center">
                  100<span className="text-[#c7f943]">%</span>
                </div>
                <p className="text-xs text-zinc-500 uppercase tracking-wider">
                  Custom Code
                </p>
              </div>
              <div className="space-y-1 transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-black text-white flex items-center">
                  50<span className="text-[#c7f943]">+</span>
                </div>
                <p className="text-xs text-zinc-500 uppercase tracking-wider">
                  Global Clients
                </p>
              </div>
              <div className="space-y-1 transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-black text-white">24/7</div>
                <p className="text-xs text-zinc-500 uppercase tracking-wider">
                  Elite Support
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Holographic Card with Floating & Motion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative bg-zinc-900/50 border border-white/10 rounded-[30px] p-8 shadow-2xl space-y-6 backdrop-blur-md animate-[float_6s_ease-in-out_infinite]">
              {/* Terminal Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <span className="text-xs font-mono text-zinc-500">
                  rasa-core-v3.0
                </span>
              </div>

              {/* Simulated Console */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-[#181b1c] border border-white/5 flex items-center justify-between text-zinc-300 hover:border-[#c7f943]/30 transition-colors">
                  <span className="text-[#c7f943]">
                    $ rasa --init-workspace
                  </span>
                  <span className="text-zinc-400 font-bold">READY</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#181b1c] border border-white/5 flex items-center justify-between text-zinc-300 hover:border-white/20 transition-colors">
                  <span>Deploying Cloud Infrastructure</span>
                  <span className="px-2 py-0.5 rounded bg-zinc-900 text-[#c7f943]">
                    Success
                  </span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#181b1c] border border-white/5 flex items-center justify-between text-zinc-300 hover:border-white/20 transition-colors">
                  <span>AI & Mobile Sync</span>
                  <span className="px-2 py-0.5 rounded bg-zinc-900 text-white">
                    Optimized
                  </span>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="p-4 rounded-2xl bg-[#181b1c] border border-white/5 flex items-center space-x-4 shadow-inner">
                <div className="p-3 bg-[#c7f943] text-[#181b1c] rounded-xl transform hover:rotate-12 transition-transform duration-300">
                  <Zap size={22} className="fill-current" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white">
                    High Performance Suite
                  </h4>
                  <p className="text-xs text-zinc-500">
                    Lightning fast execution on all devices.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 2. Interactive Feature Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="space-y-12"
      >
        <motion.div
          variants={itemVariants}
          className="text-center max-w-2xl mx-auto space-y-3"
        >
          <span className="text-[#c7f943] text-xs font-bold uppercase tracking-widest">
            Core Competencies
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            Built For Digital Dominance
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Everything your brand needs to scale, automate, and outperform the
            competition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Globe className="w-6 h-6 text-[#c7f943]" />,
              title: "Web Platforms",
              desc: "Immersive, lightning-fast web applications built with cutting-edge frameworks for maximum conversion.",
            },
            {
              icon: <Cpu className="w-6 h-6 text-[#c7f943]" />,
              title: "Mobile Ecosystems",
              desc: "Native and cross-platform iOS & Android mobile applications crafted for seamless user experiences.",
            },
            {
              icon: <Layers className="w-6 h-6 text-[#c7f943]" />,
              title: "Enterprise Systems",
              desc: "Robust backend infrastructure, custom POS software, and workflow automation solutions.",
            },
          ].map((item, idx) => (
            <motion.div
              variants={itemVariants}
              key={idx}
              className="group p-8 rounded-3xl bg-zinc-900/40 border border-white/10 hover:border-[#c7f943]/40 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl space-y-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#181b1c] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#c7f943] group-hover:text-[#181b1c] transition-all duration-300">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-[#c7f943] transition-colors">
                {item.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {item.desc}
              </p>

              <button
                onClick={() => setActiveTab("services")}
                className="inline-flex items-center space-x-2 text-xs font-extrabold text-[#c7f943] pt-2 group-hover:translate-x-1 transition-transform"
              >
                <span>Learn more</span>
                <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 3. Featured Showcase Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="space-y-12 pt-10 border-t border-white/10"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4"
        >
          <div className="space-y-2">
            <span className="text-[#c7f943] text-xs font-bold uppercase tracking-widest">
              Selected Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              Featured Case Studies
            </h2>
          </div>

          <button
            onClick={() => setActiveTab("portfolio")}
            className="px-6 py-3 rounded-xl bg-zinc-900/60 hover:bg-zinc-900 border border-white/10 text-sm font-bold text-white transition-all transform hover:-translate-y-0.5 flex items-center space-x-2"
          >
            <span>View All Portfolio</span>
            <ArrowRight size={16} className="text-[#c7f943]" />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioProjects.slice(0, 2).map((proj) => (
            <motion.div
              variants={itemVariants}
              key={proj.id}
              className="group bg-zinc-900/40 border border-white/10 rounded-3xl overflow-hidden hover:border-[#c7f943]/40 transition-all duration-500 transform hover:-translate-y-1.5 flex flex-col justify-between shadow-lg"
            >
              <div
                className={`h-64 bg-gradient-to-br ${proj.gradient} p-8 flex flex-col justify-between relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                <span className="relative z-10 self-start text-xs font-mono px-4 py-1.5 rounded-full bg-[#181b1c]/80 text-[#c7f943] border border-white/10">
                  {proj.tag}
                </span>
              </div>

              <div className="p-8 space-y-4">
                <span className="text-xs text-[#c7f943] font-mono tracking-widest uppercase">
                  {proj.client}
                </span>
                <h3 className="text-2xl font-black text-white">{proj.name}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {proj.desc}
                </p>
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="pt-2 flex items-center space-x-2 text-sm font-bold text-[#c7f943] hover:text-white transition-colors"
                >
                  <span>Inspect Case Study</span>
                  <ArrowRight
                    size={16}
                    className="transform group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* 4. Call to Action Banner */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative rounded-[32px] bg-zinc-900/60 border border-white/10 p-10 sm:p-20 text-center space-y-8 backdrop-blur-md overflow-hidden group"
      >
        <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#c7f943]/5 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>

        <div className="relative z-10 space-y-4 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-widest font-extrabold text-[#c7f943] bg-[#181b1c] px-4 py-1.5 rounded-full border border-white/10">
            Let's Build Together
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Ready to Elevate Your Digital Presence?
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg font-light">
            Transform your visionary ideas into powerful software solutions with
            Rasa.dev.
          </p>
        </div>

        <div className="relative z-10 pt-4 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setActiveTab("contact")}
            className="px-10 py-5 rounded-2xl bg-[#c7f943] text-[#181b1c] font-extrabold text-base tracking-wide hover:bg-[#b5e634] transition-all transform hover:-translate-y-1 shadow-xl shadow-[#c7f943]/10"
          >
            Start Your Project Now
          </button>
        </div>
      </motion.div>

      {/* Floating Animation Keyframes Style Tag */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </motion.div>
  );
}
