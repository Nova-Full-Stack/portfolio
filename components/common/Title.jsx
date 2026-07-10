import clsx from 'clsx'

/**
 * Section heading. `eyebrow` renders the small accent label above the heading;
 * omit it for a bare title.
 */
export default function Title({
    as: Component = 'h2',
    eyebrow,
    children,
    className,
    ...props
}) {
    return (
        <div className={clsx('mb-5', className)}>
            {eyebrow && (
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent mb-4">
                    {eyebrow}
                </p>
            )}
            <Component
                className="text-3xl md:text-[2.5rem] md:leading-[1.1] font-extrabold tracking-tightest text-fg"
                {...props}
            >
                {children}
            </Component>
        </div>
    )
}
