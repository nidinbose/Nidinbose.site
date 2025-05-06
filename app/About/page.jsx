'use client'
import React from 'react'
import { RiGeminiFill } from "react-icons/ri";

import Link from 'next/link';


const educationItems = [
  {
    icon: "https://manidev.in/assets/web-technologies-D2lCUJMm.webp",
    title: "Web Technologies",
    subtitle: "Syneffo Solutions",
    duration: "2024 - Present",
  },
  {
    icon: "https://manidev.in/assets/graduation-BjdhmXuW.webp",
    title: "B.COM - FCA",
    subtitle: "Musaliar college of arts & sciences",
    duration: "2020 - 2023",
  },
  {
    icon: "https://manidev.in/assets/high-school-BFehnI9L.webp",
    title: "Higher-Secondary",
    subtitle: "Kerala State Board Of Education",
    duration: "2018 - 2020",
  },
  {
    icon: "https://manidev.in/assets/ssc-graduation-CAO-pSuM.webp",
    title: "High School ",
    subtitle: "St.Benidicts mschs Thannithodu",
    duration: "2014 - 2018",
  },
];

const techImages = {
  'JavaScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'Python': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'React.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'Redux': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  'Node.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'HTML': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'MongoDB': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
  'MySQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'Tailwind CSS': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
  'Figma': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  'GitHub': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-line.svg',
  'VS Code': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  'TypeScript': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'Django': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
  'Bootstrap': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
  'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  'Git': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'Docker': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'PostgreSQL': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
};

export default function pageHome() {
  const rows = [
    ['JavaScript', 'Python', 'React.js', 'Redux', 'Node.js', 'HTML', 'CSS'],
    ['MongoDB', 'MySQL', 'Tailwind CSS', 'Figma', 'GitHub', 'Next.js', 'VS Code','Docker'],
    ['TypeScript', 'Django', 'Bootstrap', 'C++', 'Git', 'Docker', 'PostgreSQL'],
  ];
  return (
    <div className='container mx-auto px-4 sm:px-6 md:px-12 lg:px-8 overflow-x-hidden mt-12'>
      {/* First Section */}
      <div className='grid grid-cols-1 md:grid-cols-12 max-w-7xl mx-auto gap-6 md:gap-10 '>
        <div className='bg-gray-100 h-auto w-full col-span-12  lg:col-span-8 rounded-2xl p-6 md:p-8'>
          <h1 className='text-5xl md:text-7xl sea mb-5 md:mb-7 flex items-center gap-4 mb-6'> <RiGeminiFill className='text-[#b5ff6d]'/> Hello</h1>
          <p className='font-bold text-xl md:text-2xl lg:text-4xl md:mb-3 sea '>
            I am Nidinbose developing  
          </p>
          <p className='font-bold text-lg md:text-2xl lg:text-4xl mb-5 md:mb-7 sea '>
          Solutions for Over 2 Years
          </p>
          <p className='text-base lg:text-xl leading-relaxed tracking-wide md:mt-12'>
            I'm a developer and freelancer specializing in crafting user-focused websites and applications. 
            My expertise lies in building modern, scalable, and impactful solutions that elevate businesses. 
            Let's work together to transform ideas into reality and create something exceptional.
          </p>
        </div>
        
        <div className='bg-gray-100 col-span-12 lg:col-span-4 rounded-2xl p-4 h-full'>
          <img 
            src="./Images/uplord.png" 
            alt="Portrait" 
            className='w-full h-auto md:h-auto object-cover rounded-xl'
          />
        </div>
      </div>
      
      {/* Second Section */}
      <div className='grid grid-cols-12 max-w-7xl mx-auto gap-6 md:gap-10 py-8 md:py-10'>
        <div className='bg-gray-100 h-full md:h-full col-span-12 rounded-2xl p-4'>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='md:p-8 lg:p-6 rouded-3xl'>
              <img src="https://t4.ftcdn.net/jpg/02/46/62/87/360_F_246628725_HO5rjCq9v1ETJ7xty0IZ8J95nuRIOltW.jpg" alt=""  className='rounded-3xl'/>
            </div>
                  <div className='flex flex-col'>
              <h1 className='text-lg lg:text-2xl sea mb-5 mt-6'>Key Projects and OpenSource Contributions</h1>
              <p className='text-sm  xl:text-xl max-w-xl mt-6'>Explore my contributions, including the Editorify-Dev npm package and a Shopify-like e-commerce backend platform. 
                I’ve also delivered tailored solutions to individual clients, ensuring their digital success.</p>
                <div className='flex items-center gap-7 mt-12'>
        <Link href={`/Projects`}>        <button class="group  text-xs sea relative h-12 overflow-hidden rounded-[8px] border border-neutral-200 bg-transparent px-4 text-neutral-950"><span class="relative inline-flex"><span class="duration-700 [transition-delay:0.02s] group-hover:[transform:rotateY(360deg)] mr-2">See  </span><span class="duration-700 [transition-delay:0.04s] group-hover:[transform:rotateY(360deg)] mr-2">my</span><span class="duration-700 [transition-delay:0.06s] group-hover:[transform:rotateY(360deg)]">pro</span><span class="duration-700 [transition-delay:0.08s] group-hover:[transform:rotateY(360deg)]">je</span><span class="duration-700 [transition-delay:0.10s] group-hover:[transform:rotateY(360deg)]">cts</span><span class="duration-700 [transition-delay:0.12s] group-hover:[transform:rotateY(360deg)]">&nbsp;</span><span class="duration-700 [transition-delay:0.14s] group-hover:[transform:rotateY(360deg)]"></span><span class="duration-700 [transition-delay:0.16s] group-hover:[transform:rotateY(360deg)]"></span></span></button></Link>
                <button class="group relative text-xs sea font-bold"><div class="relative z-10 inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-medium text-neutral-600 transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-active:translate-x-0 group-active:translate-y-0"> Resume</div><div class="absolute inset-0 z-0 h-full w-full rounded-md transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:[box-shadow:5px_5px_#a3a3a3,10px_10px_#d4d4d4,15px_15px_#e5e5e5] group-active:translate-x-0 group-active:translate-y-0 group-active:shadow-none"></div></button>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className='grid grid-cols-12 max-w-7xl mx-auto gap-6 md:gap-10'>
        <div className='bg-gray-100 h-auto md:h-auto col-span-12 lg:col-span-4 rounded-2xl p-4'>
         <div className='flex flex-col '>
         <h1 className=' text-2xl font-bold text-start mb-3 sea'>My services</h1>

         <div className='flex gap-3 items-center'>
            <img src="https://manidev.in/assets/web-development-XqFmRwZ8.webp" alt="" className='w-14 h-14'/>
            <h1 className='sea'>Web Development & Design</h1>
         </div>

         <hr  className='mt-3 mb-3'/>
         <div className='flex gap-3 items-center'>
            <img src="https://manidev.in/assets/e-commerce-CbivXfD_.webp" alt="" className='w-14 h-14'/>
            <h1 className='sea'>Graphic Design</h1>
         </div>

         <hr  className='mt-3 mb-3'/>
         <div className='flex gap-3 items-center'>
            <img src="https://manidev.in/assets/ui-ux-design-sbCb02Xt.webp" alt="" className='w-14 h-14'/>
            <h1 className='sea'>UI/UX Design</h1>
         </div>
         <hr  className='mt-3 mb-3'/>

         <div className='flex gap-3 items-center'>
            <img src="https://manidev.in/assets/app-development-ikBbPQvA.webp" alt="" className='w-14 h-14'/>
            <h1 className='sea'>App Development</h1>
         </div>

         </div>
        </div>
        <div className='bg-gray-100 h-auto md:h-auto col-span-12 lg:col-span-8 rounded-2xl p-4'>
        <section className=" p-6 md:p-12 rounded-xl max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-gray-800 sea">My Education</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {educationItems.map((item, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="bg-white p-3  w-14 h-14 flex justify-center items-center">
              <img src={item.icon} alt={item.title} className="w-10 h-10 object-contain" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.subtitle}</p>
              <p className="text-sm text-gray-500 mt-1">{item.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
        </div>
      </div>
      <div className='grid grid-cols-12 max-w-7xl mx-auto gap-6 md:gap-10 mt-8 md:mt-10'>
  {/* Left (My Tech Stack) */}
  <div className="col-span-12 lg:col-span-6 rounded-2xl p-6 bg-gray-100 shadow flex flex-col h-full overflow-hidden">
      <h2 className="text-2xl font-semibold mb-6 sea">My Tech Stack</h2>

      {rows.map((techList, rowIndex) => (
        <div
          key={rowIndex}
          className={`marquee ${rowIndex % 2 === 0 ? 'marquee-left' : 'marquee-right'} h-auto mb-4 w-full`}
        >
          <div className="marquee-content">
            {[...Array(2)].flatMap((_, i) =>
              techList.map((tech, index) => (
                <div
                  key={`row${rowIndex}-${i}-${index}`}
                  className="flex items-center gap-2 bg-gray-50 rounded-xl px-4 py-2 shadow-sm min-w-max mx-2"
                >
                  <img
                    src={techImages[tech]}
                    alt={tech}
                    className="w-16 h-16 rounded-full object-contain bg-white p-2"
                  />
                  <span className="text-sm font-medium">{tech}</span>
                </div>
              ))
            )}
          </div>
        </div>
      ))}

      {/* Inline CSS for Marquee Animations */}
      <style>{`
        .marquee {
          overflow: hidden;
          position: relative;
          white-space: nowrap;
        }
        .marquee-content {
          display: inline-flex;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .marquee-left .marquee-content {
          animation-name: scroll-left;
          animation-duration: 30s;
        }
        .marquee-right .marquee-content {
          animation-name: scroll-right;
          animation-duration: 60s;
        }
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(50%); }
        }
      `}</style>
    </div>


  {/* Right Column (Git Contributions + Call to Action stacked) */}
  <div className='col-span-12 lg:col-span-6 flex flex-col gap-6 h-full'>
    {/* Git Contributions */}
    <div className='bg-gray-100 rounded-2xl p-6  shadow flex-1 flex flex-col'>
      <h2 className='text-2xl font-semibold mb-4 sea'>My Git Contributions</h2>
      <img
        src='https://ghchart.rshah.org/nidinbose'
        alt='GitHub Contributions'
        className='w-full rounded-lg flex-1 object-contain'
      />
      <p className='mt-2 text-sm text-gray-600'>291 contributions in the last year</p>
    </div>

    {/* Call to Action */}
    <div className='border rounded-2xl p-6 bg-black text-white shadow flex items-center justify-between flex-none h-32'>
      <span className='text-3xl text-green-400'>✌️</span>
      <div className='text-center'>
        <h3 className='text-lg md:text-xl font-semibold mb-2'>Let’s Work Together!</h3>
        <p className='text-base md:text-lg tracking-wide leading-relaxed text-[#b5ff6d] mt-2'>Send Me a Message</p>
      </div>
      <span className='text-3xl'>🤞</span>
    </div>
  </div>
</div>



      {/* Fifth Section */}
      <div className='grid grid-cols-12 max-w-7xl mx-auto gap-6 md:gap-10 mt-8 md:mt-10 mb-10'>
      <div className=" h-full col-span-12 xl:col-span-8 rounded-2xl p-6 mb-12 bg-gray-100 space-y-12">
  {/* Job 1 */}
  <div className="flex gap-4 items-start">
    <img src="https://synnefo.in/_next/image?url=%2Fimg%2Fsynnefo-logo-black.png&w=384&q=75" alt="Syneffo" className="w-20 h-12 rounded-xl bg-cover" />
    <div className="flex-1 space-y-2">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-xs md:text-lg">Synnefo Solutions</h3>
        <p className="text-xs text-sm text-gray-500 ">Aug 2023 - July 2024</p>
      </div>
      <p className="text-sm text-black">MERN Stack Developer</p>
      <p className="text-sm text-black">
        Contributed to creating visually appealing and user-friendly website designs.
        Collaborated with cross-functional teams to deliver projects tailored to client
        requirements, ensuring seamless user experiences and adherence to industry standards.
      </p>
    </div>
  </div>

  <hr className="border-gray-300" />

  {/* Job 2 */}
  <div className="flex gap-4 items-start">
    <img src="https://manidev.in/assets/freelancing-CzuyQJ2l.webp" alt="Freelancing" className="w-20 h-12 rounded-xl" />
    <div className="flex-1 space-y-2">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-xs md:text-lg mr-3">Freelancing</h3>
        <p className="text-xs md:text-sm text-black">July 2024 - Present</p>
      </div>
      <p className="text-sm text-black">Web Development Services</p>
      <p className="text-sm text-black">
        Provided end-to-end web development solutions to clients, focusing on building
        robust and scalable websites. Specialized in delivering custom features and
        optimizing websites for performance and usability, showcasing expertise in both
        front-end and back-end development.
      </p>
    </div>
  </div>
</div>

{/* Right Section Wrapper */}
<div className="col-span-12 xl:col-span-4 m-h-auto grid grid-cols-12 gap-4 px-4 md:px-8 lg:px-1">
  {/* LinkedIn Card */}
  <a href="https://www.linkedin.com/in/nidin-bose-37b305308" target="_blank" rel="noopener noreferrer" className="col-span-6 sm:col-span-6 lg:col-span-6">
    <div className="relative rounded-2xl overflow-hidden aspect-[3/2]">
      <img
        src="https://images.squarespace-cdn.com/content/v1/601d54be1a355a7eb342e79d/507fd220-ffc5-455f-95e0-7382962e04b3/LinkedIn+personal+branding.jpg"
        alt="LinkedIn"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  </a>

  {/* GitHub Card */}
  <a href="https://github.com/nidinbose?tab=repositories" target="_blank" rel="noopener noreferrer" className="col-span-6 sm:col-span-6 lg:col-span-6">
    <div className="relative rounded-2xl overflow-hidden aspect-[3/2]">
      <img
        src="https://media.licdn.com/dms/image/v2/D5612AQHXyBgH7mnUqg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1691804305878?e=2147483647&v=beta&t=cxVYH-Squ7bKOJMWU1FePHOCR8R4tg4M5wPN1tseDH0"
        alt="GitHub"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  </a>

  {/* WhatsApp Card */}
  <a href="https://wa.me/917012543724" target="_blank" rel="noopener noreferrer" className="col-span-12">
    <div className="rounded-2xl overflow-hidden aspect-video">
      <img
        src="https://images.unsplash.com/photo-1661862649743-2799867c32b0?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2hhdHNhcHAlMjBsb2dvfGVufDB8fDB8fHww"
        alt="WhatsApp"
        className="w-full h-full object-cover"
      />
    </div>
  </a>
</div>



      </div>
    </div>
  )
}

