"use client";
import Image from "next/image";

const Projects = () => {
  return (
    <div id="projects" className="border w-full px-[12%] py-10 scroll-mt-20 ">
      <h2 className="text-center text-5xl">Projects</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 ">Projects</p>
      <div className="grid md:grid-cols-3  my-10 gap-5">
        <div className="bg-[url('/assets/bg/background.jpg')] aspect-square bg-cover  bg-center bg-no-repeat p-5 rounded-lg w-80 h-80">
          <div
            className="bg-white  rounded-md  
        left-1/2 transform translate-y-1/4 py-3 px-5 flex items-center justify-between 
        duration-500 hover:-translate-y-2"
          >
            <div>
              <h2>frontend project</h2>
              <h2>web design</h2>
            </div>

            <Image src="/assets/code-icon.png" alt="" width={20} height={20} />
          </div>
          
        </div>

        <div className="bg-[url('/assets/bg/background.jpg')] aspect-square bg-cover  bg-center bg-no-repeat p-5 rounded-lg w-80 h-80">
          <div
            className="bg-white  rounded-md  
        left-1/2 transform translate-y-1/4 py-3 px-5 flex items-center justify-between 
        duration-500 hover:-translate-y-2"
          >
            <div>
              <h2>frontend project</h2>
              <h2>web design</h2>
            </div>

            <Image src="/assets/code-icon.png" alt="" width={20} height={20} />
          </div>
          
        </div>
        <div className="bg-[url('/assets/bg/background.jpg')] aspect-square bg-cover  bg-center bg-no-repeat p-5 rounded-lg w-80 h-80">
          <div
            className="bg-white  rounded-md  
        left-1/2 transform translate-y-1/4 py-3 px-5 flex items-center justify-between 
        duration-500 hover:-translate-y-2"
          >
            <div>
              <h2>frontend project</h2>
              <h2>web design</h2>
            </div>

            <Image src="/assets/code-icon.png" alt="" width={20} height={20} />
          </div>
          
        </div>
      </div>
    </div>
  );
};
export default Projects;
