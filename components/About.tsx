"use client"

import { motion } from "framer-motion";

export default function About() {
    return (
      <div className="flex justify-center pt-[10rem]" id="about">
        <motion.section
          className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.175 }}
        >
          <p className="text-3xl font-medium capitalize mb-8 text-center">About Me</p>
          <div className="mb-3 text-md">
            <p>
              In school, my programming journey began with C++, laying the groundwork for my logical thinking and problem-solving skills. As I progressed into college, I further honed my skills in Python, C++, and Java, with a particular emphasis on Java for Data Structures and Algorithms (DSA) during my second year. Platforms like LeetCode became invaluable resources for sharpening my abilities and tackling complex coding challenges.
              <br />
              <br />
              Transitioning into the realm of software development, I initially explored mobile development but soon found myself drawn to the vast opportunities of web development. Immersing myself in HTML, CSS, and JavaScript, I began crafting dynamic and engaging web applications. A pivotal moment in my journey came when I embarked on building a Spotify clone, a project that not only refined my skills but also ignited a deep-seated passion for full-stack development.
            </p>
          </div>
          <div className="mb-3 text-md">
            With ReactJS, Express, and Node.js as my companions, I ventured into the world of full-stack development. Embracing the intricacies of the MERN stack—MongoDB, Express.js, React, and Node.js—I broadened my horizons, transitioning from a frontend focus to tackling both frontend and backend challenges. This journey continues to fuel my drive to craft innovative and impactful web solutions.
          </div>
        </motion.section>
      </div>
    );
  }
