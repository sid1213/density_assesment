import AnimatedBanner from "@/components/AnimatedBanner";
import Cards from "@/components/Cards";
import HeroBanner from "@/components/HeroBanner";
import StepSlider from "@/components/StepSlider";
import TextBanner from "@/components/TextBanner";

export default function Home() {
  return (
    <section className="2xl:container mx-auto px-5 ">
      <HeroBanner />
      <TextBanner />
      <Cards />
      <StepSlider />
      <AnimatedBanner />
    </section>
  );
}
