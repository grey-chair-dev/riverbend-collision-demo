
import React from 'react';
import { Link } from 'react-router-dom';
// Added missing ArrowRight icon import to resolve "Cannot find name 'ArrowRight'" error.
import { 
  Star, CheckCircle2, Quote, MessageSquare, 
  ThumbsUp, ExternalLink, ShieldCheck, ChevronRight,
  Award, Zap, Car, ArrowRight
} from 'lucide-react';
import { brand, phoneHref } from '../lib/brand';

interface Testimonial {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  service: string;
  text: string;
  verified: boolean;
}

const reviews: Testimonial[] = [
  {
    id: '1',
    author: 'Sarah Jenkins',
    location: 'Fort Thomas, KY',
    rating: 5,
    date: '2 days ago',
    service: 'Collision Repair',
    text: `After my accident, I was overwhelmed. ${brand.nameShort} handled the entire insurance claim for my Tesla. The panel alignment is perfect and the sensors work flawlessly. Truly the best in ${brand.regionShort}.`,
    verified: true
  },
  {
    id: '2',
    author: 'Michael Rossi',
    location: 'Florence, KY',
    rating: 5,
    date: '1 week ago',
    service: 'Custom Paint',
    text: "I brought in my vintage Alfa Romeo for a full respray. The color matching was a technical challenge, but they absolutely nailed it. The depth of the clear coat is incredible. Pure artistry.",
    verified: true
  },
  {
    id: '3',
    author: 'James T. Wilson',
    location: 'Newport, KY',
    rating: 5,
    date: '3 weeks ago',
    service: 'Dent Repair',
    text: "Had several door dings and hail damage. Their PDR guy is a magician. You cannot see where the dents were even under shop lights. Fast service and very professional staff.",
    verified: true
  },
  {
    id: '4',
    author: 'Elena Rodriguez',
    location: 'Edgewood, KY',
    rating: 5,
    date: '1 month ago',
    service: 'Insurance Claim',
    text: "They fought my insurance company to get OEM parts instead of cheap knock-offs. They really care about the safety of your vehicle. My BMW looks and drives like it's brand new.",
    verified: true
  },
  {
    id: '5',
    author: 'Robert Chen',
    location: 'Covington, KY',
    rating: 5,
    date: '2 months ago',
    service: 'Frame Alignment',
    text: `Structural damage is scary, but ${brand.nameShort} has the tech to fix it right. My truck tracks perfectly straight now. No rattles, no leaks. I wouldn't go anywhere else.`,
    verified: true
  },
  {
    id: '6',
    author: 'Amanda G.',
    location: 'Bellevue, KY',
    rating: 5,
    date: '3 months ago',
    service: 'Bumper Replacement',
    text: "Quick, transparent, and fair. They gave me a digital quote within hours and finished the work ahead of schedule. The lifetime warranty gives me great peace of mind.",
    verified: true
  }
];

const StarRating: React.FC<{ rating: number; size?: number }> = ({ rating, size = 16 }) => (
  <div className="flex space-x-0.5">
    {[...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        size={size} 
        className={i < rating ? "fill-red-600 text-red-600" : "text-slate-200"} 
      />
    ))}
  </div>
);

const Reviews: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-28 md:pt-48 pb-24 bg-slate-950 overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 grayscale pointer-events-none">
          <img src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1920" alt="background" className="w-full h-full object-cover" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center space-x-3 bg-red-600/10 border border-red-600/30 px-4 py-1.5 rounded-full mb-8">
            <ShieldCheck className="w-4 h-4 text-red-600" />
            <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.3em]">Verified Customer Proof</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-black text-white uppercase italic font-heading leading-[0.85] sm:leading-[0.8] mb-8 md:mb-12 px-2">
            THE <span className="text-transparent text-stroke-red">VERDICT</span>
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-16">
            <div className="flex flex-col items-center">
              <span className="text-5xl md:text-7xl font-black text-white italic font-heading mb-2">4.9</span>
              <StarRating rating={5} size={28} />
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 mt-4">2,400+ Google Reviews</span>
            </div>
            <div className="h-20 w-px bg-white/10 hidden md:block"></div>
            <div className="flex flex-col items-center">
              <span className="text-5xl md:text-7xl font-black text-white italic font-heading mb-2">100%</span>
              <span className="text-red-600 font-black uppercase text-2xl italic font-heading">Match</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 mt-2">Factory Paint Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Strip */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center md:justify-between items-center gap-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="flex items-center space-x-3">
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png" className="w-6 h-6" alt="Google" />
             <span className="font-black text-slate-900 uppercase tracking-tighter italic text-xl">Google Reviews</span>
          </div>
          <div className="flex items-center space-x-3">
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Yelp_Logo.svg/1200px-Yelp_Logo.svg.png" className="w-16 h-8 object-contain" alt="Yelp" />
             <span className="font-black text-slate-900 uppercase tracking-tighter italic text-xl">Top Rated</span>
          </div>
          <div className="flex items-center space-x-3">
             <Award className="w-8 h-8 text-slate-900" />
             <span className="font-black text-slate-900 uppercase tracking-tighter italic text-xl">BBB A+ Accredited</span>
          </div>
          <div className="flex items-center space-x-3">
             <ShieldCheck className="w-8 h-8 text-slate-900" />
             <span className="font-black text-slate-900 uppercase tracking-tighter italic text-xl">I-CAR Gold Class</span>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <span className="text-red-600 font-black uppercase text-xs tracking-[0.4em] mb-4 block italic">Client Stories</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-950 uppercase font-heading italic leading-tight">
                Craftsmanship That <br /> Speaks for <span className="text-red-600">Itself</span>
              </h2>
            </div>
            <Link to="/quote" className="bg-slate-950 text-white px-10 py-5 font-black uppercase text-[10px] tracking-widest transform -skew-x-12 hover:bg-red-600 transition-all shadow-xl flex items-center">
              Experience the Standard <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white border border-slate-200 p-10 rounded-sm shadow-sm hover:shadow-2xl transition-all duration-500 group relative">
                <div className="absolute top-10 right-10 text-slate-100 group-hover:text-red-600/10 transition-colors">
                  <Quote size={48} />
                </div>
                
                <div className="flex items-center space-x-2 mb-6">
                  <StarRating rating={review.rating} />
                </div>

                <p className="text-slate-600 text-sm leading-loose mb-10 italic font-medium relative z-10">
                  "{review.text}"
                </p>

                <div className="flex flex-col border-t border-slate-100 pt-8 mt-auto">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[9px] font-black uppercase text-red-600 tracking-widest bg-red-600/5 px-3 py-1 rounded-full border border-red-600/10">
                      {review.service}
                    </span>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                      {review.date}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-slate-950 font-black uppercase text-sm tracking-tight italic">
                        {review.author}
                      </h4>
                      <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                        {review.location}
                      </p>
                    </div>
                    {review.verified && (
                      <div className="flex items-center text-green-600 space-x-1 group/verified">
                        <CheckCircle2 size={14} className="group-hover/verified:scale-125 transition-transform" />
                        <span className="text-[9px] font-black uppercase tracking-widest">Verified</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* "Why We Are Top Rated" Authority Section */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
          <MessageSquare className="w-[800px] h-[800px] text-white" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-red-500 font-black uppercase text-xs tracking-[0.4em] mb-4 block italic">Quality Control</span>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase font-heading italic leading-none mb-10">
                A Reputation <br /> 
                Built One <br /> 
                <span className="text-red-600">Panel at a Time</span>
              </h2>
              
              <div className="space-y-12">
                {[
                  { 
                    t: "Transparent Estimation", 
                    d: "No hidden fees or unexpected supplements. We provide a breakdown of every nut, bolt, and hour required.",
                    icon: Zap
                  },
                  { 
                    t: "Photo Progress Reports", 
                    d: "See your car's journey. We send high-resolution updates during critical stages of repair and paint.",
                    icon: Car
                  },
                  { 
                    t: "Post-Repair Detail", 
                    d: "We don't just fix it—we detail it. Every collision repair leaves our shop cleaner than when it arrived.",
                    icon: Award
                  }
                ].map((item, i) => (
                  <div key={i} className="flex space-x-6">
                    <div className="bg-red-600 p-4 rounded-sm transform -skew-x-12 shadow-xl h-max">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-white uppercase italic tracking-tight mb-2">{item.t}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed max-w-md">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-12 md:p-20 rounded-sm shadow-2xl transform rotate-1 border-t-8 border-red-600">
               <div className="flex items-center space-x-2 text-slate-950 mb-10">
                 <ThumbsUp className="w-8 h-8 text-red-600" />
                 <h3 className="text-3xl font-black uppercase italic font-heading">Submit Your Story</h3>
               </div>
               <p className="text-slate-600 mb-10 leading-relaxed font-medium italic">"The process was flawless from start to finish. I'll never go anywhere else in {brand.regionShort}."</p>
               <div className="space-y-6">
                 <button className="w-full bg-slate-950 text-white py-5 font-black uppercase tracking-widest text-xs flex items-center justify-center space-x-3 transform -skew-x-12 hover:bg-red-600 transition-all shadow-xl">
                   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1200px-Google_%22G%22_logo.svg.png" className="w-4 h-4" alt="Google" />
                   <span>Review us on Google</span>
                   <ExternalLink className="w-3 h-3 ml-2" />
                 </button>
                 <Link to="/quote" className="w-full border-2 border-slate-950 text-slate-950 py-5 font-black uppercase tracking-widest text-xs flex items-center justify-center transform -skew-x-12 hover:bg-slate-950 hover:text-white transition-all">
                   Start Your Repair Journey
                 </Link>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Conversion Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black uppercase italic text-slate-950 mb-8 tracking-tight">Don't settle for "good enough" when it comes to your vehicle's safety.</h2>
          <div className="flex flex-col items-center">
             <StarRating rating={5} size={24} />
             <span className="text-[11px] font-black uppercase text-red-600 tracking-[0.4em] mt-6">{brand.regionShort}'s Highest Rated</span>
             <Link to="/quote" className="mt-12 group inline-flex items-center text-2xl font-black uppercase italic font-heading text-slate-950 hover:text-red-600 transition-colors">
               Get Your Free Quote <ChevronRight className="ml-2 w-8 h-8 group-hover:translate-x-4 transition-transform text-red-600" />
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
