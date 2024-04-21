"use client";
import Link from "next/link";
import { HoverEffect } from "../components/ui/card-hover-effect";
import { ArrowLeft } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

const ContactsNavigation: React.FC = () => {
  const ref = useRef<HTMLElement>(null);
  const [isIntersecting, setIntersecting] = useState(true);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting),
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Lead @OWASP",
      description:
        "Led the OWASP (Open Web Application Security Project) local chapter, orchestrating efforts to advance cybersecurity awareness and practices within the community.",
      link: "https://owasp.org/www-chapter-itanagar/",
      date: "Nov 2023 - Present",
      skill: "Skills: Leadership, Communication, Teamwork, Cybersecurity.",
    },
    {
      title: "Contribution at CNCF",
      description:
        "Worked with the CNCF and Argo CD project to make error messages better. This helps people find and fix problems more easily. My work made the project stronger and better at handling errors.",
      link: "https://github.com/argoproj/argo-cd/pull/15059",
      date: "Aug 2023 - Aug 2023",
      skill:
        "Skills: Golang, Dockers, Kubernetes, Argo-CD, Linux, Git & GitHub.",
    },
    {
      title: "Leetcode",
      description:
        "Completed 200+ Leetcode questions, significantly enhancing problem-solving abilities and sharpening critical thinking skills.",
      link: "https://leetcode.com/Avhi_Maz/",
      date: "Jul 2022 - Present",
      skill: "Skills: C++",
    },
    {
      title: "Ethical Hacking Certification",
      description:
        "Completed in-depth course on ethical hacking principles, including penetration testing, network security, and vulnerability assessment.",
      link: "https://www.udemy.com/certificate/UC-5ba57901-7cc1-48bd-8952-355484f3159f/",
      date: "Issued on Dec 2023",
      skill: "Skills: Linux & Terminal",
    },
    {
      title: "Python for Everybody Certification",
      description:
        "Completed comprehensive online course covering Python programming fundamentals, data structures, and web scraping techniques.",
      link: "https://www.coursera.org/account/accomplishments/specialization/EKKEQYKZMJH6",
      date: "Issued on Nov 2023",
      skill: "Skills: Python Programming",
    },
    {
      title: "Technical Support Fundamentals Certification",
      description:
        "Completed comprehensive online course covering technical support fundamentals.",
      link: "https://www.coursera.org/account/accomplishments/verify/EH47FWG93HCX",
      date: "Issued on Oct 2023",
      skill: "Skills: Binary Code, Customer Support, Linux, Troubleshooting",
    },
  ];

  return (
    <>
      <header ref={ref}>
        <div
          className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${isIntersecting
              ? "bg-zinc-900/0 border-transparent"
              : "bg-zinc-900/500  border-zinc-800 "
            }`}
        >
          <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
            <Link
              href="/"
              className="duration-200 text-zinc-300 hover:text-zinc-100"
            >
              <ArrowLeft className="w-6 h-6 " />
            </Link>
          </div>
        </div>
      </header>
      <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 mx-auto px-8 flex sm:p-20 items-center justify-center min-h-screen">
        <HoverEffect items={projects} />
      </div>
    </>
  );
};

export default ContactsNavigation;
