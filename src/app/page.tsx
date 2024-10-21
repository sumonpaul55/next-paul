import { Hero } from "@/pages/home/Hero";
import WhatIDo from "@/pages/home/WhatIDo";
import { Divider } from "@nextui-org/react";



export default function Home() {
  return (
    <main>
      <Hero />
      <div className="border-t border-baseGray border-opacity-60"></div>
      <WhatIDo />
    </main>
  );
}
