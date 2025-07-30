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
      <div className="relative">
        <img
          src={imageSrc}
          alt={title}
          className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Down arrow indicator */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-blue-800 opacity-80 group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l9-9 9 9" />
          </svg>
        </div>
      </div>

      {/* Title */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 text-center">{title}</h3>
      </div>

      {/* Description overlay */}
      <div className="absolute inset-0 bg-blue-700/75 text-white p-4 flex items-center justify-center text-center 
        opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-in-out">
        <p className="text-nd">{description}</p>
      </div>
    </div>
  );
};

export default Card;
