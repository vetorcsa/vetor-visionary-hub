
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon: Icon, title, description }) => {
  const isMobile = useIsMobile();
  
  return (
    <motion.div 
      className="glass-card p-3 md:p-6 rounded-xl hover-card w-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="bg-vetor-green/10 p-2 rounded-lg inline-block mb-2">
        <Icon className="h-4 w-4 md:h-6 md:w-6 text-vetor-green" />
      </div>
      <h3 className="text-sm md:text-lg font-bold text-white mb-1 md:mb-2">{title}</h3>
      <p className="text-xs md:text-sm text-white/70 leading-tight md:leading-normal">{description}</p>
    </motion.div>
  );
};

export default React.memo(BenefitCard);
