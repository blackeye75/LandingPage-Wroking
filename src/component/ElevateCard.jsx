import React from 'react';

export default function ElevateCard({ imageSrc = '/hero-person.png' }) {
  return (
    <section className="max-w-6xl mx-auto bg-transparent sm:mt-10  mt-[50vh] px-6 py-8">
      <div className="bg-transparent  rounded-md shadow-2xl overflow-hidden flex flex-col md:flex-row items-stretch">
        {/* Left image panel */}
        <div className="md:w-1/3 bg-[#ef6f39] p-8 flex items-center justify-center relative">
          <div className="w-full h-full rounded-md bg-white/0 flex items-center justify-center">
            <div className="relative w-44 h-44 md:w-56 md:h-56">
              {/* white rounded rect behind image */}
              {/* <div className="absolute left-0 top-0 w-full h-full rounded-xl bg-white shadow-inner transform translate-x-6 translate-y-4"></div> */}

              {/* purple accent rounded box bottom */}
              <div className="absolute left-6 bottom-0 w-24 h-20 rounded-md bg-[#6b2a6a]"></div>

              {/* the person image */}
              <img
                src={imageSrc}
                alt="person"
                className="relative w-full h-full object-cover rounded-md shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Right text panel */}
        <div className="md:w-2/3 sm:p-10 p-6 bg-white relative">
          {/* faint decorative line art (pseudo background) */}
          <svg className="absolute right-6 top-6 opacity-10 w-48 h-48" viewBox="0 0 200 200" fill="none">
            <path d="M10 100 C 40 10, 160 10, 190 100" stroke="#6b2a6a" strokeWidth="3" />
            <path d="M10 140 C 40 50, 160 50, 190 140" stroke="#6b2a6a" strokeWidth="2" />
          </svg>

          <h2 className="text-2xl md:text-5xl  font-semibold text-[#3a1630] leading-tight">Elevate Your Career</h2>
          <div className="w-16 h-0.5 bg-[#3a1630] sm:mt-4 sm:mb-6 mt-2 mb-4"></div>

          <h3 className="text-lg md:text-xl font-semibold sm:leading-none leading-tight  sm:font-bold text-[#2b1b2b]">A Bachelor’s program to help you start your career </h3>

          <p className="mt-4 sm:leading-none leading-[2.5vh] text-gray-700 max-w-2xl">
            NMIMS CDOE brings to you the top-notch Bachelor of Commerce (B.Com) and Bachelor of Business Administration (BBA) Programmes, right at your doorstep. Delivered through Live Interactive Lectures using state-of-the-art online infrastructure, these programmes will help you build a solid foundation for a career in the corporate world or provide opportunities to pursue higher education in commerce, or management.
          </p>
        </div>
      </div>
    </section>
  );
}
