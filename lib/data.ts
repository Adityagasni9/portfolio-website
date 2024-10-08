import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "NIT Delhi",
    location: "Delhi,India",
    description:
      "I'm pursuing CSE from Nit delhi, in my undergrade degree i have done various projucts and internship ",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2025",
  },
  {
    title: "Full-Stack Developer",
    location: "Chandigarh, India",
    description:
      "I have done fullstack internship in chd company. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. ",
    icon: React.createElement(CgWorkAlt),
    date: "2024,May - july",
  },
  {
    title: "Headstarted AI fellowship",
    location: "remote",
    description:
      "i worked as a full stack developer and developed 3 projects in this fellowship",
    icon: React.createElement(FaReact),
    date: "2024,july-present",
  },

] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Python",
  "Framer Motion",
] as const;
