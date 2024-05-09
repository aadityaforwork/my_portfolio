import React, { useEffect, useRef } from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import mongodb from "../assets/mongodb.png"
import nodejs from "../assets/node.png";
import { motion, useInView, useAnimation } from "framer-motion";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView,mainControls]);

  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-200",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-300",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-300",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-800",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-300",
    },
    {
      id: 6,
      src: github,
      title: "GitHub",
      style: "shadow-gray-500",
    },
    {
      id: 7,
      src: mongodb,
      title: "Mongo DB", // New
      style: "shadow-purple-500", // New
    },
    {
      id: 8,
      src: nodejs,
      title: "Node.js", // New
      style: "shadow-green-500", // New
    },
    // {
    //   id: 9,
    //   src: nextjs,
    //   title: "Next js", // New
    //   style: "shadow-black-500", // New
    // },
  ];

  return (
    <div className="w-full" id="resume">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-black">
        <div ref={ref}>
          <div className=" mt-10 flex flex-col justify-center items-center">
            <h2 className="titleBackground">RESUME</h2>
            <h1 className=" absolute text-xl md:text-4xl font-serif font-bold border border-b-[#00df9a] border-b-4 w-fit border-t-0 border-l-0 border-r-0">
              My Skills
            </h1>
          </div>
        </div>

        <div className=" w-full grid grid-cols-2 sm:grid-cols-3 md:gap-12 gap-4 text-center py-8 md:px-10 px-4">
          {techs.map(({ id, src, title, style }) => (
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              animate={mainControls}
              transition={{ delay: 0.5 }}
              key={id}
              className={`shadow-lg bg-gray-900 mt-5 font-bold text-white hover:scale-105 duration-500 px-2 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-[20vh] mx-auto" />
              <p className="mt-4">{title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
