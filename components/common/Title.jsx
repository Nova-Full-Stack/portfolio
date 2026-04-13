import clsx from 'clsx'

export default function Title({ as: Component = 'h1', children, className, ...props }) {
    return (
        <Component
            className={clsx(
                "text-3xl md:text-4xl text-neutral-700 dark:text-neutral-300 text-center font-bold pb-5 mb-20 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-1.5 after:bg-indigo-500 after:rounded-lg",
                className
            )}
            {...props}
        >
            {children}
        </Component>
    )
}
