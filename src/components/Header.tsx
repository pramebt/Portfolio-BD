import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
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
        Hi! I'm Bandit Kaewnoi
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
      <div className="flex gap-2 mt-10">
      <a href="https://www.instagram.com/prame.bt/"><FaInstagram className="w-10 h-10"/></a>
      <a href="https://www.instagram.com/prame.bt/"><FaInstagram className="w-10 h-10"/></a>
      </div>
    </div>
  );
};
export default Header;
