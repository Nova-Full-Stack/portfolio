import Animate from '@/components/common/Animate'
// import Button from '@/components/common/Button'
import Title from '@/components/common/Title'
import about from '@/data/about'
import CountUp from 'react-countup'
// import { FaFilePdf } from 'react-icons/fa'

export default function About() {
    return (
        <section id="about" className="py-12 md:py-28">
            <div className="container">
                <Title as="h2">About Me</Title>
                <div className="grid lg:grid-cols-2 gap-20">
                    <div className="order-2 lg:order-1">
                        <p className="text-2xl font-bold mb-5">My Skills</p>
                        <div className="flex flex-wrap gap-3 text-sm lg:text-base text-neutral-500 dark:text-neutral-400 font-bold">
                            {about.skills.map((skill, index) => (
                                <Animate
                                    as="span"
                                    key={index}
                                    animateDurationClass="animate-duration-1000"
                                    animateDelay={index * 80}
                                    className="flex-auto lg:flex-grow-0 bg-neutral-200 dark:bg-neutral-800 text-center rounded-md py-3 px-5"
                                >
                                    {skill}
                                </Animate>
                            ))}
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <p className="text-2xl font-bold mb-5">Get to know me</p>
                        <p>{about.introduction}</p>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-base mt-16 mb-10">
                            <div className="text-center">
                                <div className="text-2xl text-neutral-900 dark:text-neutral-300 font-bold">
                                    <CountUp
                                        end={about.experience.yearsOfExperience}
                                        decimal=","
                                        suffix="+"
                                        enableScrollSpy
                                        scrollSpyOnce
                                    />
                                </div>
                                <div className="font-semibold">Years of experience</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl text-neutral-900 dark:text-neutral-300 font-bold">
                                    <CountUp
                                        end={about.experience.completedProjects}
                                        suffix="+"
                                        enableScrollSpy
                                        scrollSpyOnce
                                    />
                                </div>
                                <div className="font-semibold">Completed Projects</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl text-neutral-900 dark:text-neutral-300 font-bold">
                                    <CountUp
                                        end={about.experience.completedWorks}
                                        suffix="+"
                                        enableScrollSpy
                                        scrollSpyOnce
                                    />
                                </div>
                                <div className="font-semibold">Number of companies</div>
                            </div>
                        </div>
                        {/* disable temporary */}
                        {/* <Button
                            href={about.resumeLink}
                            target="__blank"
                            icon={FaFilePdf}
                            className="mx-auto"
                        >
                            View Resume
                        </Button> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
