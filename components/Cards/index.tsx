"use client";
import "components/Cards";
import "components/Cards/index.scss";
import Card from "./Card/index";
import { uuid } from "uuidv4";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// this data i have generated from ChatGPT3
const data = [
  {
    bg_clr: "#E6E6FA", // Lavender
    src: "question.png",
    heading: "Super Mario Adventures",
    description:
      "Join Mario in exciting adventures through the Mushroom Kingdom, battling villains and saving Princess Peach.",
  },
  {
    bg_clr: "#F0E68C", // Khaki
    src: "coin.png",
    heading: "Mario Kart Madness",
    description:
      "Experience the thrill of high-speed kart racing with Mario and friends in this action-packed game.",
  },
  {
    bg_clr: "#FFDAB9", // Peachpuff
    src: "question.png",
    heading: "Super Mario World",
    description:
      "Explore a colorful and perilous world with Mario as he embarks on a quest to rescue Yoshi's friends.",
  },
  {
    bg_clr: "#98FB98", // Pale green
    src: "coin.png",
    heading: "Luigi's Mansion",
    description:
      "Join Luigi in this spooky adventure as he explores a haunted mansion to rescue Mario.",
  },
  {
    bg_clr: "#87CEFA", // Light sky blue
    src: "question.png",
    heading: "Super Mario 64",
    description:
      "Jump into paintings to explore various worlds and collect Power Stars in this classic 3D platformer.",
  },
  {
    bg_clr: "#FFB6C1", // Light pink
    src: "coin.png",
    heading: "Paper Mario: The Thousand-Year Door",
    description:
      "Unfold an epic paper adventure as Mario, battling foes and solving puzzles in a paper-crafted world.",
  },
  {
    bg_clr: "#98FB98", // Pale green (repeated color)
    src: "question.png",
    heading: "Super Mario Galaxy",
    description:
      "Embark on a cosmic journey across galaxies, collecting Power Stars and battling cosmic creatures.",
  },
  {
    bg_clr: "#FFDAB9", // Peachpuff (repeated color)
    src: "coin.png",
    heading: "Super Mario Odyssey",
    description:
      "Join Mario and his sentient hat, Cappy, on a globe-trotting adventure to rescue Princess Peach from Bowser.",
  },
];

const Cards = () => {
  const section_2 = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(section_2.current, {
      scrollTrigger: {
        trigger: section_2.current,
        start: "100px bottom",
        end: "300px bottom",
        markers: true,
        scrub: true,
      },
      left: "0%",
    });
  }, []);
  return (
    <section>
      <div>
        <div className="p-10">
          <h1
            className="text-6xl font-semibold relative  text-first"
            ref={section_2}
          >
            Does this Sounds Familiar.....
          </h1>
        </div>
        <div className="overflow-hidden">
          <div
            className=" flex overflow-auto w-fit space-x-10 relative"
            ref={section_2}
          >
            {data.map((data) => (
              <Card
                key={uuid()}
                bg_clr={data.bg_clr}
                src={data.src}
                heading={data.heading}
                description={data.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
