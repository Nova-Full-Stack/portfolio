import Button from '@/components/common/Button'
import Header from '@/layouts/Header'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import { FaHouseUser } from 'react-icons/fa'

export default function NotFound() {
    return (
        <div className="flex flex-col h-screen">
            <NextSeo noindex nofollow />
            <Header />
            <main className="my-auto">
                <h1 className="text-4xl md:text-5xl text-center font-bold">
                    Sorry, 404 Page Not Found :(
                </h1>
                <Link href="/" passHref>
                    <Button icon={FaHouseUser} className="px-6 mx-auto mt-14">
                        Back to home
                    </Button>
                </Link>
            </main>
        </div>
    )
}
