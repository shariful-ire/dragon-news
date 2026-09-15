import Navlink from "./Navlink";

import Image from "next/image";
import user from "@/assets/user.png";

const NavBar = () => {
  return (
    <div className="relative flex items-center justify-between w-[80%] mx-auto">
      
      {/* Empty left space */}
      <div></div>

      {/* Center Navigation */}
      <ul className="absolute left-1/2 -translate-x-1/2 flex gap-8 text-4xl text-amber-300">
        <li>
          <Navlink href="/">Home</Navlink>
        </li>

        <li>
          <Navlink href="/about">About</Navlink>
        </li>

        <li>
          <Navlink href="/career">Career</Navlink>
        </li>
      </ul>

      {/* Right Side */}
      <div className="ml-auto flex items-center gap-4">
        <Image
          src={user}
          alt="User"
          width={50}
          height={50}
          className="w-10 h-10 rounded-full object-cover"
        />

        <button className="btn btn-error">
          Login
        </button>
      </div>

    </div>
  );
};

export default NavBar;