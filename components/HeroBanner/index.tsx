"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import "components/HeroBanner/index.scss";
import { uuid } from "uuidv4";

import { gsap, CSSPlugin, Expo } from "gsap";
gsap.registerPlugin(CSSPlugin);
const HeroBanner = () => {
  const start = () => {
    const cloudOne = gsap.timeline(() => console.log("cloud-one"));
    const cloudTwo = gsap.timeline(() => console.log("cloud-two"));
    const cloudThree = gsap.timeline(() => console.log("cloud-three"));
    const bushSingle = gsap.timeline(() => console.log("single-bush "));
    const bushDouble = gsap.timeline(() => console.log("double-bush "));
    const bricks = gsap.timeline(() => console.log("bricks"));
    const text = gsap.timeline({
      onComplete: () => {
        console.log("complete");
      },
    });
    text.to("#top", {
      left: "2%",
      duration: 1.5,
    });
    cloudOne.to(".cloud-one", { right: "20%", duration: 1 });
    cloudTwo.to(".cloud-two", { right: "40%", duration: 1.5 });
    cloudThree.to(".cloud-three", { left: "10%", duration: 1 });
    bushSingle.to(".single-bush", {
      transform: "translate(50%, -50%) scale(1)",
      duration: 1.5,
    });
    bushDouble.to(".double-bush", {
      transform: "translate(50%, -50%) scale(1)",
      duration: 1.5,
    });
    bricks.to(".bricks", {
      transform: "translate(50%, -50%) scale(1)",
      duration: 1.5,
    });
  };

  useEffect(() => {
    start();
  });
  return (
    <section className="bg-blue-400 rounded-3xl hero-banner px-10 py-16 relative ">
      <div className="w-1/2 " id="top">
        <p className="text-white mario-text ">Ahead App</p>
        <h1 className="text-6xl mt-5 font-bold text-white mario-text">
          Master your life <br />
          by mastering <br />
          emotions
        </h1>
        <div className="flex space-x-10 items-center mt-20">
          <Image
            src="/appstore.svg"
            width={175}
            height={300}
            objectFit="contain"
            alt="google app store"
          />
          <div>
            <div className="flex space-x-2 ">
              {Array(5)
                .fill(null)
                .map((star) => (
                  <Image
                    key={uuid()}
                    src="/star.png"
                    width={20}
                    height={20}
                    objectFit="contain"
                    alt="google app store"
                  />
                ))}
            </div>
            <p className="text-sm text-white mt-1 mario-text">
              100+ AppStore reviews
            </p>
          </div>
        </div>
      </div>
      <div className="floor absolute"></div>
      <div className="single-bush objectPlaced"></div>
      <div className="double-bush objectPlaced"></div>
      <div className="cloud-one objectPlaced"></div>
      <div className="cloud-two objectPlaced"></div>
      <div className="cloud-three objectPlaced"></div>
      <div className="relative flex justify-center bricks objectPlaced">
        <div className="brick bg-no-repeat bg-contain "></div>
        <div className="brick bg-no-repeat bg-contain"></div>
        <div className="question-brick bg-no-repeat bg-contain"></div>
        <div className="brick bg-no-repeat bg-contain"></div>
        <div className="brick bg-no-repeat bg-contain"></div>
      </div>
    </section>
  );
};

export default HeroBanner;
