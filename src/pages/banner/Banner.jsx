import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import manImage from '../../assets/Group 2.png'; 
import Rectangle from '../../assets/Rectangle 4.png'; 

export default function Banner() {
  return (
    <div className="bg-white  mb-32 md:mb-5  text-black flex flex-col md:flex-row justify-between items-center h-screen p-10">
      {/* Left section for text */}
      <div className="w-full md:w-1/2 space-y-4">
        <p className="text-[#000000] text-sm md:text-xl font-bold">Hi I am</p>
        <h1 className="text-[24px] md:text-[32px] h-[48px] font-bold" style={{ color: '#FD6F00' }}>
          Muhammad Umair
        </h1>
        <h2 className="text-4xl md:text-6xl font-extrabold">
          UI & UX <br className="md:hidden" /> <span className='md:ml-40'>Designer</span>
        </h2>
        <p className="text-[#000000] text-xs md:text-sm font-bold">
          Lorem ipsum dolor sit amet, consectetur. Tristique amet vel massa nec, lectus mattis.
          Aliquet orci, consectetur adipiscing elit. Nulla tempor pharetra.
        </p>
        <button className="bg-orange-500 px-4 sm:px-6 py-2 sm:py-3 rounded-md text-sm md:text-base font-semibold hover:bg-orange-600">
          Hire me
        </button>
      </div>

      <div className='flex flex-col items-center space-y-4 w-full md:w-1/2'>
        {/* Right section for image */}
        <div className="relative w-full flex justify-center items-center">
          {/* Rectangle overlay positioned on the eyes */}
          <img
            src={Rectangle}
            alt="Rectangle"
            className="absolute top-9 md:top-[70px] w-40 md:w-60 opacity-70 z-10" // Adjusted position
          />
          {/* Man's image with consistent size */}
          <img
            src={manImage}
            alt="Man"
            className="rounded-full w-[300px] h-[300px] md:w-[500px] md:h-[500px]" // Ensure the same height and width for consistency
          />
        </div>
        {/* Social Media Links */}
        <div className="flex space-x-2 md:space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-black text-2xl md:text-3xl hover:text-orange-500" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-black text-2xl md:text-3xl hover:text-orange-500" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-black text-2xl md:text-3xl hover:text-orange-500" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-black text-2xl md:text-3xl hover:text-orange-500" />
          </a>
        </div>
      </div>
    </div>
  );
}
