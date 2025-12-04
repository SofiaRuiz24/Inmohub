import React, { useState } from "react";
import { Icon } from "./Icon";

interface DropdownProps {
  placeholder: string;
  options?: string[];
  icon?: React.ReactNode;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
  placeholder,
  options = [],
  icon,
  className = "",
  value: externalValue,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [internalSelected, setInternalSelected] = useState("");
  const selected =
    externalValue !== undefined ? externalValue : internalSelected;

  return (
    <div className={`relative ${className}`}>
      {icon && (
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-green-500">
          {icon}
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-left flex items-center justify-between ${
          icon ? "pl-12" : ""
        }`}
      >
        <span className={selected ? "text-gray-900" : "text-gray-500"}>
          {selected || placeholder}
        </span>
        <Icon name="chevron-down" size={20} className="text-gray-400" />
      </button>

      {isOpen && options.length > 0 && (
        <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => {
                if (externalValue === undefined) {
                  setInternalSelected(option);
                }
                onChange?.(option);
                setIsOpen(false);
              }}
              className="w-full px-4 py-2 text-left hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
