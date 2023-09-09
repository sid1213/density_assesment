import React from "react";
import "./index.scss";
interface PropType {
  heading: string;
  paragraph: string;
}
const Step: React.FC<PropType> = ({ heading, paragraph }) => {
  return (
    <div
      data-aos="fade-up"
      className={`space-y-3 pl-10 pb-20 md:w-[70%] w-[90%] mx-auto border-l-4 border-blue-300 dot transition-opacity duration-300`}
    >
      <div className="">
        <h4 className="font-semibold translate-y-[-50%] ">{heading}</h4>
        <p className="">{paragraph}</p>
      </div>
    </div>
  );
};

export default Step;
