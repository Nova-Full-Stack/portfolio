import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Both icons are the logo centre-cropped to its middle 72% and masked
                    to a circle. Browsers that prefer the PNG must get a round one too,
                    or they would render the square while the .ico stays round.
                    apple-touch-icon deliberately keeps the opaque square: iOS applies
                    its own squircle mask and paints transparency black. */}
                <link rel="icon" href="/favicon.ico" sizes="16x16 32x32 48x48" />
                <link rel="icon" type="image/png" href="/assets/nova-icon.png" sizes="180x180" />
                <link rel="apple-touch-icon" href="/assets/nova-logo.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
                    rel="stylesheet"
                />
                <Script src="/theme.js" strategy="beforeInteractive" />
            </Head>
            <body className="bg-canvas text-muted relative min-h-screen antialiased">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
