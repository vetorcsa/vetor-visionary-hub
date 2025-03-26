
import React from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import { 
  Check, 
  Target, 
  Eye, 
  Heart, 
  Mail, 
  Phone, 
  MapPin, 
  Bot, 
  Database, 
  TrendingUp, 
  MessageCircle,
  Code,
  Zap,
  BarChart,
  Building,
  Globe2,
  MonitorSmartphone
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const About: React.FC = () => {
  const { aboutData, footerData } = useAdmin();
  
  return (
    <div className="page-transition pt-20 bg-gradient-to-b from-black to-vetor-black/90 text-white min-h-screen">
      {/* Hero Section - Modernized with gradient backdrop */}
      <div className="relative overflow-hidden py-24">
        {/* Background gradient elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-vetor-green/20 to-vetor-green/5 blur-3xl"></div>
          <div className="absolute bottom-[10%] -left-[20%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-vetor-green/10 to-vetor-green/5 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-4">Nossa História</Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in leading-tight">
                {aboutData.title}
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-vetor-green to-vetor-green/40 mx-auto mb-8 rounded-full"></div>
              <p className="text-lg md:text-xl text-white/80 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                {aboutData.description}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-vetor-green/20 hover:border-vetor-green/40 transition-all duration-300 group">
                <div className="w-12 h-12 bg-vetor-green/10 rounded-full flex items-center justify-center mb-5 group-hover:bg-vetor-green/20 transition-all duration-300">
                  <Building className="w-6 h-6 text-vetor-green" />
                </div>
                <h3 className="text-xl font-semibold text-vetor-green mb-4 group-hover:translate-x-1 transition-transform">Desenvolvimento de Sites</h3>
                <p className="text-white/70 group-hover:text-white/90 transition-colors">
                  Criamos sites profissionais e responsivos que destacam a identidade da sua marca, 
                  otimizados para conversão e com excelente experiência para o usuário em todos os dispositivos.
                </p>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-vetor-green/20 hover:border-vetor-green/40 transition-all duration-300 group">
                <div className="w-12 h-12 bg-vetor-green/10 rounded-full flex items-center justify-center mb-5 group-hover:bg-vetor-green/20 transition-all duration-300">
                  <Globe2 className="w-6 h-6 text-vetor-green" />
                </div>
                <h3 className="text-xl font-semibold text-vetor-green mb-4 group-hover:translate-x-1 transition-transform">Marketing Digital</h3>
                <p className="text-white/70 group-hover:text-white/90 transition-colors">
                  Desenvolvemos estratégias completas de marketing digital, incluindo SEO, gestão de redes sociais, 
                  campanhas pagas e análise de dados para maximizar sua presença online e gerar resultados concretos.
                </p>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-vetor-green/20 hover:border-vetor-green/40 transition-all duration-300 group">
                <div className="w-12 h-12 bg-vetor-green/10 rounded-full flex items-center justify-center mb-5 group-hover:bg-vetor-green/20 transition-all duration-300">
                  <Code className="w-6 h-6 text-vetor-green" />
                </div>
                <h3 className="text-xl font-semibold text-vetor-green mb-4 group-hover:translate-x-1 transition-transform">Projetos de Software</h3>
                <p className="text-white/70 group-hover:text-white/90 transition-colors">
                  Nossa equipe especializada desenvolve soluções de software personalizadas, 
                  desde aplicações web e sistemas de gestão até integrações complexas, 
                  atendendo às necessidades específicas do seu negócio e reduzindo significativamente a carga de trabalho operacional.
                </p>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-vetor-green/20 hover:border-vetor-green/40 transition-all duration-300 group">
                <div className="w-12 h-12 bg-vetor-green/10 rounded-full flex items-center justify-center mb-5 group-hover:bg-vetor-green/20 transition-all duration-300">
                  <Zap className="w-6 h-6 text-vetor-green" />
                </div>
                <h3 className="text-xl font-semibold text-vetor-green mb-4 group-hover:translate-x-1 transition-transform">Projetos de Automação</h3>
                <p className="text-white/70 group-hover:text-white/90 transition-colors">
                  Automatizamos processos empresariais através de tecnologias avançadas, 
                  reduzindo custos operacionais, eliminando tarefas repetitivas e aumentando 
                  a eficiência e produtividade do seu negócio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Advanced Technology Section - Redesigned with modern cards */}
      <section className="py-24 bg-vetor-black/80 relative overflow-hidden">
        {/* Background mesh pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(rgba(0, 176, 80, 0.08) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-4">Tecnologia Avançada</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Soluções para Aumentar seu Lucro
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-vetor-green to-vetor-green/40 mx-auto mb-8 rounded-full"></div>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Desenvolvemos tecnologias que automatizam processos, reduzem custos e maximizam o lucro da sua empresa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-sm p-8 rounded-xl border border-vetor-green/20 hover:border-vetor-green/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-[0_0_30px_rgba(0,176,80,0.2)] group">
              <div className="w-16 h-16 bg-vetor-green/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-vetor-green/20 transition-all duration-300">
                <Bot className="w-8 h-8 text-vetor-green" />
              </div>
              <h3 className="text-xl font-bold text-vetor-green mb-4 group-hover:translate-x-1 transition-transform">Robôs e Automação</h3>
              <p className="text-white/70 group-hover:text-white/90 transition-colors">
                Desenvolvemos robôs de software (RPA) que automatizam tarefas repetitivas, processos operacionais e fluxos de trabalho completos, permitindo que sua equipe foque em atividades estratégicas enquanto os robôs executam o trabalho operacional.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-sm p-8 rounded-xl border border-vetor-green/20 hover:border-vetor-green/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-[0_0_30px_rgba(0,176,80,0.2)] group">
              <div className="w-16 h-16 bg-vetor-green/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-vetor-green/20 transition-all duration-300">
                <Database className="w-8 h-8 text-vetor-green" />
              </div>
              <h3 className="text-xl font-bold text-vetor-green mb-4 group-hover:translate-x-1 transition-transform">Sistemas Integrados</h3>
              <p className="text-white/70 group-hover:text-white/90 transition-colors">
                Criamos sistemas inteligentes que integram todos os departamentos da sua empresa, eliminando retrabalho, reduzindo erros humanos e garantindo que todas as informações estejam centralizadas e acessíveis para tomadas de decisão mais eficientes.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-sm p-8 rounded-xl border border-vetor-green/20 hover:border-vetor-green/40 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-[0_0_30px_rgba(0,176,80,0.2)] group">
              <div className="w-16 h-16 bg-vetor-green/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-vetor-green/20 transition-all duration-300">
                <BarChart className="w-8 h-8 text-vetor-green" />
              </div>
              <h3 className="text-xl font-bold text-vetor-green mb-4 group-hover:translate-x-1 transition-transform">Otimização de Lucro</h3>
              <p className="text-white/70 group-hover:text-white/90 transition-colors">
                Nossas soluções tecnológicas são projetadas com foco no aumento da lucratividade, seja através da redução de custos operacionais, otimização de processos ou aumento da capacidade produtiva, gerando ROI mensurável para seu negócio.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center p-8 bg-black/30 backdrop-blur-sm rounded-xl border border-vetor-green/10 max-w-3xl mx-auto shadow-lg">
            <p className="text-lg text-white/80 mb-0">
              Nossas soluções já ajudaram diversas empresas a reduzir até <span className="font-bold text-vetor-green">70%</span> da carga de trabalho manual em processos administrativos, resultando em economia significativa e aumento médio de <span className="font-bold text-vetor-green">30%</span> nos lucros operacionais.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission, Vision, Values Section - Modernized with vertical dividers */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-[15%] -right-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-vetor-green/10 to-transparent blur-3xl"></div>
        <div className="absolute bottom-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-tr from-vetor-green/10 to-transparent blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0">
            <div className="glass-card md:border-r-0 md:rounded-r-none p-8 shadow-xl backdrop-blur-lg transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,176,80,0.15)] animate-slide-in-left relative overflow-hidden group" style={{ animationDelay: '0.1s' }}>
              <div className="absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-transparent via-vetor-green/20 to-transparent hidden md:block"></div>
              <div className="mb-8 text-center md:text-left">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-vetor-green/10 rounded-full mb-4 group-hover:bg-vetor-green/20 transition-all duration-300">
                  <Target className="w-7 h-7 text-vetor-green" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:translate-x-1 transition-transform">
                  Nossa Missão
                </h3>
                <div className="w-12 h-1 bg-vetor-green/50 rounded-full mt-3 mb-5 group-hover:w-20 transition-all duration-300 mx-auto md:mx-0"></div>
              </div>
              <p className="text-white/70 text-lg group-hover:text-white/90 transition-colors">
                {aboutData.mission}
              </p>
            </div>
            
            <div className="glass-card md:border-r-0 md:rounded-none p-8 shadow-xl backdrop-blur-lg transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,176,80,0.15)] animate-slide-in-bottom relative overflow-hidden group" style={{ animationDelay: '0.2s' }}>
              <div className="absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-transparent via-vetor-green/20 to-transparent hidden md:block"></div>
              <div className="mb-8 text-center md:text-left">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-vetor-green/10 rounded-full mb-4 group-hover:bg-vetor-green/20 transition-all duration-300">
                  <Eye className="w-7 h-7 text-vetor-green" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:translate-x-1 transition-transform">
                  Nossa Visão
                </h3>
                <div className="w-12 h-1 bg-vetor-green/50 rounded-full mt-3 mb-5 group-hover:w-20 transition-all duration-300 mx-auto md:mx-0"></div>
              </div>
              <p className="text-white/70 text-lg group-hover:text-white/90 transition-colors">
                {aboutData.vision}
              </p>
            </div>
            
            <div className="glass-card md:rounded-l-none p-8 shadow-xl backdrop-blur-lg transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,176,80,0.15)] animate-slide-in-right relative overflow-hidden group" style={{ animationDelay: '0.3s' }}>
              <div className="mb-8 text-center md:text-left">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-vetor-green/10 rounded-full mb-4 group-hover:bg-vetor-green/20 transition-all duration-300">
                  <Heart className="w-7 h-7 text-vetor-green" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:translate-x-1 transition-transform">
                  Nossos Valores
                </h3>
                <div className="w-12 h-1 bg-vetor-green/50 rounded-full mt-3 mb-5 group-hover:w-20 transition-all duration-300 mx-auto md:mx-0"></div>
              </div>
              <ul className="text-white/70 space-y-3">
                {aboutData.values.map((value, index) => (
                  <li key={index} className="flex items-center group-hover:translate-x-1 transition-transform">
                    <div className="w-6 h-6 rounded-full bg-vetor-green/10 flex items-center justify-center mr-3">
                      <Check className="w-3.5 h-3.5 text-vetor-green" />
                    </div>
                    <span className="text-lg group-hover:text-white/90 transition-colors">{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section - Redesigned with dual-tone cards */}
      <section className="py-24 bg-gradient-to-b from-vetor-black to-black relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,176,80,0.05)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_90%,rgba(0,176,80,0.05)_0%,transparent_50%)]"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-6">Contato</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Entre em Contato
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-vetor-green to-vetor-green/40 mx-auto mb-8 rounded-full"></div>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Estamos prontos para ajudar seu negócio a crescer com nossas soluções tecnológicas. Entre em contato conosco!
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="glass-card p-8 shadow-xl backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden relative group">
              {/* Highlight accent */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-vetor-green to-vetor-green/40"></div>
              
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <span className="inline-block w-8 h-8 rounded-full bg-vetor-green/20 flex items-center justify-center mr-3">
                  <MapPin className="w-4 h-4 text-vetor-green" />
                </span>
                Informações de Contato
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start p-4 bg-black/30 rounded-xl backdrop-blur-sm border border-white/5 transition-all duration-300 hover:border-vetor-green/30 hover:bg-black/40">
                  <div className="w-12 h-12 bg-vetor-green/10 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-vetor-green" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">
                      Endereço
                    </h4>
                    <p className="text-white/70">
                      Torre Tóquio, Metropolitan Mall - Av. Dep. Jamel Cecílio, 2690 - Jardim Goiás, Goiânia - GO, 74810-100
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-black/30 rounded-xl backdrop-blur-sm border border-white/5 transition-all duration-300 hover:border-vetor-green/30 hover:bg-black/40">
                  <div className="w-12 h-12 bg-vetor-green/10 rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-vetor-green" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">
                      Email
                    </h4>
                    <a 
                      href={`mailto:${footerData.email}`} 
                      className="text-white/70 hover:text-vetor-green transition-colors"
                    >
                      {footerData.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start p-4 bg-black/30 rounded-xl backdrop-blur-sm border border-white/5 transition-all duration-300 hover:border-vetor-green/30 hover:bg-black/40">
                  <div className="w-12 h-12 bg-vetor-green/10 rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-vetor-green" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">
                      Telefone
                    </h4>
                    <a 
                      href={`tel:${footerData.phone.replace(/\D/g, '')}`} 
                      className="text-white/70 hover:text-vetor-green transition-colors"
                    >
                      {footerData.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card shadow-xl backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden relative group p-0">
              {/* Highlight accent */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
              
              <Card className="bg-transparent border-none text-white h-full">
                <CardHeader className="bg-black/40 backdrop-blur-md p-8 border-b border-white/10">
                  <CardTitle className="text-2xl font-bold text-white flex items-center gap-4">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    Fale Conosco no WhatsApp
                  </CardTitle>
                  <CardDescription className="text-white/70 mt-2">
                    Atendimento rápido e personalizado para suas necessidades
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8 bg-black/20">
                  <div className="space-y-6">
                    <p className="text-white/80">
                      Entre em contato diretamente pelo WhatsApp para obter uma resposta rápida. 
                      Nossa equipe está disponível para ajudar com:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                          <Check className="w-3.5 h-3.5 text-green-500" />
                        </div>
                        <span className="text-white/80">Desenvolvimento de softwares personalizados</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                          <Check className="w-3.5 h-3.5 text-green-500" />
                        </div>
                        <span className="text-white/80">Automação de processos</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                          <Check className="w-3.5 h-3.5 text-green-500" />
                        </div>
                        <span className="text-white/80">Soluções tecnológicas para seu negócio</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                          <Check className="w-3.5 h-3.5 text-green-500" />
                        </div>
                        <span className="text-white/80">Orçamentos e consultorias</span>
                      </li>
                    </ul>
                    
                    <div className="pt-6">
                      <a 
                        href="https://wa.me/62982474117" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full block"
                      >
                        <Button className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white border-none py-6 text-lg flex items-center justify-center gap-3 transition-all duration-300 shadow-lg hover:shadow-green-700/20">
                          <MessageCircle className="w-6 h-6" />
                          Iniciar Conversa no WhatsApp
                        </Button>
                      </a>
                    </div>
                    
                    <p className="text-center text-sm text-white/60 pt-2">
                      Horário de atendimento: Segunda a Sexta, 8h às 18h
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
