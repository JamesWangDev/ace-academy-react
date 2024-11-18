interface ButtonProps {
    className?: string;
    type?: "default" | "primary" | "success" | "warning";
    icon?: React.ReactNode;
    label: string;
    onClick?: () => void;
    disabled?: boolean;
    rounded?: boolean;
    size?: "md" | "lg";
}

const Button = ({className, type = "default", icon, disabled = false, label, onClick, rounded = false, size = "lg"}: ButtonProps) => {
    const types = {
        default: `bg-white text-midblack ${!rounded && "hover:border-midgrey hover:bg-tangerine border border-black"}`,
        primary: `bg-primary-500 hover:bg-primary-400 ${rounded ? "text-midblack" : "text-white"} border border-primary-500`,
        success: `bg-success hover:bg-success ${rounded ? "text-midblack" : "text-white"} border border-success`,
        warning: `bg-warning hover:bg-warning ${rounded ? "text-midblack" : "text-white"} border border-warning`,
    }
    let buttonClassName = `px-6.5 ${size === "lg" ? "h-16" : "h-11"} flex ${rounded ? "rounded-15" : "rounded-2.5"} disabled:cursor-not-allowed disabled:bg-disabled-bg disabled:text-disabled-text disabled:border-disabled-text ${types[type]} ${className}`
    return (
        <button disabled={disabled} onClick={onClick} className={buttonClassName}>
            <div className="w-full flex my-auto items-center">
                {icon && <div className="mr-2.5">{icon}</div>}
                <span className="flex m-auto text-lg leading-6 font-semibold">{label}</span>
            </div>
        </button>
    )
}

export default Button