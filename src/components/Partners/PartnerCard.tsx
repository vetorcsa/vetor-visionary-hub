
import React, { useState } from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import { ExternalLink, ChevronRight, Building, ArrowUpRight } from 'lucide-react';
import CaseStudyModal from './CaseStudyModal';

interface PartnerCardProps {
  partnerId: string;
}

const PartnerCard: React.FC<PartnerCardProps> = ({ partnerId }) => {
  const { partners, caseStudies } = useAdmin();
  const [activeCaseId, setActiveCaseId] = useState<string | null>(null);
  
  const partner = partners.find(p => p.id === partnerId);
  if (!partner) return null;
  
  const partnerCases = caseStudies.filter(cs => cs.partnerId === partnerId);
  
  return (
    <>
      <div className="bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-sm rounded-xl overflow-hidden border border-vetor-green/20 hover:border-vetor-green/60 transition-all duration-500 shadow-lg hover:shadow-vetor-green/10 group transform hover:-translate-y-1">
        <div className="p-7">
          <div className="flex items-center gap-5 mb-5">
            <div className="bg-gradient-to-br from-vetor-black to-black w-16 h-16 rounded-lg flex items-center justify-center overflow-hidden shadow-inner">
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white group-hover:text-vetor-green transition-colors duration-300">{partner.name}</h3>
              {partner.website && (
                <a 
                  href={partner.website}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-vetor-green hover:text-vetor-lightgreen flex items-center gap-1 text-sm mt-1 transform group-hover:translate-x-1 transition-all duration-300"
                >
                  Visitar site <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              )}
            </div>
          </div>
          
          <p className="text-gray-300 mb-5 line-clamp-3 group-hover:text-white transition-colors duration-300">{partner.description}</p>
          
          {partnerCases.length > 0 && (
            <div className="mt-6 pt-5 border-t border-vetor-green/10">
              <h4 className="font-medium text-white mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-vetor-green rounded-full inline-block"></span>
                Cases de Sucesso
              </h4>
              <ul className="space-y-2">
                {partnerCases.map(cs => (
                  <li key={cs.id}>
                    <button 
                      onClick={() => setActiveCaseId(cs.id)}
                      className="w-full text-left py-2.5 px-3.5 rounded-md bg-black/60 border border-transparent hover:border-vetor-green/30 hover:bg-gradient-to-r hover:from-vetor-green/20 hover:to-transparent transition-all duration-300 flex justify-between items-center group"
                    >
                      <span className="font-medium line-clamp-1 group-hover:text-white transition-colors">{cs.title}</span>
                      <ArrowUpRight className="w-4 h-4 flex-shrink-0 text-vetor-green opacity-70 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-300" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      
      {activeCaseId && (
        <CaseStudyModal 
          caseId={activeCaseId}
          onClose={() => setActiveCaseId(null)}
        />
      )}
    </>
  );
};

export default PartnerCard;
