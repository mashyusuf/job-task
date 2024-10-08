import React from 'react';
import uiuxImage from '../../assets/Group 19.png';
import webImage from '../../assets/Layer_1.png';
import appImage from '../../assets/Group 18.png';
import grapichImage from '../../assets/Vector (1).png';

export default function Services() {
  const services = [
    {
      image: uiuxImage,
      title: "UI/UX Design",
      description: "Creating modern and user-friendly interfaces for your products.",
    },
    {
      image: webImage,
      title: "Web Development",
      description: "Building responsive and high-performing websites.",
    },
    {
      image: appImage,
      title: "App Development",
      description: "Developing scalable mobile apps for various platforms.",
    },
    {
      image: grapichImage,
      title: "Graphic Design",
      description: "Crafting creative designs for branding and marketing.",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
        <p className="text-lg text-gray-600">
          We offer a wide range of services to help bring your ideas to life.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img
              src={service.image}
              alt={service.title}
              className="w-20 h-20 mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-center text-gray-700 mb-2">{service.title}</h3>
            <p className="text-center text-gray-500">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
