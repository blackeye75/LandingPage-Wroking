import React from "react";

export default function CampusAddress({ imageSrc = "/nmims-campus.jpg" }) {
  return (
    <section className="w-full sm:mt-16  bg-white text-[#38183A]">
      <div className="max-w-7xl mx-auto px-6 sm:py-2 sm:pt-[10vh] grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        {/* LEFT CONTENT */}
        <div>
          {/* Heading */}
          <h2 className="text-4xl sm:font-bold font-medium sm:leading-none leading-[4.5vh] sm:tracking-normal  mb-3">
            NMIMS Mumbai Campus Address:
          </h2>
          <div className="w-16 h-1 bg-[#38183A] mb-8"></div>

          {/* Address Text */}
          <p className="sm:text-lg text-[1.3rem] sm:font-normal sm:leading-relaxed leading-[3vh]">
            NMIMS CDOE, 2nd Floor, NMIMS Building, V. L., Pherozeshah Mehta Rd, Vile
            Parle West, Mumbai, Maharashtra 400056
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full overflow-hidden rounded">
          <img
            src={imageSrc}
            alt="NMIMS Campus"
            className="w-full h-auto object-cover rounded shadow-md"
          />
        </div>
      </div>

      {/* Disclaimer */}
      <div className="max-w-7xl mx-auto px-6 text-sm text-black leading-relaxed py-6">
        <strong>Disclaimer:</strong> As an Affiliate Enquiry Partner (AEP) of NMIMS CDOE,
        we display and showcase program information of NMIMS CDOE. Counselling, Admission,
        Program delivery and examination is solely managed by NMIMS CDOE and as an AEP,
        we have no role to play in it.
      </div>

      {/* Footer Bar */}
      <footer className="w-full bg-[#7A1425] text-white py-4 text-center text-sm">
        © 2019 All Rights Reserved. | <span className="underline cursor-pointer">Privacy Policy</span>
      </footer>
    </section>
  );
}
