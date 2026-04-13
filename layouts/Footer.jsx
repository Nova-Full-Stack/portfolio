import menus from "@/data/common/menus";
import socialLinks from "@/data/common/socialLinks";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-14 bg-neutral-900 dark:bg-neutral-800 text-neutral-400">
      <div className="container flex flex-col items-center text-base text-center gap-10">
        <ul className="flex flex-col md:flex-row justify-center gap-4 font-semibold">
          {Object.keys(menus).map((menu, index) => (
            <li key={index}>
              <Link href={`/#${menus[menu]}`}>
                <a className="hover:text-neutral-300 px-4 py-2">{menu}</a>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex justify-center gap-6">
          {socialLinks.map((social, index) => (
            <li key={index}>
              <a
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="hover:text-neutral-300"
                aria-label={social.name}
              >
                <social.icon className="w-6 h-6" />
              </a>
            </li>
          ))}
        </ul>
        <p className="text-base">&copy; 2023 Tony Sun. All rights reserved.</p>
      </div>
    </footer>
  );
}
