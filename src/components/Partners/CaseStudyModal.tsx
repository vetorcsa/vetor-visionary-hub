
import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useAdmin } from '@/contexts/AdminContext';

interface CaseStudyModalProps {
  caseId: string;
  onClose: () => void;
}

const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseId, onClose }) => {
  const { caseStudies, partners } = useAdmin();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const caseStudy = caseStudies.find(cs => cs.id === caseId);
  if (!caseStudy) return null;
  
  const partner = caseStudy.partnerId 
    ? partners.find(p => p.id === caseStudy.partnerId) 
    : null;
  
  const nextImage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentImageIndex((prev) => (prev + 1) % caseStudy.images.length);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  const prevImage = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentImageIndex((prev) => 
      prev === 0 ? caseStudy.images.length - 1 : prev - 1
    );
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    const handleOutsideClick = (e: MouseEvent) => {
      if ((e.target as HTMLElement).classList.contains('modal-overlay')) {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    document.addEventListener('mousedown', handleOutsideClick);
    
    // Prevenir scroll na página
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleOutsideClick);
      document.body.style.overflow = '';
    };
  }, [onClose]);
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center modal-overlay bg-black bg-opacity-90 backdrop-blur-sm">
      <div 
        className="bg-vetor-black border border-gray-800 rounded-lg shadow-2xl w-11/12 max-w-4xl max-h-[90vh] overflow-y-auto animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center border-b border-gray-800 p-4">
          <h3 className="text-xl font-bold text-white">{caseStudy.title}</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="relative aspect-video bg-gray-900 rounded-lg mb-6 overflow-hidden">
            {caseStudy.images.length > 0 ? (
              <>
                <img 
                  src={caseStudy.images[currentImageIndex]} 
                  alt={`Imagem ${currentImageIndex + 1} do case ${caseStudy.title}`}
                  className={`w-full h-full object-cover ${isAnimating ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
                />
                
                {caseStudy.images.length > 1 && (
                  <div className="absolute inset-0 flex items-center justify-between px-4">
                    <button 
                      onClick={prevImage}
                      className="w-10 h-10 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-70 transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button 
                      onClick={nextImage}
                      className="w-10 h-10 bg-black bg-opacity-50 rounded-full flex items-center justify-center text-white hover:bg-opacity-70 transition-colors"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                )}
                
                {caseStudy.images.length > 1 && (
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {caseStudy.images.map((_, index) => (
                      <button 
                        key={index}
                        onClick={() => {
                          if (isAnimating) return;
                          setIsAnimating(true);
                          setCurrentImageIndex(index);
                          setTimeout(() => setIsAnimating(false), 500);
                        }}
                        className={`w-2 h-2 rounded-full transition-all ${
                          currentImageIndex === index ? 'bg-vetor-green w-6' : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-gray-400">Nenhuma imagem disponível</p>
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="text-lg font-semibold mb-2 text-vetor-green">Cliente</h4>
              <p className="text-gray-300">{caseStudy.client}</p>
              
              {partner && (
                <>
                  <h4 className="text-lg font-semibold mb-2 mt-4 text-vetor-green">Parceiro</h4>
                  <div className="flex items-center">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="w-10 h-10 object-contain mr-2"
                    />
                    <p className="text-gray-300">{partner.name}</p>
                  </div>
                </>
              )}
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2 text-vetor-green">Descrição</h4>
              <p className="text-gray-300">{caseStudy.description}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-4 mb-6">
            <div className="bg-black/40 rounded-lg p-4">
              <h4 className="text-lg font-semibold mb-2 text-vetor-green">Desafio</h4>
              <p className="text-gray-300">{caseStudy.challenge}</p>
            </div>
            
            <div className="bg-black/40 rounded-lg p-4">
              <h4 className="text-lg font-semibold mb-2 text-vetor-green">Solução</h4>
              <p className="text-gray-300">{caseStudy.solution}</p>
            </div>
            
            <div className="bg-black/40 rounded-lg p-4">
              <h4 className="text-lg font-semibold mb-2 text-vetor-green">Resultado</h4>
              <p className="text-gray-300">{caseStudy.result}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
