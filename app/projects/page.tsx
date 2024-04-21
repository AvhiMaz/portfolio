import { Metadata } from "next";
import { Navigation } from "../components/nav";
import { HoverEffect } from "../components/ui/card-hover-effect";

export const metadata: Metadata = {
  title: "Projects",
};

const projects = [
  {
    title: "Portfolio",
    description:
      "Introducing my portfolio: a showcase of my skills, projects, and experiences. Explore my work and learn more about me through this curated collection of my achievements and endeavors.",
    link: "https://www.avhimaz.in/",
    date: "",
    skill: "Skills: Nextjs, Tailwind, TypeScript, Git.",
  },
  {
    title: "Blogging App",
    description:
      "A blogging app: built with Next.js and Hashnode's headless CMS for seamless content management and dynamic frontend. It's the perfect platform for bloggers to share their thoughts effortlessly.",
    link: "https://github.com/AvhiMaz/blog-website",
    date: "",
    skill: "Skills: Nextjs, Tailwind, TypeScript, Hashnode Headless CMS, Git.",
  },
  {
    title: "Fitnesspergram",
    description:
      "FitnessPerGram's startup website: your destination for healthy food delivery. Discover our nutritious and delicious meals, crafted to support your fitness journey, all conveniently delivered to your doorstep.",
    link: "https://fitnesspergram.store/",
    date: "",
    skill: "Skills: Reactjs, Tailwind, JavaScript, Git.",
  },
  {
    title: "Link Juntion",
    description:
      "LinkTree-inspired project: A minimalist solution for sharing multiple links effortlessly. Simplify your online presence and make navigation a breeze for your audience.",
    link: "https://links-junction.vercel.app/",
    date: "",
    skill: "Skills: Reactjs, Tailwind, JavaScript, Git.",
  },
  {
    title: "Brew Setup Installer",
    description:
      "The brew-setup.sh script is designed to detect the Linux distribution type (Arch-based, Debian-based) and execute the appropriate commands for installing Homebrew.",
    link: "https://github.com/AvhiMaz/brew-setup",
    date: "",
    skill: "Skills: Bash Scripting, Git.",
  },
  {
    title: "Weather App",
    description:
      "A website using HTML, CSS, JavaScript that fetches weather data from an API and displays the current weather conditions.",
    link: "https://github.com/AvhiMaz/Weather-App",
    date: "",
    skill: "Skills: HTML, CSS, JavaScript, APIs, Git.",
  },
  {
    title: "Password Generator",
    description:
      "A Bash script which is designed to generates a random alphanumeric password of a specified length. ",
    link: "https://github.com/AvhiMaz/password-generator-using-bash",
    date: "",
    skill: "Skills: Bash, Git.",
  },
];

export default function Contacts() {
  return (
    <>
      <Navigation />
      <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 mx-auto px-8 flex sm:p-20 items-center justify-center min-h-screen">
        <HoverEffect items={projects} />
      </div>
    </>
  );
}
