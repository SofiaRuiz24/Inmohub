import React from "react";

interface IconWithTextProps {
  icon: React.ReactNode;
  text: string | number;
  className?: string;
}

export const IconWithText: React.FC<IconWithTextProps> = ({
  icon,
  text,
  className = "",
}) => {
  return (
    <div className={`flex items-center gap-2 text-gray-600 ${className}`}>
      <div className="text-green-500">{icon}</div>
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
};
