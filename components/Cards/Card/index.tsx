import Image from "next/image";
import React from "react";

interface PropType {
  bg_clr: string;
  src: string;
  heading: string;
  description: string;
}

const Card: React.FC<PropType> = ({ bg_clr, src, heading, description }) => {
  return (
    <div
      className={`p-8 space-y-2  w-[350px]   rounded-2xl  `}
      style={{ backgroundColor: bg_clr }}
    >
      <Image
        src={`/${src}`}
        width={50}
        height={50}
        objectFit="contain"
        alt="card-icon"
      />
      <h5 className="text-2xl font-semibold">{heading}</h5>
      <p>{description}</p>
    </div>
  );
};

export default Card;
