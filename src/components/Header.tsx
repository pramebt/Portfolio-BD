"use client";

import Image from "next/image";

const Header = () => {

  return (
    <div id="home" className=" w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image
          src="/assets/profile.png"
          alt="profile"
          width={100}
          height={100}
          className="rounded-full ml-0 mr-0"
        />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl">
        Hi! I &apos;m Bandit Kaewnoi
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px]">
        Web Developer
      </h1>
      <p className="max-w-2xl mx-auto">Recent Graduate</p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-5 ">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-[#000] text-white flex items-center gap-2"
        >
          contact me
        </a>
        {/* /sample-resume.pdf */}
        <a
          href=""
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 
           hover:shadow-[-1px_-1px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
         hover:text-[#112D4E]"
        >
          my resume{" "}
          <Image
            src="/assets/dowload.png"
            alt="download"
            width={15}
            height={15}
          />
        </a>
      </div>
      <div className="flex gap-5 mt-10">
      <a href="https://www.instagram.com/prame.bt/"><Image src="/assets/instagram.png" alt='instagram icon' width={100} height={100} className="w-10 "/></a>
      <a href="https://www.facebook.com/bandit.prame/"><Image src="/assets/facebook.png" alt='facebook icon' width={100} height={100} className="w-10 "/></a>
      <a href="https://github.com/pramebt"><Image src="/assets/github.png" alt='github icon' width={100} height={100} className="w-10 "/></a>
      <a href="#"><Image src="/assets/mobile.png" onClick={() => navigator.clipboard.writeText("0994594970")} alt='phone icon' width={100} height={100} className="w-10 "/></a>
      
      </div>
    </div>
  );
};
export default Header;
