'use client'

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-black py-16 px-4 md:mb-[22vh] lg:mb-[35vh] xl:mb-2">
      <div className="max-w-7xl mx-auto text-center">
     
        <div className="bg-white rounded-3xl shadow-2xl px-6 py-12">
          <div className="mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-sm font-medium bg-[#b5ff6d] text-gray-500 sea">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Available for work
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-semibold mb-6 leading-relaxed tracking-wide sea">
            Let's create your
          </h1>
          <h1 className="text-3xl md:text-4xl font-semibold mb-6 leading-relaxed tracking-wide sea">
           next big idea.
          </h1>
          <a
            href="https://wa.me/917012543724"
            className="inline-block bg-black text-white text-sm font-medium px-6 py-3 rounded-full hover:scale-105 transition sea"
          >
            Contact Me
          </a>
        </div>
             <div className="mt-10">
          <div className="flex justify-center space-x-6 text-xl text-gray-700">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="mailto:youremail@example.com"><FaEnvelope /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Nidinbose All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
