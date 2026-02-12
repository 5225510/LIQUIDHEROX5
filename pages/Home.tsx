
import React from 'react';
import { 
  TrendingUp, 
  Shield,
  Zap,
  Globe,
  Headphones,
  BarChart3,
  LineChart,
  Rocket
} from 'lucide-react';

interface Props {
  onOpenWaitlist: () => void;
}

const Home: React.FC<Props> = ({ onOpenWaitlist }) => {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        {/* Spotlight Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl pointer-events-none z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-600/15 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-10">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-blue-500 text-xs font-black tracking-[0.2em] uppercase">
              LAUNCHING Q1 2026 • JOIN THE WAITLIST NOW •
            </span>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white leading-tight mb-8 tracking-tighter uppercase">
            Professional Trading. <br />
            Accessible to <span className="liquid-text">Everyone.</span>
          </h1>
          <p className="text-slate-400 text-lg mb-16 max-w-2xl mx-auto uppercase font-bold tracking-tight">
            Built by trading veterans and technology experts for traders of all levels
          </p>

          {/* Hero Visual: Premium Laptop with Pink/Blue Trading Terminal */}
          <div className="relative max-w-5xl mx-auto mb-32 group">
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-blue-600/5 rounded-[4rem] blur-3xl -z-10 group-hover:bg-blue-600/10 transition-all duration-700" />
            
            <div className="flex justify-center items-center perspective-1000 py-12">
              <div className="relative transform-gpu rotate-x-6 hover:rotate-x-2 transition-all duration-1000 ease-out">
                {/* Laptop Body / Screen Frame */}
                <div className="relative w-[320px] sm:w-[600px] lg:w-[850px] aspect-[16/10] bg-[#0d0d0f] rounded-2xl border-[12px] border-[#1a1a1c] shadow-[0_60px_120px_rgba(0,0,0,0.9),0_0_60px_rgba(59,130,246,0.15)] overflow-hidden">
                  
                  {/* The Trading Interface - Neon Candlestick Chart */}
                  <div className="absolute inset-0 overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1611974717483-30048e912e7f?auto=format&fit=crop&q=80&w=2000" 
                      className="w-full h-full object-cover scale-105 opacity-60" 
                      alt="Professional Day Trading Interface" 
                    />
                    
                    {/* Dark Professional Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 pointer-events-none" />
                    
                    {/* UI Accent Elements */}
                    <div className="absolute top-5 left-8 flex gap-3">
                       <div className="w-2.5 h-2.5 rounded-full bg-red-500/60 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                       <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60 shadow-[0_0_8px_rgba(234,179,8,0.5)]" />
                       <div className="w-2.5 h-2.5 rounded-full bg-green-500/60 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                    </div>

                    {/* Dashboard Branding Overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8 pointer-events-none">
                       <div className="text-center animate-in fade-in zoom-in duration-1000">
                          <p className="text-blue-400 text-xs md:text-sm font-black tracking-[0.4em] uppercase mb-4 drop-shadow-lg">WELCOME TO LIQUIDHEROX</p>
                          <p className="text-white text-4xl md:text-6xl font-black italic tracking-tighter uppercase drop-shadow-[0_0_30px_rgba(59,130,246,0.5)] mb-2">
                            WELCOME TO MY <span className="text-blue-500 uppercase">BROKER</span>
                          </p>
                          <p className="text-white/60 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-8">Professional Trading Infrastructure</p>
                          <div className="flex items-center justify-center gap-6">
                             <div className="px-6 py-2.5 bg-blue-600/20 border border-blue-500/30 rounded-lg backdrop-blur-md">
                               <span className="text-blue-400 text-sm font-black uppercase tracking-widest">FOREX</span>
                             </div>
                             <div className="px-6 py-2.5 bg-blue-600/20 border border-blue-500/30 rounded-lg backdrop-blur-md">
                               <span className="text-blue-400 text-sm font-black uppercase tracking-widest">CFDs</span>
                             </div>
                          </div>
                       </div>
                    </div>

                    {/* The requested "little box" Branding in the corner */}
                    <div className="absolute bottom-8 right-8 flex flex-col items-end group/box animate-in slide-in-from-right-8 duration-700">
                      <div className="flex items-center gap-2">
                        <span className="text-white text-3xl font-black italic tracking-tighter uppercase leading-none">
                          LIQUID<span className="text-blue-500">HEROX</span>
                        </span>
                        <div className="relative">
                          <Rocket size={32} className="text-blue-500 transform -rotate-45" />
                          <div className="absolute inset-0 bg-blue-500/20 blur-lg rounded-full" />
                        </div>
                      </div>
                      <span className="text-blue-500 text-[10px] font-black tracking-[0.4em] uppercase mt-1">
                        MARKETS
                      </span>
                    </div>

                    {/* Terminal Status Footer */}
                    <div className="absolute bottom-6 left-12 flex justify-between items-end">
                       <div className="text-left hidden sm:block">
                          <p className="text-blue-500 text-[10px] font-black tracking-[0.4em] uppercase mb-1">PRO TERMINAL V4.2</p>
                          <p className="text-white/60 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                            MARKETS: LIVE
                          </p>
                       </div>
                    </div>
                  </div>

                  {/* High-end Screen Glare and Reflections */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-blue-500/5 pointer-events-none" />
                </div>

                {/* Laptop Base */}
                <div className="w-[340px] sm:w-[640px] lg:w-[900px] h-6 bg-[#1a1a1c] mx-auto rounded-b-3xl border-t border-white/10 shadow-2xl relative">
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-40 h-1.5 bg-black/60 rounded-full" />
                </div>
              </div>
            </div>
            
            {/* Minimal Logo Footer below laptop */}
            <div className="mt-12 flex flex-col items-center gap-4">
               <div className="flex items-center group cursor-default">
                  <div className="text-white text-5xl md:text-7xl font-black italic tracking-tighter uppercase flex items-center transition-all group-hover:text-blue-500">
                    LIQUID<span className="text-blue-500 group-hover:text-white">HEROX</span>
                  </div>
               </div>
               <div className="w-full max-w-md h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent opacity-50" />
            </div>
          </div>

          {/* Core Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-32">
            {[
              { icon: Shield, title: "Security First", desc: "Your funds protected with bank-grade encryption, segregated accounts, and institutional-grade custody" },
              { icon: Zap, title: "Ultra-Fast Execution", desc: "Trade with <3ms latency and institutional-grade liquidity across global markets" },
              { icon: Globe, title: "Trade Anything, Anywhere", desc: "60+ forex pairs, global stocks, major indices, and commodities from one platform" },
              { icon: Headphones, title: "Real Human Support", desc: "24/7 live agents (not bots) ready to help via chat, phone, or email" }
            ].map((f, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex gap-6 text-left hover:border-blue-500/20 transition-all group">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-all group-hover:text-white">
                  <f.icon size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed font-medium uppercase tracking-tight">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Markets Section */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-16 tracking-tighter uppercase">One Platform. Every Market.</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, title: "Forex", desc: "Trade 60+ currency pairs with 0.0 spreads and up to 1:500 leverage" },
              { icon: LineChart, title: "Stocks", desc: "Access global equities with fractional shares available" },
              { icon: BarChart3, title: "Indices", desc: "NAS100, SPX500, DAX40 with deep liquidity and tight spreads" },
              { icon: Zap, title: "Commodities", desc: "Gold, oil, and agricultural products for portfolio diversification" }
            ].map((m, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 group hover:border-blue-500/20 transition-all">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <m.icon className="text-blue-500" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{m.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed font-bold uppercase tracking-tight">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Signup Form Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tighter uppercase">Secure Your Spot <br /> Before It's Gone</h2>
          <p className="text-slate-400 text-xl mb-16 uppercase font-bold tracking-tight">Be among the elite first traders on LIQUIDHEROX</p>
          
          <div className="max-w-xl mx-auto p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/10 relative shadow-2xl">
            <div className="absolute -top-1 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            
            <div className="space-y-4">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full p-5 bg-black/50 border border-white/10 rounded-xl text-white outline-none focus:border-blue-500/50 transition-all"
              />
              <button 
                onClick={onOpenWaitlist}
                className="w-full py-6 hero-gradient text-white font-black text-2xl rounded-2xl uppercase shadow-[0_20px_50px_rgba(59,130,246,0.3)] hover:scale-105 active:scale-95 transition-all"
              >
                JOIN THE WAITLIST
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
