import Image from "next/image";
import React from "react";


const About = () => {
  return (
    <div id="about" className="border w-full px-6 md:px-12 lg:px-[12%] py-10 scroll-mt-20">
      <h2 className="text-center text-3xl md:text-4xl lg:text-5xl">About me</h2>
      <div className="border flex flex-col lg:flex-row gap-8 lg:gap-4 mt-3">
        <div className="border flex w-full lg:w-[70%] lg:top-3 flex-col items-center lg:items-start justify-center mt-8 lg:mt-0">
          <div className="w-40 sm:w-64 md:w-80 rounded-3xl max-w-none">
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
        <div className="flex w-full flex-col items-start justify-start gap-6">
          <p className="mb-4 max-w-xl text-sm md:text-base lg:text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo accusantium ipsam odit unde voluptatum vero nesciunt.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="border p-4 rounded-xl transition-all hover:bg-[#000000]  hover:text-white group
              transition-all duration-500 ease-out">
              <Image src="/assets/edu-icon.png" alt="icon" width={20} height={20} className="mb-2" />
              <h3 className="text-lg font-semibold">Education</h3>
              <p className="text-sm">Bachelor Degree of Computer Engineering</p>
            </div>
            <div className="border p-4 rounded-xl transition-all hover:bg-[#000000]  hover:text-white group
              transition-all duration-500 ease-out">
              <Image src="/assets/project-icon.png" alt="icon" width={20} height={20} className="mb-2" />
              <h3 className="text-lg font-semibold">Project</h3>
              <p className="text-sm">no comment yet</p>
            </div>
          </div>
          <div>
            <h4 className="mt-6 mb-2 text-lg">Languages</h4>
            <div className="flex gap-2">
              <div className="border p-2 rounded-lg transition-all hover:scale-105">
                <Image src="/assets/git.png" alt="git" width={40} height={40} />
              </div>
              <div className="border p-2 rounded-lg transition-all hover:scale-105">
                <Image src="/assets/figma.png" alt="figma" width={40} height={40} />
              </div>
            </div>
          </div>
          <div>
            <h4 className="mt-6 mb-2 text-lg">Tools</h4>
            <div className="flex gap-2">
              <div className="border p-2 rounded-lg transition-all hover:scale-105">
                <Image src="/assets/git.png" alt="git" width={40} height={40} />
              </div>
              <div className="border p-2 rounded-lg transition-all hover:scale-105">
                <Image src="/assets/figma.png" alt="figma" width={40} height={40} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
