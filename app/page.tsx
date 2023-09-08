import HeroBanner from "@/components/HeroBanner/index";
import TextBanner from "@/components/TextBanner";

export default function Home() {
  return (
    <section className="2xl:container mx-auto  px-5 ">
      <HeroBanner />
      <TextBanner />
    </section>
  );
}
