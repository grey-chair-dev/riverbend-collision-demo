
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, ShieldCheck, Users, Target, History, 
  MapPin, Clock, CheckCircle2, ChevronRight, 
  ArrowRight, Shield
} from 'lucide-react';
import { brand, phoneHref } from '../lib/brand';

const insurancePartners = [
  { name: "Allstate", domain: "allstate.com" },
  { name: "American Family", domain: "amfam.com" },
  { name: "Cincinnati", domain: "cinfin.com" },
  { name: "Nationwide", domain: "nationwide.com" },
  { name: "Progressive", domain: "progressive.com" },
  { name: "State Auto", domain: "stateauto.com" },
  { name: "State Farm", domain: "statefarm.com" },
  { name: "The General", domain: "thegeneral.com" },
  { name: "Travelers", domain: "travelers.com" },
  { name: "Geico", domain: "geico.com" },
  { name: "Liberty Mutual", domain: "libertymutual.com" },
  { name: "Erie Insurance", domain: "erieinsurance.com" },
  { name: "Farmers", domain: "farmers.com" },
  { name: "Safeco", domain: "safeco.com" },
  { name: "The Hartford", domain: "thehartford.com" },
  { name: "Ohio Mutual", domain: "omig.com" },
  { name: "Grange", domain: "grangeinsurance.com" },
  { name: "Auto-Owners", domain: "auto-owners.com" }
];

const vendors = [
  { name: "3M", domain: "3m.com" },
  { name: "NCS", domain: "ncs-corp.com" },
  { name: "Klingspor", domain: "klingspor.com" },
  { name: "Salts Fire", domain: "salts.com" },
  { name: "Pettys", domain: "pettys.com" },
  { name: "Keystone", domain: "lkqcorp.com" },
  { name: "Enterprise", domain: "enterprise.com" },
  { name: "Crest", domain: "crestauto.com" },
  { name: "CertiFit", domain: "certifit.com" },
  { name: "Continental Auto Parts", domain: "continentalparts.com" },
  { name: "Bexley Automotive", domain: "bexleyautomotive.com" },
  { name: "APO", domain: "apo-auto.com" },
  { name: "1-800-Radiator", domain: "1800radiator.com" },
  { name: "Advance Auto Parts", domain: "advanceautoparts.com" },
  { name: "AutoZone", domain: "autozone.com" },
  { name: "O'Reilly", domain: "oreillyauto.com" },
  { name: "BlastOne", domain: "blastone.com" },
  { name: "WASCO", domain: "wascoproducts.com" }
];

const LogoWall = ({ title, subTitle, logos, dark = false }: { title: string, subTitle: string, logos: {name: string, domain: string}[], dark?: boolean }) => (
  <section className={`py-24 ${dark ? 'bg-slate-950' : 'bg-white'}`}>
    <div className="max-w-7xl mx-auto px-6 text-center">
      <h2 className="text-4xl md:text-6xl font-black text-red-600 uppercase italic font-heading mb-4 tracking-tight leading-none">
        {title}
      </h2>
      <div className="w-20 h-0.5 bg-slate-200 mx-auto mb-8"></div>
      <p className={`text-xl md:text-2xl font-black text-red-600 uppercase italic font-heading mb-16 tracking-tight`}>
        {subTitle}
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
        {logos.map((logo, i) => (
          <div 
            key={i} 
            className={`flex flex-col items-center justify-center p-8 rounded-sm border transition-all duration-500 group relative overflow-hidden ${dark ? 'border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-red-600' : 'border-slate-100 bg-slate-50 hover:bg-white hover:border-red-600 hover:shadow-xl'}`}
          >
            <div className="relative w-full aspect-video flex items-center justify-center mb-4">
               <img 
                 src={`https://logo.clearbit.com/${logo.domain}?size=120`}
                 alt={logo.name}
                 className={`max-w-full max-h-full object-contain transition-all duration-700 filter grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110`}
                 onError={(e) => {
                   (e.target as HTMLImageElement).style.display = 'none';
                   const fallback = (e.target as HTMLImageElement).parentElement?.querySelector('.fallback');
                   if (fallback) fallback.classList.remove('hidden');
                 }}
               />
               <div className="fallback hidden absolute inset-0 flex items-center justify-center">
                  <span className={`text-[10px] font-black uppercase tracking-widest text-center ${dark ? 'text-slate-600 group-hover:text-white' : 'text-slate-400 group-hover:text-slate-900'}`}>
                    {logo.name}
                  </span>
               </div>
            </div>
            <span className={`text-[8px] font-black uppercase tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${dark ? 'text-red-500' : 'text-red-600'}`}>
              Riverbend Partner
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const About: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative site-header-offset pb-24 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://images.unsplash.com/photo-1590402444811-bfee29d1df90?auto=format&fit=crop&q=80&w=1920" 
            alt="Riverbend shop floor" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 to-slate-950"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-12 h-1.5 bg-red-600"></div>
            <span className="text-red-500 font-black uppercase tracking-[0.4em] text-xs italic">The Riverbend Standard</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase italic font-heading leading-none mb-8">
            OUR <br />
            <span className="text-transparent text-stroke-red">HERITAGE</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed font-medium">
            Defining automotive excellence in {brand.region} for over {brand.yearsInBusiness} years. We don't just fix cars—we restore the standard of safety and performance.
          </p>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800" 
                  alt="Craftsmanship" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-red-600 p-12 text-white shadow-2xl transform rotate-3 z-20 hidden md:block">
                <div className="text-5xl font-black font-heading italic leading-none">EST.</div>
                <div className="text-2xl font-black uppercase tracking-widest leading-tight mt-2">1999</div>
              </div>
              <div className="absolute -top-10 -left-10 w-64 h-64 bg-slate-100 -z-0 rounded-full blur-3xl opacity-50"></div>
            </div>

            <div className="space-y-8">
              <span className="text-red-600 font-black uppercase text-xs tracking-[0.4em] italic">A Legacy of Quality</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 uppercase font-heading italic leading-tight">
                Built on Trust, <br />
                Proven by <span className="text-red-600">Precision</span>
              </h2>
              <p className="text-slate-600 text-lg leading-loose font-medium">
                Founded in {brand.founded}, {brand.name} began with a single mission: to provide the {brand.city} community with a collision center that refuses to compromise on quality. What started as a small restoration shop has evolved into a state-of-the-art facility equipped with aerospace-grade technology.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                We believe that a repair shouldn't just look good—it must be structurally identical to its factory state. This commitment to "invisible repairs" has made us the trusted advocate for thousands of vehicle owners navigating the complexities of insurance claims.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-100">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-red-600">
                    <History className="w-5 h-5" />
                    <span className="font-black uppercase text-xs tracking-widest text-slate-900 italic">25+ Years</span>
                  </div>
                  <p className="text-slate-500 text-xs">Serving {brand.region} with integrity.</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-red-600">
                    <Target className="w-5 h-5" />
                    <span className="font-black uppercase text-xs tracking-widest text-slate-900 italic">100% Accuracy</span>
                  </div>
                  <p className="text-slate-500 text-xs">Computerized frame and color matching systems.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Partners Section - Added from Screenshots */}
      <LogoWall 
        title="INSURANCE PARTNERS" 
        subTitle="WE WILL WORK WITH 'YOUR' INSURANCE COMPANY" 
        logos={insurancePartners} 
        dark={true}
      />

      {/* Value Pillars */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-slate-950 uppercase italic font-heading mb-4">The Riverbend Pillars</h2>
            <div className="w-24 h-1.5 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Master Craftsmanship",
                desc: "Our technicians are I-CAR Gold Class certified, the highest industry recognition for training and excellence.",
                icon: Award
              },
              {
                title: "Absolute Integrity",
                desc: "We work for you, not the insurance company. We advocate for factory-correct parts and processes.",
                icon: ShieldCheck
              },
              {
                title: "Local Legacy",
                desc: "Proudly family-owned and operated. We live in the community we serve and stand by every repair.",
                icon: Users
              }
            ].map((pillar, i) => (
              <div key={i} className="bg-white p-12 rounded-sm shadow-sm hover:shadow-2xl transition-all duration-500 border-b-4 border-slate-100 hover:border-red-600">
                <div className="bg-red-600/10 w-16 h-16 rounded-full flex items-center justify-center mb-8">
                  <pillar.icon className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-black text-slate-900 uppercase italic font-heading mb-4">{pillar.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vendors Section - Added from Screenshots */}
      <LogoWall 
        title="OUR VENDORS" 
        subTitle="OUR PARTNERS" 
        logos={vendors} 
      />

      {/* Location & Commitment Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-red-600 font-black uppercase text-xs tracking-[0.4em] mb-4 block italic">Our Commitment</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 uppercase font-heading italic mb-8 leading-tight">
                Quality is <br /> 
                <span className="text-red-600">Non-Negotiable</span>
              </h2>
              <div className="space-y-6">
                {[
                  { t: "Lifetime Warranty", d: "We stand by our work for as long as you own the vehicle." },
                  { t: "Direct Claims", d: "We handle 100% of the paperwork with your insurance carrier." },
                  { t: "Digital Updates", d: "Track your repair progress through our photo notification system." }
                ].map((item, i) => (
                  <div key={i} className="flex space-x-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-sm flex items-center justify-center text-red-600 font-black italic border border-slate-100">
                      0{i+1}
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-slate-900 uppercase italic tracking-tight mb-1">{item.t}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-slate-950 p-12 text-white rounded-sm shadow-2xl relative">
              <h3 className="text-2xl font-black uppercase italic font-heading mb-10 border-b border-white/10 pb-4">{brand.regionShort} HQ</h3>
              <div className="space-y-10">
                <div className="flex items-start space-x-6">
                  <MapPin className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest block mb-2">Facility Address</span>
                    <p className="text-lg font-bold">{brand.address.line1}<br />{brand.address.line2}</p>
                  </div>
                </div>
                <div className="flex items-start space-x-6">
                  <Clock className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <span className="text-[10px] font-black uppercase text-slate-500 tracking-widest block mb-2">Operations</span>
                    <p className="text-lg font-bold">Monday - Friday: 8AM - 6PM<br />Saturday: 9AM - 2PM</p>
                  </div>
                </div>
                <Link to="/contact" className="inline-flex items-center text-red-500 font-black uppercase text-xs tracking-widest hover:text-white transition-colors">
                  Get Directions <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-red-600 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase italic font-heading mb-8 leading-tight">
            Trust {brand.region}'s <br /> Precision Specialists
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/quote" className="bg-slate-950 text-white px-12 py-5 font-black uppercase text-xs tracking-[0.3em] transform -skew-x-12 shadow-2xl hover:bg-white hover:text-slate-950 transition-all flex items-center justify-center">
              <span>Start Free Estimate</span>
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
            <a href={phoneHref} className="bg-white text-slate-950 px-12 py-5 font-black uppercase text-xs tracking-[0.3em] transform -skew-x-12 hover:bg-slate-950 hover:text-white transition-all flex items-center justify-center">
              Call The Shop
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
