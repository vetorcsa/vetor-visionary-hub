
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
  return (
    <Card variant="dark" className="relative overflow-hidden border-vetor-green/20 hover:border-vetor-green/50 transition-all duration-300">
      <div className="absolute top-0 right-0 w-32 h-32 bg-vetor-green/10 rounded-bl-full"></div>
      <CardHeader>
        {recommended && (
          <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-1 self-start">
            Recomendado
          </Badge>
        )}
        <CardTitle variant="dark" className="text-2xl">{title}</CardTitle>
        <p className="text-3xl font-bold text-white mt-4">R$ {price}<span className="text-lg text-white/60">/projeto</span></p>
      </CardHeader>
      <CardContent className="space-y-4">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="rounded-full bg-vetor-green/20 p-1 mr-3 mt-1">
                <svg className="h-3 w-3 text-vetor-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span className="text-white/80">{feature.text}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={onContact}
          className="w-full bg-gradient-to-r from-vetor-green to-vetor-darkgreen hover:from-vetor-darkgreen hover:to-vetor-green text-white"
        >
          Contratar via WhatsApp
        </Button>
      </CardFooter>
    </Card>
  );
};

export default React.memo(PricingCard);
