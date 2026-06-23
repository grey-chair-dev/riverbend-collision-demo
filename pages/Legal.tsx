
import React from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';
import { brand } from '../lib/brand';

const legalPages = {
  terms: {
    title: 'Terms & Conditions',
    intro: `These terms apply to the ${brand.name} portfolio demo site only. ${brand.name} is a fictional business and does not provide real collision repair services.`,
    sections: [
      {
        heading: 'Demo use only',
        body: 'All content, contact details, phone numbers, and forms on this site are for demonstration purposes. Submissions are not processed by a real shop and no services will be performed.',
      },
      {
        heading: 'No warranties',
        body: 'This site is provided as-is for portfolio review. Grey Chair Digital makes no warranties regarding accuracy, availability, or fitness for any particular purpose.',
      },
      {
        heading: 'Limitation of liability',
        body: 'By using this demo site, you agree that Grey Chair Digital and its affiliates are not liable for any damages arising from use of this fictional business presentation.',
      },
    ],
  },
  privacy: {
    title: 'Privacy Policy',
    intro: `This privacy policy describes how the ${brand.name} demo site handles information. Because this is not a real business, no customer data is stored or used for service delivery.`,
    sections: [
      {
        heading: 'Information you submit',
        body: 'Quote requests, contact forms, and photo uploads on this demo are simulated in the browser. Do not submit sensitive personal information you would not want shown in a portfolio demo.',
      },
      {
        heading: 'Analytics & cookies',
        body: 'A production deployment may use standard analytics or session cookies. This local demo does not persist form data to a backend unless explicitly configured for testing.',
      },
      {
        heading: 'Third-party services',
        body: 'The demo may load fonts, images, or AI features from third-party providers. Refer to those providers’ policies when this site is deployed publicly.',
      },
    ],
  },
} as const;

const Legal: React.FC = () => {
  const { pathname } = useLocation();
  const pageKey = pathname === '/terms' ? 'terms' : pathname === '/privacy' ? 'privacy' : null;
  const content = pageKey ? legalPages[pageKey] : null;

  if (!content) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex flex-col">
      <section className="pt-48 pb-16 bg-slate-950">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-red-500 font-black uppercase tracking-[0.4em] text-xs italic">Legal</span>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic font-heading leading-tight mt-6 mb-6">
            {content.title}
          </h1>
          <p className="text-slate-400 leading-relaxed font-medium">{content.intro}</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 space-y-12">
          {content.sections.map((section) => (
            <div key={section.heading} className="border-l-4 border-red-600 pl-8">
              <h2 className="text-xl font-black text-slate-950 uppercase italic font-heading mb-3">{section.heading}</h2>
              <p className="text-slate-600 leading-relaxed text-sm">{section.body}</p>
            </div>
          ))}
          <p className="text-slate-500 text-xs font-bold uppercase tracking-widest pt-8 border-t border-slate-100">
            {brand.demoDisclaimer}{' '}
            <Link to="/" className="text-red-600 hover:text-slate-950 transition-colors">
              Return home
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Legal;
