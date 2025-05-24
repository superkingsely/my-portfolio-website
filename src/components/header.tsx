// import React from 'react'

// const Header = () => {
//   return (
//     <header className='min-h-[10vh]  flex items-center justify-center ' >
//         <div className="header-content min-h-[10vh] max-w-[1200px]  w-[100%] bg-[white] shadow-app flex justify-between items-center    ">
//             <span className="logo">
//                     <a href="#home">
//                         Logo
//                     </a>
//             </span>
//             <nav className="">
//                 <ul className='flex gap-[30px] ' >
//                     <li>
//                         <a href="#home">Home</a>
//                     </li>
//                     <li>
//                         <a href="#about">About</a>
//                     </li>
//                     <li>
//                         <a href="#projects">Projects</a>
//                     </li>
//                     <li>
//                         <a href="#contact">Contact</a>
//                     </li>
//                 </ul>
//             </nav>
//         </div>
//     </header>
//   )
// }

// export default Header
"use client"
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header className="min-h-[10vh] flex items-center justify-center sticky top-0 bg-white z-50 shadow-app">
      <div className="header-content min-h-[10vh] max-w-[1200px] w-full flex justify-between items-center px-4">
        <span className="logo text-lg font-bold">
          <a href="#home">Logo</a>
        </span>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleSidebar}>
          <FaBars />
        </div>

        {/* Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-[250px] bg-white shadow-lg z-50 transform transition-transform duration-300 ${
            isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-end p-4">
            <FaTimes className="text-2xl cursor-pointer" onClick={closeSidebar} />
          </div>
          <ul className="flex flex-col items-start gap-6 p-6">
            <li>
              <a href="#home" onClick={closeSidebar}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeSidebar}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={closeSidebar}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeSidebar}>
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-40"
            onClick={closeSidebar}
          ></div>
        )}
      </div>
    </header>
  );
};

export default Header;
