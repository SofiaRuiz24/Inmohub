import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
}) => {
  const baseStyles =
    "font-medium rounded-lg transition-all duration-200 inline-flex items-center justify-center";

  const variants = {
    primary: "bg-green-500 text-white hover:bg-green-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline:
      "border border-white text-white hover:bg-white hover:text-gray-800",
    ghost: "text-white hover:bg-white/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
};
