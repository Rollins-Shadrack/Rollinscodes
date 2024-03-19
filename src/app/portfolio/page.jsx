import WhatWeDo from "@/components/WhatWeDo";
import Hero from "./_sections/Hero";
import Tools from "./_sections/Tools";
import Stats from "./_sections/Stats";
import Experience from "./_sections/Experience";

export const metadata = {
  title: "Portfolio",
  description: "Get to know me",
};
export default function Portfolio() {
  return (
    <div>
          <Hero />
          <Tools />
          <WhatWeDo />
          <Stats />
          <Experience/>
    </div>
  );
}
