import AboutUs from "@/components/AboutUs";
import AnimationSlide from "@/components/AnimationSlide";
import MembershipPage from "@/components/BecomeMember";
import CardsSection from "@/components/CardsSection";
import CoreVerticals from "@/components/CoreVerticals";
import FaqSection from "@/components/FaqSection";
import { HeroSection } from "@/components/HeroSection";
import HomeBanner from "@/components/HomeBanner";
import JoinTakeOff from "@/components/JoinTakeOff";
import StatsSection from "@/components/StatsSection";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <HomeBanner />
      <AnimationSlide />
      <AboutUs />
      <CoreVerticals />
      <HeroSection />
      <CardsSection />
      <MembershipPage />
      <StatsSection />
      <FaqSection />
      <JoinTakeOff />
      <Testimonials />
    </>
  );
}
