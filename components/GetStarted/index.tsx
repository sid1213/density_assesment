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
        <p className="privacy  font-semibold">Ready to Jump into the Action?</p>
        <h3 className="text-2xl font-bold my-3">Get Started Today</h3>

        <p className=" ">
          &quot;Join millions of gamers worldwide and experience the nostalgia,
          excitement, and challenges of the Mario universe. Download the Mario
          App now and start your adventure! 🍄🌟&quot;
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
