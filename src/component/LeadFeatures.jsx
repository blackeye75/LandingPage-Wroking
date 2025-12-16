import React from 'react';

const features = [
  {
    title: 'Latest Tech Based Learning Systems',
    desc:
      'Excellent mobile application based learning platform. Facilities like recorded lectures & eBooks',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="18" height="14" rx="2" stroke="white" strokeWidth="1.2" />
        <path d="M7 8h10" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Best-in-class Student Services',
    desc: 'Multiple touchpoints; email, toll free no. and live chat. Dedicated student support team',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="8" r="2.2" stroke="white" strokeWidth="1.2" />
        <path d="M5 20c1-3 5-4 7-4s6 1 7 4" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Career Services',
    desc:
      'Unique services offering career development & assistance. Right mentoring and guidance',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3v6" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M6 12l6 6 6-6" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Live Interactive & Recorded Lectures',
    desc: '24/7 access to all content, including recorded sessions of lectures',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="5" width="18" height="12" rx="1" stroke="white" strokeWidth="1.2" />
        <path d="M8 9l4 2-4 2V9z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'High Focus on Academic Excellence',
    desc: '600+ faculty members, including academicians and industry experts. Globally curated curriculum',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 6h16" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M6 10h12v8H6z" stroke="white" strokeWidth="1.2" />
      </svg>
    ),
  },
];

export default function LeadFeatures() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-extrabold text-[#3b1630]">Lead the Future</h2>
          <div className="w-16 h-1 bg-[#caa84a] mx-auto mt-4 rounded" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((f, i) => (
            <article
              key={i}
              className="rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              {/* top - deep plum */}
              <div className="bg-[#34142a] p-6 min-h-[120px] flex flex-col justify-between">
                <div>
                  <h3 className="text-white text-lg font-semibold leading-snug">{f.title}</h3>
                </div>
                <div className="ml-auto">{f.icon}</div>
              </div>

              {/* bottom - warm sand (changed color scheme) */}
              <div className="bg-[#d0aa60] p-6 min-h-[120px]">
                <p className="text-[#231815] text-sm leading-relaxed">{f.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* faint decorative illustrations (corners) */}
      <svg className="absolute left-6 bottom-6 opacity-10 w-48 h-48" viewBox="0 0 200 200" fill="none">
        <rect x="10" y="10" width="180" height="120" rx="8" stroke="#34142a" strokeWidth="4" />
      </svg>

      <svg className="absolute right-6 top-6 opacity-8 w-56 h-56" viewBox="0 0 200 200" fill="none">
        <path d="M20 160c40-80 120-80 160 0" stroke="#d0aa60" strokeWidth="6" strokeLinecap="round" />
      </svg>
    </section>
  );
}
