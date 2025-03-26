import React from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import { Check, Target, Eye, Heart, Mail, Phone, MapPin, Bot, Database, TrendingUp, MessageCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const About: React.FC = () => {
  const { aboutData, footerData } = useAdmin();
  
  return (
    <div className="page-transition pt-20 bg-black text-white">
      {/* Hero Section - Expanded with more information */}
      <div className="bg-gradient-to-b from-vetor-black to-black py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-6">Quem Somos</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
              {aboutData.title}
            </h1>
            <p className="text-lg text-gray-300 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              {aboutData.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 text-left">
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-vetor-green/20 hover:border-vetor-green/40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-vetor-green mb-4">Desenvolvimento de Sites</h3>
                <p className="text-gray-300">
                  Criamos sites profissionais e responsivos que destacam a identidade da sua marca, 
                  otimizados para conversão e com excelente experiência para o usuário em todos os dispositivos.
                </p>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-vetor-green/20 hover:border-vetor-green/40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-vetor-green mb-4">Marketing Digital</h3>
                <p className="text-gray-300">
                  Desenvolvemos estratégias completas de marketing digital, incluindo SEO, gestão de redes sociais, 
                  campanhas pagas e análise de dados para maximizar sua presença online e gerar resultados concretos.
                </p>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-vetor-green/20 hover:border-vetor-green/40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-vetor-green mb-4">Projetos de Software</h3>
                <p className="text-gray-300">
                  Nossa equipe especializada desenvolve soluções de software personalizadas, 
                  desde aplicações web e sistemas de gestão até integrações complexas, 
                  atendendo às necessidades específicas do seu negócio e reduzindo significativamente a carga de trabalho operacional.
                </p>
              </div>
              
              <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-vetor-green/20 hover:border-vetor-green/40 transition-all duration-300">
                <h3 className="text-xl font-semibold text-vetor-green mb-4">Projetos de Automação</h3>
                <p className="text-gray-300">
                  Automatizamos processos empresariais através de tecnologias avançadas, 
                  reduzindo custos operacionais, eliminando tarefas repetitivas e aumentando 
                  a eficiência e produtividade do seu negócio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* New section for Robotics and Advanced Technology */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-4">Tecnologia Avançada</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Soluções para Aumentar seu Lucro
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Desenvolvemos tecnologias que automatizam processos, reduzem custos e maximizam o lucro da sua empresa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-vetor-green/20 hover:border-vetor-green/40 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-vetor-green/10 rounded-full flex items-center justify-center mb-6">
                <Bot className="w-8 h-8 text-vetor-green" />
              </div>
              <h3 className="text-xl font-bold text-vetor-green mb-4">Robôs e Automação</h3>
              <p className="text-gray-300">
                Desenvolvemos robôs de software (RPA) que automatizam tarefas repetitivas, processos operacionais e fluxos de trabalho completos, permitindo que sua equipe foque em atividades estratégicas enquanto os robôs executam o trabalho operacional.
              </p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-vetor-green/20 hover:border-vetor-green/40 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-vetor-green/10 rounded-full flex items-center justify-center mb-6">
                <Database className="w-8 h-8 text-vetor-green" />
              </div>
              <h3 className="text-xl font-bold text-vetor-green mb-4">Sistemas Integrados</h3>
              <p className="text-gray-300">
                Criamos sistemas inteligentes que integram todos os departamentos da sua empresa, eliminando retrabalho, reduzindo erros humanos e garantindo que todas as informações estejam centralizadas e acessíveis para tomadas de decisão mais eficientes.
              </p>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-vetor-green/20 hover:border-vetor-green/40 transition-all duration-300 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-vetor-green/10 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-vetor-green" />
              </div>
              <h3 className="text-xl font-bold text-vetor-green mb-4">Otimização de Lucro</h3>
              <p className="text-gray-300">
                Nossas soluções tecnológicas são projetadas com foco no aumento da lucratividade, seja através da redução de custos operacionais, otimização de processos ou aumento da capacidade produtiva, gerando ROI mensurável para seu negócio.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-lg text-white/70 max-w-3xl mx-auto mb-8">
              Nossas soluções já ajudaram diversas empresas a reduzir até 70% da carga de trabalho manual em processos administrativos, resultando em economia significativa e aumento médio de 30% nos lucros operacionais.
            </p>
          </div>
        </div>
      </section>
      
      {/* Mission, Vision, Values Section */}
      <section className="py-20 bg-vetor-black/80">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black/50 rounded-xl p-6 shadow-lg border border-vetor-green/20 hover:border-vetor-green/50 transition-all duration-300 animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
              <div className="w-14 h-14 bg-vetor-green bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-vetor-green" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Nossa Missão
              </h3>
              <p className="text-gray-300">
                {aboutData.mission}
              </p>
            </div>
            
            <div className="bg-black/50 rounded-xl p-6 shadow-lg border border-vetor-green/20 hover:border-vetor-green/50 transition-all duration-300 animate-slide-in-bottom" style={{ animationDelay: '0.2s' }}>
              <div className="w-14 h-14 bg-vetor-green bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-vetor-green" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Nossa Visão
              </h3>
              <p className="text-gray-300">
                {aboutData.vision}
              </p>
            </div>
            
            <div className="bg-black/50 rounded-xl p-6 shadow-lg border border-vetor-green/20 hover:border-vetor-green/50 transition-all duration-300 animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
              <div className="w-14 h-14 bg-vetor-green bg-opacity-20 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-vetor-green" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                Nossos Valores
              </h3>
              <ul className="text-gray-300 space-y-2">
                {aboutData.values.map((value, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="w-4 h-4 text-vetor-green mr-2 flex-shrink-0" />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section - Modified to show WhatsApp contact instead of form */}
      <section className="py-24 bg-black relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-vetor-black/30"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-vetor-green/20 text-vetor-green hover:bg-vetor-green/30 mb-6">Contato</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Entre em Contato
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Estamos prontos para ajudar seu negócio a crescer com nossas soluções tecnológicas. Entre em contato conosco!
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-vetor-green/20">
              <h3 className="text-2xl font-bold text-white mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-vetor-green/20 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-vetor-green" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">
                      Endereço
                    </h4>
                    <p className="text-gray-300">
                      Torre Tóquio, Metropolitan Mall - Av. Dep. Jamel Cecílio, 2690 - Jardim Goiás, Goiânia - GO, 74810-100
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-vetor-green/20 rounded-full flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-vetor-green" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">
                      Email
                    </h4>
                    <a 
                      href={`mailto:${footerData.email}`} 
                      className="text-gray-300 hover:text-vetor-green transition-colors"
                    >
                      {footerData.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-vetor-green/20 rounded-full flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-vetor-green" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-2">
                      Telefone
                    </h4>
                    <a 
                      href={`tel:${footerData.phone.replace(/\D/g, '')}`} 
                      className="text-gray-300 hover:text-vetor-green transition-colors"
                    >
                      {footerData.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-black/40 backdrop-blur-sm rounded-xl border border-vetor-green/20 p-8">
              <Card className="bg-transparent border-vetor-green/20 text-white">
                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    Fale Conosco no WhatsApp
                  </CardTitle>
                  <CardDescription className="text-gray-300 mt-2">
                    Atendimento rápido e personalizado para suas necessidades
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="space-y-4">
                    <p className="text-gray-300">
                      Entre em contato diretamente pelo WhatsApp para obter uma resposta rápida. 
                      Nossa equipe está disponível para ajudar com:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Desenvolvimento de softwares personalizados</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Automação de processos</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Soluções tecnológicas para seu negócio</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Orçamentos e consultorias</span>
                      </li>
                    </ul>
                    
                    <div className="pt-4">
                      <a 
                        href="https://wa.me/62982474117" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full block"
                      >
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white border-none py-6 text-lg flex items-center justify-center gap-3">
                          <MessageCircle className="w-6 h-6" />
                          Iniciar Conversa no WhatsApp
                        </Button>
                      </a>
                    </div>
                    
                    <p className="text-center text-sm text-gray-400 pt-2">
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
