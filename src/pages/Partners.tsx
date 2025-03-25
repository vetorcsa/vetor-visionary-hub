
import React, { useState } from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import PartnerCard from '@/components/Partners/PartnerCard';
import CaseStudyModal from '@/components/Partners/CaseStudyModal';
import { Search, Filter, X } from 'lucide-react';

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
    <div className="page-transition pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-vetor-black mb-6 animate-fade-in">
              Parceiros e Cases de Sucesso
            </h1>
            <p className="text-lg text-vetor-darkgray mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Conheça nossos parceiros estratégicos e histórias de sucesso no desenvolvimento de soluções tecnológicas.
            </p>
          </div>
        </div>
      </div>
      
      {/* Search and Filter Section */}
      <section className="py-10 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="relative flex-grow max-w-md">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input 
                type="text" 
                className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-vetor-green"
                placeholder="Buscar parceiros..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <button 
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                  onClick={() => setSearchTerm('')}
                >
                  <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-3 py-1 bg-vetor-green bg-opacity-10 rounded-full">
              <span className="text-vetor-green font-medium text-sm">Nossos Parceiros</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-vetor-black mb-4">
              Parceiros Estratégicos
            </h2>
            <p className="text-vetor-darkgray max-w-2xl mx-auto">
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
            <div className="text-center py-10">
              <p className="text-vetor-darkgray">
                Nenhum parceiro encontrado com o termo "{searchTerm}". Por favor, tente outra busca.
              </p>
            </div>
          )}
        </div>
      </section>
      
      {/* Case Studies Section */}
      {standaloneCases.length > 0 && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-3 py-1 bg-vetor-green bg-opacity-10 rounded-full">
                <span className="text-vetor-green font-medium text-sm">Histórias de Sucesso</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-vetor-black mb-4">
                Cases de Sucesso
              </h2>
              <p className="text-vetor-darkgray max-w-2xl mx-auto">
                Conheça alguns dos projetos que desenvolvemos e os resultados obtidos por nossos clientes.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {standaloneCases.map(caseStudy => (
                <div 
                  key={caseStudy.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="aspect-video bg-gray-100 overflow-hidden">
                    <img 
                      src={caseStudy.images[0] || '/placeholder.svg'} 
                      alt={caseStudy.title}
                      className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-vetor-black mb-2">
                      {caseStudy.title}
                    </h3>
                    <p className="text-sm text-vetor-green mb-4">
                      Cliente: {caseStudy.client}
                    </p>
                    <p className="text-vetor-darkgray mb-6">
                      {caseStudy.description}
                    </p>
                    <button 
                      onClick={() => setSelectedCaseId(caseStudy.id)}
                      className="px-4 py-2 bg-transparent border border-vetor-green text-vetor-green rounded-md font-medium hover:bg-vetor-green hover:text-white transition-colors"
                    >
                      Ver Detalhes
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
