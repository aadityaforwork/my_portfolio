import React from 'react'
import '../index.css'
import Navbar from './Navbar'
const Home = () => {
  return (
    <div className='home__Container'>
        <div className='home__bgLayer'>
          <Navbar/>
            <div className=' flex flex-col justify-center'>
               <p className='flex justify-center font-bold font-sans items-center pt-[30vh] md:pt-[18vh] text-white text-2xl md:text-3xl animate-slidein300 opacity-0'>Welcome</p>
               <p className='text-white flex justify-center mb-4 mt-6 text-2xl md:text-5xl font-bold animate-slidein500 opacity-0'>I am a Software Developer</p>
               <p className=' text-white flex justify-center my-4 font-bold animate-slidein500 opacity-0'>Based in Mumbai</p>
               <div className=' flex justify-center'>
               <button className='text-[#00df9a] border border-solid border-[#00df9a] mt-4 h-10 w-28 rounded-3xl hover:bg-[#00df9a] duration-1000 hover:text-white animate-slidein700 opacity-0'><a href="#portfolio">Hire me</a></button>
               </div>
               <div className=' flex justify-center mt-10'>
                <a href="#about">
                <img className='h-10 cursor-pointer my-3 animate-bounce delay-1000' src="https://cdn-icons-png.flaticon.com/128/1634/1634155.png" alt="" />
                </a>
               </div>
            </div>
        </div>
        <br />
    </div>
  )
}

export default Home
