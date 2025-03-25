
import React, { useState } from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import { ExternalLink, ChevronRight } from 'lucide-react';
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
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-gray-100 w-16 h-16 rounded-lg flex items-center justify-center overflow-hidden">
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="w-12 h-12 object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-vetor-darkgray">{partner.name}</h3>
              {partner.website && (
                <a 
                  href={partner.website}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-vetor-green hover:text-vetor-darkgreen flex items-center gap-1 text-sm"
                >
                  Visitar site <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          </div>
          
          <p className="text-vetor-darkgray mb-4">{partner.description}</p>
          
          {partnerCases.length > 0 && (
            <div className="mt-6">
              <h4 className="font-medium text-vetor-darkgray mb-3">Cases de Sucesso</h4>
              <ul className="space-y-2">
                {partnerCases.map(cs => (
                  <li key={cs.id}>
                    <button 
                      onClick={() => setActiveCaseId(cs.id)}
                      className="w-full text-left py-2 px-3 rounded-md bg-gray-50 hover:bg-vetor-green hover:text-white transition-colors flex justify-between items-center"
                    >
                      <span className="font-medium">{cs.title}</span>
                      <ChevronRight className="w-4 h-4" />
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
