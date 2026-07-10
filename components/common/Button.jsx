import clsx from 'clsx'

const variants = {
    primary: 'bg-accent text-accent-fg hover:opacity-90',
    secondary: 'bg-surface text-fg border border-line hover:border-fg/25 hover:bg-line/40',
    // For use on the accent-filled CTA panel, where `primary` would vanish.
    inverse: 'bg-canvas text-fg hover:opacity-90'
}

export default function Button({
    as: Component = 'a',
    children,
    className,
    iconClassName,
    icon: Icon,
    variant = 'primary',
    ...props
}) {
    return (
        <Component
            className={clsx(
                'group inline-flex justify-center items-center gap-x-2 text-sm font-semibold w-fit px-6 h-11 rounded-lg select-none transition-all duration-200',
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
            {/* No default translate: callers opt in via `iconClassName`, so a
                back-arrow can slide left without fighting a baked-in rule. */}
            {Icon && (
                <Icon className={clsx('w-4 h-4 transition-transform duration-200', iconClassName)} />
            )}
        </Component>
    )
}
