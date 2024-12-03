import { useState } from 'react';
import { motion } from 'framer-motion';
import GMSS from '../assets/GMSS.webp';
import Music from '../assets/Music.webp';
import ODA from '../assets/ODA.webp';


const Project = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (index) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const cardVariants = {
    expanded: {
      width: '400px',
    },
    collapsed: {
      width: '300px',
    },
  };

  const cardImages = [ODA, Music, GMSS];

  const cardDescription = [
    'The website serves as a platform for individuals or businesses to advertise their products or services.',
    'This web application can search musics and after adding to cart and payment download the music.',
    'This application is designed to facilitate the garment production management system, which has an online store for customers and related functions for employees.',
  ];

  const projectName = [
    'Online Advertising Agency',
    'Online Music Store',
    'Garment Management System',
  ];

  const githubLinks = [
    'https://github.com/IT22128140/Online_Advertising_Agency_cpp.git',
    'https://github.com/IsuruKRP/Hertz_music_store.git',
    'https://github.com/IT22128140/SF-Frontend.git',
  ];

  return (
    <div className="pb-24 border-b border-neutral-800">
      <motion.h3 
      whileInView={{ opacity:1, y:0}}
      initial={{opacity:0, y: -100}}
      transition={{duration:1.5}}
      className="my-20 text-5xl text-center">Projects</motion.h3>

      <section className="py-16 pb-[300px] bg-gradient-to-r pt-4">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"></div>
        <div className="flex flex-col items-center justify-center gap-5 mt-12 md:flex-row">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className={`card cursor-pointer h-[500px] bg-cover bg-center rounded-[20px] ${
                index === expandedIndex ? 'expanded' : ''
              }`}
              variants={cardVariants}
              initial="collapsed"
              animate={index === expandedIndex ? 'expanded' : 'collapsed'}
              transition={{ duration: 0.5 }}
              onClick={() => handleCardClick(index)}
              style={{
                backgroundImage: `url(${cardImages[index]})`,
              }}
            >
              <div className="flex flex-col justify-end h-full card-content">
                <div className="card-footer rounded-b-[20px] bg-gray-800 bg-opacity-75 min-h-[100px] flex flex-col items-center justify-center">
                  <h2 className="text-xl font-semibold text-center text-white">
                    {projectName[index]}
                  </h2>
                  {index === expandedIndex && (
                    <>
                      <p className="mt-2 text-center text-gray-300">
                        {cardDescription[index]}
                      </p>
                      <a
                        href={githubLinks[index]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 font-semibold text-gray-100 border-2 border-blue-500 rounded hover:bg-blue-500 hover:text-white hover:border-transparent"
                      >
                        View GitHub Repo
                      </a>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Project;
