import React from "react";
import "./index.scss";
import { TypeAnimation } from "react-type-animation";

const GetStarted = () => {
  return (
    <section className="rounded-3xl min-h-fit py-10">
      <div
        className="md:w-3/6 mx-auto flex justify-center items-center flex-col text-center"
        data-aos="fade-up"
      >
        <p className="privacy  font-semibold">We take privacy seriously</p>
        <h3 className="text-2xl font-bold my-3">
          Before you get started Mario
        </h3>

        <p className=" ">
          &quot;Welcome to the world of Mario! Remember, it&apos;s not just
          about designing levels; it&apos;s about crafting adventures,
          surprises, and fun. Dive in with creativity and enthusiasm! 🍄🌟&quot;
        </p>

        <p className=" font-semibold my-3">
          with love,{" "}
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Team Mario 🍄",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "With Love ❤️",
              2000,
            ]}
            wrapper="span"
            speed={50}
            className=" text-2xl italic spl-text text-black"
            repeat={Infinity}
          />
        </p>

        <button className=" px-6 py-3 bg-black text-white rounded-full my-5 ">
          Start a Game
        </button>

        <p className=" font-semibold"> Enjoy the game</p>
      </div>
    </section>
  );
};
export default GetStarted;
