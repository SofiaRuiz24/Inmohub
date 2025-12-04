import React from "react";

interface TestimonialCardProps {
  text: string;
  image: string;
  name: string;
  role: string;
  rating?: number;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  text,
  image,
  name,
  role,
  rating = 5,
}) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm">
      <p className="text-gray-600 mb-6 italic">{text}</p>

      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
          </svg>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h5 className="font-semibold text-gray-900">{name}</h5>
          <p className="text-sm text-gray-500">{role}</p>
        </div>
      </div>
    </div>
  );
};
