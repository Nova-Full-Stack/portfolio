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
                </div>

                <div className="lg:pt-2">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted mb-6">
                        Our stack
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {about.skills.map((skill, index) => (
                            <Animate
                                as="span"
                                key={skill}
                                animateDelay={index * 35}
                                className="inline-flex items-center rounded-md border border-line bg-surface px-3 py-1.5 text-sm font-medium text-fg/80"
                            >
                                {skill}
                            </Animate>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
