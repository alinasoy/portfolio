import React from 'react'

const Contact = () => {
  return (
    <section
        id='contact'
        className='max-w-contentContainer mx-auto py-10 xl:py-32 flex flex-col gap-4
        items-center justify-center'>
            <p className='font-titleFont text-lg text-textGreen font-semibold flex
            items-center tracking-wide'>
                03. What's Next?
            </p>
            <h2 className='font-titleFont text-5xl font-semibold'>Get In Touch</h2>
            <p className='max-w-[600px] text-center text-textDark'>
                Although I'm currently looking for new Opportunities and jobs, if my skills
                are matches with your job description and if you feel I'm the right candidate. You can drop me a message.
                I'll get back to you!
            </p>
            <a href='mailto:alinasoy24@gmail.com'>
                <button className='w-40 h-14 border border-textGreen mt-6 font-titleFont text-sm
                text-textGreen tracking-wider rounded-md hover:bg-hoverColor duration-300'>
                    Message
                </button>
            </a>
        </section>
  );
};

export default Contact