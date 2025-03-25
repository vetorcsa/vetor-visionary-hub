
import React from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import { Code, FileText, Building, Truck, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServicesCardProps {
  serviceId: string;
}

const ServicesCard: React.FC<ServicesCardProps> = ({ serviceId }) => {
  const { services } = useAdmin();
  
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
