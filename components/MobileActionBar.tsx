
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ChevronRight } from 'lucide-react';
import { brand, phoneHref } from '../lib/brand';

const MobileActionBar: React.FC = () => {
  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white/95 backdrop-blur-md shadow-[0_-8px_30px_rgba(15,23,42,0.12)]"
      style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}
    >
      <div className="flex gap-3 px-4 pt-3 max-w-lg mx-auto">
        <a
          href={phoneHref}
          className="touch-target flex-1 inline-flex items-center justify-center gap-2 bg-slate-950 text-white rounded-sm font-black uppercase text-[11px] tracking-widest px-4"
        >
          <Phone className="w-4 h-4 flex-shrink-0" />
          <span>Call</span>
        </a>
        <Link
          to="/quote"
          className="touch-target flex-1 inline-flex items-center justify-center gap-2 bg-red-600 text-white rounded-sm font-black uppercase text-[11px] tracking-widest px-4"
        >
          <span>Free Quote</span>
          <ChevronRight className="w-4 h-4 flex-shrink-0" />
        </Link>
      </div>
    </div>
  );
};

export default MobileActionBar;
