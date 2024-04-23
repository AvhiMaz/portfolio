import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

const socials = [
  {
    href: "https://www.avhimaz.in/",
    label: "Next.js, TypeScript, Tailwind",
    handle: "Portfolio",
    des: "Introducing my portfolio: a showcase of my skills, projects, and experiences. Explore my work and learn more about me through this curated collection of my achievements and endeavors.",
  },
  {
    href: "https://github.com/AvhiMaz/blog-website",
    label: "Next.js, Tailwind, TypeScript, Headless CMS",
    handle: "Blogging App",
    des: "A blogging app: built with Next.js and Hashnode's headless CMS for seamless content management and dynamic frontend. It's the perfect platform for bloggers to share their thoughts effortlessly.",
  },
  {
    href: "https://www.fitnesspergram.vercel.app/",
    label: "Next.js, Tailwind, TypeScript",
    handle: "Fitnesspergram",
    des: "FitnessPerGram's startup website: your destination for healthy food delivery. Discover our nutritious and delicious meals, crafted to support your fitness journey, all conveniently delivered to your doorstep.",
  },
  {
    href: "https://links-junction.vercel.app/",
    label: "React.js, Tailwind, JavaScript",
    handle: "Link Junction",
    des: "LinkTree-inspired project: A minimalist solution for sharing multiple links effortlessly. Simplify your online presence and make navigation a breeze for your audience.",
  },
  {
    href: "https://github.com/AvhiMaz/brew-setup",
    label: "Bash Scripting",
    handle: "Brew Setup Installer",
    des: "The brew-setup.sh script is designed to detect the Linux distribution type (Arch-based, Debian-based) and execute the appropriate commands for installing Homebrew.",
  },
  {
    href: "https://github.com/AvhiMaz/Weather-App",
    label: "HTML, CSS, JavaScript, APIs",
    handle: "Weather App",
    des: "A website using HTML, CSS, JavaScript that fetches weather data from an API and displays the current weather conditions.",
  },
  {
    href: "https://github.com/AvhiMaz/password-generator-using-bash",
    label: "Bash Scripting",
    handle: "Password Generator",
    des: "A Bash script which is designed to generates a random alphanumeric password of a specified length.",
  },
];

export default function Example() {
  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto md:mt-20 mt-20 sm:grid-cols-3 lg:gap-16">
          {socials.map((s) => (
            <Card>
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
                  <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                    {s.handle}
                  </span>
                  <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {s.label}{" "}
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
    </div>
  );
}
