import React from "react";
import * as Icons from "heroicons-react";
import logo from "../Images/inovix.jpg"

const NavBar = () => {
  return (
    <nav className="bg-white fixed z-10 w-full p-4 border-b-2 border-gray-400" >
      <div className="">
        <div className="flex justify-between align-middle">
          <div>
            <img src={logo} alt="" className="w-30 h-10"/>
          </div>
          <div className="relative text-gray-600">
            <input
              type="text"
              placeholder="Search"
              className="bg-white h-10 border border-gray-600 pl-5 pr-10 rounded-full text-sm focus:outline-none focus:ring focus:border-blue-300 w-60"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700">
              <Icons.Search className="h-4 w-4" />
            </button>
          </div>
          <div className="flex space-x-4">
            <a href="/" className="text-black text-xl font-semibold">
              Home
            </a>
            <a href="/products" className="text-black">
              Products
            </a>
            <a href="/services" className="text-black">
              Services
            </a>
            <a href="/contacts" className="text-black">
              Contactus
            </a>
          </div>
          <a href="/profile" className="text-blue-400">
            <Icons.UserCircleOutline className="h-8 w-8" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
