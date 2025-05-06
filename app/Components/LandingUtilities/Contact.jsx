'use client';

import { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { RiGeminiFill } from "react-icons/ri";
import { GoArrowUpRight, GoArrowRight } from 'react-icons/go';
import { ImWhatsapp } from "react-icons/im";
import SplitText from "../Engine/SplitText";
import BlurText from "../Engine/BlurText";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Contact() {
  const form = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_5xke6am',     
      'template_sg6n80b',  
      form.current,
      '7QgTAuMfgQl7Y_3Y0' 
    ).then(
      (result) => {
        alert("Message sent successfully!");
      },
      (error) => {
        alert("Failed to send message. Please try again.");
      }
    );
  };
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
    AOS.refresh();
  }, []);

  return (
    <div className="min-h-full bg-white text-white max-w-7xl mx-auto mt-12 p-4 xl:p-0">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div className="text-neutral-900 font-bold leading-tight space-y-2 md:text-4xl text-2xl absolute" data-aos="fade-in">
          <h1 className="flex items-center gap-3">
            <span className="text-5xl text-[#b5ff6d]">
              <RiGeminiFill />
            </span>
            <SplitText
              text="CONNECT ME !"
              className="font-bold text-black sea "
              delay={150}
              animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
              animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
            />
          </h1>
        </div>
      </div>

      <div className="flex flex-col items-end w-full mb-12">
        <div className="w-full text-left md:text-right">
          <p className="text-xs md:text-base text-black p-2" data-aos="fade-up">
            EXPLORE ALL THE PROJECTS TO SEE THE STACK, <br />
            DEPENDENCIES, CODES, GITHUB LINK, LIVE <br />
            <span>AND EXPLORE MORE YOU NEED TO SEE</span>
          </p>
        </div>
        <button className="h-16 w-16 md:h-20 md:w-20 mt-6 rounded-full border text-black hover:bg-[#b5ff6d] transition-all duration-300 text-xl font-bold group relative overflow-hidden" data-aos="zoom-in">
          <div className="flex items-center justify-center">
            <GoArrowUpRight className="transition-all duration-300 group-hover:-translate-x-4 group-hover:opacity-0" />
            <GoArrowRight className="absolute transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-4" />
          </div>
        </button>
      </div>

      <hr className="border-gray-300 mb-10" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
               <div className="space-y-6 p-2 sea" data-aos="fade-right">
          <a href="https://wa.me/917012543724">
          <div className="rounded-2xl p-4 md:p-6 bg-gradient-to-tr from-[#b5ff6d] via-[#b5ff6d] to-[#b5ff6d] w-full">
            <h1 className="text-2xl lg:text-4xl font-bold text-black mb-4 leading-relaxed tracking-wide">
              Let’s Work Together
            </h1>
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 text-black">
              <ImWhatsapp className="text-3xl md:text-4xl" />
              <p className="text-sm lg:text-lg xl:text-2xl font-medium">
                HAVE ANY WORK? JUST SAY "HI"
              </p>
            </div>
          </div>
          </a>
          <div className="rounded-2xl overflow-hidden p-2 mt-4" data-aos="flip-left">
            <iframe
              title="Koramangala, Bengaluru Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.0793092596884!2d77.61654887490584!3d12.935192787375845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144a5a0e4ae1%3A0xf3d3fc6014c5dbf3!2sKoramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1714726123456!5m2!1sen!2sin"
              width="100%"
              height="300"
              loading="lazy"
              className="border-0 w-full h-96"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="bg-[#b5ff6d] shadow-xl p-6 rounded-2xl space-y-4" data-aos="fade-left">
          <div>
            <label className="block text-sm mb-1 text-black sea">Name</label>
            <input name="user_name" type="text" placeholder="Name" className="w-full bg-white border-black p-3 rounded-md border text-black sea outline-none" />
          </div>

          <div>
            <label className="block text-sm mb-1 text-black sea">Email</label>
            <input name="user_email" type="email" placeholder="Email" className="w-full bg-white p-3 rounded-md border border-gray-700 text-black sea outline-none" />
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm mb-1 sea text-black">Phone Number</label>
              <input name="user_phone" type="text" placeholder="Phone Number" className="w-full bg-white p-3 sea rounded-md border border-gray-700 text-black outline-none" />
            </div>
            <div className="flex-1">
              <label className="block text-sm mb-1 text-black sea">Website (Optional)</label>
              <input name="user_website" type="text" placeholder="Website" className="w-full bg-white p-3 sea rounded-md border border-gray-700 text-black outline-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1 sea text-black">Message</label>
            <textarea name="message" placeholder="Message" rows={4} className="w-full bg-white p-3 sea rounded-md border border-gray-700 text-black outline-none" />
          </div>

          <button type="submit" className="w-full p-3 rounded-full bg-black sea text-white font-semibold hover:opacity-90 transition">
            SUBMIT
          </button>
        </form>
      </div>

    
      <div className="mt-10 max-w-6xl mx-auto flex flex-wrap justify-center gap-6" data-aos="zoom-in">
  <a
    href="https://www.facebook.com/yourprofile"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#1a1a1a] p-4 rounded-xl text-xl text-white hover:bg-[#3b5998] transition-colors duration-300"
  >
    <FaFacebookF />
  </a>
  <a
    href="https://www.instagram.com/nidinbose_?igsh=cXhmdHN2bG1wNGU0"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#1a1a1a] p-4 rounded-xl text-xl text-white hover:bg-[#e1306c] transition-colors duration-300"
  >
    <FaInstagram />
  </a>
  <a
    href="https://wa.me/917012543724" 
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#1a1a1a] p-4 rounded-xl text-xl text-white hover:bg-[#25D366] transition-colors duration-300"
  >
    <ImWhatsapp />
  </a>
  <a
    href="https://www.linkedin.com/in/nidin-bose-37b305308"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#1a1a1a] p-4 rounded-xl text-xl text-white hover:bg-[#0077b5] transition-colors duration-300"
  >
    <FaLinkedinIn />
  </a>
</div>
<div className="text-sm text-black mt-8 animate-bounce sea text-end">Scroll down ↓</div>

    </div>
  );
}
