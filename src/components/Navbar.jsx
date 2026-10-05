import React, { useState } from "react";
import { ArrowRight, Menu, X, Sparkles } from "lucide-react";

export default function Navbar({ activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabs = [
    { key: "home", label: "Home" },
    { key: "services", label: "Services" },
    // { key: "portfolio", label: "Portfolio" },
    { key: "about", label: "About Us" },
    { key: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#181b1c]/80 backdrop-blur-md border-b border-white/5 py-4 transition-all animate-[fadeInDown_0.6s_ease-out]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo Section with Hover Effect */}
        <div
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={() => setActiveTab("home")}
        >
          <div>
            <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1.5 group-hover:text-[#c7f943] transition-colors">
              Rasa<span className="text-[#c7f943]">dev</span>
            </span>
            <span className="block text-[10px] text-zinc-400 font-medium tracking-widest uppercase">
              IT solutions{" "}
            </span>
          </div>
        </div>

        {/* Desktop Navigation Tabs */}
        <nav className="hidden md:flex items-center space-x-1 bg-zinc-900/80 p-1.5 rounded-full border border-white/10 backdrop-blur-md shadow-inner">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 capitalize transform hover:scale-105 active:scale-95 ${
                activeTab === tab.key
                  ? "bg-[#c7f943] text-[#181b1c] shadow-md shadow-[#c7f943]/25 scale-105 font-bold"
                  : "text-zinc-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {/* Action Header Button & Mobile Toggle */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setActiveTab("contact")}
            className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-white/5 to-white/10 hover:from-[#c7f943]/10 hover:to-[#c7f943]/20 border border-white/10 hover:border-[#c7f943]/50 px-5 py-2.5 rounded-xl text-xs font-bold text-white transition-all duration-300 transform hover:-translate-y-0.5 group shadow-lg"
          >
            <span>Get Consultation</span>
            <ArrowRight
              size={14}
              className="text-[#c7f943] group-hover:translate-x-1 transition-transform"
            />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-zinc-900 text-zinc-300 hover:text-white border border-white/10 transition-transform active:scale-95"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? (
              <X size={22} className="text-[#c7f943]" />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu with Smooth Slide/Fade Animation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#181b1c]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-8 space-y-4 shadow-2xl animate-[fadeIn_0.3s_ease-out]">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => {
                setActiveTab(tab.key);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left px-5 py-3.5 rounded-2xl text-sm font-medium transition-all capitalize transform active:scale-98 ${
                activeTab === tab.key
                  ? "bg-[#c7f943] text-[#181b1c] font-bold shadow-lg shadow-[#c7f943]/20"
                  : "text-zinc-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}

          <div className="pt-2">
            <button
              onClick={() => {
                setActiveTab("contact");
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center space-x-2 bg-[#c7f943] text-[#181b1c] px-5 py-4 rounded-2xl text-sm font-extrabold shadow-lg shadow-[#c7f943]/20 active:scale-98 transition-transform"
            >
              <span>Get Consultation</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Custom Keyframe Animations Style Tag */}
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-15px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </header>
  );
}
