import EducationSection from "@/src/Cpages/home/Education";
// import ExperienceSection from "@/src/pages/home/Experience";
import { Hero } from "@/src/Cpages/home/Hero";
import TestimonialSlider from "@/src/Cpages/home/Testimonial";
import WhatIDo from "@/src/Cpages/home/WhatIDo";
import PostSection from "../Cpages/home/PostSection";



export default function Home() {
  return (
    <main>
      <Hero />
      <div className="border-t border-baseGray border-opacity-60"></div>
      <EducationSection />
      <WhatIDo />
      <PostSection />
      {/* <ExperienceSection /> */}
      <TestimonialSlider />
    </main>
  );
}
