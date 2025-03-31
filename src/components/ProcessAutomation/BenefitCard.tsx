
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
      className="glass-card p-6 md:p-8 rounded-xl hover-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="bg-vetor-green/10 p-3 md:p-4 rounded-lg inline-block mb-4">
        <Icon className="h-6 w-6 md:h-8 md:w-8 text-vetor-green" />
      </div>
      <h3 className="text-lg md:text-xl font-bold text-white mb-3 md:mb-4">{title}</h3>
      <p className="text-sm md:text-base text-white/70">{description}</p>
    </motion.div>
  );
};

export default React.memo(BenefitCard);
