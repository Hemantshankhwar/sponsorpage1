import React from "react";
import { FaInstagram, FaLinkedin, FaPhone } from "react-icons/fa";

const TeamCard = ({ name, designation, instaUrl, linkedinUrl, phone, image }) => {
  return (
    <div className="relative w-[250px] h-[250px] bg-[#FFF8DC] flex items-center justify-center">
      <div className="absolute w-[180px] h-[180px] bg-white">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[40%] rotate-[-90deg] flex items-center text-sm font-semibold">
        <span className="text-black">{name}</span>
        <span className="text-[#FF7833] ml-1">/ {designation}</span>
      </div>

      <div className="absolute bottom-0 left-8 flex gap-4 p-2 text-[#333]">
        <a href={instaUrl} target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-xl hover:text-pink-500 transition" />
        </a>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-xl hover:text-blue-500 transition" />
        </a>
        <a href={`tel:${phone}`} className="text-xl hover:text-green-500 transition">
          <FaPhone />
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
