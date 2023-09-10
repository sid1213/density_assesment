"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import "components/HeroBanner/index.scss";
import { uuid } from "uuidv4";

import { gsap, CSSPlugin } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(CSSPlugin); //initialization
gsap.registerPlugin(ScrollTrigger); //initialization

const HeroBanner = () => {
  const [disabled, setDisabled] = useState<boolean>(false);

  const audio = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio("/coin.mp3") : undefined
  );
  const mario_bg_audio = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio("/mario-bg-music.mp3") : undefined
  );

  const coinAudio = () => {
    audio.current?.play();
  };
  const mario_bg_audioPlay = () => {
    mario_bg_audio.current?.play();
  };
  const marioRef = useRef(null);
  const cloudRef = useRef(null);
  const cloudTwoRef = useRef(null);
  const cloudThreeRef = useRef(null);
  const marioContainerRef = useRef<HTMLButtonElement>(null);

  const start = () => {
    const text = gsap.timeline();

    text.to("#top", {
      left: "2%",
      duration: 2,
    });

    gsap.to(cloudRef.current, { right: "20%", duration: 1 });
    gsap.to(cloudTwoRef.current, { right: "40%", duration: 1.5 });
    gsap.to(cloudThreeRef.current, { left: "5%", duration: 1 });
    gsap.to(".single-bush", {
      transform: "translate(50%, -50%) scale(1)",
      duration: 1.5,
    });

    gsap.to(".double-bush", {
      transform: "translate(50%, -50%) scale(1)",
      duration: 1.5,
    });
    gsap.to(".mario-main", {
      transform: "translate(50%,0) scale(1)",
      duration: 1.5,
    });
    gsap.to(".bricks", {
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
    const marioContainer = marioContainerRef.current;

    gsap.fromTo(
      cloud,
      {
        duration: 3,
      },
      {
        left: "30%",
        scrollTrigger: {
          trigger: cloud,
          start: 0,
          end: `${marioContainer?.offsetHeight} top`,
          toggleActions: "restart pause none reverse",
          scrub: 2,
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
          end: `${marioContainer?.offsetHeight} top`,
          toggleActions: "restart pause none reverse",
          scrub: 2,
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
          end: `${marioContainer?.offsetHeight} top`,
          scrub: 1,
        },
        toggleActions: "restart pause none reverse",
      }
    );

    const pin = gsap.fromTo(
      mario,
      { left: "30%" },
      {
        left: `50%`,
        ease: "none",
        duration: 5,
        scrollTrigger: {
          trigger: marioContainer,
          start: "top 120px",
          end: `${marioContainer?.offsetHeight} top`,
          scrub: 1,
          pin: marioContainer,
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
          },
          toggleActions: "restart pause none reverse",
        },
      }
    );

    return () => {
      pin.kill();
    };
  });

  return (
    <section
      className="bg-blue-400 rounded-3xl hero-banner px-10 py-16 relative "
      ref={marioContainerRef}
    >
      <div className="w-1/2 h-fit" id="top">
        <p className="text-white mario-text ">Mario App</p>
        <h1 className="mt-5 text-white mario-text">
          Master your life <br />
          with Mario <br />
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
        <button
          disabled={disabled}
          className={`question-brick bg-no-repeat bg-contain ${
            !disabled ? "cursor-pointer" : "cursor-not-allowed"
          }`}
          onClick={(e) => {
            gsap.to(".blink", {
              display: "none",
              duration: 0,
            });

            coinAudio();
            gsap.fromTo(
              ".coin",
              { top: "0" },
              {
                top: "-200%",
                yoyo: true,
                duration: 0.5,
                repeat: 1,
                onComplete: () => {
                  document.getElementsByTagName("body")[0].style.overflow =
                    "auto";
                  mario_bg_audioPlay();
                },
              }
            );
            setDisabled(true);
          }}
        >
          <div className="coin bg-no-repeat bg-contain top-0"></div>
          {disabled && (
            <div className="emptyBlock bg-no-repeat bg-contain top-0"></div>
          )}
        </button>
        <div className="brick bg-no-repeat bg-contain"></div>
        <div className="brick bg-no-repeat bg-contain"></div>
        <h4 className="text-white blink absolute top-[-150%] whitespace-nowrap text-center">
          Click here to allow scroll <br /> ⬇️
        </h4>
      </div>
    </section>
  );
};

export default HeroBanner;
