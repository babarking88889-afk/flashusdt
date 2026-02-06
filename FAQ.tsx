
import React from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  return (
    <section className="max-w-3xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        <p className="text-slate-400">Everything you need to know about our Flash protocol</p>
      </div>

      <div className="grid gap-4">
        {FAQS.map((faq, i) => (
          <details key={i} className="group bg-slate-900/50 border border-white/5 rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-white/[0.02] transition-colors">
              <h3 className="font-semibold text-slate-200 group-open:text-blue-400 transition-colors">{faq.question}</h3>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" height="20" 
                viewBox="0 0 24 24" fill="none" 
                stroke="currentColor" strokeWidth="2" 
                strokeLinecap="round" strokeLinejoin="round"
                className="group-open:rotate-180 transition-transform text-slate-500"
              >
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </summary>
            <div className="px-6 pb-6 text-slate-400 leading-relaxed text-sm">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
