import Link from "next/link";
import React from "react";
import Particles from "./components/particles";
import Cursor from "./components/Cursor";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Blogs", href: "/blogs" },
  { name: "Experiences", href: "/experience" },
];

export default function Home() {
  return (
    <>
      <Cursor />
      <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        <nav className="my-16 animate-fade-in">
          <ul className="flex items-center justify-center gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={100}
        />
        <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
          Avhi Maz
        </h1>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <div className="my-16 mx-4 text-center animate-fade-in">
          <h2 className="text-sm text-zinc-500 ">
            Welcome to my portfolio! As a computer science student and
            developer, I transform debugging dreams into elegant solutions,
            crafting code that solves problems and enhances user experiences
            with creativity and precision.
          </h2>
        </div>
        <div className="text-sm flex items-center justify-center text-center h-20 w-72 lg:w-[1000px] text-zinc-500 mx-10 border border-zinc-800">
          <div>
            <p>For collaboration or project opportunities </p>
            <Link className="underline grid" href="/contact">
              DM me to connect.
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
