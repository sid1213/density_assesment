import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar  ">
      <div className=" container  mx-auto navbar-child">
        <div>
          <Image src="/logo.png" width={75} height={75} alt="logo" />
        </div>
        <ul className="flex space-x-10">
          <li className="text-black">Emotions</li>
          <li className="text-black">Manifesto</li>
          <li className="text-black">Self-awareness test</li>
          <li className="text-black">Work with us</li>
        </ul>
        <div>
          <button className="download-btn"> Download App</button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
