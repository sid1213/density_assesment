"use client";
import React, { useEffect } from "react";
import AnimatedBanner from "@/components/AnimatedBanner";
import Cards from "@/components/Cards";
import GetStarted from "@/components/GetStarted";
import HeroBanner from "@/components/HeroBanner";
import MeetApp from "@/components/MeetApp";
import StepSlider from "@/components/StepSlider";
import TextBanner from "@/components/TextBanner";
import Vacancies from "@/components/Vacancies";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, []);
  return (
    <main className="2xl:container mx-auto md:px-5 px-2 overflow-hidden">
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
