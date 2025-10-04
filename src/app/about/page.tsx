import AboutHeader from "@/components/features/about/AboutHeader";
import AboutTakeOff from "@/components/features/about/AboutTakeOff";
import AlignWithValues from "@/components/features/about/AlignWithValues";
import MeetTeam from "@/components/features/about/MeetTeam";
import OurPromise from "@/components/features/about/OurPromise";
import OurValues from "@/components/features/about/OurValues";
import ReadyToLaunch from "@/components/features/about/ReadyToLaunch";

export default function About() {
  return (
    <>
      <AboutHeader />
      <AboutTakeOff />
      <OurPromise />
      <OurValues />
      <AlignWithValues />
      <MeetTeam />
      <ReadyToLaunch />
    </>
  );
}
