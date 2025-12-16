import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import '../index.css';

export default function LandingWithPopup() {
  const [showCookie, setShowCookie] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // delays (ms)
  const COOKIE_DELAY = 1800; // cookie appears first
  const MODAL_DELAY = 3500; // modal appears after cookie (total)

  useEffect(() => {
    const c = setTimeout(() => setShowCookie(true), COOKIE_DELAY);
    const m = setTimeout(() => setShowModal(true), MODAL_DELAY);

    return () => {
      clearTimeout(c);
      clearTimeout(m);
    };
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setShowModal(false);
    setShowCookie(false);
    // TODO: replace with real API call
    alert("Thanks — form submitted (wire up your API)");
  }

  return (
    <div className="md:h-screen h-fit sm:mb-0  w-full relative bg-[#eadcff] sm:overflow-hidden">
      {/* Top red band / logo area to match reference */}
      <div className="bg-red-700 text-white py-4">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-center">
          <div className="text-center font-semibold"><img src="./logo.webp" alt="" /></div>
        </div>
      </div>

      {/* Hero */}
      <main className="w-full sm:min-h-screen h-[30vh] mx-auto sm:px-0 sm:py-3 bg-[url('/bannerfull.png')]  bg-no-repeat sm:bg-center sm:bg-contain bg-contain  bg-top-right sm:flex sm:items-center px-1 items-start gap-[15vw] relative">
        {/* //left */}
        <div className="flex-1  sm:ml-20 sm:mt-[-20vh] mt-0 max-w-3xl">
          <h1 className="sm:text-7xl leading-[5.5vh] uppercase sm:leading-[4.5vw] sm:tracking-tight sm:font-bold text-[40px] tracking-tighter font-medium text-[#34101d]">MBA Online</h1>
          <div
            className="
    h-px 
    w-[50vw] sm:w-[29vw] 
    tracking-tight sm:tracking-tighter 
    -mt-1.5 sm:-mt-0.5 
    bg-linear-to-r from-amber-500 via-orange-500 to-red-500
    origin-left
  "
            style={{
              transform: "scaleX(0)",
              animation: "underlineGrow 4s ease-out forwards",
            }}
          />
          <p className="sm:mt-0 mt-[.1vh]  sm:text-lg text-xs uppercase  tracking-tight  text-[#4b3a45]">One Degree, Unlimited opportunities</p>
          <div
            className="
    h-px 
    w-[40vw] sm:w-[22vw] 
    tracking-tight sm:tracking-tighter 
    -mt-0.5 sm:-mt-0.5 
    bg-linear-to-r from-amber-500 via-orange-500 to-red-500
    origin-left
  "
            style={{
              transform: "scaleX(0)",
              animation: "underlineGrow 6s ease-out forwards",
            }}
          />
        </div>

        {/* right inline floating form (always visible on larger screens) */}
        <aside className="sm:w-screen w-[96] z-50 relative">
          <div className="
     absolute
    inset-x-0
    top-[25vh]
    px-0

    sm:w-fit
    sm:inset-x-auto
    sm:right-16
    sm:top-[-10vh]
    sm:-translate-y-1/2 
">
            {/* phone badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-3 sm:left-24 left-28 z-10"
            >
              <div
                className="
      bg-red-700 text-white
      sm:px-4 px-6
      sm:py-2 py-2
      rounded-lg shadow-md

      inline-flex items-center
      gap-2 sm:gap-3
      whitespace-nowrap
      leading-none
    "
              >
                {/* FIXED SVG */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="block shrink-0"
                >
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12 1.21.39 2.39.78 3.53a2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l1.55-1.55a2 2 0 0 1 2.11-.45c1.14.39 2.32.66 3.53.78A2 2 0 0 1 22 16.92z"
                    stroke="white"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                {/* FIXED TEXT */}
                <span className="text-sm font-semibold leading-none">
                  +91-7065090560
                </span>
              </div>
            </motion.div>


            {/* form div */}

            <div className="bg-white sm:w-96 w-screen sm:mt-0 mt-2 p-4 rounded shadow-lg ">

              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 7, ease: "easeOut", delay: 0.4 }}
                className="h-0.5 bg-linear-to-r sm:-mt-3.5  from-amber-500 via-orange-500 to-red-500"
              />

              <h3 className="text-2xl sm:mt-5 font-serif">Inquire Now</h3>

              {/* <div
                className="h-0.5 bg-linear-to-r from-amber-500 via-orange-500 to-red-500 w-2/5 origin-left"
                style={{
                  transform: "scaleX(0)",
                  animation: "underlineGrow 1s ease-out forwards",
                }}
              /> */}

              <p className="font-medium text-sm mt-1">Admissions Open.</p>

              {/* <div
                className="h-0.5 bg-linear-to-r from-amber-500 via-orange-500 to-red-500 w-1/3 origin-left"
                style={{
                  transform: "scaleX(0)",
                  animation: "underlineGrow 4s ease-out forwards",
                }}
              /> */}


              <form onSubmit={handleSubmit} className="mt-3 space-y-2">
                <div className="relative w-full">
                  <input
                    required
                    id="fullName"
                    type="text"
                    placeholder=" "
                    className="
      peer
      w-full
      border border-gray-300
      rounded
      px-2 py-1
      text-sm
      outline-none
      focus:border-red-600
    "
                  />

                  <label
                    htmlFor="fullName"
                    className="
      absolute
      left-2
      top-1.5
      text-gray-400
      text-xs
      bg-white
      px-1
      transition-all
      pointer-events-none

      peer-placeholder-shown:top-1.5
      peer-placeholder-shown:text-xs

      peer-focus:-top-2
      peer-focus:text-[10px]
      peer-focus:text-red-600

      peer-not-placeholder-shown:-top-2
      peer-not-placeholder-shown:text-[10px]
    "
                  >
                    Full Name
                  </label>
                </div>


                {/* w-full border border-gray-300 rounded px-2 py-1 outline-none */}
                <div className="relative w-full">
                  <input
                    required
                    id="mobile"
                    type="tel"
                    placeholder=" "
                    className="
      peer
      w-full
      border border-gray-300
      rounded
      px-2 py-1
      text-sm
      outline-none
      focus:border-red-600
    "
                  />

                  <label
                    htmlFor="mobile"
                    className="
      absolute left-2 top-1.5
      text-xs text-gray-400
      bg-white px-1
      transition-all pointer-events-none

      peer-placeholder-shown:top-1.5
      peer-placeholder-shown:text-xs

      peer-focus:-top-2
      peer-focus:text-[10px]
      peer-focus:text-red-600

      peer-not-placeholder-shown:-top-2
      peer-not-placeholder-shown:text-[10px]
    "
                  >
                    Mobile
                  </label>
                </div>



                <div className="relative w-full">
                  <input
                    required
                    id="email"
                    type="email"
                    placeholder=" "
                    className="
      peer
      w-full
      border border-gray-300
      rounded
      px-2 py-1
      text-sm
      outline-none
      focus:border-red-600
    "
                  />

                  <label
                    htmlFor="email"
                    className="
      absolute left-2 top-1.5
      text-xs text-gray-400
      bg-white px-1
      transition-all pointer-events-none

      peer-placeholder-shown:top-1.5
      peer-placeholder-shown:text-xs

      peer-focus:-top-2
      peer-focus:text-[10px]
      peer-focus:text-red-600

      peer-not-placeholder-shown:-top-2
      peer-not-placeholder-shown:text-[10px]
    "
                  >
                    Email
                  </label>
                </div>




                <label className="text-sm font-semibold">State/Province:</label>
                <select className="w-full border border-gray-300 rounded px-2 py-1 outline-none text-sm">
                  <option value="">--None--</option>
                  <option>Andhra Pradesh</option>
                  <option>Arunachal Pradesh</option>
                  <option>Assam</option>
                  <option>Bihar</option>
                  <option>Chhattisgarh</option>
                  <option>Goa</option>
                  <option>Gujarat</option>
                  <option>Haryana</option>
                  <option>Himachal Pradesh</option>
                  <option>Jharkhand</option>
                  <option>Karnataka</option>
                  <option>Kerala</option>
                  <option>Madhya Pradesh</option>
                  <option>Maharashtra</option>
                  <option>Manipur</option>
                  <option>Meghalaya</option>
                  <option>Mizoram</option>
                  <option>Nagaland</option>
                  <option>Odisha</option>
                  <option>Punjab</option>
                  <option>Rajasthan</option>
                  <option>Sikkim</option>
                  <option>Tamil Nadu</option>
                  <option>Telangana</option>
                  <option>Tripura</option>
                  <option>Uttar Pradesh</option>
                  <option>Uttarakhand</option>
                  <option>West Bengal</option>

                  {/* Union Territories */}
                  <option>Andaman and Nicobar Islands</option>
                  <option>Chandigarh</option>
                  <option>Dadra and Nagar Haveli and Daman & Diu</option>
                  <option>Delhi</option>
                  <option>Jammu and Kashmir</option>
                  <option>Ladakh</option>
                  <option>Lakshadweep</option>
                  <option>Puducherry</option>
                </select>


                <label className="text-sm font-semibold">Choose a Program:</label>
                <select className="w-full border border-gray-300 rounded px-2 py-1 outline-none text-sm">
                  <option>Online MBA</option>
                  <option>Help me decide</option>
                </select>

                <div className="mt-2">
                  <div className="bg-yellow-300 text-center text-xs p-2 rounded">Your Personal information is secure with us</div>
                </div>

                <button type="submit" className="w-full mt-1 bg-red-700 text-white rounded py-2 font-medium">Submit</button>
              </form>
            </div>
          </div>
        </aside>
      </main>

      {/* Modal popup that appears after delay (centered) - same form but styled like overlay */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex pt-[25vh] sm:pt-[25vh] md:items-center justify-center   p-6 bg-black/40"
          >
            <motion.div
              initial={{ y: -30, scale: 0.96, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 20, scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.36 }}
              className="w-full max-w-md bg-white h-fit rounded-lg shadow-2xl relative overflow-hidden"
            >
              <div className="w-full">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 7, ease: "easeOut", delay: 0.4 }}
                  className="h-0.5 bg-linear-to-r from-amber-500 via-orange-500 to-red-500"
                />
              </div>
              <button onClick={() => setShowModal(false)} aria-label="Close" className="absolute right-3 top-4 w-9 h-9 rounded-full bg-red-50 flex items-center justify-center shadow">
                <span className="text-black-600 hover:text-red-500 font-bold hover:font-extrabold hover:brightness-90 hover:rotate-180 transition duration-300">✕</span>
              </button>

              <div className="p-3 pt-4">
                <h2 className="text-2xl font-extrabold font-serif text-center">Inquire Now</h2>
                <p className="text-center text-sm text-gray-500 mt-1">Admissions Open</p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-2 ">
                  <input required placeholder="Full Name" className="w-full border border-gray-300 rounded px-2 py-1 outline-none" />

                  <input required placeholder="Mobile" className="w-full border border-gray-300 rounded px-2 py-1 outline-none" />

                  <input required placeholder="Email" type="email" className="w-full border border-gray-300 rounded px-2 py-1 outline-none" />

                  <select className="w-full border border-gray-300 rounded px-2 py-1 outline-none text-sm">
                    <option>State</option>
                    <option>Andhra Pradesh</option>
                    <option>Arunachal Pradesh</option>
                    <option>Assam</option>
                    <option>Bihar</option>
                    <option>Chhattisgarh</option>
                    <option>Goa</option>
                    <option>Gujarat</option>
                    <option>Haryana</option>
                    <option>Himachal Pradesh</option>
                    <option>Jharkhand</option>
                    <option>Karnataka</option>
                    <option>Kerala</option>
                    <option>Madhya Pradesh</option>
                    <option>Maharashtra</option>
                    <option>Manipur</option>
                    <option>Meghalaya</option>
                    <option>Mizoram</option>
                    <option>Nagaland</option>
                    <option>Odisha</option>
                    <option>Punjab</option>
                    <option>Rajasthan</option>
                    <option>Sikkim</option>
                    <option>Tamil Nadu</option>
                    <option>Telangana</option>
                    <option>Tripura</option>
                    <option>Uttar Pradesh</option>
                    <option>Uttarakhand</option>
                    <option>West Bengal</option>
                  </select>

                  <select className="w-full border border-gray-300 rounded px-2 py-1 outline-none text-sm">
                    <option>Online MBA</option>
                    <option>Help Us Guide You</option>
                  </select>

                  <div className="mt-2">
                    <div className="bg-yellow-300 text-center text-sm p-2 rounded">Your Personal information is secure with us</div>
                  </div>

                  <button type="submit" className="w-full mt-1 bg-red-600 text-white rounded py-2 font-medium hover:brightness-95 transition">Submit</button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cookie banner */}
      <AnimatePresence>
        {showCookie && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.36 }}
            className="fixed left-0 right-0 bottom-0 z-50"
          >
            <div className="max-w-full mx-auto px-6 py-4 bg-white/95 rounded-t-md shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-800 max-w-3xl">
                Cookies are being used on this site to make your user experience better. When you click any links on this page, you give us consent to set cookies
              </p>

              <div className="flex gap-3">
                <button onClick={() => setShowCookie(false)} className="px-4 py-2 border rounded-full bg-white text-gray-800 shadow-sm">Ok</button>
                <button onClick={() => alert('Open privacy policy (replace with real link)')} className="px-4 py-2 rounded-full bg-slate-800 text-white">Privacy & Cookies Policy</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* whatsapp floating button (bottom-right) */}
      <motion.div
        animate={{
          y: [0, -10, 0]   // floating bounce effect
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="fixed right-6 bottom-6 z-50"
      >
        <div className="w-14 h-14 rounded-full shadow-2xl flex items-center justify-center text-white text-2xl cursor-pointer hover:scale-120 transition">
          <FaWhatsapp className="text-cyan-400 
             drop-shadow-[0_0_6px_#22d3ee]" />
        </div>
      </motion.div>

    </div>
  );
}
