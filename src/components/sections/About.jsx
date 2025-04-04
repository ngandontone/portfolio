import React from "react";
import RevealOnScroll from "../RevealOnScroll";
const About = () => {
  const frontendSkills = ["React", "TypeScript", "TailwindCSS", "Angular"];
  const backendSkills = ["Python", "Java", "Node.js", "SQL"];
  return (
    <section
      id='about'
      className='min-h-screen flex items-center justify-center py-20'
    >
      <RevealOnScroll>
        <div className='max-w-3xl mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-red-500 to-violet-400 bg-clip-text text-transparent text-center'>
            About Me
          </h2>
          <div className='rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all'>
            <p className='text-gray-300 mb-6'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati consectetur nam voluptatibus molestias deserunt maiores?
              Doloremque magnam ullam ipsam fugiat, laudantium cum a numquam
              consequatur nemo nisi natus voluptates dolorum?
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                <h3 className='text-xl font-bold mb-4'>Frontend</h3>
                <div className='flex flex-wrap gap-2'></div>
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className='bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20 
                               hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                               '
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                <h3 className='text-xl font-bold mb-4'>Backend</h3>
                <div className='flex flex-wrap gap-2'></div>
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className='bg-red-500/10 text-red-500 py-1 px-3 rounded-full text-sm hover:bg-red-500/20 
                               hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                               '
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
            <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4'>🎓 Education</h3>
              <ul className='list-disc list-inside text-gray-300 space-y-2'>
                <li>
                  <strong>M.S in Computer Science</strong> - Georgia Institute
                  of Technology (2024-Present)
                </li>
                <li>
                  <strong>
                    B.S in Informatics/Minors in Human-Centered-Computing &
                    Marketing
                  </strong>
                  - Indiana University (2014-2019)
                </li>
                <li>Relevant Coursework: Problem Solving,</li>
              </ul>
            </div>
            <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4'>💼 Work Experience</h3>
              <div className='space-y-4 text-gray-300'>
                <div>
                  <h4 className='font-semibold'>
                    Technical Expert at OutlierAi (2024)
                  </h4>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Rem doloribus placeat nam corrupti consequatur at debitis
                    quam eaque voluptates ex reprehenderit recusandae sit
                    dolorem, voluptate iusto, dolorum non, nostrum voluptatibus!
                  </p>
                </div>
                <div>
                  <h4 className='font-semibold'>
                    Software Developer/Business Analyst at Kernel Solutions
                    (2022-2023)
                  </h4>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Rem doloribus placeat nam corrupti consequatur at debitis
                    quam eaque voluptates ex reprehenderit recusandae sit
                    dolorem, voluptate iusto, dolorum non, nostrum voluptatibus!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;
