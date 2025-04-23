import React from "react";
import RevealOnScroll from "../RevealOnScroll";

const Home = () => {
  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center relative'
    >
      <RevealOnScroll>
        <div className='text-center z-10 px-4'>
          <h1 className='text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-red-500 to-violet-400 bg-clip-text text-transparent leading-right'>
            Hi, I'm Ngando Ntone
          </h1>

          <p className='text-gray-400 text-lg mb-8 max-w-lg mx-auto'>
            I am a full stack developer residing in Chicago, IL who loves
            solving problems with clean and creative solutions.
          </p>
          <div className='flex justify-center space-x-4'>
            <a
              href='/Ngando-Resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-red-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]'
            >
              Resume
            </a>
            <a
              href='#projects'
              className='border border-red-500/50 text-red-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-red-500/10'
            >
              View Projects
            </a>
            {/* <a
              href='#contact'
              className='border border-red-500/50 text-red-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-red-500/10'
            >
              Contact Me
            </a> */}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
