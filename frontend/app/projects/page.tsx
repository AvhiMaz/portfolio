import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Metadata } from "next";
import ScrollToTopButton from "../components/ScrollToTopButton";

export const metadata: Metadata = {
  title: "Projects",
};

const projects = [
  {
    href: "https://viralxpost.xyz/",
    label: "React, Node.js, TypeScript, MongoDB, Tailwind, AI integration, API",
    handle: "viralxpost",
    des: "Introducing viralxpost: Let our AI tool help you create to engaging content that breaks through the noise and gets you seen by the right people.",
    image: "/image/viralxpost.png",
  },
  {
    href: "https://www.avhimaz.in/",
    label: "Next.js, TypeScript, Tailwind",
    handle: "Portfolio",
    des: "Introducing my portfolio: a showcase of my skills, projects, and experiences. Explore my work and learn more about me through this curated collection of my achievements and endeavors.",
    image: "/image/portfolio.png",
  },
  {
    href: "https://blogs-avhimaz.vercel.app/",
    label: "Next.js, Tailwind, TypeScript, Headless CMS",
    handle: "Blogging App",
    des: "A blogging app: built with Next.js and Hashnode's headless CMS for seamless content management and dynamic frontend. It's the perfect platform for bloggers to share their thoughts effortlessly.",
    image: "/image/blog-website.png",
  },
  {
    href: "https://github.com/AvhiMaz/brew-setup",
    label: "Bash Scripting",
    handle: "Brew Setup Installer",
    des: "The brew-setup.sh script is designed to detect the Linux distribution type (Arch-based, Debian-based) and execute the appropriate commands for installing Homebrew.",
    image: "/image/homebrew.jpg",
  },
];

export default function Example() {
  return (
    <>
      <div>
        <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
          <Navigation />
          <div className="lg:mx-0 px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl ml-0 lg:ml-[170px] md:ml-0">
              Projects
            </h2>
            <p className="mt-4 text-zinc-400 ml-0 lg:ml-[170px] md:ml-0">
              {" "}
              Some projecrs are work-related, while others are personal
              endeavors pursued in my own time.
            </p>
          </div>
          <div className="w-full mt-10 h-px bg-zinc-800" />
          <div className="container flex items-center justify-center px-4 mx-auto">
            <div className="grid w-full grid-cols-1 gap-8 mx-auto md:mt-20 mt-10 sm:grid-cols-3 lg:gap-16">
              {projects.map((s) => (
                <Card>
                  <div>
                    <img
                      src={s.image}
                      alt={s.handle}
                      className="w-full h-auto"
                    />
                  </div>
                  <Link
                    href={s.href}
                    target="_blank"
                    className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
                  >
                    <span
                      className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                      aria-hidden="true"
                    />
                    <div className="z-10 flex flex-col items-center">
                      <span className="lg:text-xl text-center font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                        {s.handle}
                      </span>

                      <span className="underline mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                        Skills : {s.label}{" "}
                      </span>
                      <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                        {s.des}
                      </span>
                    </div>
                  </Link>
                </Card>
              ))}
            </div>
          </div>

          <div className="w-full lg:mt-10 h-px bg-zinc-800" />
        </div>
      </div>
      <ScrollToTopButton />
    </>
  );
}
