import React from "react";
import RevealOnScroll from "../RevealOnScroll";
const About = () => {
  const frontendSkills = [
    "React",
    "TypeScript",
    "TailwindCSS",
    "Angular",
    "JavaScript",
    "HTML",
    "CSS",
  ];
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
              A skilled software developer with a strong foundation in
              full-stack development, specializing in creating innovative and
              efficient solutions. Adept at collaborating in agile environments
              to deliver high-quality applications that meet both user needs and
              business goals.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='rounded-xl p-6 hover:-translate-y-1 transition-all'>
                <h3 className='text-xl font-bold mb-4'>Frontend</h3>
                <div className='flex flex-wrap gap-2'>
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
                  <strong>M.S. in Computer Science</strong> - Georgia Institute
                  of Technology (2024-Present)
                </li>
                <li className='pl-5'>
                  <span className='text-red-500'>Relevant Coursework: </span>{" "}
                  Computer Networks, Software Development Process, AI, Ethics, &
                  Society, Advanced Internet Computing Systems, Information
                  Security
                </li>
                <li>
                  <strong>
                    B.S. in Informatics/Minors in Human-Centered-Computing &
                    Marketing
                  </strong>
                  - Indiana University (2014-2019)
                </li>
                <li className='pl-5'>
                  <span className='text-red-500'>Relevant Coursework: </span>
                  Problem Solving, Information Infrastructure I&II, Social
                  Informatics, Statistical Techniques, HCI/Interaction Design,
                  Information Representation, Computer & Information Ethics,
                  Design & Development of An Information System, Virtual Reality
                  Design, Product Management, Social Media & Language
                </li>
              </ul>
            </div>
            <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all'>
              <h3 className='text-xl font-bold mb-4'>💼 Work Experience</h3>
              <div className='space-y-4 text-gray-300'>
                <div>
                  <h4 className='font-semibold'>
                    Software Developer/Business Analyst at Kernel Solutions
                    (2022-2023)
                  </h4>
                  <p>
                    <ul className='list-disc list-inside text-gray-300 space-y-2'>
                      <li>
                        Collaborated with pharmaceutical business end users to
                        develop a high-performance application for monthly and
                        quarterly Government Pricing calculations, achieving
                        speeds up to 150 times faster than competitors.
                      </li>
                      <li>
                        Designed and executed SQL queries to extract over 200
                        million records from pharmaceutical databases into an
                        AWS environment.
                      </li>
                      <li>
                        Built flexible back-end Java tools tailored to various
                        pricing scenarios and enhanced system integration using
                        Spring Framework annotations.
                      </li>
                      <li>
                        Additionally, redesigned the front-end using TypeScript
                        and Angular to improve price comparison visibility,
                        while leveraging agile methodologies with JIRA and Git
                        to efficiently manage development tasks and meet
                        deadlines.
                      </li>
                    </ul>
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
