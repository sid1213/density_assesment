import React from "react";

const GetStarted = () => {
  return (
    <section className="rounded-3xl min-h-fit py-10">
      <div
        className="md:w-3/6 mx-auto flex justify-center items-center flex-col text-center"
        data-aos="fade-up"
      >
        <p className="privacy text-sm font-semibold">
          We take privacy seriously
        </p>
        <h3 className="text-2xl font-bold my-3">
          Before you get started Mario
        </h3>

        <p className="text-lg">
          "Welcome to the world of Mario! Remember, it's not just about
          designing levels; it's about crafting adventures, surprises, and fun.
          Dive in with creativity and enthusiasm! 🍄🌟"
        </p>

        <p className="text-sm font-semibold my-3">
          with love,
          <span className="text-base italic text-black">Team Mario</span>
        </p>

        <button className="text-xs px-6 py-3 bg-black text-white rounded-full my-5">
          Start a Game
        </button>

        <p className="text-[11px] font-semibold"> Enjoy the game</p>
      </div>
    </section>
  );
};
export default GetStarted;
