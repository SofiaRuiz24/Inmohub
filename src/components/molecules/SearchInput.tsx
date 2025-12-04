import React, { useState } from "react";
import { Input, Icon } from "../atoms";

interface SearchInputProps {
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = "Search your keywords",
  className = "",
  value: externalValue,
  onChange,
}) => {
  const [internalValue, setInternalValue] = useState("");
  const value = externalValue !== undefined ? externalValue : internalValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (externalValue === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  return (
    <Input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      icon={<Icon name="search" size={20} />}
      className={className}
    />
  );
};
