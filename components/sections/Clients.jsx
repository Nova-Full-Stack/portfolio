import Animate from '@/components/common/Animate'
import Subtitle from '@/components/common/Subtitle'
import Title from '@/components/common/Title'
import clients from '@/data/clients'
import { FiArrowUpRight } from 'react-icons/fi'

export default function Clients() {
    return (
        <section id="clients" className="py-20 md:py-28 border-t border-line">
            <div className="container">
                <Title as="h2" eyebrow="Clients">
                    Teams we&apos;ve built for
                </Title>
                <Subtitle className="mb-14 md:mb-16">
                    A selection of companies we&apos;ve delivered production software for.
                </Subtitle>

                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {clients.map((client, index) => (
                        <Animate as="li" key={client.name} animateDelay={index * 70}>
                            <a
                                href={client.url}
                                target="_blank"
                                rel="noreferrer"
                                className="group flex flex-col h-full rounded-xl border border-line bg-surface p-5 hover:border-fg/25 hover:bg-line/30 transition-colors"
                            >
                                <div className="flex items-start justify-between gap-2">
                                    <span className="text-base font-semibold text-fg">
                                        {client.name}
                                    </span>
                                    <FiArrowUpRight
                                        className="w-4 h-4 shrink-0 text-muted transition-colors group-hover:text-fg"
                                        aria-hidden="true"
                                    />
                                </div>
                                <p className="mt-2 text-sm leading-relaxed text-muted">
                                    {client.description}
                                </p>
                                {client.ongoing && (
                                    <span className="mt-4 inline-flex items-center gap-1.5 self-start rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                                        <span
                                            className="w-1.5 h-1.5 rounded-full bg-accent"
                                            aria-hidden="true"
                                        />
                                        Ongoing
                                    </span>
                                )}
                            </a>
                        </Animate>
                    ))}
                </ul>
            </div>
        </section>
    )
}
