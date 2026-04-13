import { Head, Html, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="shortcut icon" href="/favicon.ico" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap"
                    rel="stylesheet"
                />
                <Script src="/theme.js" strategy="beforeInteractive" />
            </Head>
            <body className="text-lg text-gray-600 dark:text-neutral-400 dark:bg-neutral-900 relative min-h-screen">
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
