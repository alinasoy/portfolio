import React from 'react'
import { TbBrandGithub } from 'react-icons/tb';
import {
    SlSocialLinkedin,
    SlSocialFacebook,
    SlSocialInstagram,
} from 'react-icons/sl';

const Footer = () => {
  return (
    <div className='hidden mdl:inline-flex xl:hidden items-center justify-center
    w-full py-6 gap-4'>
        <a href='https://github.com/alinasoy' target='_blank'>
            <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
            items-center justify-center hover:text-textGreen cursor-pointer
            hover:-translate-y-2 transition-all duration-300'>
            <TbBrandGithub />
            </span>
        </a>
            <a href='https://www.linkedin.com/in/alina-soy/' target='_blank'>
            <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
            items-center justify-center hover:text-textGreen cursor-pointer
            hover:-translate-y-2 transition-all duration-300'><SlSocialLinkedin /></span>
            </a>
            <a href='https://www.instagram.com/_alina_soy/' target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
                items-center justify-center hover:text-textGreen cursor-pointer
                hover:-translate-y-2 transition-all duration-300'><SlSocialInstagram /></span>
            </a>
            <a href='https://www.facebook.com/alina.soy.1/' target='_blank'>
                <span className='w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
                items-center justify-center hover:text-textGreen cursor-pointer
                hover:-translate-y-2 transition-all duration-300'><SlSocialFacebook /></span>
            </a>
    </div>
  );
};

export default Footer