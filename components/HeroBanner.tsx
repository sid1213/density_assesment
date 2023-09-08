import Image from "next/image";
import { uuid } from "uuidv4";
const HeroBanner = () => {
  return (
    <section className="bg-blue-400 rounded-3xl hero-banner px-10 py-16 relative">
      <div className="w-1/2  ">
        <p>Ahead App</p>
        <h1 className="text-6xl mt-5 font-bold text-white">
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
            <div className="flex space-x-3 ">
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
            <p className="text-sm">100+ AppStore reviews</p>
          </div>
        </div>
      </div>
      <div className="floor"></div>
      <div className="single-bush"></div>
      <div className="double-bush"></div>
      <div className="cloud-one"></div>
      <div className="cloud-two"></div>
      <div className="cloud-three"></div>
      <div className="relative flex justify-center bricks">
        <div className="brick"></div>
        <div className="brick"></div>
        <div className="question-brick"></div>
        <div className="brick"></div>
        <div className="brick"></div>
      </div>
    </section>
  );
};

export default HeroBanner;
