"use client";

import { Navigation } from "../components/nav";
import { HoverEffect } from "../components/ui/card-hover-effect";

const blogs = [
  {
    title: "Easy Guide to Installing Arch Linux with archinstall Script",
    description:
      "Are you interested in trying out Arch Linux but feeling unsure about the installation process? Don't worry! With...",
    link: "https://avhimaz.hashnode.dev/easy-guide-to-installing-arch-linux-with-archinstall-script",
    date: "15 Apr 2024",
  },
  {
    title: "Why I switch to arch linux",
    description:
      "Hey there! So, It is almost a year I switch to Arch Linux, and let me tell you, it's been quite the journey. I wanted to share with you why I decided to take the...",
    link: "https://avhimaz.hashnode.dev/why-i-switch-to-arch-linux",
    date: "14 Apr 2024",
  },
  
];

export default function Contacts() {
  return (
    <>
      <Navigation />
      <div className="max-w-5xl mx-auto px-8 flex md:mt-20 mt-10 items-center justify-center min-h-screen">
        <HoverEffect items={blogs} />
      </div>
    </>
  );
}