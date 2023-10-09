import Image from "next/image";
import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import myavatar from "/public/assets/myAvatar.png";

const AboutMe = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });
  
  const avatarRef = useRef();

  const handleAvatarLoad = () => {
    if (avatarRef.current) {
      avatarRef.current.classList.add("animate-slide-right");
    }
  };

  return (
    <div className="p-8 bg-transparent  mx-auto overflow-hidden  ">
      <div className="text-5xl text-center mb-8">
         <h1 >About Me</h1>
      </div>
     
      <div className="flex ">
        <div className="flex justify-start ">
           <div className="p-1 w-1/2 about-text">
          <p className="text-xl italic leading-relaxed indent-8 text-justify ml-12 mr-12 mt-10 ">
            <span className="not-italic">Hey, I am Kris.</span> I am a Software
            Technology Engineering student from Latvia. I am a team player,
            motivated, and goal-oriented. My passion for software engineering is
            fueled by the belief that technology can transform the world. In my
            free time, I enjoy exploring new technologies and experimenting with
            programming languages. Thank you for visiting my portfolio website!
          </p>
        </div>
        <div
          ref={avatarRef}
          className="p-1 w-1/2 flex justify-center items-center transform transition-transform duration-1000"
          onLoad={handleAvatarLoad}
          style={{
            transform: inView ? "translateX(0)" : "translateX(260px)",
            transition: "transform 1s ease-out",
          }}
          {...{ ref }}
        >
          <Image
            className="rounded-full border border-transparent shadow-xl shadow-purple-800 animate-slide-right"
            src={myavatar}
            alt=""
            width="400"
            height="400"
          />
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default AboutMe;
