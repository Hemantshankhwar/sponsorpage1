import React from 'react';

const Footer = () => {
  return (
    <div className="bg-[#131313] w-full px-5 py-10 flex flex-col items-center rounded-t-[22px] rounded-b-none text-white font-[Poppins] relative z-10 -mt-5">

      
      {/* Top Row */}
      <div className="flex flex-wrap justify-around items-center w-full mb-10">
        
        {/* Logos */}
        <div className="flex gap-10">
          <img 
            src="https://dashboard.codeparrot.ai/api/image/Z8XOQW9e-96e2cWA/asset-4.png" 
            alt="Logo 1" 
            className="w-[161px] h-[161px] object-contain"
          />
          <img 
            src="https://dashboard.codeparrot.ai/api/image/Z8XOQW9e-96e2cWA/76264147.png" 
            alt="Logo 2" 
            className="w-[161px] h-[161px] object-contain"
          />
        </div>

        {/* Address */}
        <div className="text-center">
          <h2 className="text-[36px] font-bold mb-5 uppercase leading-[30px]">Address</h2>
          <p className="text-[24px] font-semibold leading-[38px]">
            E-Cell, IIIT Guwahati<br />
            Assam - 781015
          </p>
        </div>

        {/* Email */}
        <div className="text-center">
          <h2 className="text-[36px] font-bold mb-5 uppercase leading-[30px]">Email</h2>
          <p className="text-[24px] font-semibold leading-[38px]">ecell@iiitg.ac.in</p>
        </div>

        {/* Social Media */}
        <div className="text-center">
          <h2 className="text-[36px] font-bold mb-5 uppercase leading-[30px]">Follow Us</h2>
          <div className="flex gap-5">
            <img 
              src="https://dashboard.codeparrot.ai/api/image/Z8XOQW9e-96e2cWA/instagra.png" 
              alt="Instagram" 
              className="w-[60px] h-[60px] cursor-pointer transition-transform duration-200 hover:scale-110"
            />
            <img 
              src="https://dashboard.codeparrot.ai/api/image/Z8XOQW9e-96e2cWA/linkedin.png" 
              alt="LinkedIn" 
              className="w-[60px] h-[60px] cursor-pointer transition-transform duration-200 hover:scale-110"
            />
          </div>
        </div>
        
      </div>

      {/* Summit Text */}
      <div className="text-[20px] font-bold text-center uppercase leading-[30px] max-w-[430px] my-5">
        The Most Innovative Entrepreneurship Summit Of INDIA
      </div>

      {/* Footer Text */}
      <div className="text-[24px] font-light uppercase text-center mt-10 font-[Outfit]">
        Made in panic by ecell technical team (2025)
      </div>

    </div>
  );
};

export default Footer;
