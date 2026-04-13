import clsx from 'clsx'

export default function Subtitle({ as: Component = 'p', children, className, ...props }) {
    return (
        <Component className={clsx('text-center font-bold mb-20', className)} {...props}>
            {children}
        </Component>
    )
}
