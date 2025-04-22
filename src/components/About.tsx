"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // ✅ animate แค่ครั้งแรกที่เลื่อนถึง

  return (
    <motion.div
      id="about"
      ref={ref}
      className="w-full px-6 md:px-12 lg:px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl">About me</h2>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 mt-3">
        <div className="flex w-full lg:w-[70%] flex-col items-center lg:items-start justify-center mt-8 lg:mt-0">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="w-40 sm:w-64 md:w-80 rounded-3xl max-w-none flex justify-center"
          >
            <Image
              src="/assets/profile.png"
              alt="profile"
              width={160}
              height={160}
              quality={100}
              className="w-40 h-40 sm:w-60 sm:h-60 rounded-3xl object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          className="flex w-full flex-col lg:justify-start lg:items-start justify-center items-center gap-6 mt-5"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="mb-4 max-w-xl text-sm md:text-base lg:text-lg"> I&apos;m a recent graduate passionate about front-end development, eager to learn through hands-on projects and collaboration. I aim to develop my skills and contribute to impactful outcomes, preparing for a successful career as a Web Developer. </p>

          <div className="grid grid-cols-1 sm:grid-cols lg:grid-cols-3 gap-4">
            <div className="border p-4 rounded-xl hover:bg-black hover:text-white group duration-500 ease-out">
              <Image
                src="/assets/edu-icon.png"
                alt="icon"
                width={20}
                height={20}
                className="mb-2"
              />
              <h3 className="text-lg font-semibold">Education</h3>
              <p className="text-sm">
                Bachelor Degree of Computer Engineering
              </p>
            </div>
          </div>

          <div>
            <h4 className="mt-6 mb-2 text-lg">Skills</h4>
            <div className="grid grid-cols-4 gap-2">
              {[
                "Typescript",
                "Javascript",
                "ReactNative",
                "ReactJS",
                "NextJS",
                "HTML",
                "CSS",
                "TailwindCSS",
                "PHP",
                "Git",
              ].map((skill) => (
                <h1
                  key={skill}
                  className="text-sm sm:text-base border px-3 py-1 rounded-lg flex items-center justify-center hover:scale-105 bg-white"
                >
                  {skill}
                </h1>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
