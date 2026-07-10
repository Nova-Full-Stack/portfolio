import Button from '@/components/common/Button'
import Header from '@/layouts/Header'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'

export default function NotFound() {
    return (
        <div className="flex flex-col min-h-screen">
            <NextSeo noindex nofollow />
            <Header />
            <main className="my-auto container text-center py-24">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    Error 404
                </p>
                <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tightest text-fg">
                    This page doesn&apos;t exist.
                </h1>
                <p className="mt-5 text-base md:text-lg text-muted">
                    The link may be outdated, or the page may have moved.
                </p>
                <Link href="/" passHref>
                    <Button icon={FiArrowLeft} iconClassName="group-hover:-translate-x-0.5" className="mx-auto mt-9">
                        Back to home
                    </Button>
                </Link>
            </main>
        </div>
    )
}
