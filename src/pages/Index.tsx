
import React from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import Hero from '@/components/Home/Hero';
import ServicesCard from '@/components/Home/ServicesCard';
import { RealEstateAnimation, FiscalAnimation, LogisticsAnimation, CustomTechAnimation } from '@/utils/animations';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  const { services } = useAdmin();
  
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-vetor-black mb-4">
              Nossas Soluções Tecnológicas
            </h2>
            <p className="text-vetor-darkgray max-w-2xl mx-auto">
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
      
      {/* Technology Sectors with Animations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-vetor-black mb-4">
              Setores de Atuação
            </h2>
            <p className="text-vetor-darkgray max-w-2xl mx-auto">
              Nossa expertise em diferentes áreas garante soluções tecnológicas eficientes e personalizadas para o seu negócio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 relative">
                <div className="absolute inset-0">
                  <RealEstateAnimation />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-vetor-black mb-3">Tecnologia Imobiliária</h3>
                <p className="text-vetor-darkgray mb-4">
                  Nossas soluções para o setor imobiliário automatizam processos, desde a captação de imóveis até o pós-venda, otimizando resultados e melhorando a experiência dos clientes.
                </p>
                <Link to="/sobre" className="text-vetor-green hover:text-vetor-darkgreen flex items-center gap-1 font-medium">
                  Saiba mais <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 relative">
                <div className="absolute inset-0">
                  <FiscalAnimation />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-vetor-black mb-3">Tecnologia Fiscal</h3>
                <p className="text-vetor-darkgray mb-4">
                  Sistemas inteligentes para gestão fiscal e tributária que garantem conformidade com a legislação, reduzem custos e otimizam a carga tributária da sua empresa.
                </p>
                <Link to="/sobre" className="text-vetor-green hover:text-vetor-darkgreen flex items-center gap-1 font-medium">
                  Saiba mais <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 relative">
                <div className="absolute inset-0">
                  <LogisticsAnimation />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-vetor-black mb-3">Tecnologia em Logística</h3>
                <p className="text-vetor-darkgray mb-4">
                  Otimização de rotas, gestão de frotas e controle de entregas em tempo real para maximizar a eficiência logística e reduzir custos operacionais.
                </p>
                <Link to="/sobre" className="text-vetor-green hover:text-vetor-darkgreen flex items-center gap-1 font-medium">
                  Saiba mais <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 relative">
                <div className="absolute inset-0">
                  <CustomTechAnimation />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-vetor-black mb-3">Soluções Personalizadas</h3>
                <p className="text-vetor-darkgray mb-4">
                  Desenvolvimento de sistemas sob medida para atender necessidades específicas do seu negócio, integrando sistemas existentes e criando novas funcionalidades.
                </p>
                <Link to="/sobre" className="text-vetor-green hover:text-vetor-darkgreen flex items-center gap-1 font-medium">
                  Saiba mais <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-vetor-green bg-opacity-5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-vetor-black mb-6">
              Vamos transformar seu negócio com tecnologia?
            </h2>
            <p className="text-vetor-darkgray mb-8 text-lg">
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
