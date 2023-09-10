import React from "react";
import "./index.scss";
import Image from "next/image";
interface PropType {
  heading: string;
  paragraph: string;
  color: string;
}
const Step: React.FC<PropType> = ({ heading, paragraph, color }) => {
  return (
    <div
      data-aos="fade-up-left"
      className={`space-y-3 flex p-5 rounded-2xl  items-center space-x-10  md:w-[70%] w-[90%] mx-auto transition-opacity duration-300`}
      style={{ background: color }}
    >
      <Image
        src={`/mario-flag.png`}
        width={55}
        height={55}
        objectFit="contain"
        alt="flag"
      />

      <div className=" space-y-2 ">
        <h4 className="font-semibold ">{heading}</h4>
        <p className="">{paragraph}</p>
      </div>
    </div>
  );
};

export default Step;
