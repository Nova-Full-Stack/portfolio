import Logo from "@/components/common/Logo";
import company from "@/data/company";
import menus from "@/data/common/menus";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import ScrollSpy from "react-scrollspy";
import ThemeToggler from "./common/ThemeToggler";

export default function Header() {
  const [open, setOpen] = useState(false);

  // Fail-safe toward legible: `false` means "not at the top", so the header is
  // opaque during SSR and before any JS runs. It only turns transparent once the
  // observer positively confirms the top of the page is on screen. An earlier
  // version defaulted to transparent and painted the background in on scroll —
  // when that didn't fire, the hero showed straight through the nav.
  const [atTop, setAtTop] = useState(false);
  const sentinelRef = useRef(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;

    // Deliberately not `window.scrollY`: that only reports document scroll, and
    // reads 0 whenever something other than the document is the scroll container.
    // IntersectionObserver is measured against the viewport either way. If the
    // API is missing, we never flip and the header simply stays opaque.
    if (!sentinel || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => setAtTop(entry.isIntersecting),
      { threshold: 0 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Zero-height marker pinned at the document top. Once it scrolls out of
          the viewport the header is "stuck" and earns its background. The
          negative margin keeps it from occupying any layout space. */}
      <div ref={sentinelRef} aria-hidden="true" className="h-px -mb-px" />

      <header
        className={clsx(
          "sticky top-0 z-50 border-b transition-colors duration-200",
          // `open` forces the background on: an open mobile menu must never hang
          // off a transparent bar.
          atTop && !open
            ? "bg-transparent border-transparent"
            : "bg-canvas border-line shadow-sm shadow-black/5"
        )}
      >
        <nav className="container flex items-center justify-between h-[72px]">
          <Link href="/">
            <a aria-label={`${company.name} home`} className="shrink-0">
              <Logo size={32} />
            </a>
          </Link>

          <ScrollSpy
            items={Object.values(menus)}
            currentClassName="!text-fg"
            offset={-100}
            className={clsx(
              "font-medium text-sm",
              // Mobile: a sheet under the header. Desktop: an inline row.
              "absolute md:static top-full left-0 right-0 md:top-auto",
              "flex flex-col md:flex-row md:items-center gap-1 md:gap-8",
              // The sheet carries its own background because it can drop out of
              // a transparent header at the top of the page.
              "border-b md:border-0 border-line bg-canvas md:bg-transparent",
              "px-5 py-4 md:p-0",
              open ? "flex" : "hidden md:flex"
            )}
          >
            {Object.keys(menus).map((menu) => (
              <li key={menu}>
                <Link href={`/#${menus[menu]}`}>
                  <a
                    onClick={() => setOpen(false)}
                    className="block py-2 md:py-0 text-muted hover:text-fg transition-colors"
                  >
                    {menu}
                  </a>
                </Link>
              </li>
            ))}
          </ScrollSpy>

          <div className="flex items-center gap-1">
            <ThemeToggler />
            <button
              className="flex md:hidden justify-center items-center w-9 h-9 rounded-md text-muted hover:text-fg hover:bg-surface transition-colors"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? (
                <FiX className="w-[18px] h-[18px]" />
              ) : (
                <FiMenu className="w-[18px] h-[18px]" />
              )}
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
