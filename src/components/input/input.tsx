interface InputProps {
    className?: string;
    label?: string;
    icon?: React.ReactNode;
    placeholder?: string;
    isRequired?: boolean;
    type?: "default" | "rounded"
}

const Input = ({className, label, icon, placeholder, isRequired = false, type = "default"}: InputProps) => {
    const inputClassName = `block ${className}`

    return (
        <div className={inputClassName}>
            {label && <div className="mb-2.5 font-extrabold leading-6">
                {label}
            </div>}
            <div className={`p-4.5 w-full bg-tangerine flex gap-4 ${type === "rounded" ? 'rounded-7.5' : 'rounded-2.5'}`}>
                {icon && <div className="my-auto">{icon}</div>}
                <input required={isRequired} type="text" className="w-full font-bold leading-6 bg-tangerine text-midblack focus:outline-none placeholder:text-midgrey" placeholder={placeholder} />
            </div>
        </div>
    )
}

export default Input