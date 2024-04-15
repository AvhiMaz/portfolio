"use client";

import { Navigation } from "../components/nav";
import { HoverEffect } from "../components/ui/card-hover-effect";

const projects = [
  {
    title: "Portfolio",
    description:
      "Introducing my portfolio: a showcase of my skills, projects, and experiences. Explore my work and learn more about me through this curated collection of my achievements and endeavors.",
    link: "https://avhimaz.vercel.app/",
    date: "",
  },
  {
    title: "Blogging App",
    description:
      "A blogging app: built with Next.js and Hashnode's headless CMS for seamless content management and dynamic frontend. It's the perfect platform for bloggers to share their thoughts effortlessly.",
    link: "https://github.com/AvhiMaz/blog-website",
    date: "",
  },
  {
    title: "Fitnesspergram",
    description:
      "FitnessPerGram's startup website: your destination for healthy food delivery. Discover our nutritious and delicious meals, crafted to support your fitness journey, all conveniently delivered to your doorstep.",
    link: "https://fitnesspergram.vercel.app/",
    date: "",
  },
  {
    title: "Link Juntion",
    description:
      "LinkTree-inspired project: A minimalist solution for sharing multiple links effortlessly. Simplify your online presence and make navigation a breeze for your audience.",
    link: "https://links-junction.vercel.app/",
    date: "",
  },

  {
    title: "CNCF",
    description:
      "Worked with the CNCF and Argo CD project to make error messages better. This helps people find and fix problems more easily. My work made the project stronger and better at handling errors.",
    link: "https://github.com/argoproj/argo-cd/pull/15059",
    date: "",
  },
  {
    title: "Brew Setup Installer",
    description:
      "The brew-setup.sh script is designed to detect the Linux distribution type (Arch-based, Debian-based) and execute the appropriate commands for installing Homebrew.",
    link: "https://github.com/AvhiMaz/brew-setup",
    date: "",
  },
];

export default function Contacts() {
  return (
    <>
      <Navigation />
      <div className="max-w-5xl mx-auto px-8 flex items-center sm:mt-20 mt-10 justify-center min-h-screen">
        <HoverEffect items={projects} />
      </div>
    </>
  );
}
