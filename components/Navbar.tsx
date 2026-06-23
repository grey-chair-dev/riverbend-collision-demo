
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Car, Clock, ShieldCheck, MapPin } from 'lucide-react';
import { brand, phoneHref } from '../lib/brand';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white">
        {/* Upper Utility Bar — desktop only */}
        <div className={`hidden lg:block bg-slate-950 text-white py-2 border-b border-white/5 transition-all duration-300 ${scrolled ? 'h-0 opacity-0 -translate-y-full overflow-hidden' : 'opacity-100'}`}>
          <div className="page-container flex justify-between items-center text-[11px] font-bold uppercase tracking-widest">
            <div className="flex items-center space-x-6">
              <span className="flex items-center space-x-2">
                <ShieldCheck className="w-3.5 h-3.5 text-red-600" />
                <span>Direct Billing to All Insurers</span>
              </span>
              <span className="flex items-center space-x-2">
                <Clock className="w-3.5 h-3.5 text-red-600" />
                <span>Open: Mon-Sat | 8AM-6PM</span>
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-3 h-3 text-red-600" />
              <span>{brand.address.short}</span>
            </div>
          </div>
        </div>

        {/* Main Branding Bar */}
        <nav className={`transition-all duration-500 border-b ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2.5 border-slate-200' : 'bg-white py-3 border-transparent md:py-4'}`}>
          <div className="page-container flex justify-between items-center gap-3">
            <Link to="/" className="flex items-center group min-w-0 flex-1">
              <div className="bg-red-600 p-2 rounded shadow-lg flex-shrink-0 md:-skew-x-12">
                <Car className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div className="ml-3 flex flex-col min-w-0">
                <span className="text-base sm:text-lg md:text-2xl font-black uppercase tracking-tighter leading-none text-slate-900 italic truncate">
                  {brand.nameDisplay.primary}<span className="text-red-600">{brand.nameDisplay.accent}</span>
                </span>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.2em] font-black text-slate-400 truncate hidden sm:block">
                  {brand.tagline}
                </span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-10">
              <div className="flex items-center space-x-7">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-xs font-black uppercase tracking-widest transition-all hover:text-red-600 relative py-1 group ${location.pathname === link.path ? 'text-red-600' : 'text-slate-600'}`}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
                  </Link>
                ))}
              </div>

              <div className="flex items-center pl-8 border-l border-slate-200 space-x-6">
                <div className="flex flex-col text-right">
                  <span className="text-[10px] font-black uppercase text-slate-400">Emergency Support:</span>
                  <a href={phoneHref} className="text-sm font-black text-slate-900 hover:text-red-600 transition-colors">{brand.phone.display}</a>
                </div>
                <Link to="/quote" className="bg-slate-950 text-white px-6 py-3 rounded-sm font-black text-[11px] uppercase tracking-[0.2em] -skew-x-12 hover:bg-red-600 transition-all shadow-xl metallic-shine">
                  Free Estimate
                </Link>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              className="lg:hidden touch-target inline-flex items-center justify-center text-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 rounded-sm flex-shrink-0"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer — outside header so it never affects header height */}
      <div
        className={`mobile-drawer lg:hidden fixed inset-0 z-[100] bg-slate-950 text-white transition-transform duration-300 ease-out ${isOpen ? 'is-open' : ''}`}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col h-full pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
          <div className="flex justify-between items-center px-4 py-4 border-b border-white/10">
            <span className="text-lg font-black uppercase italic">
              {brand.nameDisplay.primary}<span className="text-red-600">{brand.nameMobile}</span>
            </span>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="touch-target inline-flex items-center justify-center p-2 border border-white/10 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`touch-target flex items-center px-3 py-3 text-xl font-black uppercase italic tracking-tighter rounded-sm transition-colors ${
                    location.pathname === link.path ? 'text-red-500 bg-white/5' : 'text-white hover:text-red-500'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>

          <div className="px-4 pb-4 space-y-3 border-t border-white/10 pt-4">
            <a
              href={phoneHref}
              className="touch-target flex items-center justify-center gap-2 w-full bg-white text-slate-900 py-4 font-black uppercase tracking-widest text-sm rounded-sm"
            >
              <Phone className="w-4 h-4" />
              Call {brand.phone.display}
            </a>
            <Link
              to="/quote"
              onClick={() => setIsOpen(false)}
              className="touch-target flex items-center justify-center w-full bg-red-600 text-white py-4 font-black uppercase tracking-widest text-sm rounded-sm"
            >
              Start Digital Estimate
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
