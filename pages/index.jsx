import About from '@/components/sections/About'
import Cta from '@/components/sections/Cta'
import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import Layout from '@/layouts/Layout'

// <Portfolio /> is intentionally not rendered — the projects it lists are personal
// demos rather than client work. Restore it here and re-add `Work: 'portfolio'` to
// data/common/menus.js once there is client work to show.
export default function Home() {
    return (
        <Layout>
            <Hero />
            <About />
            <Services />
            <Cta />
        </Layout>
    )
}
