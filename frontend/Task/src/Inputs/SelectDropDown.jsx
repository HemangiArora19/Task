import React, { useState } from "react";
import { LuChevronDown } from "react-icons/lu";

const SelectDropDown = ({ options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full outline-none bg-white border border-slate-100 rounded-md px-2.5 py-3 flex justify-between items-center text-left"
      >
        {value
          ? options.find((opt) => opt.value === value)?.label
          : placeholder}
        <span className="ml-2">
          {isOpen ? <LuChevronDown classNarotate-180me="" /> : <LuChevronDown className="" />}
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-slate-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectDropDown;
