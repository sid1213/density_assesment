import React from "react";
import "./index.scss";
interface PropType {
  heading: string;
  paragraph: string;
}
const Step: React.FC<PropType> = ({ heading, paragraph }) => {
  return (
    <div className="space-y-3 px-10 pb-20 w-[70%] mx-auto border-l-4 border-purple-800 dot">
      <div className="">
        <h4 className="font-semibold text-2xl translate-y-[-50%] ">
          {heading}
        </h4>
        <p className="text-xl">{paragraph}</p>
      </div>
    </div>
  );
};

export default Step;
