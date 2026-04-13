import '@/styles/index.css'
import { DefaultSeo, SocialProfileJsonLd, WebPageJsonLd } from 'next-seo'
import seo from '../seo.config'

export default function App({ Component, pageProps }) {
    return (
        <>
            <DefaultSeo {...seo.defaultSeo} />
            <SocialProfileJsonLd {...seo.jsonLd.socialProfileJsonLd} />
            <WebPageJsonLd {...seo.jsonLd.webpageJsonLd} />
            <Component {...pageProps} />
        </>
    )
}
