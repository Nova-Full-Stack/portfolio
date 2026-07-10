import Animate from '@/components/common/Animate'
import Subtitle from '@/components/common/Subtitle'
import Title from '@/components/common/Title'
import testimonials from '@/data/testimonials'
import { FiStar } from 'react-icons/fi'

// Not currently rendered — see data/testimonials.js for how to re-enable.
export default function Testimonial() {
    if (!testimonials.length) return null

    return (
        <section id="testimonial" className="py-20 md:py-28 border-t border-line">
            <div className="container">
                <Title as="h2" eyebrow="Testimonials">
                    What clients say
                </Title>
                <Subtitle className="mb-14 md:mb-16">
                    Feedback from the teams we have worked with.
                </Subtitle>

                <div className="md:columns-2 lg:columns-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <Animate
                            key={testimonial.name}
                            animateDelay={index * 70}
                            className="inline-block w-full mb-6 rounded-xl border border-line bg-surface p-6"
                        >
                            <div className="flex items-center gap-4 mb-5">
                                <img
                                    src={testimonial.avatar}
                                    alt=""
                                    loading="lazy"
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div>
                                    <p className="text-sm font-semibold text-fg">
                                        {testimonial.name}
                                    </p>
                                    <div
                                        className="flex gap-0.5 text-accent"
                                        aria-label="Rated 5 out of 5"
                                    >
                                        {Array.from({ length: 5 }).map((_, star) => (
                                            <FiStar
                                                key={star}
                                                className="w-3.5 h-3.5 fill-current"
                                                aria-hidden="true"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-sm leading-relaxed text-muted">
                                {testimonial.description}
                            </p>
                        </Animate>
                    ))}
                </div>
            </div>
        </section>
    )
}
