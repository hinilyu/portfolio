"use client";

import Link from "next/link";
import Image from "next/image";

import { useTheme } from "next-themes";
import { useState } from "react";

import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";

const Nav = () => {
  const { theme, setTheme } = useTheme();
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className="flex top-0 justify-between w-full mb-4 pt-5">
      <div className="text-base sm:text-lg">
        <Link href="/about" className="mr-3 sm:mr-5">
          About
        </Link>
        <Link href="/projects" className="mr-3 sm:mr-5">
          Projects
        </Link>
        <Link href="/email" className="mr-3 sm:mr-5">
          Email
        </Link>
        <Link href="/resume" className="mr-3 sm:mr-5">
          Resume
        </Link>
      </div>
      <div>
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <LightModeIcon className="mr-5" />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
