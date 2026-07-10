import Animate from '@/components/common/Animate'
import Subtitle from '@/components/common/Subtitle'
import Title from '@/components/common/Title'
import about from '@/data/about'

export default function About() {
    return (
        <section id="about" className="py-20 md:py-28 border-t border-line">
            <div className="container grid lg:grid-cols-2 gap-14 lg:gap-20">
                <div>
                    <Title as="h2" eyebrow="About">
                        Who we are
                    </Title>
                    <Subtitle as="div" className="leading-relaxed">
                        {about.introduction}
                    </Subtitle>

                    <p className="mt-10 text-sm font-semibold uppercase tracking-[0.18em] text-muted mb-6">
                        How we work
                    </p>
                    <ol className="space-y-6">
                        {about.process.map((step, index) => (
                            <Animate
                                as="li"
                                key={step.name}
                                animateDelay={index * 90}
                                className="flex gap-4 border-b border-line pb-6 last:border-0 last:pb-0"
                            >
                                <span
                                    className="shrink-0 text-sm font-bold tabular-nums text-accent pt-0.5"
                                    aria-hidden="true"
                                >
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <div>
                                    <p className="text-base font-semibold text-fg">{step.name}</p>
                                    <p className="mt-1 text-sm leading-relaxed text-muted">
                                        {step.description}
                                    </p>
                                </div>
                            </Animate>
                        ))}
                    </ol>
                </div>

                <div className="lg:pt-2">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted mb-8">
                        Our stack
                    </p>
                    <div className="space-y-7">
                        {about.stack.map((group, index) => (
                            <Animate key={group.category} animateDelay={index * 90}>
                                <p className="text-xs font-semibold uppercase tracking-wider text-fg mb-3">
                                    {group.category}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {group.items.map((item) => (
                                        <span
                                            key={item}
                                            className="inline-flex items-center rounded-md border border-line bg-surface px-3 py-1.5 text-sm font-medium text-fg/80"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </Animate>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
