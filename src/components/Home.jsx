import React from 'react'
import ReactTyped from 'react-typed'
import '../index.css'
const Home = () => {
  return (
    <div className='home__Container'>
        <div className='home__bgLayer'>
            <div className=' flex flex-col justify-center'>
               <p className='flex justify-center font-bold font-sans items-center pt-[30vh] md:pt-[18vh] text-white text-2xl md:text-3xl'>Welcome</p>
               <ReactTyped className='flex flex-wrap justify-center text-white text-2xl md:text-6xl font-extrabold md:mt-6 mt-2' strings={['I am Aaditya Malani', 'I am a Full Stack Web Developer','I am a Web Designer']} typeSpeed={100} backSpeed={40} loop/>
               <p className=' text-white flex justify-center my-4'>Based in Mumbai</p>
               <div className=' flex justify-center'>
               <button className='text-[#00df9a] border border-solid border-[#00df9a] mt-4 h-10 w-28 rounded-3xl hover:bg-[#00df9a] duration-1000 hover:text-white'><a href="#portfolio">Hire me</a></button>
               </div>
               <div className=' flex justify-center mt-10'>
                <a href="#about">
                <img className='h-10 cursor-pointer' src="https://cdn-icons-png.flaticon.com/128/1634/1634155.png" alt="" />
                </a>
               </div>
            </div>
        </div>
        <br />
    </div>
  )
}

export default Home
