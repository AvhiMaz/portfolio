import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experiences",
};

const socials = [
  {
    href: "https://owasp.org/www-chapter-itanagar/",
    label: "Nov 2023 - Present",
    handle: "Lead @OWASP",
    des: "Led the OWASP (Open Web Application Security Project) local chapter, orchestrating efforts to advance cybersecurity awareness and practices within the community.",
    skills: "Leadership, Communication, Teamwork, Cybersecurity",
  },
  {
    href: "https://github.com/argoproj/argo-cd/pull/15059",
    label: "Aug 2023 - Aug 2023",
    handle: "Contribution In CNCF",
    des: "Worked with the CNCF and Argo CD project to make error messages better. This helps people find and fix problems more easily. My work made the project stronger and better at handling errors.",
    skills: "Golang, Docker, Kubernetes, Argo-CD, Linux, Git & Github",
  },
  {
    href: "https://leetcode.com/Avhi_Maz/",
    label: "Jul 2022 - Present",
    handle: "Leetcode",
    des: "Completed 200+ Leetcode questions, significantly enhancing problem-solving abilities and sharpening critical thinking skills.",
    skills: "C++",
  },
  {
    href: "https://www.udemy.com/certificate/UC-5ba57901-7cc1-48bd-8952-355484f3159f/",
    label: "Issued on Dec 2023",
    handle: "Ethical Hacking Certification",
    des: "Completed in-depth course on ethical hacking principles, including penetration testing, network security, and vulnerability assessment.",
    skills: "Linux & Terminal",
  },
  {
    href: "https://www.coursera.org/account/accomplishments/specialization/EKKEQYKZMJH6",
    label: "Issued on Nov 2023",
    handle: "Python for Everybody Certification",
    des: "Completed comprehensive online course covering Python programming fundamentals, data structures, and web scraping techniques.",
    skills: "Python Programming",
  },
  {
    href: "https://www.coursera.org/account/accomplishments/verify/EH47FWG93HCX",
    label: "Issued on Oct 2023",
    handle: "Technical Support Fundamentals Certification",
    des: "Completed comprehensive online course covering technical support fundamentals.",
    skills: "Binary Code, Customer Support, Linux, Troubleshooting",
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
                  <span className="lg:text-xl text-center font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                    {s.handle}
                  </span>

                  <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {s.label}{" "}
                  </span>
                  <div className="z-10 flex flex-col items-center">
                    <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200 underline">
                      Skills: {s.skills}
                    </span>
                  </div>

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
