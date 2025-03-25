
import React, { useState } from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import PartnerCard from '@/components/Partners/PartnerCard';
import CaseStudyModal from '@/components/Partners/CaseStudyModal';
import { Search, Filter, X, ChevronRight, Briefcase, FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Partners: React.FC = () => {
  const { partners, caseStudies } = useAdmin();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);
  
  // Filtrar parceiros pelo termo de busca
  const filteredPartners = partners.filter(partner => 
    partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    partner.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Casos de sucesso que não estão vinculados a um parceiro específico
  const standaloneCases = caseStudies.filter(cs => !cs.partnerId);
  
  return (
    <div className="page-transition pt-20 bg-black text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-vetor-black to-black py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-6">Parceiros</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              Parceiros e Cases de Sucesso
            </h1>
            <p className="text-lg text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Conheça nossos parceiros estratégicos e histórias de sucesso no desenvolvimento de soluções tecnológicas.
            </p>
          </div>
        </div>
      </div>
      
      {/* Search and Filter Section */}
      <section className="py-8 bg-vetor-black/80 border-b border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="relative flex-grow max-w-md">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input 
                type="text" 
                className="w-full py-2 pl-10 pr-4 bg-black/60 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-vetor-green text-white"
                placeholder="Buscar parceiros..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button 
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                  onClick={() => setSearchTerm('')}
                >
                  <X className="w-5 h-5 text-gray-400 hover:text-gray-200" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-vetor-green/20 rounded-full flex items-center justify-center mr-4">
                <Briefcase className="w-6 h-6 text-vetor-green" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Parceiros Estratégicos
              </h2>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Trabalhamos com empresas líderes em tecnologia para oferecer as melhores soluções para nossos clientes.
            </p>
          </div>
          
          {filteredPartners.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPartners.map(partner => (
                <PartnerCard key={partner.id} partnerId={partner.id} />
              ))}
            </div>
          ) : (
            <div className="text-center py-10 bg-black/40 backdrop-blur-sm rounded-xl border border-gray-800">
              <p className="text-gray-300">
                Nenhum parceiro encontrado com o termo "{searchTerm}". Por favor, tente outra busca.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* Case Studies Section */}
      {standaloneCases.length > 0 && (
        <section className="py-20 bg-vetor-black/80">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-6">
                <div className="w-12 h-12 bg-vetor-green/20 rounded-full flex items-center justify-center mr-4">
                  <FileText className="w-6 h-6 text-vetor-green" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Cases de Sucesso
                </h2>
              </div>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Conheça alguns dos projetos que desenvolvemos e os resultados obtidos por nossos clientes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {standaloneCases.map(caseStudy => (
                <div 
                  key={caseStudy.id}
                  className="bg-black/50 rounded-lg border border-vetor-green/10 overflow-hidden hover:border-vetor-green/30 transition-all duration-300 shadow-lg group"
                >
                  <div className="aspect-video bg-gray-900 overflow-hidden">
                    <img 
                      src={caseStudy.images[0] || '/placeholder.svg'} 
                      alt={caseStudy.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {caseStudy.title}
                    </h3>
                    <p className="text-sm text-vetor-green mb-4">
                      Cliente: {caseStudy.client}
                    </p>
                    <p className="text-gray-300 mb-6">
                      {caseStudy.description}
                    </p>
                    <button 
                      onClick={() => setSelectedCaseId(caseStudy.id)}
                      className="flex items-center gap-2 px-4 py-2 bg-transparent border border-vetor-green text-vetor-green rounded-md font-medium hover:bg-vetor-green hover:text-black transition-colors group-hover:translate-x-1 transition-transform duration-300"
                    >
                      Ver Detalhes <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {selectedCaseId && (
        <CaseStudyModal 
          caseId={selectedCaseId}
          onClose={() => setSelectedCaseId(null)}
        />
      )}
    </div>
  );
};

export default Partners;
