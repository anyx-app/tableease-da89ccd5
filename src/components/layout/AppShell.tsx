import { Outlet, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function AppShell() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-[#3A86FF] selection:text-white">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3A86FF] to-[#FFBE0B] group-hover:scale-110 transition-transform duration-300" />
            <span className="text-2xl font-bold tracking-tight text-white">
              Table<span className="text-[#3A86FF]">Ease</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/restaurants" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Restaurants</Link>
            <Link to="/business" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">For Restaurateurs</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link 
              to="/login"
              className="text-sm font-medium px-4 py-2 hover:bg-white/5 rounded-full transition-colors text-slate-300 hover:text-white"
            >
              Sign In
            </Link>
            <Link 
              to="/signup"
              className="px-5 py-2.5 rounded-full bg-[#3A86FF] text-white text-sm font-semibold hover:bg-[#2563EB] hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#3A86FF]/25"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="pt-0">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-white/5 py-20 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-4">
              <span className="text-2xl font-bold text-white flex items-center gap-2">
                 <div className="w-6 h-6 rounded bg-gradient-to-br from-[#3A86FF] to-[#FFBE0B]" />
                 TableEase
              </span>
              <p className="text-slate-400 text-sm leading-relaxed">
                Effortless dining reservations at your fingertips. 
                Connecting discerning diners with the world's best restaurants.
              </p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Discover</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link to="/restaurants" className="hover:text-[#3A86FF] transition-colors">Browse Restaurants</Link></li>
                <li><Link to="/cities" className="hover:text-[#3A86FF] transition-colors">Dining Guides</Link></li>
                <li><Link to="/new" className="hover:text-[#3A86FF] transition-colors">New Arrivals</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Business</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link to="/business" className="hover:text-[#3A86FF] transition-colors">Partner with Us</Link></li>
                <li><Link to="/business/features" className="hover:text-[#3A86FF] transition-colors">Table Management</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link to="/privacy" className="hover:text-[#3A86FF] transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-[#3A86FF] transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} TableEase. All rights reserved.</p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-5 h-5 bg-slate-800 rounded-full hover:bg-[#3A86FF] transition-colors cursor-pointer" />
              <div className="w-5 h-5 bg-slate-800 rounded-full hover:bg-[#3A86FF] transition-colors cursor-pointer" />
              <div className="w-5 h-5 bg-slate-800 rounded-full hover:bg-[#3A86FF] transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
