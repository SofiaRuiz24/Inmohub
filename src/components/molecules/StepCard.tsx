import React from "react";
import { Icon } from "../atoms";

interface StepCardProps {
  icon: "home" | "user" | "dollar";
  title: string;
  description: string;
  iconBgColor?: string;
}

export const StepCard: React.FC<StepCardProps> = ({
  icon,
  title,
  description,
  iconBgColor = "bg-green-50",
}) => {
  return (
    <div className="text-center px-4">
      <div
        className={`w-20 h-20 ${iconBgColor} rounded-xl flex items-center justify-center mx-auto mb-6`}
      >
        <Icon name={icon} size={32} className="text-green-500" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};
