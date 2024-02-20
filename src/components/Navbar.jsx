import React,{useState} from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
const Navbar = () => {
    const [nav,setNav]=useState(false);

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='flex items-center justify-between h-20 px-2 md:px-10 bg-black  text-black'>
     <h1 className=' text-xl font-sans font-bold text-white'>AADITYA MALANI</h1> 
     <ul className='hidden text-white font-medium text-md font-sans md:flex'>
        <li className="p-4 cursor-pointer hover:text-[#00df9a] duration-300 hover:scale-105"><a href="/">Home</a></li>
        <li className="p-4 cursor-pointer hover:text-[#00df9a] duration-300 hover:scale-105"><a href="#about">About</a></li>
        <li className="p-4 cursor-pointer hover:text-[#00df9a] duration-300 hover:scale-105"><a href="#portfolio">Portfolio</a></li>
        <li className="p-4 cursor-pointer hover:text-[#00df9a] duration-300 hover:scale-105"><a href="#resume">Resume</a></li>
        <li className="p-4 cursor-pointer hover:text-[#00df9a] duration-300 hover:scale-105"><a href="#contact">Contact</a></li>
        </ul>
        <div>
         <ul className='hidden text-white font-medium text-sm font-sans md:flex'>
        <li className="pt-3 px-2 cursor-pointer hover:text-[#00df9a] duration-300 hover:scale-105"><a href="https://github.com/aadii1502" target='_blank'><FaGithub size={20}/></a></li>
        <li className="pt-3 px-2 cursor-pointer hover:text-[#00df9a] duration-300 hover:scale-105"><FaLinkedin size={20}/></li>
        <li className="pt-2 px-2 cursor-pointer hover:text-[#00df9a] duration-300 hover:scale-105"><HiOutlineMail size={27}/></li>
        </ul>
        </div>
     
     <div onClick={handleNav} className=' block md:hidden bg-white rounded-xl p-1'>
        {nav ? <FaTimes size={30} /> : <FaBars size={30}/>}
     <div className={nav ? 'fixed left-0 top-0 w-[100%] h-full border-r border-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
     <h1 className=' w-full text-3xl font-bold text-[#00df9a] m-4 ml-7'>AADITYA.</h1>
        <ul className='uppercase p-4 text-white'>
        <li className="p-4 border-b border-gray-500">Home</li>
        <li className="p-4 border-b border-gray-500">About</li>
        <li className="p-4 border-b border-gray-500">Portfolio</li>
        <li className="p-4 border-b border-gray-500">Resume</li>
        <li className="p-4">Contact</li>
        </ul>
     </div>
    </div>
    </div>
  )
}

export default Navbar