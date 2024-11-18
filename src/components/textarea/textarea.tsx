interface TextAreaProps {
    label?: string;
    className?: string;
    placeholder?: string;
}

const TextArea = ({label, className, placeholder}: TextAreaProps) => {
    const textAreaClassName = `${className}`

    return (
        <div className={textAreaClassName}>
            {label && <div className="mb-2.5 font-extrabold leading-6">
                {label}
            </div>}
            <div className={`p-4.5 w-full bg-tangerine flex gap-4 rounded-2.5`}>
                <textarea className="w-full h-60 font-bold leading-6 bg-tangerine text-midblack focus:outline-none placeholder:text-midgrey" placeholder={placeholder} />
            </div>
        </div>
    )
}

export default TextArea