import Image from "next/image";
import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";

const Skills = () => {

 
    const [ref, inView] = useInView({
      threshold: 0.1,
    });

    const skillsRef = useRef();

    const handleSkillsLoad = () => {
      if (skillsRef.current) {
        skillsRef.current.classList.add("animate-slide-left");
      }
    };

    return (
      <div className="flex flex-col justify-center items-center p-4">
        <h2 className="text-5xl font-bold text-center mb-8">Skills</h2>
        <div ref={skillsRef}
        className="flex flex-wrap justify-center items-center p-4"
        onLoad={handleSkillsLoad}
        style={{
          transform: inView ? "translateX(0)" : "translateX(-360px)",
          transition: "transform 1s ease-out",
        }}
        {...{ ref }}>
          <Image
            src="/../public/assets/skills/java.png"
            width="100"
            height="50"
            alt="Java"
            className=" mx-4 my-2 "
          />
          <Image
            src="/../public/assets/skills/csharp.png"
            width="100"
            height="50"
            alt="C#"
            className=" mx-4 my-2"
          />
          <Image
            src="/../public/assets/skills/postgrsql.png"
            width="100"
            height="50"
            alt="PostgreSQL"
            className=" mx-4 my-2"
          />
          <Image
            src="/../public/assets/skills/html.png"
            width="100"
            height="50"
            alt="HTML"
            className="mx-4 my-2"
          />
          <Image
            src="/../public/assets/skills/css.png"
            width="100"
            height="50"
            alt="CSS"
            className="mx-4 my-2"
          />
          <Image
            src="/../public/assets/skills/bootstrap.png"
            width="100"
            height="50"
            alt="Bootstrap"
            className=" mx-4 my-2"
          />
          <Image
            src="/../public/assets/skills/tailwind.png"
            width="100"
            height="50"
            alt="Tailwind"
            className=" mx-4 my-2"
          />
          <Image
            src="/../public/assets/skills/react.png"
            width="100"
            height="50"
            alt="React.js"
            className=" mx-4 my-2"
          />
          <Image
            src="/../public/assets/skills/nextjs.png"
            width="100"
            height="50"
            alt="Next.js"
            className=" mx-4 my-2"
          />
          <Image
            src="/../public/assets/skills/javascript.png"
            width="100"
            height="50"
            alt="JavaScript"
            className=" mx-4 my-2"
          />
        </div>
      </div>
    );
  };

export default Skills;
