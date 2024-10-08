import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
export default function Navbar() {
    const navLinks = 
        <>
          <li><Link className='font-bold hover:text-gray-700' to="/">Home</Link></li>
          <li><Link className='font-bold hover:text-gray-700' to="/">About Me</Link></li>
          <li><Link className='font-bold hover:text-gray-700' to="/">Services</Link></li>
          <li><Link className='font-bold hover:text-gray-700' to="/">Projects</Link></li>
          <li><Link className='font-bold hover:text-gray-700' to="/">Testimonials</Link></li>
          <li><Link className='font-bold hover:text-gray-700' to="/">Contact</Link></li>
        </>
      
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
            <a className="btn bg-[#FD6F00] hover:bg-[#f79346] text-white w-[188px] h-[52px] sm:w-[150px] sm:h-[44px] rounded-md">
              Download CV
            </a>
          </ul>
        </div>
        <div className="flex items-center gap-3">
          <img className="w-10" src={logo} alt="" />
          <h1 className="text-2xl text-gray-500">
            {" "}
            <span className="font-bold text-gray-700">M</span>umair
          </h1>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="hidden sm:flex">
        <a className="btn bg-[#FD6F00] hover:bg-[#f79346] text-white w-[188px] h-[52px] rounded-md">
          Download CV
        </a>
      </div>
    </div>
  );
}
