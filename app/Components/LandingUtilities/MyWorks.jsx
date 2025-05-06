'use client';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';
import { GoArrowUpRight, GoArrowRight } from 'react-icons/go';
import { RiGeminiFill } from 'react-icons/ri';
import SplitText from '../Engine/SplitText';
import BlurText from '../Engine/BlurText';

const products = [
  {
    image: './Images/Sant1.png',
    title: 'SANTICS  _____ E-COMMERCE',
    label: 'WEB DEVELOPMENT',
  },
  {
    image: '/Images/Ai.png',
    title: 'HEXSPIN__CODES__AI',
    label: 'WEBSITE DEVELOPMENT',
  },
  {
    image: '/Images/Hx1.png',
    title: 'HEXSPIN__TECHNOLOGY__SERVICES',
    label: 'WEBSITE DEVELOPMENT',
  },
  {
    image: './Images/G1.png',
    title: 'OWN__CREATION',
    label: 'GRAPHIC DESIGNING',
  },
  {
    image: '/Images/U1.png',
    title: 'MOCHA__MATE',
    label: 'UI/UX DESIGNING',
  },
  {
    image: '/Images/L2.png',
    title: 'LUXURY__MAVEN',
    label: 'LOGO DESIGNING',
  },
];

export default function MyWorks() {
  const [hoveringIndex, setHoveringIndex] = useState(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <Link href={`/Projects`}>
    <div className="container mx-auto max-w-7xl px-4 py-12 bg-white mt-12 relative" data-aos="fade-up">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 mb-5">
        <div className="text-neutral-900 font-bold leading-tight space-y-2 md:text-4xl text-2xl absolute ">
          <h1 className="flex items-center gap-3">
            <span className="text-5xl text-[#b5ff6d]">
              <RiGeminiFill />
            </span>
            <BlurText
              text="LATEST PROJECTS"
              className="font-bold text-black sea "
              delay={100}
              animateBy="words"
              direction="top"
            />
          </h1>
        </div>
      </div>

      <div className="flex flex-col items-end w-full mb-12 mt-6" data-aos="fade-up" data-aos-delay="200">
        <div className="w-full text-left md:text-right">
          <BlurText
            text="EXPLORE ALL THE PROJECTS TO SEE THE STACK DEPENDANCIES, CODES, GITHUB_LINK, LIVE AND EXPLORE MORE YOU NEED TO SEE "
            delay={100}
            animateBy="words"
            direction="right"
            className="text-xs md:text-base max-w-md text-end mt-5"
          />
        </div>
        <button className="h-16 w-16 md:h-20 md:w-20 mt-6 rounded-full border text-black hover:bg-[#b5ff6d] transition-all duration-300 text-xl font-bold group relative overflow-hidden">
          <div className="flex items-center justify-center">
            <GoArrowUpRight className="transition-all duration-300 group-hover:-translate-x-4 group-hover:opacity-0" />
            <GoArrowRight className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4" />
          </div>
        </button>
      </div>

      <hr className="border-gray-300 mb-10" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 gap-y-10">
        {products.map((item, index) => (
          <div
            key={index}
            className="bg-black p-4 relative group cursor-crosshair rounded-xl"
            onMouseEnter={() => setHoveringIndex(index)}
            onMouseLeave={() => setHoveringIndex(null)}
            onMouseMove={handleMouseMove}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            {item.label && (
              <div className="absolute top-4 right-4 bg-white text-sm px-3 py-1 rounded shadow text-black text-xs sea">
                {item.label}
              </div>
            )}

            <img
              src={item.image}
              alt={item.title}
              className="mx-auto mb-6 object-cover w-auto h-96"
            />

            <div className="flex justify-between items-center text-sm text-neutral-800">
              <span className="font-semibold text-white sea">{item.title}</span>
              <span className="text-lg text-white">↗</span>
            </div>

            {hoveringIndex === index && (
              <div
                className="pointer-events-none fixed z-50 flex items-center h-20 w-20 gap-2 px-4 py-2 bg-[#b5ff6d] text-black text-xs font-semibold rounded-full shadow-lg animate-pulse sea"
                style={{
                  top: position.y + 10,
                  left: position.x + 10,
                }}
              >
                Explore
                <svg
                  className="w-3 h-3 fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M7.05 4.55L11.5 9l-4.45 4.45 1.41 1.41L14.33 9l-5.87-5.87-1.41 1.42z" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="text-sm text-black mt-8 animate-bounce sea">Scroll down ↓</div>
    </div>
    </Link>
  );
}
