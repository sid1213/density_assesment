import React from "react";
import "../AnimatedBanner/index.scss";
import CharBox from "./CharBox";
import { uuid } from "uuidv4";

const characters = [
  {
    img: "mega-mushroom.png",
    alt: "mega-mushroom",
    title: "mega-mushroom",
  },
  {
    img: "fire-flower.png",
    alt: "fire-flower",
    title: "fire-flower",
  },
  {
    img: "super-mushroom.png",
    alt: "super-mushroom",
    title: "super-mushroom",
  },
];
const levels = [
  {
    level_name: "Grassy Plains",
    color: "#90EE90", // Pastel green (for grassy plains)
  },
  {
    level_name: "Underwater",
    color: "#1E90FF", // Dodger blue (for underwater levels)
  },
  {
    level_name: "Desert",
    color: "#FFD700", // Gold (for desert levels)
  },
  {
    level_name: "Lava Castle",
    color: "#FF4500", // OrangeRed (for lava castle levels)
  },
];

// These objects have color codes corresponding to their respective level names.

const AnimatedBanner = () => {
  return (
    <section className="section">
      <div className="text-center p-10 bg-red-100 animated-banner rounded-2xl">
        <div className="p-10 space-y-2">
          <h4 className="text-xl font-semibold">
            Let your friends, family, and co-workers (anonymously) rate your
            social skills.
          </h4>
          <h2 className="text-6xl font-semibold">
            Ever wondered what others think of you?
          </h2>
        </div>
        <div className="my-10 w-[80%] mx-auto relative flex justify-between char-main  ">
          {characters.map((char) => (
            <CharBox
              img={char.img}
              title={char.title}
              alt={char.alt}
              key={uuid()}
            />
          ))}
          <div className="line absolute"></div>
        </div>

        <div className="levels bg-white  min-h-[250px] flex justify-center items-center w-[70%] mx-auto my-20 rounded-2xl">
          <div className="flex justify-between w-full px-10">
            {levels.map((level, index) => {
              return (
                <div
                  className="level"
                  key={uuid()}
                  style={{ background: level.color }}
                >
                  <h3
                    className={`level-heading ${
                      index % 2 == 0 ? "odd" : "even"
                    } p-3 rounded-2xl whitespace-nowrap text-xl font-medium`}
                    style={{ background: level.color }}
                  >
                    {level.level_name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedBanner;
