import React, { useState } from "react";

interface FavoriteButtonProps {
  onToggle?: (isFavorite: boolean) => void;
  className?: string;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  onToggle,
  className = "",
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    const newState = !isFavorite;
    setIsFavorite(newState);
    onToggle?.(newState);
  };

  return (
    <button
      onClick={handleClick}
      className={`w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-110 transition-transform ${className}`}
    >
      <svg
        className={`w-5 h-5 ${
          isFavorite ? "text-red-500 fill-current" : "text-gray-400"
        }`}
        fill={isFavorite ? "currentColor" : "none"}
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </button>
  );
};
