import React from 'react';
import { HERO_CONTENT } from '../constants';
import { motion } from "framer-motion"; // Fixed incorrect import

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-20 lg:px-10">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="lg:pb-10 pb-4 text-5xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Arijit Ghosh
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              React Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 mx-2 max-w-xl py-6 font-light tracking-tight text-justify" // ✅ Justified text
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src="https://res.cloudinary.com/dds4wowea/image/upload/v1736659592/20241008_143300_nyp2jw.jpg"
              alt=""
              className="w-80 border-black rounded-xl opacity-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
