import { useState } from 'react';

interface CustomRadioGroupProps {
    className?: string;
    label?: string;
    options: RadioOption[]
}

interface RadioOption {
  value: string;
  label: string;
}

const CustomRadioGroup = ({className, label, options}: CustomRadioGroupProps) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  const radioClassName = `${className}`

  return (
    <div className={radioClassName}>
      {label && <div className="mb-4 font-extrabold leading-6">
          {label}
      </div>}
      <div className='flex w-full justify-between'>
        {options.map((option) => (
            <div
            key={option.value}
            className="items-center gap-2.5 cursor-pointer"
            onClick={() => handleOptionChange(option.value)}
            >
            <div className="w-[26px] h-[26px] mx-auto flex rounded-full border border-primary-500">
                <div className={`w-5 h-5 m-auto rounded-full ${selectedOption === option.value ? 'bg-primary-500' : 'bg-white'}`}/>
            </div>
            <label className=' text-midblack font-extrabold text-xs leading-6'>{option.label}</label>
            </div>
        ))}
      </div>
    </div>
  );
};

export default CustomRadioGroup;
