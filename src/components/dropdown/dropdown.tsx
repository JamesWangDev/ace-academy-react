import React, { useState, useRef, useEffect } from 'react';
import { IconDownArrow, IconRightArrow } from '../../assets/icons';

interface DropdownProps {
  options: string[];
  label?: string;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, label, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  const dropdownClasses = `block ${className}`;

  return (
    <div ref={selectRef} className={dropdownClasses}>
      <div className="relative w-full inline-block">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`px-4 py-3 w-full ${isOpen ? "bg-semibrightgrey" : "bg-white"} flex gap-4 rounded-2.5`}
        >
          <span className={`w-full text-sm font-bold focus:outline-none text-midgrey`}>{label}</span>
          <span className='m-auto'><IconDownArrow /></span>
        </button>
        {isOpen && (
          <ul className="absolute top-full z-10 w-66 left-0 p-2.5 bg-white shadow-custom2 rounded-md mt-2 py-1 max-h-100 overflow-y-auto">
            {options.map((option) => (
              <li
                key={option}
                className="flex justify-between cursor-pointer px-4 py-2 text-sm text-midgrey font-semibold hover:bg-tangerine"
              >
                <span>{option}</span>
                <span className='my-auto'><IconRightArrow /></span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
