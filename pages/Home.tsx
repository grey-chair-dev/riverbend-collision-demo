
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, ArrowRight, ShieldCheck, Zap, Award, Star, 
  ChevronRight, Gauge, Wrench, Shield, Car, CheckCircle2,
  Sparkles
} from 'lucide-react';
import { brand, phoneHref } from '../lib/brand';

const topPartners = [
  { name: "Allstate", domain: "allstate.com" },
  { name: "American Family", domain: "amfam.com" },
  { name: "Nationwide", domain: "nationwide.com" },
  { name: "Progressive", domain: "progressive.com" },
  { name: "State Farm", domain: "statefarm.com" },
  { name: "Travelers", domain: "travelers.com" },
  { name: "Geico", domain: "geico.com" },
  { name: "Liberty Mutual", domain: "libertymutual.com" }
];

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1590402444811-bfee29d1df90?auto=format&fit=crop&q=80&w=1920" 
            alt="Autobody Excellence" 
            className="w-full h-full object-cover opacity-40 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-3 bg-red-600/10 border border-red-600/30 px-4 py-1.5 rounded-full mb-8">
              <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
              <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.3em]">{brand.regionShort} Collision Specialist</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black font-heading leading-[0.9] text-white uppercase tracking-tighter italic mb-8">
              PRECISION <br />
              <span className="text-stroke-red text-transparent">COLLISION</span> <br />
              RESTORATION
            </h1>
            
            <p className="text-xl text-slate-300 mb-12 leading-relaxed max-w-xl font-medium">
              Trusted by {brand.region} drivers for over {brand.yearsInBusiness} years. We provide factory-standard repairs, invisible paint matching, and handle all insurance paperwork.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <Link to="/quote" className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-sm font-black uppercase text-xs tracking-[0.2em] transform -skew-x-12 transition-all flex items-center justify-center space-x-3 metallic-shine">
                <span>Request A Quote</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
              <a href={phoneHref} className="bg-white hover:bg-slate-100 text-slate-900 px-10 py-5 rounded-sm font-black uppercase text-xs tracking-[0.2em] transform -skew-x-12 transition-all flex items-center justify-center space-x-3 shadow-2xl">
                <Phone className="w-4 h-4" />
                <span>Call {brand.phone.display}</span>
              </a>
            </div>

            <div className="mt-20 flex flex-wrap gap-10 opacity-60">
              <div className="flex items-center space-x-3 grayscale brightness-200">
                <Shield className="text-white w-8 h-8" />
                <span className="text-white font-black uppercase text-[10px] tracking-widest">I-CAR certified</span>
              </div>
              <div className="flex items-center space-x-3 grayscale brightness-200">
                <Award className="text-white w-8 h-8" />
                <span className="text-white font-black uppercase text-[10px] tracking-widest">A+ BBB rated</span>
              </div>
              <div className="flex items-center space-x-3 grayscale brightness-200">
                <Gauge className="text-white w-8 h-8" />
                <span className="text-white font-black uppercase text-[10px] tracking-widest">OEM Approved</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Trust Bar */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-black text-red-600 uppercase italic font-heading mb-2 tracking-tighter leading-none">INSURANCE PARTNERS</h2>
          <p className="text-[10px] font-black text-red-600 uppercase italic mb-12 tracking-[0.2em]">WE WILL WORK WITH 'YOUR' INSURANCE COMPANY</p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 lg:gap-20">
            {topPartners.map((partner, i) => (
              <div key={i} className="h-8 md:h-12 w-32 relative group">
                <img 
                  src={`https://logo.clearbit.com/${partner.domain}?size=120`}
                  alt={partner.name}
                  className="max-w-full max-h-full object-contain filter grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 cursor-default"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    const fallback = (e.target as HTMLImageElement).parentElement?.querySelector('.fallback');
                    if (fallback) fallback.classList.remove('hidden');
                  }}
                />
                <div className="fallback hidden absolute inset-0 flex items-center justify-center">
                   <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{partner.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Cert Strip */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            { label: "Lifetime Warranty", sub: "On all Body/Paint work" },
            { label: "All Insurance", sub: "We handle the paperwork" },
            { label: "OEM Parts", sub: "Factory standard quality" },
            { label: `${brand.regionShort} Native`, sub: "Trusted local experts" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center md:items-start border-l-2 border-red-600 pl-6">
              <span className="text-slate-950 font-black uppercase text-sm tracking-tight">{item.label}</span>
              <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{item.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3-Step Process: Conversion Oriented */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-red-600 font-black uppercase text-xs tracking-[0.4em] mb-4 block italic">Easy Restoration</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-950 uppercase font-heading italic leading-tight">Getting You Back On The Road <br /> In <span className="text-red-600">3 Simple Steps</span></h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="absolute top-1/2 left-0 w-full h-px bg-slate-100 hidden lg:block -z-0"></div>
            {[
              { n: '01', t: 'Submit Photos', d: 'Upload clear photos of your damage via our digital portal in under 60 seconds.' },
              { n: '02', t: 'Get Your Quote', d: 'Our expert estimators review your evidence and provide a professional assessment.' },
              { n: '03', t: 'Expert Repair', d: 'Drop off your vehicle and we handle the rest, including all insurance paperwork.' }
            ].map((step, i) => (
              <div key={i} className="relative z-10 bg-slate-50 p-12 rounded-sm border-t-4 border-red-600 shadow-lg group hover:-translate-y-2 transition-transform duration-500">
                <span className="text-6xl font-black text-red-600/10 group-hover:text-red-600/20 transition-colors absolute top-4 right-8 italic font-heading">{step.n}</span>
                <h4 className="text-xl font-black text-slate-950 uppercase italic font-heading mb-4">{step.t}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services: Modern Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-red-600 font-black uppercase text-xs tracking-[0.4em] mb-4 block italic">Expert Services</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 uppercase font-heading italic leading-[0.9]">
                Specialized in <br />
                <span className="text-red-600 underline decoration-4 underline-offset-8 decoration-red-600/20">{brand.regionShort} Auto Body</span>
              </h2>
            </div>
            <Link to="/services" className="text-slate-900 font-black uppercase text-[11px] tracking-widest flex items-center group">
              View All Services <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform text-red-600" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Collision Repair", 
                desc: "Full structural reconstruction and safety system recalibration following major impacts.",
                img: "https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?auto=format&fit=crop&q=80&w=800",
                icon: ShieldCheck
              },
              { 
                title: "Factory Paint", 
                desc: "Computerized color-matching and downdraft booth application for a showroom-perfect finish.",
                img: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800",
                icon: Zap
              },
              { 
                title: "Dent Restoration", 
                desc: "Paintless Dent Repair (PDR) and minor cosmetic fixes to preserve your vehicle's value.",
                img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800",
                icon: Sparkles
              }
            ].map((s, idx) => (
              <div key={idx} className="group bg-white flex flex-col h-full shadow-sm hover:shadow-2xl transition-all duration-500 relative">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute top-6 left-6 bg-red-600 text-white p-3 rounded-sm transform -skew-x-12 shadow-xl">
                    <s.icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-xl font-black text-slate-900 uppercase italic font-heading mb-4 leading-tight">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">{s.desc}</p>
                  <Link to="/services" className="mt-auto inline-flex items-center text-[10px] font-black uppercase tracking-widest text-red-600 hover:text-slate-900 transition-colors">
                    Learn Our Process <ChevronRight className="ml-1 w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Message Section */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-red-500 font-black uppercase text-xs tracking-[0.4em] mb-4 block italic">Insurance Advocacy</span>
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase font-heading italic leading-tight mb-10">
                We'll Handle the <span className="text-red-600">Paperwork</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-12 font-medium">
                Dealing with insurance adjusters is a hassle you don't need. Our administrative team manages the entire claim process, advocating for factory-standard parts and procedures so your car is returned to pre-accident safety and beauty.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center space-x-4">
                  <CheckCircle2 className="text-red-600 w-5 h-5" />
                  <span className="text-white font-black uppercase text-xs tracking-widest">Works with all Insurers</span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle2 className="text-red-600 w-5 h-5" />
                  <span className="text-white font-black uppercase text-xs tracking-widest">KY Right-to-Choose Support</span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle2 className="text-red-600 w-5 h-5" />
                  <span className="text-white font-black uppercase text-xs tracking-widest">Direct Billing to Carrier</span>
                </div>
                <div className="flex items-center space-x-4">
                  <CheckCircle2 className="text-red-600 w-5 h-5" />
                  <span className="text-white font-black uppercase text-xs tracking-widest">Zero Hassle Experience</span>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
               <img src="https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=1200" alt="Insurance Process" className="rounded shadow-2xl transform rotate-2 grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* Review Authority */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center space-x-1 text-red-600 mb-8">
            <Star className="fill-current w-6 h-6" /><Star className="fill-current w-6 h-6" /><Star className="fill-current w-6 h-6" /><Star className="fill-current w-6 h-6" /><Star className="fill-current w-6 h-6" />
          </div>
          <h2 className="text-3xl font-black uppercase italic text-slate-950 mb-10 tracking-tight">"{brand.nameShort} handled my insurance claim seamlessly. My car looks showroom new again. The paint match is absolutely invisible. Truly the best in {brand.regionShort}."</h2>
          <div className="flex flex-col items-center">
             <span className="font-black uppercase text-sm tracking-widest text-slate-900">David M. — Fort Thomas, KY</span>
             <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Verified Google Review</span>
          </div>
        </div>
      </section>

      {/* Triple CTA: Close the Sale */}
      <section className="py-20 bg-red-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-950/10 diagonal-section opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10 gap-12 text-center md:text-left">
          <div>
            <h2 className="text-4xl font-black text-white uppercase italic font-heading mb-2 leading-none">Ready to start?</h2>
            <p className="text-white/80 font-bold tracking-widest text-sm uppercase">Free digital quotes in 4 business hours or less.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/quote" className="bg-slate-950 text-white px-10 py-5 font-black uppercase text-xs tracking-widest transform -skew-x-12 hover:bg-white hover:text-slate-950 transition-all shadow-2xl">Request Quote</Link>
            <a href={phoneHref} className="bg-white text-slate-950 px-10 py-5 font-black uppercase text-xs tracking-widest transform -skew-x-12 hover:bg-slate-950 hover:text-white transition-all shadow-2xl">Call Now</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
