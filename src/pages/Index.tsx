
import React from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import Hero from '@/components/Home/Hero';
import ServicesCard from '@/components/Home/ServicesCard';
import { ChevronRight, ArrowRight, Building2, FileBarChart, Globe, MonitorSmartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  RealEstateAnimation, 
  FiscalAnimation, 
  LogisticsAnimation, 
  CustomTechAnimation 
} from '@/components/Home/SectorAnimations';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const Index: React.FC = () => {
  const { services } = useAdmin();
  
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-black to-vetor-black relative overflow-hidden">
        {/* Subtle animated background patterns */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[10%] left-[5%] w-[25rem] h-[25rem] rounded-full bg-vetor-green/5 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-[10%] right-[5%] w-[20rem] h-[20rem] rounded-full bg-vetor-green/3 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-4">Soluções</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Nossas Soluções Tecnológicas
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-vetor-green to-vetor-green/40 mx-auto mb-8 rounded-full"></div>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
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
      
      {/* Technology Sectors Section - Improved card design */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(rgba(0, 176, 80, 0.05) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-4">Setores</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Setores de Atuação
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-vetor-green to-vetor-green/40 mx-auto mb-8 rounded-full"></div>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Nossa expertise em diferentes áreas garante soluções tecnológicas eficientes e personalizadas para o seu negócio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Tecnologia Imobiliária */}
            <div className="rounded-xl overflow-hidden bg-black shadow-lg border border-vetor-green/20 transition-all duration-500 hover:border-vetor-green/40 hover:shadow-[0_0_20px_rgba(0,176,80,0.15)] group h-[360px] relative">
              <div className="h-[180px] bg-black relative overflow-hidden">
                <RealEstateAnimation />
                <div className="absolute top-6 left-6 z-10 bg-vetor-green/10 p-3 rounded-full">
                  <Building2 className="w-8 h-8 text-vetor-green" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>
              <div className="p-6 relative z-10">
                <h3 className="text-2xl font-bold text-vetor-green mb-4">Tecnologia Imobiliária</h3>
                <p className="text-white/80 mb-6">
                  Nossas soluções para o setor imobiliário automatizam processos, desde a captação de imóveis até o pós-venda, otimizando resultados.
                </p>
                <Link to="/sobre" className="inline-flex items-center gap-2 text-vetor-green hover:text-white bg-vetor-green/10 hover:bg-vetor-green transition-colors px-4 py-2 rounded-md">
                  <span>Saiba mais</span> <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            
            {/* Tecnologia Fiscal */}
            <div className="rounded-xl overflow-hidden bg-black shadow-lg border border-vetor-green/20 transition-all duration-500 hover:border-vetor-green/40 hover:shadow-[0_0_20px_rgba(0,176,80,0.15)] group h-[360px] relative">
              <div className="h-[180px] bg-black relative overflow-hidden">
                <FiscalAnimation />
                <div className="absolute top-6 left-6 z-10 bg-vetor-green/10 p-3 rounded-full">
                  <FileBarChart className="w-8 h-8 text-vetor-green" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>
              <div className="p-6 relative z-10">
                <h3 className="text-2xl font-bold text-vetor-green mb-4">Tecnologia Fiscal</h3>
                <p className="text-white/80 mb-6">
                  Sistemas inteligentes para gestão fiscal e tributária que garantem conformidade com a legislação, reduzem custos.
                </p>
                <Link to="/recuperacao-tributaria">
                  <Button className="bg-vetor-green hover:bg-vetor-darkgreen text-white border-none">
                    Recuperação Tributária
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Tecnologia em Logística */}
            <div className="rounded-xl overflow-hidden bg-black shadow-lg border border-vetor-green/20 transition-all duration-500 hover:border-vetor-green/40 hover:shadow-[0_0_20px_rgba(0,176,80,0.15)] group h-[360px] relative">
              <div className="h-[180px] bg-black relative overflow-hidden">
                <LogisticsAnimation />
                <div className="absolute top-6 left-6 z-10 bg-vetor-green/10 p-3 rounded-full">
                  <Globe className="w-8 h-8 text-vetor-green" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>
              <div className="p-6 relative z-10">
                <h3 className="text-2xl font-bold text-vetor-green mb-4">Tecnologia em Logística</h3>
                <p className="text-white/80 mb-6">
                  Otimização de rotas, gestão de frotas e controle de entregas em tempo real para maximizar a eficiência logística.
                </p>
                <Link to="/sobre" className="inline-flex items-center gap-2 text-vetor-green hover:text-white bg-vetor-green/10 hover:bg-vetor-green transition-colors px-4 py-2 rounded-md">
                  <span>Saiba mais</span> <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            
            {/* Soluções Tecnológicas */}
            <div className="rounded-xl overflow-hidden bg-black shadow-lg border border-vetor-green/20 transition-all duration-500 hover:border-vetor-green/40 hover:shadow-[0_0_20px_rgba(0,176,80,0.15)] group h-[360px] relative">
              <div className="h-[180px] bg-black relative overflow-hidden">
                <CustomTechAnimation />
                <div className="absolute top-6 left-6 z-10 bg-vetor-green/10 p-3 rounded-full">
                  <MonitorSmartphone className="w-8 h-8 text-vetor-green" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>
              <div className="p-6 relative z-10">
                <h3 className="text-2xl font-bold text-vetor-green mb-4">Soluções Tecnológicas</h3>
                <p className="text-white/80 mb-6">
                  Desenvolvimento de software personalizado, consultoria em TI, implementação de infraestrutura tecnológica.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/crie-seu-site">
                    <Button className="bg-vetor-green hover:bg-vetor-darkgreen text-white border-none w-full sm:w-auto">
                      Crie seu site
                    </Button>
                  </Link>
                  <Link to="/sobre" className="inline-flex items-center justify-center gap-2 text-vetor-green hover:text-white bg-vetor-green/10 hover:bg-vetor-green transition-colors px-4 py-2 rounded-md w-full sm:w-auto">
                    <span>Saiba mais</span> <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-b from-black to-vetor-black relative overflow-hidden">
        {/* Enhanced background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[10%] right-[10%] w-[40%] h-[40%] rounded-full bg-vetor-green/5 blur-3xl"></div>
          <div className="absolute bottom-[10%] left-[10%] w-[30%] h-[30%] rounded-full bg-vetor-green/5 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto glass-card p-12 rounded-2xl border border-vetor-green/20 backdrop-blur-sm bg-black/40 shadow-lg">
            <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-6">Vamos Conversar</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Vamos transformar seu negócio com tecnologia?
            </h2>
            <p className="text-white/80 mb-10 text-xl">
              Entre em contato conosco para uma consulta inicial e descubra como nossas soluções tecnológicas podem impulsionar os resultados da sua empresa.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                to="/contato" 
                className="inline-flex items-center gap-3 bg-gradient-to-r from-vetor-green to-vetor-darkgreen hover:from-vetor-darkgreen hover:to-vetor-green text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
              >
                Fale Conosco <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/crie-seu-site" 
                className="inline-flex items-center gap-3 bg-transparent border border-vetor-green/50 hover:border-vetor-green text-white px-8 py-4 rounded-lg font-medium text-lg transition-all duration-300 hover:translate-y-[-2px] hover:bg-vetor-green/10"
              >
                Crie seu site <Globe className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-vetor-green/10 rounded-full"></div>
        <div className="absolute top-20 -right-20 w-60 h-60 border border-vetor-green/5 rounded-full"></div>
        <div className="absolute bottom-40 right-10 w-20 h-20 border border-vetor-green/20 rounded-full"></div>
      </section>
    </div>
  );
};

export default Index;
