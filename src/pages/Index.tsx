
import React from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import Hero from '@/components/Home/Hero';
import ServicesCard from '@/components/Home/ServicesCard';
import { Database, Laptop, Globe, ChevronRight, BarChart3, CheckCircle, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';

const Index: React.FC = () => {
  const { services } = useAdmin();
  const isMobile = useIsMobile();
  
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <Hero />
      
      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-black to-vetor-black relative overflow-hidden">
        {/* Subtle animated background patterns */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[10%] left-[5%] w-[25rem] h-[25rem] rounded-full bg-vetor-green/5 blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-[10%] right-[5%] w-[20rem] h-[20rem] rounded-full bg-vetor-green/3 blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-4">Soluções</Badge>
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Nossas Soluções Tecnológicas
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-vetor-green to-vetor-green/40 mx-auto mb-5 md:mb-8 rounded-full"></div>
            <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg px-4">
              Desenvolvemos soluções personalizadas para diferentes setores, trazendo inovação e eficiência para o seu negócio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {services.map((service) => (
              <ServicesCard key={service.id} serviceId={service.id} />
            ))}
          </div>
        </div>
      </section>
      
      {/* ERP Products Section - Redesigned */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-black to-vetor-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[10%] right-[10%] w-[40%] h-[40%] rounded-full bg-vetor-green/5 blur-3xl"></div>
          <div className="absolute bottom-[10%] left-[10%] w-[30%] h-[30%] rounded-full bg-vetor-green/5 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-10 md:mb-16">
            <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-4">Sistemas ERP</Badge>
            <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 md:mb-8 leading-tight">
              Sistemas ERP Personalizados
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-vetor-green to-vetor-green/40 mx-auto mb-5 md:mb-8 rounded-full"></div>
            <p className="text-white/70 max-w-2xl mx-auto text-base md:text-lg mb-8 md:mb-16 px-4">
              Otimize seus processos de negócio com soluções integradas desenvolvidas para as necessidades específicas da sua empresa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto">
            {/* ERP for Real Estate */}
            <Card className="bg-black/40 border border-vetor-green/20 overflow-hidden hover:shadow-[0_0_30px_rgba(0,176,80,0.15)] transition-all duration-300 group">
              <div className="relative h-40 md:h-52 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-black to-vetor-black/80">
                  <div className="absolute inset-0 opacity-20 bg-grid-pattern"></div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="bg-vetor-green/10 p-3 md:p-4 rounded-full backdrop-blur-sm border border-vetor-green/30 group-hover:bg-vetor-green/20 transition-all duration-300">
                    <Database className="w-10 h-10 md:w-16 md:h-16 text-vetor-green" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-vetor-green mb-4">ERP para Imobiliárias</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-vetor-green mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm md:text-base">Gestão completa de imóveis e clientes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-vetor-green mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm md:text-base">Controle financeiro integrado</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-vetor-green mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm md:text-base">Portal do cliente e marketing digital</span>
                  </li>
                </ul>
                
                <Link to="/planos-imobiliarias" className="w-full">
                  <Button className="w-full bg-vetor-green hover:bg-vetor-darkgreen text-white flex items-center justify-center gap-2 py-4 md:py-6 text-sm md:text-base">
                    Conhecer planos <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
            
            {/* ERP for Transportation */}
            <Card className="bg-black/40 border border-vetor-green/20 overflow-hidden hover:shadow-[0_0_30px_rgba(0,176,80,0.15)] transition-all duration-300 group">
              <div className="relative h-40 md:h-52 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-black to-vetor-black/80">
                  <div className="absolute inset-0 opacity-20 bg-grid-pattern"></div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="bg-vetor-green/10 p-3 md:p-4 rounded-full backdrop-blur-sm border border-vetor-green/30 group-hover:bg-vetor-green/20 transition-all duration-300">
                    <BarChart3 className="w-10 h-10 md:w-16 md:h-16 text-vetor-green" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-vetor-green mb-4">ERP para Transportadoras</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-vetor-green mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm md:text-base">Gestão de frotas e otimização de rotas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-vetor-green mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm md:text-base">Controle de manutenção e combustível</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-vetor-green mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm md:text-base">Rastreamento em tempo real</span>
                  </li>
                </ul>
                
                <Link to="/planos-transportadoras" className="w-full">
                  <Button className="w-full bg-vetor-green hover:bg-vetor-darkgreen text-white flex items-center justify-center gap-2 py-4 md:py-6 text-sm md:text-base">
                    Conhecer planos <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8 md:mt-12">
            <Link to="/solucoes-erp">
              <Button variant="outline" className="border-vetor-green/40 text-vetor-green hover:bg-vetor-green/10 hover:border-vetor-green text-sm md:text-base">
                Ver todas as soluções ERP <ChevronRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Website Creation Section - Redesigned */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-black to-vetor-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[15%] left-[10%] w-[40%] h-[40%] rounded-full bg-vetor-green/5 blur-3xl"></div>
          <div className="absolute bottom-[15%] right-[10%] w-[30%] h-[30%] rounded-full bg-vetor-green/5 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
            <div className="lg:w-1/2">
              <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-4">Websites</Badge>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
                Crie seu site profissional
              </h2>
              <p className="text-white/80 mb-6 text-base md:text-lg">
                Desenvolva sua presença online com um site moderno, responsivo e otimizado para buscadores.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-vetor-green/10 p-2 rounded-md mr-3 flex-shrink-0">
                    <Zap className="w-4 h-4 md:w-5 md:h-5 text-vetor-green" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm md:text-base">Design Responsivo</h4>
                    <p className="text-white/70 text-xs md:text-sm">Perfeito em todos os dispositivos</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-vetor-green/10 p-2 rounded-md mr-3 flex-shrink-0">
                    <Zap className="w-4 h-4 md:w-5 md:h-5 text-vetor-green" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm md:text-base">SEO Otimizado</h4>
                    <p className="text-white/70 text-xs md:text-sm">Melhor posicionamento no Google</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-vetor-green/10 p-2 rounded-md mr-3 flex-shrink-0">
                    <Zap className="w-4 h-4 md:w-5 md:h-5 text-vetor-green" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm md:text-base">Alta Performance</h4>
                    <p className="text-white/70 text-xs md:text-sm">Carregamento rápido e eficiente</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-vetor-green/10 p-2 rounded-md mr-3 flex-shrink-0">
                    <Zap className="w-4 h-4 md:w-5 md:h-5 text-vetor-green" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm md:text-base">Integrações</h4>
                    <p className="text-white/70 text-xs md:text-sm">Compatível com diversas ferramentas</p>
                  </div>
                </div>
              </div>
              
              <Link to="/crie-seu-site">
                <Button className="bg-vetor-green hover:bg-vetor-darkgreen text-white px-4 md:px-8 py-4 md:py-6 rounded-lg font-medium flex items-center gap-2 text-sm md:text-lg w-full md:w-auto justify-center">
                  Criar meu site <Laptop className="w-4 h-4 md:w-5 md:h-5" />
                </Button>
              </Link>
            </div>
            
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-vetor-green/20">
                <div className="absolute inset-0 bg-gradient-to-tr from-vetor-green/10 to-transparent opacity-70 z-10"></div>
                <img 
                  src="https://placehold.co/800x600/001400/00B050/png?text=Web+Design&font=montserrat" 
                  alt="Web Design" 
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Python Automation Section - Redesigned */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-black to-vetor-black relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[10%] right-[10%] w-[40%] h-[40%] rounded-full bg-vetor-green/5 blur-3xl"></div>
          <div className="absolute bottom-[10%] left-[10%] w-[30%] h-[30%] rounded-full bg-vetor-green/5 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-8 md:gap-12">
            <div className="lg:w-1/2">
              <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-4">Automação</Badge>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
                Automatize processos com Python
              </h2>
              <p className="text-white/80 mb-6 text-base md:text-lg">
                Transforme tarefas repetitivas em processos automatizados e eficientes, aumentando a produtividade da sua empresa.
              </p>
              
              <div className="space-y-3 md:space-y-4 mb-8">
                <div className="bg-black/40 border border-vetor-green/20 rounded-lg p-3 md:p-4">
                  <h4 className="text-vetor-green font-medium mb-1 md:mb-2 text-sm md:text-base">Redução de custos operacionais</h4>
                  <p className="text-white/70 text-xs md:text-sm">Diminua em até 70% o tempo gasto em tarefas manuais e repetitivas</p>
                </div>
                
                <div className="bg-black/40 border border-vetor-green/20 rounded-lg p-3 md:p-4">
                  <h4 className="text-vetor-green font-medium mb-1 md:mb-2 text-sm md:text-base">Processamento de dados em massa</h4>
                  <p className="text-white/70 text-xs md:text-sm">Análise e tratamento de grandes volumes de informações</p>
                </div>
                
                <div className="bg-black/40 border border-vetor-green/20 rounded-lg p-3 md:p-4">
                  <h4 className="text-vetor-green font-medium mb-1 md:mb-2 text-sm md:text-base">Integração entre sistemas</h4>
                  <p className="text-white/70 text-xs md:text-sm">Conecte diferentes plataformas e unifique seus dados</p>
                </div>
              </div>
              
              <Link to="/automacoes-processos">
                <Button className="bg-vetor-green hover:bg-vetor-darkgreen text-white px-4 md:px-8 py-4 md:py-6 rounded-lg font-medium flex items-center gap-2 text-sm md:text-lg w-full md:w-auto justify-center">
                  Ver automações <Globe className="w-4 h-4 md:w-5 md:h-5" />
                </Button>
              </Link>
            </div>
            
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-vetor-green/20">
                <div className="absolute inset-0 bg-gradient-to-tr from-vetor-green/10 to-transparent opacity-70 z-10"></div>
                <img 
                  src="https://placehold.co/800x600/001400/00B050/png?text=Python+Automation&font=montserrat" 
                  alt="Python Automation" 
                  className="w-full rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
