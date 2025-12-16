import { useEffect, useState } from 'react'
import './App.css'
import LandingWithPopup from './component/LandingPage'
import ElevateCard from './component/ElevateCard'
import SpecialisationsSection from './component/Specialization'
import LeadFeatures from './component/LeadFeatures'
import AutoCarouselFeatures from "./component/AutoCarouselFeatures";
import AboutSection from './component/AboutSection'
import CampusAddress from './component/CampusAddress'
import Lenis from "lenis";
// import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";


const features = [
  {
    title: "Latest Tech Based Learning Systems",
    desc: "Excellent mobile application based learning platform. Facilities like recorded lectures & eBooks",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="14" rx="2" stroke="white" strokeWidth="1.2" />
        <path d="M7 8h10" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Best-in-class Student Services",
    desc: "Multiple touchpoints; email, toll free no. and live chat. Dedicated student support team",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="2.2" stroke="white" strokeWidth="1.2" />
        <path d="M5 20c1-3 5-4 7-4s6 1 7 4" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Career Services",
    desc: "Unique services offering career development & assistance. Right mentoring and guidance",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <path d="M12 3v6" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M6 12l6 6 6-6" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Live Interactive & Recorded Lectures",
    desc: "600+ faculty members, 24/7 access to all content, including recorded sessions of lectures",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="12" rx="1" stroke="white" strokeWidth="1.2" />
        <path d="M8 9l4 2-4 2V9z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "High Focus on Academic Excellence",
    desc: "600+ faculty members, including academicians and industry experts. Globally curated curriculum",
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <path d="M4 6h16" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M6 10h12v8H6z" stroke="white" strokeWidth="1.2" />
      </svg>
    ),
  },
];

function App() {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      // console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <div className='overflow-hidden' >
      <LandingWithPopup />
      <div className=' ' >
      <ElevateCard imageSrc='https://edukyu.com/nmimsonlinemba/assets-cxp/bfr_img1.jpg' />
      </div>
      <SpecialisationsSection backgroundUrl='https://images.unsplash.com/photo-1588580000645-4562a6d2c839?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      {/* <LeadFeatures /> */}
      <AutoCarouselFeatures items={features} autoPlayMs={3500} transitionMs={600} />
      <AboutSection bgImage='https://images.unsplash.com/photo-1565502663138-84933158ca50?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
      <CampusAddress imageSrc='https://edukyu.com/nmimsonlinemba/assets-cxp/nmims_ofc.png' />
    </div>
  )
}

export default App
