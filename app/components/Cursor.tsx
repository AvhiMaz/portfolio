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
      gsap.to(".cursor", 0.5, { x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="cursor fixed bg-white w-4 h-4 rounded-full z-50"></div>
  );
};

export default Cursor;
