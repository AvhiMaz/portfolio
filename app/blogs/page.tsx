import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Metadata } from "next";
import ScrollToTopButton from "../components/ScrollToTopButton";

export const metadata: Metadata = {
  title: "Blogs",
};

const socials = [
  {
    href: "https://avhimaz.hashnode.dev/understanding-arrays-and-array-methods-in-javascript",
    label: "18 Apr 2024",
    handle: "Understanding Arrays and Array Methods in JavaScript",
    des: "Arrays in JavaScript are like containers that can hold different types of data, such as numbers, strings...",
  },
  {
    href: "https://avhimaz.hashnode.dev/easy-guide-to-installing-arch-linux-with-archinstall-script",
    label: "15 Apr 2024",
    handle: "Easy Guide to Installing Arch Linux with archinstall Script",
    des: "Are you interested in trying out Arch Linux but feeling unsure about the installation process? Don't worry! With...",
  },
  {
    href: "https://avhimaz.hashnode.dev/why-i-switch-to-arch-linux",
    label: "14 Apr 2024",
    handle: "Why I switch to arch linux",
    des: "Hey there! So, It is almost a year I switch to Arch Linux, and let me tell you, it's been quite the journey...",
  },
];

export default function Example() {
  return (
    <>
      <div className=" h-screen bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
        <Navigation />
        <div className="lg:mx-0 px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl ml-0 lg:ml-[170px] md:ml-0">
            Blogs
          </h2>
          <p className="mt-4 text-zinc-400 ml-0 lg:ml-[170px] md:ml-0">
            Some of my blog posts posted on{" "}
            <Link className="underline duration-200 text-zinc-400 hover:text-zinc-100" href="https://hashnode.com/@AvhiMaz">
              Hashnode
            </Link>{" "}
          </p>
        </div>
        <div className="w-full mt-10 h-px bg-zinc-800" />

        <div className="container flex items-center justify-center px-4 mx-auto">
          <div className="grid w-full grid-cols-1 gap-8 mx-auto md:mt-20 mt-10 sm:grid-cols-3 lg:gap-16">
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
                    <span className="lg:text-xl text-center font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                      {s.handle}
                    </span>
                    <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200 underline">
                      {s.label}{" "}
                    </span>
                    <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                      {s.des}
                    </span>
                  </div>
                </Link>
              </Card>
            ))}

            <div className="text-white mb-1"></div>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </>
  );
}
