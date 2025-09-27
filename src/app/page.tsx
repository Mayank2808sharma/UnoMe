"use client";
import React, { useState, useEffect } from "react";
import { Crown, Users, Zap, ArrowRight, Gamepad2 } from "lucide-react";

export default function UnoShowdown() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/image.png')",
        }}
      />

      {/* Minimalistic Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Clean Header */}
        <header className="p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                <div className="w-3 h-3 bg-black rounded-sm" />
              </div>
              <span className="text-white font-mono text-sm tracking-wider">
                ETHGLOBAL DELHI
              </span>
            </div>
            <div className="text-white/60 text-sm font-mono">2025</div>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-8">
          <div
            className={`max-w-4xl w-full text-center transform transition-all duration-1000 ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {/* Main Title */}
            <div className="mb-16">
              <div className="inline-flex items-center gap-2 mb-8 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span className="text-white/80 text-xs font-mono uppercase tracking-wider">
                  Ultimate Championship
                </span>
              </div>

              <h1 className="text-7xl md:text-9xl font-black mb-4 tracking-tighter leading-none text-white">
                UNO
              </h1>
              <div className="w-24 h-0.5 bg-white mx-auto mb-4" />
              <h2 className="text-lg md:text-xl font-mono text-white/70 tracking-[0.3em] uppercase">
                Showdown
              </h2>
            </div>

            {/* Challenge Message */}
            <div className="mb-16 max-w-2xl mx-auto space-y-4">
              <p className="text-lg text-white/80 font-light">
                Kartik & Pascal, you had your laughs.
              </p>
              <p className="text-xl md:text-2xl font-medium text-white">
                Time to face the real challenge.
              </p>
            </div>

            {/* Minimalistic Player Cards */}
            <div className="flex justify-center items-center gap-8 mb-16">
              {/* Kartik */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 p-0.5 mb-3">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                    <img
                      src="/kartik.jpg"
                      alt="Kartik"
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div className="w-full h-full bg-white/20 hidden items-center justify-center text-sm font-bold text-white rounded-full">
                      K
                    </div>
                  </div>
                </div>
                <div className="text-white text-sm font-mono">KARTIK</div>
              </div>

              <div className="text-white/40 text-sm font-mono mx-4">VS</div>

              {/* Pascal */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 p-0.5 mb-3">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                    <img
                      src="/pascal.png"
                      alt="Pascal"
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div className="w-full h-full bg-white/20 hidden items-center justify-center text-sm font-bold text-white rounded-full">
                      P
                    </div>
                  </div>
                </div>
                <div className="text-white text-sm font-mono">PASCAL</div>
              </div>

              <div className="text-white/40 text-sm font-mono mx-4">VS</div>

              {/* Mayank */}
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 p-0.5 mb-3">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                    <img
                      src="/mayank.jpeg"
                      alt="Mayank"
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                    <div className="w-full h-full bg-white/20 hidden items-center justify-center text-sm font-bold text-white rounded-full">
                      M
                    </div>
                  </div>
                </div>
                <div className="text-white text-sm font-mono">MAYANK</div>
              </div>
            </div>

            {/* Clean CTA Button */}
            <div className="relative inline-block">
              <button 
                onClick={() => window.open("https://discord.com/users/mayank2808sharma", "_blank")} 
                className="group relative px-6 py-3 bg-white text-black font-mono text-sm uppercase tracking-wider hover:bg-white/90 transition-all duration-300 border border-white/20"
              >
                <div className="flex items-center gap-3">
                  <span>Accept Challenge</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Clean Footer */}
        <footer className="p-8 text-center">
          <div className="text-white/40 text-xs font-mono uppercase tracking-wider">
            Ready to prove who's the real champion?
          </div>
        </footer>
      </div>
    </div>
  );
}