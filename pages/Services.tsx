
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Zap, Wrench, Sparkles, Cpu, Disc, 
  ChevronRight, Phone, Clock, ShieldAlert, CheckCircle2,
  ArrowRight, Truck
} from 'lucide-react';
import { brand, phoneHref } from '../lib/brand';

const services = [
  {
    id: 'collision',
    title: 'Precision Collision Repair',
    description: 'Our facility utilizes computerized frame-straightening technology to restore your vehicle\'s structural integrity to exact factory specifications.',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?auto=format&fit=crop&q=80&w=800',
    details: ['Computerized Frame Alignment', 'Structural Panel Replacement', 'Aluminum Repair Specialist', 'Unibody Restoration']
  },
  {
    id: 'paint',
    title: 'Expert Color Matching',
    description: 'Invisible repairs are our specialty. Our downdraft paint booths and computerized mixing ensure a flawless factory-finish blend.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800',
    details: ['Waterborne Eco-Paint', 'Multi-Stage Finishes', 'Clear Coat Restoration', 'Computerized Color Matching']
  },
  {
    id: 'dent',
    title: 'Paintless Dent Repair (PDR)',
    description: 'Remove door dings and hail damage without affecting your original paint finish. Fast, cost-effective, and insurance-approved.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800',
    details: ['Hail Damage Repair', 'Door Ding Removal', 'Lease Return Preparation', 'Preserves Factory Paint']
  },
  {
    id: 'restoration',
    title: 'Exotic & Classic Restoration',
    description: 'For the enthusiast who demands perfection. Complete ground-up restorations for classic, muscle, and luxury exotic vehicles.',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800',
    details: ['Custom Fabrication', 'Show-Quality Paint', 'Period-Correct Sourcing', 'Engine Bay Detail']
  },
  {
    id: 'adas',
    title: 'ADAS Calibration & Safety',
    description: 'Modern vehicles require precise calibration of cameras and sensors after a collision. We ensure your safety systems are 100% active.',
    icon: Cpu,
    image: 'https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?auto=format&fit=crop&q=80&w=800',
    details: ['Radar/Camera Recalibration', 'Safety Sensor Testing', 'Electrical Diagnostics', 'SRS Airbag Verification']
  },
  {
    id: 'fleet',
    title: 'Fleet Management Solutions',
    description: `Specialized priority service for ${brand.region} fleets. We minimize downtime with rapid-turnaround collision and cosmetic maintenance.`,
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800',
    details: ['Priority Scheduling', 'Consolidated Billing', 'Rapid Repair Cycles', 'Bulk Maintenance Discounts']
  }
];

const Services: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-28 md:pt-48 pb-24 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=1920" 
            alt="Service Bay" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 mb-8">
            <div className="w-12 h-1.5 bg-red-600"></div>
            <span className="text-red-500 font-black uppercase tracking-[0.4em] text-xs italic">{brand.regionShort} Collision Specialists</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase italic font-heading leading-none mb-8">
            FACTORY REPAIR <br />
            <span className="text-transparent text-stroke-red">SOLUTIONS</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed font-medium mx-auto md:mx-0">
            Factory-certified body work and precision paint for {brand.region} drivers. We handle the paperwork, so you can focus on the road.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((s) => (
              <div key={s.id} className="group flex flex-col bg-white shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-200">
                <div className="relative aspect-video overflow-hidden">
                  <img src={s.image} alt={s.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute top-6 left-6 bg-red-600 text-white p-3 rounded-sm transform -skew-x-12 shadow-xl">
                    <s.icon className="w-5 h-5" />
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-black text-slate-900 uppercase italic font-heading mb-4 leading-tight">{s.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">{s.description}</p>
                  
                  <div className="space-y-3 mb-10 mt-auto">
                    {s.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle2 className="w-4 h-4 text-red-600 flex-shrink-0" />
                        <span className="text-[11px] font-black uppercase text-slate-700 tracking-widest">{detail}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/quote" className="inline-flex items-center text-[11px] font-black uppercase tracking-widest text-red-600 hover:text-slate-900 transition-colors group/btn">
                    Book Service <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Technical Process: Verbatim 9-step Workflow */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="text-red-500 font-black uppercase text-xs tracking-[0.4em] mb-4 block italic">Our Process</span>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase font-heading italic leading-none mb-6">
              WHEN WILL MY <br className="md:hidden" /> CAR BE <span className="text-red-600">READY?</span>
            </h2>
            <p className="text-slate-400 text-sm font-bold uppercase tracking-widest max-w-xl mx-auto">
              {brand.name} follows a rigorous 9-step restoration cycle to ensure factory safety standards are met on every job.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { n: '01', t: 'Estimate Preparation', d: `${brand.nameShort} (For Insurance) or Insurance Completes (For Shop). Vehicle owner signs "repair order" at shop.` },
              { n: '02', t: 'Insurance Negotiations', d: 'Insurance "negotiations" completed to ensure factory-standard repair coverage.' },
              { n: '03', t: 'Scheduling', d: 'Car scheduled for repairs. Estimated completion date given to the vehicle owner.' },
              { n: '04', t: 'Parts Logistics', d: 'Parts ordered and received. We verify all components against OEM specifications.' },
              { n: '05', t: 'Vehicle Teardown', d: 'Vehicle teardown and reinspection for hidden damage to ensure a complete repair.' },
              { n: '06', t: 'Supplement Submission', d: 'Supplements submitted, if needed, for authorized insurance coverage of hidden damage.' },
              { n: '07', t: 'Repair Operations', d: 'Repairs / Paint / Reassembly begins using factory-certified equipment and materials.' },
              { n: '08', t: 'Final Inspection', d: 'Final inspection / Test drive to verify performance, safety, and finish quality.' },
              { n: '09', t: 'Customer Delivery', d: 'Delivery to customer. Your vehicle is returned in pre-accident condition.' }
            ].map((step, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-sm relative group hover:border-red-600 transition-all duration-300">
                <div className="flex items-start justify-between mb-8">
                  <div className="bg-red-600/10 p-3 rounded group-hover:bg-red-600 transition-colors">
                    <span className="text-xl font-black text-red-600 group-hover:text-white font-heading italic">{step.n}</span>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-white/10 group-hover:text-red-600 transition-colors" />
                </div>
                <h4 className="text-white font-black uppercase text-base tracking-widest mb-4 italic leading-tight">{step.t}</h4>
                <p className="text-slate-400 text-xs leading-relaxed font-medium">{step.d}</p>
                <div className="absolute bottom-0 left-0 h-1 bg-red-600 w-0 group-hover:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance Claims Advocacy Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-slate-50 p-12 border-l-8 border-red-600 shadow-xl">
              <ShieldAlert className="w-12 h-12 text-red-600 mb-8" />
              <h3 className="text-3xl font-black text-slate-950 uppercase italic font-heading mb-6">Know Your Rights</h3>
              <p className="text-slate-600 text-sm leading-loose mb-8 font-medium">
                In the state of Kentucky, you have the legal right to choose where your vehicle is repaired. Insurance companies may try to "steer" you elsewhere. At {brand.nameShort}, we advocate for you, ensuring your car is fixed right.
              </p>
              <ul className="space-y-4">
                {[
                  "Direct billing to all major insurance carriers",
                  "OEM parts prioritization for maximum safety",
                  "Lifetime warranty on all body and paint work",
                  "Full paperwork handling for a stress-free claim"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-red-600" />
                    <span className="text-slate-900 text-xs font-bold uppercase tracking-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-4xl font-black text-slate-950 uppercase italic font-heading leading-tight">We Handle the <span className="text-red-600">Paperwork</span> So You Don't Have To</h2>
              <p className="text-slate-500 text-lg leading-relaxed font-medium">
                Our administrative team manages the entire claims process from start to finish. We work directly with your adjuster to ensure every detail of your repair is covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/quote" className="bg-red-600 text-white px-10 py-5 font-black uppercase text-[10px] tracking-widest transform -skew-x-12 shadow-xl hover:bg-slate-950 transition-all text-center">
                  Request Quote
                </Link>
                <a href={phoneHref} className="border-2 border-slate-950 text-slate-950 px-10 py-5 font-black uppercase text-[10px] tracking-widest transform -skew-x-12 hover:bg-slate-950 hover:text-white transition-all text-center">
                  Call Shop
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="flex items-center space-x-8">
             <div className="hidden lg:flex p-6 bg-red-600 rounded-full shadow-2xl animate-pulse">
                <Phone className="w-8 h-8 text-white" />
             </div>
             <div>
               <h2 className="text-3xl font-black text-white uppercase italic font-heading mb-2">Technical Support Dispatch</h2>
               <p className="text-slate-500 font-bold uppercase text-[10px] tracking-widest">Available Mon-Sat 8AM - 6PM</p>
             </div>
          </div>
          <a href={phoneHref} className="text-4xl md:text-5xl font-black text-red-600 italic font-heading hover:text-white transition-colors">
            {brand.phone.display}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;
