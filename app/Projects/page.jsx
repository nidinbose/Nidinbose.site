'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const allProjects = [
  {
    title: 'Hexspin AI for Code practice and learn',
    description:
      'A private theatre booking platform with multi-branch admin control, real-time booking updates, automated email notifications, and a secure transaction backend.',
    image: '/Images/Ai.png',
    tags: ['Next.js', 'Firebase', 'Stripe', 'Real-time'],
    accentColor: 'black',
  },
  {
    title: 'ManiDev Portfolio',
    description:
      'A story-driven personal portfolio showcasing expertise in modern web development, featuring an interactive UI, smooth animations, and a performance-optimized design.',
    image: '/manidev.png',
    tags: ['React', 'GSAP', 'Three.js', 'Framer Motion'],
    accentColor: 'black',
  },
  {
    title: 'NeuroSync AI Assistant',
    description:
      'An AI-powered productivity assistant with neural network capabilities, voice recognition, and predictive task management.',
    image: '/neurosync.png',
    tags: ['Python', 'TensorFlow', 'WebSockets', 'NLP'],
    accentColor: 'black',
  },
  {
    title: 'Quantum Dashboard',
    description:
      'Data visualization platform with quantum computing simulations, real-time analytics, and interactive 3D data representations.',
    image: '/quantum.png',
    tags: ['TypeScript', 'D3.js', 'Three.js', 'WebGL'],
    accentColor: 'black',
  },
  {
    title: 'EcoTrack Sustainability App',
    description:
      'Carbon footprint tracker with AI recommendations for reducing environmental impact and gamified sustainability challenges.',
    image: '/ecotrack.png',
    tags: ['React Native', 'Node.js', 'MongoDB', 'AI'],
    accentColor: 'black',
  },
  {
    title: 'VR Architecture Visualizer',
    description:
      'Virtual reality platform for architects to showcase designs in immersive 3D environments with real-time modifications.',
    image: '/vr-arch.png',
    tags: ['Unity', 'C#', 'Oculus SDK', '3D Modeling'],
    accentColor: 'black',
  },
];

function ProjectCard({ project, index }) {
  return (
    <div 
      data-aos="fade-up"
      data-aos-delay={index * 100}
      data-aos-once="true"
      className={`bg-${project.accentColor} rounded-2xl overflow-hidden shadow-lg flex flex-col h-full transition-all duration-300 hover:z-10 border border-gray-100 hover:shadow-xl hover:-translate-y-2`}
    >
      <div className="relative w-full h-64 md:h-80 overflow-hidden group">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div
            data-aos="fade-up"
            data-aos-delay={index * 100 + 200}
            data-aos-once="true"
            className="flex flex-wrap gap-2"
          >
            {project.tags.map((tag, i) => (
              <span 
                key={i}
                className="bg-white/80 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="p-6 md:p-8 flex-1 flex flex-col">
        <h3 
          data-aos="fade-up"
          data-aos-delay={index * 100 + 100}
          data-aos-once="true"
          className="text-xl md:text-2xl font-bold text-white mb-3"
        >
          {project.title}
        </h3>
        <p 
          data-aos="fade-up"
          data-aos-delay={index * 100 + 150}
          data-aos-once="true"
          className="text-gray-300 flex-1"
        >
          {project.description}
        </p>
        <div
          data-aos="fade-up"
          data-aos-delay={index * 100 + 200}
          data-aos-once="true"
          className="mt-4"
        >
          <button className="bg-gray-900/5 hover:bg-gray-100 backdrop-blur-sm border border-gray-200 text-gray-100 px-6 py-2 rounded-full font-medium transition-all duration-300 hover:px-7 flex items-center gap-2 hover:text-green-200">
            <span>View Project</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right">
              <path d="M7 7h10v10" />
              <path d="M7 17 17 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsShowcase() {
  const [visibleProjects, setVisibleProjects] = useState(4);
  const [projects, setProjects] = useState(allProjects.slice(0, 4));

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  const loadMoreProjects = () => {
    const newVisibleProjects = visibleProjects + 2;
    setVisibleProjects(newVisibleProjects);
    setProjects(allProjects.slice(0, newVisibleProjects));
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 py-12 md:py-20 sea">
      <div className="max-w-7xl mx-auto">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-center mb-12 md:mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 mb-4">
            Project Portfolio
          </h1>
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Cutting-edge solutions with immersive interfaces and advanced technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
        
        {visibleProjects < allProjects.length && (
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-center mt-16 md:mt-24"
          >
            <button 
              onClick={loadMoreProjects}
              className="relative overflow-hidden group bg-white border border-gray-200 text-gray-700 px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-gray-50 hover:border-gray-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Load More Projects</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-gray-100 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-700"></span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}