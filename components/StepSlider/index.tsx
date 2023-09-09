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
  },
  {
    heading: "Super Mario Bros. 2",
    paragraph:
      "In this sequel, Mario and his friends venture to the dream world of Subcon to defeat the evil Wart. Play as Mario, Luigi, Toad, or Princess Peach.",
  },
  {
    heading: "Super Mario Bros. 3",
    paragraph:
      "Return to the Mushroom Kingdom with Mario and Luigi in this platforming masterpiece. Battle the Koopalings and save the royal family.",
  },
  {
    heading: "Super Mario Land",
    paragraph:
      "Take Mario on an adventure to the far-off Sarasaland to rescue Princess Daisy from the alien villain Tatanga.",
  },
  {
    heading: "Super Mario 3D World",
    paragraph:
      "Join Mario and friends in a 3D platforming adventure. Use power-ups like the Super Bell and Double Cherry to conquer unique levels.",
  },
  {
    heading: "Super Mario RPG: Legend of the Seven Stars",
    paragraph:
      "Embark on a role-playing journey with Mario and his allies to defeat the evil Smithy Gang and recover the seven legendary stars.",
  },
  {
    heading: "Super Mario Galaxy 2",
    paragraph:
      "Continue your cosmic adventure with Mario and Yoshi as they traverse galaxies, solving puzzles and battling cosmic foes.",
  },
  {
    heading: "Super Mario Maker",
    paragraph:
      "Become a level designer and create your own Super Mario levels. Share your creations with players around the world.",
  },
];

// These 8 objects provide unique data related to various Super Mario games and adventures.

const StepSlider = () => {
  return (
    <section>
      <div className="md:p-10 p-2 space-y-2">
        <h4 className="font-semibold" data-aos="fade-right">
          Wrong with self-improvement & how we&apos;re fixing it.
        </h4>
        <h2 data-aos="fade-right">Self-improvement. Ugh.</h2>
      </div>
      <div className="steps mt-20 pt-8" id="steps">
        {marioData.map((data) => (
          <Step
            key={uuid()}
            heading={data.heading}
            paragraph={data.paragraph}
          />
        ))}
      </div>
    </section>
  );
};

export default StepSlider;
