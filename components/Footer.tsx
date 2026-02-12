import React from 'react';
import { NavLink } from 'react-router-dom';
import { LOGO_SVG } from '../constants';
import { Shield, Headphones, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-black pt-32 pb-12 overflow-hidden border-t border-white/5">
      {/* Background spotlight effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          {/* Logo Column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              {LOGO_SVG("w-12 h-12 text-blue-500")}
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white leading-none tracking-tighter uppercase">LIQUID<span className="text-blue-500">HEROX</span></span>
                <span className="text-[10px] font-black text-blue-500 tracking-[0.3em] uppercase">MARKETS</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm font-medium tracking-tight mt-2">
              Your trusted partner in global trading.
            </p>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="text-white font-black mb-10 text-[10px] uppercase tracking-[0.2em]">Product</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-bold uppercase tracking-tight">
              <li><NavLink to="/cfd-trading" className="hover:text-blue-500 transition-colors">CFD Trading</NavLink></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">MetaTrader 5</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Indices</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Commodities</a></li>
            </ul>
          </div>

          {/* Markets Column */}
          <div>
            <h4 className="text-white font-black mb-10 text-[10px] uppercase tracking-[0.2em]">Markets</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-bold uppercase tracking-tight">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Forex</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Stocks</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Indices</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Commodities</a></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-white font-black mb-10 text-[10px] uppercase tracking-[0.2em]">Company</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-bold uppercase tracking-tight">
              <li><NavLink to="/about" className="hover:text-blue-500 transition-colors">About Us</NavLink></li>
              <li><NavLink to="/partners" className="hover:text-blue-500 transition-colors">Partners</NavLink></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-wrap justify-center gap-12 mb-12">
            <div className="flex items-center gap-2 text-blue-500/60 text-[10px] font-black uppercase tracking-widest">
              <Shield size={16} />
              <span>SSL SECURED</span>
            </div>
            <div className="flex items-center gap-2 text-blue-500/60 text-[10px] font-black uppercase tracking-widest">
              <Headphones size={16} />
              <span>24/7 SUPPORT</span>
            </div>
          </div>

          <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-10">
            © 2026 LIQUIDHEROX Markets. All rights reserved.
          </p>

          <div className="max-w-4xl">
            <p className="text-[10px] text-slate-600 leading-relaxed uppercase tracking-tighter font-bold">
              Trading CFDs and leveraged products involves significant risk of loss and may not be suitable for all investors. 
              Please ensure you understand the risks involved and seek independent advice if necessary. 
            </p>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <button 
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-[120] w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group"
      >
        <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  );
};

export default Footer;