import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  TiThMenu,
  TiSocialGithub,
  TiTimes,
  TiSocialInstagram,
  TiSocialFacebook,
} from "react-icons/ti";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          src="/../public/assets/kdlogo5.png"
          alt="/"
          width="125"
          height="50"
        />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-lg uppercase hover:boarder-b text-white">
                home
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-lg uppercase hover:boarder-b text-white">
                about Me
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-lg uppercase hover:boarder-b text-white">
                projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-lg uppercase hover:boarder-b text-white">
                skills
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-lg uppercase hover:boarder-b text-white">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <TiThMenu size={35} color={"white"} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/50" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#270a2e] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/../public/assets/kdlogo5.png"
                width="100"
                height="35"
                alt="/"
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-800"
              >
                <TiTimes size={35} color={"white"} />
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link href="/">
                  <li className="py-4 text-sm text-white ">Home</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm text-white ">About Me</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm text-white ">Projects</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm text-white ">Skills</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm text-white ">Contact</li>
                </Link>
              </ul>
              <div className="pt-40">
                <p className="uppercase traching-widest text-white">
                  Check me out
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <div className="rounded-full shadow-lg shadow-gray-800 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <TiSocialGithub size={35} color={"white"} />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-800 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <TiSocialInstagram size={35} color={"white"} />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-800 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <TiSocialFacebook size={35} color={"white"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
