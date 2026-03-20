import React from 'react';

const Header = () => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[150] px-3 md:px-6 py-3 md:py-4 flex justify-between items-center border-b border-cyberYellow/20 bg-cyberBlack/90 backdrop-blur-2xl opacity-0 translate-y-[-100%]" id="main-header">
        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex gap-2 md:gap-4 mr-2 md:mr-4 items-center">
            <img src="/assets/SLRTCElogo.png" alt="SLRTCE" className="h-6 sm:h-8 md:h-10 w-auto object-contain" />
            <img src="/assets/rahul.png" alt="Rahul Education" className="h-6 sm:h-8 md:h-10 w-auto object-contain" />
          </div>
          <div className="flex flex-col">
            <div className="text-xs sm:text-base md:text-xl font-black tracking-tighter italic extreme-glitch text-cyberYellow" data-text="NEOFUTURE">NEOFUTURE</div>
            <span className="text-[5px] sm:text-[6px] md:text-[7px] max-w-[120px] sm:max-w-none opacity-80 uppercase tracking-widest font-bold mt-0.5 md:mt-1 leading-tight md:leading-normal">10th April 2026 // Shree L.R Tiwari College of Engineering // Rahul Education // IEEE MAHARASHTRA</span>
          </div>
        </div>
        <nav className="hidden xl:flex gap-6 text-[9px] font-bold uppercase tracking-widest">
          <a className="hover:text-cyberYellow transition-all button-glitch text-cyberYellow/80" href="#home">.Home</a>
          <a className="hover:text-cyberYellow transition-all button-glitch text-cyberYellow/80" href="#about">.About</a>
          <a className="hover:text-cyberYellow transition-all button-glitch text-cyberYellow/80" href="#timeline">.Timeline</a>
          <a className="hover:text-cyberYellow transition-all button-glitch text-cyberYellow/80" href="#tracks">.Tracks</a>
          <a className="hover:text-cyberYellow transition-all button-glitch text-cyberYellow/80" href="#prizes">.Prizes</a>
          <a className="hover:text-cyberYellow transition-all button-glitch text-cyberYellow/80" href="#faq">.FAQ</a>
        </nav>
        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden sm:flex flex-col items-end text-cyberYellow group cursor-help">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyberYellow animate-pulse"></span>
              <span className="text-[9px] md:text-[11px] font-black tracking-[0.2em] leading-none uppercase">Round 1 Registrations</span>
            </div>
            <span className="text-[10px] md:text-[13px] font-black text-white/90 bg-cyberYellow px-2 py-0.5 mt-1 block skew-x-[-10deg] animate-pulse">
              <span className="inline-block skew-x-[10deg] text-black">OPEN UNTIL 6 APRIL 2026</span>
            </span>
          </div>
          <a
            href="https://neo-future-registration.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-cyberYellow border border-cyberYellow px-4 sm:px-6 py-1.5 sm:py-2 text-[8px] sm:text-[10px] font-black uppercase skew-x-[-20deg] hover:bg-cyberYellow hover:text-black hover:shadow-[0_0_20px_rgba(255,251,0,0.7)] transition-all pointer-events-auto button-glitch corrupt-on-hover inline-block"
            data-text="DATA_CORRUPTED"
          >
            <span className="inline-block skew-x-[20deg]">Register_Now</span>
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
