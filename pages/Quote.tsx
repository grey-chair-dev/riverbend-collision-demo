
import React, { useState, useRef } from 'react';
import { 
  Camera, Send, CheckCircle, Info, Loader2, 
  X, ChevronLeft, ChevronRight, Phone 
} from 'lucide-react';
import { brand, phoneHref } from '../lib/brand';

const Quote: React.FC = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    description: '',
    insuranceInfo: '',
    preferredContact: 'text',
  });
  
  const [photos, setPhotos] = useState<File[]>([]);
  const formRef = useRef<HTMLFormElement>(null);

  const advanceToStep = (nextStep: 2 | 3) => {
    const form = formRef.current;
    if (!form) return;

    if (nextStep === 2) {
      for (const name of ['name', 'phone', 'email'] as const) {
        const field = form.elements.namedItem(name);
        if (field instanceof HTMLInputElement && !field.reportValidity()) return;
      }
      setStep(2);
      return;
    }

    const description = form.elements.namedItem('description');
    if (description instanceof HTMLTextAreaElement && !description.reportValidity()) return;
    setStep(3);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setPhotos(prev => [...prev, ...newFiles].slice(0, 5));
    }
  };

  const removePhoto = (index: number) => {
    setPhotos(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen site-header-offset pb-28 md:pb-24 px-4 sm:px-6 bg-slate-50 flex items-center justify-center">
        <div className="max-w-xl w-full bg-white p-8 sm:p-12 md:p-16 rounded-sm shadow-2xl text-center border-t-8 border-red-600">
          <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-10 shadow-xl metallic-shine">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 uppercase italic font-heading mb-4 leading-tight">Request Logged</h2>
          <p className="text-slate-500 mb-12 leading-relaxed font-medium">
            Thank you, {formData.name}. Our head estimator will review your photos and contact you via {formData.preferredContact} within 4 business hours.
          </p>
          <button 
            onClick={() => window.location.href = '#/'}
            className="w-full bg-slate-950 text-white py-5 font-black uppercase tracking-widest text-xs transition-all hover:bg-red-600"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen site-header-offset pb-28 md:pb-24 px-4 sm:px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-end justify-between mb-8 md:mb-12 gap-4">
          <div className="flex items-center space-x-4 md:space-x-6 min-w-0">
            <div className="w-10 md:w-16 h-2 bg-red-600 flex-shrink-0"></div>
            <div className="min-w-0">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 uppercase font-heading italic leading-none">FREE DIGITAL QUOTE</h1>
              <p className="text-slate-400 font-bold uppercase text-[10px] sm:text-[11px] tracking-[0.2em] sm:tracking-[0.3em] mt-2 sm:mt-3">Professional accuracy. Zero shop visit required.</p>
            </div>
          </div>
          <div className="text-slate-300 font-black text-4xl md:text-6xl italic font-heading leading-none flex-shrink-0 lg:hidden">0{step}</div>
          <div className="text-slate-300 font-black text-6xl italic font-heading leading-none hidden lg:block">0{step}</div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-sm shadow-2xl overflow-hidden border border-slate-200">
              {/* Progress Indicator */}
              <div className="h-1 bg-slate-100 w-full relative">
                <div 
                  className="h-full bg-red-600 transition-all duration-1000 ease-in-out" 
                  style={{ width: `${(step / 3) * 100}%` }}
                ></div>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="p-6 sm:p-10 md:p-16">
                {step === 1 && (
                  <div className="animate-in fade-in slide-in-from-right duration-500">
                    <h3 className="text-2xl font-black text-slate-950 uppercase italic font-heading mb-10 border-b border-slate-100 pb-4">Personal Logistics</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Full Name</label>
                        <input required name="name" value={formData.name} onChange={handleInputChange} type="text" className="w-full bg-slate-50 border-b-2 border-slate-200 px-0 py-3 text-slate-950 font-bold focus:outline-none focus:border-red-600 transition-colors" placeholder="Full Legal Name" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Phone Number</label>
                        <input required name="phone" value={formData.phone} onChange={handleInputChange} type="tel" className="w-full bg-slate-50 border-b-2 border-slate-200 px-0 py-3 text-slate-950 font-bold focus:outline-none focus:border-red-600 transition-colors" placeholder="(859) --- ----" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Email Address</label>
                        <input required name="email" value={formData.email} onChange={handleInputChange} type="email" className="w-full bg-slate-50 border-b-2 border-slate-200 px-0 py-3 text-slate-950 font-bold focus:outline-none focus:border-red-600 transition-colors" placeholder="user@example.com" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Preferred Contact</label>
                        <select name="preferredContact" value={formData.preferredContact} onChange={handleInputChange} className="w-full bg-slate-50 border-b-2 border-slate-200 px-0 py-3 text-slate-950 font-bold focus:outline-none focus:border-red-600 transition-colors appearance-none">
                          <option value="text">SMS / Text Message</option>
                          <option value="call">Voice Call</option>
                          <option value="email">Email Analysis</option>
                        </select>
                      </div>
                    </div>
                    <div className="mt-16 flex justify-end">
                      <button type="button" onClick={() => advanceToStep(2)} className="touch-target w-full sm:w-auto bg-slate-950 hover:bg-red-600 text-white px-8 sm:px-12 py-4 sm:py-5 font-black uppercase tracking-widest text-[11px] transition-all flex items-center justify-center sm:justify-end sm:ml-auto transform sm:-skew-x-12">
                        Continue to Damage Info <ChevronRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="animate-in fade-in slide-in-from-right duration-500 space-y-12">
                    <h3 className="text-2xl font-black text-slate-950 uppercase italic font-heading mb-10 border-b border-slate-100 pb-4">Incident Breakdown</h3>
                    
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Detail the Damage</label>
                      <textarea required name="description" value={formData.description} onChange={handleInputChange} className="w-full bg-slate-50 border border-slate-200 p-6 text-slate-950 font-medium focus:outline-none focus:border-red-600 transition-colors min-h-[180px]" placeholder="Explain where the impact occurred and any mechanical changes you've noticed..."></textarea>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Insurance Partner</label>
                      <input name="insuranceInfo" value={formData.insuranceInfo} onChange={handleInputChange} type="text" className="w-full bg-slate-50 border-b-2 border-slate-200 px-0 py-3 text-slate-950 font-bold focus:outline-none focus:border-red-600 transition-colors" placeholder="Carrier Name & Claim # if available" />
                    </div>

                    <div className="pt-10 flex justify-between items-center">
                      <button type="button" onClick={() => setStep(1)} className="text-slate-400 hover:text-red-600 font-black uppercase text-[11px] tracking-[0.2em] flex items-center italic">
                        <ChevronLeft className="w-4 h-4 mr-2" /> Previous Step
                      </button>
                      <button type="button" onClick={() => advanceToStep(3)} className="bg-slate-950 hover:bg-red-600 text-white px-12 py-5 font-black uppercase tracking-widest text-[11px] transition-all flex items-center transform -skew-x-12">
                        Proceed to Evidence <ChevronRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="animate-in fade-in slide-in-from-right duration-500 space-y-12">
                    <h3 className="text-2xl font-black text-slate-950 uppercase italic font-heading mb-10 border-b border-slate-100 pb-4">Digital Evidence</h3>

                    <div className="bg-slate-50 border-2 border-dashed border-slate-300 p-20 text-center relative hover:border-red-600 group transition-all cursor-pointer">
                      <input type="file" multiple accept="image/*" onChange={handlePhotoChange} className="absolute inset-0 opacity-0 cursor-pointer z-10" />
                      <div className="flex flex-col items-center pointer-events-none">
                        <div className="bg-white p-8 rounded-full shadow-2xl mb-8 group-hover:scale-110 transition-transform border border-slate-100">
                          <Camera className="w-12 h-12 text-red-600" />
                        </div>
                        <p className="text-2xl font-black uppercase italic text-slate-950 mb-3 tracking-tighter">Capture Damage Photos</p>
                        <p className="text-slate-400 text-[11px] font-black uppercase tracking-[0.3em]">Required: Front, Rear, Side, Close-up (Limit 5)</p>
                      </div>
                    </div>

                    {photos.length > 0 && (
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-6">
                        {photos.map((photo, index) => (
                          <div key={index} className="relative aspect-square rounded-sm overflow-hidden shadow-2xl border-4 border-white group">
                            <img src={URL.createObjectURL(photo)} alt="preview" className="w-full h-full object-cover" />
                            <button type="button" onClick={() => removePhoto(index)} className="absolute inset-0 bg-red-600/80 text-white opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <X className="w-8 h-8" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="bg-red-600/5 p-8 rounded-sm border border-red-600/20 flex items-start space-x-6">
                      <Info className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                      <div className="space-y-1">
                        <p className="text-[11px] text-slate-950 font-black uppercase tracking-widest">Quality Matters</p>
                        <p className="text-xs text-slate-500 leading-relaxed font-medium">Please ensure photos are taken in daylight and show the full area of impact. Blurred photos will delay the estimation process.</p>
                      </div>
                    </div>

                    <div className="pt-12 flex flex-col space-y-6">
                      <button type="submit" disabled={loading || photos.length === 0} className={`w-full bg-red-600 hover:bg-slate-950 text-white py-6 font-black uppercase tracking-[0.4em] text-sm transition-all shadow-2xl metallic-shine transform -skew-x-12 ${loading || photos.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}>
                        {loading ? <><Loader2 className="w-5 h-5 animate-spin mr-3" /><span>Transmitting...</span></> : <><Send className="w-5 h-5 mr-3" /><span>SUBMIT FOR ANALYSIS</span></>}
                      </button>
                      <button type="button" onClick={() => setStep(2)} className="text-center text-slate-400 hover:text-red-600 font-black uppercase text-[10px] tracking-widest italic">Return to Step 2</button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-slate-950 text-white p-12 rounded-sm shadow-2xl relative overflow-hidden border-t-8 border-red-600">
               <h4 className="text-2xl font-black uppercase italic mb-8 font-heading">The Riverbend Advantage</h4>
               <ul className="space-y-8">
                 {[
                   { t: "Head Estimator Review", d: "Every digital request is manually verified by our shop owner." },
                   { t: "Priority Scheduling", d: "Digital quote users receive priority shop floor time." },
                   { t: "Instant Comms", d: "Get notifications via SMS as your estimate progresses." }
                 ].map((item, i) => (
                   <li key={i} className="flex space-x-6">
                     <span className="text-red-600 font-black italic text-2xl font-heading">0{i+1}</span>
                     <div>
                       <div className="font-black uppercase text-xs tracking-widest mb-1 text-white">{item.t}</div>
                       <div className="text-slate-400 text-xs leading-relaxed">{item.d}</div>
                     </div>
                   </li>
                 ))}
               </ul>
            </div>

            <div className="bg-white border border-slate-200 p-12 rounded-sm shadow-xl text-center">
               <h4 className="text-slate-950 font-black uppercase italic mb-4 font-heading">Direct Line</h4>
               <p className="text-slate-400 text-[10px] font-black uppercase mb-8 tracking-widest">Speak with a human specialist</p>
               <a href={phoneHref} className="flex items-center justify-center space-x-4 text-red-600 font-black text-2xl hover:text-slate-950 transition-all transform hover:scale-105">
                  <Phone className="w-6 h-6" />
                  <span>{brand.phone.display}</span>
               </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
