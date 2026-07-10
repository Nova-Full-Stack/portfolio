import Animate from '@/components/common/Animate'
import Subtitle from '@/components/common/Subtitle'
import Title from '@/components/common/Title'
import projects from '@/data/projects'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

// Not currently rendered — see pages/index.jsx.
export default function Portfolio() {
    return (
        <section id="portfolio" className="py-20 md:py-28 border-t border-line">
            <div className="container">
                <Title as="h2" eyebrow="Work">
                    A selection of recent projects
                </Title>
                <Subtitle className="mb-14 md:mb-16">
                    Things we have designed, built and shipped.
                </Subtitle>

                <Tabs>
                    <TabList className="flex flex-wrap gap-2 mb-12">
                        {Object.keys(projects).map((field) => (
                            <Tab
                                key={field}
                                className="rounded-md border border-line bg-surface px-4 py-1.5 text-sm font-medium text-muted hover:text-fg transition-colors cursor-pointer"
                                selectedClassName="!bg-accent !text-accent-fg !border-accent"
                            >
                                {field}
                            </Tab>
                        ))}
                    </TabList>

                    {Object.values(projects).map((group, index) => (
                        <TabPanel
                            key={index}
                            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
                            selectedClassName=""
                        >
                            {group.map((project, projectIndex) => (
                                <Animate key={project.name} animateDelay={projectIndex * 70}>
                                    <div className="group relative overflow-hidden rounded-xl border border-line bg-surface">
                                        <img
                                            src={project.image}
                                            alt={project.name}
                                            loading="lazy"
                                            className="w-full aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center gap-4 bg-canvas/85 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                            {!!project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-sm font-semibold text-fg underline underline-offset-4"
                                                >
                                                    Github
                                                </a>
                                            )}
                                            {!!project.live && (
                                                <a
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-sm font-semibold text-fg underline underline-offset-4"
                                                >
                                                    Live
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                    <p className="mt-3 text-sm font-medium text-fg">
                                        {project.name}
                                    </p>
                                </Animate>
                            ))}
                        </TabPanel>
                    ))}
                </Tabs>
            </div>
        </section>
    )
}
