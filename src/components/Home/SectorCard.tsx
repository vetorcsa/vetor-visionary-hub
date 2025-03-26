import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, FileBarChart, Globe, MonitorSmartphone, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  RealEstateAnimation, 
  FiscalAnimation, 
  LogisticsAnimation, 
  CustomTechAnimation 
} from './SectorAnimations';

interface SectorCardProps {
  title: string;
  description: string;
  icon: 'building' | 'file-text' | 'globe' | 'monitor-smartphone';
  animationComponent: 'real-estate' | 'fiscal' | 'logistics' | 'custom-tech';
  primaryAction: {
    link: string;
    text: string;
    variant?: 'default' | 'outline' | 'ghost' | 'link';
  };
  secondaryAction?: {
    link: string;
    text: string;
  };
  hideButtons?: boolean;
}

const SectorCard: React.FC<SectorCardProps> = ({
  title,
  description,
  icon,
  animationComponent,
  primaryAction,
  secondaryAction,
  hideButtons
}) => {
  const renderIcon = () => {
    switch (icon) {
      case 'building':
        return <Building2 className="w-10 h-10 text-vetor-green" />;
      case 'file-text':
        return <FileBarChart className="w-10 h-10 text-vetor-green" />;
      case 'globe':
        return <Globe className="w-10 h-10 text-vetor-green" />;
      case 'monitor-smartphone':
        return <MonitorSmartphone className="w-10 h-10 text-vetor-green" />;
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

  const getSectorLink = (link: string, animationType: string): string => {
    if (link !== "#") return link;
    
    switch (animationType) {
      case 'real-estate':
        return "/planos-imobiliarias";
      case 'fiscal':
        return "/recuperacao-tributaria";
      case 'logistics':
        return "/planos-transportadoras";
      default:
        return link;
    }
  };

  return (
    <Card variant="dark" className="h-full overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,176,80,0.2)] group">
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0">
          {renderAnimation()}
        </div>
        <div className="absolute top-6 left-6 z-10 bg-black/50 p-4 rounded-full backdrop-blur-sm border border-vetor-green/30">
          {renderIcon()}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
      </div>
      
      <CardHeader className="pb-2">
        <CardTitle variant="dark" className="text-2xl">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="text-white/80">
        <p className="mb-4 text-base">{description}</p>
      </CardContent>
      
      {!hideButtons && (
        <CardFooter className="flex flex-wrap gap-3 pt-2 justify-center">
          {primaryAction.variant === 'default' ? (
            <Link to={getSectorLink(primaryAction.link, animationComponent)} className="w-full">
              <Button className="bg-vetor-green hover:bg-vetor-darkgreen text-white border-none flex items-center gap-2 w-full justify-center">
                {primaryAction.text} <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          ) : (
            <Link to={getSectorLink(primaryAction.link, animationComponent)} className="inline-flex items-center gap-2 text-vetor-green hover:text-white bg-vetor-green/10 hover:bg-vetor-green transition-colors px-4 py-2 rounded-md w-full justify-center">
              <span>{primaryAction.text}</span> <ArrowRight className="w-4 h-4" />
            </Link>
          )}
          
          {secondaryAction && (
            <Link to={secondaryAction.link} className="inline-flex items-center gap-2 text-vetor-green hover:text-white bg-vetor-green/10 hover:bg-vetor-green transition-colors px-4 py-2 rounded-md w-full justify-center">
              <span>{secondaryAction.text}</span> <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </CardFooter>
      )}
    </Card>
  );
};

export default SectorCard;
