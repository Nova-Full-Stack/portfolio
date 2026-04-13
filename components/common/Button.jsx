import clsx from 'clsx'

export default function Button({
    as: Component = 'a',
    children,
    className,
    iconClassName,
    icon: Icon,
    alt = false,
    ...props
}) {
    return (
        <Component
            className={clsx(
                'flex justify-center items-center gap-x-2 text-base font-bold w-fit px-10 py-[0.65rem] rounded-lg select-none transition hover:shadow-lg focus:ring',
                alt
                    ? 'bg-white text-indigo-500 focus:ring-indigo-300'
                    : 'bg-indigo-500 text-white focus:ring-indigo-200 dark:hover:shadow-neutral-800',
                className
            )}
            {...props}
        >
            {children}
            {Icon && <Icon className={clsx('text-lg', iconClassName)} />}
        </Component>
    )
}
