
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, CheckCircle2, ArrowRight, Code, Globe, BarChart3, Search, ShieldCheck, Smartphone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const WebsiteBenefits: React.FC = () => {
  // WhatsApp contact link with pre-filled message
  const whatsappLink = "https://wa.me/5599999999999?text=Olá,%20estou%20interessado%20em%20";
  const portfolioMessage = encodeURIComponent("criar um site de portfólio por R$1200.");
  const advancedMessage = encodeURIComponent("saber mais sobre sistemas avançados personalizados.");
  
  // Animation states
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    { icon: Globe, title: "Presença Online 24/7", description: "Seu negócio disponível a qualquer hora, mesmo quando você não está." },
    { icon: Search, title: "Visibilidade em Buscas", description: "Seja encontrado facilmente no Google e outros mecanismos de busca." },
    { icon: BarChart3, title: "Análise de Desempenho", description: "Monitore o comportamento de visitantes e otimize sua estratégia." },
    { icon: ShieldCheck, title: "Credibilidade", description: "Um site profissional aumenta a confiança dos clientes em seu negócio." },
    { icon: Smartphone, title: "Experiência Mobile", description: "Design responsivo para todos os dispositivos, de smartphones a desktops." },
    { icon: Code, title: "Tecnologia Avançada", description: "Utilizamos as mais recentes tecnologias web para melhor desempenho." }
  ];

  return (
    <div className="page-transition py-16 bg-gradient-to-b from-black to-vetor-black min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section */}
        <div className={`mb-16 text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-4">
            Site Profissional
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Transforme sua presença digital com um site profissional
          </h1>
          <p className="text-white/70 max-w-3xl mx-auto text-lg md:text-xl">
            Destaque-se da concorrência e alcance novos clientes com um site moderno e responsivo.
          </p>
          
          {/* Digital graphic element */}
          <div className="mt-12 relative h-24 overflow-hidden">
            <div className="absolute inset-0 flex justify-center">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i} 
                  className="h-full w-1 mx-1 bg-vetor-green/30 rounded-full" 
                  style={{ 
                    height: `${Math.random() * 80 + 20}%`,
                    animationDelay: `${i * 0.1}s`,
                    animation: "pulse-slow 2s infinite"
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Features Carousel */}
        <div className={`mb-20 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Por que ter um site é essencial para o seu negócio?
          </h2>
          
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {features.map((feature, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="bg-black/50 border border-vetor-green/20 h-full hover:border-vetor-green/40 transition-all">
                      <CardHeader>
                        <feature.icon className="w-10 h-10 text-vetor-green mb-2" />
                        <CardTitle className="text-white">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-white/70">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4">
              <CarouselPrevious className="mr-2 bg-vetor-green/10 border-vetor-green/20 hover:bg-vetor-green/20 text-vetor-green static relative translate-y-0 left-0" />
              <CarouselNext className="ml-2 bg-vetor-green/10 border-vetor-green/20 hover:bg-vetor-green/20 text-vetor-green static relative translate-y-0 right-0" />
            </div>
          </Carousel>
        </div>

        {/* Digital Counter Section */}
        <div className={`mb-20 transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-black/50 border border-vetor-green/20 rounded-xl p-6 text-center hover:border-vetor-green/40 transition-all group">
              <div className="text-4xl font-bold text-vetor-green mb-2 group-hover:scale-110 transition-transform">
                93%
              </div>
              <p className="text-white/70">dos consumidores pesquisam online antes de comprar</p>
            </div>
            
            <div className="bg-black/50 border border-vetor-green/20 rounded-xl p-6 text-center hover:border-vetor-green/40 transition-all group">
              <div className="text-4xl font-bold text-vetor-green mb-2 group-hover:scale-110 transition-transform">
                75%
              </div>
              <p className="text-white/70">avaliam a credibilidade de uma empresa pelo site</p>
            </div>
            
            <div className="bg-black/50 border border-vetor-green/20 rounded-xl p-6 text-center hover:border-vetor-green/40 transition-all group">
              <div className="text-4xl font-bold text-vetor-green mb-2 group-hover:scale-110 transition-transform">
                24/7
              </div>
              <p className="text-white/70">disponibilidade para seus clientes, todos os dias</p>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className={`max-w-5xl mx-auto transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Escolha a solução ideal para o seu negócio
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            {/* Portfolio Site Card */}
            <Card className="border-vetor-green/20 bg-black hover:border-vetor-green/40 transition-all duration-300 overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-vetor-green/10 rounded-bl-full -translate-y-1/2 translate-x-1/2 group-hover:bg-vetor-green/20 transition-all duration-500"></div>
              
              <CardHeader>
                <CardTitle className="text-vetor-green text-2xl flex items-center">
                  Site de Portfólio
                  <span className="inline-block ml-3 bg-vetor-green/20 text-vetor-green text-xs py-1 px-2 rounded-full">Recomendado</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/80">Perfeito para profissionais liberais, pequenas empresas e empreendedores que precisam de uma presença online profissional.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-vetor-green mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Design responsivo (mobile-friendly)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-vetor-green mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Até 5 páginas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-vetor-green mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Otimização para SEO</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-vetor-green mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Formulário de contato</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-vetor-green mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Integração com redes sociais</span>
                  </li>
                </ul>
                <div className="relative">
                  <p className="text-2xl font-bold text-vetor-green pt-4">R$ 1.200,00</p>
                  <div className="absolute top-4 right-0 bg-vetor-green/10 rounded-lg px-3 py-1 text-vetor-green text-sm">
                    Entrega em 7 dias
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <a 
                  href={`${whatsappLink}${portfolioMessage}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full"
                >
                  <Button className="w-full bg-vetor-green hover:bg-vetor-darkgreen text-white group-hover:shadow-md group-hover:shadow-vetor-green/20 transition-all">
                    Contratar Agora <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardFooter>
            </Card>
            
            {/* Advanced Systems Card */}
            <Card className="border-vetor-green/20 bg-black hover:border-vetor-green/40 transition-all duration-300 overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-vetor-green/10 rounded-bl-full -translate-y-1/2 translate-x-1/2 group-hover:bg-vetor-green/20 transition-all duration-500"></div>
              
              <CardHeader>
                <CardTitle className="text-vetor-green text-2xl">Sistemas Avançados</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/80">Soluções personalizadas para empresas que necessitam de sistemas complexos e integrações avançadas.</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-vetor-green mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">E-commerce completo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-vetor-green mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Sistemas de gestão empresarial</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-vetor-green mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Integrações com APIs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-vetor-green mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Dashboards personalizados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-vetor-green mt-0.5 flex-shrink-0" />
                    <span className="text-white/70">Soluções sob medida</span>
                  </li>
                </ul>
                <div className="relative">
                  <p className="text-xl font-bold text-vetor-green pt-4">Consulte preços</p>
                  <div className="absolute top-4 right-0 bg-vetor-green/10 rounded-lg px-3 py-1 text-vetor-green text-sm">
                    Projetos personalizados
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <a 
                  href={`${whatsappLink}${advancedMessage}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full bg-vetor-green hover:bg-vetor-darkgreen text-white group-hover:shadow-md group-hover:shadow-vetor-green/20 transition-all">
                    Entrar em Contato <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </div>
        </div>
        
        {/* Process Timeline */}
        <div className={`mt-20 max-w-4xl mx-auto transition-all duration-1000 delay-900 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">
            Como funciona o processo
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-vetor-green/30 z-0"></div>
            
            {/* Timeline items */}
            <div className="relative z-10">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-start mb-16">
                <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                  <h3 className="text-xl font-bold text-vetor-green mb-2">1. Briefing inicial</h3>
                  <p className="text-white/70">Entendemos suas necessidades e objetivos para criar uma solução personalizada.</p>
                </div>
                <div className="flex items-center justify-center md:w-0 order-1 md:order-2 mb-4 md:mb-0">
                  <div className="w-10 h-10 bg-vetor-green text-black rounded-full flex items-center justify-center font-bold">1</div>
                </div>
                <div className="md:w-1/2 md:pl-12 order-3"></div>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-start mb-16">
                <div className="md:w-1/2 md:pr-12 order-2 md:order-1"></div>
                <div className="flex items-center justify-center md:w-0 order-1 md:order-2 mb-4 md:mb-0">
                  <div className="w-10 h-10 bg-vetor-green text-black rounded-full flex items-center justify-center font-bold">2</div>
                </div>
                <div className="md:w-1/2 md:pl-12 order-3 md:text-left">
                  <h3 className="text-xl font-bold text-vetor-green mb-2">2. Proposta e aprovação</h3>
                  <p className="text-white/70">Apresentamos uma proposta detalhada com cronograma e investimento para sua aprovação.</p>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-start mb-16">
                <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                  <h3 className="text-xl font-bold text-vetor-green mb-2">3. Desenvolvimento</h3>
                  <p className="text-white/70">Nossa equipe trabalha na criação do seu site usando tecnologias modernas.</p>
                </div>
                <div className="flex items-center justify-center md:w-0 order-1 md:order-2 mb-4 md:mb-0">
                  <div className="w-10 h-10 bg-vetor-green text-black rounded-full flex items-center justify-center font-bold">3</div>
                </div>
                <div className="md:w-1/2 md:pl-12 order-3"></div>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-start">
                <div className="md:w-1/2 md:pr-12 order-2 md:order-1"></div>
                <div className="flex items-center justify-center md:w-0 order-1 md:order-2 mb-4 md:mb-0">
                  <div className="w-10 h-10 bg-vetor-green text-black rounded-full flex items-center justify-center font-bold">4</div>
                </div>
                <div className="md:w-1/2 md:pl-12 order-3 md:text-left">
                  <h3 className="text-xl font-bold text-vetor-green mb-2">4. Entrega e suporte</h3>
                  <p className="text-white/70">Lançamos seu site e oferecemos suporte para garantir que tudo funcione perfeitamente.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className={`mt-20 text-center transition-all duration-1000 delay-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Pronto para dar o próximo passo?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto mb-8">
            Não perca mais tempo. Tenha o site que seu negócio merece e comece a colher os frutos de uma presença digital eficiente.
          </p>
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-vetor-green/80 to-vetor-darkgreen/50 rounded-lg blur-md opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
            <a 
              href={whatsappLink + encodeURIComponent("obter mais informações sobre criação de sites e sistemas.")}
              target="_blank" 
              rel="noopener noreferrer"
              className="relative"
            >
              <Button size="lg" className="bg-vetor-green hover:bg-vetor-darkgreen text-white">
                Fale com um Especialista <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteBenefits;
