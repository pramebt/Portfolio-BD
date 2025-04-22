"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      id="home"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4"
    >
      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <Image
          src="/assets/profile.png"
          alt="profile"
          width={100}
          height={100}
          className="rounded-full"
        />
      </motion.div>

      {/* Texts */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex items-end gap-2 text-xl md:text-2xl"
      >
        Hi! I&apos;m Bandit Kaewnoi
      </motion.h3>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="text-3xl sm:text-6xl lg:text-[66px]"
      >
        Web Developer
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="max-w-2xl mx-auto"
      >
        Recent Graduate
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="flex flex-col sm:flex-row items-center gap-4 mt-5"
      >
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-[#000] text-white flex items-center gap-2"
        >
          contact me
        </a>
        <a
          href="/assets/Resume_Bandit.pdf"
          download="Resume_Bandit.pdf"
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
      </motion.div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
        className="flex gap-5 mt-10"
      >
        <a href="https://www.instagram.com/prame.bt/">
          <Image src="/assets/instagram.png" alt="instagram" width={100} height={100} className="w-10" />
        </a>
        <a href="https://www.facebook.com/bandit.prame/">
          <Image src="/assets/facebook.png" alt="facebook" width={100} height={100} className="w-10" />
        </a>
        <a href="https://github.com/pramebt">
          <Image src="/assets/github.png" alt="github" width={100} height={100} className="w-10" />
        </a>
        <a href="#">
          <Image
            src="/assets/mobile.png"
            onClick={() => navigator.clipboard.writeText("0994594970")}
            alt="phone"
            width={100}
            height={100}
            className="w-10 cursor-pointer"
          />
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Header;
