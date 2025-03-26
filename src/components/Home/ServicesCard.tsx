
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
        return <Building className="w-12 h-12 text-vetor-green" />;
      case 'file-text':
        return <FileText className="w-12 h-12 text-vetor-green" />;
      case 'truck':
        return <Truck className="w-12 h-12 text-vetor-green" />;
      case 'code':
        return <Code className="w-12 h-12 text-vetor-green" />;
      default:
        return <Code className="w-12 h-12 text-vetor-green" />;
    }
  };

  return (
    <div className="relative h-full overflow-hidden rounded-xl border border-vetor-green/20 bg-black shadow-lg hover:border-vetor-green/40 hover:shadow-[0_0_15px_rgba(0,176,80,0.15)] transition-all duration-300">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-[10%] left-[10%] w-8 h-8 rounded-full bg-vetor-green/20"></div>
        <div className="absolute bottom-[20%] right-[15%] w-6 h-6 rounded-full bg-vetor-green/20"></div>
        <div className="absolute top-[40%] right-[10%] w-4 h-4 rounded-full bg-vetor-green/20"></div>
      </div>
      
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
