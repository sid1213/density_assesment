import Image from "next/image";
import "components/HeroBanner/index.scss";
import { uuid } from "uuidv4";
const HeroBanner = () => {
  return (
    <section className="bg-blue-400 rounded-3xl hero-banner px-10 py-16 relative ">
      <div className="w-1/2  ">
        <p className="text-white mario-text">Ahead App</p>
        <h1 className="text-6xl mt-5 font-bold text-white mario-text">
          Master your life <br />
          by mastering <br />
          emotions
        </h1>
        <div className="flex space-x-10 items-center mt-20">
          <Image
            src="/appstore.svg"
            width={175}
            height={300}
            objectFit="contain"
            alt="google app store"
          />
          <div>
            <div className="flex space-x-2 ">
              {Array(5)
                .fill(null)
                .map((star) => (
                  <Image
                    key={uuid()}
                    src="/star.png"
                    width={20}
                    height={20}
                    objectFit="contain"
                    alt="google app store"
                  />
                ))}
            </div>
            <p className="text-sm text-white mt-1 mario-text">
              100+ AppStore reviews
            </p>
          </div>
        </div>
      </div>
      <div className="floor absolute"></div>
      <div className="single-bush objectPlaced"></div>
      <div className="double-bush objectPlaced"></div>
      <div className="cloud-one objectPlaced"></div>
      <div className="cloud-two objectPlaced"></div>
      <div className="cloud-three objectPlaced"></div>
      <div className="relative flex justify-center bricks objectPlaced">
        <div className="brick bg-no-repeat bg-contain"></div>
        <div className="brick bg-no-repeat bg-contain"></div>
        <div className="question-brick bg-no-repeat bg-contain"></div>
        <div className="brick bg-no-repeat bg-contain"></div>
        <div className="brick bg-no-repeat bg-contain"></div>
      </div>
    </section>
  );
};

export default HeroBanner;
