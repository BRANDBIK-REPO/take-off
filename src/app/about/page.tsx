import AboutHeader from "@/components/about/AboutHeader";
import AboutTakeOff from "@/components/about/AboutTakeOff";
import AlignWithValues from "@/components/about/AlignWithValues";
import MeetTeam from "@/components/about/MeetTeam";
import OurPromise from "@/components/about/OurPromise";
import OurValues from "@/components/about/OurValues";
import ReadyToLaunch from "@/components/about/ReadyToLaunch";

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
