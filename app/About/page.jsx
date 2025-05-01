import React from 'react'
import { RiGeminiFill } from "react-icons/ri";




const educationItems = [
  {
    icon: "https://manidev.in/assets/web-technologies-D2lCUJMm.webp",
    title: "Web Technologies",
    subtitle: "Self-guided Learning",
    duration: "2019 - Present",
  },
  {
    icon: "https://manidev.in/assets/graduation-BjdhmXuW.webp",
    title: "B.TECH - CSE",
    subtitle: "Audisankara Institute of Technology",
    duration: "2019 - 2023",
  },
  {
    icon: "https://manidev.in/assets/high-school-BFehnI9L.webp",
    title: "Pre-University in MPC",
    subtitle: "Krishna Chaithanya Junior College",
    duration: "2017 - 2019",
  },
  {
    icon: "https://manidev.in/assets/ssc-graduation-CAO-pSuM.webp",
    title: "High School Diploma",
    subtitle: "Vema High School",
    duration: "2016 - 2017",
  },
];
export default function pageHome() {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden'>
      {/* First Section */}
      <div className='grid grid-cols-1 md:grid-cols-12 max-w-7xl mx-auto gap-6 md:gap-10'>
        <div className='border h-auto w-full col-span-12 md:col-span-8 rounded-2xl p-6 md:p-8'>
          <h1 className='text-5xl md:text-7xl sea mb-5 md:mb-7 flex items-center gap-4 mb-6'> <RiGeminiFill className='text-[#b5ff6d]'/> Hello</h1>
          <p className='font-bold text-xl md:text-4xl md:mb-3 sea '>
            I am Nidinbose developing  
          </p>
          <p className='font-bold text-lg md:text-4xl mb-5 md:mb-7 sea '>
          Solutions for Over 2 Years
          </p>
          <p className='text-base md:text-xl leading-relaxed tracking-wide md:mt-12'>
            I'm a developer and freelancer specializing in crafting user-focused websites and applications. 
            My expertise lies in building modern, scalable, and impactful solutions that elevate businesses. 
            Let's work together to transform ideas into reality and create something exceptional.
          </p>
        </div>
        
        <div className='border col-span-12 md:col-span-4 rounded-2xl p-4 h-full'>
          <img 
            src="./public/port.png" 
            alt="Portrait" 
            className='w-full h-auto md:h-96 object-cover rounded-xl'
          />
        </div>
      </div>
      
      {/* Second Section */}
      <div className='grid grid-cols-12 max-w-7xl mx-auto gap-6 md:gap-10 py-8 md:py-10'>
        <div className='border h-full md:h-96 col-span-12 rounded-2xl p-4'>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className=''>

            </div>
            <div className='flex flex-col'>
              <h1 className='text-xl lg:text-2xl sea mb-5 mt-6'>Key Projects and OpenSource Contributions</h1>
              <p className='text-xl max-w-xl mt-6'>Explore my contributions, including the Editorify-Dev npm package and a Shopify-like e-commerce backend platform. 
                I’ve also delivered tailored solutions to individual clients, ensuring their digital success.</p>
                <div className='flex items-center gap-7 mt-12'>
                <button class="group sea relative h-12 overflow-hidden rounded-[8px] border border-neutral-200 bg-transparent px-4 text-neutral-950"><span class="relative inline-flex"><span class="duration-700 [transition-delay:0.02s] group-hover:[transform:rotateY(360deg)] mr-2">See  </span><span class="duration-700 [transition-delay:0.04s] group-hover:[transform:rotateY(360deg)] mr-2">my</span><span class="duration-700 [transition-delay:0.06s] group-hover:[transform:rotateY(360deg)]">pro</span><span class="duration-700 [transition-delay:0.08s] group-hover:[transform:rotateY(360deg)]">je</span><span class="duration-700 [transition-delay:0.10s] group-hover:[transform:rotateY(360deg)]">cts</span><span class="duration-700 [transition-delay:0.12s] group-hover:[transform:rotateY(360deg)]">&nbsp;</span><span class="duration-700 [transition-delay:0.14s] group-hover:[transform:rotateY(360deg)]"></span><span class="duration-700 [transition-delay:0.16s] group-hover:[transform:rotateY(360deg)]"></span></span></button>
                <button class="group relative sea font-bold"><div class="relative z-10 inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 bg-transparent px-6 font-medium text-neutral-600 transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-active:translate-x-0 group-active:translate-y-0">Downlord Resume</div><div class="absolute inset-0 z-0 h-full w-full rounded-md transition-all duration-300 group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:[box-shadow:5px_5px_#a3a3a3,10px_10px_#d4d4d4,15px_15px_#e5e5e5] group-active:translate-x-0 group-active:translate-y-0 group-active:shadow-none"></div></button>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className='grid grid-cols-12 max-w-7xl mx-auto gap-6 md:gap-10'>
        <div className='border h-auto md:h-auto col-span-12 md:col-span-4 rounded-2xl p-4'>
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
        <div className='border h-auto md:h-auto col-span-12 md:col-span-8 rounded-2xl p-4'>
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
  <div className='border col-span-12 lg:col-span-6 rounded-2xl p-6 bg-white shadow flex flex-col h-full'>
    <h2 className='text-2xl font-semibold mb-4'>My Tech Stack</h2>
    <div className='grid grid-cols-3 gap-4 flex-1'>
      {[
        'JavaScript', 'Python', 'React.js', 'Redux',
        'Node.js', 'HTML', 'CSS', 'Express.js',
        'MongoDB', 'MySQL', 'Tailwind CSS', 'Figma',
        'GitHub', 'Next.js', 'VS Code',
      ].map((tech, index) => (
        <div
          key={index}
          className='flex flex-col items-center justify-center bg-gray-50 rounded-xl p-4 shadow-sm hover:shadow-md transition h-14'
        >
          <span className='text-sm font-medium'>{tech}</span>
        </div>
      ))}
    </div>
  </div>

  {/* Right Column (Git Contributions + Call to Action stacked) */}
  <div className='col-span-12 lg:col-span-6 flex flex-col gap-6 h-full'>
    {/* Git Contributions */}
    <div className='border rounded-2xl p-6 bg-white shadow flex-1 flex flex-col'>
      <h2 className='text-2xl font-semibold mb-4'>My Git Contributions</h2>
      <img
        src='https://ghchart.rshah.org/your-github-username'
        alt='GitHub Contributions'
        className='w-full rounded-lg flex-1 object-contain'
      />
      <p className='mt-2 text-sm text-gray-600'>291 contributions in the last year</p>
    </div>

    {/* Call to Action */}
    <div className='border rounded-2xl p-6 bg-black text-white shadow flex items-center justify-between flex-none h-32'>
      <span className='text-3xl text-green-400'>✌️</span>
      <div className='text-center'>
        <h3 className='text-lg md:text-xl font-semibold'>Let’s Work Together!</h3>
        <p className='text-base md:text-lg text-[#fff200]'>Send Me a Message</p>
      </div>
      <span className='text-3xl'>🤞</span>
    </div>
  </div>
</div>



      {/* Fifth Section */}
      <div className='grid grid-cols-12 max-w-7xl mx-auto gap-6 md:gap-10 mt-8 md:mt-10 mb-10'>
        <div className='border h-full col-span-12 lg:col-span-8 rounded-2xl p-4'>
        <div className="flex gap-4">
      <img src="/webomindapps-logo.png" alt="Webomindapps" className="w-12 h-12 rounded-xl" />
      <div className="flex-1">
        <div className="flex justify-between">
          <h3 className="font-semibold">Webomindapps Private Limited</h3>
          <p className="text-sm text-gray-500">Aug 2023 - July 2024</p>
        </div>
        <p className="text-sm text-gray-600">Web Designer</p>
        <p className="text-sm mt-2 text-gray-700">
          Contributed to creating visually appealing and user-friendly website designs.
          Collaborated with cross-functional teams to deliver projects tailored to client
          requirements, ensuring seamless user experiences and adherence to industry standards.
        </p>
      </div>
    </div>

    <hr />

    {/* Job 2 */}
    <div className="flex gap-4">
      <img src="/freelance-logo.png" alt="Freelancing" className="w-12 h-12 rounded-xl" />
      <div className="flex-1">
        <div className="flex justify-between">
          <h3 className="font-semibold">Freelancing</h3>
          <p className="text-sm text-gray-500">July 2023 - Present</p>
        </div>
        <p className="text-sm text-gray-600">Web Development Services</p>
        <p className="text-sm mt-2 text-gray-700">
          Provided end-to-end web development solutions to clients, focusing on building
          robust and scalable websites. Specialized in delivering custom features and
          optimizing websites for performance and usability, showcasing expertise in both
          front-end and back-end development.
        </p>
      </div>
    </div>
 

        </div>
    {/* Right Section Wrapper */}
<div className="col-span-12 lg:col-span-4 grid grid-cols-12 gap-4">
  {/* Right Top */}
  <div className="border h-48 md:h-64 col-span-6 lg:col-span-6 rounded-2xl p-4">
    Right Top
  </div>

  {/* Right Bottom */}
  <div className="border h-48 md:h-64 col-span-6 lg:col-span-6 rounded-2xl p-4">
    Right Bottom
  </div>

  {/* Bottom Right Full Width */}
  <div className="border h-64 md:h-auto col-span-12 rounded-2xl p-4">
    Bottom Right
  </div>
</div>

      </div>
    </div>
  )
}

