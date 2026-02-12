import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { LOGO_SVG } from '../constants';

interface Props {
  onOpenWaitlist: () => void;
}

const Navbar: React.FC<Props> = ({ onOpenWaitlist }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-2xl py-3 border-b border-blue-500/10' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 group">
          {LOGO_SVG("w-10 h-10 text-blue-500 group-hover:scale-110 transition-transform")}
          <div className="flex flex-col">
            <span className="text-xl font-black text-white leading-none tracking-tighter uppercase">LIQUID<span className="text-blue-500">HEROX</span></span>
            <span className="text-[8px] font-bold text-blue-500 tracking-[0.2em] uppercase">MARKETS</span>
          </div>
        </NavLink>

        <div className="hidden lg:flex items-center gap-8">
          <NavLink to="/about" className={({isActive}) => `text-sm font-medium transition-colors ${isActive ? 'text-blue-500' : 'text-slate-300 hover:text-white'}`}>About Us</NavLink>
          <NavLink to="/cfd-trading" className={({isActive}) => `text-sm font-medium transition-colors ${isActive ? 'text-blue-500' : 'text-slate-300 hover:text-white'}`}>CFD Trading</NavLink>
          <NavLink to="/partners" className={({isActive}) => `text-sm font-medium transition-colors ${isActive ? 'text-blue-500' : 'text-slate-300 hover:text-white'}`}>Partners</NavLink>
          <button 
            onClick={onOpenWaitlist}
            className="px-6 py-2.5 hero-gradient text-white font-bold rounded-full hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all transform hover:scale-105 active:scale-95"
          >
            Join Waitlist
          </button>
        </div>

        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-black z-[90] flex flex-col items-center justify-center gap-8 transition-transform duration-500 ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <button className="absolute top-5 right-4 text-white" onClick={() => setIsOpen(false)}><X size={32} /></button>
        <NavLink to="/about" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-white">About Us</NavLink>
        <NavLink to="/cfd-trading" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-white">CFD Trading</NavLink>
        <NavLink to="/partners" onClick={() => setIsOpen(false)} className="text-2xl font-bold text-white">Partners</NavLink>
        <button 
          onClick={() => { setIsOpen(false); onOpenWaitlist(); }}
          className="px-10 py-4 hero-gradient text-white font-black text-xl rounded-full"
        >
          Join Waitlist
        </button>
      </div>
    </nav>
  );
};

export default Navbar;