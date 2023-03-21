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
    <div className="fixed w-full h-15 shadow-xl z-[500] bg-neutral-800 bg-opacity-75 ">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-12 ">
        <Image
          src="/../public/assets/kdlogo.png"
          alt="/"
          width="77"
          height="38"
        />
        <div className='scroll-smooth'>
          <ul className="hidden md:flex">
            <Link href="/#aboutMe">
              <li className="ml-8 text-sm uppercase hover:boarder-b text-white">
                about Me
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-8 text-sm uppercase hover:boarder-b text-white">
                projects
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-8 text-sm uppercase hover:boarder-b text-white">
                skills
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-8 text-sm uppercase hover:boarder-b text-white">
                contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <TiThMenu size={27} color={"white"} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-[#390847]/50" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-neutral-800 p-6 ease-in duration-500"
              : "fixed left-[-100%] h-screen top-0 p-6 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/../public/assets/kdlogo.png"
                width="100"
                height="35"
                alt="/"
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow shadow-white"
              >
                <TiTimes size={35} color={"white"} />
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
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
                  <div className="rounded-full shadow shadow-white p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <TiSocialGithub size={35} color={"white"} />
                  </div>
                  <div className="rounded-full shadow shadow-white p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <TiSocialInstagram size={35} color={"white"} />
                  </div>
                  <div className="rounded-full shadow shadow-white p-3 cursor-pointer hover:scale-105 ease-in duration-300">
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
