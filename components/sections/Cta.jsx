import Button from '@/components/common/Button'
import company from '@/data/company'
import { FiArrowRight } from 'react-icons/fi'

const mailto = `mailto:${company.email}?subject=${encodeURIComponent(
    `Project inquiry for ${company.name}`
)}&body=${encodeURIComponent(
    `Hi ${company.shortName}, I would like to discuss a potential project.`
)}`

export default function Cta() {
    return (
        <section id="contact" className="py-20 md:py-28 border-t border-line">
            <div className="container">
                <div className="rounded-2xl border border-line bg-surface px-6 py-14 md:px-16 md:py-20 text-center">
                    <h2 className="text-3xl md:text-[2.5rem] md:leading-[1.1] font-extrabold tracking-tightest text-fg">
                        Have a project in mind?
                    </h2>
                    <p className="mx-auto mt-5 max-w-xl text-base md:text-lg text-muted">
                        Tell us what you&apos;re building and we&apos;ll get back to you within one
                        business day.
                    </p>
                    <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <Button
                            as="a"
                            href={mailto}
                            icon={FiArrowRight}
                            iconClassName="group-hover:translate-x-0.5"
                        >
                            Start a conversation
                        </Button>
                        <a
                            href={mailto}
                            className="text-sm font-medium text-muted hover:text-fg transition-colors"
                        >
                            {company.email}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
