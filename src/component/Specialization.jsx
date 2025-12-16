import React from 'react';

export default function SpecialisationsSection({ backgroundUrl = '/library-bg.jpg' }) {
  return (
    <section
      className="relative bg-cover bg-center mt-5"
      style={{ backgroundImage: `url(${backgroundUrl})` }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl sm:font-extrabold font-bold sm:leading-none leading-[3.5vh] text-white">MBA Online Specialisations</h2>
          <div className="w-16 h-1 bg-white mx-auto sm:mt-4 mt-2" />
        </div>

        {/* Card */}
        <div className="bg-white mx-auto max-w-6xl shadow-xl rounded-sm relative">
          {/* purple tab */}
          <div className="absolute -top-6 left-12 bg-[#3d1630] text-white px-6 py-3 rounded-sm shadow-md flex items-center">
            <span className="font-medium">MBA Online Specialisations</span>
            {/* down triangle */}
            <svg className="ml-3" width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0L14.1421 7H5.85786L10 0Z" fill="#3d1630" transform="translate(-7 6) rotate(180)" />
            </svg>
          </div>

          <div className="p-12 min-h-[220px]">
            <ul className="sm:space-y-6 space-y-3 max-w-3xl ml-4">
              <li className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#3d1630] mt-2 rounded-full" />
                <span className=" font-medium sm:font-semibold text-[#3d1630]">Business Management</span>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#3d1630] mt-2 rounded-full" />
                <span className=" font-medium sm:font-semibold text-[#3d1630]">Marketing Management</span>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#3d1630] mt-2 rounded-full" />
                <span className=" font-medium sm:font-semibold text-[#3d1630]">Financial Management</span>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#3d1630] mt-2 rounded-full" />
                <span className=" font-medium sm:font-semibold text-[#3d1630]">Human Resource Management</span>
              </li>

              <li className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#3d1630] mt-2 rounded-full" />
                <span className=" font-medium sm:font-semibold text-[#3d1630]">Operations & Data Science Management</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
