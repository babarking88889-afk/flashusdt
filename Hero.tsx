
import React from 'react';
import { EXCHANGES } from '../constants';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <section className="relative pt-12">
      <div className="text-center max-w-4xl mx-auto space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-4 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
          New Update v4.2: 90 Days Validity Added
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
          Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Flash USDT</span> <br />
          Generation Protocol
        </h1>
        
        <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          The industry-leading software for generating cross-network Flash USDT. 
          Verified to work on major exchanges and brokers with high success rates and 
          full multi-network support.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button 
            onClick={onGetStarted}
            className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 font-bold rounded-xl hover:bg-slate-200 transition-all flex items-center justify-center gap-2 group"
          >
            Start Generating Now
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-slate-900 border border-white/10 text-white font-bold rounded-xl hover:bg-slate-800 transition-all">
            View Live Stats
          </button>
        </div>

        <div className="pt-20 space-y-8">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-[0.2em]">Verified Working On</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            {EXCHANGES.map((ex) => (
              <div key={ex.name} className="flex items-center gap-2">
                <img src={ex.logo} alt={ex.name} className="w-6 h-6 object-contain" />
                <span className="font-bold text-sm">{ex.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 blur-[120px] rounded-full z-[-1]" />
    </section>
  );
};

export default Hero;
