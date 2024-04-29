"use client"


import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "PostgreSQL",
  "Recoil",
  "Express",
  "Serverless Backend"
];

const SkillsSection: React.FC = () => {
  const fadeInAnimationVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
  };

  return (
    <section id="skill" className="mb-28 max-w-[40rem] mx-auto scroll-mt-28 text-center sm:mb-40">
      <motion.div variants={fadeInAnimationVariants} initial="initial" animate="animate">
        <motion.h2 className="text-3xl font-bold mb-6" variants={fadeInAnimationVariants}>
          <p className="text-3xl font-medium capitalize mb-8 text-center">My Skills</p>
        </motion.h2>
        <ul className="flex flex-wrap justify-center gap-2 text-base text-gray-800">
          {skillsData.map((skill, index) => (
            <motion.li
              className="bg-white  rounded-md px-3 py-2 dark:bg-white/10 dark:text-white/80"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default SkillsSection;
