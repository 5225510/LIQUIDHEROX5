
import React from 'react';
import { Target, Shield, Zap, Users, Globe, Headphones } from 'lucide-react';

interface Props {
  onOpenWaitlist: () => void;
}

const About: React.FC<Props> = ({ onOpenWaitlist }) => {
  return (
    <div className="pt-32 pb-0 bg-black min-h-screen">
      {/* Hero Header Section */}
      <section className="container mx-auto px-4 md:px-8 text-center mb-20">
        <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter uppercase leading-none">
          About <span className="liquid-text">LIQUIDHEROX</span>
        </h1>
        <p className="text-slate-400 text-lg font-bold uppercase tracking-widest">
          Empowering traders worldwide since 2026
        </p>
      </section>

      {/* Our Mission Card */}
      <section className="container mx-auto px-4 md:px-8 mb-32">
        <div className="max-w-4xl mx-auto p-12 md:p-16 rounded-[3rem] bg-[#0a0a0a] border border-blue-500/10 shadow-2xl relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-2 h-full bg-blue-500/30 group-hover:bg-blue-500 transition-colors" />
          <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shrink-0 shadow-[0_0_40px_rgba(59,130,246,0.2)]">
              <Target className="text-white" size={32} />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tight uppercase">Our Mission</h2>
              <div className="space-y-6 text-slate-400 leading-relaxed text-lg font-medium">
                <p>
                  At LIQUIDHEROX, we believe trading should be accessible, transparent, and empowering. We're committed to providing traders of all levels with the tools, technology, and support they need to succeed in global financial markets.
                </p>
                <p>
                  Founded by a team of trading veterans and technology experts, LIQUIDHEROX combines deep market knowledge with cutting-edge innovation. We've built a platform that prioritizes speed, reliability, and user experience without compromising on security or trader protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Stand For Grid */}
      <section className="container mx-auto px-4 md:px-8 mb-32">
        <h2 className="text-4xl md:text-6xl font-black text-white text-center mb-20 uppercase tracking-tighter">What We Stand For</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Shield,
              title: "Security First",
              desc: "Your funds and data are protected with bank-grade encryption, segregated accounts, and institutional-level security protocols."
            },
            {
              icon: Zap,
              title: "Innovation",
              desc: "We constantly evolve our platform to bring you cutting-edge trading technology and the fastest execution speeds in the industry."
            },
            {
              icon: Users,
              title: "Client Focus",
              desc: "Your success is our priority. We provide 24/7 live support (real humans, not bots) and comprehensive educational resources."
            },
            {
              icon: Globe,
              title: "Global Access",
              desc: "Trade international markets from anywhere in the world, anytime, on any device with MetaTrader 5."
            }
          ].map((item, i) => (
            <div key={i} className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all group h-full flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 mb-8 group-hover:bg-blue-600 transition-all group-hover:text-white">
                <item.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics Banner */}
      <section className="container mx-auto px-4 md:px-8 mb-40">
        <div className="bg-[#0f1115] rounded-[3rem] border border-white/5 p-12 md:p-20 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)', backgroundSize: '24px 24px'}} />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-blue-500 mb-4 tracking-tighter">500+</div>
              <div className="text-slate-400 text-xs md:text-sm font-black uppercase tracking-widest">Early Access Traders</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-blue-500 mb-4 tracking-tighter">150+</div>
              <div className="text-slate-400 text-xs md:text-sm font-black uppercase tracking-widest">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-blue-500 mb-4 tracking-tighter">24/7</div>
              <div className="text-slate-400 text-xs md:text-sm font-black uppercase tracking-widest">Live Support</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-black text-blue-500 mb-4 tracking-tighter">$10</div>
              <div className="text-slate-400 text-xs md:text-sm font-black uppercase tracking-widest">Minimum Deposit</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container mx-auto px-4 md:px-8 text-center pb-40">
        <h2 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter uppercase leading-none">
          Ready to Start <span className="liquid-text">Your Trading</span> <br /> Journey?
        </h2>
        <p className="text-2xl text-slate-400 mb-16 font-bold uppercase tracking-tight">
          Join the waitlist for priority access at launch
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button 
            onClick={onOpenWaitlist}
            className="w-full sm:w-auto px-12 py-6 hero-gradient text-white font-black text-xl rounded-2xl shadow-2xl shadow-blue-500/20 hover:scale-105 active:scale-95 transition-all uppercase"
          >
            JOIN THE WAITLIST
          </button>
          <button className="w-full sm:w-auto px-12 py-6 bg-transparent border-2 border-white/10 text-white font-black text-xl rounded-2xl hover:bg-white/5 transition-all uppercase">
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
