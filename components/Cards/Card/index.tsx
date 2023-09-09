import Image from "next/image";
import React from "react";

interface PropType {
  bg_clr: string;
  src: string;
  heading: string;
  description: string;
  hanging: boolean;
}

const Card: React.FC<PropType> = ({
  bg_clr,
  src,
  heading,
  description,
  hanging,
}) => {
  return (
    <div
      className={`p-8 space-y-2  w-[350px]   rounded-2xl hanging `}
      style={{
        backgroundColor: bg_clr,
        transform: hanging ? "rotate(-6deg)" : "rotate(0)",
        transformOrigin: "top left",
      }}
    >
      <Image
        src={`/${src}`}
        width={50}
        height={50}
        objectFit="contain"
        alt="card-icon"
      />
      <h4 className="font-semibold">{heading}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Card;
