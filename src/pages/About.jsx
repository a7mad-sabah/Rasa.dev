
import React from "react";
import { Globe, Sparkles } from "lucide-react";

export default function About() {
  return (
    <div className="space-y-16 py-8 max-w-4xl mx-auto animate-[fadeIn_0.8s_ease-out] pt-20">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <div className="inline-flex items-center space-x-2 bg-[#c7f943]/10 border border-[#c7f943]/30 px-4 py-1.5 rounded-full shadow-lg">
          <Sparkles
            size={14}
            className="text-[#c7f943] animate-spin"
            style={{ animationDuration: "8s" }}
          />
          <span className="text-[#c7f943] text-xs font-bold uppercase tracking-widest">
            About Rasa.dev
          </span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white">
          Expanding Your World <br />
          <span className="text-zinc-400 font-light text-3xl sm:text-4xl">
            Through Technology
          </span>
        </h2>
      </div>

      {/* Main Glass Card */}
      <div className="bg-zinc-900/60 border border-white/10 rounded-[32px] p-8 sm:p-12 space-y-8 shadow-2xl backdrop-blur-md">
        {/* Mission Description */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-[#c7f943]">
            Our Mission & Services
          </h3>
          <p className="text-zinc-300 text-lg sm:text-xl leading-relaxed font-light">
            Our services include custom website development, mobile apps,
            specialized enterprise systems, UI/UX design, and logo & brand
            identity design. Our mission is to expand your world through
            technology and transform your business into a better, more refined
            level.
          </p>
        </div>

        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-white/10">
          <div className="group space-y-3 p-6 rounded-2xl bg-[#181b1c]/80 border border-white/5 hover:border-[#c7f943]/30 transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-xl bg-zinc-900 border border-white/10 text-[#c7f943] group-hover:bg-[#c7f943] group-hover:text-[#181b1c] transition-colors">
                <Globe size={22} />
              </div>
              <h4 className="font-bold text-xl text-white">
                Expanding Your World
              </h4>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Connecting your business with customers everywhere through
              lightning-fast, highly accessible digital platforms.
            </p>
          </div>

          <div className="group space-y-3 p-6 rounded-2xl bg-[#181b1c]/80 border border-white/5 hover:border-[#c7f943]/30 transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex items-center space-x-3">
              <div className="p-3 rounded-xl bg-zinc-900 border border-white/10 text-[#c7f943] group-hover:bg-[#c7f943] group-hover:text-[#181b1c] transition-colors">
                <Sparkles size={22} />
              </div>
              <h4 className="font-bold text-xl text-white">A Refined Level</h4>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Transforming daily business workflows into automated systems with
              stunning UI/UX and pristine branding.
            </p>
          </div>
        </div>

        {/* Studio Values Section */}
        <div className="pt-6 border-t border-white/10 space-y-4">
          <h4 className="font-bold text-xs text-zinc-400 uppercase tracking-widest">
            Studio Values
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-[#181b1c]/90 border border-white/5 hover:border-white/20 transition-all transform hover:-translate-y-1">
              <h5 className="font-bold text-white mb-1.5 text-base">
                Excellence
              </h5>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Top-tier craftsmanship in every line of code and pixel.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#181b1c]/90 border border-white/5 hover:border-white/20 transition-all transform hover:-translate-y-1">
              <h5 className="font-bold text-white mb-1.5 text-base">
                Reliability
              </h5>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Secure systems and robust applications you can trust.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#181b1c]/90 border border-white/5 hover:border-white/20 transition-all transform hover:-translate-y-1">
              <h5 className="font-bold text-white mb-1.5 text-base">
                Innovation
              </h5>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Cutting-edge technology stack tailored to business growth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Keyframe Animations Style Tag */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}