import React from 'react';

interface SwitchProps {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ label, checked, onChange }) => {
  const handleToggle = () => {
    onChange(!checked);
  };

  return (
    <div className="flex items-center space-x-3.75 cursor-pointer" onClick={handleToggle}>
      <div
        className={`w-6.5 h-3.5 flex items-center justify-${checked ? 'end' : 'start'} px-0.5 rounded-full transition-colors duration-300 ${
          checked ? 'bg-primary-500' : 'bg-midgrey'
        }`}
      >
        <div className={`w-2.5 h-2.5 rounded-full bg-white shadow-md transition-transform duration-300 transform`} />
      </div>
      {label && <span className="text-sm font-bold text-midblack">{label}</span>}
    </div>
  );
};

export default Switch;
