const about = {
    introduction: (
        <>
            Nova Full Stack builds responsive, enterprise-grade web applications that are
            scalable and maintainable. We work across every stage of the development cycle —
            discovery, architecture, implementation, deployment and ongoing support — so our
            clients get a system that keeps working long after launch.
        </>
    ),
    experience: {
        yearsOfExperience: 6,
        completedProjects: 10,
        clientsServed: 7,
    },
    // Elaborates the lifecycle named in the introduction. Fills the About column
    // beside the stack and shows how we actually engage, not just what we use.
    process: [
        {
            name: 'Discovery',
            description:
                'We map goals, constraints and success metrics before a line of code is written.',
        },
        {
            name: 'Architecture',
            description:
                'We choose a stack and structure sized to your traffic and team — not to trends.',
        },
        {
            name: 'Implementation',
            description:
                'We ship in reviewable increments, tested and documented as we build.',
        },
        {
            name: 'Deployment',
            description:
                'We release to production with monitoring, CI/CD and rollback in place.',
        },
        {
            name: 'Ongoing support',
            description:
                'We maintain, patch and evolve the system long after launch.',
        },
    ],
    // Grouped by discipline rather than a flat cloud — reads as a team's
    // capability map, not a bootcamp checklist. Every entry is a public claim
    // about what we do; trim anything that isn't genuinely in use.
    stack: [
        {
            category: 'Languages',
            items: ['TypeScript', 'JavaScript', 'Python', 'Go'],
        },
        {
            category: 'Frontend',
            items: ['React', 'Next.js', 'Vue', 'Angular', 'Redux Toolkit', 'Tailwind CSS'],
        },
        {
            category: 'Backend',
            items: ['Node.js', 'Express', 'NestJS', 'FastAPI', 'GraphQL', 'REST APIs'],
        },
        {
            category: 'AI & LLM',
            items: ['Anthropic Claude', 'OpenAI', 'LangChain', 'RAG & vector search'],
        },
        {
            category: 'Data',
            items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
        },
        {
            category: 'Cloud & DevOps',
            items: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD', 'Git'],
        },
    ],
}

export default about
