import AnimatedBanner from "@/components/AnimatedBanner";
import Cards from "@/components/Cards";
import GetStarted from "@/components/GetStarted";
import HeroBanner from "@/components/HeroBanner";
import MeetApp from "@/components/MeetApp";
import StepSlider from "@/components/StepSlider";
import TextBanner from "@/components/TextBanner";
import Vacancies from "@/components/Vacancies";

export default function Home() {
  return (
    <main className="2xl:container mx-auto px-5 overflow-hidden">
      <HeroBanner />
      <TextBanner />
      <Cards />
      <MeetApp />
      <StepSlider />
      <TextBanner />
      <AnimatedBanner />
      <GetStarted />
      <Vacancies />
    </main>
  );
}
