import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import Discount from '@/components/sections/Discount'
import Hero from '@/components/sections/Hero'
import Portfolio from '@/components/sections/Portfolio'
import Services from '@/components/sections/Services'
import Testimonial from '@/components/sections/Testimonial'
import Layout from '@/layouts/Layout'

export default function Home() {
    return (
        <Layout>
            <Hero />
            <About />
            <Services />
            <Portfolio />
            <Testimonial />
            <Discount />
            <Contact />
        </Layout>
    )
}
