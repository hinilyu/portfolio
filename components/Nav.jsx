"use client";

import Link from "next/link";
import Image from "next/image";

import { useTheme } from "next-themes";
import { useState } from "react";
import { usePathname } from "next/navigation";

import LightModeIcon from "@mui/icons-material/LightMode";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";

const Nav = () => {
  const { theme, setTheme } = useTheme();
  const [toggleDropdown, setToggleDropdown] = useState(false);
  const path = usePathname().split("/")[1];

  return (
    <nav className="flex top-0 justify-between w-full mb-4 pt-5">
      <div className="text-base sm:text-lg inline-flex items-center">
        <Link href={"/"} className="mr-3 sm:mr-5 inline-flex" title="Home">
          <HomeIcon className="" />
        </Link>
        {path === "about" ? (
          <Link href="/about" className="mr-3 sm:mr-5 border border-slate-600 dark:border-white px-1 hover:underline" title="About">
            About
          </Link>
        ) : (
          <Link href="/about" className="mr-3 sm:mr-5 px-1 hover:underline" title="About">
            About
          </Link>
        )}
        {path === "projects" ? (
          <Link href="/projects" className="mr-3 sm:mr-5 px-1 border border-slate-600 dark:border-white hover:underline" title="Projects">
            Projects
          </Link>
        ) : (
          <Link href="/projects" className="mr-3 sm:mr-5 px-1 hover:underline" title="Projects">
            Projects
          </Link>
        )}
        <Link href="/Daniel-Tse-Resume-FullStackDeveloper.pdf" className="mr-3 sm:mr-5 px-1 hover:underline" title="Download Resume">
          Resume
        </Link>
      </div>
      <div>
        <button title="Light Mode" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <LightModeIcon className="" />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
