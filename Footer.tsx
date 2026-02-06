
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 bg-slate-950 mt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="font-bold italic text-white">F</span>
              </div>
              <h2 className="font-bold text-xl">FLASH<span className="text-blue-500">USDT</span></h2>
            </div>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              The world's most advanced Flash USDT generation protocol. Trusted by professionals 
              for multi-network support and high-validity assets.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500">All Systems Operational</span>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-6 uppercase tracking-widest text-slate-500">Protocol</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Network Status</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Whitepaper</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Validator Map</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm mb-6 uppercase tracking-widest text-slate-500">Legal</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Refund Policy</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 mt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs font-mono">
          <p>© 2024 FLASH USDT CORE SUITE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <span>VERSION 4.2.0</span>
            <span>Uptime 99.9%</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
