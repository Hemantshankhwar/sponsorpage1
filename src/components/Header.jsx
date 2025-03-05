import React from "react";
import sponsors from '../assets/sponsors.png';

const Header = ({ imageUrl }) => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-10 py-10 my-10">
      {/* Main Container */}
      <div className="relative w-full max-w-6xl h-auto flex flex-col items-center">
        
        {/* Centered main image */}
        <div className="relative flex items-center justify-center">
          <img
            src={sponsors}
            alt="Team"
            className="w-[950px] h-auto object-cover mx-auto"
          />
        </div>

        {/* Text Below Image */}
        <div className="mt-2 text-center">
          <p className="text-sm text-[#fff5cf] font-[Inter]">We appreciate their support and contributions.</p>
        </div>

      </div>
    </div>
  );
};

export default Header;
