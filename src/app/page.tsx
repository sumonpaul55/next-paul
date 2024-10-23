import EducationSection from "@/src/pages/home/Education";
// import ExperienceSection from "@/src/pages/home/Experience";
import { Hero } from "@/src/pages/home/Hero";
import TestimonialSlider from "@/src/pages/home/Testimonial";
import WhatIDo from "@/src/pages/home/WhatIDo";



export default function Home() {
  return (
    <main>
      <Hero />
      <div className="border-t border-baseGray border-opacity-60"></div>
      <WhatIDo />
      <EducationSection />
      {/* <ExperienceSection /> */}
      <TestimonialSlider />
    </main>
  );
}
