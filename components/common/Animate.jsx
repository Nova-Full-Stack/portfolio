import clsx from 'clsx'
import { useInView } from 'react-intersection-observer'

export default function Animate({
    as: Component = 'div',
    className,
    animateClass = 'animate-fadeIn',
    animateDurationClass = 'animate-duration-[1800ms]',
    animateDelay = 0,
    children,
    ...props
}) {
    const [ref, isInView] = useInView({
        threshold: 1,
        triggerOnce: true,
        initialInView: true
    })

    return (
        <Component
            ref={ref}
            style={{ animationDelay: `${animateDelay}ms` }}
            className={clsx(
                className,
                isInView ? `${animateClass} ${animateDurationClass}` : '!opacity-0'
            )}
            {...props}
        >
            {children}
        </Component>
    )
}
