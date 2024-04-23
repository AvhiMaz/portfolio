"use client";
import React from "react";
import { HoverBorderGradient } from "../../app/components/ui/hover-border-gradient";

export function HoverBorderGradientDemo() {
  return (
    <div className="m-10 flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-xl"
        as="button"
        className="bg-gray-900 text-white flex items-center space-x-2 text-sm "
      >
        <span>My Experiences </span>
      </HoverBorderGradient>
    </div>
  );
}
