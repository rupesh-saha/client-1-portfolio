import CurrentFocus from "@/components/CurrentFocus";
import EduSnip from "@/components/EduSnip";
import Hero from "@/components/Hero";
import IntroSec from "@/components/IntroSec";
import JourneyAccordion from "@/components/JourneyAccordion";
import Marquee from "@/components/Marquee";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Hero/>
    <Marquee/>
    <IntroSec/>
    <EduSnip/>
    <JourneyAccordion/>
    <CurrentFocus/>
   </div>
  );
}
