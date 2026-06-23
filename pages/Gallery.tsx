
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Camera, ChevronRight, ArrowRight, ShieldCheck, 
  Maximize2, Filter, Zap, Wrench, Sparkles 
} from 'lucide-react';
import { phoneHref } from '../lib/brand';

interface Project {
  id: string;
  title: string;
  category: 'collision' | 'paint' | 'restoration';
  beforeImg: string;
  afterImg: string;
  description: string;
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Porsche 911 GT3 Structural Repair',
    category: 'collision',
    beforeImg: 'https://images.unsplash.com/photo-1598501479153-6117f353f47c?auto=format&fit=crop&q=80&w=800', // Wrecked car placeholder
    afterImg: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80&w=800',
    description: 'Complete front-end reconstruction and computerized frame alignment.'
  },
  {
    id: '2',
    title: 'Custom "Midnight Candy" Paint',
    category: 'paint',
    beforeImg: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=800',
    afterImg: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800',
    description: 'Multi-stage metallic finish with ceramic clear coat.'
  },
  {
    id: '3',
    title: '1967 Mustang Shell Restoration',
    category: 'restoration',
    beforeImg: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=800',
    afterImg: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800',
    description: 'Ground-up restoration including custom fabrication and engine bay detail.'
  },
  {
    id: '4',
    title: 'Audi RS6 Quarter Panel Blend',
    category: 'collision',
    beforeImg: 'https://images.unsplash.com/photo-1486496146582-9ffcd0b2b2b7?auto=format&fit=crop&q=80&w=800',
    afterImg: 'https://images.unsplash.com/photo-1542282088-fe8426682b8f?auto=format&fit=crop&q=80&w=800',
    description: 'Invisible blend on difficult metallic silver factory paint.'
  }
];

const BeforeAfterCard: React.FC<{ project: Project }> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        {/* After Image (Visible by default) */}
        <img 
          src={project.afterImg} 
          alt={`${project.title} After`} 
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
        />
        {/* Before Image (Visible on hover) */}
        <img 
          src={project.beforeImg} 
          alt={`${project.title} Before`} 
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        />
        
        {/* Badge Overlay */}
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-red-600 text-white text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-sm transform -skew-x-12 shadow-lg">
            {isHovered ? 'Before Impact' : 'Post-Restoration'}
          </span>
        </div>

        <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-white/90 backdrop-blur p-2 rounded-full text-slate-900 shadow-xl">
            <Maximize2 className="w-4 h-4" />
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-red-600 font-black uppercase text-[9px] tracking-widest">{project.category}</span>
          <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
          <span className="text-slate-400 font-bold uppercase text-[9px] tracking-widest italic">I-CAR Certified</span>
        </div>
        <h3 className="text-lg font-black text-slate-950 uppercase italic font-heading mb-2 leading-tight group-hover:text-red-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-500 text-xs leading-relaxed mb-6">
          {project.description}
        </p>
        <Link to="/quote" className="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-slate-950 group/link">
          Get Similar Results <ArrowRight className="ml-2 w-3 h-3 text-red-600 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'collision' | 'paint' | 'restoration'>('all');

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="flex flex-col">
      {/* Cinematic Hero */}
      <section className="relative pt-48 pb-24 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-red-600 transform skew-x-12 translate-x-1/2"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-1.5 bg-red-600"></div>
            <span className="text-red-500 font-black uppercase tracking-[0.4em] text-xs italic">Visual Evidence</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase italic font-heading leading-[0.8] mb-8">
            HALL OF <br />
            <span className="text-transparent text-stroke-red">CRAFTSMANSHIP</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed font-medium">
            Browse our portfolio of factory-standard restorations and invisible collision repairs. Proof that excellence is never accidental.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-[72px] lg:top-[104px] z-40 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-slate-400" />
            <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest mr-4">Filter by:</span>
            <div className="flex bg-slate-50 p-1 rounded-sm border border-slate-200">
              {['all', 'collision', 'paint', 'restoration'].map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f as any)}
                  className={`px-4 py-1.5 text-[9px] font-black uppercase tracking-widest transition-all rounded-sm ${activeFilter === f ? 'bg-red-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-950'}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6 text-[10px] font-black uppercase text-slate-400 tracking-widest">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-3.5 h-3.5 text-red-600" />
              <span>Before/After Hover Enabled</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {filteredProjects.map((project) => (
              <BeforeAfterCard key={project.id} project={project} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="py-40 text-center">
              <Camera className="w-16 h-16 text-slate-200 mx-auto mb-6" />
              <h3 className="text-2xl font-black text-slate-300 uppercase italic">No projects found in this category</h3>
            </div>
          )}
        </div>
      </section>

      {/* Stats / Confidence Strip */}
      <section className="py-20 bg-slate-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: "Successful Repairs", val: "12,400+", icon: Wrench },
              { label: "Paint Matches", val: "100%", icon: Zap },
              { label: "Insurance Partners", val: "45+", icon: ShieldCheck },
              { label: "Client Referrals", val: "92%", icon: Sparkles },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center lg:items-start">
                <stat.icon className="w-6 h-6 text-red-600 mb-4" />
                <span className="text-3xl font-black text-white italic font-heading">{stat.val}</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-slate-950 uppercase italic font-heading mb-8 leading-tight">
            Want your car back in <br />
            <span className="text-red-600">Showroom Condition?</span>
          </h2>
          <p className="text-slate-500 text-lg mb-12 font-medium max-w-2xl mx-auto">
            Our head estimator will review your photos and provide a preliminary analysis within 4 business hours.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/quote" className="bg-red-600 text-white px-12 py-5 font-black uppercase text-xs tracking-[0.3em] transform -skew-x-12 shadow-2xl hover:bg-slate-950 transition-all flex items-center justify-center">
              <span>Start My Quote</span>
              <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
            <a href={phoneHref} className="border-2 border-slate-950 text-slate-950 px-12 py-5 font-black uppercase text-xs tracking-[0.3em] transform -skew-x-12 hover:bg-slate-950 hover:text-white transition-all flex items-center justify-center">
              Call Specialist
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
