import {
    FiBarChart2,
    FiCloud,
    FiLayers,
    FiLayout,
    FiServer,
    FiShield,
} from 'react-icons/fi'

// `id` is the anchor each service card renders, so the footer can deep-link to a
// specific card instead of dumping every link on #services. Keep them stable —
// they are public URLs once shared.
const services = [
    {
        id: 'web-design-development',
        title: 'Web Design & Development',
        description:
            'We turn designs into fast, professional websites — fully responsive, accessible and search-optimized from the first commit.',
        icon: FiLayout,
    },
    {
        id: 'backend-solutions',
        title: 'Backend Solutions',
        description:
            'Need a scalable CMS or REST API? We build customizable headless CMS platforms and APIs on Node.js, sized to your traffic.',
        icon: FiServer,
    },
    {
        id: 'full-stack-applications',
        title: 'Full-Stack Applications',
        description:
            'End-to-end web applications — e-commerce, publishing platforms, real-time chat — architected and delivered by one team.',
        icon: FiLayers,
    },
    {
        id: 'data-web-scraping',
        title: 'Data & Web Scraping',
        description:
            'Turn public data into a decision-making asset. We build reliable scrapers and pipelines that keep your market research current.',
        icon: FiBarChart2,
    },
    {
        id: 'bug-fixing-security',
        title: 'Bug Fixing & Security',
        description:
            'Inherited a React or Node codebase that misbehaves? We diagnose, fix and harden existing applications against real threats.',
        icon: FiShield,
    },
    {
        id: 'cloud-deployment',
        title: 'Cloud Deployment',
        description:
            'We deploy and migrate applications to any cloud or Linux VPS, configured and monitored for production from day one.',
        icon: FiCloud,
    },
]

export default services
