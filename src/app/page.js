import CTA from "@/components/CTA";
import Features from "./_sections/Features";
import Hero from "./_sections/Hero";
import Goals from "./_sections/Goals";
import WhatWeDo from "./_sections/WhatWeDo";
import HowWeWork from "./_sections/HowWeWork";

export default function Home() {
  return (
    <main>
      <Hero />
      <Goals />
      <Features />
      <CTA />
      <WhatWeDo />
      <HowWeWork/>
    </main>
  );
}
