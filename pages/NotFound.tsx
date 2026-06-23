
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { brand } from '../lib/brand';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col min-h-[60vh]">
      <section className="flex-grow flex items-center pt-40 pb-24 bg-slate-950">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <span className="text-red-500 font-black uppercase tracking-[0.4em] text-xs italic">404 — Route Not Found</span>
          <h1 className="text-6xl md:text-8xl font-black text-white uppercase italic font-heading leading-none mt-8 mb-6">
            OFF <span className="text-transparent text-stroke-red">ROUTE</span>
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed font-medium mb-12">
            That page doesn&apos;t exist on the {brand.nameShort} demo site. Head back to the homepage or request a quote.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/"
              className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-sm font-black uppercase text-xs tracking-[0.2em] transform -skew-x-12 transition-all inline-flex items-center justify-center space-x-3"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <Link
              to="/quote"
              className="bg-white hover:bg-slate-100 text-slate-900 px-10 py-5 rounded-sm font-black uppercase text-xs tracking-[0.2em] transform -skew-x-12 transition-all inline-flex items-center justify-center space-x-3"
            >
              <span>Get a Quote</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
