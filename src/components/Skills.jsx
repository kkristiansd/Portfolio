import Image from "next/image";
import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import bootstrap from "/public/assets/skills/bootstrap.png"
import csharp from "/public/assets/skills/csharp.png"
import css from "/public/assets/skills/css.png"
import html from "/public/assets/skills/html.png"
import java from "/public/assets/skills/java.png"
import javascript from "/public/assets/skills/javascript.png"
import nextjs from "/public/assets/skills/nextjs.png"
import postgrsql from "/public/assets/skills/postgrsql.png"
import react from "/public/assets/skills/react.png"
import tailwind from "/public/assets/skills/tailwind.png"

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
    <div className="flex flex-col justify-center items-center p-4 overflow-hidden">
      <h2 className="text-5xl font-bold text-center mb-8">Skills</h2>
      <div
        ref={skillsRef}
        className="flex flex-wrap justify-center items-center p-4 overflow-hidden"
        onLoad={handleSkillsLoad}
        style={{
          transform: inView ? "translateX(0)" : "translateX(-360px)",
          transition: "transform 1s ease-out",
        }}
        {...{ ref }}
      >
        <Image
          src={java}
          width="80"
          height="50"
          alt="Java"
          className=" mx-4 my-2 "
        />
        <Image
          src={csharp}
          width="80"
          height="50"
          alt="C#"
          className=" mx-4 my-2"
        />
        <Image
          src={postgrsql}
          width="80"
          height="50"
          alt="PostgreSQL"
          className=" mx-4 my-2"
        />
        <Image
          src={html}
          width="80"
          height="50"
          alt="HTML"
          className="mx-4 my-2"
        />
        <Image
          src={css}
          width="80"
          height="50"
          alt="CSS"
          className="mx-4 my-2"
        />
        <Image
         src={bootstrap}
          width="80"
          height="50"
          alt="Bootstrap"
          className=" mx-4 my-2"
        />
        <Image
          src={tailwind}
          width="80"
          height="50"
          alt="Tailwind"
          className=" mx-4 my-2"
        />
        <Image
          src={react}
          width="80"
          height="50"
          alt="React.js"
          className=" mx-4 my-2"
        />
        <Image
          src={nextjs}
          width="80"
          height="50"
          alt="Next.js"
          className=" mx-4 my-2"
        />
        <Image
          src={javascript}
          width="80"
          height="50"
          alt="JavaScript"
          className=" mx-4 my-2"
        />
      </div>
    </div>
  );
};

export default Skills;
