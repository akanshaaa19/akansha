"use client";
import akansha from "@/app/(assets)/me.jpeg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

export const NavBar = () => {
  const path = usePathname();

  const links = [
    { link: "/", name: "Home" },
    { link: "/about", name: "About" },
    { link: "/work", name: "Work" },
    { link: "/projects", name: "Projects" },
    { link: "/blogs", name: "Blogs" },
  ];

  return (
    <div className="mb-">
      <div className="flex justify-between items-center gap-x-6">
        <div className="w-4/5 flex flex-col gap-y-3">
          <h2 className="text-2xl font-semibold">Akansha</h2>
          <div className="flex gap-x-4 text-zinc-700">
            <Link href={"https://github.com/akanshaaa19"} target="_blank">
              <FaGithubSquare />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/akansha-sakhre-21428b1ba/"}
              target="_blank"
            >
              <FaLinkedin />
            </Link>
            <Link href={"mailto:akanshasakhre@gmail.com"} target="_blank">
              <IoMdMail />
            </Link>
          </div>
        </div>
        <div className="w-[7rem] h-[7rem] rounded-full">
          <Image
            src={akansha}
            alt="me"
            className="h-full w-full object-contain rounded-full grayscale"
          />
        </div>
      </div>
      <div className="py-6 flex gap-x-6 font-semibold">
        {links.map((link, _) => (
          <Link
            className={`${
              link.link === path ? " border-b border-zinc-600" : ""
            } `}
            key={link.link}
            href={link.link}
          >
            {link.name}
          </Link>
        ))}
      </div>
      <hr />
    </div>
  );
};
