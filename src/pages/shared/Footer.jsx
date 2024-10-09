
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../../assets/logo.png'; // Adjust this path as per your file structure

export default function Footer() {
  return (
    <footer className="bg-[#F8F8F8] mt-14 text-center py-6">
      {/* Logo and Navigation */}
      <div className="flex justify-center items-center space-x-6">
        <img src={logo} alt="Logo" className="w-12 h-12" />
        <h1 className="text-2xl text-gray-500">
            {" "}
            <span className="font-bold text-gray-700">M</span>umair
          </h1>
      </div>

      {/* Navigation Links */}
      <nav className="my-4">
        <ul className="flex justify-center space-x-8 text-[#000000] text-lg">
          <li className="hover:text-gray-600"><a href="#home">Home</a></li>
          <li className="hover:text-gray-600"><a href="#about">About Me</a></li>
          <li className="hover:text-gray-600"><a href="#services">Services</a></li>
          <li className="hover:text-gray-600"><a href="#projects">Projects</a></li>
          <li className="hover:text-gray-600"><a href="#testimonials">Testimonials</a></li>
          <li className="hover:text-gray-600"><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 my-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebookF className="text-black hover:text-gray-600 text-xl" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-black hover:text-gray-600 text-xl" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-black hover:text-gray-600 text-xl" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-black hover:text-gray-600 text-xl" />
        </a>
      </div>

      {/* Footer Bottom Text */}
      <div className='bg-[#545454] px-4 py-4 text-center'>
  <p className="text-white text-sm">
    © 2023 <span className="text-orange-600 font-bold">Mumair</span> All Rights Reserved, INC.
  </p>
</div>

    </footer>
  );
}
