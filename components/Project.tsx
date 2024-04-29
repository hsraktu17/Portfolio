import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import Link from "next/link";
import { ImGithub } from "react-icons/im";
import i1 from '../public/image.png'
import i2 from '../public/image copy.png'
import i3 from '../public/image copy 2.png'
import i4 from '../public/image copy 3.png'


export function ThreeDCardDemo({
  title,
  description,
  image,
  github,
  live
}:{
  title : string,
  description : string,
  image : any,
  github : string,
  live : string
}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[15rem] sm:w-[20rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={image}
            height="400" // Adjusted height
            width="400" // Adjusted width
            className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          <CardItem
            translateZ={20}
            as={Link}
            href={github}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            <ImGithub />
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <a href={live}>Live</a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

export default function Project(){
  return (
    <div id="project">
      <p className="text-3xl font-medium capitalize mb-8 text-center">Projects</p>
      <div className="flex justify-center space-x-8"> {/* Added flex and justify-center class */}
        {/* First Card */}
        <ThreeDCardDemo
          title = "Medium"
          description="Blogging website created using React, Typescript, Serveless Backend, Postgres and Prisma"
          image = {i1}
          github = "https://github.com/hsraktu17/Medium"
          live="https://medium-kappa-ashy.vercel.app"
         />
         <ThreeDCardDemo
          title = "GPaytm"
          description="Paytm Clone created using React, Typescript, Express and MongDB "
          image = {i2}
          github = "https://github.com/hsraktu17/Gpaytm"
          live="https://gpaytm.vercel.app"
         />
         <ThreeDCardDemo
          title = "Konix"
          description="Konix website clone created using React, Javascript and Tailwind CSS"
          image = {i3}
          github = "https://github.com/hsraktu17/Konix"
          live="https://konix-zeta.vercel.app/"
         />
         <ThreeDCardDemo
          title = "Automation Testing"
          description="Makemytrip website automation testing using Java, Selenium and chrom web drivers"
          image = {i4}
          github = "https://github.com/hsraktu17/MakeMyTrip-Automation-testing"
          live="https://drive.google.com/file/d/1u2Fe1FBKWjfAKsaK-ZiTSiw42g4I8MXe/view?usp=drive_link"
         />
      </div>
    </div>
  )
}
