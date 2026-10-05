import React from "react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-[#181b1c] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-3">
          <span className="font-bold text-white">Rasa.dev</span>
        </div>

        <p className="text-xs text-zinc-400">
          Expanding Your World Through Technology © 2026
        </p>

        <div className="flex items-center space-x-4 text-zinc-400">
          {/* Social links if needed */}
        </div>
      </div>
    </footer>
  );
}
