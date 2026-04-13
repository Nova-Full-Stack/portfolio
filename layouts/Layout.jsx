import Footer from './Footer'
import Gradients from './Gradients'
import Header from './Header'

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <Gradients />
            <main>{children}</main>
            <Footer />
        </>
    )
}
