import Button from "@/components/common/Button";
import Subtitle from "@/components/common/Subtitle";
import Title from "@/components/common/Title";
import company from "@/data/company";
import { FiArrowRight, FiMail } from "react-icons/fi";

const mailto = `mailto:${company.email}?subject=${encodeURIComponent(
  `Project inquiry for ${company.name}`
)}`;

// Not rendered by default: <Cta /> already owns the #contact anchor. Swap one for
// the other in pages/index.jsx rather than rendering both — duplicate ids break
// the header's scrollspy.
export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 border-t border-line">
      <div className="container text-center">
        <Title as="h2" eyebrow="Contact">
          Let&apos;s start a conversation
        </Title>
        <Subtitle className="mx-auto">
          Tell us what you&apos;re building and we&apos;ll get back to you within one
          business day.
        </Subtitle>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm">
          <FiMail className="w-4 h-4 text-accent" aria-hidden="true" />
          <a href={mailto} className="text-muted hover:text-fg transition-colors">
            {company.email}
          </a>
        </div>

        <Button
          as="a"
          href={mailto}
          icon={FiArrowRight}
          iconClassName="group-hover:translate-x-0.5"
          className="mx-auto mt-8"
        >
          Contact us
        </Button>
      </div>
    </section>
  );
}
