import React from 'react';
import manImage from '../../assets/Group 7.png'; // Path to the man's image
import rectangleImage from '../../assets/Rectangle 4.png'; // Path to the rectangle image

export default function AboutMe() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 bg-white">
      {/* About Me Text and Sliders */}
      <div className="ml-0 md:ml-8 flex flex-col justify-center mb-6 md:mb-0 md:order-2">
        <h2 className="text-4xl  text-[#000000] font-bold">About Me</h2>
        <p className="text-[#000000] mt-2">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium.
        </p>
        
        {/* Skill Sliders */}
        <div className="mt-4">
          {renderSkill('UX', 80)}
          {renderSkill('Website Design', 90)}
          {renderSkill('App Design', 85)}
          {renderSkill('Graphic Design', 70)}
        </div>
      </div>

      {/* Man Image with Rectangle overlay */}
      <div className="relative md:order-1">
        <img
          src={manImage}
          alt="Man"
          className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full" // Ensured height and width are same
        />
        <img 
          src={rectangleImage} 
          alt="Rectangle" 
          className="absolute md:top-20 top-10 left-0 right-0 mx-auto w-40 md:w-60 opacity-70 z-10" 
        />
      </div>
    </div>
  );
}

// Function to render each skill with a draggable slider
function renderSkill(skill, percentage) {
  return (
    <div className="mt-4">
      <div className="flex justify-between">
        <span className="text-lg font-semibold">{skill}</span>
        <span className="text-lg font-semibold">{percentage}%</span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={percentage}
        className="w-full h-2 bg-orange-400 rounded-lg appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, #FF8C00 ${percentage}%, #E5E5E5 ${percentage}%)`
        }}
        readOnly
      />
      {/* Slider Button with white background and orange border */}
      <style>
        {`
          input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 24px; /* Width of the slider button */
            height: 24px; /* Height of the slider button */
            border-radius: 50%;
            background: white; /* Slider button color */
            border: 2px solid #FF8C00; /* Orange border */
            cursor: pointer;
          }

          input[type="range"]::-moz-range-thumb {
            width: 24px; /* Width of the slider button */
            height: 24px; /* Height of the slider button */
            border-radius: 50%;
            background: white; /* Slider button color */
            border: 2px solid #FF8C00; /* Orange border */
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
}
