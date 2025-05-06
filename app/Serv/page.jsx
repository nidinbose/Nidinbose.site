'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Website Development",
    description: "Build fast, responsive, and SEO-friendly websites tailored to your business goals.",
    icon: "🌐",
    features: ["Custom CMS", "E-commerce", "SEO Optimized", "Fast Loading"]
  },
  {
    title: "Application Development",
    description: "Develop scalable and high-performance applications for web, mobile, and desktop platforms.",
    icon: "📱",
    features: ["Cross-platform", "API Integration", "Real-time Updates", "Scalable"]
  },
  {
    title: "Logo Designing",
    description: "Craft unique and memorable logos that capture your brand's identity and values.",
    icon: "🎨",
    features: ["Vector Files", "Brand Guidelines", "Multiple Concepts", "Unlimited Revisions"]
  },
  {
    title: "Graphic Designing",
    description: "Design visually compelling graphics for marketing, branding, and digital content.",
    icon: "✏️",
    features: ["Social Media Kits", "Print Materials", "Infographics", "Brand Assets"]
  },
  {
    title: "UI/UX Designing",
    description: "Create user-centered designs that enhance usability, accessibility, and user satisfaction.",
    icon: "🧑‍💻",
    features: ["Wireframing", "Prototyping", "User Testing", "Design Systems"]
  },
  {
    title: "AWS",
    description: "Leverage the power of AWS cloud solutions for secure, scalable, and reliable infrastructure.",
    icon: "☁️",
    features: ["Cloud Migration", "Serverless", "DevOps", "Cost Optimization"]
  }
];

export default function Serv() {
  const [activeService, setActiveService] = useState(0);
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <div className="min-h-full bg-white text-white p-8 font-sans relative overflow-hidden max-w-7xl mx-auto">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#b5ff6d] opacity-10"
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>

      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="header-section mb-12 relative z-10"
      >
        <div className="flex items-center gap-4 mb-6 mt-12">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#b5ff6d] to-transparent"></div>
          <h2 className="text-black sea text-sm uppercase tracking-widest">What We Offer</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#b5ff6d] to-transparent"></div>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-black sea">
          Our <span className="text-black sea">Services</span>
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          Innovative digital solutions crafted to elevate your business in the modern landscape
        </p>
      </motion.div>
      
      {/* Services Grid */}
      <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12 relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`service-card group relative overflow-hidden rounded-2xl border border-gray-800 bg-black p-6 cursor-pointer transition-all duration-300
              ${activeService === index ? 'border-[#b5ff6d] shadow-lg shadow-[#b5ff6d]/20' : 'hover:border-[#b5ff6d]/50'}`}
            onClick={() => setActiveService(index)}
            onMouseEnter={() => setHoveredService(index)}
            onMouseLeave={() => setHoveredService(null)}
          >
            {/* Card Background Effect */}
            <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#b5ff6d]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${hoveredService === index ? 'opacity-100' : ''}`}></div>
            
            {/* Card Content */}
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-start justify-between mb-6">
                <div className="service-icon text-4xl p-3 rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700 group-hover:border-[#b5ff6d]/30 transition-colors">
                  {service.icon}
                </div>
                <div className={`badge px-3 py-1 text-xs rounded-full ${activeService === index ? 'bg-[#b5ff6d] text-gray-900 font-bold' : 'bg-gray-800 text-gray-300'}`}>
                  {index + 1}/{services.length}
                </div>
              </div>
              
              <h3 className="service-title text-xl font-bold mb-2 group-hover:text-[#b5ff6d] transition-colors">
                {service.title}
              </h3>
              <p className="service-description text-gray-400 text-sm mb-4 flex-grow">
                {service.description}
              </p>
              
              <div className="mt-auto">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent my-3"></div>
                <div className="flex flex-wrap gap-2">
                  {service.features.slice(0, 3).map((feature, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded bg-gray-800/50 text-gray-300">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Active Service Display */}
      <motion.div 
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
  className="active-service-display my-16 relative z-10"
>
  <div className="holographic-display relative bg-black rounded-2xl p-8 max-w-5xl mx-auto overflow-hidden">
    {/* Glow effect */}
    {/* <div className="absolute -inset-2 bg-[#b5ff6d]/10 rounded-xl blur-xl pointer-events-none"></div> */}
    
    {/* Grid pattern */}
    <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)]">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[center_top] opacity-[0.02]"></div>
    </div>
    
    <div className="relative z-10">
      <div className="flex items-center flex-col md:flex-row gap-4 mb-6">
        <div className="text-4xl text-start">🌐</div>
        <div>
          <h2 className="text-2xl font-bold text-[#b5ff6d] sea">Web Development</h2>
          <p className="text-gray-400 text-sm">Full-stack Solutions</p>
        </div>
      </div>
      
      <p className="text-gray-300 text-lg mb-8 max-w-3xl">
        We build performant, scalable web applications using modern technologies tailored to your business requirements. Our solutions are optimized for speed, security, and seamless user experiences across all devices.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="tech-stack-section p-4 bg-gray-800/30 rounded-lg border border-gray-700">
          <h4 className="font-medium text-[#b5ff6d] mb-3 sea">Frontend Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'GSAP', 'Framer Motion'].map((tech, i) => (
              <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-gray-800 text-gray-300 border border-gray-700">
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="tech-stack-section p-4 bg-gray-800/30 rounded-lg border border-gray-700">
          <h4 className="font-medium text-[#b5ff6d] mb-3 sea">Backend Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {['Mongodb','Express','Node.js', 'React.js', 'Next.js', 'SQL', 'Docker','Kubernetis','Kafka', 'Firebase'].map((tech, i) => (
              <span key={i} className="text-xs px-3 py-1.5 rounded-full bg-gray-800 text-gray-300 border border-gray-700">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            title: "Custom Web Applications",
            description: "Tailored solutions for your specific business needs",
            icon: "💻"
          },
          {
            title: "E-Commerce Solutions",
            description: "Secure online stores with payment integrations",
            icon: "🛒"
          },
          {
            title: "API Development",
            description: "RESTful and GraphQL endpoints for your data",
            icon: "🔌"
          },
          {
            title: "Performance Optimization",
            description: "90+ Lighthouse scores guaranteed",
            icon: "⚡"
          },
          {
            title: "Progressive Web Apps",
            description: "Native-like experiences on the web",
            icon: "📱"
          },
          {
            title: "Web Accessibility",
            description: "WCAG 2.1 compliant interfaces",
            icon: "♿"
          }
        ].map((feature, i) => (
          <div key={i} className="flex items-start gap-3 p-4 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-[#b5ff6d]/30 transition-colors sea">
            <div className="text-2xl text-[#b5ff6d]">{feature.icon}</div>
            <div>
              <h4 className="font-medium">{feature.title}</h4>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm text-gray-400">
          <span className="text-[#b5ff6d]">✓</span> All projects include free 3-month maintenance
        </div>
        <div className="flex gap-3">
         
        </div>
      </div>
    </div>
  </div>
</motion.div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none sea">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#b5ff6d]"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.3 + 0.1,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 50],
              x: [0, (Math.random() - 0.5) * 50],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        ))}
      </div>
    </div>
  );
}