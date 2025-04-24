import React from "react";
import RevealOnScroll from "../RevealOnScroll";
import asteroidsimage from "../../assets/asteroids.gif";
import dadleimage from "../../assets/dadle.gif";
const Projects = () => {
  return (
    <section
      id='projects'
      className='min-h-screen flex items-center justify-center py-20'
    >
      <RevealOnScroll>
        <div className='max-w-5xl mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-violet-400 bg-clip-text text-transparent text-center'>
            Featured Projects
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
              <h3 className='text-xl font-bold mb-2'>Dadle</h3>
              <p className='text-gray-400 mb-4'>
                A "Dad Joke" game with similar functionality to the popular game
                Wordle. Simply type with your keyboard and press enter to submit
                guesses.
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {["React", "Node.js", "JavaScript", "JSON Server"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className='bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20 
                               hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                               '
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className='flex justify-between items-center my-5'>
                <a
                  href='https://ngandontone.github.io/Dadle/'
                  className='text-red-500 hover:text-red-300 transition-colors my-4'
                >
                  View Project →
                </a>
                <img
                  src={dadleimage}
                  className='w-64 h-48'
                ></img>
              </div>
            </div>
            <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-red-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition'>
              <h3 className='text-xl font-bold mb-2'>Asteroids</h3>
              <p className='text-gray-400 mb-4'>
                My rendition of the classic game Asteroids. Use the WASD keys to
                move around while using the spacebar to shoot.
              </p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {["Python", "Pygame", "Pygbag"].map((tech, key) => (
                  <span
                    key={key}
                    className='bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20 
                               hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                               '
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className='flex justify-between items-center my-5'>
                <a
                  href='https://ngandontone.github.io/asteroids/'
                  className='text-red-500 hover:text-red-300 transition-colors my-4'
                >
                  View Project →
                </a>
                <img
                  src={asteroidsimage}
                  className='w-64 h-auto'
                ></img>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
