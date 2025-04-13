import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full px-6 md:px-12 lg:px-[12%] py-10 scroll-mt-20"
    >
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl">About me</h2>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 mt-3">
        <div className=" flex w-full lg:w-[70%] lg:top-3 flex-col items-center lg:items-start justify-center mt-8 lg:mt-0">
          <div className="  w-40 sm:w-64 md:w-80 rounded-3xl max-w-none flex justify-center ">
            <Image
              src="/assets/profile.png"
              alt=""
              width={160}
              height={160}
              quality={100}
              className="w-40 h-40 sm:w-60 sm:h-60 rounded-3xl object-cover"
            />
          </div>
        </div>
        <div className="flex  w-full flex-col lg:justify-start lg:items-start justify-center items-center gap-6 mt-5">
          <p className=" mb-4 max-w-xl text-sm md:text-base lg:text-lg">
            I &apos;m a recent graduate passionate about front-end development.
            I am eager to collaborate with others, continuously develop my
            skills. Ready to develop yourself to have skills in working and I
            want to enhance skills thought hands-on learning, collaboration
            ondiverse projects,and delivering impactful outcome, all geared
            towards preparing for successful career in the Web Developer.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div
              className="border p-4 rounded-xl  hover:bg-[#000000]  hover:text-white group
               duration-500 ease-out"
            >
              <Image
                src="/assets/edu-icon.png"
                alt="icon"
                width={20}
                height={20}
                className="mb-2"
              />
              <h3 className="text-lg font-semibold">Education</h3>
              <p className="text-sm">Bachelor Degree of Computer Engineering</p>
            </div>
          </div>
          <div>
            <h4 className="mt-6 mb-2 text-lg">skills</h4>
            <div className="grid grid-cols-4 gap-2">
              {["Typescript", "Javascript", "React Native","ReactJS","NextJS", "HTML", "CSS","TailwindCSS", "PHP", "Git"].map(
                (skill) => (
                  <h1
                    key={skill}
                    className="text-sm sm:text-base border px-2 py-1 rounded-lg flex items-center hover:scale-105 bg-white"
                  >
                    {skill}
                  </h1>
                )
              )}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default About;
