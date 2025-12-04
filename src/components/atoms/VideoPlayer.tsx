import React from "react";

interface VideoPlayerProps {
  thumbnail: string;
  className?: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  thumbnail,
  className = "",
}) => {
  return (
    <div className={`relative rounded-2xl overflow-hidden ${className}`}>
      <img
        src={thumbnail}
        alt="Video thumbnail"
        className="w-full h-full object-cover"
      />
      <button className="absolute inset-0 flex items-center justify-center">
        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
          <div className="w-0 h-0 border-l-[20px] border-l-green-500 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
        </div>
      </button>
    </div>
  );
};
