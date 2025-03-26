
import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, FileBarChart, Globe, MonitorSmartphone, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  RealEstateAnimation, 
  FiscalAnimation, 
  LogisticsAnimation, 
  CustomTechAnimation 
} from './SectorAnimations';

interface SecondaryActionProps {
  link: string;
  text: string;
}

interface SectorCardProps {
  title: string;
  description: string;
  icon: 'building' | 'file-text' | 'globe' | 'monitor-smartphone';
  animationComponent: 'real-estate' | 'fiscal' | 'logistics' | 'custom-tech';
  actionLink: string;
  actionText: string;
  buttonVariant?: 'default' | 'outline' | 'ghost' | 'link';
  secondaryAction?: SecondaryActionProps;
}

const SectorCard: React.FC<SectorCardProps> = ({
  title,
  description,
  icon,
  animationComponent,
  actionLink,
  actionText,
  buttonVariant = 'ghost',
  secondaryAction
}) => {
  const renderIcon = () => {
    switch (icon) {
      case 'building':
        return <Building2 className="w-8 h-8 text-vetor-green" />;
      case 'file-text':
        return <FileBarChart className="w-8 h-8 text-vetor-green" />;
      case 'globe':
        return <Globe className="w-8 h-8 text-vetor-green" />;
      case 'monitor-smartphone':
        return <MonitorSmartphone className="w-8 h-8 text-vetor-green" />;
      default:
        return null;
    }
  };

  const renderAnimation = () => {
    switch (animationComponent) {
      case 'real-estate':
        return <RealEstateAnimation />;
      case 'fiscal':
        return <FiscalAnimation />;
      case 'logistics':
        return <LogisticsAnimation />;
      case 'custom-tech':
        return <CustomTechAnimation />;
      default:
        return null;
    }
  };

  return (
    <div className="rounded-xl overflow-hidden bg-black shadow-lg border border-vetor-green/20 transition-all duration-500 hover:border-vetor-green/40 hover:shadow-[0_0_20px_rgba(0,176,80,0.15)] group h-[400px] relative">
      <div className="h-[200px] bg-black relative overflow-hidden">
        {renderAnimation()}
        <div className="absolute top-6 left-6 z-10 bg-vetor-green/10 p-3 rounded-full">
          {renderIcon()}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </div>
      
      <div className="p-8 relative z-10 flex flex-col h-[200px]">
        <h3 className="text-2xl font-bold text-vetor-green mb-4">{title}</h3>
        <p className="text-white/80 mb-6 flex-grow">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-3 mt-auto">
          {buttonVariant === 'default' ? (
            <Link to={actionLink}>
              <Button className="bg-vetor-green hover:bg-vetor-darkgreen text-white border-none">
                {actionText}
              </Button>
            </Link>
          ) : (
            <Link to={actionLink} className="inline-flex items-center gap-2 text-vetor-green hover:text-white bg-vetor-green/10 hover:bg-vetor-green transition-colors px-4 py-2 rounded-md">
              <span>{actionText}</span> <ChevronRight className="w-5 h-5" />
            </Link>
          )}
          
          {secondaryAction && (
            <Link to={secondaryAction.link} className="inline-flex items-center gap-2 text-vetor-green hover:text-white bg-vetor-green/10 hover:bg-vetor-green transition-colors px-4 py-2 rounded-md">
              <span>{secondaryAction.text}</span> <ChevronRight className="w-5 h-5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectorCard;
