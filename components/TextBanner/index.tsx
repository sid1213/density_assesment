import React from "react";

const TextBanner = () => {
  return (
    <section className="section relative " id="section-2">
      <div className="flex flex-nowrap md:flex-row flex-col" data-aos="fade-up">
        <div className="lg:w-1/3 p-5 flex">
          <h3 className="md:w-fit md:mx-auto">EQ beats IQ</h3>
        </div>
        <div className="lg:w-1/2 flex md:flex-row flex-col p-5 md:space-x-7 md:space-y-0 space-y-7">
          <p className="md:text-xl text-base">
            People with high emotional intelligence (EQ) live more fulfilled
            lives. They tend to be happier and have healthier relationships.
          </p>
          <p className="md:text-xl text-base">
            They are more successful in their pursuits and make for inspiring
            leaders. According to science, they earn $29k a year.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TextBanner;
