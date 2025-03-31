
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
      className="glass-card p-4 md:p-6 rounded-xl hover-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="bg-vetor-green/10 p-2 md:p-3 rounded-lg inline-block mb-3">
        <Icon className="h-5 w-5 md:h-6 md:w-6 text-vetor-green" />
      </div>
      <h3 className="text-base md:text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-xs md:text-sm text-white/70">{description}</p>
    </motion.div>
  );
};

export default React.memo(BenefitCard);
