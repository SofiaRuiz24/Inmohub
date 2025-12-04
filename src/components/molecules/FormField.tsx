import React from "react";
import { Dropdown, Icon } from "../atoms";

interface FormFieldProps {
  label: string;
  placeholder: string;
  icon?: "home" | "dollar";
  options?: string[];
  required?: boolean;
  value?: string;
  onChange?: (value: string) => void;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  placeholder,
  icon,
  options = [],
  required = true,
  value,
  onChange,
}) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <Dropdown
        placeholder={placeholder}
        options={options}
        icon={icon ? <Icon name={icon} size={20} /> : undefined}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
