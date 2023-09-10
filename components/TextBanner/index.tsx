import React from "react";

const TextBanner = () => {
  return (
    <section className="section relative " id="section-2">
      <div className="flex flex-nowrap md:flex-row flex-col" data-aos="fade-up">
        <div className="lg:w-1/3 p-5 flex">
          <h3 className="md:w-fit md:mx-auto">Discover the Mario Universe</h3>
        </div>
        <div className="lg:w-1/2 flex md:flex-row flex-col p-5 md:space-x-7 md:space-y-0 space-y-7">
          <p className="md:text-xl text-base">
            Embark on thrilling journeys, collect power-ups, and save the
            princess from Bowser&apos;s clutches!
          </p>
          <p className="md:text-xl text-base">
            Join Mario and friends in epic races, challenges, and multiplayer
            battles across iconic worlds.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TextBanner;
