import EducationSection from "@/pages/home/Education";
import { Hero } from "@/pages/home/Hero";
import WhatIDo from "@/pages/home/WhatIDo";



export default function Home() {
  return (
    <main>
      {/* <Hero /> */}
      <div className="border-t border-baseGray border-opacity-60"></div>
      {/* <WhatIDo /> */}
      <EducationSection />
    </main>
  );
}
