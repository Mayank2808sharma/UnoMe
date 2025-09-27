"use client";
import React, { useState, useEffect } from "react";
import {ArrowRight, Gamepad2 } from "lucide-react";

const EthereumLogo = () => (
  <svg width="20" height="20" viewBox="0 0 784.37 1277.39" className="text-white">
    <g fill="currentColor">
      <polygon fillOpacity=".6" points="392.07,0 383.5,29.11 383.5,873.74 392.07,882.29 784.13,650.54"/>
      <polygon points="392.07,0 -0,650.54 392.07,882.29 392.07,472.33"/>
      <polygon fillOpacity=".6" points="392.07,956.52 387.24,962.41 387.24,1263.28 392.07,1277.38 784.37,724.89"/>
      <polygon points="392.07,1277.38 392.07,956.52 -0,724.89"/>
      <polygon fillOpacity=".2" points="392.07,882.29 784.13,650.54 392.07,472.33"/>
      <polygon fillOpacity=".6" points="0,650.54 392.07,882.29 392.07,472.33"/>
    </g>
  </svg>
);

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

      {/* Enhanced Overlay with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/60" />

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Enhanced Header */}
        <header className="p-4 sm:p-6 lg:p-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-1 sm:gap-2">
                <EthereumLogo />
                <span className="text-white font-mono text-xs sm:text-sm tracking-wider">
                  ETHGLOBAL DELHI
                </span>
              </div>
            </div>
            <div className="text-white/60 text-xs sm:text-sm font-mono">2025</div>
          </div>
        </header>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div
            className={`max-w-4xl w-full text-center transform transition-all duration-1200 ease-out ${
              isLoaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            {/* Main Title with enhanced animation */}
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 lg:mb-8 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse" />
                <span className="text-white/90 text-xs font-mono uppercase tracking-widest">
                  Ultimate Championship
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-4 sm:mb-6 tracking-tighter leading-none text-white">
                <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  UNO
                </span>
              </h1>
              <div className="w-24 sm:w-32 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-4 sm:mb-6" />
              <h2 className="text-sm sm:text-lg md:text-xl font-mono text-white/80 tracking-[0.2em] sm:tracking-[0.4em] uppercase">
                Showdown
              </h2>
            </div>

            {/* Enhanced Challenge Message */}
            <div className="mb-12 sm:mb-16 lg:mb-20 max-w-2xl mx-auto space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed">
                Kartik & Pascal, you had your laughs.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl font-medium text-white leading-relaxed">
                Time to face the <span className="text-white font-bold">real challenge</span>.
              </p>
            </div>

            {/* Enhanced Player Cards - Responsive Layout */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 lg:gap-12 mb-12 sm:mb-16 lg:mb-20">
              {/* Kartik */}
              <div className="text-center group">
                <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 p-0.5 mb-3 sm:mb-4 group-hover:border-white/50 transition-all duration-300 mx-auto">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-black/80 to-black flex items-center justify-center overflow-hidden">
                    <img
                      src="/kartik.jpg"
                      alt="Kartik"
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.style.display = "none";
                        if (img.nextSibling && img.nextSibling instanceof HTMLElement) {
                          (img.nextSibling as HTMLElement).style.display = "flex";
                        }
                      }}
                    />
                    <div className="w-full h-full bg-white/20 hidden items-center justify-center text-base sm:text-lg font-bold text-white rounded-full">
                      K
                    </div>
                  </div>
                </div>
                <div className="text-white text-xs sm:text-sm font-mono tracking-wider">KARTIK</div>
              </div>

              <div className="text-white/50 text-sm sm:text-lg font-mono animate-pulse hidden sm:block">VS</div>
              <div className="text-white/50 text-sm font-mono animate-pulse sm:hidden">VS</div>

              {/* Pascal */}
              <div className="text-center group">
                <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 p-0.5 mb-3 sm:mb-4 group-hover:border-white/50 transition-all duration-300 mx-auto">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-black/80 to-black flex items-center justify-center overflow-hidden">
                    <img
                      src="/pascal.png"
                      alt="Pascal"
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.style.display = "none";
                        if (img.nextSibling && img.nextSibling instanceof HTMLElement) {
                          (img.nextSibling as HTMLElement).style.display = "flex";
                        }
                      }}
                    />
                    <div className="w-full h-full bg-white/20 hidden items-center justify-center text-base sm:text-lg font-bold text-white rounded-full">
                      P
                    </div>
                  </div>
                </div>
                <div className="text-white text-xs sm:text-sm font-mono tracking-wider">PASCAL</div>
              </div>

              <div className="text-white/50 text-sm sm:text-lg font-mono animate-pulse hidden sm:block">VS</div>
              <div className="text-white/50 text-sm font-mono animate-pulse sm:hidden">VS</div>

              {/* Mayank */}
              <div className="text-center group">
                <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 p-0.5 mb-3 sm:mb-4 group-hover:border-white/50 transition-all duration-300 mx-auto">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-black/80 to-black flex items-center justify-center overflow-hidden">
                    <img
                      src="/mayank.jpeg"
                      alt="Mayank"
                      className="w-full h-full object-cover rounded-full"
                      onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.style.display = "none";
                        if (img.nextSibling && img.nextSibling instanceof HTMLElement) {
                          (img.nextSibling as HTMLElement).style.display = "flex";
                        }
                      }}
                    />
                    <div className="w-full h-full bg-white/20 hidden items-center justify-center text-base sm:text-lg font-bold text-white rounded-full">
                      M
                    </div>
                  </div>
                </div>
                <div className="text-white text-xs sm:text-sm font-mono tracking-wider">MAYANK</div>
              </div>
            </div>

            {/* Enhanced CTA Button */}
            <div className="relative inline-block">
              <button 
                onClick={() => window.open("https://discord.com/users/mayank2808sharma", "_blank")} 
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-mono text-xs sm:text-sm uppercase tracking-widest hover:bg-white/95 transition-all duration-300 border border-white/30 hover:border-white/50 backdrop-blur-sm"
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <Gamepad2 className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Accept Challenge</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                {/* Button glow effect */}
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Footer */}
        <footer className="p-4 sm:p-6 lg:p-8 text-center">
          <div className="text-white/50 text-xs font-mono uppercase tracking-wider">
            Ready to prove who is the real champion?
          </div>
        </footer>
      </div>
    </div>
  );
}