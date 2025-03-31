
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
      <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-vetor-green/10 rounded-bl-full"></div>
      <CardHeader className="p-4 md:p-6">
        {recommended && (
          <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-1 self-start text-xs md:text-sm">
            Recomendado
          </Badge>
        )}
        <CardTitle variant="dark" className="text-xl md:text-2xl">{title}</CardTitle>
        <p className="text-2xl md:text-3xl font-bold text-white mt-3 md:mt-4">R$ {price}<span className="text-base md:text-lg text-white/60">/projeto</span></p>
      </CardHeader>
      <CardContent className="space-y-3 md:space-y-4 p-4 md:p-6 pt-0 md:pt-0">
        <ul className="space-y-2 md:space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="rounded-full bg-vetor-green/20 p-1 mr-2 md:mr-3 mt-1 flex-shrink-0">
                <svg className="h-2 w-2 md:h-3 md:w-3 text-vetor-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-sm md:text-base text-white/80">{feature.text}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="p-4 md:p-6 pt-2 md:pt-2">
        <Button 
          onClick={onContact}
          className="w-full bg-gradient-to-r from-vetor-green to-vetor-darkgreen hover:from-vetor-darkgreen hover:to-vetor-green text-white text-sm md:text-base py-2 md:py-3"
        >
          Contratar via WhatsApp
        </Button>
      </CardFooter>
    </Card>
  );
};

export default React.memo(PricingCard);
