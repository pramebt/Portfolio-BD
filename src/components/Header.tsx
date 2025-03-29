import Image from "next/image";

const Header = () => {
  return (
    <div className="border border-amber-300 w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
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
        ja me ngan mai nah
      </h1>
      <p className="max-w-2xl mx-auto">sa thu</p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-5 ">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          contact me
        </a>
        {/* /sample-resume.pdf */}
        <a
          href=""
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2"
        >
          my resume
        </a>
      </div>
    </div>
  );
};
export default Header;
