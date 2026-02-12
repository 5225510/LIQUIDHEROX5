import React from 'react';
import { 
  Shield, 
  Zap, 
  Rocket, 
  Globe, 
  TrendingUp, 
  BarChart3, 
  Headphones,
  MonitorSmartphone,
  Smartphone,
  Mail,
  Bell,
  LineChart,
  CheckCircle2,
  Gift,
  Trophy,
  Coins,
  Plane,
  Calendar,
  UserPlus,
  Link2,
  Image as ImageIcon
} from 'lucide-react';
import { Benefit, Tier } from './types';

export const COLORS = {
  primary: '#3b82f6',
  secondary: '#1d4ed8',
  bg: '#000000',
  glass: 'rgba(255, 255, 255, 0.03)'
};

export const LOGO_SVG = (className: string) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 20L80 80" stroke="#3b82f6" strokeWidth="12" strokeLinecap="round"/>
    <path d="M80 20L20 80" stroke="white" strokeWidth="12" strokeLinecap="round" opacity="0.8"/>
    <circle cx="50" cy="50" r="10" fill="#3b82f6" className="animate-pulse"/>
  </svg>
);

export const HERO_BENEFITS: Benefit[] = [
  { icon: Shield, title: "Instant Deposits", description: "Secure funding in seconds" },
  { icon: Globe, title: "Bank-Level Security", description: "Multi-layered protection" },
  { icon: Headphones, title: "24/7 Live Support", description: "Real human assistance" },
  { icon: MonitorSmartphone, title: "MetaTrader 5", description: "State of the art platform" }
];

export const CORE_FEATURES: Benefit[] = [
  { icon: Shield, title: "Priority Access", description: "Be first to access LIQUIDHEROX when we launch with exclusive early member benefits" },
  { icon: Zap, title: "0.0 Pip Spreads", description: "Trade at the exact price you want with raw spreads from 0.0 pips" },
  { icon: Rocket, title: "Instant Access", description: "Start trading in under 3 minutes with our streamlined onboarding" }
];

export const PARTNER_TIERS: Tier[] = [
  {
    name: "BRONZE TIER",
    icon: "🥉",
    rate: "$8",
    color: "from-blue-900 to-blue-700",
    borderColor: "border-blue-500/30",
    bgColor: "bg-blue-500/5",
    textColor: "text-blue-400",
    volume: "0-50 lots/month",
    benefits: ["Real-time tracking", "Custom referral links", "Marketing asset library"]
  },
  {
    name: "SILVER TIER",
    icon: "🥈",
    rate: "$10",
    color: "from-zinc-400 to-zinc-300",
    borderColor: "border-zinc-400/30",
    bgColor: "bg-zinc-400/5",
    textColor: "text-zinc-300",
    volume: "51-200 lots/month",
    benefits: ["Everything in Bronze", "Priority email support", "Monthly performance reports"]
  },
  {
    name: "GOLD TIER",
    icon: "🥇",
    rate: "$15",
    color: "from-blue-600 to-blue-400",
    borderColor: "border-blue-500/40",
    bgColor: "bg-blue-500/10",
    textColor: "text-blue-400",
    volume: "201-500 lots/month",
    benefits: ["Everything in Silver", "Dedicated account manager", "Custom landing pages"]
  },
  {
    name: "PLATINUM TIER",
    icon: "💎",
    rate: "$20",
    color: "from-blue-500 to-blue-300",
    borderColor: "border-blue-400/50",
    bgColor: "bg-blue-400/15",
    textColor: "text-blue-300",
    featured: true,
    volume: "500+ lots/month",
    benefits: ["Everything in Gold", "Priority support line", "VIP partner perks", "Early access to features", "Co-marketing opportunities"]
  }
];