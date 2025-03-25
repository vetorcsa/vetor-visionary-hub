
import React from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import Hero from '@/components/Home/Hero';
import ServicesCard from '@/components/Home/ServicesCard';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  const { services } = useAdmin();
  
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 bg-vetor-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nossas Soluções Tecnológicas
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Desenvolvemos soluções personalizadas para diferentes setores, trazendo inovação e eficiência para o seu negócio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServicesCard key={service.id} serviceId={service.id} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Technology Sectors Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Setores de Atuação
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Nossa expertise em diferentes áreas garante soluções tecnológicas eficientes e personalizadas para o seu negócio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Tecnologia Imobiliária */}
            <div className="rounded-xl overflow-hidden shadow-lg border border-vetor-green/20 bg-black transition-all duration-300 hover:border-vetor-green/40 hover:shadow-vetor-green/20 hover:shadow-lg group">
              <div className="h-48 relative bg-gradient-to-br from-black to-black/80 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  <img 
                    src="/lovable-uploads/d8fa1f50-898b-4129-ad29-e52d76d892d5.png" 
                    alt="Real Estate Technology" 
                    className="w-20 h-20 object-contain filter brightness-0 invert opacity-10"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                
                {/* Abstract Elements */}
                <div className="absolute top-1/4 left-1/4 w-20 h-20 rounded-full border border-vetor-green/10 group-hover:border-vetor-green/30 transition-all duration-700"></div>
                <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full border border-vetor-green/5 group-hover:border-vetor-green/20 transition-all duration-500 delay-100"></div>
                <div className="absolute bottom-1/4 right-1/3 w-12 h-12 rounded-full border border-vetor-green/20 group-hover:border-vetor-green/40 transition-all duration-700 delay-200"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-vetor-green mb-3">Tecnologia Imobiliária</h3>
                <p className="text-white/80 mb-4">
                  Nossas soluções para o setor imobiliário automatizam processos, desde a captação de imóveis até o pós-venda, otimizando resultados e melhorando a experiência dos clientes.
                </p>
                <Link to="/sobre" className="text-vetor-green hover:text-vetor-lightgreen flex items-center gap-1 font-medium group-hover:translate-x-1 transition-transform duration-300">
                  Saiba mais <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
            {/* Tecnologia Fiscal */}
            <div className="rounded-xl overflow-hidden shadow-lg border border-vetor-green/20 bg-black transition-all duration-300 hover:border-vetor-green/40 hover:shadow-vetor-green/20 hover:shadow-lg group">
              <div className="h-48 relative bg-gradient-to-br from-black to-black/80 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  <img 
                    src="/lovable-uploads/d8fa1f50-898b-4129-ad29-e52d76d892d5.png" 
                    alt="Fiscal Technology" 
                    className="w-20 h-20 object-contain filter brightness-0 invert opacity-10"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                
                {/* Abstract Elements */}
                <div className="absolute flex items-center justify-center top-1/3 left-1/3 w-24 h-24">
                  <div className="absolute w-full h-full border border-vetor-green/10 rounded-md transform rotate-45 group-hover:rotate-[60deg] transition-transform duration-700"></div>
                  <div className="absolute w-3/4 h-3/4 border border-vetor-green/20 rounded-md transform rotate-45 group-hover:rotate-[30deg] transition-transform duration-700 delay-100"></div>
                  <div className="absolute w-1/2 h-1/2 border border-vetor-green/30 rounded-md transform rotate-45 group-hover:rotate-0 transition-transform duration-700 delay-200"></div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-vetor-green mb-3">Tecnologia Fiscal</h3>
                <p className="text-white/80 mb-4">
                  Sistemas inteligentes para gestão fiscal e tributária que garantem conformidade com a legislação, reduzem custos e otimizam a carga tributária da sua empresa.
                </p>
                <Link to="/sobre" className="text-vetor-green hover:text-vetor-lightgreen flex items-center gap-1 font-medium group-hover:translate-x-1 transition-transform duration-300">
                  Saiba mais <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
            {/* Tecnologia em Logística */}
            <div className="rounded-xl overflow-hidden shadow-lg border border-vetor-green/20 bg-black transition-all duration-300 hover:border-vetor-green/40 hover:shadow-vetor-green/20 hover:shadow-lg group">
              <div className="h-48 relative bg-gradient-to-br from-black to-black/80 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  <img 
                    src="/lovable-uploads/d8fa1f50-898b-4129-ad29-e52d76d892d5.png" 
                    alt="Logistics Technology" 
                    className="w-20 h-20 object-contain filter brightness-0 invert opacity-10"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                
                {/* Abstract Elements - Connected Dots */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-vetor-green/30 rounded-full"></div>
                    <div className="absolute top-1/4 right-0 w-2 h-2 bg-vetor-green/30 rounded-full"></div>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-vetor-green/30 rounded-full"></div>
                    <div className="absolute top-1/4 left-0 w-2 h-2 bg-vetor-green/30 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-vetor-green/50 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                    
                    {/* Connecting Lines */}
                    <svg className="absolute inset-0 w-full h-full">
                      <line x1="50%" y1="0%" x2="100%" y2="25%" className="stroke-vetor-green/20 group-hover:stroke-vetor-green/40 transition-all duration-500" strokeWidth="1" />
                      <line x1="50%" y1="0%" x2="0%" y2="25%" className="stroke-vetor-green/20 group-hover:stroke-vetor-green/40 transition-all duration-500" strokeWidth="1" />
                      <line x1="50%" y1="0%" x2="50%" y2="50%" className="stroke-vetor-green/20 group-hover:stroke-vetor-green/40 transition-all duration-500" strokeWidth="1" />
                      <line x1="100%" y1="25%" x2="50%" y2="50%" className="stroke-vetor-green/20 group-hover:stroke-vetor-green/40 transition-all duration-500" strokeWidth="1" />
                      <line x1="0%" y1="25%" x2="50%" y2="50%" className="stroke-vetor-green/20 group-hover:stroke-vetor-green/40 transition-all duration-500" strokeWidth="1" />
                      <line x1="50%" y1="100%" x2="50%" y2="50%" className="stroke-vetor-green/20 group-hover:stroke-vetor-green/40 transition-all duration-500" strokeWidth="1" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-vetor-green mb-3">Tecnologia em Logística</h3>
                <p className="text-white/80 mb-4">
                  Otimização de rotas, gestão de frotas e controle de entregas em tempo real para maximizar a eficiência logística e reduzir custos operacionais.
                </p>
                <Link to="/sobre" className="text-vetor-green hover:text-vetor-lightgreen flex items-center gap-1 font-medium group-hover:translate-x-1 transition-transform duration-300">
                  Saiba mais <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
            {/* Soluções Tecnológicas */}
            <div className="rounded-xl overflow-hidden shadow-lg border border-vetor-green/20 bg-black transition-all duration-300 hover:border-vetor-green/40 hover:shadow-vetor-green/20 hover:shadow-lg group">
              <div className="h-48 relative bg-gradient-to-br from-black to-black/80 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  <img 
                    src="/lovable-uploads/d8fa1f50-898b-4129-ad29-e52d76d892d5.png" 
                    alt="Custom Technology" 
                    className="w-20 h-20 object-contain filter brightness-0 invert opacity-10"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                
                {/* Abstract Code Elements */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-1/4 left-1/4 w-64 h-1 bg-vetor-green/10 group-hover:bg-vetor-green/20 transition-colors duration-500"></div>
                  <div className="absolute top-1/3 left-1/3 w-40 h-1 bg-vetor-green/15 group-hover:bg-vetor-green/30 transition-colors duration-500 delay-100"></div>
                  <div className="absolute top-1/2 left-1/5 w-32 h-1 bg-vetor-green/20 group-hover:bg-vetor-green/40 transition-colors duration-500 delay-200"></div>
                  <div className="absolute top-2/3 left-1/4 w-48 h-1 bg-vetor-green/10 group-hover:bg-vetor-green/20 transition-colors duration-500 delay-300"></div>
                  <div className="absolute top-3/4 left-1/3 w-24 h-1 bg-vetor-green/15 group-hover:bg-vetor-green/30 transition-colors duration-500 delay-400"></div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-vetor-green mb-3">Soluções Tecnológicas</h3>
                <p className="text-white/80 mb-4">
                  Desenvolvimento de software personalizado, consultoria em TI e implementação de infraestrutura tecnológica para diversos setores.
                </p>
                <Link to="/sobre" className="text-vetor-green hover:text-vetor-lightgreen flex items-center gap-1 font-medium group-hover:translate-x-1 transition-transform duration-300">
                  Saiba mais <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-black to-vetor-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Vamos transformar seu negócio com tecnologia?
            </h2>
            <p className="text-white/70 mb-8 text-lg">
              Entre em contato conosco para uma consulta inicial e descubra como nossas soluções tecnológicas podem impulsionar os resultados da sua empresa.
            </p>
            <Link 
              to="/contato" 
              className="btn-primary inline-flex items-center gap-2"
            >
              Fale Conosco <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
