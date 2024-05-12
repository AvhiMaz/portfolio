"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

const Cursor: React.FC = () => {
  const [mouseX, setMouseX] = useState<number>(0);
  const [mouseY, setMouseY] = useState<number>(0);

  useEffect(() => {
    gsap.set(".cursor", { xPercent: -50, yPercent: -50 });

    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
      setMouseY(e.clientY);
      gsap.to(".cursor", 0.9, { x: e.clientX, y: e.clientY });

      updateElementPosition(e.clientX, e.clientY);
    };

    updateElementPosition(mouseX, mouseY);

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  const updateElementPosition = (cursorX: number, cursorY: number) => {
    const distanceInPixels = 2 * window.devicePixelRatio;
    const angle = Math.atan2(
      cursorY - window.innerHeight / 2,
      cursorX - window.innerWidth / 2,
    );
    const x = cursorX + Math.cos(angle) * distanceInPixels;
    const y = cursorY + Math.sin(angle) * distanceInPixels;
    gsap.to(".element-2cm-away", 0.9, { x, y });
  };

  return (
    <div>
      <div className="cursor fixed border border-white w-14 h-14 rounded-full z-50"></div>
      <div className="element-2cm-away fixed bg-red w-4 h-4 rounded-full z-50"></div>
    </div>
  );
};

export default Cursor;
