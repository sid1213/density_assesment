import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer 2xl:container mx-auto relative px-5 mt-10 border-t min-h-[40vh] flex justify-center">
      <div className="footer_content md:w-2/4 mx-auto flex justify-center items-center flex-col py-10">
        {/* logo */}
        <Image
          width={65}
          height={65}
          alt={"footer logo"}
          src={"/Logo-PNG.png"}
        />

        {/* app name */}
        <h3 className="text-xl font-semibold mt-2 mb-4">Mario</h3>
        <p className="text-sm mb-4">Bringing Mario Magic to Your Screen</p>

        {/* details */}
        <div className="location flex lg:space-x-8 justify-between items-center lg:flex-row flex-col lg:space-y-0 space-y-3">
          <p className="text-[12px] font-semibold flex">
            <span className="py-1 px-1 bg-blue-200 rounded-full mr-2">
              <Image
                src="/location-pin.png"
                width={12}
                height={0}
                objectFit="contain"
                alt="google app store"
              />
            </span>
            123 Mushroom Street, Toad Town
          </p>
          <p className="text-[12px] font-semibold flex">
            <span className="py-1 px-[5px] bg-blue-200 rounded-full mr-2">
              <Image
                src="/mail.png"
                width={12}
                height={0}
                objectFit="contain"
                alt="google app store"
              />
            </span>
            contact@marioapp.com
          </p>
        </div>

        {/* playStore button */}
        <Image
          src="/appstore.svg"
          width={120}
          height={120}
          objectFit="contain"
          alt="google app store"
          className="my-6"
        />

        {/* copyright */}
        <p className="text-[12px]">@ 2023 mario app. All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
