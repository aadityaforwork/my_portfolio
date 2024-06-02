import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
const Navbar = () => {

  return (
    <div className='flex items-center justify-between h-20 px-6 md:px-10'>
     <h1 className=' text-2xl font-sans font-bold text-white'>AADITYA MALANI</h1> 
     <ul className='hidden text-white font-medium text-lg font-sans md:flex'>
        <li className="p-4 cursor-pointer hover:text-[#00df9a] duration-300 hover:scale-105"><a href="/">Home</a></li>
        <li className="p-4 cursor-pointer hover:text-[#00df9a] duration-300 hover:scale-105"><a href="#about">About</a></li>
        <li className="p-4 cursor-pointer hover:text-[#00df9a] duration-300 hover:scale-105"><a href="#portfolio">Portfolio</a></li>
        <li className="p-4 cursor-pointer hover:text-[#00df9a] duration-300 hover:scale-105"><a href="#resume">Resume</a></li>
        <li className="p-4 cursor-pointer hover:text-[#00df9a] duration-300 hover:scale-105"><a href="#contact">Contact</a></li>
        </ul>
        <div>
         <ul className='hidden text-white font-medium text-sm font-sans md:flex'>
        <li className="pt-3 px-2 cursor-pointer hover:text-[#00df9a] duration-300 hover:scale-105"><a href="https://github.com/aadityaforwork"><FaGithub size={20}/></a></li>
        <li className="pt-3 px-2 cursor-pointer hover:text-[#00df9a] duration-300 hover:scale-105"><FaLinkedin size={20}/></li>
        <li className="pt-2 px-2 cursor-pointer hover:text-[#00df9a] duration-300 hover:scale-105"><HiOutlineMail size={27}/></li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar