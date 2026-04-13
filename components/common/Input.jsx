import clsx from 'clsx'

export default function Input({
    as: Component = 'input',
    type = 'text',
    name,
    label,
    placeholder,
    className,
    elClassName,
    ...props
}) {
    return (
        <div className={clsx('flex flex-col gap-y-2', elClassName)}>
            <label htmlFor={name} className="text-base font-bold">
                {label}
            </label>
            <Component
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                className={clsx(
                    'bg-gray-100 dark:bg-neutral-800 rounded-md shadow-sm dark:shadow-none border-gray-300 dark:border-neutral-700 focus:border-indigo-300 focus:ring dark:focus:border-indigo-500 focus:ring-indigo-300 focus:ring-opacity-60',
                    Component === 'input' && 'form-input',
                    className
                )}
                {...props}
            />
        </div>
    )
}
