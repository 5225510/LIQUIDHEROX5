
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import CfdTrading from './pages/CfdTrading';
import Partners from './pages/Partners';
import Admin from './pages/Admin';
import WaitlistModal from './components/WaitlistModal';
import MarketAssistant from './components/MarketAssistant';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-black text-white selection:bg-blue-500/30 selection:text-blue-400">
        <ScrollToTop />
        <Navbar onOpenWaitlist={() => setIsWaitlistOpen(true)} />
        
        <main>
          <Routes>
            <Route path="/" element={<Home onOpenWaitlist={() => setIsWaitlistOpen(true)} />} />
            <Route path="/about" element={<About onOpenWaitlist={() => setIsWaitlistOpen(true)} />} />
            <Route path="/cfd-trading" element={<CfdTrading onOpenWaitlist={() => setIsWaitlistOpen(true)} />} />
            <Route path="/partners" element={<Partners onOpenWaitlist={() => setIsWaitlistOpen(true)} />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>

        <Footer />
        
        {/* Floating AI Assistant */}
        <MarketAssistant />

        {/* Global Waitlist Modal */}
        <WaitlistModal 
          isOpen={isWaitlistOpen} 
          onClose={() => setIsWaitlistOpen(false)} 
        />
      </div>
    </Router>
  );
};

export default App;
