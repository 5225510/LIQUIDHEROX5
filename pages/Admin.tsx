
import React, { useState, useEffect } from 'react';
import { getWaitlistEntries } from '../services/supabase';
import { WaitlistEntry } from '../types';
import { LogOut, RefreshCcw, Search, User } from 'lucide-react';

const Admin: React.FC = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [entries, setEntries] = useState<WaitlistEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (user === 'fundedhero' && pass === 'FundedHero22!') {
      setIsAuth(true);
      sessionStorage.setItem('admin_auth', 'true');
    } else {
      alert('Invalid Credentials');
    }
  };

  useEffect(() => {
    if (sessionStorage.getItem('admin_auth') === 'true') setIsAuth(true);
  }, []);

  useEffect(() => {
    if (isAuth) fetchEntries();
  }, [isAuth]);

  const fetchEntries = async () => {
    setLoading(true);
    const { data, error } = await getWaitlistEntries();
    if (data) setEntries(data);
    setLoading(false);
  };

  if (!isAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4 bg-black">
        <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl">
          <h2 className="text-3xl font-black text-white mb-8 text-center uppercase tracking-tighter">Admin Portal</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="text" 
              placeholder="Username" 
              className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:border-blue-500/50"
              value={user}
              onChange={e => setUser(e.target.value)}
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:border-blue-500/50"
              value={pass}
              onChange={e => setPass(e.target.value)}
            />
            <button className="w-full py-4 hero-gradient text-white font-black rounded-xl hover:scale-105 transition-transform active:scale-95">LOGIN</button>
          </form>
        </div>
      </div>
    );
  }

  const filteredEntries = entries.filter(e => 
    e.email.toLowerCase().includes(search.toLowerCase()) || 
    (e.name?.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="pt-32 pb-20 min-h-screen bg-black">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
          <div>
            <h1 className="text-4xl font-black text-white uppercase tracking-tighter">Waitlist Dashboard</h1>
            <p className="text-slate-500 font-bold uppercase text-xs tracking-widest mt-2">Total Entries: {entries.length}</p>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={fetchEntries} className="p-3 bg-white/5 rounded-xl text-white hover:bg-white/10 transition-all">
              <RefreshCcw size={20} className={loading ? 'animate-spin' : ''} />
            </button>
            <button 
              onClick={() => { setIsAuth(false); sessionStorage.removeItem('admin_auth'); }}
              className="px-6 py-3 bg-red-500/10 border border-red-500/20 text-red-500 font-bold rounded-xl hover:bg-red-500/20 transition-all flex items-center gap-2 uppercase text-sm"
            >
              <LogOut size={18} /> Logout
            </button>
          </div>
        </div>

        <div className="mb-8 relative max-w-md">
          <Search className="absolute left-4 top-4 text-slate-500" size={20} />
          <input 
            type="text" 
            placeholder="Search by name or email..." 
            className="w-full pl-12 pr-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:border-blue-500/50 transition-all"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden overflow-x-auto shadow-2xl">
          <table className="w-full text-left">
            <thead className="bg-white/5 text-slate-400 text-xs font-black uppercase tracking-wider">
              <tr>
                <th className="px-8 py-6">User</th>
                <th className="px-8 py-6">Email</th>
                <th className="px-8 py-6">Phone</th>
                <th className="px-8 py-6">Joined Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {filteredEntries.map((e) => (
                <tr key={e.id} className="hover:bg-blue-500/[0.02] transition-colors">
                  <td className="px-8 py-6 flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400">
                      <User size={20} />
                    </div>
                    <span className="font-bold text-white">{e.name || 'Anonymous'}</span>
                  </td>
                  <td className="px-8 py-6 text-slate-400 font-medium">{e.email}</td>
                  <td className="px-8 py-6 text-slate-400 font-medium">{e.phone || '--'}</td>
                  <td className="px-8 py-6 text-slate-500 text-sm font-bold">
                    {new Date(e.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Admin;
