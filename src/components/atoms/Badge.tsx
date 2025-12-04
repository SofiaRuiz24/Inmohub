import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "green" | "blue" | "gray";
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "green",
  icon,
  className = "",
}) => {
  const variants = {
    green: "bg-green-50 text-green-600",
    blue: "bg-blue-50 text-blue-600",
    gray: "bg-gray-100 text-gray-600",
  };

  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-lg text-sm font-medium ${variants[variant]} ${className}`}
    >
      {icon}
      {children}
    </span>
  );
};
