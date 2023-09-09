"use client";
import Image from "next/image";
import React from "react";
import "components/MeetApp/index.scss";

const MeetApp = () => {
  return (
    <section className="rounded-3xl min-h-[50vh] lg:px-10 px-5 pt-10 relative">
      <div className="heading">
        <h4 className="md:text-xl text-base">Build out of frustration</h4>
        <h2 className="lg:text-6xl text-3xl font-semibold my-3">
          Meet the Mario App
        </h2>
      </div>
      <div className="content flex justify-between items-center flex-grow lg:flex-row flex-col">
        <div className="img flex justify-center lg:w-1/2 bg-white">
          <Image src={"/meet.png"} width={400} height={400} alt="eney" />
        </div>
        <div className="main_content lg:w-1/2 mt-4">
          <p>
            Mario app offers a fun and engaging way to stay connected with
            friends and family through interactive games and challenges. Its
            user-friendly interface and wide variety of mini-games make it
            perfect for bonding and entertainment.
            <br />
            <br />
            Whether you&apos;re looking to kill time or foster closer
            relationships, Mario app provides an enjoyable platform to do so.Its
            user-friendly interface and wide variety of mini-games make it
            perfect for bonding and entertainment.
          </p>
        </div>
      </div>

      <div className="coin1 absolute"></div>
      <div className="coin2 absolute"></div>
    </section>
  );
};

export default MeetApp;
