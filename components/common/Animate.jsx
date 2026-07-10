import clsx from 'clsx'
import { useInView } from 'react-intersection-observer'

export default function Animate({
    as: Component = 'div',
    className,
    animateClass = 'animate-fadeIn',
    animateDurationClass = 'animate-duration-[700ms]',
    animateDelay = 0,
    children,
    ...props
}) {
    const [ref, isInView] = useInView({
        // Was `threshold: 1`, which required an element to be 100% visible before
        // it faded in — anything taller than the viewport stayed at opacity 0
        // forever. A small fraction is all we want.
        threshold: 0.15,
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
