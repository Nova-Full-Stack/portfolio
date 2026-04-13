import Animate from '@/components/common/Animate'
import Subtitle from '@/components/common/Subtitle'
import Title from '@/components/common/Title'
import services from '@/data/services'

export default function Services() {
    return (
        <section id="services" className="py-12 md:py-20">
            <div className="container">
                <Title as="h3" className="!mb-6">
                    My Services
                </Title>
                <Subtitle>How I Help You Succeed</Subtitle>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-14">
                    {services.map((service, index) => (
                        <Animate
                            key={index}
                            animateDelay={index * 100}
                            className="flex flex-col items-center gap-3"
                        >
                            <service.icon className="text-5xl text-indigo-500" />
                            <h4 className="text-xl font-bold">{service.title}</h4>
                            <p>{service.description}</p>
                        </Animate>
                    ))}
                </div>
            </div>
        </section>
    )
}
