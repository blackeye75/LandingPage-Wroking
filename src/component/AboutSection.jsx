import React from "react";

export default function AboutSection({ bgImage = "/bg-campus.jpg" }) {
  const stats = [
    {
      value: "500+",
      label: "Hiring partners ",
      bg: "#3A2342",
      icon: (
        <svg width="46" height="46" viewBox="0 0 24 24" fill="none" className="opacity-30">
          <path d="M4 18h16" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M12 3L5 7v4c0 5 3 7 7 7s7-2 7-7V7l-7-4z" stroke="white" strokeWidth="1.4" />
        </svg>
      ),
    },
    {
      value: "82000+ ",
      label: "Alumni across world ",
      bg: "#D4B676",
      textColor: "#1C1C1C",
      icon: (
        <svg width="46" height="46" viewBox="0 0 24 24" fill="none" className="opacity-40">
          <circle cx="12" cy="7" r="3" stroke="black" strokeWidth="1.4" />
          <path d="M5 21c1-4 3-6 7-6s6 2 7 6" stroke="black" strokeWidth="1.4" />
        </svg>
      ),
    },
    {
      value: "8000+ ",
      label: "Firms hired our alumni ",
      prefix: "Students from",
      bg: "#3A2342",
      icon: (
        <svg width="46" height="46" viewBox="0 0 24 24" fill="none" className="opacity-30">
          <circle cx="12" cy="7" r="3" stroke="white" strokeWidth="1.4" />
          <path d="M4 21c1-4 3-6 8-6s7 2 8 6" stroke="white" strokeWidth="1.4" />
          <path d="M17 4l3 3-3 3" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      ),
    },
  ];
  return (
    <section
      className="relative bg-cover sm:h-[35vw]   bg-center sm:mb-40 mb-16  bg-no-repeat backdrop-blur-3xl  text-white"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-6xl mx-auto sm:px-6 px-4  text-center">

        {/* About Heading */}
        <h2 className="text-4xl md:text-5xl pt-8 font-bold text-[#d7b56d]">
          About
        </h2>
        <div className="w-16 h-1 bg-[#d7b56d] mx-auto mt-3 mb-10"></div>

        {/* About Text */}
        <p className="max-w-4xl mx-auto text-lg sm:leading-relaxed leading-6 sm:font-medium font-light">
          NMIMS CDOE is the distance and online education centre of NMIMS University.
          NMIMS CDOE began its ODL & OL journey in 2013 with a state of the art learning
          management system to provide interactive learning on connected platforms 24/7.
        </p>

        <p className="max-w-4xl mx-auto text-lg sm:leading-relaxed leading-6 sm:font-medium font-light sm:mt-2 mt-4">
          NMIMS CDOE is changing the dynamics of higher education delivery in India while
          empowering students across India and enabling them to fulfil their dreams and aspirations.
        </p>

        {/* Forte Heading */}
        <h3 className="text-3xl md:text-4xl font-bold text-[#d7b56d] sm:mt-16 mt-10">
          NMIMS CDOE Forte
        </h3>
        <div className="w-16 h-1 bg-white mx-auto sm:mt-3 mt-2"></div>

        {/* Forte Stats */}
        <section className="w-full bg-transparent py-10">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((item, i) => (
              <div
                key={i}
                className=" rounded-lg shadow-lg overflow-hidden p-4   flex flex-col items-center min-h-40"
                style={{ backgroundColor: item.bg }}
              >
                {/* ICON */}
                <div className=" top-4 right-4">{item.icon}</div>

                {/* TEXT */}
                <div className="relative z-10">
                  {item.prefix && (
                    <p className="text-white font-semibold text-sm mb-1 opacity-90 tracking-wide">
                      {/* {item.prefix} */}
                    </p>
                  )}

                  <h3
                    className="text-4xl font-extrabold"
                    style={{ color: item.textColor || "white" }}
                  >
                    {item.value}
                  </h3>

                  <p
                    className="mt-2 text-base font-semibold opacity-90"
                    style={{ color: item.textColor || "white" }}
                  >
                    {item.label}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </section>

      </div>
    </section>
  );
}
