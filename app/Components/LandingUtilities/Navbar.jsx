'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { MdOutlineMailOutline } from "react-icons/md";
import { GrLinkedin } from "react-icons/gr";
import { IoLogoWhatsapp } from "react-icons/io5";
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('../../About/page'), {
  loading: () => <p>Loading...</p>,
  ssr: false, 
});


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 transition-all duration-500 z-50 
        ${scrolled ? 'bg-white/90 shadow-lg max-w-5xl rounded-full px-6' : 'bg-transparent max-w-auto container mx-auto px-8'}
        w-full mx-auto text-black py-3`}
    >
      <div className="flex items-center justify-between">
              <div className="text-xl font-bold sea">
          <Link href="/">N<span className='text-[#b5ff6d]'>B</span></Link>
        </div>
        <div className="hidden md:flex space-x-6 text-sm font-medium sea text-xs">
          <Link href="/About" prefetch={true} className="hover:text-[#b5ff6d] transition-all leading-relaxed tracking-wide">About</Link>
          <Link href="/Projects" className="hover:text-[#b5ff6d] transition-all leading-relaxed tracking-wide">Projects</Link>
          <Link href="/Serv" className="hover:text-[#b5ff6d] transition-all leading-relaxed tracking-wide">Services</Link>
          <Link href="/Contact" className="hover:text-[#b5ff6d] transition-all leading-relaxed tracking-wide">Contact</Link>
        </div>
        <div className="hidden md:block">
        <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="inline-block bg-black text-white text-sm font-medium px-6 py-2 rounded-full hover:scale-105 transition sea text-xs "
      >
        Connect Me
      </button>

      {open && (
        <div className="absolute mt-2 right-0 bg-white rounded-lg shadow-lg w-48 z-50 text-xs sea">
          <a
            href="mailto:nidinbose700@gmail.com"
            className="block flex items-center gap-2 px-4 py-2 text-gray-800 hover:bg-gray-100"
          >
           <MdOutlineMailOutline/> Email
          </a>
          <a
            href="https://wa.me/917012543724"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 flex items-center gap-2 py-2 text-gray-800 hover:bg-gray-100"
          >
           <IoLogoWhatsapp/> WhatsApp
          </a>
          <a
            href="https://www.linkedin.com/in/nidin-bose-37b305308"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-4 py-2 flex items-center gap-2 text-gray-800 hover:bg-gray-100"
          >
           <GrLinkedin/> LinkedIn
          </a>
        </div>
      )}
    </div>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-3 md:hidden bg-black text-white rounded-xl shadow-lg flex flex-col items-center space-y-4 py-6 sea text-sm"
          >
            <Link href="/About" onClick={() => setIsOpen(false)} className="hover:text-[#b5ff6d] leading-relaxed tracking-wide">About</Link>
            <Link href="/Projects" onClick={() => setIsOpen(false)} className="hover:text-[#b5ff6d]">Projects</Link>
            <Link href="/Service" onClick={() => setIsOpen(false)} className="hover:text-[#b5ff6d]">Services</Link>
            <Link href="/Contact" onClick={() => setIsOpen(false)} className="hover:text-[#b5ff6d]">Contact</Link>
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-[#b5ff6d] text-black px-4 py-2 rounded-full"
            >
              Connect Me
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
