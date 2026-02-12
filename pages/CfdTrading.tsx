import React from 'react';
import { 
  Globe, 
  Zap, 
  Shield, 
  BarChart3, 
  Smartphone,
  LineChart,
  Rocket,
  CheckCircle2,
  TrendingUp,
  Gem
} from 'lucide-react';

interface Props {
  onOpenWaitlist: () => void;
}

const CfdTrading: React.FC<Props> = ({ onOpenWaitlist }) => {
  return (
    <div className="pt-40 pb-20 bg-black min-h-screen">
      <div className="container mx-auto px-4">
        {/* Main Header */}
        <div className="max-w-4xl mx-auto text-center mb-32">
          <h1 className="text-5xl md:text-8xl font-black text-white mb-6 uppercase tracking-tighter">CFD Trading</h1>
          <p className="text-blue-500 text-xl font-black uppercase mb-12 tracking-widest underline decoration-2 underline-offset-8 decoration-blue-500/30">Trade global markets with zero barriers</p>
          <p className="text-slate-400 text-lg leading-relaxed mb-12 max-w-2xl mx-auto font-medium">
            Access forex, stocks, indices, and commodities from one powerful platform. Built for speed, designed for traders.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-32">
             <button onClick={onOpenWaitlist} className="px-10 py-5 bg-white text-black font-black text-xl rounded-xl uppercase">Join Waitlist</button>
             <button className="px-10 py-5 border-2 border-white/20 text-white font-black text-xl rounded-xl uppercase hover:bg-white/5 transition-all">Try Free Demo</button>
          </div>

          <div className="max-w-xl mx-auto p-12 rounded-[2.5rem] bg-blue-500/5 border border-blue-500/20 text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <Rocket size={80} className="text-blue-500" />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed relative z-10">
              <span className="text-blue-500 font-black italic">LIQUIDHEROX CFDs</span> allow you to trade price movements without owning the asset. Go long or short with leverage up to 1:500. Respond to trends in real-time across all major markets.
            </p>
          </div>
        </div>

        {/* Mobile Showcase with Brand Update */}
        <div className="relative mb-40">
           <div className="max-w-5xl mx-auto aspect-video rounded-[3rem] border border-blue-500/20 bg-blue-500/5 flex items-center justify-center overflow-hidden relative group">
              <img 
                src="https://images.unsplash.com/photo-1611974717483-30048e912e7f?auto=format&fit=crop&q=80&w=1200" 
                alt="LIQUIDHEROX Mobile Platform" 
                className="w-[80%] h-[120%] object-cover object-top opacity-50 grayscale group-hover:grayscale-0 transition-all duration-1000 rotate-1 group-hover:rotate-0" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
              <div className="absolute bottom-12 right-12 text-right">
                <div className="flex items-center gap-2 justify-end mb-2">
                  <span className="text-white text-4xl font-black italic tracking-tighter uppercase">LIQUID<span className="text-blue-500">HEROX</span></span>
                  <Rocket className="text-blue-500 animate-bounce" size={32} />
                </div>
                <p className="text-blue-500 text-xs font-black uppercase tracking-widest">PROFESSIONAL TRADING</p>
              </div>
           </div>
        </div>

        {/* Account Tiers with Brand Pivot */}
        <div className="mb-40">
           <h2 className="text-4xl md:text-6xl font-black text-white text-center mb-4 tracking-tighter uppercase">Choose Your <span className="liquid-text">Hero</span> Account</h2>
           <p className="text-slate-500 text-center text-sm font-bold uppercase mb-20 tracking-widest">All accounts include MT5, 1:500 leverage, and $10 minimum deposit</p>
           
           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { name: 'Standard Hero', badge: 'Best for Beginners', spread: '0.8', assets: '300+ trading assets', comm: '$12 per lot', lev: 'Up to 1:500', best: 'New traders learning the markets', btnColor: 'bg-white text-black' },
                { name: 'Pro Hero Spreads', badge: 'Most Popular', spread: '0.4', assets: '400+ trading assets', comm: '$10 per lot', lev: 'Up to 1:500', best: 'Active traders who want tighter spreads', btnColor: 'hero-gradient text-white', featured: true },
                { name: 'Elite Hero', badge: 'Commission-Free', spread: '0.8', assets: '400+ trading assets', comm: '$0', lev: 'Up to 1:300', best: 'Traders who prefer zero commission trading', btnColor: 'bg-white text-black' }
              ].map((tier, i) => (
                <div key={i} className={`p-10 rounded-3xl flex flex-col bg-white/[0.02] border transition-all ${tier.featured ? 'border-blue-500/50 shadow-[0_0_50px_rgba(59,130,246,0.1)] scale-105 z-10' : 'border-white/5'}`}>
                   <h3 className="text-3xl font-black text-white text-center mb-2">{tier.name}</h3>
                   <p className="text-blue-500 text-[10px] font-black uppercase tracking-widest text-center mb-8">{tier.badge}</p>
                   
                   <div className="w-full h-px bg-white/10 mb-8" />
                   
                   <div className="space-y-8 flex-1 mb-12">
                      <div>
                        <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">Spread from (pips)</p>
                        <p className="text-3xl font-black text-white">{tier.spread}</p>
                      </div>
                      <div>
                        <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest mb-2">Min. Deposit</p>
                        <p className="text-white font-bold">$10</p>
                      </div>
                   </div>

                   <div className="space-y-4">
                      <button onClick={onOpenWaitlist} className={`w-full py-4 rounded-xl font-black uppercase tracking-tight ${tier.btnColor}`}>Join Waitlist</button>
                      <button className="w-full py-4 border border-white/20 text-white rounded-xl font-bold uppercase text-xs hover:bg-white/5 transition-all">Try Free Demo</button>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default CfdTrading;