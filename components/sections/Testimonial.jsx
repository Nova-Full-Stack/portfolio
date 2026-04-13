import Animate from '@/components/common/Animate'
import Subtitle from '@/components/common/Subtitle'
import Title from '@/components/common/Title'
import testimonials from '@/data/testimonials'
import { FaStar } from 'react-icons/fa'

export default function Testimonial() {
    return (
        <section id="testimonial" className="py-12 md:py-20">
            <div className="container">
                <Title as="h5" className="!mb-6">
                    Testimonial
                </Title>
                <Subtitle>What Clients Say</Subtitle>
                <div className="md:columns-2 lg:columns-3 gap-5">
                    {testimonials.map((testimonial, index) => (
                        <Animate
                            key={index}
                            animateClass="animate-fadeIn"
                            animateDurationClass="animate-duration-1000"
                            animateDelay={index * 200}
                            className="inline-block bg-gray-100 dark:bg-neutral-800 mb-5 p-5"
                        >
                            <div className="flex gap-5 mb-5">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full ring ring-indigo-300 dark:ring-indigo-400"
                                />
                                <div>
                                    <p className="text-base font-semibold">{testimonial.name}</p>
                                    <div className="flex gap-1.5 text-base text-yellow-500">
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                        <FaStar />
                                    </div>
                                </div>
                            </div>
                            <p className="italic">{testimonial.description}</p>
                        </Animate>
                    ))}
                </div>
            </div>
        </section>
    )
}
