"use client";
import React, { useLayoutEffect, useRef } from "react";
import { gsap, CSSPlugin } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TextBanner = () => {
  const section = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animation = gsap.timeline({
      scrollTrigger: {
        trigger: section.current,
        start: 100,
        end: 300,
        scrub: true,
        markers: true,
      },
    });
    animation.from(section.current, { left: "0%", duration: 2 });
  }, []);
  return (
    <section className="section relative " id="section-2" ref={section}>
      <div className="flex  flex-nowrap">
        <div className="w-1/3 p-5 flex  ">
          <h3 className="text-2xl font-semibold w-fit mx-auto">EQ beats IQ</h3>
        </div>
        <div className="w-1/2 flex p-5 space-x-7">
          <p className="text-xl">
            People with high emotional intelligence (EQ) live more fulfilled
            lives. They tend to be happier and have healthier relationships.
          </p>
          <p className="text-xl">
            They are more successful in their pursuits and make for inspiring
            leaders. According to science, they earn $29k a year.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TextBanner;
