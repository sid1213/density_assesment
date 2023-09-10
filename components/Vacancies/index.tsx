import React from "react";
import "components/Vacancies/index.scss";
import Vcard from "./Vcard.js";
import { uuid } from "uuidv4";

const vData = [
  {
    title: "Mario Developer",
    content: [
      "Super Mario Bros. development",
      "Mario Kart level design",
      "Team collaboration",
    ],
  },
  {
    title: "Senior Mario Developer",
    content: [
      "Mario Galaxy leadership",
      "Innovative power-ups",
      "Performance optimization",
    ],
  },
  {
    title: "Lead Mario Developer",
    content: [
      "Oversaw Mario titles",
      "Team management",
      "Player feedback-driven improvements",
    ],
  },
];

function Vacancies() {
  return (
    <section className=" section ">
      <div className="vacancies min-h-[50vh] overflow-hidden rounded-3xl lg:px-10 px-5 py-10 relative mt-0">
        <h2 className="my-10" data-aos="fade-right">
          Our Mario Devs
        </h2>
        <div className="container flex justify-between lg:space-x-10 lg:space-y-0 space-y-10 lg:flex-row flex-col">
          {vData.map((item) => (
            <Vcard title={item.title} content={item.content} key={uuid()} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Vacancies;
