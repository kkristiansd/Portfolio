import Image from "next/image";
import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";

const AboutMe = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  const imageRef = useRef();

  const handleImageLoad = () => {
    if (imageRef.current) {
      imageRef.current.classList.add("animate-slide-right");
    }
  };

  return (
    <div className="p-8 bg-transparent max-w-5xl mx-auto overflow-hidden">
      <h2 className="text-5xl text-center mb-8">About Me</h2>
      <div className="flex space-x-8 h-100 ">
        <div className="p-1 w-2/3">
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
          ref={imageRef}
          className="p-1 w-1/3 flex justify-center items-center "
          onLoad={handleImageLoad}
          style={{
            transform: inView ? "translateX(0)" : "translateX(360px)",
            transition: "transform 1s ease-out",
          }}
          {...{ ref }}
        >
          <Image
            className="rounded-full border border-transparent shadow-2xl shadow-purple-800"
            src="/../public/assets/myAvatar (1).png"
            alt=""
            width="400"
            height="400"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
