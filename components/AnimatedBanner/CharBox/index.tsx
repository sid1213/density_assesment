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
      <div className="char-box p-5 relative">
        <Image
          src={`/${img}`}
          width={75}
          height={75}
          objectFit="contain"
          alt={alt}
        />
        <div className="mt-2 absolute left-1/2 bottom-[-30%] translate-x-[-50%]  origin-center">
          <p className="uppercase text-red-600 text-xl font-semibold whitespace-nowrap  	">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
