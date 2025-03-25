
import React, { useState } from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import { Code, FileText, Building, Truck } from 'lucide-react';

interface ServicesCardProps {
  serviceId: string;
}

const ServicesCard: React.FC<ServicesCardProps> = ({ serviceId }) => {
  const { services } = useAdmin();
  const [isHovered, setIsHovered] = useState(false);
  
  const service = services.find(s => s.id === serviceId);
  
  if (!service) return null;
  
  let IconComponent;
  
  switch (service.icon) {
    case 'building':
      IconComponent = <Building className={`w-12 h-12 ${isHovered ? 'text-white' : 'text-vetor-green'} transition-colors duration-300`} />;
      break;
    case 'file-text':
      IconComponent = <FileText className={`w-12 h-12 ${isHovered ? 'text-white' : 'text-vetor-green'} transition-colors duration-300`} />;
      break;
    case 'truck':
      IconComponent = <Truck className={`w-12 h-12 ${isHovered ? 'text-white' : 'text-vetor-green'} transition-colors duration-300`} />;
      break;
    case 'code':
      IconComponent = <Code className={`w-12 h-12 ${isHovered ? 'text-white' : 'text-vetor-green'} transition-colors duration-300`} />;
      break;
    default:
      IconComponent = <Code className={`w-12 h-12 ${isHovered ? 'text-white' : 'text-vetor-green'} transition-colors duration-300`} />;
  }

  return (
    <div 
      className={`relative overflow-hidden h-full rounded-xl shadow-md transition-all duration-300 ease-in-out ${
        isHovered ? 'bg-vetor-green text-white' : 'bg-white text-black bg-opacity-80 hover:bg-vetor-green hover:bg-opacity-10'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-6 h-full flex flex-col">
        <div className="mb-4">
          {IconComponent}
        </div>
        <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
          isHovered ? 'text-white' : 'text-vetor-darkgray'
        }`}>
          {service.title}
        </h3>
        <p className={`transition-colors duration-300 ${
          isHovered ? 'text-white' : 'text-vetor-darkgray'
        }`}>
          {service.description}
        </p>
        
        {/* Animated element */}
        <div className={`absolute ${isHovered ? '-bottom-2 -right-2' : '-bottom-20 -right-20'} w-32 h-32 bg-vetor-lightgreen bg-opacity-20 rounded-full transition-all duration-500 ease-in-out`}></div>
        <div className={`absolute ${isHovered ? '-top-2 -left-2' : '-top-20 -left-20'} w-20 h-20 bg-vetor-lightgreen bg-opacity-10 rounded-full transition-all duration-500 ease-in-out`}></div>
      </div>
    </div>
  );
};

export default ServicesCard;
