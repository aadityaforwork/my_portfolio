import React, { useEffect, useRef } from 'react';
import image1 from '../assets/p-1.png';
import image2 from '../assets/p-2.png';
import image3 from '../assets/p-3.png';
import image4 from '../assets/p-4.png';
import image5 from '../assets/p-5.png';
import image6 from '../assets/p-6.png';
import { motion, useInView, useAnimation } from 'framer-motion';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    }
  }, [isInView]);

  const projects = [
    {
      image: image1,
      title: 'RELIEF+',
      description: 'Blockchain Website that works even in war-hit areas where the problems are numerous but solution is RELIEF+!',
    },
    {
      image: image2,
      title: 'DESIGN SOL',
      description: 'Design Sol: Where creativity blooms and pixelation never looms.',
    },
    {
      image: image3,
      title: 'TANDURUST-360',
      description: 'Tandurust-360: Your holistic wellness compass, navigating a 360° journey to optimal health.',
    },
    {
      image: image4,
      title: 'BANKMANIA',
      description: 'Bankmania: Ditch the bricks, unlock the clicks. Banking, reimagined. (Convenient online banking experience)',
    },
    {
      image: image5,
      title: 'UNITY LEARN',
      description: 'Knowledge without cost, opportunity unleashed, Unity Learn unlocks potential, one lesson at a time.',
    },
    {
      image: image6,
      title: 'DHANLAXMI',
      description: 'Income up, expenses down, Dhanlaxmi smiles. Download your financial freedom.',
    },
  ];

  return (
    <div id='portfolio' ref={ref}>
      <div>
        <div className='bg-gray-900'>
          <h2 className='titleBackground border border-b-[#00df9a] w-fit border-t-0 border-l-0 border-r-0'>
            PORTFOLIO
          </h2>
          <h1 className='text-white mt-10 text-2xl flex justify-center font-bold'>
            MY PROJECTS
          </h1>
          <div className='grid w-full sm:grid-cols-2 md:grid-cols-3 gap-16 px-10 sm:px-10 py-10'>
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 75 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial='hidden'
                animate={mainControls}
                transition={{ duration: 1, delay: 1 * index }}
                className='bg-gray-100 h-full rounded-xl shadow-md shadow-[#00df9a]'>
                <img className='rounded-xl' src={project.image} alt='' />
                <h1 className='text-black px-4 pt-2 flex justify-center text-xl font-semibold border border-[#00df9a] border-l-0 border-t-0 border-r-0 border-b-4'>
                  {project.title}
                </h1>
                <p className='text-black py-2 px-4'>{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <hr />
      <br />
    </div>
  );
};

export default Portfolio;
