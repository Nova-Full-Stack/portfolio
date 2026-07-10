import clsx from 'clsx'

/** Supporting line under a Title. */
export default function Subtitle({ as: Component = 'p', children, className, ...props }) {
    return (
        <Component className={clsx('text-base md:text-lg text-muted max-w-2xl', className)} {...props}>
            {children}
        </Component>
    )
}
