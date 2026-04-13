import Animate from '@/components/common/Animate'
import Subtitle from '@/components/common/Subtitle'
import Title from '@/components/common/Title'
import projects from '@/data/projects'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-12 md:py-20">
            <div className="container">
                <Title as="h4" className="!mb-6">
                    My Portfolio
                </Title>
                <Subtitle>Let&apos;s See My Recent Projects</Subtitle>
                <Tabs>
                    <TabList className="flex flex-wrap justify-center gap-3 md:gap-5 mb-14">
                        {Object.keys(projects).map((field, index) => (
                            <Tab
                                key={index}
                                className="bg-indigo-100 dark:bg-indigo-300 text-indigo-400 dark:text-indigo-500  hover:text-indigo-500 dark:hover:text-indigo-600 text-base text-center font-bold px-5 py-1.5 rounded-md transition-colors cursor-pointer"
                                selectedClassName="!bg-indigo-500 !text-white"
                            >
                                {field}
                            </Tab>
                        ))}
                    </TabList>
                    {Object.values(projects).map((projects, index) => (
                        <TabPanel
                            key={index}
                            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                            selectedClassName=""
                        >
                            {projects.map((project, index) => (
                                <Animate key={index} animateClass="animate-fadeIn">
                                    <div className="relative rounded-lg max-w-sm md:max-w-full overflow-hidden mx-auto mb-2 group">
                                        <img
                                            src={project.image}
                                            alt={project.name}
                                            className="w-full object-cover transition-transform duration-700 group-hover:scale-125"
                                        />
                                        <div className="absolute inset-0 flex justify-center items-center transition-colors group-hover:bg-black/60">
                                            <div className="flex gap-x-3 font-bold invisible group-hover:visible">
                                                {!!project.github && (
                                                    <a
                                                        href={project.github}
                                                        target="__blank"
                                                        className="text-neutral-200 underline"
                                                    >
                                                        Github
                                                    </a>
                                                )}
                                                {!!project.live && (
                                                    <a
                                                        href={project.live}
                                                        target="__blank"
                                                        className="text-neutral-200 underline"
                                                    >
                                                        Live
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-center font-semibold">{project.name}</p>
                                </Animate>
                            ))}
                        </TabPanel>
                    ))}
                </Tabs>
            </div>
        </section>
    )
}
