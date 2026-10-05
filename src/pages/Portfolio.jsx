import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function Portfolio({ portfolioProjects, setSelectedProject }) {
  const [portfolioFilter, setPortfolioFilter] = useState("all");

  return (
    <div className="space-y-12 animate-fade-in py-8 pt-20">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-[#c7f943] text-xs font-bold uppercase tracking-widest bg-[#c7f943]/10 px-3 py-1 rounded-full">
          Our Work
        </span>
        <h2 className="text-4xl sm:text-5xl font-black">Project Portfolio</h2>
        <p className="text-zinc-400 text-lg">
          Explore our filterable gallery of custom websites, mobile
          applications, enterprise systems, and brand identities.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 pt-4">
        {[
          { key: "all", label: "All Projects" },
          { key: "web", label: "Websites & E-Commerce" },
          { key: "mobile", label: "Mobile Apps" },
          { key: "systems", label: "POS & Retail Systems" },
          { key: "enterprise", label: "Enterprise ERP" },
          { key: "brand", label: "Brand & UI/UX Design" },
        ].map((filter) => (
          <button
            key={filter.key}
            onClick={() => setPortfolioFilter(filter.key)}
            className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all ${
              portfolioFilter === filter.key
                ? "bg-[#c7f943] text-[#181b1c] shadow-md shadow-[#c7f943]/20"
                : "bg-white/5 text-zinc-300 hover:bg-white/10 border border-white/10"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
        {portfolioProjects
          .filter(
            (p) => portfolioFilter === "all" || p.category === portfolioFilter,
          )
          .map((proj) => (
            <div
              key={proj.id}
              className="group bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden hover:border-[#c7f943] transition-all flex flex-col justify-between shadow-xl"
            >
              <div
                className={`h-60 bg-gradient-to-br ${proj.gradient} p-8 flex flex-col justify-between relative`}
              >
                <span className="self-start text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-[#c7f943] backdrop-blur-md border border-white/10">
                  {proj.tag}
                </span>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex justify-between items-center text-xs text-zinc-400">
                  <span className="text-[#c7f943] font-bold">
                    {proj.client}
                  </span>
                  <span>Timeline: {proj.timeline}</span>
                </div>
                <h3 className="text-2xl font-bold">{proj.name}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {proj.desc}
                </p>
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="w-full mt-4 py-3 rounded-xl bg-white/5 hover:bg-[#c7f943] hover:text-[#181b1c] font-bold text-sm transition-all border border-white/10 flex items-center justify-center space-x-2"
                >
                  <span>View Project Details</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
