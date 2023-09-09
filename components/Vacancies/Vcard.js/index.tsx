"use client";
import { useState } from "react";
import React from "react";
import { uuid } from "uuidv4";

interface vCardProps {
  title: String;
  content: String[];
}
function Vcard({ title, content }: vCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`card${
        isHovered ? "hovered" : ""
      } bg-[#fefbec] hover:bg-[#f9f3d4] flex-grow p-8 rounded-2xl cursor-pointer transition-all`}
      key={uuid()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="vHead my-3">
        <h4 className="font-semibold">{title}</h4>
      </div>
      <div className="vBody pl-4">
        <ul className=" list-disc ">
          {content.map((item) => (
            <li className="mb-2 text-black" key={uuid()}>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className={`vFooter${isHovered ? "visible" : ""}`}>
        <button
          className=" bg-black text-white rounded-full mt-4 px-6 py-3 text-sm"
          data-aos="fade-up"
        >
          See Details
        </button>
      </div>
    </div>
  );
}

export default Vcard;
