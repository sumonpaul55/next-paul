import EducationSection from "@/src/Cpages/home/Education";
// import ExperienceSection from "@/src/pages/home/Experience";
import { Hero } from "@/src/Cpages/home/Hero";
import TestimonialSlider from "@/src/Cpages/home/Testimonial";
import WhatIDo from "@/src/Cpages/home/WhatIDo";
import PostSection from "../Cpages/home/PostSection";
// import LoadingDoor from "../components/shared/LoadinDoor";
import ProjectsSection from "../Cpages/home/ProjectsSection";
import ServiceSection from "../Cpages/home/ServiceSection";
import About from "../Cpages/home/About";



export default function Home() {
  return (
    <main className="">
      {/* <LoadingDoor /> */}
      <Hero />
      <About />
      <WhatIDo />
      {/* service section */}
      <ServiceSection />
      {/* project */}
      <ProjectsSection />
      <EducationSection />
      {/* <ExperienceSection /> */}
      <TestimonialSlider />
      <PostSection />
    </main>
  );
}
