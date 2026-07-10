import Animate from '@/components/common/Animate'
import Subtitle from '@/components/common/Subtitle'
import Title from '@/components/common/Title'
import services from '@/data/services'

export default function Services() {
    return (
        <section id="services" className="py-20 md:py-28 border-t border-line">
            <div className="container">
                <Title as="h2" eyebrow="Services">
                    How we help you succeed
                </Title>
                <Subtitle className="mb-14 md:mb-16">
                    Ways we plug into a product team — or replace the need for one.
                </Subtitle>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-xl overflow-hidden">
                    {services.map((service, index) =>
                        service.featured ? (
                            // Full-width lead card. Spanning every column keeps the
                            // grid tiling cleanly (6 standard cards fill the rows
                            // below) and gives the flagship service top billing.
                            <Animate
                                key={service.id}
                                id={service.id}
                                animateDelay={index * 70}
                                className="group bg-surface p-7 md:p-8 sm:col-span-2 lg:col-span-3 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8"
                            >
                                <div className="flex items-center gap-4 sm:w-[38%] sm:shrink-0">
                                    <span className="inline-flex w-11 h-11 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                                        <service.icon className="w-5 h-5 text-accent" aria-hidden="true" />
                                    </span>
                                    <h3 className="text-lg font-semibold text-fg">
                                        {service.title}
                                    </h3>
                                </div>
                                <p className="text-sm leading-relaxed text-muted sm:flex-1">
                                    {service.description}
                                </p>
                            </Animate>
                        ) : (
                            <Animate
                                key={service.id}
                                id={service.id}
                                animateDelay={index * 70}
                                className="group bg-canvas hover:bg-surface transition-colors p-7 md:p-8"
                            >
                                <service.icon className="w-6 h-6 text-accent" aria-hidden="true" />
                                <h3 className="mt-5 text-base font-semibold text-fg">
                                    {service.title}
                                </h3>
                                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                                    {service.description}
                                </p>
                            </Animate>
                        )
                    )}
                </div>
            </div>
        </section>
    )
}
