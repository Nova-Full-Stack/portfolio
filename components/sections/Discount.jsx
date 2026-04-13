import Animate from '@/components/common/Animate'
import Button from '@/components/common/Button'
import Link from 'next/link'
import { FaPaperPlane } from 'react-icons/fa'

export default function Discount() {
    return (
        <section className="py-12 md:py-20">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center bg-indigo-500 text-white text-center lg:text-left rounded-xl px-5 py-10 lg:pt-5 lg:pb-0 overflow-hidden md:shadow-md dark:shadow-none">
                    <div className="mx-auto">
                        <p className="font-bold text-3xl sm:text-4xl drop-shadow-md">
                            Do you have new project?
                        </p>
                        <p className="font-semibold py-5">
                            Contact me and get a{' '}
                            <Animate
                                as="b"
                                animateClass="animate-flash animate-repeat-2"
                                animateDurationClass="animate-duration-1000"
                            >
                                20% discount
                            </Animate>{' '}
                            on your first project
                        </p>
                        <Link href="/#contact" passHref>
                            <Button icon={FaPaperPlane} className="mx-auto lg:mx-0" alt>
                                Contact Me
                            </Button>
                        </Link>
                    </div>
                    <div className="hidden lg:block lg:mx-auto">
                        <img src="assets/discount.svg" alt="Discount" className="w-[450px]" />
                    </div>
                </div>
            </div>
        </section>
    )
}
