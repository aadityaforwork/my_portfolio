import React from 'react'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const About = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
      });
    
  return (
    <>
    <div id='about'> 
        <div className=' mt-10 flex flex-col justify-center items-center'>
            <h2 className='titleBackground '>ABOUT</h2>
            <h1 className=' absolute text-xl md:text-4xl font-serif font-bold border border-b-4 border-b-[#00df9a] w-fit border-t-0 border-l-0 border-r-0'>Know me</h1>
        </div>
        
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

        <p className="text-xl mt-10 font-serif">
        I am an accomplished web developer with a proven track record of creating outstanding digital experiences. With a keen eye for design and a deep understanding of web technologies, I consistently deliver websites that not only look visually striking but also function seamlessly. My proficiency in front-end technologies like HTML, CSS, and JavaScript, coupled with my expertise in popular frameworks and libraries, allows me to build user-friendly and responsive web applications. 
        </p>

        <br />

        <p className="text-xl font-serif">
        With a commitment to optimizing website performance and adhering to accessibility standards, I consistently produce websites that cater to a diverse audience and load quickly, providing visitors with a memorable and user-friendly experience. 
        </p>
      </div>

       <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
        transition={{ duration: 1 }}
       className=' grid md:grid-cols-4 grid-cols-2 my-20'>
          
          <div className=' flex border border-r-2 border-t-0 border-l-0 border-b-0 flex-col justify-center'>
            <p className=' text-center text-5xl text-slate-500'>1+</p>
            <p className=' text-center text-2xl my-1'>Year Experience</p>
          </div>

          <div className=' flex border border-r-2 border-t-0 border-l-0 border-b-0 flex-col justify-center'>
            <p className=' text-center text-5xl text-slate-500'>5+</p>
            <p className=' text-center text-2xl my-1'>Hackathons</p>
          </div>

          <div className=' flex border border-r-2 border-t-0 border-l-0 border-b-0 flex-col justify-center'>
            <p className=' text-center text-5xl text-slate-500'>10+</p>
            <p className=' text-center text-2xl my-1'>Websites</p>
          </div>

          <div className=' flex flex-col justify-center'>
            <p className=' text-center text-5xl text-slate-500'>5+</p>
            <p className=' text-center text-2xl my-1'>Awards</p>
          </div>

       </motion.div>
    </div>
    <div className=' flex justify-center'>
    <a href='https://drive.google.com/file/d/18oHTAcFmQGWvi3OLGaPE68C4VH9yH-Qw/view?usp=sharing' 
      target='_blank'
       download='resume.pdf'
    className=' border flex justify-center w-32 px-2 py-2 rounded-3xl bg-[#00df9a] text-white -mt-6 mb-2' >
        Download CV
    </a>
   </div>
   <br />
   <hr />
   </>
  )
}

export default About
