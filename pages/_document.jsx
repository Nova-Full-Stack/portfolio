import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* All three icons are the rocket mark on an opaque white tile — the
                    mark alone stays legible at 16px where the wordmark would not. The
                    .ico and the PNG must stay in sync so browsers preferring either
                    show the same thing. apple-touch-icon uses the same opaque mark:
                    iOS applies its own squircle mask and paints transparency black, so
                    an opaque source is required. */}
                <link rel="icon" href="/favicon.ico" sizes="16x16 32x32 48x48" />
                <link rel="icon" type="image/png" href="/assets/nova-icon.png" sizes="180x180" />
                <link rel="apple-touch-icon" href="/assets/nova-mark.png" />
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
