
import React, { useState } from 'react';
import { X, CheckCircle, AlertCircle, Shield } from 'lucide-react';
import { joinWaitlist } from '../services/supabase';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [position, setPosition] = useState<number | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const { data, error } = await joinWaitlist(name, email, phone);
      if (error) {
        if (error.code === '23505') {
          setErrorMessage("You're already on the waitlist!");
        } else {
          setErrorMessage("Something went wrong. Please try again.");
        }
        setStatus('error');
      } else {
        setPosition(data?.queuePosition || 1);
        setStatus('success');
      }
    } catch (err) {
      setErrorMessage("System error. Please try again.");
      setStatus('error');
    }
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative w-full max-w-lg bg-[#0a0a0a] border border-blue-500/20 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="absolute top-0 left-0 right-0 h-1 hero-gradient" />
        
        <button onClick={onClose} className="absolute top-4 right-4 p-2 text-white/40 hover:text-white transition-colors">
          <X size={24} />
        </button>

        <div className="p-8 md:p-12">
          {status === 'success' ? (
            <div className="text-center py-6">
              <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={48} className="text-green-500" />
              </div>
              <h2 className="text-3xl font-black text-white mb-2">Spot Secured!</h2>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full mb-6 border border-blue-500/20">
                <span className="text-blue-500 font-bold">#{position}</span>
                <span className="text-white/60 text-sm">in queue</span>
              </div>
              <p className="text-slate-400 mb-8 leading-relaxed">
                Check your inbox. We've sent you a confirmation email with your exclusive early access code.
              </p>
              <button onClick={onClose} className="w-full py-4 bg-white text-black font-bold rounded-xl">
                Done
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-8">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-500 text-xs font-bold rounded-full mb-4 inline-block tracking-widest uppercase">LAUNCHING Q1 2026</span>
                <h2 className="text-3xl font-black text-white mb-2 tracking-tight uppercase">Join the Waitlist</h2>
                <p className="text-slate-400">Secure your priority access and 0.0 pip spreads.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50 transition-colors placeholder:text-slate-600"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50 transition-colors placeholder:text-slate-600"
                />
                <input
                  type="tel"
                  placeholder="Phone Number (Optional)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500/50 transition-colors placeholder:text-slate-600"
                />

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-500 text-sm bg-red-500/5 p-3 rounded-lg border border-red-500/20">
                    <AlertCircle size={16} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 hero-gradient text-white font-black text-lg rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
                >
                  {status === 'loading' ? 'Securing Spot...' : 'SECURE MY SPOT NOW'}
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-slate-500 uppercase font-bold tracking-tighter">
                  <Shield size={14} className="text-blue-500" />
                  <span>100% Secure. No credit card required.</span>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WaitlistModal;
