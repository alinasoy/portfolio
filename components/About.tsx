import React from 'react'
import SectionTitle from './SectionTitle'
import { AiFillThunderbolt } from 'react-icons/ai'
import { profileImg } from '@/public/assets';
import Image from 'next/image';

const About = () => {
  return (
    <section
      id='about'
      className='max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8'
    >
      <SectionTitle title='About Me' titleNo='01' />
      <div className='flex flex-col lgl:flex-row gap-16'>
        <div className='w-full lgl:w-2/3 text-base text-textDark font-medium flex
        flex-col gap-4'>
          <p>
            Hello! My name is Alina Soy. I'm recognized for my Front-end development skills,
            communication skills, Team-working. I have completed my B.Tech in CSE from SUIIT Burla.
            I am highly motivated and committed person. I am driven by the desire to apply my skills  
            and knowledge to create innovative and meaningful solutions to real-world challenges.
            </p> 
            <p>
            I am delighted to display my skill and expertise through my portfolio, and 
            I look forward to working <span className='text-textGreen'>on hard projects and making a positive contribution in the tech industry.
            </span>
            </p>
          <p>Here are a few technologies I have been working with recently:</p>
            <ul className='max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2
            mt-6'>
              <li className='flex items-center gap-2'>
                <span className='text-textGreen'>
                  <AiFillThunderbolt />
                </span>
                HTML & CSS
              </li>
              <li className='flex items-center gap-2'>
                <span className='text-textGreen'>
                  <AiFillThunderbolt />
                </span>
                Javascript
              </li>
              <li className='flex items-center gap-2'>
                <span className='text-textGreen'>
                  <AiFillThunderbolt />
                </span>
                TypeScript
              </li>
              <li className='flex items-center gap-2'>
                <span className='text-textGreen'>
                  <AiFillThunderbolt />
                </span>
                jQuery 
              </li>
              <li className='flex items-center gap-2'>
                <span className='text-textGreen'>
                  <AiFillThunderbolt />
                </span>
                React JS
              </li>
              <li className='flex items-center gap-2'>
                <span className='text-textGreen'>
                  <AiFillThunderbolt />
                </span>
                NodeJS
              </li>
              <li className='flex items-center gap-2'>
                <span className='text-textGreen'>
                  <AiFillThunderbolt />
                </span>
                Vue JS
              </li>
              <li className='flex items-center gap-2'>
                <span className='text-textGreen'>
                  <AiFillThunderbolt />
                </span>
                Next JS 
              </li>
            </ul>
        </div> 
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image 
                className="rounded-lg h-full object-cover"
                src={profileImg}
                alt="profileImg"
              />
              <div className='hidden lgl:inline-block absolute w-full h-80 bg-textGreen/
              20 rounded-m top-50 left-10 group-hover:bg-transparent duration-300'></div>
            </div>
            </div>
              <div className='hidden lgl:inline-flex w-full h-80 border-2 border-textGreen
              rounded-md group-hover:translate-x-2 group-hover:-translate-y-2
              transition-transform duration-300'></div>
            </div>
          </div>
    </section>
  );
};

export default About;