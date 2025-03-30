import Image from "next/image";
import React from "react";


const About = () => {
  return (
    <div id="about" className="border w-full px-[12%] py-10 scroll-mt-20">
      <h2 className="text-center text-5xl">About me</h2>
      <div className="border flex flex-row">
        <div className=" border flex w-[70%] flex-col lg:flex-row items-start justify-center mt-25 ">
        <div className="w-64 sm:w-80 roundded-3xl max-w-none ">
            <Image
              src="/assets/profile.png"
              alt=""
              width={160}
              height={160}
              quality={100} // เพิ่มคุณภาพสูงสุด
              className="w-60 h-60 rounded-3xl object-cover "
            />
          </div>
        </div>
        <div className="flex w-full flex-col lg:flex-row items-center justify-start gap-20 my-20">
          

          <div className="flex-1">
            <p className="mb-10 max-w-2xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo
              accusantium ipsam odit unde voluptatum vero nesciunt, itaque totam
              officiis minus velit rem adipisci animi placeat possimus. Eius
              similique cumque mollitia?
            </p>
            <div className="grid grid-cols-2 sm:grid-col-3 gap-6 max-w-2xl">
              {/* ------------*Education*------------ */}
              <div
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
              hover:bg-[#000000]  hover:text-white group
              transition-all duration-500 ease-out"
              >
                <Image
                  src="/assets/edu-icon.png"
                  alt="icon"
                  width={20}
                  height={20}
                  className="mt-3"
                />
                <h3 className="my-4 font-semibold">Education</h3>
                <h1 className="text-gray-600  text-sm">
                  Bachelor Degree of Computer Engineering
                </h1>
              </div>
              {/* ------------*Project*------------ */}
              <div
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
               hover:bg-[#000000]  hover:text-white group
              transition-all duration-500 ease-out"
              >
                <Image
                  src="/assets/project-icon.png"
                  alt=""
                  width={20}
                  height={20}
                  className="mt-3"
                />
                <h3 className="my-4 font-semibold">Project</h3>
                <p className="text-gray-600 text-sm">no comment yet</p>
              </div>
            </div>
            {/* ------------*Languages*------------ */}
            
              <h4 className=" mt-10 mb-5">Languages</h4>
              <div className="flex items-center gap-3 sm:gap-5">
                <div
                  className="flex items-center justify-center w-12 sm:w-14 aspect-square 
                        border border-gray-400 rounded-lg 
                        hover:-translate-y-1 duration-500"
                >
                  <Image
                    src="/assets/git.png"
                    alt="git"
                    width={40}
                    height={40}
                  />
                </div>
                <div
                  className="flex items-center justify-center w-12 sm:w-14 aspect-square 
                        border border-gray-400 rounded-lg"
                >
                  <Image
                    src="/assets/figma.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
              </div>
            {/* ------------*Tool*------------ */}
              <h4 className="mt-10  mb-5">Tool</h4>
              <div className="flex items-center gap-3 sm:gap-5">
                <div
                  className="flex items-center justify-center w-12 sm:w-14 aspect-square 
                        border border-gray-400 rounded-lg 
                        hover:-translate-y-1 duration-500"
                >
                  <Image
                    src="/assets/git.png"
                    alt="git"
                    width={40}
                    height={40}
                  />
                </div>
                <div
                  className="flex items-center justify-center w-12 sm:w-14 aspect-square 
                        border border-gray-400 rounded-lg"
                >
                  <Image
                    src="/assets/figma.png"
                    alt=""
                    width={40}
                    height={40}
                  />
                </div>
              </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
