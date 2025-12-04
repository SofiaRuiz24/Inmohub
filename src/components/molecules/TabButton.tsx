import React from "react";

interface TabButtonProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const TabButton: React.FC<TabButtonProps> = ({
  label,
  isActive = false,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-3 font-medium rounded-lg transition-all ${
        isActive
          ? "bg-green-500 text-white"
          : "bg-transparent text-gray-700 hover:bg-gray-100"
      }`}
    >
      {label}
    </button>
  );
};
