import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Code, Smartphone, Globe, Rocket, LineChart, 
  Shield, BarChart, Search, Zap, ArrowRight, Check,
  Palette, LayoutGrid, Users, ClipboardCheck, MousePointer,
  Headphones, MessageSquare, HeartHandshake, Lightbulb,
  Building, FileText
} from 'lucide-react';

const WebsiteBenefits: React.FC = () => {
  const [currentTab, setCurrentTab] = useState('profissional');
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  const isHeroInView = useInView(heroRef, { once: true });
  const isFeaturesInView = useInView(featuresRef, { once: true });
  const isProcessInView = useInView(processRef, { once: true });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true });
  const isPricingInView = useInView(pricingRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });
  
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const yPos = useTransform(scrollYProgress, [0, 0.2], [0, -50]);
  
  const testimonials = [
    {
      name: "Ana Silva",
      role: "Proprietária, Clínica Estética Renova",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      content: "Nosso site não era apenas bonito, mas também funcional. As conversões aumentaram em 140% no primeiro mês após o lançamento."
    },
    {
      name: "Carlos Eduardo",
      role: "CEO, Logística Express",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      content: "O site foi além das nossas expectativas. O processo foi simples e o resultado elevou nossa marca a um novo patamar profissional."
    },
    {
      name: "Mariana Costa",
      role: "Diretora, Escola Futuro Brilhante",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      content: "A equipe entendeu perfeitamente nossas necessidades. O site reflete exatamente nossa filosofia educacional e valores."
    }
  ];
  
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="overflow-hidden bg-black">
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen pt-36 md:pt-0 md:flex md:items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px] opacity-20 pointer-events-none"></div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-vetor-green/5 rounded-full animate-pulse-slow opacity-30"></div>
        <div className="absolute top-40 right-20 w-48 h-48 border border-vetor-green/10 rounded-full animate-float opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-vetor-green/5 rounded-full blur-xl"></div>
        <div className="absolute -bottom-10 left-1/4 w-64 h-64 bg-vetor-green/5 rounded-full blur-3xl"></div>
        
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          style={{ opacity, y: yPos }}
        >
          <div className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-vetor-green/20 to-transparent transform"></div>
          <div className="absolute inset-y-0 left-1/3 w-px bg-gradient-to-b from-transparent via-vetor-green/20 to-transparent"></div>
          <div className="absolute inset-y-0 right-1/3 w-px bg-gradient-to-b from-transparent via-vetor-green/20 to-transparent"></div>
        </motion.div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              className="lg:w-1/2 space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.7 }}
            >
              <div>
                <Badge className="bg-vetor-green/10 text-vetor-green hover:bg-vetor-green/20 mb-4 py-1.5 px-4 text-xs font-medium tracking-wider">WEBSITES PROFISSIONAIS</Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Seu negócio merece um<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-vetor-green via-vetor-green to-vetor-lightgreen">site impecável</span>
                </h1>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
                  Desenvolvemos websites profissionais otimizados para resultados, prontos para transformar visitantes em clientes e impulsionar seu negócio.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-vetor-green hover:bg-vetor-darkgreen text-white gap-2 group"
                  >
                    <span>Solicitar Orçamento</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-vetor-green/30 text-vetor-green hover:bg-vetor-green/10"
                  >
                    Ver Portfólio
                  </Button>
                </div>
                
                <div className="mt-8 flex items-center gap-6">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-10 h-10 rounded-full bg-vetor-green/20 border border-black flex items-center justify-center text-white text-xs">
                        <img
                          src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${i}.jpg`}
                          alt="Cliente"
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-gray-400">
                    <span className="text-white font-medium">+200</span> clientes satisfeitos
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-vetor-green/10 flex items-center justify-center">
                    <Check className="h-4 w-4 text-vetor-green" />
                  </div>
                  <span className="text-sm text-gray-300">Design Responsivo</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-vetor-green/10 flex items-center justify-center">
                    <Check className="h-4 w-4 text-vetor-green" />
                  </div>
                  <span className="text-sm text-gray-300">SEO Otimizado</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-vetor-green/10 flex items-center justify-center">
                    <Check className="h-4 w-4 text-vetor-green" />
                  </div>
                  <span className="text-sm text-gray-300">Alta Performance</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-vetor-green/10 flex items-center justify-center">
                    <Check className="h-4 w-4 text-vetor-green" />
                  </div>
                  <span className="text-sm text-gray-300">Gestão Facilitada</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: 50 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-vetor-green/20 to-vetor-green/5 rounded-2xl blur-xl opacity-70"></div>
                <div className="relative bg-gradient-to-br from-black/80 to-black/40 backdrop-blur-md border border-vetor-green/10 rounded-2xl p-1 shadow-2xl">
                  <div className="bg-black rounded-xl overflow-hidden">
                    <div className="flex items-center bg-black/60 p-4 border-b border-white/10">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="mx-auto bg-white/5 rounded-full px-4 py-1 text-xs text-gray-400">
                        www.seusite.com.br
                      </div>
                    </div>
                    
                    <div className="p-4 relative">
                      <img 
                        src="https://placehold.co/600x400/001400/00B050/png?text=Website+Preview&font=montserrat"
                        alt="Website Preview" 
                        className="w-full rounded shadow-lg"
                      />
                      
                      <div className="absolute top-8 right-8 bg-vetor-green/10 backdrop-blur-sm border border-vetor-green/20 rounded-lg p-3 shadow-lg">
                        <div className="flex gap-2 items-center">
                          <BarChart className="w-4 h-4 text-vetor-green" />
                          <span className="text-xs text-white">Análise em tempo real</span>
                        </div>
                        <div className="mt-2 space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-400">Visitantes</span>
                            <span className="text-white">245</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-400">Conversões</span>
                            <span className="text-vetor-green">23</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-400">Taxa</span>
                            <span className="text-vetor-green">9.4%</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="absolute bottom-12 left-8 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg p-3 shadow-lg">
                        <div className="flex gap-2 items-center mb-2">
                          <Search className="w-4 h-4 text-vetor-green" />
                          <span className="text-xs text-white">SEO Performance</span>
                        </div>
                        <div className="space-y-2">
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-gray-400">Ranking</span>
                              <span className="text-white">Top 3</span>
                            </div>
                            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-vetor-green to-vetor-lightgreen w-[85%] rounded-full"></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span className="text-gray-400">Velocidade</span>
                              <span className="text-white">95/100</span>
                            </div>
                            <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                              <div className="h-full bg-gradient-to-r from-vetor-green to-vetor-lightgreen w-[95%] rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-vetor-green/20 rounded-full flex items-center justify-center animate-float">
                  <Zap className="w-6 h-6 text-vetor-green" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-vetor-green/20 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                  <Rocket className="w-4 h-4 text-vetor-green" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section ref={featuresRef} className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgMHYyaC0ydi0yaDJ6bTItNGgtMnYyaC0yaC0ydjJoMnYyaC0ydjJoMnYyaDJ2LTJoMnYyaDJ2LTJoMnYtMmgtMnYtMmgydi0yaC0ydi0yaC0yek00MiAzMHYyaC0ydi0yaDJ6bS00IDRoMnYyaC0ydi0yek0zNiAyNnYyaC0ydi0yaDJ6bS00IDBoMnYyaC0ydi0yek0zMCAzMHYyaC0ydi0yaDJ6bS00IDBoMnYyaC0ydi0yek0yNiAyNnYyaC0ydi0yaDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-5"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            className="max-w-2xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isFeaturesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="bg-vetor-green/10 text-vetor-green hover:bg-vetor-green/20 mb-4 py-1.5 px-4 text-xs font-medium tracking-wider">FUNCIONALIDADES</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Websites completos para<br />seu negócio se destacar
            </h2>
            <p className="text-gray-300 text-lg">
              Desenvolvidos para oferecer uma experiência excepcional e gerar resultados, combinando design, tecnologia e estratégia.
            </p>
          </motion.div>
          
          <Tabs defaultValue="profissional" className="w-full" onValueChange={setCurrentTab}>
            <div className="flex justify-center mb-10">
              <TabsList className="bg-black border border-vetor-green/20 p-1">
                <TabsTrigger 
                  value="profissional" 
                  className={`px-8 py-2.5 ${currentTab === 'profissional' ? 'bg-vetor-green text-white data-[state=active]:bg-vetor-green data-[state=active]:text-white' : 'text-white data-[state=active]:bg-transparent'}`}
                >
                  Profissional
                </TabsTrigger>
                <TabsTrigger 
                  value="ecommerce" 
                  className={`px-8 py-2.5 ${currentTab === 'ecommerce' ? 'bg-vetor-green text-white data-[state=active]:bg-vetor-green data-[state=active]:text-white' : 'text-white data-[state=active]:bg-transparent'}`}
                >
                  E-commerce
                </TabsTrigger>
                <TabsTrigger 
                  value="institucional" 
                  className={`px-8 py-2.5 ${currentTab === 'institucional' ? 'bg-vetor-green text-white data-[state=active]:bg-vetor-green data-[state=active]:text-white' : 'text-white data-[state=active]:bg-transparent'}`}
                >
                  Institucional
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="profissional" className="mt-0">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={staggerContainer}
                initial="hidden"
                animate={isFeaturesInView ? "visible" : "hidden"}
              >
                {[
                  {
                    icon: <Palette className="w-6 h-6 text-vetor-green" />,
                    title: "Design Personalizado",
                    description: "Design exclusivo alinhado com sua identidade visual para fortalecer sua marca."
                  },
                  {
                    icon: <Smartphone className="w-6 h-6 text-vetor-green" />,
                    title: "Totalmente Responsivo",
                    description: "Adaptação perfeita para todos os dispositivos: desktops, tablets e smartphones."
                  },
                  {
                    icon: <Search className="w-6 h-6 text-vetor-green" />,
                    title: "Otimizado para SEO",
                    description: "Estrutura planejada para ranquear bem nos motores de busca e atrair visitantes."
                  },
                  {
                    icon: <Zap className="w-6 h-6 text-vetor-green" />,
                    title: "Alta Performance",
                    description: "Carregamento rápido e desempenho otimizado para melhor experiência do usuário."
                  },
                  {
                    icon: <MessageSquare className="w-6 h-6 text-vetor-green" />,
                    title: "Integração com Chat",
                    description: "Comunicação direta com seus visitantes para aumentar taxas de conversão."
                  },
                  {
                    icon: <LineChart className="w-6 h-6 text-vetor-green" />,
                    title: "Análise de Resultados",
                    description: "Acompanhamento de métricas importantes para medir o desempenho do site."
                  }
                ].map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="relative group"
                    variants={fadeIn}
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-b from-vetor-green/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                    <Card className="h-full bg-black/50 border border-vetor-green/10 rounded-xl overflow-hidden relative z-10 group-hover:border-vetor-green/30 transition-all duration-300">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="mb-4">
                          <div className="w-12 h-12 bg-vetor-green/10 rounded-full flex items-center justify-center">
                            {feature.icon}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-gray-400 flex-grow">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="ecommerce" className="mt-0">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={staggerContainer}
                initial="hidden"
                animate={isFeaturesInView && currentTab === "ecommerce" ? "visible" : "hidden"}
              >
                {[
                  {
                    icon: <Shopping className="w-6 h-6 text-vetor-green" />,
                    title: "Catálogo de Produtos",
                    description: "Exibição organizada e atrativa dos seus produtos com categorias e filtros."
                  },
                  {
                    icon: <CreditCard className="w-6 h-6 text-vetor-green" />,
                    title: "Pagamentos Integrados",
                    description: "Integração com as principais formas de pagamento do mercado."
                  },
                  {
                    icon: <TruckFast className="w-6 h-6 text-vetor-green" />,
                    title: "Cálculo de Frete",
                    description: "Integração com serviços de entrega e cálculo automático de frete."
                  },
                  {
                    icon: <Users className="w-6 h-6 text-vetor-green" />,
                    title: "Área do Cliente",
                    description: "Portal para clientes acompanharem pedidos e histórico de compras."
                  },
                  {
                    icon: <Percent className="w-6 h-6 text-vetor-green" />,
                    title: "Cupons e Promoções",
                    description: "Sistema de descontos e promoções para aumentar suas vendas."
                  },
                  {
                    icon: <BarChart className="w-6 h-6 text-vetor-green" />,
                    title: "Relatórios de Vendas",
                    description: "Estatísticas detalhadas sobre vendas, produtos mais populares e comportamento dos clientes."
                  }
                ].map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="relative group"
                    variants={fadeIn}
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-b from-vetor-green/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                    <Card className="h-full bg-black/50 border border-vetor-green/10 rounded-xl overflow-hidden relative z-10 group-hover:border-vetor-green/30 transition-all duration-300">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="mb-4">
                          <div className="w-12 h-12 bg-vetor-green/10 rounded-full flex items-center justify-center">
                            {feature.icon}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-gray-400 flex-grow">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="institucional" className="mt-0">
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={staggerContainer}
                initial="hidden"
                animate={isFeaturesInView && currentTab === "institucional" ? "visible" : "hidden"}
              >
                {[
                  {
                    icon: <Building className="w-6 h-6 text-vetor-green" />,
                    title: "Apresentação Corporativa",
                    description: "Seções estruturadas para apresentar sua empresa, valores e diferenciais."
                  },
                  {
                    icon: <FileText className="w-6 h-6 text-vetor-green" />,
                    title: "Blog Integrado",
                    description: "Área de conteúdo para compartilhar notícias e fortalecer sua autoridade no setor."
                  },
                  {
                    icon: <Users className="w-6 h-6 text-vetor-green" />,
                    title: "Página de Equipe",
                    description: "Apresentação dos profissionais que fazem parte da sua empresa."
                  },
                  {
                    icon: <MessageSquare className="w-6 h-6 text-vetor-green" />,
                    title: "Formulários Customizados",
                    description: "Formulários específicos para captar diferentes tipos de leads e solicitações."
                  },
                  {
                    icon: <FileImage className="w-6 h-6 text-vetor-green" />,
                    title: "Galeria de Projetos",
                    description: "Exibição de trabalhos, projetos ou portfólio com visual impactante."
                  },
                  {
                    icon: <EarthIcon className="w-6 h-6 text-vetor-green" />,
                    title: "Múltiplos Idiomas",
                    description: "Possibilidade de oferecer seu conteúdo em diferentes idiomas para alcance global."
                  }
                ].map((feature, index) => (
                  <motion.div 
                    key={index}
                    className="relative group"
                    variants={fadeIn}
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-b from-vetor-green/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                    <Card className="h-full bg-black/50 border border-vetor-green/10 rounded-xl overflow-hidden relative z-10 group-hover:border-vetor-green/30 transition-all duration-300">
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="mb-4">
                          <div className="w-12 h-12 bg-vetor-green/10 rounded-full flex items-center justify-center">
                            {feature.icon}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                        <p className="text-gray-400 flex-grow">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Process Section */}
      <section ref={processRef} className="py-20 bg-gradient-to-b from-vetor-black/80 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px] opacity-20"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            className="max-w-2xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="bg-vetor-green/10 text-vetor-green hover:bg-vetor-green/20 mb-4 py-1.5 px-4 text-xs font-medium tracking-wider">PROCESSO</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Como funciona o desenvolvimento
            </h2>
            <p className="text-gray-300 text-lg">
              Processo estruturado para garantir que seu site seja entregue com qualidade, dentro do prazo e atendendo a todas as suas necessidades.
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-vetor-green/30 via-vetor-green/20 to-vetor-green/5 hidden md:block"></div>
            
            <div className="space-y-24 relative">
              {[
                {
                  step: 1,
                  title: "Briefing e Planejamento",
                  description: "Entendemos seus objetivos, público-alvo e necessidades específicas para planejar a estrutura ideal para seu site.",
                  icon: <Lightbulb className="w-8 h-8 text-vetor-green" />,
                  align: "right"
                },
                {
                  step: 2,
                  title: "Design e Prototipagem",
                  description: "Criamos layouts modernos e atrativos, alinhados com sua identidade visual, incluindo wireframes e protótipos interativos.",
                  icon: <Palette className="w-8 h-8 text-vetor-green" />,
                  align: "left"
                },
                {
                  step: 3,
                  title: "Desenvolvimento",
                  description: "Programação do site com tecnologias modernas, foco em performance, responsividade e otimização para SEO.",
                  icon: <Code className="w-8 h-8 text-vetor-green" />,
                  align: "right"
                },
                {
                  step: 4,
                  title: "Testes e Refinamentos",
                  description: "Testes rigorosos em diferentes dispositivos e navegadores, ajustes finais e otimizações de performance.",
                  icon: <MousePointer className="w-8 h-8 text-vetor-green" />,
                  align: "left"
                },
                {
                  step: 5,
                  title: "Lançamento e Suporte",
                  description: "Publicação do site e treinamento da sua equipe para gerenciamento de conteúdo, com suporte contínuo pós-lançamento.",
                  icon: <Rocket className="w-8 h-8 text-vetor-green" />,
                  align: "right"
                }
              ].map((process, index) => (
                <motion.div 
                  key={index}
                  className={`flex flex-col ${process.align === "right" ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isProcessInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div className={`md:w-1/2 ${process.align === "right" ? "md:text-right" : "md:text-left"} mb-8 md:mb-0`}>
                    <div className="inline-block bg-vetor-green/10 px-3 py-1 rounded-full text-vetor-green text-sm font-medium mb-4">
                      Etapa {process.step}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{process.title}</h3>
                    <p className="text-gray-300">{process.description}</p>
                  </div>
                  
                  <div className="md:w-24 flex justify-center relative">
                    <div className="w-16 h-16 bg-black border-2 border-vetor-green/30 rounded-full flex items-center justify-center z-10">
                      {process.icon}
                    </div>
                    <div className="absolute w-24 h-24 bg-vetor-green/5 rounded-full animate-pulse-slow"></div>
                  </div>
                  
                  <div className="md:w-1/2 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptMC00aDJ2MmgtMnYtMnptLTQgMHYyaC0ydi0yaDJ6bTItNGgtMnYyaC0yaC0ydjJoMnYyaC0ydjJoMnYyaDJ2LTJoMnYyaDJ2LTJoMnYtMmgtMnYtMmgydi0yaC0ydi0yaC0yek00MiAzMHYyaC0ydi0yaDJ6bS00IDRoMnYyaC0ydi0yek0zNiAyNnYyaC0ydi0yaDJ6bS00IDBoMnYyaC0ydi0yek0zMCAzMHYyaC0ydi0yaDJ6bS00IDBoMnYyaC0ydi0yek0yNiAyNnYyaC0ydi0yaDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-5"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            className="max-w-2xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="bg-vetor-green/10 text-vetor-green hover:bg-vetor-green/20 mb-4 py-1.5 px-4 text-xs font-medium tracking-wider">DEPOIMENTOS</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              O que nossos clientes dizem
            </h2>
            <p className="text-gray-300 text-lg">
              Confira a experiência de quem já transformou sua presença digital com nossos websites.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div 
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                animate={isTestimonialsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-vetor-green/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                <Card className="h-full bg-gradient-to-br from-black/80 to-black border border-vetor-green/10 rounded-xl overflow-hidden relative z-10 group-hover:border-vetor-green/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">{testimonial.name}</h4>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <blockquote className="relative">
                      <div className="absolute -top-2 -left-2 text-4xl text-vetor-green/20">"</div>
                      <p className="text-gray-300 relative z-10 pl-3">
                        {testimonial.content}
                      </p>
                      <div className="absolute -bottom-6 -right-2 text-4xl text-vetor-green/20">"</div>
                    </blockquote>
                    
                    <div className="mt-8 flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section ref={pricingRef} className="py-20 bg-gradient-to-b from-vetor-black/80 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:40px_40px] opacity-20"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            className="max-w-2xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isPricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="bg-vetor-green/10 text-vetor-green hover:bg-vetor-green/20 mb-4 py-1.5 px-4 text-xs font-medium tracking-wider">INVESTIMENTO</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Planos personalizados para seu projeto
            </h2>
            <p className="text-gray-300 text-lg">
              Oferecemos soluções sob medida para cada tipo de negócio, com preços competitivos e alto valor agregado.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Básico",
                description: "Ideal para pequenos negócios que estão começando.",
                price: "R$ 1.997",
                features: [
                  "Site responsivo até 5 páginas",
                  "Design personalizado",
                  "Otimização para SEO",
                  "Formulário de contato",
                  "Integração com redes sociais",
                  "Instalação de analytics"
                ],
                popular: false,
                button: "Solicitar Orçamento"
              },
              {
                name: "Profissional",
                description: "Perfeito para empresas em crescimento com necessidades específicas.",
                price: "R$ 3.997",
                features: [
                  "Site responsivo até 10 páginas",
                  "Design premium personalizado",
                  "Otimização avançada para SEO",
                  "Múltiplos formulários",
                  "Blog integrado",
                  "Chat online",
                  "Painel administrativo",
                  "Treinamento de uso"
                ],
                popular: true,
                button: "Solicitar Orçamento"
              },
              {
                name: "Empresarial",
                description: "Solução completa para empresas estabelecidas que buscam excelência.",
                price: "R$ 7.997",
                features: [
                  "Site responsivo até 20 páginas",
                  "Design premium exclusivo",
                  "Otimização avançada para SEO",
                  "Múltiplos formulários",
                  "Blog integrado",
                  "Chat online",
                  "Painel administrativo avançado",
                  "Área de clientes",
                  "Integração com sistemas",
                  "Consultoria estratégica",
                  "Suporte prioritário"
                ],
                popular: false,
                button: "Solicitar Orçamento"
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                className="relative h-full"
                initial={{ opacity: 0, y: 30 }}
                animate={isPricingInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                {plan.popular && (
                  <div className="absolute top-0 inset-x-0 flex justify-center -translate-y-1/2">
                    <div className="bg-vetor-green text-white text-xs font-medium px-4 py-1 rounded-full">
                      Mais Popular
                    </div>
                  </div>
                )}
                
                <Card 
                  className={`h-full bg-gradient-to-br from-black/80 to-black backdrop-blur-sm border ${plan.popular ? 'border-vetor-green/30' : 'border-vetor-green/10'} rounded-xl overflow-hidden relative z-10 transition-all duration-300 ${plan.popular ? 'shadow-[0_0_30px_rgba(0,176,80,0.15)]' : ''}`}
                >
                  <CardContent className="p-6 pt-8 flex flex-col h-full">
                    <div className="text-center pb-6 mb-6 border-b border-vetor-green/10">
                      <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                      <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                      <div className="flex items-end justify-center gap-1">
                        <span className="text-3xl font-bold text-white">{plan.price}</span>
                      </div>
                    </div>
                    
                    <div className="flex-grow mb-6">
                      <ul className="space-y-3">
                        {plan.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-vetor-green flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button 
                      className={plan.popular ? "bg-vetor-green hover:bg-vetor-darkgreen text-white w-full" : "bg-black border border-vetor-green text-vetor-green hover:bg-vetor-green/10 w-full"}
                    >
                      {plan.button}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10 text-gray-400">
            <p>Precisa de um projeto personalizado? <Link to="/contato" className="text-vetor-green hover:underline">Entre em contato</Link> para uma proposta sob medida.</p>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,176,80,0.1)_0,transparent_50%)]"></div>
        
        <motion.div 
          className="container mx-auto px-4 md:px-6 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isCtaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-black to-vetor-black/80 backdrop-blur-md border border-vetor-green/10 rounded-xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.3)]">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3">
                <Badge className="bg-vetor-green/10 text-vetor-green hover:bg-vetor-green/20 mb-4 py-1.5 px-4 text-xs font-medium tracking-wider">COMECE AGORA</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Pronto para transformar sua presença digital?
                </h2>
                <p className="text-gray-300 mb-6">
                  Desenvolva um site profissional que converte visitantes em clientes e impulsiona o crescimento do seu negócio.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-vetor-green hover:bg-vetor-darkgreen text-white gap-2 group"
                  >
                    <span>Solicitar Orçamento</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Link to="/contato">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-vetor-green/30 text-vetor-green hover:bg-vetor-green/10 w-full sm:w-auto"
                    >
                      Falar com Especialista
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="md:w-1/3 flex justify-center">
                <div className="relative w-40 h-40">
                  <div className="absolute inset-0 bg-vetor-green/20 rounded-full blur-3xl"></div>
                  <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-vetor-green/20 to-vetor-green/5 flex items-center justify-center">
                      <HeartHandshake className="w-14 h-14 text-vetor-green" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-vetor-green/10 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-vetor-green/10 flex items-center justify-center flex-shrink-0">
                  <Headphones className="w-5 h-5 text-vetor-green" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Suporte Contínuo</h4>
                  <p className="text-sm text-gray-400">Assistência técnica especializada</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-vetor-green/10 flex items-center justify-center flex-shrink-0">
                  <ClipboardCheck className="w-5 h-5 text-vetor-green" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Qualidade Garantida</h4>
                  <p className="text-sm text-gray-400">Satisfação 100% garantida</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-vetor-green/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-vetor-green" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Entrega Rápida</h4>
                  <p className="text-sm text-gray-400">Projetos entregues no prazo</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

// Missing component imports for e-commerce and institutional tabs
const Shopping = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
);

const CreditCard = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
);

const TruckFast = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M10 17h4V5H2v12h3"/><path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5"/><path d="M14 17h1"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>
);

const Percent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><line x1="19" x2="5" y1="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>
);

const FileImage = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><circle cx="10" cy="13" r="2"/><path d="m20 17-1.09-1.09a2 2 0 0 0-2.82 0L10 22"/></svg>
);

const EarthIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
);

export default WebsiteBenefits;
