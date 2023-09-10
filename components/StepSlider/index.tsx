"use client";
import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import Step from "./Step";
import "./index.scss";

const marioData = [
  {
    heading: "Super Mario Bros.",
    paragraph:
      "The classic game that started it all. Join Mario on a quest to rescue Princess Peach from the clutches of Bowser and save the Mushroom Kingdom.",
    color: "#FFB6C1",
  },
  {
    heading: "Super Mario Bros. 2",
    paragraph:
      "In this sequel, Mario and his friends venture to the dream world of Subcon to defeat the evil Wart. Play as Mario, Luigi, Toad, or Princess Peach.",
    color: "#87CEEB",
  },
  {
    heading: "Super Mario Bros. 3",
    paragraph:
      "Return to the Mushroom Kingdom with Mario and Luigi in this platforming masterpiece. Battle the Koopalings and save the royal family.",
    color: "#98FB98",
  },
  {
    heading: "Super Mario Land",
    paragraph:
      "Take Mario on an adventure to the far-off Sarasaland to rescue Princess Daisy from the alien villain Tatanga.",
    color: "#FFD700",
  },
  {
    heading: "Super Mario 3D World",
    paragraph:
      "Join Mario and friends in a 3D platforming adventure. Use power-ups like the Super Bell and Double Cherry to conquer unique levels.",
    color: "#FFA07A",
  },
  {
    heading: "Super Mario RPG: Legend of the Seven Stars",
    paragraph:
      "Embark on a role-playing journey with Mario and his allies to defeat the evil Smithy Gang and recover the seven legendary stars.",
    color: "#F0E68C",
  },
  {
    heading: "Super Mario Galaxy 2",
    paragraph:
      "Continue your cosmic adventure with Mario and Yoshi as they traverse galaxies, solving puzzles and battling cosmic foes.",
    color: "#DDA0DD",
  },
  {
    heading: "Super Mario Maker",
    paragraph:
      "Become a level designer and create your own Super Mario levels. Share your creations with players around the world.",
    color: "#B0E0E6",
  },
];

// These 8 objects provide unique data related to various Super Mario games and adventures.

const StepSlider = () => {
  return (
    <section>
      <div className="md:p-10 p-2 space-y-2">
        <h4 className="font-semibold" data-aos="fade-right">
          Master the Mario Games in 8 Easy Steps
        </h4>
        <h2 data-aos="fade-right">Step&apos;s Of Mario.</h2>
      </div>
      <div className="steps mt-10 space-y-10 " id="steps">
        {marioData.map((data) => (
          <Step
            key={uuid()}
            heading={data.heading}
            paragraph={data.paragraph}
            color={data.color}
          />
        ))}
      </div>
    </section>
  );
};

export default StepSlider;
