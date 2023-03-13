import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <div className="p-8 bg-transparent">
      <div className="grid grid-cols-2 mx-72">
        <div className="p-4 flex item-center justify-center bg-transparent ">
            <p className="text-2xl font-semibold leading-relaxed indent-8">
            <p class="italic text-base font-normal leading-loose mt-6">
              Hey, I'm Kris
            </p>
                 I'm a Software Technology Engineering student from Latvia. I'm a
              team player, motivated, and goal-oriented. My passion for software
              engineering is fueled by the belief that technology can transform
              the world. In my free time, I enjoy exploring new technologies and
              experimenting with programming languages. Thank you for visiting
              my portfolio website!
            </p>
        </div>
        <div className="p-4 flex item-center justify-center bg-transparent ">
          <Image className="transform -scale-x-100 rounded-full bg-transparent border border-transparent shadow-2xl shadow-purple-800 relative w-500 h-300 "
            src="/../public/assets/myAvatar (1).png"
            alt="/"
            width="400"
            height="30"
            
          />
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
