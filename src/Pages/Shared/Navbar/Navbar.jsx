import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../../assets/img/firstlogo.png'
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
      // Toggle the menu visibility when the button is clicked
      setIsMenuOpen(!isMenuOpen);
    };
    // all menu items store in inside the menu variable
      const menu = (
          <>
          <li>
              <a className="text-slate-300 lg:text-[#606060] font-semibold text-[16px]" href="/">
                Home
              </a>
            </li>
            <li>
              <Link to='/aboutUs' className="text-slate-300 lg:text-[#606060] font-semibold text-[16px]">
                About Us
              </Link>
            </li>
            <li>
              <Link to='/services' className="text-slate-300 lg:text-[#606060] font-semibold text-[16px]">
                Services
              </Link>
            </li>
            <li>
              <Link to='/testimonial' className="text-slate-300 lg:text-[#606060] font-semibold text-[16px]">
                Testimonials
              </Link>
            </li>
            <li>
              <Link to='/blog' className="text-slate-300 lg:text-[#606060] font-semibold text-[16px]">
                Blogs
              </Link>
            </li>
            <li>
              <Link to='/contactUs' className="text-slate-300 lg:text-[#606060] font-semibold text-[16px]">
                Contact
              </Link>
            </li>
          </>
      )
    return (
      <div  className="navbar sticky top-0 z-50 bg-white justify-between">
        <div className="navbar-start">
          <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-sm text-slate-400 lg:hidden" onClick={toggleMenu}>
                {/* Use the toggleMenu function on button click */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
            { isMenuOpen && 
            <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-800 rounded-box w-52 text-white">
            {menu}
          </ul>
            }
          </div>
          <Link className=" flex justify-center items-center mr-5 md:mr-0" to="/">
            <img
              className="ml-5 md:ml-20 h-12 md:h-16 w-auto rounded-full"
              src={logo}
              alt=""
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {menu}
          </ul>
        </div>
        <label
          htmlFor="dashboard-drawer"
          tabIndex={2}
          className="btn btn-ghost lg:hidden justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    );
};

export default Navbar;
