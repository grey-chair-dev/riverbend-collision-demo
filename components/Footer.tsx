
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Clock, Facebook, Instagram, Twitter, Linkedin, ChevronRight, Car } from 'lucide-react';
import { brand, copyrightLine, phoneHref } from '../lib/brand';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-16 md:pt-24 pb-8 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 mb-12 md:mb-20">
          <div>
            <div className="flex items-center space-x-2 mb-8">
              <div className="bg-red-600 p-1.5 rounded transform rotate-3">
                <Car className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-black uppercase tracking-tighter italic font-heading">{brand.nameShort}</span>
            </div>
            <p className="text-slate-400 text-sm leading-loose mb-10">
              {brand.name} is a fictional collision center serving {brand.region}. This portfolio demo showcases conversion-focused design for local auto body shops.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-3 bg-white/5 hover:bg-red-600 rounded text-slate-400 hover:text-white transition-all"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="p-3 bg-white/5 hover:bg-red-600 rounded text-slate-400 hover:text-white transition-all"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="p-3 bg-white/5 hover:bg-red-600 rounded text-slate-400 hover:text-white transition-all"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="p-3 bg-white/5 hover:bg-red-600 rounded text-slate-400 hover:text-white transition-all"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-black uppercase font-heading mb-10 italic border-b border-red-600 w-max pb-2">Our Services</h4>
            <ul className="space-y-4">
              {[
                "Collision Repair", "Paint Less", "Wheel Replacement", "Headlight", "Glass Repair", "Bumper Repair", "Spring Balance", "Vehicle Full"
              ].map(item => (
                <li key={item} className="flex items-center group cursor-pointer">
                  <div className="bg-red-600/20 group-hover:bg-red-600 p-1 rounded-sm mr-3 transition-colors">
                     <ChevronRight className="w-3 h-3 text-red-600 group-hover:text-white" />
                  </div>
                  <span className="text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black uppercase font-heading mb-10 italic border-b border-red-600 w-max pb-2">Site Map</h4>
            <ul className="space-y-4">
              {[
                { n: "Home", p: "/" }, { n: "About Us", p: "/about" }, { n: "Our Work", p: "/gallery" }, { n: "Contact Us", p: "/contact" }, { n: "Online Estimates", p: "/quote" }, { n: "Terms & Conditions", p: "/terms" }, { n: "Privacy Policy", p: "/privacy" }
              ].map(item => (
                <li key={item.n} className="flex items-center group">
                  <div className="bg-red-600/20 group-hover:bg-red-600 p-1 rounded-sm mr-3 transition-colors">
                     <ChevronRight className="w-3 h-3 text-red-600 group-hover:text-white" />
                  </div>
                  <Link to={item.p} className="text-slate-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-widest">{item.n}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-black uppercase font-heading mb-10 italic border-b border-red-600 w-max pb-2">Contact</h4>
            <div className="space-y-8">
               <div className="flex space-x-4">
                  <div className="p-3 bg-red-600/10 rounded-full h-max"><Phone className="w-5 h-5 text-red-600" /></div>
                  <div>
                    <div className="text-[10px] font-black uppercase text-slate-500 mb-1">For Repair Support</div>
                    <a href={phoneHref} className="text-lg font-black hover:text-red-600 transition-colors">{brand.phone.display}</a>
                  </div>
               </div>
               <div className="flex space-x-4">
                  <div className="p-3 bg-red-600/10 rounded-full h-max"><Clock className="w-5 h-5 text-red-600" /></div>
                  <div>
                    <div className="text-[10px] font-black uppercase text-slate-500 mb-1">The Working Hours</div>
                    <div className="text-sm font-bold uppercase tracking-widest leading-loose">
                      Monday - Friday <br />
                      8:00 AM - 5:00 PM <br />
                      <span className="text-red-600">Sunday Closed</span>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em] text-center md:text-left">
            {copyrightLine()}
          </p>
          <div className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            Built by{' '}
            <a
              href={brand.agencyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-500 transition-colors"
            >
              {brand.agency}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
