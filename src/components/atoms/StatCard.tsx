import React from "react";

interface StatCardProps {
  value: string;
  label: string;
  symbol?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  symbol = "+",
}) => {
  return (
    <div className="text-center text-white">
      <h3 className="text-5xl font-bold mb-2">
        {value}
        <span className="text-3xl">{symbol}</span>
      </h3>
      <p className="text-lg text-white/90">{label}</p>
    </div>
  );
};
