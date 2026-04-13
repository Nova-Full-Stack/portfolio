import Animate from "@/components/common/Animate";
import Button from "@/components/common/Button";
import socialLinks from "@/data/common/socialLinks";
import home from "@/data/home";
import Link from "next/link";
import { FaPaperPlane } from "react-icons/fa";
import Typewriter from "typewriter-effect";

export default function Hero() {
  return (
    <section id="home" className="py-12 md:py-20 relative">
      <div className="container grid md:grid-cols-2 items-center gap-16">
        <div className="max-w-xl order-2 md:order-1">
          <p className="text-indigo-500 font-semibold">Hey There 👋 I&apos;m</p>
          <h1 className="text-4xl md:text-5xl text-neutral-800 dark:text-neutral-300 font-extrabold pt-2 pb-4">
            <Typewriter
              options={{
                strings: "Tony Sun",
                autoStart: true,
                loop: true,
                pauseFor: 4000,
              }}
            />
          </h1>
          <Animate
            as="p"
            animateClass="animate-fadeIn"
            animateDelay={700}
            className="text-xl text-gray-600 dark:text-neutral-500 font-semibold mb-5"
          >
            <span className="text-slate-400 dark:text-neutral-400">Senior</span>{" "}
            Software Engineer
          </Animate>
          <p className="mb-5">{home.introduction}</p>
          <ul className="flex gap-6 mb-8">
            {socialLinks.map((social, index) => (
              <li key={index}>
                <a
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-zinc-500 hover:text-zinc-600 dark:text-current dark:hover:text-neutral-300 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon className="w-7 h-7" />
                </a>
              </li>
            ))}
          </ul>
          <Link href="#contact" passHref>
            <Button icon={FaPaperPlane}>Contact Me</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
