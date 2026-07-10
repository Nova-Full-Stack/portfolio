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
                    Six ways we plug into a product team — or replace the need for one.
                </Subtitle>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-line border border-line rounded-xl overflow-hidden">
                    {services.map((service, index) => (
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
                    ))}
                </div>
            </div>
        </section>
    )
}
