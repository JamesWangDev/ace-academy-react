import { useState } from "react";

interface CheckboxProps {
    className?: string;
    label?: string;
}

const Checkbox = ({className, label}: CheckboxProps) => {
  const checkboxClassName = `flex items-center ${className}`
  const [isChecked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!isChecked);
  };

  return (
    <div className={checkboxClassName}>
      <input
        type="checkbox"
        id="customCheckbox"
        className="hidden"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="customCheckbox" className="flex items-center cursor-pointer">
        <div className="relative">
          <div className="w-4 h-4 border border-black rounded-1 bg-white transition duration-300 ease-in-out">
            <svg
              className={`w-4 h-4 text-black transform transition-transform ${
                isChecked ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
              }`}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M20 6L9 17l-5-5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <span className="ml-2 my-auto text-midblack font-extrabold">{label}</span>
      </label>
    </div>
  )
}

export default Checkbox