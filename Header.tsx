
import React from 'react';

interface HeaderProps {
  activeTab: 'home' | 'generator' | 'faq';
  setActiveTab: (tab: 'home' | 'generator' | 'faq') => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => setActiveTab('home')}
        >
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
            <span className="font-bold text-xl italic text-white">F</span>
          </div>
          <div>
            <h1 className="font-bold text-xl tracking-tight">FLASH<span className="text-blue-500">USDT</span></h1>
            <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest leading-none">Official Core Suite</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => setActiveTab('home')}
            className={`text-sm font-medium transition-colors ${activeTab === 'home' ? 'text-blue-500' : 'text-slate-400 hover:text-white'}`}
          >
            Home
          </button>
          <button 
            onClick={() => setActiveTab('faq')}
            className={`text-sm font-medium transition-colors ${activeTab === 'faq' ? 'text-blue-500' : 'text-slate-400 hover:text-white'}`}
          >
            FAQ
          </button>
          <button 
            onClick={() => setActiveTab('generator')}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold rounded-full transition-all shadow-lg shadow-blue-600/25 active:scale-95"
          >
            Launch Software
          </button>
        </nav>

        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
