import React from 'react';
import image1 from '../assets/p-1.png';
import image2 from '../assets/p-2.png';
import image3 from '../assets/p-3.png';
import image4 from '../assets/p-4.png';
import image5 from '../assets/p-5.png';
import image6 from '../assets/p-6.png';

const Portfolio = () => {
 
  const projects = [
    {
      image: image1,
      title: 'RELIEF+',
      description: 'Blockchain Website that works even in war-hit areas where the problems are numerous but solution is RELIEF+!',
      link: 'https://github.com/aadityaforwork/dods_technovate',
    },
    {
      image: image2,
      title: 'DESIGN SOL',
      description: 'Design Sol: Where creativity blooms and pixelation never looms.',
      link: 'https://github.com/aadityaforwork/Compute-Task3',
    },
    {
      image: image3,
      title: 'TANDURUST-360',
      description: 'Tandurust-360: Your holistic wellness compass, navigating a 360° journey to optimal health.',
      link: 'https://github.com/Akashram28/Tandurust360',
    },
    {
      image: image4,
      title: 'BANKMANIA',
      description: 'Bankmania: Ditch the bricks, unlock the clicks. Banking, reimagined. (Convenient online banking experience)',
      link: 'https://github.com/aadityaforwork/Bank-original',
    },
    {
      image: image5,
      title: 'UNITY LEARN',
      description: 'Knowledge without cost, opportunity unleashed, Unity Learn unlocks potential, one lesson at a time.',
      link: 'https://github.com/aadityaforwork/tsec',
    },
    {
      image: image6,
      title: 'DHANLAXMI',
      description: 'Income up, expenses down, Dhanlaxmi smiles. Download your financial freedom.',
      link: 'https://github.com/aadityaforwork/income_expense_new',
    },
  ];

  return (
    <div id='portfolio'>
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
              <div
                className='bg-gray-100 h-full rounded-xl shadow-md shadow-[#00df9a] animate-slidein700 duration-300 delay-300'>
                <img className='rounded-xl' src={project.image} alt='' />
                <a href={project.link} target='_blank' rel='noopener noreferrer'>
                  <h1 className='text-black px-4 pt-2 flex justify-center text-xl font-semibold border border-[#00df9a] border-l-0 border-t-0 border-r-0 border-b-4'>
                    {project.title}
                  </h1>
                </a>
                <p className='text-black py-2 px-4'>{project.description}</p>
              </div>
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
