import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar  ">
      <div className="navbar-child">
        <div>
          <Image src="/logo.png" width={75} height={75} alt="logo" />
        </div>
        <ul className="flex space-x-10">
          <li>Emotions</li>
          <li>Manifesto</li>
          <li>Self-awareness test</li>
          <li>Work with us</li>
        </ul>
        <div>
          <button className="download-btn"> Download App</button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
