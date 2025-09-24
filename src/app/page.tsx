import AboutUs from "@/components/AboutUs";
import AnimationSlide from "@/components/AnimationSlide";
import MembershipPage from "@/components/BecomeMember";
import CardsSection from "@/components/CardsSection";
import CoreVerticals from "@/components/CoreVerticals";
import { HeroSection } from "@/components/HeroSection";
import HomeBanner from "@/components/HomeBanner";
import { Testimonials } from "@/components/Testimonials";

 

export default function Home() {
  return (
    <>
    <HomeBanner/>
    <AnimationSlide/>
    <AboutUs/>
    <CoreVerticals/>
    <HeroSection/>
    <CardsSection/>
    <MembershipPage/>
    <Testimonials/>
    </>
  );
}
