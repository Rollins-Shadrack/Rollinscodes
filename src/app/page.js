import CTA from "@/components/CTA";
import Features from "./_sections/Features";
import Hero from "./_sections/Hero";
import Goals from "./_sections/Goals";
import WhatWeDo from "../components/WhatWeDo";
import HowWeWork from "./_sections/HowWeWork";
import Testimonials from "./_sections/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Goals />
      <Features />
      <CTA />
      <WhatWeDo />
      <HowWeWork />
      <Testimonials/>
    </main>
  );
}
