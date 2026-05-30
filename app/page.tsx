import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { MarqueeStrip } from "@/components/MarqueeStrip";
import { WhatWeBuild } from "@/components/WhatWeBuild";
import { WhiteLabel } from "@/components/WhiteLabel";
import { Industries } from "@/components/Industries";
import { Stats } from "@/components/Stats";
import { WhyPartner } from "@/components/WhyPartner";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/RevealObserver";

export default function Page() {
  return (
    <>
      <RevealObserver />
      <NavBar />
      <Hero />
      <MarqueeStrip />
      <WhatWeBuild />
      <WhiteLabel />
      <Industries />
      <Stats />
      <WhyPartner />
      <CTA />
      <Footer />
    </>
  );
}
