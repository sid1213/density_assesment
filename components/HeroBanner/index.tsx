"use client";
import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import "components/HeroBanner/index.scss";
import { uuid } from "uuidv4";

import { gsap, CSSPlugin } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(CSSPlugin); //initialization
gsap.registerPlugin(ScrollTrigger); //initialization

const HeroBanner = () => {
  const marioRef = useRef(null);
  const cloudRef = useRef(null);
  const cloudTwoRef = useRef(null);
  const cloudThreeRef = useRef(null);

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

  useLayoutEffect(() => {
    start();
    const mario = marioRef.current;
    const cloud = cloudRef.current;
    const cloudTwo = cloudTwoRef.current;
    const cloudThree = cloudThreeRef.current;
    gsap.fromTo(
      cloud,
      {
        duration: 3,
      },
      {
        left: "50%",
        scrollTrigger: {
          trigger: cloud,
          start: 0,
          end: "bottom",
          toggleActions: "restart pause none reverse",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      cloudTwo,
      {
        duration: 3,
      },
      {
        left: "50%",
        scrollTrigger: {
          trigger: cloudTwo,
          start: 0,
          end: "bottom",
          toggleActions: "restart pause none reverse",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      cloudThree,
      {
        duration: 3,
      },
      {
        left: "50%",
        scrollTrigger: {
          trigger: cloudThree,
          start: 0,
          end: "bottom",
          toggleActions: "restart pause none reverse",
          scrub: true,
        },
      }
    );

    gsap.to(mario, {
      left: "63%",
      duration: 3,
      scrollTrigger: {
        trigger: mario,
        start: 0,
        toggleActions: "restart pause none reverse",
        scrub: true,

        onLeave: () => {
          gsap.to(mario, {
            animationName: "play",
          });
        },
        onEnter: () => {
          gsap.to(mario, {
            animationName: "play",
          });
        },
        onLeaveBack: () => {
          gsap.to(mario, {
            animationName: "none",
          });
        },
        onUpdate: (self) => {
          // Check if scrolling in the backward direction
          if (self.direction === -1) {
            gsap.to(mario, {
              transform: "rotateY(180deg)",
            });
          } else {
            gsap.to(mario, {
              transform: "rotateY(0deg)",
            });
          }
          console.log(self.animation);
        },
      },
    });
  });
  return (
    <section className="bg-blue-400 rounded-3xl hero-banner px-10 py-16 relative ">
      <div className="w-1/2 " id="top">
        <p className="text-white mario-text ">Ahead App</p>
        <h1 className="mt-5 text-white mario-text">
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
      <div className="cloud-one objectPlaced" ref={cloudRef}></div>
      <div className="cloud-two objectPlaced" ref={cloudTwoRef}></div>
      <div className="cloud-three objectPlaced" ref={cloudThreeRef}></div>
      <div className="mario-main" ref={marioRef}></div>

      <div className=" flex justify-center bricks ">
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
