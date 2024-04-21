import { Metadata } from "next";
import { Navigation } from "../components/nav";
import { HoverEffect } from "../components/ui/card-hover-effect";

export const metadata: Metadata = {
  title: "Blogs",
};

const blogs = [
  {
    title: "Understanding Arrays and Array Methods in JavaScript",
    description:
      "Arrays in JavaScript are like containers that can hold different types of data, such as numbers, strings...",
    link: "https://avhimaz.hashnode.dev/understanding-arrays-and-array-methods-in-javascript",
    date: "18 Apr 2024",
    skill: "",
  },
  {
    title: "Easy Guide to Installing Arch Linux with archinstall Script",
    description:
      "Are you interested in trying out Arch Linux but feeling unsure about the installation process? Don't worry! With...",
    link: "https://avhimaz.hashnode.dev/easy-guide-to-installing-arch-linux-with-archinstall-script",
    date: "15 Apr 2024",
    skill: "",
  },
  {
    title: "Why I switch to arch linux",
    description:
      "Hey there! So, It is almost a year I switch to Arch Linux, and let me tell you, it's been quite the journey...",
    link: "https://avhimaz.hashnode.dev/why-i-switch-to-arch-linux",
    date: "14 Apr 2024",
    skill: "",
  },
];

export default function Contacts() {
  return (
    <>
      <Navigation />
      <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 mx-auto px-8 flex sm:p-20 items-center justify-center min-h-screen">
        <HoverEffect items={blogs} />
      </div>
    </>
  );
}
