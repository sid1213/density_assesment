import Image from "next/image";
import React from "react";

interface PropType {
  img: string;
  alt: string;
  title: string;
}
const index: React.FC<PropType> = ({ img, alt, title }) => {
  return (
    <div className="w-fit ">
      <div className="char-box p-5 relative" data-aos="zoom-in">
        <Image
          src={`/${img}`}
          width={75}
          height={75}
          objectFit="contain"
          alt={alt}
        />
        <div className="mt-2 absolute left-1/2 md:bottom-[-30%] w-fit md:translate-x-[-50%] md:translate-y-[50%] translate-x-[50px] translate-y-[-38px] origin-center">
          <p
            className="uppercase text-red-600 lg:text-xl text-sm font-semibold whitespace-nowrap"
            data-aos="zoom-out"
          >
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
