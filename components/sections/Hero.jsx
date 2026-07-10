import Button from "@/components/common/Button";
import about from "@/data/about";
import socialLinks from "@/data/common/socialLinks";
import home from "@/data/home";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const stats = [
  { value: about.experience.yearsOfExperience, label: "Years of experience" },
  { value: about.experience.completedProjects, label: "Projects delivered" },
  { value: about.experience.clientsServed, label: "Clients served" },
];

export default function Hero() {
  return (
    <section id="home" className="relative pt-14 pb-20 md:pt-24 md:pb-28">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-grid" />
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {home.eyebrow}
          </p>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl md:leading-[1.05] font-extrabold tracking-tightest text-fg">
            {home.headline}
          </h1>
          <p className="mt-6 text-base md:text-lg leading-relaxed max-w-2xl">
            {home.introduction}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link href="#contact" passHref>
              <Button icon={FiArrowRight} iconClassName="group-hover:translate-x-0.5">
                Start a project
              </Button>
            </Link>
            {socialLinks.map((social) => (
              <Button
                key={social.name}
                as="a"
                href={social.link}
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                icon={social.icon}
              >
                {social.name}
              </Button>
            ))}
          </div>
        </div>

        <dl className="mt-16 md:mt-24 grid grid-cols-1 sm:grid-cols-3 border-t border-line">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="py-6 sm:py-8 border-b sm:border-b-0 sm:border-r border-line last:border-none sm:pr-8 sm:[&:not(:first-child)]:pl-8"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-3xl md:text-4xl font-extrabold tracking-tightest text-fg tabular-nums">
                  {stat.value}+
                </span>
                <span className="mt-1 block text-sm text-muted">{stat.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
