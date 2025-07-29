import React from "react";

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description }) => {
  return (
    <div className="group relative w-full max-w-sm rounded-xl overflow-hidden shadow-lg bg-white cursor-pointer transition-transform transform hover:scale-[1.02]">
      {/* Image */}
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Title */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 text-center">{title}</h3>
      </div>

      {/* Description overlay (hidden by default) */}
      <div className="absolute inset-0 bg-black/70 text-white p-4 flex items-center justify-center text-center opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Card;