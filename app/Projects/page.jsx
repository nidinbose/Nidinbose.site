'use client';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const allProjects = [
  {
    title: 'Hexspin AI',
    description: 'AI-powered coding practice platform with real-time feedback and personalized learning paths',
    image: '/Images/Ai.png',
    tags: ['Mongodb', 'Sql', 'React', 'Nodejs', 'Express', 'Docker', 'Kubernetis', 'Aws', 'Websockets', 'YoutubeApi', 'Tailwind', 'Microservices architecture'],
    accentColor: 'rgba(88, 28, 135, 0.7)',
    category: 'Website Development',
    year: '2025',
    Livelink: 'https://www.hexspinai.in',
    Github: 'https://github.com/yourusername/hexspin-ai'
  },
  {
    title: 'Santics E-Commerce',
    description: 'Interactive Gaming and Computer accessories ready to use Cpu shopping website',
    image: '/Images/Sant2.png',
    tags: ['React', 'Node.js', 'GSAP', 'Tailwind', 'Express', 'Mongodb', 'Framer-motion', 'AOS', 'AWS'],
    accentColor: 'rgba(146, 64, 14, 0.7)',
    category: 'Website Development',
    year: '2023',
    Livelink: 'https://www.hexspinai.in',
    Github: ''
  },
  {
    title: 'College Management System',
    description: 'A perfect management of students staff administration data dashboard implemented for easy management marks publishing etc',
    image: '/Images/CM.png',
    tags: ['Mongodb', 'Express', 'React', 'Nodejs','javascript','Framer-motion','JWT'],
    accentColor: 'rgba(108, 244, 201, 0.7)',
    category: 'Website Development',
    year: '2024',
    Livelink: 'https://college-management-system-wheat.vercel.app/',
    Github: ''
  },
  {
    title: 'Hexspin Company website',
    description: 'Appoinment booking and company business development website showing services what they can do more ',
    image: '/Images/HX.png',
    tags: ['TypeScript', 'Next.js', 'GSAP', 'Vercel','AOS','Spline-3D','Mongodb','Express','Node.js','webSockets','Clean Architucture'],
    accentColor: 'rgba(30, 58, 138, 0.7)',
    category: 'Website Development',
    year: '2023',
    Livelink: '',
    Github: ''
  },
  {
    title: 'Nidinbose Portfolio',
    description: 'Personal website showing my profile',
    image: '/Images/PO.png',
    tags: ['React Native', 'Node.js', 'MongoDB', 'AI'],
    accentColor: 'rgba(20, 83, 45, 0.7)',
    category: 'Website Development',
    year: '2024',
    Livelink: '',
    Github: ''
  },

];

const categories = ['All', ...new Set(allProjects.map(project => project.category))];

function BubbleBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(30)].map((_, i) => {
        const size = Math.random() * 200 + 50;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-black/5 to-black/10 border border-black/10"
            style={{
              width: size,
              height: size,
              left: `${x}%`,
              top: `${y}%`,
              filter: 'blur(20px)',
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 100],
              opacity: [0.8, 0.4, 0.8],
            }}
            transition={{
              duration: duration,
              delay: delay,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        );
      })}
    </div>
  );
}

function ProjectCard({ project, index, onClick }) {
  const ref = useRef(null);
  const cardRef = useRef(null);
  const cursorTextRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0.5, 1], [0.5, 1]);

  useEffect(() => {
    const card = cardRef.current;
    const cursorText = cursorTextRef.current;

    if (!card || !cursorText) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      cursorText.style.left = `${x}px`;
      cursorText.style.top = `${y}px`;
    };

    const handleMouseEnter = () => {
      cursorText.style.opacity = '1';
      document.body.style.cursor = 'none';
    };

    const handleMouseLeave = () => {
      cursorText.style.opacity = '0';
      document.body.style.cursor = 'default';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative group cursor-none"
      onClick={() => onClick(project)}
    >
      <div 
        ref={cardRef}
        className="relative h-full rounded-3xl overflow-hidden"
        style={{
          background: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        }}
      >
        <div 
          ref={cursorTextRef}
          className="absolute z-50 pointer-events-none px-3 py-1 sea animate-bounce text-center rounded-full bg-black text-white text-xs font-medium whitespace-nowrap transition-opacity duration-300 opacity-0 hidden md:block"
          style={{
            transform: 'translate(-50%, -50%)',
          }}
        >
          View Project
        </div>
        
        <div 
          className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at center, ${project.accentColor}, transparent 70%)`,
          }}
        />
        
        <div className="relative z-10 h-full flex flex-col p-6">
          <div className="flex justify-between items-start mb-4">
            <span className="text-xs font-mono text-gray-600">{project.year}</span>
            <span 
              className="text-xs font-mono px-3 py-1 rounded-full"
              style={{
                background: 'rgba(0, 0, 0, 0.05)',
                backdropFilter: 'blur(10px)',
                color: 'black',
              }}
            >
              {project.category}
            </span>
          </div>
          
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-black transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-700 mb-5">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag, i) => (
                <span 
                  key={i} 
                  className="text-xs px-3 py-1 rounded-full"
                  style={{
                    background: 'rgba(0, 0, 0, 0.05)',
                    backdropFilter: 'blur(10px)',
                    color: 'black',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="relative h-48 md:h-64 w-full rounded-xl overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
          </div>
          
          <div className="md:hidden absolute bottom-4 right-4 z-20">
            <div className="px-4 py-2 rounded-full bg-black text-white text-sm font-medium flex items-center gap-2 sea">
              Tap to View
            </div>
          </div>
        </div>
        
        <div 
          className="absolute inset-0 rounded-3xl pointer-events-none border border-black/10 group-hover:border-black/30 transition-all duration-300"
        />
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto sea"
    >
      <div 
        className="absolute inset-0 bg-white/90 backdrop-blur-lg"
        onClick={onClose}
      />
      
      <motion.div
        ref={modalRef}
        initial={{ scale: 0.9, y: 50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 50 }}
        className="relative max-w-6xl w-full rounded-3xl overflow-hidden z-10 my-8"
        style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(0, 0, 0, 0.1)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}
      >
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at center, ${project.accentColor}, transparent 70%)`,
          }}
        />
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-2 rounded-full bg-black/10 backdrop-blur-sm hover:bg-black/20 transition-colors"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18"/>
            <path d="m6 6 12 12"/>
          </svg>
        </button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8 lg:p-12 relative z-10">
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="bg-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-mono px-3 py-1 rounded-full bg-black/10 backdrop-blur-sm text-black">
                {project.category}
              </span>
              <span className="text-sm font-mono text-gray-600">{project.year}</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">{project.title}</h2>
            <p className="text-gray-700 mb-8 text-base sm:text-lg">{project.description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div 
                className="p-4 rounded-xl"
                style={{
                  background: 'rgba(0, 0, 0, 0.05)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <h4 className="text-xs font-mono text-gray-600 mb-1">TECH STACK</h4>
                <ul className="space-y-1">
                  {project.tags.map((tag, i) => (
                    <li key={i} className="text-gray-900">{tag}</li>
                  ))}
                </ul>
              </div>
              
              <div 
                className="p-4 rounded-xl"
                style={{
                  background: 'rgba(0, 0, 0, 0.05)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                <h4 className="text-xs font-mono text-gray-600 mb-1">FEATURES</h4>
                <ul className="space-y-1">
                  <li className="text-gray-900">Responsive Design</li>
                  <li className="text-gray-900">Performance Optimized</li>
                  <li className="text-gray-900">Modern UI/UX</li>
                  <li className="text-gray-900">Scalable Architecture</li>
                </ul>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              {project.Livelink && (
                <a 
                  href={project.Livelink.startsWith('http') ? project.Livelink : `https://${project.Livelink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-black text-white font-bold hover:bg-gray-800 transition-colors">
                    View Live Demo
                  </button>
                </a>
              )}
              {project.Github && (
                <a 
                  href={project.Github.startsWith('http') ? project.Github : `https://${project.Github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-transparent border border-black/30 text-black hover:bg-black/10 transition-colors">
                    Github
                  </button>
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(4);
  
  const filteredProjects = selectedCategory === 'All' 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);
  
  const projectsToShow = filteredProjects.slice(0, visibleProjects);
  
  const loadMore = () => {
    setVisibleProjects(prev => prev + 2);
  };

  return (
    <div className="min-h-full bg-white px-4 sm:px-6 py-12 md:py-24 relative">
      <BubbleBackground />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-24"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 leading-relaxed tracking-wide sea">
            Project Portfolio
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto tracking-wide leading-relaxed">
            Cutting-edge solutions with immersive interfaces and advanced technologies
          </p>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12 md:mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setVisibleProjects(4);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all sea duration-300 ${
                selectedCategory === category
                  ? 'bg-black text-white'
                  : 'bg-white text-gray-800 hover:bg-gray-100 backdrop-blur-sm border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {projectsToShow.map((project, index) => (
            <div key={index} className="project-card">
              <ProjectCard 
                project={project} 
                index={index}
                onClick={() => setSelectedProject(project)}
              />
            </div>
          ))}
        </div>
        
        {visibleProjects < filteredProjects.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <button 
              onClick={loadMore}
              className="relative overflow-hidden group px-8 py-3 rounded-full border border-black/20 text-black hover:bg-black/10 hover:text-white transition-colors backdrop-blur-sm sea"
            >
              <span className="relative z-10 flex items-center gap-2">
                Load More Projects
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </span>
              <span className="absolute inset-0 bg-black -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
            </button>
          </motion.div>
        )}
      </div>
      
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}