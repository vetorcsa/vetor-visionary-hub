
import React, { useEffect, useRef } from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import { Code, FileText, Building, Truck, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServicesCardProps {
  serviceId: string;
}

const ServicesCard: React.FC<ServicesCardProps> = ({ serviceId }) => {
  const { services } = useAdmin();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const service = services.find(s => s.id === serviceId);
  
  if (!service) return null;
  
  // Map the icon based on the service type
  const getIcon = () => {
    switch (service.icon) {
      case 'building':
        return (
          <div className="relative">
            <Building className="w-12 h-12 text-vetor-green" />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-vetor-green rounded-full opacity-20"></div>
          </div>
        );
      case 'file-text':
        return (
          <div className="relative">
            <FileText className="w-12 h-12 text-vetor-green" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-vetor-green rounded-full opacity-20"></div>
          </div>
        );
      case 'truck':
        return (
          <div className="relative">
            <Truck className="w-12 h-12 text-vetor-green" />
            <div className="absolute -top-1 -left-1 w-3 h-3 bg-vetor-green rounded-full opacity-20"></div>
          </div>
        );
      case 'code':
        return (
          <div className="relative">
            <Code className="w-12 h-12 text-vetor-green" />
            <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-vetor-green rounded-full opacity-20"></div>
          </div>
        );
      default:
        return <Code className="w-12 h-12 text-vetor-green" />;
    }
  };

  // Simple, minimalist animation effect using Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Adjust canvas size to match parent container
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create array to hold the particles
    const particles = [];
    const particleCount = 15; // Small number of particles for a minimalist look

    // Initialize particles with random positions
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5, // Very small particles
        vx: (Math.random() - 0.5) * 0.3, // Slow movement
        vy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.25 + 0.05 // Very subtle opacity
      });
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach(particle => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap particles around canvas
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 176, 80, ${particle.opacity})`;
        ctx.fill();
      });

      // Draw 2-3 connecting lines between nearby particles for tech network effect
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Only connect particles that are close to each other
          if (distance < 50) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            // Very faint lines
            ctx.strokeStyle = `rgba(0, 176, 80, ${0.03 * (1 - distance/50)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    const animationFrame = requestAnimationFrame(animate);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  // Function to generate random floating elements
  const renderFloatingElements = () => {
    // Generate 4-6 random elements with different positions
    const elements = [];
    const shapes = ['square', 'circle', 'diamond'];
    
    for (let i = 0; i < Math.floor(Math.random() * 3) + 4; i++) {
      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      const size = Math.floor(Math.random() * 12) + 8; // 8-20px
      const top = Math.floor(Math.random() * 80) + 10; // 10-90%
      const left = Math.floor(Math.random() * 80) + 10; // 10-90%
      const opacity = (Math.random() * 0.2) + 0.05; // 0.05-0.25
      const rotation = Math.floor(Math.random() * 45); // 0-45deg
      
      elements.push(
        <div 
          key={i}
          className={`absolute ${
            shape === 'square' ? 'rounded-sm' : 
            shape === 'circle' ? 'rounded-full' : 
            'transform rotate-45'
          }`}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${top}%`,
            left: `${left}%`,
            backgroundColor: '#00B050',
            opacity: opacity,
            transform: `rotate(${rotation}deg)`,
            zIndex: 0
          }}
        />
      );
    }
    
    return elements;
  };

  return (
    <div className="relative h-full overflow-hidden rounded-xl border border-vetor-green/20 bg-black shadow-lg">
      {/* Canvas for tech animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
      />
      
      {/* Floating background elements */}
      {renderFloatingElements()}
      
      {/* Main content */}
      <div className="relative z-10 p-6 h-full flex flex-col">
        <div className="mb-6">
          {getIcon()}
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-vetor-green">
          {service.title}
        </h3>
        
        <p className="text-white/80 mb-6 flex-grow">
          {service.description}
        </p>
        
        <Link 
          to="/sobre" 
          className="inline-flex items-center text-vetor-green hover:text-vetor-lightgreen transition-colors duration-300 mt-auto"
        >
          Saiba mais <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServicesCard;
