import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { portfolioProjects } from "./data/portfolioData";

import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { X } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  return (
    // لێرەدا overflow-x-hiddenـم زیاد کرد بۆ رێگریکردن لە جوڵانی ئاسۆیی
    <div className="min-h-screen bg-[#181b1c] text-white font-sans selection:bg-[#c7f943] selection:text-[#181b1c] overflow-x-hidden w-full">
      {/* Navigation Bar Component */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Dynamic View Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTab === "home" && (
          <Home
            setActiveTab={setActiveTab}
            portfolioProjects={portfolioProjects}
            setSelectedProject={setSelectedProject}
          />
        )}
        {activeTab === "services" && <Services setActiveTab={setActiveTab} />}
        {activeTab === "portfolio" && (
          <Portfolio
            portfolioProjects={portfolioProjects}
            setSelectedProject={setSelectedProject}
          />
        )}
        {activeTab === "about" && <About />}
        {activeTab === "contact" && <Contact />}
      </main>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-white/10 rounded-3xl max-w-xl w-full p-8 space-y-6 relative shadow-2xl animate-fade-in">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 text-zinc-400 hover:text-white"
            >
              <X size={20} />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#c7f943]/10 text-[#c7f943] border border-[#c7f943]/30">
                {selectedProject.tag}
              </span>
              <h3 className="text-3xl font-bold pt-2">
                {selectedProject.name}
              </h3>
              <p className="text-xs text-zinc-400">
                Client:{" "}
                <span className="text-[#c7f943] font-semibold">
                  {selectedProject.client}
                </span>{" "}
                | Timeline: {selectedProject.timeline}
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/10 text-sm text-zinc-300 leading-relaxed">
              <p>
                <strong className="text-white">Overview:</strong>{" "}
                {selectedProject.desc}
              </p>
              <p>
                <strong className="text-white">Technical Highlights:</strong>{" "}
                {selectedProject.details}
              </p>
            </div>

            <div className="pt-4 flex justify-end gap-3">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-6 py-2.5 rounded-xl bg-white/5 text-zinc-300 hover:bg-white/10 text-xs font-bold"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedProject(null);
                  setActiveTab("contact");
                }}
                className="px-6 py-2.5 rounded-xl bg-[#c7f943] text-[#181b1c] text-xs font-bold"
              >
                Request Similar Service
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer Component */}
      <Footer />
    </div>
  );
}
