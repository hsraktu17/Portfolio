"use client";

import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";
import { ImGithub } from "react-icons/im";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

export default function Intro() {
  return (
    <div className="font-sans min-h-screen grid place-items-center p-12">
      <div className="grid gap-y-4 text-center">
        <div className="font-bold text-5xl">Hi, this is Utkarsh.</div>
        <div className="text-xl">A passionate full-stack developer, currently a final-year student at Reva University.</div>
        <div className="text-xl">I thrive on creating robust web applications.</div>
        <div className="flex justify-center items-center mt-5 space-x-4">
          <a className="px-6 py-3 border border-gray-500 rounded-full hover:bg-gray-500 hover:text-white transition duration-300 ease-in-out" href="https://www.linkedin.com/in/utkarsh-raj-srivastava-037891214/"><BsLinkedin/></a>
          <a className="px-6 py-3 border border-gray-500 rounded-full hover:bg-gray-500 hover:text-white transition duration-300 ease-in-out" href="https://github.com/hsraktu17"><ImGithub/></a>
          <a className="px-6 py-3 border border-gray-500 rounded-full hover:bg-gray-500 hover:text-white transition duration-300 ease-in-out" href="https://twitter.com/Im__Utkarsh"><FaXTwitter/></a>
          <a className="px-6 py-3 border border-gray-500 rounded-full hover:bg-gray-500 hover:text-white transition duration-300 ease-in-out" href="https://leetcode.com/Utkarsh172/"><SiLeetcode/></a>
        </div>
        <div className="bottom-0 left-0 right-0 flex justify-center mt-40 mb-8">
        <a href="#about" aria-label="Scroll to about section">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-black dark:border-white flex justify-center items-center p-2">
            <motion.div 
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
              className="w-3 h-3 rounded-full bg-white"
            />
          </div>
        </a>
      </div>
      </div>
    </div>
  );
}
