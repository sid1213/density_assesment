import Image from "next/image";
import React from "react";
import "components/MeetApp/index.scss";

const MeetApp = () => {
  return (
    <section className="rounded-3xl min-h-[50vh] lg:px-10 px-5 pt-10 relative">
      <div className="heading relative" data-aos="fade-right">
        <h4>Build out of frustration</h4>
        <h2 className="my-3">Meet the Mario App</h2>
      </div>
      <div className="content flex justify-between items-center flex-grow lg:flex-row flex-col">
        <div className="img flex justify-center lg:w-1/2" data-aos="zoom-in">
          <Image src={"/meet.png"} width={400} height={400} alt="eney" />
        </div>
        <div className="main_content lg:w-1/2 mt-4" data-aos="fade-left">
          <p>
            Mario App brings the magic of Mario to your device, allowing you to
            play anytime anywhere, Whether you&apos;re on your morning commute
            or relaxing at home, the adventure never stops. Our intuitive
            interface ensures that players of all ages and skill levels can jump
            right into the action with ease.
            <br />
            <br />
            Your gaming experience is our top priority. Mario App provides a
            safe and secure platform for you to enjoy the Mario universe without
            worry.Play with friends on different devices seamlessly. Connect
            with friends, challenge them, and see who can conquer the Mushroom
            Kingdom faster. With a vast library of Mario games at your
            fingertips, you can explore classics like Super Mario Bros. Mario
            Kart, and modern hits like Super Mario Odyssey, all in one place.
            Join a global community of Mario enthusiasts. Share your
            achievements, compete in challenges, and connect with fellow players
            who share your passion.
          </p>
        </div>
      </div>

      <div className="coin1 absolute"></div>
      <div className="coin2 absolute"></div>
    </section>
  );
};

export default MeetApp;
