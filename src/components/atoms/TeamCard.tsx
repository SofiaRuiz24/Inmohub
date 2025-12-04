import React from "react";

interface TeamCardProps {
  image: string;
  name: string;
  role: string;
}

export const TeamCard: React.FC<TeamCardProps> = ({ image, name, role }) => {
  return (
    <div className="text-center">
      <div className="w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h4 className="text-xl font-semibold text-gray-900 mb-1">{name}</h4>
      <p className="text-gray-500">{role}</p>
    </div>
  );
};
