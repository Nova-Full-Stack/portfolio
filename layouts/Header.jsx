import menus from "@/data/common/menus";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ScrollSpy from "react-scrollspy";
import ThemeToggler from "./common/ThemeToggler";

export default function Header() {
  const headerRef = useRef();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const scrollHandler = () => {
    const classes = [
      "border-b",
      "border-neutral-300",
      "dark:border-neutral-800",
      "!bg-opacity-60",
      "backdrop-blur-md",
    ];

    if (window.scrollY > 100) {
      headerRef.current.classList.add(...classes);
    } else {
      headerRef.current.classList.remove(...classes);
    }
  };

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-10 bg-white dark:bg-neutral-900 bg-opacity-0 dark:bg-opacity-0 transition-background-color"
    >
      <nav className="container flex items-center py-3 md:py-4 justify-between">
        <Link href="/">
          <a aria-label="logo">
            <img src="assets/tony_logo.png" alt="" className="w-12" style={{ maxWidth: '150px' }} />
          </a>
        </Link>
        <ScrollSpy
          items={Object.values(menus)}
          className={clsx(
            "absolute md:static top-full left-0 right-0 py-6 md:py-0 bg-neutral-100/95 md:bg-inherit dark:bg-neutral-800/95 md:dark:bg-inherit font-semibold rounded-xl flex flex-col items-center md:flex md:flex-row gap-x-6 lg:gap-x-8 md:-translate-y-0",
            open ? "-translate-y-0" : "-translate-y-[999px]",
          )}
          currentClassName="text-indigo-500 hover:text-indigo-500"
          offset={-100}
        >
          {Object.keys(menus).map((menu, index) => (
            <li key={index} className="hover:text-indigo-400">
              <Link href={`/#${menus[menu]}`}>
                <a className="inline-block px-10 md:px-0 py-3 md:py-0">
                  {menu}
                </a>
              </Link>
            </li>
          ))}
        </ScrollSpy>
        <ThemeToggler />
        <button
          className="flex md:hidden justify-center items-center bg-indigo-100 dark:bg-indigo-300 text-indigo-400 dark:text-indigo-500 rounded-full w-11 h-11 p-3 focus:ring-2 focus:ring-indigo-200 dark:focus:ring-indigo-400"
          aria-label="Toggle Menu"
          onClick={() => setOpen((open) => !open)}
        >
          {open ? (
            <FaTimes className="text-xl" />
          ) : (
            <FaBars className="text-xl" />
          )}
        </button>
      </nav>
    </header>
  );
}
