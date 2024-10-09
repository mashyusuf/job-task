import projectImage1 from '../../assets/projectImg1.png';
import projectImage2 from '../../assets/projectImg2.png';
import projectImage3 from '../../assets/projectImg3.png';

export default function MyProjects() {
  return (
    <div className="py-12 bg-white">
      {/* Section Title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">My Projects</h2>
        <p className="text-gray-500 mt-2">
          Lorem ipsum dolor sit amet consectetur. Metus erat duis aliquam mauris est massa lectus.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300">
          All
        </button>
        <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300">
          UI/UX
        </button>
        <button className="px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-md hover:bg-orange-600">
          Web Design
        </button>
        <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300">
          App Design
        </button>
        <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300">
          Graphic Design
        </button>
      </div>

      {/* Web Design Text */}
      <div className="text-center mb-8">
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {/* Project 1 */}
        <div>
        <div className="bg-[#FFEBDB] p-4 rounded-lg shadow-lg">
          <img
            src={projectImage1}
            alt="Project 1"
            className="w-full h-[300px] object-cover rounded-lg mb-4"
          />
        </div>
        <div className='mt-4'>
        <h3 className="text-sm text-[#FD6F00]">Web Design</h3>
        <h3 className="text-lg font-bold ">AirCalling Landing Page Design</h3>
        </div>
        </div>
        
        {/* Project 2 */}
        <div>
        <div className="bg-[#FFEBDB] p-4 rounded-lg shadow-lg">
          <img
            src={projectImage2}
            alt="Project 2"
            className="w-full h-[300px] object-cover rounded-lg mb-4"
          />
        </div>
        <div className='mt-4'>
        <h3 className="text-sm text-[#FD6F00]">Web Design</h3>
        <h3 className="text-lg font-bold ">Business Landing Page Design </h3>
        </div>
        </div>

        {/* Project 3 */}
        <div>
        <div className="bg-[#FFEBDB] p-4 rounded-lg shadow-lg">
          <img
            src={projectImage3}
            alt="Project 3"
            className="w-full h-[300px] object-cover rounded-lg mb-4"
          />
        </div>
        <div className='mt-4'>
        <h3 className="text-sm text-[#FD6F00]">Web Design</h3>
        <h3 className="text-lg font-bold ">Ecom Web Page Design </h3>
        </div>
        </div>
      </div>
    </div>
  );
}
