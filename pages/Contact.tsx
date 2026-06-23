
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, Clock, MessageSquare, 
  Send, ChevronRight, Globe, ShieldCheck, 
  ExternalLink, Smartphone, CheckCircle2, Loader2
} from 'lucide-react';
import { brand, phoneHref, smsHref } from '../lib/brand';

const Contact: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1500);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-28 md:pt-48 pb-24 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=1920" 
            alt="Facility" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-1.5 bg-red-600"></div>
            <span className="text-red-500 font-black uppercase tracking-[0.4em] text-xs italic">Operational Support</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase italic font-heading leading-none mb-8">
            DIRECT <br />
            <span className="text-transparent text-stroke-red">COMMAND</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed font-medium">
            Emergency dispatch or general inquiry—our specialized team is standing by to assist with your collision recovery and restoration needs.
          </p>
        </div>
      </section>

      {/* Dispatch Cards */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 -mt-12 md:-mt-24 relative z-20">
            {[
              {
                title: "Emergency Dispatch",
                val: brand.phone.display,
                sub: "Immediate Voice Support",
                icon: Phone,
                link: phoneHref,
                color: "bg-red-600"
              },
              {
                title: "SMS Channel",
                val: `Text: ${brand.phone.smsDisplay}`,
                sub: "Photo & Status Updates",
                icon: Smartphone,
                link: smsHref,
                color: "bg-slate-900"
              },
              {
                title: "Physical Facility",
                val: brand.address.line1,
                sub: brand.address.line2,
                icon: MapPin,
                link: "https://goo.gl/maps",
                color: "bg-slate-800"
              }
            ].map((card, i) => (
              <a 
                key={i} 
                href={card.link}
                target={card.link.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className={`${card.color} text-white p-6 sm:p-8 md:p-10 rounded-sm shadow-2xl md:transform md:hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden touch-target block`}
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform">
                  <card.icon size={80} />
                </div>
                <card.icon className="w-8 h-8 mb-6" />
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60 mb-2">{card.title}</h3>
                <p className="text-lg sm:text-xl md:text-2xl font-black uppercase italic font-heading mb-1 break-words">{card.val}</p>
                <p className="text-xs font-medium text-white/70">{card.sub}</p>
                <div className="mt-8 flex items-center text-[9px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  Establish Connection <ChevronRight className="ml-2 w-3 h-3" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Form Column */}
            <div className="bg-white p-10 md:p-16 rounded-sm shadow-2xl border border-slate-200">
              <div className="mb-12">
                <h2 className="text-3xl font-black text-slate-950 uppercase italic font-heading mb-4">Communication Portal</h2>
                <p className="text-slate-500 text-sm font-medium">Transmit your inquiry directly to our administrative desk.</p>
              </div>

              {sent ? (
                <div className="py-20 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-950 uppercase italic font-heading mb-2">Message Transmitted</h3>
                  <p className="text-slate-500 text-sm mb-8">A specialist will review your inquiry shortly.</p>
                  <button onClick={() => setSent(false)} className="text-red-600 font-black uppercase text-xs tracking-widest hover:underline italic">Send another message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Full Name</label>
                      <input required type="text" className="w-full bg-slate-50 border-b-2 border-slate-200 px-0 py-3 text-slate-950 font-bold focus:outline-none focus:border-red-600 transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Email Address</label>
                      <input required type="email" className="w-full bg-slate-50 border-b-2 border-slate-200 px-0 py-3 text-slate-950 font-bold focus:outline-none focus:border-red-600 transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Inquiry Type</label>
                    <select className="w-full bg-slate-50 border-b-2 border-slate-200 px-0 py-3 text-slate-950 font-bold focus:outline-none focus:border-red-600 transition-colors appearance-none">
                      <option>General Support</option>
                      <option>Insurance Claim Assistance</option>
                      <option>Restoration Consultation</option>
                      <option>Fleet Management Inquiry</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Inquiry Details</label>
                    <textarea required rows={4} className="w-full bg-slate-50 border border-slate-200 p-4 text-slate-950 font-medium focus:outline-none focus:border-red-600 transition-colors"></textarea>
                  </div>
                  <button 
                    disabled={loading}
                    className="w-full bg-slate-950 text-white py-5 font-black uppercase tracking-[0.4em] text-xs transition-all hover:bg-red-600 shadow-xl flex items-center justify-center transform -skew-x-12"
                  >
                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Send className="w-4 h-4 mr-3" /> Transmit Inquiry</>}
                  </button>
                </form>
              )}
            </div>

            {/* Info Column */}
            <div className="space-y-12">
              <div className="bg-slate-950 p-12 text-white rounded-sm shadow-2xl relative overflow-hidden border-t-8 border-red-600">
                <div className="relative z-10">
                  <h3 className="text-2xl font-black uppercase italic font-heading mb-10">Facility Operations</h3>
                  <div className="space-y-10">
                    <div className="flex items-start space-x-6">
                      <Clock className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest block mb-2">Service Hours</span>
                        <p className="text-lg font-bold">Mon - Fri: 8:00 AM - 6:00 PM</p>
                        <p className="text-lg font-bold">Sat: 9:00 AM - 2:00 PM</p>
                        <p className="text-red-600 text-xs font-black uppercase mt-2 italic">Sunday Closed for Detailing</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-6">
                      <Globe className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest block mb-2">Social Hub</span>
                        <div className="flex space-x-4 mt-2">
                          {['FB', 'IG', 'TW', 'LI'].map(s => (
                            <button key={s} className="w-10 h-10 bg-white/5 hover:bg-red-600 rounded flex items-center justify-center text-[10px] font-black transition-all">{s}</button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-8 border border-slate-200 rounded-sm">
                  <ShieldCheck className="w-8 h-8 text-red-600 mb-4" />
                  <h4 className="text-sm font-black uppercase italic text-slate-950 mb-2">Insurance Support</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">Direct handling of all paperwork with major carriers.</p>
                </div>
                <div className="bg-white p-8 border border-slate-200 rounded-sm">
                  <MessageSquare className="w-8 h-8 text-red-600 mb-4" />
                  <h4 className="text-sm font-black uppercase italic text-slate-950 mb-2">Technical Guidance</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">Expert advice on structural integrity and OEM parts.</p>
                </div>
              </div>

              <div className="bg-red-600 p-10 rounded-sm text-white shadow-2xl relative overflow-hidden group cursor-pointer">
                <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:rotate-12 transition-transform">
                  <ExternalLink size={60} />
                </div>
                <h4 className="text-xl font-black uppercase italic font-heading mb-4 leading-tight">Need a Digital <br /> Quote instead?</h4>
                <p className="text-white/80 text-xs font-medium mb-6">Skip the visit. Send us photos for a professional analysis within 4 hours.</p>
                <Link to="/quote" className="inline-block bg-slate-950 text-white px-8 py-3 font-black uppercase text-[10px] tracking-widest transform -skew-x-12 hover:bg-white hover:text-slate-950 transition-all">
                  Access Digital Portal
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Styled Map Placeholder Section */}
      <section className="h-[500px] relative bg-slate-200 overflow-hidden group">
        <img 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1920" 
          alt="Map" 
          className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-[5s]"
        />
        <div className="absolute inset-0 bg-slate-950/20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white p-12 rounded-sm shadow-2xl text-center max-w-sm transform -rotate-2">
            <MapPin className="w-12 h-12 text-red-600 mx-auto mb-6" />
            <h3 className="text-2xl font-black text-slate-950 uppercase italic font-heading mb-2">The Facility</h3>
            <p className="text-slate-500 text-sm font-medium mb-8">{brand.address.full}</p>
            <a 
              href="https://goo.gl/maps" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center text-red-600 font-black uppercase text-xs tracking-widest hover:text-slate-950 transition-colors"
            >
              Get GPS Directions <ExternalLink className="ml-2 w-3 h-3" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
