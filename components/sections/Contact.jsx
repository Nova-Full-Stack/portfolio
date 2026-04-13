import Button from "@/components/common/Button";
import Subtitle from "@/components/common/Subtitle";
import Title from "@/components/common/Title";
import { FaPaperPlane, FaEnvelope } from "react-icons/fa";

const EMAIL = "tony.sun.me@outlook.com";

export default function Contact() {
  return (
    <section id="contact" className="py-12 md:py-24">
      <div className="container max-w-5xl text-center">
        <Title as="h6" className="!mb-6">
          Get In Touch
        </Title>
        <Subtitle>Let&apos;s Start a Conversation</Subtitle>
        <div className="flex items-center justify-center gap-2 mt-8 text-lg">
          <FaEnvelope className="text-primary" />
          <span>{EMAIL}</span>
        </div>
        <Button
          as="a"
          href="mailto:tony.sun.me@outlook.com?subject=subjectContent"
          icon={FaPaperPlane}
          className="mx-auto mt-8 px-14"
        >
          Contact Me
        </Button>
      </div>
    </section>
  );
}
