
import React, { useState } from 'react';
import { PARTNER_TIERS } from '../constants';
import { 
  Trophy, 
  Coins, 
  UserPlus, 
  Gift, 
  ChevronDown, 
  Target,
  Users,
  MousePointer2,
  TrendingUp,
  Download,
  Gem,
  CheckCircle2,
  Plane,
  Calendar,
  Headphones,
  Link2,
  Image as ImageIcon,
  Zap,
  BarChart3
} from 'lucide-react';

interface Props {
  onOpenWaitlist: () => void;
}

const Partners: React.FC<Props> = ({ onOpenWaitlist }) => {
  const [openIncentive, setOpenIncentive] = useState<number | null>(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const incentives = [
    { icon: Gift, title: "Exclusive Bonuses", a: "Earn additional performance bonuses on top of your regular commissions. Hit monthly targets and unlock special cash rewards that scale with your success." },
    { icon: Trophy, title: "VIP Contests", a: "Participate in regular affiliate-only contests with high-value prizes including tech gear, travel experiences, and luxury items." },
    { icon: Coins, title: "Monthly Salaries", a: "Top-performing platinum partners can qualify for fixed monthly retainer payouts in addition to performance lot commissions." },
    { icon: Plane, title: "Paid Vacations", a: "Qualify for annual mastermind trips to exotic locations where you can network with other elite partners and the FHX leadership team." },
    { icon: Calendar, title: "Quarterly Bonuses", a: "We reward consistency. Stay at the gold tier or higher for three consecutive months and receive an extra 10% on your total earnings." }
  ];

  const faqs = [
    { q: "How do I sign up as a partner?", a: "Joining the partner waitlist is the first step. Once we launch, we'll review your profile and activate your account within 24 hours." },
    { q: "How much can I earn as a partner?", a: "Earnings are uncapped. Platinum partners earn $20 per lot traded by their referrals. Some partners earn five figures monthly." },
    { q: "How do I track my referrals and earnings?", a: "Our proprietary partner portal gives you real-time data on every click, registration, and lot traded." },
    { q: "When and how do I get paid?", a: "We offer weekly payouts via multiple methods including wire transfer, USDT, and popular digital wallets." },
    { q: "What marketing materials do you provide?", a: "You'll have access to a full library of banners, social media kits, landing page templates, and educational content." },
    { q: "Is partner support available 24/7?", a: "Yes, our dedicated partner support team is available around the clock to help you optimize your campaigns." },
    { q: "Can I create multiple referral links?", a: "Absolutely. Create as many tracking links as you need to test different traffic sources and campaigns." },
    { q: "What is the minimum trading volume requirement?", a: "There is no minimum to start. You'll begin in the Bronze tier and automatically upgrade as your network's volume grows." }
  ];

  return (
    <div className="pt-40 pb-20 bg-black min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-32">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-8">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-blue-500 text-[10px] font-black tracking-widest uppercase">Partner Program</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter uppercase leading-none">
            Earn Up to <span className="liquid-text">$20</span> <br /> Per Trade
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto font-bold tracking-tight mb-8">
            Industry-leading affiliate payouts designed for creators, influencers, and finance partners who want to monetize their audience
          </p>
          <p className="text-blue-500 text-[10px] font-black uppercase tracking-widest mb-12">500+ partners already registered for early access</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-32">
             <button onClick={onOpenWaitlist} className="px-10 py-5 hero-gradient text-white font-black text-xl rounded-xl uppercase shadow-lg shadow-blue-500/20">Join Waitlist</button>
             <button className="px-10 py-5 border-2 border-white/20 text-white font-black text-xl rounded-xl uppercase hover:bg-white/5 transition-all">Book a Strategy Call</button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mb-40">
           <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 max-w-5xl mx-auto text-center relative">
              <div className="hidden lg:block absolute bottom-1/2 left-0 right-0 h-px bg-white/5 -z-10" />
              {[
                { icon: Users, val: "26,000+", label: "Partners Worldwide" },
                { icon: Coins, val: "4.6M+", label: "In Commissions Paid" },
                { icon: Download, val: "550,000+", label: "Withdrawals Processed" },
                { icon: Zap, val: "<3ms", label: "Execution Speed" }
              ].map((s, i) => (
                <div key={i} className="flex flex-col items-center">
                   <div className="w-12 h-12 bg-white/[0.02] border border-white/5 rounded-full flex items-center justify-center mb-6">
                      <s.icon className="text-blue-500" size={20} />
                   </div>
                   <p className="text-4xl font-black text-white mb-2">{s.val}</p>
                   <p className="text-slate-600 text-[10px] font-black uppercase tracking-widest">{s.label}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Benefits Grid */}
        <div className="mb-40">
           <h2 className="text-4xl md:text-6xl font-black text-white text-center mb-4 tracking-tighter uppercase">Partner <span className="liquid-text">Benefits</span></h2>
           <p className="text-slate-500 text-center text-sm font-bold uppercase mb-20 tracking-widest">Professional tools and support to maximize your earnings</p>
           
           <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { icon: Coins, title: "Top-Tier Referral Earnings", desc: "Receive competitive payouts of up to $20 per lot traded by your referrals." },
                { icon: BarChart3, title: "Real-Time Tracking Dashboard", desc: "Access detailed reports on traffic, conversions, and commissions 24/7." },
                { icon: Link2, title: "Custom Referral Links", desc: "Create unlimited tracking links with custom parameters to optimize campaigns." },
                { icon: ImageIcon, title: "Branded Marketing Assets", desc: "High-quality banners, landing pages, and social media kits ready for deployment." },
                { icon: Headphones, title: "Dedicated Support & Training", desc: "Get personal assistance from expert affiliate managers to grow your business." }
              ].map((b, i) => (
                <div key={i} className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 text-center group hover:border-blue-500/30 transition-all h-full flex flex-col items-center">
                   <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-all group-hover:text-white">
                      <b.icon size={24} />
                   </div>
                   <h3 className="text-xl font-bold text-white mb-4">{b.title}</h3>
                   <p className="text-slate-500 text-xs leading-relaxed font-bold uppercase tracking-tight">{b.desc}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Start Earning Steps */}
        <div className="mb-40">
           <h2 className="text-4xl md:text-6xl font-black text-white text-center mb-4 tracking-tighter uppercase">Start Earning in <span className="liquid-text">3 Steps</span></h2>
           <p className="text-slate-500 text-center text-sm font-bold uppercase mb-20 tracking-widest">Simple process, powerful results</p>
           
           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-blue-500/10 -z-10" />
              {[
                { step: "01", icon: UserPlus, title: "Join the Waitlist", desc: "Sign up for partner early access. Get your unique referral link and marketing materials." },
                { step: 2, icon: Link2, title: "Share with Your Audience", desc: "Promote LIQUIDHEROX using your custom link on social media, YouTube, blogs, or email." },
                { step: 3, icon: BarChart3, title: "Earn Per Trade", desc: "Get paid up to $20 for every lot your referrals trade. Track everything in real-time." }
              ].map((s, i) => (
                <div key={i} className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 text-center relative group hover:bg-black/80 transition-all">
                   <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 text-white font-black text-xs rounded-full">{typeof s.step === 'string' ? s.step : '0' + s.step}</div>
                   <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-all">
                      <s.icon className="text-blue-500" size={32} />
                   </div>
                   <h3 className="text-2xl font-black text-white mb-4">{s.title}</h3>
                   <p className="text-slate-500 text-sm leading-relaxed font-medium">{s.desc}</p>
                </div>
              ))}
           </div>
        </div>

        {/* Tiered Earning Structure (Uses constants but ensures blue styling here) */}
        <div className="mb-40">
           <h2 className="text-4xl md:text-6xl font-black text-white text-center mb-4 tracking-tighter uppercase">Tiered <span className="liquid-text">Earning</span> Structure</h2>
           <p className="text-slate-500 text-center text-sm font-bold uppercase mb-20 tracking-widest">Automatic tier upgrades based on monthly trading volume</p>
           
           <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {PARTNER_TIERS.map((tier, i) => (
                <div key={i} className={`relative p-8 rounded-3xl border flex flex-col items-center bg-white/[0.02] transition-all hover:scale-105 ${tier.featured ? 'border-blue-500 bg-blue-500/5 shadow-2xl' : 'border-white/5'}`}>
                   {tier.featured && <div className="absolute -top-4 px-4 py-1 bg-blue-500 text-white text-[8px] font-black uppercase rounded-full">Highest Payouts</div>}
                   <div className="text-3xl mb-4">{tier.icon}</div>
                   <h3 className="text-xs font-black text-white mb-8 tracking-[0.2em] uppercase">{tier.name}</h3>
                   
                   <div className="text-center mb-4">
                      <p className="text-5xl font-black text-blue-500 mb-1">{tier.rate}</p>
                      <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">per lot</p>
                   </div>
                   
                   <p className="text-slate-600 text-[10px] font-bold uppercase mb-12 tracking-tight">{tier.volume}</p>
                   
                   <div className="w-full h-px bg-white/5 mb-8" />
                   
                   <div className="flex-1 space-y-4 mb-10 w-full">
                      <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest mb-4">Includes:</p>
                      {tier.benefits.map((b, bi) => (
                        <div key={bi} className="flex gap-2 text-xs text-slate-400">
                           <CheckCircle2 size={14} className="text-blue-500 shrink-0" />
                           <span className="font-medium tracking-tight">{b}</span>
                        </div>
                      ))}
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Incentives Accordion */}
        <div className="mb-40 max-w-4xl mx-auto">
           <h2 className="text-4xl md:text-6xl font-black text-white text-center mb-4 tracking-tighter uppercase">Partner <span className="liquid-text">Incentives</span></h2>
           <p className="text-slate-500 text-center text-sm font-bold uppercase mb-16 tracking-widest">Exclusive rewards for exceptional performance</p>
           
           <div className="space-y-4">
              {incentives.map((item, i) => (
                <div key={i} className="border border-white/10 rounded-2xl bg-black overflow-hidden">
                   <button 
                     onClick={() => setOpenIncentive(openIncentive === i ? null : i)}
                     className="w-full p-6 flex items-center justify-between group"
                   >
                      <div className="flex items-center gap-6">
                        <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                           <item.icon size={20} />
                        </div>
                        <span className="text-xl font-bold text-white uppercase tracking-tight">{item.title}</span>
                      </div>
                      <ChevronDown className={`text-slate-600 transition-transform ${openIncentive === i ? 'rotate-180' : ''}`} />
                   </button>
                   {openIncentive === i && (
                     <div className="p-8 pt-0 text-slate-400 text-sm leading-relaxed border-t border-white/5 mt-4">
                        <p className="pt-6">{item.a}</p>
                     </div>
                   )}
                </div>
              ))}
           </div>
        </div>

        {/* FAQs */}
        <div className="mb-40 max-w-3xl mx-auto">
           <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-5 h-5 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-500"><Gem size={12} /></div>
                <span className="text-blue-500 text-[10px] font-black uppercase tracking-widest">FAQ</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">Partner Program <span className="liquid-text">Questions</span></h2>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Everything you need to know about becoming a partner</p>
           </div>
           
           <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border border-white/5 rounded-2xl bg-white/[0.01] overflow-hidden">
                   <button 
                     onClick={() => setOpenFaq(openFaq === i ? null : i)}
                     className="w-full p-6 flex items-center justify-between text-left group"
                   >
                      <span className="font-bold text-white text-sm uppercase tracking-tight">{faq.q}</span>
                      <ChevronDown className={`text-slate-700 shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                   </button>
                   {openFaq === i && (
                     <div className="px-6 pb-6 text-slate-500 text-xs leading-relaxed font-medium">
                        {faq.a}
                     </div>
                   )}
                </div>
              ))}
           </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-4xl mx-auto text-center pb-20">
           <h2 className="text-4xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-none">Ready to <span className="liquid-text">Start Earning?</span></h2>
           <p className="text-slate-400 text-lg mb-16 font-bold tracking-tight">Join 500+ partners already registered for early access to our industry-leading program</p>
           
           <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <button onClick={onOpenWaitlist} className="px-12 py-6 hero-gradient text-white font-black text-xl rounded-xl uppercase shadow-2xl">Join Partner Waitlist</button>
              <button className="px-12 py-6 border-2 border-white/20 text-white font-black text-xl rounded-xl uppercase hover:bg-white/5">Questions? Book a Call</button>
           </div>
           
           <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-2 text-[10px] text-slate-600 font-black uppercase">
                 <Zap size={14} className="text-blue-500" />
                 <span>Instant approval</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-slate-600 font-black uppercase">
                 <BarChart3 size={14} className="text-blue-500" />
                 <span>Real-time tracking</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] text-slate-600 font-black uppercase">
                 <Coins size={14} className="text-blue-500" />
                 <span>Monthly payouts</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
