import React from "react";

const TextBanner = () => {
  return (
    <section className="section">
      <div className="flex p-5 flex-nowrap">
        <div className="w-1/3 p-5 flex  ">
          <h3 className="text-2xl font-semibold w-fit mx-auto">EQ beats IQ</h3>
        </div>
        <div className="w-1/2 flex p-5 text-lg space-x-4">
          <p>
            People with high emotional intelligence (EQ) live more fulfilled
            lives. They tend to be happier and have healthier relationships.
          </p>
          <p>
            They are more successful in their pursuits and make for inspiring
            leaders. According to science, they earn $29k a year.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TextBanner;
