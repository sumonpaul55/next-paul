import EducationSection from "@/src/Cpages/home/Education";
// import ExperienceSection from "@/src/pages/home/Experience";
import { Hero } from "@/src/Cpages/home/Hero";
import TestimonialSlider from "@/src/Cpages/home/Testimonial";
import WhatIDo from "@/src/Cpages/home/WhatIDo";
import PostSection from "../Cpages/home/PostSection";
import LoadingDoor from "../components/shared/LoadinDoor";
import ProjectsSection from "../Cpages/home/ProjectsSection";



export default function Home() {
  return (
    <main className="bg-black">
      <LoadingDoor />
      <Hero />
      <WhatIDo />
      <ProjectsSection />
      <EducationSection />
      {/* <ExperienceSection /> */}
      <TestimonialSlider />
      <PostSection />
    </main>
  );
}
