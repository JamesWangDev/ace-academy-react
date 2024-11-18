import React, { useState, useRef, useEffect } from 'react';
import { IconDownArrow } from '../../assets/icons';

interface CustomSelectProps {
  options: string[];
  label?: string;
  className?: string;
  placeholder?: string;
  icon?: React.ReactNode;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options, label, icon, className, placeholder }) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const customSelectClasses = `block ${className}`;

  return (
    <div ref={selectRef} className={customSelectClasses}>
      {label && (
        <div className="mb-2.5 font-extrabold leading-6">
          {label}
        </div>
      )}
      <div className="relative w-full inline-block">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className='p-4.5 w-full bg-tangerine flex gap-4 rounded-2.5'
        >
          {icon && <div className="my-auto">{icon}</div>}
          <span className={`w-full font-bold leading-6 bg-tangerine text-midblack text-left focus:outline-none ${!selectedOption && "text-midgrey"}`}>{selectedOption || placeholder || 'Select an option'}</span>
          <span className='m-auto'><IconDownArrow /></span>
        </button>
        {isOpen && (
          <ul className="absolute top-full left-0 p-2.5 bg-white shadow-custom2 rounded-md mt-2 py-1 w-full max-h-56 overflow-y-auto">
            {options.map((option) => (
              <li
                key={option}
                className="cursor-pointer px-4 py-2 text-sm text-midgrey rounded-2.5 font-semibold hover:bg-tangerine"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CustomSelect;
