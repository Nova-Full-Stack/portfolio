import { FcBarChart, FcEngineering, FcLinux, FcLock, FcServices, FcSupport } from 'react-icons/fc'

const services = [
    {
        title: 'Web Design & Development',
        description:
            'I will convert any design to a unique and professional looking website. My design will be fully responsive and seo optimized.',
        icon: FcServices
    },
    {
        title: 'Backend Solutions',
        description:
            'Do you want your own scalable CMS or rest api? I will make fully customizable headless CMS or rest api using nodejs',
        icon: FcSupport
    },
    {
        title: 'FullStack Solutions',
        description:
            'I will make whole web application like e-commerce store, blogging platform, chat application using MERN stack.',
        icon: FcEngineering
    },
    {
        title: 'Web Scraping',
        description:
            "Do you want to research your competitor website's data for your business? I will make a web scraper for you.",
        icon: FcBarChart
    },
    {
        title: 'Bug Fixing & Security',
        description:
            "Are you having trouble with React or Node website? Don't worry, I am here to fix any kind of bugs of your exiting website.",
        icon: FcLock
    },
    {
        title: 'Cloud Deployment',
        description:
            'I will deploy or migrate your website on any shared or linux VPS hosting and configure it for production.',
        icon: FcLinux
    }
]

export default services
