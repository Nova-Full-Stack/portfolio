import Logo from "@/components/common/Logo";
import company from "@/data/company";
import menus from "@/data/common/menus";
import socialLinks from "@/data/common/socialLinks";
import footer from "@/data/footer";
import services from "@/data/services";
import Link from "next/link";
import { FiArrowUp, FiMail, FiMapPin } from "react-icons/fi";

const mailto = `mailto:${company.email}?subject=${encodeURIComponent(
  `Project inquiry for ${company.name}`
)}`;

function ColumnHeading({ children }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-fg mb-5">
      {children}
    </p>
  );
}

const linkClass = "text-sm text-muted hover:text-fg transition-colors";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      {/* Asymmetric on purpose: the generous padding separates the footer from
          the page above it. Below the copyright there is nothing to separate
          from, so a symmetric `py` just leaves dead space at the bottom. */}
      <div className="container pt-16 md:pt-20 pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4 lg:pr-8">
            <Logo size={32} />
            <p className="mt-5 text-sm leading-relaxed text-muted max-w-sm">
              {footer.blurb}
            </p>
            <ul className="flex gap-2 mt-6 -ml-2">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-center items-center w-9 h-9 rounded-md text-muted hover:text-fg hover:bg-surface transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon className="w-[18px] h-[18px]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sections */}
          <nav className="lg:col-span-2" aria-label="Sections">
            <ColumnHeading>Company</ColumnHeading>
            <ul className="space-y-3">
              {Object.keys(menus).map((menu) => (
                <li key={menu}>
                  <Link href={`/#${menus[menu]}`}>
                    <a className={linkClass}>{menu}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Each service deep-links to its own card, not the section as a whole. */}
          <nav className="lg:col-span-3" aria-label="Services">
            <ColumnHeading>Services</ColumnHeading>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link href={`/#${service.id}`}>
                    <a className={linkClass}>{service.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:col-span-3">
            <ColumnHeading>Get in touch</ColumnHeading>
            <a
              href={mailto}
              className="inline-flex items-center gap-2 text-sm font-medium text-fg hover:text-accent transition-colors"
            >
              <FiMail className="w-4 h-4 shrink-0" aria-hidden="true" />
              {company.email}
            </a>
            <p className="mt-3 flex items-center gap-2 text-sm text-muted">
              <FiMapPin className="w-4 h-4 shrink-0" aria-hidden="true" />
              {company.location.label}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {footer.responseNote}
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-line flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; {company.copyrightYear} {company.name}. All rights reserved.
          </p>
          <Link href="/#home">
            <a className="group inline-flex items-center gap-2 text-sm text-muted hover:text-fg transition-colors">
              Back to top
              <FiArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}
