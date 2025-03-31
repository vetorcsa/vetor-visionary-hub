
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useIsMobile } from '@/hooks/use-mobile';

interface PricingFeature {
  text: string;
}

interface PricingCardProps {
  title: string;
  price: string;
  features: PricingFeature[];
  recommended?: boolean;
  onContact: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  title, 
  price, 
  features, 
  recommended = false,
  onContact 
}) => {
  const isMobile = useIsMobile();
  
  return (
    <Card variant="dark" className="relative overflow-hidden border-vetor-green/20 hover:border-vetor-green/50 transition-all duration-300">
      <div className="absolute top-0 right-0 w-16 md:w-24 h-16 md:h-24 bg-vetor-green/10 rounded-bl-full"></div>
      <CardHeader className="p-3 md:p-4">
        {recommended && (
          <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-1 self-start text-xs">
            Recomendado
          </Badge>
        )}
        <CardTitle variant="dark" className="text-lg md:text-xl">{title}</CardTitle>
        <p className="text-xl md:text-2xl font-bold text-white mt-2">R$ {price}<span className="text-sm md:text-base text-white/60">/projeto</span></p>
      </CardHeader>
      <CardContent className="space-y-2 md:space-y-3 p-3 md:p-4 pt-0 md:pt-0">
        <ul className="space-y-1.5 md:space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="rounded-full bg-vetor-green/20 p-1 mr-2 mt-0.5 flex-shrink-0">
                <svg className="h-2 w-2 text-vetor-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-xs md:text-sm text-white/80">{feature.text}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-3 md:p-4 pt-1 md:pt-2">
        <Button 
          onClick={onContact}
          className="w-full bg-gradient-to-r from-vetor-green to-vetor-darkgreen hover:from-vetor-darkgreen hover:to-vetor-green text-white text-xs md:text-sm py-2"
        >
          Contratar via WhatsApp
        </Button>
      </CardFooter>
    </Card>
  );
};

export default React.memo(PricingCard);
