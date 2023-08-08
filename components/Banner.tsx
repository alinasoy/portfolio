import React from 'react'
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <section
        id='home'
        className='max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4
        lgl:gap-8 mdl:px-10 xl:px-4'
    >
        <motion.h3
            initial={{ y: 10, opacity: 0}}
            animate={{ y: 0, opacity: 1}}
            transition={{ duration: 0.5, delay: 0.6}}
         className='text-lg font-titleFont tracking-wide text-textGreen'>
            Hi, my name is
        </motion.h3>
        <motion.h1
            initial={{ y: 10, opacity: 0}}
            animate={{ y: 0, opacity: 1}}
            transition={{ duration: 0.5, delay: 0.7}}
            className='text-4xl lgl:text-6xl font-titleFont font-semibold flex flex-col'
        >
            Alina Soy.{" "}
            <span className='text-textDark mt-2 lgl:mt-4'>
                I build things for the web.
            </span>
        </motion.h1>
        <motion.p 
            initial={{ y: 10, opacity: 0}}
            animate={{ y: 0, opacity: 1}}
            transition={{ duration: 0.5, delay: 0.8}}
            className='text-base md:max-w-[650px] text-textDark font-medium'
        >
           A Front-End Developer specializing in web development, user interface design, HTML, and React JS.
           Adept at identifying opportunities to enhance front-end design and improve the user experience.
        </motion.p>
        <motion.button 
            initial={{ y: 10, opacity: 0}}
            animate={{ y: 0, opacity: 1}}
            transition={{ duration: 0.5, delay: 0.7}}
            className='w-52 h-14 text-xl font-titleFont border border-textGreen
            rounded-md text-textGreen tracking-wide hover:bg-hoverColor duration-300s'
        >
           <a href='https://www.linkedin.com/in/alina-soy/'> Let's Connect!</a> 
        </motion.button>
    </section>
  );
};

export default Banner;