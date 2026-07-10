import company from '@/data/company'
import clsx from 'clsx'

/**
 * The company mark plus wordmark.
 *
 * The mark is decorative (`alt=""`): the wordmark beside it already carries the
 * name as text, and the wrapping link supplies its own aria-label. Rendering the
 * name twice to a screen reader would be noise.
 *
 * `rounded-md` is load-bearing, not decoration — the source PNG is opaque, so
 * without it the logo reads as a bare grey square on a dark background.
 */
export default function Logo({ className, size = 32, showWordmark = true }) {
    return (
        <span className={clsx('flex items-center gap-2.5', className)}>
            <img
                src={company.logo}
                alt=""
                aria-hidden="true"
                width={size}
                height={size}
                style={{ width: size, height: size }}
                className="shrink-0 rounded-md object-cover"
            />
            {showWordmark && (
                <span className="flex items-baseline gap-1.5 whitespace-nowrap">
                    <span className="text-[17px] font-extrabold tracking-tightest text-fg">
                        Nova <span className="text-accent">Full Stack</span>
                    </span>
                </span>
            )}
        </span>
    )
}
