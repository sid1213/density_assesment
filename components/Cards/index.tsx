"use client";
import "components/Cards";
import "components/Cards/index.scss";
import Card from "./Card/index";
import { uuid } from "uuidv4";
import { useLayoutEffect, useRef } from "react";
import { gsap, CSSPlugin } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); //initialization
gsap.registerPlugin(CSSPlugin); //initialization

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
  const cardSliderRef = useRef(null);

  useLayoutEffect(() => {
    const cardSlider = cardSliderRef.current;
    gsap.to(cardSlider, {
      right: "40%",
      duration: 3,
      scrollTrigger: {
        trigger: cardSlider,
        start: "top 60%",
        end: "bottom",
        toggleActions: "restart pause none reverse",
        scrub: true,
      },
    });
  }, []);

  return (
    <section className="section">
      <div>
        <div className="p-10 text-first">
          <h2 data-aos="fade-right">Does this Sounds Familiar.....</h2>
        </div>
        <div className="mt-5 overflow-auto cards">
          <div
            className=" flex overflow-auto w-fit space-x-10 relative card-slider pt-8"
            ref={cardSliderRef}
          >
            {data.map((data, index) => (
              <Card
                key={uuid()}
                bg_clr={data.bg_clr}
                src={data.src}
                heading={data.heading}
                description={data.description}
                hanging={index === 2}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
