import React from 'react'
import SectionTitle from './SectionTitle'
import Image from 'next/image'
import { CryptoImg, netflixcloneImg, AIImg } from '@/public/assets'
import { TbBrandGithub } from 'react-icons/tb'
import { RxOpenInNewWindow } from 'react-icons/rx'

const Projects = () => {
  return (
    <section id='project' className='max-w-container mx-auto lgl:px-20 py-24'>
        <SectionTitle title='Some Things I have Built' titleNo='02' />
        <div className='w-full flex flex-col items-center justify-between gap-28 mt-10'>
        {/* Project One */}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
            <div className='flex flex-col xl:flex-row gap-6'>
                <a
                    className='w-full h-full object-contain'
                    href='https://ai-summarizer-theta.vercel.app/'
                    target='_blank'
                >
                <div>
                    <Image className='w-full h-full object-contain' 
                        src={AIImg}
                        alt='AI'
                    />
                </div>
                </a>
                <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between
                    items-end text-right xl:-ml-16 z-10'>
                <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                    Featured Project
                </p>
                <h3 className='text-2xl font-bold'>AI Summarizer</h3>
                <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                AI-Summarizer is a web application that utilizes OpenAI's GPT
                model to create a powerful Article Summarizer tool. 
                </p>
                <ul className='text-xs md:text-sm font-tileFont tracking-wide flex
                gap-2 md:gap-5 justify-between text-textDark'>
                    <li>ReactJs</li>
                    <li>Vite</li>
                    <li>JavaScript</li>
                    <li>Tailwindcss</li>
                </ul>
                <div className='text-2xl flex gap-4'>
                    <a 
                        className='hover:text-textGreen duration-300'
                        href='https://github.com/alinasoy'
                        target='_blank'
                    >
                        <TbBrandGithub />
                    </a>
                    <a 
                        className='hover:text-textGreen duration-300'
                        href='https://ai-summarizer-theta.vercel.app/'
                        target='_blank'
                    >
                        <RxOpenInNewWindow />
                    </a>
                </div>
            </div>
            </div>
        </div>
        {/* Project Two */}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
            <div className='flex flex-col xl:flex-row-reverse gap-6'>
                <a
                    className='w-full h-full object-contain'
                    href='https://xcrypto-app-phi.vercel.app/'
                    target='_blank'
                >
                <div>
                    <Image className='w-full h-full object-contain' 
                        src={CryptoImg}
                        alt='CryptoImg'
                    />
                </div>
                </a>
                <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between
                    items-end text-right z-10'>
                <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                    Featured Project
                </p>
                <h3 className='text-2xl font-bold'>Crypto App</h3>
                <p className='bg-[#112240] text-sm md:text-base p-2 xl:-mr-16 md:p-6 rounded-md'>
                Crypto-App is a user-friendly and feature-rich application designed for tracking 
                the price and performance of various cryptocurrencies. 
                </p>
                <ul className='text-xs md:text-sm font-tileFont tracking-wide flex
                gap-2 md:gap-5 justify-between text-textDark'>
                    <li>ReactJs</li>
                    <li>JavaScript</li>
                    <li>API</li>
                </ul>
                <div className='text-2xl flex gap-4'>
                    <a 
                        className='hover:text-textGreen duration-300'
                        href='https://github.com/alinasoy'
                        target='_blank'
                    >
                        <TbBrandGithub />
                    </a>
                    <a 
                        className='hover:text-textGreen duration-300'
                        href='https://xcrypto-app-phi.vercel.app/'
                        target='_blank'
                    >
                        <RxOpenInNewWindow />
                    </a>
                </div>
            </div>
            </div>
        </div>
        {/* Project Three */}
        <div className='w-full flex flex-col items-center justify-center gap-28 mt-10'>
            <div className='flex flex-col xl:flex-row gap-6'>
                <a
                    className='w-full h-full object-contain'
                    href='https://netflix-clone-bay-pi-95.vercel.app'
                    target='_blank'
                >
                <div>
                    <Image className='w-full h-full object-contain' 
                        src={netflixcloneImg}
                        alt='Netflix'
                    />
                </div>
                </a>
                <div className='w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between
                    items-end text-right xl:-ml-16 z-10'>
                <p className='font-titleFont text-textGreen text-sm tracking-wide'>
                    Featured Project
                </p>
                <h3 className='text-2xl font-bold'>Netflix Clone</h3>
                <p className='bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md'>
                Netflix clone is a  user-friendly platform that closely replicates the 
                features and user experience of the popular streaming service, Netflix. 
                </p>
                <ul className='text-xs md:text-sm font-tileFont tracking-wide flex
                gap-2 md:gap-5 justify-between text-textDark'>
                    <li>ReactJs</li>
                    <li>JavaScript</li>
                    <li>API</li>
                    <li>Tailwindcss</li>
                </ul>
                <div className='text-2xl flex gap-4'>
                    <a 
                        className='hover:text-textGreen duration-300'
                        href='https://github.com/alinasoy'
                        target='_blank'
                    >
                        <TbBrandGithub />
                    </a>
                    <a 
                        className='hover:text-textGreen duration-300'
                        href='https://netflix-clone-bay-pi-95.vercel.app/'
                        target='_blank'
                    >
                        <RxOpenInNewWindow />
                    </a>
                </div>
            </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Projects