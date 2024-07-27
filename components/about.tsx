"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I am currently pursuing an undergraduate degree in Compute science from {" "}
        <span className="font-medium"> NIT Delhi</span> , My passion for programming 
        led me to immerse myself in problem-solving from the first year onwards. 
        I have since expanded my skill set to include {" "}<span className="font-medium">full-stack web development</span>,{" "} 
        with a core stack of {" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB 
        </span>. Additionally, I am proficient in TypeScript and Prisma.
        <span className="italic"> My favorite part of programming</span> is the
        problem-solving aspect. I love the feeling of finally figuring out a solution to a problem. 
        I am always eager to learn new technologies and am currently seeking a {" "}
        <span className="font-medium">full-time position</span>
        as a software developer.
        
      
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy doing
        physical activites like gymming,playing cricket and swimming . I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. 
      </p>
    </motion.section>
  );
}
