'use client'
import { useState } from 'react';
const services = [
    {
      title: "AI Integration",
      description: "Seamlessly integrate cutting-edge AI solutions into your business processes for enhanced efficiency and decision-making.",
      icon: "🤖"
    },
    {
      title: "Quantum Computing",
      description: "Prepare your organization for the next computing revolution with our quantum-ready solutions.",
      icon: "⚛️"
    },
    {
      title: "Cyber Security",
      description: "Advanced protection systems with real-time threat detection and neutralization capabilities.",
      icon: "🔒"
    },
    {
      title: "Blockchain Solutions",
      description: "Decentralized, secure, and transparent systems tailored to your specific needs.",
      icon: "⛓️"
    },
    {
      title: "AR/VR Development",
      description: "Immersive experiences that bridge the digital and physical worlds for your customers.",
      icon: "👓"
    },
    {
      title: "Neural Networks",
      description: "Custom deep learning models that adapt and evolve with your business requirements.",
      icon: "🧠"
    }
  ];
export default function Serv() {
  const [activeService, setActiveService] = useState(0);

 

  return (
    <div className="min-h-full bg-white text-white p-8 font-sans relative overflow-hidden max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="header-section mb-12">
        <h1 className="futuristic-title flex flex-col text-5xl md:text-6xl font-bold tracking-widest uppercase mb-4">
          <span className="title-part relative z-10 sea">OUR</span>
          <span className="title-part text-[#b5ff6d] relative z-10 drop-shadow-[0_0_10px_#b5ff6d] sea">SERVICES</span>
        </h1>
        <p className="subtitle text-gray-400 text-lg md:text-xl tracking-widest mb-6">
          Innovative solutions for a digital future
        </p>
        <div className="scanline h-px bg-gradient-to-r from-transparent via-[#b5ff6d] to-transparent my-4"></div>
      </div>
      
      {/* Services Grid */}
      <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {services.map((service, index) => (
          <div 
            key={index}
            className={`service-card bg-black bg-opacity-80 border border-gray-700 p-6 rounded-3xl cursor-pointer h-96 transition-all duration-300 relative overflow-hidden 
              ${activeService === index ? 'border-green-500 shadow-lg shadow-green-500/30' : ''}
              hover:-translate-y-1 hover:border-green-500`}
            onClick={() => setActiveService(index)}
            onMouseEnter={() => setActiveService(index)}
          >
            <div className="service-icon text-3xl mb-4">{service.icon}</div>
            <h3 className="service-title text-[#b5ff6d] text-xl md:text-2xl font-semibold mb-2">{service.title}</h3>
            <p className="service-description text-gray-300 text-sm md:text-base leading-relaxed">
              {service.description}
            </p>
            <div className="service-highlight absolute inset-0 bg-[#b5ff6d] opacity-0 hover:opacity-5 transition-opacity"></div>
          </div>
        ))}
      </div>
      
      {/* Active Service Display */}
      <div className="active-service-display my-16">
        <div className="holographic-display relative bg-gray-900 border border-green-500 rounded-lg p-8 max-w-4xl mx-auto overflow-hidden">
          <h2 className="text-2xl md:text-3xl font-bold text-green-500 mb-4">{services[activeService].title}</h2>
          <p className="text-gray-300 text-lg">{services[activeService].description}</p>
          
          {/* Grid Lines */}
          <div className="grid-lines absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i} 
                className="grid-line absolute top-0 bottom-0 w-px bg-green-900 opacity-30"
                style={{ left: `${(i + 1) * 5}%` }}
              ></div>
            ))}
          </div>
          
          {/* Holographic Effect */}
          <div className="holographic-effect absolute -inset-1 bg-gradient-to-br from-green-500/10 to-transparent pointer-events-none"></div>
        </div>
      </div>
      
      {/* Tech Lines */}
      <div className="tech-lines absolute inset-0 pointer-events-none overflow-hidden">
        <div className="line absolute top-0 bottom-0 left-1/4 w-px bg-gradient-to-b from-transparent via-green-500/30 to-transparent"></div>
        <div className="line absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-green-500/30 to-transparent"></div>
        <div className="line absolute top-0 bottom-0 left-3/4 w-px bg-gradient-to-b from-transparent via-green-500/30 to-transparent"></div>
      </div>

      {/* Scanline Animation */}
      <style jsx>{`
        .scanline {
          animation: scan 3s linear infinite;
        }
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}