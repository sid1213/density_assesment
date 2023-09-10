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
      <div className="text-center p-10 md:px-0 px-2 bg-red-100 animated-banner rounded-2xl">
        <div className="md:p-10 space-y-2" data-aos="fade-down">
          <p className="font-semibold">
            Discover the Iconic Elements of Mario&apos;s Adventures
          </p>
          <h2>Enter the World of Mushrooms and Levels?</h2>
        </div>
        <div className="my-10 lg:w-[80%] items-center md:items-start w-[98%] mx-auto relative md:h-auto h-[50vh] flex justify-between char-main  md:flex-row flex-col">
          {characters.map((char) => (
            <CharBox
              img={char.img}
              title={char.title}
              alt={char.alt}
              key={uuid()}
            />
          ))}
          <div className="line absolute lg:w-[95%] md:w-[90%] w-0 md:h-auto h-[45vh] md:max-h-[100px] max-h-full"></div>
        </div>

        <div className="levels bg-white left-[45%] min-h-[250px] flex justify-center items-center md:w-[75%] mx-auto my-20 rounded-2xl">
          <div className="flex justify-between w-full md:px-10 md:flex-row flex-col md:h-auto h-[49vh] p-3 lg:items-start items-center">
            {levels.map((level, index) => {
              return (
                <div
                  className="level"
                  key={uuid()}
                  style={{ background: level.color }}
                >
                  <h4
                    data-aos="zoom-in"
                    className={`level-heading ${
                      index % 2 == 0 ? "odd" : "even"
                    } p-3 rounded-2xl whitespace-nowrap font-medium`}
                    style={{ background: level.color }}
                  >
                    {level.level_name}
                  </h4>
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
