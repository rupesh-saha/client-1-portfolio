'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'About', path: '/', num: '01' },
    { name: 'Education', path: '/about', num: '02' },
    { name: 'Research', path: '/research', num: '03' },
    { name: 'Professional', path: '/prof', num: '04' },
    { name: 'Projects', path: '/projects', num: '05' },
    { name: 'Achievement', path: '/achievement', num: '06' },
    { name: 'Contact', path: '/contact', num: '07' }
  ];

  return (

    <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[95%] bg-black/70 backdrop-blur-2xl rounded-full px-4 py-3 flex items-center justify-between shadow-2xl border border-white/20 z-50 transition-all duration-300">
      
      {/* Left Section: Logo */}
      <div className="flex-shrink-0 flex items-center pl-2">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image
            src="/logo.png" 
            alt="Portfolio Logo"
            width={120}
            height={30}
            className="w-24 md:w-28 h-auto object-contain opacity-90"
            priority
          />
        </Link>
      </div>

      {/* Center Section: Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-2 lg:gap-6 absolute left-1/2 -translate-x-1/2">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          
          return (
            <Link
              key={item.name}
              href={item.path}
              className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                isActive 
                  // Active State: Crisp white pill with black text
                  ? 'bg-white text-black shadow-lg' 
                  // Inactive State: Light gray text that pops against the dark glass
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {isActive && (
                <span className="text-[10px] font-bold text-gray-400 tracking-widest mt-[2px]">
                  {item.num}
                </span>
              )}
              <span className={isActive ? 'border-b border-black pb-[1px]' : ''}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Right Section: Mobile Menu Toggle & CV Button */}
      <div className="flex items-center gap-3 pr-1">
        {/* Changed button to White to contrast the dark navbar */}
        <a
          href="/cv.pdf" 
          download="MD_Ibrahim_Hossain_CV.pdf"
          className="hidden md:flex whitespace-nowrap font-medium py-2 px-6 text-xs tracking-wide rounded-full bg-white text-black hover:bg-gray-200 transition-colors shadow-md"
        >
          Resume
        </a>

        {/* Mobile Dropdown (Updated for Dark Mode) */}
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle btn-sm">
            {/* Changed icon color to white */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> 
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> 
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-black/80 backdrop-blur-2xl rounded-2xl z-[1] mt-4 w-52 p-3 shadow-2xl border border-white/20 text-white flex flex-col gap-1"
          >
            {navItems.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.path}
                  className={pathname === item.path ? 'bg-white text-black font-semibold' : 'text-gray-300 hover:text-white'}
                >
                  {pathname === item.path && <span className="text-[10px] text-gray-500">{item.num}</span>}
                  {item.name}
                </Link>
              </li>
            ))}
            <div className="divider my-1 border-white/20"></div>
            <li>
              <a 
                href="/cv.pdf" 
                download="MD_Ibrahim_Hossain_CV.pdf" 
                className="bg-white text-black text-center flex justify-center rounded-full py-2.5 mt-1 hover:bg-gray-200"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;